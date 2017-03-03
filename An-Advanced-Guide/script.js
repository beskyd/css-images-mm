var desk = new Vue({
  el: "#desk",
  data: {
    showDesk: true,
    stickyTextYellow: '',
    stickyTextRed: '',
    screenLogo: "http://apple-wholesale-store.com/wp-content/uploads/2017/01/Apple_Logo_Solid_White-1.png"
  },
  methods: {
    processSticky: function(selection) {
      if (selection === 1) {
        this.showDesk = false;
        stickyRed.showStickyRed = true;
      } else if (selection === 2) {
        this.showDesk = false;
        stickyYellow.showStickyYellow = true
      }
    },
    processGameboy: function() {
      this.showDesk = false;
      gameboy.showGameboy = true;
    }
  }
});


var stickyYellow = new Vue({
  el: "#stickyYellow",
  data: {
    showStickyYellow: false,
    stickyText: ''
  },
  methods: {
    processText: function() {
      desk.stickyTextYellow = this.stickyText
      this.showStickyYellow = false;
      desk.showDesk = true;
    }
  }
});


var stickyRed = new Vue({
  el: "#stickyRed",
  data: {
    showStickyRed: false,
    stickyText: ''
  },
  methods: {
    processText: function() {
      desk.stickyTextRed = this.stickyText;
      this.showStickyRed = false;
      desk.showDesk = true;
    }
  }
});


var gameboy = new Vue({
  el: "#gameboy",
  data: {
    showGameboy: false,
    on: false,
    screenLogo: "http://lparchive.org/Pokemon-Blue/Update%2001/1-capture_02042010_120644.png"
  },
  methods: {
    startGameboy: function() {
      this.on = true;
    },
    backToDesk: function() {
      this.showGameboy = false;
      desk.showDesk = true;
    }
  }
});