/*
Ext.application({
    name: 'Sample',
    views: ['Login'],
    launch: function () {

        Ext.Viewport.add([
            { xtype: 'loginview' }
        ]);
    }
});

*/

Ext.application({
    name: 'Sample',
    views: ['Login','MainMenu'],
    controllers:['Login'],
    launch: function () {
        Ext.Viewport.add([
            { xtype: 'loginview' },
            { xtype: 'mainmenuview' }
        ]);
    }
});

