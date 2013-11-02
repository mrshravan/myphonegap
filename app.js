Ext.application({
    name: 'kdApp',
    views: ['Login','MainMenu','ReadDiary','Settings'],
    controllers:['Login'],
    // launch: function () {
        // Ext.Viewport.add([
            // { xtype: 'loginview' },
            // { xtype: 'mainmenuview' }
        // ]);
    // }
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
            },
			{			
                iconCls: 'icnHom',
			}
			]
        });
    } // launch

});

