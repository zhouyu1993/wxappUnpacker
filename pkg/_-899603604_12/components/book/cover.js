(function() {
    Component({
        properties: {
            url: {
                type: String,
                value: "/images/cover.jpg"
            },
            sign: {
                type: String,
                value: ""
            },
            mode: {
                type: String,
                value: "widthFix"
            }
        },
        data: {},
        ready() {},
        methods: {
            handleError() {
                this.setData({
                    url: "/images/cover.jpg"
                });
            }
        }
    });
})();