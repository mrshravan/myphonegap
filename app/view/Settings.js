Ext.define('kdApp.view.Settings', {
    extend: 'Ext.Panel',
    requires: ['Ext.TitleBar'],
    alias: 'widget.settingsview',
	
    config: {
        items: [
		{
            xtype: 'titlebar',
            docked: 'top',
            items: [
				{ 
					xtype: 'label',
					html: '<font size=2>Settings</font>',
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
			maxRows: 10,
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