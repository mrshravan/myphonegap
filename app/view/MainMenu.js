Ext.define('Sample.view.MainMenu', {
    extend: 'Ext.Panel',
    requires: ['Ext.TitleBar'],
    alias: 'widget.mainmenuview',
    config: {
        /*layout: {
            type: 'fit'
        },*/
        items: [{
            xtype: 'titlebar',
            title: 'Main Menu',
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'Log Off',
                    itemId: 'logOffButton',
                    align: 'right'
                }
            ]
        },
		{
            xtype: 'button',
            text: 'Write Diary',
            itemId: 'writeDiary',
            //align: 'center'
			padding: '10px',
        },
		{
            xtype: 'button',
            text: 'Read Diary',
            itemId: 'readDiary',
			padding: '10px',
            //align: 'center'
        }
		
		],
        listeners: [{
            delegate: '#logOffButton',
            event: 'tap',
            fn: 'onLogOffButtonTap'
        }]
    },
    onLogOffButtonTap: function () {
        this.fireEvent('onSignOffCommand');
    }
});