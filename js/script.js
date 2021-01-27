var squadra1 = new Vue({
  el: '#team1',
  data: {
    counter: 0,
    immagini: [
      'img/inter.png',
      'img/milan.png',
      'img/juventus.png',
      'img/roma.png'
    ],
    nome:[
      'Inter',
      'Milan',
      'Juventus',
      'Roma'
    ]
  },
  methods: {
    // Squadra successiva
    nextTeam(){
      if (this.counter == this.immagini.length - 1) {
        this.counter = 0;
      }
      else {
        this.counter++;
      }
      console.log(this.counter);
    },
    prevTeam(){

      if (this.counter < 1) {
        this.counter = 3;
      }
      else {
        this.counter--;
      }
    },
    cambiaImg(indice){
      this.counter = indice;
    }
  }
})
var squadra2 = new Vue({
  el: '#team2',
  data: {
    counter: 0,
    immagini: [
      'img/inter.png',
      'img/milan.png',
      'img/juventus.png',
      'img/roma.png'
    ],
    nome:[
      'Inter',
      'Milan',
      'Juventus',
      'Roma'
    ]
  },
  methods: {
    // Squadra successiva
    nextTeam(){
      if (this.counter == this.immagini.length - 1) {
        this.counter = 0;
      }
      else {
        this.counter++;
      }
      console.log(this.counter);
    },
    prevTeam(){

      if (this.counter < 1) {
        this.counter = 3;
      }
      else {
        this.counter--;
      }
    },
    cambiaImg(indice){
      this.counter = indice;
    }

  }
})
