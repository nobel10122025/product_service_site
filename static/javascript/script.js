$ (document).ready(function() {
   $("#title").addClass("animate__animated animate__fadeInDown");

   /*animation on scroll*/

   /*$(window).scroll(function() {
        if ($(window).scrollTop() > 1250) {
            $(".js-pricing").addClass("animate__animated animate__fadeIn");
            console.log("hola")
        }
    });*/
    $("#demo").waypoint(function(direction){
        $("#demo").addClass("animate__animated animate__fadeIn");
    },{ offset: '80%' });

    $("#pricing").waypoint(function(direction){
        $(".js-pricing").addClass("animate__animated animate__zoomIn");
    },{ offset: '60%' });
    

});
