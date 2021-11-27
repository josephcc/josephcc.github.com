function bindBibtexQtips() {
 $('.bibtex').each(function(){
  $(this).qtip({
   content: $(this).attr("bibtex"),
   show: 'click',
   hide: { when: { event: 'unfocus' } },


   style: {
    width: 600,
    name: 'green',
    tip: 'topLeft'
   },

   position: {
    corner: {
                    target: 'topRight',
                    tooltip: 'leftTop'
    }
   },
  api: {
           onShow: function() {
               hit = $(this).attr('id');
               $('.bibtex').each(function(index){
                   if (''+index == hit) {
                       ref = $(this).qtip('api').elements.target.attr('id');
                       _gaq.push(['_trackEvent', 'Publication', 'Bibtex', ref]);
                       //alert(index + ' : ' + $(this).qtip('api').elements.target.attr('id'));
                   }
               });


        }
       }
  });
 });

}
