const app = Vue.createApp({

  data() {

    return {

      characters: 'abcdefghijklmnopqrstuvwxyz',

      numbers: '0123456789',

      symbols: '@#$&_-()=%"*{}<>',

      passwordLength: 5,

      includeSymbols: false,

      includeLetters: true,

      includeNumbers: false,

      password: 'Start generating :)',

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

      

      if (availableCharacters.length === 0) {

        return;

      }

      

      for (let i = 0; i < this.passwordLength; i++) {

        const randomCharacterIndex = Math.floor(Math.random() * availableCharacters.length);

        const randomCharacter = availableCharacters[randomCharacterIndex];

        this.password += randomCharacter;

      }

    },async CopyPassword(){

     

     try {

      await navigator.clipboard.writeText(this.password);

      

     } catch (e) {

      alert(e)

     }

    }

  },

}).mount('#app');

 
