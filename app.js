Ext.application({
    name: 'kdApp',
    views: ['Login','MainMenu'],
    controllers:['Login'],
    launch: function () {
        Ext.Viewport.add([
            { xtype: 'loginview' },
            { xtype: 'mainmenuview' }
        ]);
    }
});

