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
                
				{
                    xtype: 'button',
                    text: 'Menu',
                    itemId: 'mainMenu',
                    align: 'left'
                },
				{
                    xtype: 'button',
                    text: 'Log Off',
                    itemId: 'logOffButton',
                    align: 'right'
                }, 
				{ 
				   iconCls: 'user',
				   align: 'right'
				},
            ]
        },
		{
		  xtype:'spacer',
		  padding: '5px'
		},		
		{
            xtype: 'button',
            text: 'Write Diary',
            itemId: 'writeDiary',
            align: 'center'
			//padding: '10px',
        },
		{
		  xtype:'spacer',
		  padding: '5px'
		},
		{
            xtype: 'button',
            text: 'Read Diary',
            itemId: 'readDiary',
			//padding: '10px',
            align: 'center'
        },
		{
            xtype: 'titlebar',
            docked: 'bottom',
            items: [
                { 
					iconCls: 'arrow_left' ,
					align: 'left'
					
				},
				{ 
					iconCls: 'refresh',
					itemId: 'refresh',
				},
				{ 
					iconCls: 'home',				
				},
				{ 
					iconCls: 'compose',				
				},
				{ 
					iconCls: 'settings',				
				},
                { 
					iconCls: 'more',
					align: 'right'
				}
				
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