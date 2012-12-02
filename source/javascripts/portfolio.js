var api;
var readMode = false;

$(document).ready(function() {
    $(".full_description").hide();
    $("#mask").hide();
    $("#reader_container").hide();


    function init() {
        cont = $("#reader_container");
        rdr = $("#reader");
        ww = $(window).width();
        wh = $(window).height();

        if (ww >= 1440)
            tw = 950;
        else if (ww >= 1280)
            tw = 875;
        else
            tw = 825;

        if (ww < tw + 100) {
            tw = ww -40 -20;
        }

        left = (ww - tw) / 2;
        cont.css("width", tw);
        cont.css("left", left);
        rdr.css("width", tw - 145);

        if (ww < 600) {
            $(".img_container").hide();
            $("#reader").css("padding", "60px 20px");
            cont.css("width", tw + 80);
            rdr.css("width", tw - 145 + 80);
        } else {
            $(".img_container").show();
            $("#reader").css("padding", "80px 60px");
        }
    }

    init();

    function adjust() {

        init();

        jspcont = $(".jspContainer");
        jsppane = $(".jspPane");

        jsppane.css("width", tw-1);
        jspcont.css("width", tw-1);
        jspcont.width(tw-1);

        track = $(".jspTrack");
        drag = $(".jspDrag");
        track.css("height", wh-40);
        track.css("margin-top", "20px");
        drag.css("height", drag.height() - 40);

    }


    $(".zoom").hide();
//    $(".project").hover( function() {
//        $(this).children(".zoom").fadeIn();
//    }, function() {
//        $(this).children(".zoom").hide();
//    });

    $("#close").hide();

    $(".project").click( function() {
        content = $(this).children(".content").html();
        content += "<br/>";
        content += $(this).children(".full_description").html();
        $("#reader").html(content);
        $("#mask").fadeIn()
        $("#reader_container").scrollTop(0);
        $("#reader_container").css("top", $(window).height() + 40);
        $("#reader_container").show();
        init();
        $("#reader_container").animate({"top": 0}, 400, "linear", function() {
            api = $("#reader_container").jScrollPane().data("jsp");
            adjust();
            readMode = true;
        });
        $("body").css("overflow", "hidden");
        $("html").css("overflow", "hidden");
        $("#close").fadeIn();
    });

    $(window).resize( function() {
            $("#close").fadeOut();
            init();
            api = $("#reader_container").jScrollPane().data("jsp");
            adjust();
            drag = $(".jspDrag");
            drag.css("height", drag.height() + 40);
            if (readMode == true) {
                $("#reader").html("");
                $("#reader_container").scrollTop(0);
                api.scrollToY(0);
                drag = $(".jspDrag");
                drag.css("height", drag.height() + 40);
                $("#reader_container").hide();
                $("#mask").hide();
                $("body").css("overflow", "");
                $("html").css("overflow", "");
                readMode = false;
            }

    });

    $("#mask, #close").click( function() {
        readMode = false;
        $("#close").fadeOut();
        $("#reader_container").animate({"top": $(window).height() + 40}, 400, "linear", function() {
            $("#reader").html("");
            $("#reader_container").scrollTop(0);
            api.scrollToY(0);
            drag = $(".jspDrag");
            drag.css("height", drag.height() + 40);
            $("#reader_container").hide();
        });

        $("#mask").fadeOut();
        $("body").css("overflow", "");
        $("html").css("overflow", "");
    });
});

