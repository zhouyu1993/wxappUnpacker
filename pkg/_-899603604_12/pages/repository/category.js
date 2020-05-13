(function() {
    const a = getApp();
    Page({
        data: {
            title: "",
            lists: [],
            total_num: 0,
            loaded: !1
        },
        param: {
            page: 0,
            sort_type: 2,
            order_type: 0,
            book_status: 0,
            num: 24,
            book_sign: 3,
            _fields: "cover,author_name,book_name,book_id,total_num,total_page,cur_page,category_name_2,book_status,word_count"
        },
        onLoad(a) {
            wx.showShareMenu({
                withShareTicket: !0
            }), wx.setNavigationBarTitle({
                title: a.name
            }), a.site ? (this.param.site = a.site, this.param.category_1 = a.category_1) : this.param.order_type = 1, 
            this.getData();
        },
        getData() {
            this.param.page++, a.get("/v2/book/", this.param, a => {
                0 === a.status.code && (this.setData({
                    lists: this.data.lists.concat(a.data),
                    total_num: a.total_num
                }), this.page = +a.cur_page, (a.total_page === this.param.page || 0 === a.total_page) && this.setData({
                    loaded: !0
                }));
            });
        },
        onPullDownRefresh: function() {},
        onReachBottom: function() {
            this.getData();
        }
    });
})();