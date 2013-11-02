Ext.define('kdApp.view.ReadDiary', {
    extend: 'Ext.NavigationView',
    alias: 'widget.readdiaryview',
	fullscreen: true,

    config: {
		items: [{
				title: 'Read Diary',
                items: [{
                    xtype: 'button',
                    text: 'Push a new view!',
                    handler: function () {
                        //use the push() method to push another view. It works much like
                        //add() or setActiveItem(). it accepts a view instance, or you can give it
                        //a view config.
						alert('test');
                        // view.push({
                            // title: 'Second',
                            // html: 'Second view!'
                        // });
                    }
                }]
            }]
    }//config
	
            
    
});