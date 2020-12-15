class Nav {
    constructor() {
        this.bunGame = $(".bungame");
        this.home = $(".home");
        this.play = $(".play");
        this.makeNavOpen();
    }

    makeNavOpen() {
        this.bunGame.mouseover(function() {
            $(".div-bungame").addClass("nav-back");
        });
        this.bunGame.mouseleave(function() {
            $(".div-bungame").removeClass("nav-back");
        });
        this.home.mouseover(function() {
            $(".div-home").addClass("nav-back");
        });
        this.home.mouseleave(function() {
            $(".div-home").removeClass("nav-back");
        });
        this.play.mouseover(function() {
            $(".div-play").addClass("nav-back");
        });
        this.play.mouseleave(function() {
            $(".div-play").removeClass("nav-back");
        });
    }
}

$(document).ready(async () => {
    new Nav();
});