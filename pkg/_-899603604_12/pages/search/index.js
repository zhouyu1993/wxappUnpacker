(function() {
    const a = getApp();
    Page({
        data: {
            key: "",
            list: [],
            total_num: 0,
            loaded: !1
        },
        page: 1,
        onLoad(a) {
            this.setData({
                key: a.key
            }), this.getSearchData();
        },
        getSearchData() {
            wx.showLoading({
                title: "搜索中..."
            }), this.data.loaded || a.get(`/v2/book/search`, {
                key: this.data.key,
                page: this.page,
                num: 24,
                _fields: "cover,author_name,book_name,book_id,total_num,total_page,cur_page,intro,category_name_2,book_status,word_count,total_chapter,keyword"
            }, a => {
                if (0 === a.status.code) {
                    const b = +a.cur_page;
                    b === this.page && (this.page++, this.setData({
                        list: this.data.list.concat(a.data),
                        total_num: a.total_num,
                        loaded: !1
                    }, function() {
                        wx.hideLoading();
                    })), (a.total_page === b || 0 === a.total_page) && (wx.hideLoading(), this.setData({
                        loaded: !0
                    }));
                }
            });
        },
        on_search(a) {
            this.page = 1, this.setData({
                key: a.detail.value,
                list: [],
                total_num: "...",
                loaded: !1
            }), this.getSearchData();
        },
        onReachBottom() {
            this.getSearchData();
        }
    });
})();