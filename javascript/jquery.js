jQuery(document).ready(function(){
    if(window.innerWidth )  {
      jQuery('.menu').click(function(){
        jQuery(this).parents('a').toggleClass('active')
      })
      jQuery('nav > ul > li > a ').click(function(){
        e.preventDefault();
        jQuery(this).parents('li').toggleClass('active')
      })
    }
  })