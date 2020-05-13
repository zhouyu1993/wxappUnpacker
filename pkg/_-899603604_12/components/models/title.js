(function() {
    Component({
        properties: {
            desc: {
                type: String,
                value: ""
            },
            align: {
                type: String,
                value: "left"
            },
            title: {
                type: String,
                value: ""
            }
        },
        options: {
            multipleSlots: !0
        }
    });
})();