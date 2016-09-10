// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

(function () {
   'use strict';

   /* ==============================================
  	Testimonial Slider
  	=============================================== */ 

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

  	$(document).ready(function() {
  	  $("#team").owlCarousel({
  	 
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 4],
				        [1400, 4],
				        [1600, 4]
				      ],
  	  });

  	  $("#clients").owlCarousel({
  	 
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 5],
				        [1400, 5],
				        [1600, 5]
				      ],
  	  });

      $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });

  	});

  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('#lightbox');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });



}());


}
main();

var openBox = function(id) {

  var box1 = document.getElementById("box-1");
  var box2 = document.getElementById("box-2");
  var box3 = document.getElementById("box-3");

  var buttons = document.getElementById("teacher-buttons")
  var images = buttons.getElementsByTagName('img');
  var titles = buttons.getElementsByTagName('h3');
  var lines = buttons.getElementsByTagName('hr');

  var sec3 = document.getElementById("sec3");

  if (id == 1) {
    box1.style.display = "block";
    box2.style.display = "none";
    box3.style.display = "none";
    titles[0].style.color = "#0DB575";
    titles[1].style.color = "#5A5A5A";
    titles[2].style.color = "#5A5A5A";
    images[0].style.opacity = "1";
    images[1].style.opacity = "0.5";
    images[2].style.opacity = "0.5";
    sec3.style.height = "1000px";
  } else if (id == 2) {
    box1.style.display = "none";
    box2.style.display = "block";
    box3.style.display = "none";
    titles[0].style.color = "#5A5A5A";
    titles[1].style.color = "#0DB575";
    titles[2].style.color = "#5A5A5A";
    images[0].style.opacity = "0.5";
    images[1].style.opacity = "1";
    images[2].style.opacity = "0.5";
    sec3.style.height = "1000px";
  } else {
    box1.style.display = "none";
    box2.style.display = "none";
    box3.style.display = "block";
    titles[0].style.color = "#5A5A5A";
    titles[1].style.color = "#5A5A5A";
    titles[2].style.color = "#0DB575";
    images[0].style.opacity = "0.5";
    images[1].style.opacity = "0.5";
    images[2].style.opacity = "1";
    sec3.style.height = "800px";
  }
}

var scrollToNextSection = function() {
    var x = 1;
    var y = 20;

    var scroll = setInterval(function() {
      window.scrollBy(0, x);
      x = x + 5;
      if(x == 101){
        clearInterval(scroll);
      }
    }, y);
}

var changeNavColor = function() {
  console.log("Changing color...");
}

var openTeamDetailsBox = function(id) {
  var details_box = document.getElementById("team-details");

  var images = ["img/team/01.jpg",
                "img/team/02.jpeg",
                "img/team/03.jpeg",
                "img/team/04.jpg",
                "img/team/05.jpg"];
  var names = ["Jonathan Walton",
                "Maria Lehl",
                "Cosimo Ranieri",
                "Anna Walton",
                "Diego Arespacochaga"];
  var role = ["CEO / Founder",
              "Computational Linguist",
              "Developer",
              "Psychologist and Project Manager",
              "Developer"];
  var languages = ["Native language: English. Other languages: Russian, Croatian, Hebrew, Japanese, French.",
                  "Native language: German. Other languages: Russian, English, French, Spanish",
                  "Native language: Italian. Other languages: English",
                  "Native language: English. Other languages: French and Italian",
                  "Native language: Spanish. Other languages: English and Italian"];
  var details = ["Former English teacher with 15 years’ expertise in project / product management in music, media and technology industries, working alongside clients such as EMI and Virgin.",
                 "NLP and Artificial Intelligence engineer. MSc in Computational Linguistics at Osnabrueck University, PhD candidate with a thesis on automatic generation of English language exercises. Maria has a passion for song lyrics and language exercises, and is a rare expert in this area.",
                 "Back End Developer. Five plus years’ experience with Ruby on Rails, MongoDB, MySQL.",
                 "Extensive research, scientific validation, trialling, product positioning alongside existing evidence-based and app content creation experience, specialist in child learning and motivation.",
                 "Assisting Cosimo with content addition, debugging and platform testing."];
                  
  details_box.innerHTML = "<img type='button' class='btn btn-link closeBox' src='img/close.png' width='25' onclick='closeTeamDetailsBox();'>" + 
                          "<div class='row'>" + 
                              "<div class='col-md-2'></div>" + 
                              "<div class='col-md-1'></div>" + 
                              "<div class='col-md-2'>" + 
                                "<img src='" + images[id] + "' class='img-circle team-img'>" +
                              "</div>" + 
                              "<div class='col-md-3'>" +
                                "<br>" + 
                                "<h3>" + names[id] + "</h3>" + 
                                "<h7>" + role[id] + "</h7>" + 
                              "</div>" +
                              "<div class='col-md-2'></div>" + 
                              "<div class='col-md-2'></div>" +  
                          "</div>" + 
                          "<br><br>" + 
                          "<p><strong>" + languages[id] + "</strong></p>" + 
                          "<p>" + details[id] + "</p>";

details_box.className = "showTeamBox";
}


var closeTeamDetailsBox = function() {
  var details_box = document.getElementById("team-details");
  details_box.className = "";
}


var sm = $("#sub-menu");
    sms = "sub-menu-scrolled";
    hdr = $('tf-menu').height();
    arr = $("#arrow");
    rot = "rotate-arrow";
    lnk = $(".arrow");
    sec = $("#section1");
    xtPad = "extraPadding";

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    sm.addClass(sms);
    arr.addClass(rot);
    sec.addClass(xtPad);
    lnk.attr("href", "#topSection");
  } else {
    sm.removeClass(sms);
    arr.removeClass(rot);
    sec.removeClass(xtPad);
    lnk.attr("href", "#section1");
  }

});

