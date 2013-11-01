Ext.define('kdApp.view.MainMenu', {
    extend: 'Ext.Panel',
    requires: ['Ext.TitleBar'],
    alias: 'widget.mainmenuview',
    config: {
        /*layout: {
            type: 'fit'
        },*/
        items: [{
            xtype: 'titlebar',
            //title: 'Main Menu',
            docked: 'top',
            items: [
                
				// {
                    // xtype: 'button',
                    // text: 'Menu',
                    // itemId: 'mainMenu',
                    // align: 'left'
                // }
				{ 
					iconCls: 'arrow_left' ,
					align: 'left'
					
				},
				// {
                    // xtype: 'button',
                    // text: 'Log Off',
                    // itemId: 'logOffButton',
                    // align: 'right'
                // }, 
				{ 
				   iconCls: 'user',
				   align: 'right'
				},
            ]
        },
		{
                xtype: 'label',
                html: 'Diary',
		},
		
		{
                    xtype: 'textareafield',
                    maxRows: 4,
                    name: 'bio'
                },
		
		{
            xtype: 'titlebar',
            docked: 'bottom',
            items: [
                
				
				{ 
					iconCls: 'compose',	
					align: 'left'					
				},
				{
                    xtype: 'button',
                    text: 'Read',
                    itemId: 'writeId',
                    align: 'right'
                },				
				
            ]
        },
		
		],
        listeners: [{
            delegate: '#logOffButton',
            event: 'tap',
            fn: 'onLogOffButtonTap'
        },{
            delegate: '#refresh',
            event: 'tap',
            fn: 'onRefreshButtonTap'
        }]
    },
    onLogOffButtonTap: function () {
        this.fireEvent('onSignOffCommand');
    },
	onLogOffButtonTap: function () {
        this.fireEvent('onSignOffCommand');
    }
});