Ext.define('kdApp.store.Contacts', {
    extend: 'Ext.data.Store',

    config: {
        model: 'kdApp.model.Contact',
        autoLoad: true,
        sorters: 'firstName',
        grouper: {
            groupFn: function(record) {
                return record.get('lastName')[0];
            }
        },
        // proxy: {
            // type: 'ajax',
            // url: 'contacts.json'
        // }
		data:[
				{
					"firstName": "Berny",
					"lastName": "Beahan",
					"title": "Global Response Facilitator",
					"city": "Amsterdam",
					"state": "North Holland",
					"country": "Netherlands",
					"headshot": "1.jpeg",
					"telephone": "+1 (650) 555 1212",
					"latitude": "52.370216",
					"longitude": "4.895168"
				},
				{
					"firstName": "Henderson",
					"lastName": "Auer",
					"title": "Customer Configuration Coordinator",
					"city": "Palo Alto",
					"state": "California",
					"country": "USA",
					"headshot": "2.jpeg",
					"telephone": "+1 (650) 555 1212",
					"latitude": "37.441883",
					"longitude": "-122.143019"
				}
			]
    }
});
