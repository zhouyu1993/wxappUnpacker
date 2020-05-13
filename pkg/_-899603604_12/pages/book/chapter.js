(function() {
    const a = getApp();
    Page({
        data: {
            title: "",
            content: "",
            bookname: "",
            time: 0,
            word_count: 0,
            chapterid: 0,
            previd: 0,
            nextid: 0,
            bookid: 0,
            isShare: !0,
            isIndex: !1
        },
        setContent(b) {
            wx.setNavigationBarTitle({
                title: b.book_name
            }), this.setData({
                title: b.name,
                bookname: b.book_name,
                content: "　　" + b.content.replace(/\n(?!　)+/g, "\n　　"),
                time: b.updated_at,
                word_count: b.word_count,
                chapterid: b.id,
                previd: b.pre_id,
                nextid: b.next_id,
                bookid: b.book_id
            }, function() {
                wx.hideLoading(), a.setHistory(b.book_id, {
                    [a.namespace.chapterid]: b.id,
                    [a.namespace.readTime]: Date.now()
                }, function() {}, () => {});
            });
        },
        onLoad: function(b) {
            wx.getLaunchOptionsSync && 1036 === wx.getLaunchOptionsSync().scene && this.setData({
                isIndex: !0
            }), wx.setNavigationBarColor({
                frontColor: "#000000",
                backgroundColor: "#FFEEC2"
            }), wx.setBackgroundColor({
                backgroundColor: "#FFEEC2",
                backgroundColorTop: "#FFEEC2",
                backgroundColorBottom: "#FFEEC2"
            }), wx.showLoading({
                title: "加载中..."
            }), a.getChapter(b.bookid, b.chapterid, a => {
                0 === a.status.code && this.setContent(a.data);
            }), wx.showShareMenu({
                withShareTicket: !0
            });
        },
        onShareAppMessage() {
            return a.shareSuccess(this.data.bookid, () => {
                a.getChapter(this.data.bookid, this.data.chapterid, a => {
                    0 === a.status.code && (this.setContent(a.data), this.setData({
                        isShare: !0
                    }));
                });
            }), {
                title: "我要解锁《" + this.data.bookname + "》, 的" + this.data.title + ", 一起看啊!",
                path: "/pages/book/chapter?bookid=" + this.data.bookid + "&chapterid=" + this.data.chapterid
            };
        },
        onShow: function() {}
    });
})();