# BCMA ARG 工具

## spectrogram.py

频谱图音频生成器。生成一段 WAV 音频，在 Audacity 或 Sonic Visualiser 中以频谱图模式查看时会显示隐藏文字。

### 用法

```bash
python spectrogram.py "YOUR-HIDDEN-MESSAGE" output.wav
```

### 部署步骤

1. 运行脚本生成音频文件
2. 将生成的 `.wav` 文件上传到夸克网盘
3. 获取夸克网盘分享链接
4. 将分享链接 Base64 编码（可用 [base64encode.org](https://www.base64encode.org/)）
5. 更新 `src/pages/Console.tsx` 中的 base64 字符串（搜索 `aHR0cHM6Ly9wYW4ucXVhcmsuY24vcy9iY21hLXRlc3Q=`）

### 验证音频

在 [Audacity](https://www.audacityteam.org/) 中打开 WAV 文件：
- 点击音频轨道左上角的轨道名称
- 选择 "频谱图" (Spectrogram)
- 即可看到隐藏文字
