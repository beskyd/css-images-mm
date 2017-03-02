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