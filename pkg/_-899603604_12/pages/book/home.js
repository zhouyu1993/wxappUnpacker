const a = getApp(), b = require("../../utils/util.js");

Page({
    data: {
        bookid: 0,
        name: "书名",
        cover: "/images/cover.jpg",
        author: "佚名",
        isBookshelf: !1,
        isShare: !1,
        introLines: 5
    },
    onLoad(c) {
        wx.showLoading(), a.get(`/v2/book/${c.bookid}/merge`, {
            iltc: 1,
            time: new Date().getTime()
        }, c => {
            if (0 === c.status.code) {
                let e = c.data;
                this.setData({
                    bookid: e.book_id,
                    name: e.book_name,
                    cover: e.cover,
                    intro: e.intro,
                    author: e.author_name,
                    word_count: b.slimNumber(e.word_count),
                    total_click: b.slimNumber(e.total_click),
                    chapter_total: e.chapter_total,
                    category_name_1: e.category_name_1,
                    category_name_2: e.category_name_2,
                    last_update_chapter_name: e.last_update_chapter_name,
                    last_update_chapter_id: e.last_update_chapter_id,
                    last_update_chapter_date: b.formatTime(e.last_update_chapter_date),
                    book_status: "03" === e.book_status ? "已完结" : "更新至",
                    comment: {
                        total: c.comment.total,
                        lists: c.comment.lists.map(function(a) {
                            return a.time = b.formatTime(a.last_reply_date), a;
                        })
                    },
                    recommend: c.author_book.concat(c.recommend)
                }, function() {
                    wx.hideLoading();
                }), a.getHistory(b => {
                    b[this.data.bookid] && this.setData({
                        isBookshelf: !!b[this.data.bookid][a.namespace.isBookshelf]
                    });
                }), a.checkShare(this.data.bookid, () => {
                    this.setData({
                        isShare: !0
                    });
                }), wx.setNavigationBarTitle({
                    title: this.data.name
                });
            }
        }), wx.showShareMenu({
            withShareTicket: !0
        });
    },
    onShareAppMessage() {
        return a.shareSuccess(this.data.bookid, () => {
            this.setData({
                isShare: !0
            }), this.on_read();
        }), {
            title: "《" + this.data.name + "》可以免费看了, 快来和我一起吧!!!",
            path: "/pages/book/home?bookid=" + this.data.bookid
        };
    },
    on_bookshelf() {
        this.data.isBookshelf ? a.removeBookshelf(this.data.bookid, () => {
            this.setData({
                isBookshelf: !1
            });
        }) : a.addBookshelf(this.data.bookid, () => {
            this.setData({
                isBookshelf: !0
            });
        });
    },
    on_intro() {
        this.setData({
            introLines: 20
        });
    },
    on_read() {
        a.getHistory(b => {
            b = b[this.data.bookid] || {}, b[a.namespace.chapterid] ? wx.navigateTo({
                url: "/pages/book/chapter?bookid=" + this.data.bookid + "&chapterid=" + b[a.namespace.chapterid]
            }) : a.readFirst(this.data.bookid);
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {}
});