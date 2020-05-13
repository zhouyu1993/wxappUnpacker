(function() {
    Component({
        properties: {
            title: {
                type: String
            },
            lists: {
                type: Array
            }
        },
        data: {
            title: ""
        },
        ready() {
            const a = this.properties.lists.length;
            3 < a && this.setData({
                lists: this.properties.lists.slice(0, a - a % 3)
            });
        },
        methods: {}
    });
})();