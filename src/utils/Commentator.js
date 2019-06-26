const FAVORITE_ENGINE = 5; // Male English (Chrome)

export default class Commentator {
  constructor () {
    speechSynthesis.addEventListener('voiceschanged', () => {
      this.voiceEngine = speechSynthesis.getVoices()[FAVORITE_ENGINE];
    });

    addEventListener('keydown', (event) => {
      if (event.key === 's') {
        this.changeEngine();
      }
    });
  }

  speak (text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en';
    utterance.voice = this.voiceEngine || null;
    speechSynthesis.speak(utterance);
  }

  changeEngine (engine = ~~(Math.random() * speechSynthesis.getVoices().length)) {
    this.voiceEngine = speechSynthesis.getVoices()[engine];
    console.log('Change engine to ', this.voiceEngine.name);
  }
}
