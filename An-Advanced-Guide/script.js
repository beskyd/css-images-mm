var desk = new Vue({
  el: "#desk",
  data: {
    showDesk: true,
    screenLogo: "http://apple-wholesale-store.com/wp-content/uploads/2017/01/Apple_Logo_Solid_White-1.png"
  },
  methods: {
    processSticky: function(selection) {
      if (selection === 1) {
        // same but for red sticky scene
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
      this.showStickyYellow = false;
      desk.showDesk = true;
    }
  }
});