Ext.application({
    name: 'kdApp',
    views: ['Login','MainMenu','ReadDiary','Settings','ContactsMain'],
    controllers:['Login','Application'],
	stores: ['Contacts'],
	models: ['Contact'],
	launch: function () {
        Ext.create('Ext.TabPanel', {
            fullscreen: true,
            tabBarPosition: 'bottom',

            defaults: {
                styleHtmlContent: true
            },

            items: [{
                title: 'Home',
                iconCls: 'home',
                html: 'Home Screen'
            }, 
			{
				xtype: 'mainmenuview',
				title: 'Write',
				iconCls: 'compose',
			}, 
			{
				xtype: 'readdiaryview',
				title: 'Read',
				iconCls: 'organize',
			},
			{
                xtype:'loginview',
				title: 'Profile',
                iconCls: 'user',
            },
			{
                xtype: 'settingsview',
                iconCls: 'settings',
                title: 'settings'
            },{
                xtype: 'contactsview',
                iconCls: 'user',
                title: 'Contacts'
            },
			{			
                iconCls: 'icnHom',
			}
			]
        });
    } // launch

});

