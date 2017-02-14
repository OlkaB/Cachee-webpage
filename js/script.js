"use strict";

//sticky nav
$(document).ready(function(){
      $(window).scroll(function() { 
        if ($(document).scrollTop() > 50) {
          $(".navbar-fixed-top").css("background-color", "#f9f8fb");
        } else {
          $(".navbar-fixed-top").css("background-color", "transparent");
        }
      });
    });
