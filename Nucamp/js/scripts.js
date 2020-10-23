$(function(){
    $(".carousel").carousel( {interval: 2000, pause: "false"} );          //NOTE jQuery .children looks for children; .hasClass looks for classes
    $("#carouselButton").click(function(){                              //NOTE use bootstrap provided jquery method "carousel" with the argument of pause to pause it 
        if ($("#carouselButton").children("i").hasClass("fa-pause")){   //check if the button has a child node i with a class fa-pause
            $(".carousel").carousel("pause");                          //if it has a pause button, then we know carousel is playing so we pause carousel
            $("#carouselButton").children("i").removeClass("fa-pause");//.children, .remove, .add classes from jQuery to swap out icon
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa fa-play");
            $("#carouselButton").children("i").addClass("fa fa-pause");
        }
    });
});