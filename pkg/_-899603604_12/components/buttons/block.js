(function() {
    Component({
        properties: {
            url: {
                type: String
            },
            desc: {
                type: String
            },
            more: {
                type: String
            },
            moreIcon: {
                type: String
            },
            name: {
                type: String
            },
            icon: {
                type: String,
                value: "default"
            }
        },
        data: {
            icon_url: null
        },
        ready() {
            this.setData({
                icon_url: {
                    default: "",
                    time: "../../images/icon/卢沟桥.png",
                    notice: "../../images/icon/notice.png",
                    book: "../../images/icon/book.png",
                    list: "../../images/icon/list.png"
                }[this.properties.icon] || ""
            });
        },
        methods: {}
    });
})();