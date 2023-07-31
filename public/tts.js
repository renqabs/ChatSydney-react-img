const synth = window.speechSynthesis
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
export class TTS {
  currentText = ''
  speakText = ''
  controller = new AbortController()
  speaking = false
  get isSpeaking() {
    console.log('get speak', this.speaking)
    return this.speaking
  }
  finished = false
  constructor() {}
  abort = () => {
    this.controller.abort()
  }

  reset = () => {
    this.speaking = false
    this.finished = true
    this.currentText = ''
    this.speakText = ''
    this.abort()
  }

  speak = (text) => {
    if (!synth || text?.trim()?.length < 2) {
      return
    }
    const lines = text.split('\n');
    const filteredLines = lines.filter(line => !line.includes(']: http'));
    const cleanedText = filteredLines.join('\n').replace(/\[\^\d+\^\]/g, '').replace(/\[\d+\]/g, '').replace(/\n!\[image\d\]\(.*?\)/g, '');
    this.currentText = cleanedText.replace(/[^\u4e00-\u9fa5_a-zA-Z0-9，。？,：.,:?（）！()!~\n]+/g, '')
    this.finished = false;
    this.loop();
  }

  async doSpeek() {
    return new Promise((resolve) => {
      const endIndex = this.finished ? this.currentText.length :
        Math.max(this.currentText.lastIndexOf('。'), this.currentText.lastIndexOf('？'), this.currentText.lastIndexOf('\n'), this.currentText.lastIndexOf('）'))
      const startIndex = this.speakText.length ? Math.max(0, this.currentText.lastIndexOf(this.speakText) + this.speakText.length) : 0

      if (startIndex >= endIndex) {
        return resolve(true)
      }
      const text = this.currentText.slice(startIndex, endIndex)
      this.speakText = text
      const utterThis = new SpeechSynthesisUtterance(text)
      this.controller.signal.onabort = () => {
        synth.cancel()
        this.finished = true
        resolve(false)
      }

      utterThis.onend = function (event) {
        resolve(true)
      }

      utterThis.onerror = function (event) {
        resolve(false)
      }

      const voice = synth.getVoices().find(v => v.name.includes('Microsoft Xiaoyi Online')) ?? null
      utterThis.voice = voice
      synth.speak(utterThis)
    })
  }

  async loop() {
    if (this.speaking) return
    this.speaking = true
    while(!this.finished) {
      await Promise.all([sleep(1000), this.doSpeek()])
    }
    this.speaking = false
  }
}