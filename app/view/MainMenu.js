Ext.define('kdApp.view.MainMenu', {
    extend: 'Ext.Panel',
    requires: ['Ext.TitleBar'],
    alias: 'widget.mainmenuview',
	
    config: {
        items: [
		{
            xtype: 'titlebar',
            docked: 'top',
            items: [
				{ 
					xtype: 'label',
					html: '<font size=2>Write diary</font>',
				},
				{ 
					xtype: 'button',
					align: 'right',
					ui: 'round',
					// iconCls: 'add',
					html: '<font size=2>add</font>'
				},
            ]
        },
		{
			xtype: 'textareafield',
			maxRows: 3,
			name: 'bio'
		}
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