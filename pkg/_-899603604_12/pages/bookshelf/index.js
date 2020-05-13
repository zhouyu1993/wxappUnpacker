const a = require("../../utils/util.js"), c = getApp();

Page({
    data: {
        list: [],
        total_num: 0,
        nickName: "",
        avatarUrl: "",
        showHelp: !1
    },
    onShow() {
        this.setData({
            list: [],
            total_num: 0
        }), this.loadHistory();
    },
    loadHistory() {
        c.getHistory(b => {
            let d = [];
            for (let a in b) b.hasOwnProperty(a) && 0 < a && b[a][c.namespace.isBookshelf] && (b[a].bookid = +a, 
            d.push(b[a]));
            d.sort(function(d, a) {
                return a[c.namespace.bookShelfTime] - d[c.namespace.bookShelfTime];
            });
            const e = function(b) {
                c.get(`/v2/book/${b}`, {
                    iltc: 1,
                    time: new Date().getTime(),
                    _fields: "cover,author_name,book_name,book_id,total_num,total_page,cur_page,updated_at,last_update_chapter_name,last_update_chapter_id"
                }, b => {
                    0 === b.status.code && (d[f][c.namespace.readTime] && (b.data.readTime = a.formatTime(d[f][c.namespace.readTime]), 
                    b.data.chapterid = d[f][c.namespace.chapterid]), b.data.shareTime = a.formatTime(d[f][c.namespace.shareTime]), 
                    b.data.update = a.formatDate(b.data.updated_at, !0), d[f] = b.data, this.setData({
                        list: d,
                        total_num: d.length
                    }), f++, d[f] && e(d[f].bookid));
                });
            }.bind(this);
            let f = 0;
            d[f] && e(d[f].bookid);
        }), wx.getSetting({
            success: a => {
                a.authSetting["scope.userInfo"] && wx.getUserInfo({
                    success: a => {
                        this.setData({
                            nickName: a.userInfo.nickName,
                            avatarUrl: a.userInfo.avatarUrl
                        });
                    }
                });
            }
        });
    },
    on_getuserinfo(a) {
        a.detail.signature && (this.setData({
            nickName: a.detail.userInfo.nickName,
            avatarUrl: a.detail.userInfo.avatarUrl
        }), c.setUserSign(a.detail), c.requestWeixinApi("/v2/data/weixin/index", a => {
            0 === a.status.code && c.getHistory(b => {
                c.writeHistory(Object.assign(b, JSON.parse(a.data[0])), () => {
                    this.loadHistory();
                });
            });
        }));
    },
    on_help() {
        this.setData({
            showHelp: !this.data.showHelp
        });
    }
});