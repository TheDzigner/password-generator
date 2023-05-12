const app = Vue.createApp({

  data() {

    return {

      characters: 'abcdefghijklmnopqrstuvwxyz',

      capitalLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',

      numbers: '0123456789',

      symbols: '@#$&_-()=%"*{}<>',

      passwordLength: 5,

      includeSymbols: false,

      includeLetters: true,

      includeNumbers: false,

      includeCapitalLetters: false,

      showHistory : false, 

      password : '', 

      history: JSON.parse(localStorage.getItem('data') || '[]')

    };

  },

  methods: {

    settingPasswordLength(e) {

      this.passwordLength = e.target.value;

    },

    generatingPasswords() {

      this.password = '';

      let availableCharacters;

      if (this.includeLetters) {

        availableCharacters = this.characters;

      } else {

        availableCharacters = '';

      }

      if (this.includeSymbols) {

        availableCharacters += this.symbols;

      }

      if (this.includeNumbers) {

        availableCharacters += this.numbers;

      }

      if (this.includeCapitalLetters) {

        availableCharacters += this.capitalLetters;

      }

      if (availableCharacters.length === 0) {

        return;

      }

      for (let i = 0; i < this.passwordLength; i++) {

        const randomCharacterIndex = Math.floor(Math.random() * availableCharacters.length);

        const randomCharacter = availableCharacters[randomCharacterIndex];

        this.password += randomCharacter;

      }

    },

    async copyPassword() {

      try {

        await navigator.clipboard.writeText(this.password);

        alert('Password copied');

        const copiedPassword = {

          password: this.password,

          time: new Date().toLocaleTimeString(),

          date: new Date().toLocaleDateString(),

        };

        this.history.push(copiedPassword);

        localStorage.setItem('data', JSON.stringify(this.history));

      } catch (error) {

        alert(error.message);

      }

    },

    toggleHistory(e){

     this.showHistory = !this.showHistory

    }

  },

}).mount('#app');

