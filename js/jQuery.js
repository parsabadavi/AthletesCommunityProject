$(document).ready(function () {
  // Menu
  $("#mainMenu").fadeOut();
  $(".menuTrigger").hover(function () {
    $("#mainMenu").fadeIn("fast");
  });
  $("#mainMenu").mouseleave(function () {
    $("#mainMenu").fadeOut("fast");
  });

  // AOS PlugIn
  AOS.init({
    duration: 1200,
    delay: 300,
  });
  // counter
  var a = 0;
  $(window).scroll(function () {
    var oTop = $("#counter").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $(".counter-value").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 3000,
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
      });
      a = 1;
    }
  });
  // GalleryDivs Sizing
  $(".GalleryDiv2 , .GalleryDiv3").mouseenter(function () {
    $(this).css("width", "50%");
    $(".GalleryDiv1").css("width", "25%");
  });
  $(".GalleryDiv2 , .GalleryDiv3").mouseleave(function () {
    $(this).css("width", "25%");
    $(".GalleryDiv1").css("width", "50%");
  });
  //GalleryDivs LayOut
  $(".GalleryDiv2").mouseenter(function(){
        $("#GalleryOverlayID2").addClass("GalleryOverlayActive");
        $("#GalleryOverlayTextID2").addClass("GalleryOverlayActiveText");
        $("#GalleryOverlayTextID2").css({
          transform : "translate(-50%,-50%) rotate(0deg)",
          color : "white"
        }); 
        $("#GalleryOverlayID1").addClass("GalleryOverlay");
        $("#GalleryOverlayID1").removeClass("GalleryOverlayActive");
        $("#GalleryOverlayTextID1").addClass("GalleryOverlayText");
        $("#GalleryOverlayTextID1").removeClass("GalleryOverlayActiveText");
  });
  $(".GalleryDiv2").mouseleave(function () {
        $("#GalleryOverlayID2").removeClass("GalleryOverlayActive");
        $("#GalleryOverlayTextID2").removeClass("GalleryOverlayActiveText");
        $("#GalleryOverlayTextID2").css({
          transform: "translate(-50%,-50%) rotate(90deg)",
          color: "black"
        }
        );
        $("#GalleryOverlayID1").removeClass("GalleryOverlay");
        $("#GalleryOverlayID1").addClass("GalleryOverlayActive");
        $("#GalleryOverlayTextID1").removeClass("GalleryOverlayText");
        $("#GalleryOverlayTextID1").addClass("GalleryOverlayActiveText");
  });
  
  $(".GalleryDiv3").mouseenter(function () {
      $("#GalleryOverlayID3").addClass("GalleryOverlayActive");
      $("#GalleryOverlayTextID3").addClass("GalleryOverlayActiveText");
      $("#GalleryOverlayTextID3").css({
        transform: "translate(-50%,-50%) rotate(0deg)",
        color: "white",
      });
      $("#GalleryOverlayID1").addClass("GalleryOverlay");
      $("#GalleryOverlayID1").removeClass("GalleryOverlayActive");
      $("#GalleryOverlayTextID1").addClass("GalleryOverlayText");
      $("#GalleryOverlayTextID1").removeClass("GalleryOverlayActiveText");
  });
  $(".GalleryDiv3").mouseleave(function () {
      $("#GalleryOverlayID3").removeClass("GalleryOverlayActive");
      $("#GalleryOverlayTextID3").removeClass("GalleryOverlayActiveText");
      $("#GalleryOverlayTextID3").css({
        transform: "translate(-50%,-50%) rotate(90deg)",
        color: "black",
      });
      $("#GalleryOverlayID1").removeClass("GalleryOverlay");
      $("#GalleryOverlayID1").addClass("GalleryOverlayActive");
      $("#GalleryOverlayTextID1").removeClass("GalleryOverlayText");
      $("#GalleryOverlayTextID1").addClass("GalleryOverlayActiveText");
  });

  
});