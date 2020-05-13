const a = require("../../utils/util.js"), c = getApp();

Page({
    data: {
        list: []
    },
    onShow() {
        this.setData({
            list: []
        }), this.loadHistory();
    },
    loadHistory() {
        c.getHistory(b => {
            let d = [];
            for (let a in b) b.hasOwnProperty(a) && 0 < a && b[a][c.namespace.chapterid] && (b[a].bookid = +a, 
            d.push(b[a]));
            d.sort(function(d, a) {
                return a[c.namespace.readTime] - d[c.namespace.readTime];
            });
            const e = function(b) {
                c.get(`/v2/book/${b}`, {
                    iltc: 1,
                    time: new Date().getTime(),
                    _fields: "cover,author_name,book_name,book_id,total_num,total_page,cur_page,book_status,chapter_total,last_update_chapter_date"
                }, b => {
                    0 === b.status.code && (b.data.lastDate = a.formatDate(b.data.last_update_chapter_date, !0), 
                    b.data.update = ("03" === b.data.book_status ? "已完结" : "更新至") + b.data.chapter_total + "章", 
                    d[f][c.namespace.readTime] && (b.data.readTime = a.formatTime(d[f][c.namespace.readTime]), 
                    b.data.chapterid = d[f][c.namespace.chapterid]), d[f] = b.data, this.setData({
                        list: d
                    }), f++, d[f] && e(d[f].bookid));
                });
            }.bind(this);
            let f = 0;
            d[f] && e(d[f].bookid);
        });
    }
});