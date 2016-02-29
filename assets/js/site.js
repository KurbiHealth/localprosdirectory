$( document ).ready(function() {
   
   // GENERAL ACCORDION SCRIPT
   $(function(a) {
     var allAccordions = $('.accordion .accordion-content');
     var allAccordionItems = $('.accordion .accordion-title');
     var allIcons = $('.accordion .accordion-title i.fa');
     $('.accordion > .accordion-container .accordion-title').click(function() {
       if($(this).hasClass('open'))
       {
         $(this).removeClass('open');
         $(this).next().slideUp("normal");
         $(this).children('i.fa').removeClass('fa-chevron-circle-up');
         $(this).children('i.fa').addClass('fa-chevron-circle-down');
       }
       else
       {
       allAccordions.slideUp("normal");
       allAccordionItems.removeClass('open');
       allIcons.removeClass('fa-chevron-circle-up');
       allIcons.addClass('fa-chevron-circle-down');
       $(this).addClass('open');
       $(this).next().slideDown("normal");
       $(this).children('i.fa').removeClass('fa-chevron-circle-down');
       $(this).children('i.fa').addClass('fa-chevron-circle-up');
       return false;
       }
     });
   });
      
});