"""BCMA ARG - 频谱图音频生成器
在当前目录下生成一个 WAV 文件，当以频谱图查看时会显示隐藏文字。

用法:
    python spectrogram.py "ECHO-RESPONSE-SEND-CODE-7742" output.wav

依赖: numpy, Pillow
"""

import sys
import math
import struct
import wave
import numpy as np
from PIL import Image, ImageDraw, ImageFont


def text_to_spectrogram(text: str, width: int = 800, height: int = 512) -> np.ndarray:
    """将文字渲染为图像，作为频谱图。"""
    img = Image.new("L", (width, height), 255)
    draw = ImageDraw.Draw(img)

    font_size = min(42, height // 6)
    try:
        font = ImageFont.truetype("simsun.ttc", font_size)
    except OSError:
        try:
            font = ImageFont.truetype("arial.ttf", font_size)
        except OSError:
            font = ImageFont.load_default()

    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    x = (width - tw) // 2
    y = (height - th) // 2

    draw.text((x, y), text, fill=0, font=font)
    arr = np.array(img, dtype=np.float64)
    arr = 1.0 - arr / 255.0
    return arr


def spectrogram_to_audio(
    spec: np.ndarray,
    sample_rate: int = 44100,
    frame_duration: float = 0.04,
) -> np.ndarray:
    """将频谱图转换为音频（加法合成 + 重叠相加）。"""
    n_freq = spec.shape[0]
    n_frames = spec.shape[1]
    frame_samples = int(sample_rate * frame_duration)
    step_samples = frame_samples // 2  # 50% overlap

    freq_min = 200
    freq_max = min(sample_rate // 2, 10000)
    freqs = np.linspace(freq_min, freq_max, n_freq)

    total_samples = (n_frames - 1) * step_samples + frame_samples
    audio = np.zeros(total_samples, dtype=np.float64)
    window = np.hanning(frame_samples)

    for f in range(n_frames):
        t = np.linspace(0, frame_duration, frame_samples, endpoint=False)
        frame_audio = np.zeros(frame_samples, dtype=np.float64)
        for i in range(n_freq):
            amp = spec[i, f]
            if amp > 0.01:
                freq = freqs[i]
                frame_audio += amp * np.sin(2 * math.pi * freq * t)
        frame_audio /= max(n_freq / 100, 1)
        frame_audio *= window

        start = f * step_samples
        audio[start : start + frame_samples] += frame_audio

    max_val = np.max(np.abs(audio))
    if max_val > 0:
        audio = audio / max_val * 0.8

    return audio


def save_wav(filename: str, audio: np.ndarray, sample_rate: int = 44100):
    """保存为 WAV 文件。"""
    samples = (audio * 32767).astype(np.int16)
    with wave.open(filename, "w") as wf:
        wf.setnchannels(1)
        wf.setsampwidth(2)
        wf.setframerate(sample_rate)
        wf.writeframes(samples.tobytes())


def main():
    text = sys.argv[1] if len(sys.argv) > 1 else "BCMA-ECHO-TEST-077"
    output = sys.argv[2] if len(sys.argv) > 2 else "bcma_echo_test.wav"

    print(f"文字: {text}")
    print(f"生成频谱图中...")
    spec = text_to_spectrogram(text, width=800, height=512)

    print(f"合成音频中...")
    audio = spectrogram_to_audio(spec)

    print(f"保存到: {output}")
    save_wav(output, audio)

    print(f"\n音频时长: {len(audio)/44100:.1f}秒")
    print("在 Audacity 中打开此文件, 切换到频谱图视图即可看到隐藏文字。")
    print(f"或在 Sonic Visualiser 中打开, 选择 Layer → Add Spectrogram。")


if __name__ == "__main__":
    main()
