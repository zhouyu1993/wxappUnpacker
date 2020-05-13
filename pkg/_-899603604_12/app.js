const a = require("utils/md5.js");

require("./utils/ald-stat.js"), App({
    namespace: {
        isBookshelf: "a",
        bookShelfTime: "b",
        chapterid: "c",
        readTime: "d",
        shareTime: "e"
    },
    api: {
        path: "https://api.17k.com",
        appkey: "2263049103",
        secret: "246b6c1cbe1cb75a56262725cc34e4fe",
        signature: 0
    },
    requestWeixinApi(b, c, d = "get", e = {}) {
        e = JSON.stringify(e), wx.request({
            url: this.api.path + b,
            data: {
                name: this.api.signature,
                app_key: this.api.appkey,
                data: e,
                sign: a(b + "&" + this.api.appkey + "&" + e + "&" + this.api.signature + "&" + this.api.secret)
            },
            method: d,
            success(a) {
                c(a.data);
            }
        });
    },
    onLaunch() {
        wx.getSetting({
            success: a => {
                a.authSetting["scope.userInfo"] && wx.getUserInfo({
                    success: a => {
                        this.setUserSign(a), this.requestWeixinApi("/v2/data/weixin/index", a => {
                            0 === a.status.code && this.getHistory(b => {
                                this.writeHistory(Object.assign(JSON.parse(a.data[0]), b));
                            });
                        });
                    }
                });
            }
        }), wx.getStorage({
            key: "bookReadHistory",
            success: a => {
                if (a = a.data, a) {
                    for (let b in a) a.hasOwnProperty(b) && this.setHistory(b, {
                        [this.namespace.isBookshelf]: 1,
                        [this.namespace.bookShelfTime]: Date.now(),
                        [this.namespace.chapterid]: a[b].chapter_id,
                        [this.namespace.readTime]: a[b].time
                    });
                    wx.removeStorage({
                        key: "bookReadHistory"
                    }), wx.removeStorage({
                        key: "isOnly"
                    });
                }
            }
        });
    },
    onShow() {},
    onHide() {
        this.api.signature && this.getHistory(a => {
            this.requestWeixinApi("/v2/data/weixin/index", function() {}, "post", a);
        });
    },
    setUserSign(a) {
        this.api.signature = encodeURIComponent(a.userInfo.nickName);
    },
    get(a, b, c) {
        wx.showNavigationBarLoading(), wx.request({
            url: this.api.path + a,
            data: Object.assign({
                app_key: this.api.appkey,
                _versions: 973,
                client_type: 998,
                channel: 8,
                merchant: "17KTest",
                _access_version: 2,
                cps: 0,
                cps_source: 0,
                cps_opid: 0
            }, b),
            success: function(a) {
                if (wx.hideNavigationBarLoading(), 200 === a.statusCode) {
                    const b = a.data;
                    c(b);
                } else wx.showToast({
                    title: "(" + a.statusCode + ") 数据请求失败, 返回重试。"
                });
            },
            fail: function(a) {
                wx.hideNavigationBarLoading(), wx.showToast({
                    title: `${a.errMsg}\n请求不存在, 返回看看其它页面吧`,
                    icon: "none"
                });
            }
        });
    },
    getChapter(a, b, c) {
        this.requestWeixinApi(`/v2/book/weixin/${a}/chapter/${b}/content`, c);
    },
    getHistory(a) {
        let b = wx.getStorageSync("history");
        b ? a(b) : wx.getSetting({
            success: b => {
                b.authSetting["scope.userInfo"] ? wx.getUserInfo({
                    success: b => {
                        this.setUserSign(b), this.requestWeixinApi("/v2/data/weixin/index", b => {
                            0 === b.status.code ? a(JSON.parse(b.data[0])) : a({});
                        });
                    }
                }) : a({});
            }
        });
    },
    setHistory(a, b, c, d) {
        this.getHistory(e => {
            e[a] = Object.assign(e[a] || {}, b), this.writeHistory(e, c, d);
        }, d);
    },
    writeHistory(a, b = Function, c = Function) {
        for (let d in a) if (a.hasOwnProperty(d)) if ("0" == d || 0 === Object.keys(a[d]).length) delete a[d]; else for (let b in a[d]) a[d].hasOwnProperty(b) && null === a[d][b] && delete a[d][b];
        wx.setStorageSync("history", a), b();
    },
    addBookshelf(a, b = Function, c = Function) {
        this.setHistory(a, {
            [this.namespace.isBookshelf]: 1,
            [this.namespace.bookShelfTime]: Date.now()
        }, function() {
            b();
        }, function() {
            c();
        });
    },
    removeBookshelf(a, b = Function, c = Function) {
        this.setHistory(a, {
            [this.namespace.isBookshelf]: null,
            [this.namespace.bookShelfTime]: null
        }, function() {
            b();
        }, function() {
            c(), wx.showToast({
                title: "操作失败",
                icon: "none"
            });
        });
    },
    shareSuccess(a, b = Function, c = Function) {
        this.setHistory(a, {
            [this.namespace.shareTime]: Date.now()
        }, () => {
            this.addBookshelf(a), setTimeout(b, 3e3);
        });
    },
    checkShare(a, b = Function, c = Function) {
        this.getHistory(d => {
            d = +(d[a] && d[a][this.namespace.shareTime]), d ? d + 2592e5 > Date.now() ? b(d - Date.now()) : c(Date.now() - d) : c();
        });
    },
    readFirst(a) {
        this.get(`/v2/book/${a}/volumes/limit`, {
            page: 1,
            num: 1
        }, b => {
            0 === b.status.code && b.data[0] ? wx.navigateTo({
                url: "/pages/book/chapter?bookid=" + a + "&chapterid=" + b.data[0].id
            }) : wx.navigateTo({
                url: "/pages/book/list?bookid=" + a
            });
        });
    },
    toBook(a) {
        wx.navigateTo({
            url: "/pages/book/home?bookid=" + a
        });
    }
});