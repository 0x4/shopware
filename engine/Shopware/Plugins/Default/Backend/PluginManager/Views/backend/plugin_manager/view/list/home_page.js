
//{namespace name=backend/plugin_manager/translation}
Ext.define('Shopware.apps.PluginManager.view.list.HomePage', {
    extend: 'Ext.container.Container',
    alias: 'widget.plugin-manager-home-page',
    cls: 'plugin-manager-listing-page plugin-manager-home-page',

    autoScroll: true,

    initComponent: function () {
        var me = this;

        me.content = Ext.create('Ext.container.Container', {
            padding: '30 0 0',
            items: [
                { xtype: 'component', cls: 'headline', html: '{s name="store_newcomer"}{/s}' },
                me.createNewcomerListing(),
                { xtype: 'component', cls: 'headline', html: '{s name="ready_for_integration"}{/s}' },
                me.createDummyListing()
            ]
        });

        me.items = [me.content];

        me.callParent(arguments);
    },

    displayContent: function () {
        var me = this;
        this.content.show();
    },

    hideContent: function () {
        var me = this;
        me.content.hide();
    },

    createNewcomerListing: function () {
        var me = this;

        me.newcomerStore = Ext.create('Shopware.apps.PluginManager.store.StorePlugin', {
            pageSize: 5,
            filters: [{
                property: 'newcomer',
                value: true
            }]
        });

        me.newcomerListing = Ext.create('PluginManager.components.Listing', {
            store: me.newcomerStore,
            name: 'new-comer-listing',
            padding: 30,
            width: 1007
        });

        me.newcomerStore.on('load', function() {
            var moreLink = Ext.create('PluginManager.container.Container', {
                html: '<div class="button">{s name="display_all_newcomer"}{/s}</div>',
                cls: 'more-link',
                handler: function() {
                    me.fireEvent('display-newcomer');
                }
            });

            me.newcomerListing.listingContainer.add(moreLink);
        });

        me.newcomerStore.load();

        return me.newcomerListing;
    },

    createDummyListing: function () {
        var me = this;

        me.dummyStore = Ext.create('Shopware.apps.PluginManager.store.StorePlugin', {
            pageSize: 50,
            filters: [{
                property: 'dummy',
                value: true
            }]
        }).load();

        me.dummyListing = Ext.create('PluginManager.components.Listing', {
            store: me.dummyStore,
            name: 'dummy-listing',
            scrollContainer: me,
            padding: 30,
            width: 1007
        });

        return me.dummyListing;
    }
});
