function bindBibtexQtips() {
	jQuery('.bibtex').each(function(){
		jQuery(this).qtip({
			content: jQuery(this).attr("bibtex"),
			show: 'click',
			hide: { when: { event: 'unfocus' } },

			
			style: {
				width: 600,
				name: 'green',
				tip: 'topLeft',
			},

			position: {
				corner: {
					target: 'topRight',
					tooltip: 'leftTop'
				}
			}
		});
	});

}
