class Nav {
    constructor() {
        this.bunGame = $(".bungame");
        this.home = $(".home");
        this.play = $(".play");
        this.makeNavOpen();
    }

    makeNavOpen() {

        $(".div-bungame").mouseover(() => {
            $(".div-bungame").addClass("nav-back");
            $(".bungame-opened").removeClass("remove1");
        });
        $(".div-bungame").mouseleave(() => {
            if($(".bungame-check:hover").length != 0){
                $(".bungame-check").mouseleave(() => {
                    $(".bungame-opened").addClass("remove1");
                    $(".div-bungame").removeClass("nav-back");
                });
            } else{
                $(".bungame-opened").addClass("remove1");
                $(".div-bungame").removeClass("nav-back");
            };
        });
        $(".div-home").mouseover(() => {
            $(".div-home").addClass("nav-back");
            $(".home-opened").removeClass("remove1");
        });
        $(".div-home").mouseleave(() => {
            if($(".home-check:hover").length != 0){
                $(".home-check").mouseleave(() => {
                    $(".home-opened").addClass("remove1");
                    $(".div-home").removeClass("nav-back");
                });
            } else{
                $(".home-opened").addClass("remove1");
                $(".div-home").removeClass("nav-back");
            };
        });
        $(".div-play").mouseover(() => {
            $(".div-play").addClass("nav-back");
            $(".play-opened").removeClass("remove1");
        });
        $(".div-play").mouseleave(() => {
            if($(".play-check:hover").length != 0){
                $(".play-check").mouseleave(() => {
                    $(".play-opened").addClass("remove1");
                    $(".div-play").removeClass("nav-back");
                });
            } else{
                $(".play-opened").addClass("remove1");
                $(".div-play").removeClass("nav-back");
            };
        });
    }
}

const mouseOverItem = item => {
    var Jitem = $(item);
    Jitem.addClass("bold");
}

const mouseOutItem = item => {
    var Jitem = $(item);
    Jitem.removeClass("bold");
}

$(document).ready(async () => {
    new Nav();
});