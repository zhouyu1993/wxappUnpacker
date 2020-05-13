(function() {
    const a = getApp();
    Page({
        data: {
            swiper: [],
            datalist: [],
            category: []
        },
        onLoad() {
            a.get("/v2/book/category", {
                _fields: "child_node,id,name"
            }, a => {
                this.setData({
                    category: a.data
                });
            }), a.get("/v2/book/boutique/bookstore", {
                type: 1,
                client: "17K"
            }, a => {
                const b = [];
                0 === a.status.code && a.data.forEach(a => {
                    if (1 === a.type) this.setData({
                        swiper: a.lists.map(function(a) {
                            return {
                                url: "1" === a.urlType ? "/pages/book/home?bookid=" + a.book_id : a.url,
                                cover: a.cover
                            };
                        })
                    }); else if (-1 !== [ 27, 3, 5, 6, 7, 8, 9, 10, 11, 12 ].indexOf(a.type)) {
                        "完本特价秒杀" === a.name && (a.name = "最新完本"), "包月就能免费看" === a.name && (a.name = "编辑推荐");
                        let c = {
                            template: "list",
                            title: a.name,
                            lists: a.lists.map(function(a) {
                                return {
                                    author_name: a.author_name,
                                    book_id: a.book_id,
                                    book_name: a.book_name,
                                    cover: a.cover
                                };
                            })
                        };
                        "本周热门" === a.name ? b.unshift(c) : b.push(c);
                    }
                    this.setData({
                        datalist: b
                    });
                });
            });
        },
        event_search(a) {
            wx.navigateTo({
                url: "/pages/search/index?key=" + a.detail.value
            });
        },
        onReady: function() {},
        onShow: function() {},
        onHide: function() {},
        onUnload: function() {},
        onPullDownRefresh: function() {
            wx.showNavigationBarLoading(), wx.stopPullDownRefresh();
        },
        onReachBottom: function() {},
        onShareAppMessage: function() {}
    });
})();