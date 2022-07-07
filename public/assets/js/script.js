/*---- Sticy Header ----*/
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 200) {
    $("header").addClass("sticky-header");
  } else {
    $("header").removeClass("sticky-header");
  }
});


/*---- Backtotop ----*/
    var backtop = jQuery('.backToTop');
    var position = backtop.offset().top;
    jQuery(window).scroll(function() {
      var windowposition = jQuery(window).scrollTop();
      if (windowposition > 150) {
        backtop.addClass('active');
      }
      else {
        backtop.removeClass('active');
      }
    });
    jQuery('.backToTop').on('click',function () {
      //console.log('SSSS');
      jQuery('body,html').animate ({scrollTop: 0}, 1000);
      return false;
    });//on

/*---- Menu ----*/
jQuery(document).ready(function() {
  if (jQuery(window).width() > 991) {
      jQuery('.navigation-menu .sub-menu li .sub-menu').hide();
      jQuery(".navigation-menu .sub-menu li .menu-arrow").each(function(){
        jQuery(this).click(function(){
          if(jQuery(this).parent().hasClass('change-icon')){
            jQuery(this).parent().removeClass('change-icon');
          } else {
            jQuery(this).parent().addClass('change-icon');
          }
          jQuery(this).next().slideToggle();
        });
      });
  }//if

  if (jQuery(window).width() < 990) {
      jQuery(".arrow-down").each(function(){
        jQuery(this).click(function(){
          if(jQuery(this).parent().hasClass('change-icon')){
            jQuery(this).parent().removeClass('change-icon');
          } else {
            jQuery(this).parent().addClass('change-icon');
          }
          jQuery(this).next().slideToggle();
        });
      });
    }
    jQuery('.sub-menu').find('.arrow-down').click(function(){
       jQuery(this).closest('li.menu-item-has-children').toggleClass('submenu-active');
    });
  
    if (jQuery(window).width() > 991) {
      jQuery('.sub-menu').hover(function(){
        jQuery(this).parent('li').addClass('submenu-hover');
      },function(){
        jQuery('.navbar-nav li').removeClass('submenu-hover');
      });
    }


     jQuery(".navigation-menu button").click(function(){
      jQuery("body").addClass("open-menu");
    });//click

    jQuery(".close-icon").click(function(){
      jQuery("body").removeClass("open-menu");
    });
});

/*---- Accrodion ----*/
jQuery(function() {
  var window_w  = window.screen.width;
  jQuery('.acc__title').click(function(j) {
    
    var dropDown = jQuery(this).closest('.acc__card').find('.acc__panel');
    jQuery(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();
    var idx = jQuery('.acc__title').index(this);
  if(dropDown.is(':visible')){
    jQuery('.acc__card').eq(idx).removeClass('active');
    
  }else{
    jQuery('.acc__card').eq(idx).addClass('active');
  }
      dropDown.stop(false, true).slideToggle();
    j.preventDefault();
});
});