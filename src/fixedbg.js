/*
 * fixedBG
 * 
 *
 * Copyright (c) 2014 Nattawat Nonsung
 * Licensed under the MIT license.
 */

(function ($) {

  var setHeightToWindowSize = function(dom){
    var paddingTop = dom.css('padding-top');
    paddingTop = +paddingTop.substring(0, paddingTop.length -2);

    var paddingButtom = dom.css('padding-bottom');
    paddingButtom = +paddingButtom.substring(0, paddingButtom.length -2);

    var height = $(window).innerHeight() - paddingTop - paddingButtom
    dom.height(height);

    // el's top position
    var elTop = dom.offset().top; 
    dom.data("elTop", elTop);

    // el's bottom position
    var elBottom = elTop + height + paddingTop + paddingButtom; 
    dom.data("elBottom", elBottom);
  }

  // Collection method.
  $.fn.fixedBG = function (options) {
    var self = this;
    // Define default setting
    var settings = $.extend({
      
    }, options );

    this.each(function(){
      setHeightToWindowSize($(this));
    });

    $(window).resize(function(){
      self.each(function(){
        setHeightToWindowSize($(this));
      });
    });

    $(window).scroll(function(){
      var docViewTop = $(window).scrollTop();

      self.each(function(p){
        var elTop = $(this).data("elTop");
        var elBottom = $(this).data("elBottom");

        if ( docViewTop >= elTop && elBottom > docViewTop) {
          self.css("background-attachment", "scroll");
          // div is in the visible window
          $(this).css("background-attachment", "fixed");
        }
      });
    });
  };

}(jQuery));
