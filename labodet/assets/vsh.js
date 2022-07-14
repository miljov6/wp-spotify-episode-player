;"use strict";

let NS = {
    validateEmail: function (email){
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    },
    emailPopup: function (){
        let $footer = $("#shopify-section-footer"),
            $footer_height = $footer.height(),
            $inner = $(".section-email-popup2 .inner");

        // show .section-email-popup2 after load page
        setTimeout(function (){
            $("#shopify-section-email-popup2").addClass("slided");
        }, 600);

        // close .section-email-popup2
        $(document).on("click", ".js-close--email_popup2", function (e){
            $("body.email-popup-open").removeClass("email-popup-open");
            $("#shopify-section-email-popup2").removeClass("slided");
            e.preventDefault();
        });
    },
    emailPopup_resize: function (){
        if($(window).width() >= 768){
            if($(document).height() - ($(document).scrollTop() + $(window).height()) <= $("#shopify-section-footer").height()){
                $("#shopify-section-email-popup2").addClass("sticky_stick");
                $("#shopify-section-email-popup2").css({
                    "bottom": $("#shopify-section-footer").height() -  ( $(document).height() - ($(document).scrollTop() + $(window).height()) ) + 10 + 'px'
                });
            }else{
                $("#shopify-section-email-popup2").removeClass("sticky_stick");
                $("#shopify-section-email-popup2").removeAttr("style");
            }
        }else{
            $("#shopify-section-email-popup2").removeClass("sticky_stick");
            $("#shopify-section-email-popup2").removeAttr("style");
        }
    },
    init: function () {
        if($(window).width() >= 768){
            $('.labo-product-recommendations-slider').owlCarousel({
                loop: true,
                nav: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 3
                    }
                }

            });
        }
    }
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
	}

jQuery(window).on("load", function (){

    var popupform = getCookie("popup_form");
    var popupsession = sessionStorage['showpopup'];
    if (popupform == null || popupsession == null) {
	
    NS.emailPopup();
    NS.emailPopup_resize();
    }
	
  else {
    $("#site-overlay").hide();
    $('#shopify-section-email-popup').hide();
  }
  	
    $(window).on("resize scroll", function (e){
        NS.emailPopup_resize();
    });

    //$("#ContactForm").validate();
    $(".js-btn__form").removeClass("disabled");
    $(".js-btn__form").on('click', function (e){


        // validate First Name, Last Name, Message
        $('form input[type=text][required], form textarea[required]').each(function (i, elem){
            if($(elem).val() == ''){
                $(this).addClass("is-invalid");
            }else{
                $(this).removeClass("is-invalid");
            }
        });

        // validate Email
        if(!NS.validateEmail($("#ContactForm-email").val())){
            $("#ContactForm-email").addClass("is-invalid");
        }else{
            $("#ContactForm-email").removeClass("is-invalid");
        }

        // validate checkbox
        if(!$(".form-check .form-check-input").prop('checked')){
            $(".form-check .form-check-input").addClass("is-invalid");
        }else{
            $(".form-check .form-check-input").removeClass("is-invalid");
        }


        if(
            $("#ContactForm-first-name").val() == '' ||
            $("#ContactForm-last-name").val() == '' ||
            !NS.validateEmail($("#ContactForm-email").val()) ||
            $("#ContactForm-body").val() == '' ||
            !$(".form-check .form-check-input").prop('checked')
        ){
            return false;
        }else{
            return true;
        }
    });
    //NS.init();
    let wlh = window.location.pathname;
    console.log(wlh);

    //template-product

    /*$(".template-collection .labo-nav-side-bar .main-menu .link-item a").each(function (i, elem){
        if($(elem).attr("href").indexOf(wlh) > -1){
            if($(this).closest(".has-child").length){
                $(this).closest(".has-child").addClass("current");
            }else{
                $(this).closest("li").addClass("current");
            }
            console.log("indexOf > -1");
        }else{
            $(this).closest(".has-child").removeClass("current");
            $(this).closest("li").removeClass("current");
            console.log("indexOf < -1");
        }
    });
    if(wlh !== "/" && wlh !== "" && wlh !== " "){
        $(".template-product .labo-nav-side-bar .main-menu .link-item a").each(function (i, elem){
            if($(elem).attr("href").indexOf(wlh) > -1){
                if($(this).closest(".has-child").length){
                    $(this).closest(".has-child").addClass("current");
                }else{
                    $(this).closest("li").addClass("current");
                }
                console.log("indexOf > -1");
            }else{
                $(this).closest(".has-child").removeClass("current");
                $(this).closest("li").removeClass("current");
                console.log("indexOf < -1");
            }
        });
    }*/


});

window.addEventListener('click', function(e){   
  if (document.getElementById('shopify-section-email-popup2').contains(e.target)){
	return true;
  } else{
   document.getElementById('shopify-section-email-popup2').style.display = 'none';
   document.body.className = document.body.className.replace("email-popup-open","");
   sessionStorage['showpopup'] = 'no';
  }
});

/*
$("document").ready(function(e) {

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
	}
  var local = getCookie("local");
  var visit = sessionStorage['first_visit'];
    if(local != null || local == 'eu') {
      if(visit == null) {
      	sessionStorage['first_visit'] = 'yes';
      	document.location.href = 'en-'+local;
    }
    }
})

$(".currency-label").click(function(e){
  	function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
	}
    var local_cookie = $(this).text().trim().slice(0,-1).toLowerCase();
    setCookie("local",local_cookie,30);
   })
   */