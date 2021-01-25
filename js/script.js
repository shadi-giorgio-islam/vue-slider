var app = new Vue({
  el: '#root',
  data: {
    nome:'',
    cognome:'',
    src: 'https://wallpaperaccess.com/full/4584342.png',
    titolo: 'Vue',
    show: '',
    text: 'Apri immagine'
  },
  methods: {
    getImage(){
      if(this.show == 'active'){
        this.show = ''
        this.text = 'Apri immagine'
      }
      else{
        this.show = 'active';
        this.text = 'Chiudi immagine'
      }
    }
  }
})
