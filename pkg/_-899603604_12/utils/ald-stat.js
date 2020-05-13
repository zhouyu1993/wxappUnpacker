(function() {
    !function(a, b) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.Ald = b();
    }(this, function() {
        function x(a) {
            this.app = a;
        }
        function D(a) {
            H = a, this.aldstat = new x(this), v("app", "launch");
        }
        function aa(a) {
            if (H = a, B = a.query.ald_share_src, C = a.query.aldsrc || "", F = a.query.ald_share_src, 
            A = Date.now(), T = Date.now(), !ca) {
                R = "" + Date.now() + m(1e7 * Math.random()), O = !1;
                try {
                    wx.setStorageSync("ald_ifo", !1);
                } catch (a) {}
            }
            ca = !1, 0 !== t && 3e5 < Date.now() - t && (I = "" + Date.now() + m(1e7 * Math.random()), 
            T = Date.now()), a.query.ald_share_src && "1044" == a.scene && a.shareTicket ? wx.getShareInfo({
                shareTicket: a.shareTicket,
                success: function(a) {
                    J = a, y("event", "ald_share_click", JSON.stringify(a));
                }
            }) : a.query.ald_share_src && y("event", "ald_share_click", 1), "" === G && wx.getSetting({
                withCredentials: !0,
                success: function(a) {
                    a.authSetting["scope.userInfo"] && wx.getUserInfo({
                        withCredentials: !0,
                        success: function(a) {
                            var b = d();
                            G = a, b.ufo = g(a), k = p(a.userInfo.avatarUrl.split("/")), h(b);
                        }
                    });
                }
            }), v("app", "show");
        }
        function o() {
            t = Date.now(), "" === G && wx.getSetting({
                success: function(a) {
                    a.authSetting["scope.userInfo"] && wx.getUserInfo({
                        withCredentials: !0,
                        success: function(a) {
                            G = a, k = p(a.userInfo.avatarUrl.split("/"));
                            var b = d();
                            b.ufo = g(a), h(b);
                        }
                    });
                }
            }), v("app", "hide");
        }
        function e(a) {
            j++, y("event", "ald_error_message", a);
        }
        function a(a) {
            Q = a;
        }
        function r() {
            W = this.route, X = Date.now(), Z = 0, Y = 0;
        }
        function i() {
            n("page", "hide"), z = this.route;
        }
        function s() {
            n("page", "unload"), z = this.route;
        }
        function c() {
            Z++;
        }
        function u() {
            Y++;
        }
        function l(b) {
            var c = w(b.path), d = {};
            for (var f in H.query) "ald_share_src" === f && (d[f] = H.query[f]);
            var e = "";
            if (e = -1 == b.path.indexOf("?") ? b.path + "?" : b.path.substr(0, b.path.indexOf("?")) + "?", 
            "" !== c) for (var f in c) d[f] = c[f];
            for (var a in d.ald_share_src ? -1 == d.ald_share_src.indexOf(ba) && 200 > d.ald_share_src.length && (d.ald_share_src = d.ald_share_src + "," + ba) : d.ald_share_src = ba, 
            d) -1 == a.indexOf("ald") && (e += a + "=" + d[a] + "&");
            return b.path = e + "ald_share_src=" + d.ald_share_src, y("event", "ald_share_status", b), 
            b;
        }
        function f() {
            function a() {
                return m(65536 * (1 + Math.random())).toString(16).substring(1);
            }
            return a() + a() + a() + a() + a() + a() + a() + a();
        }
        function h(c) {
            var d = c, f = 0, g = 0, e = function(a) {
                g++, a ? (c = {}, c.et = Date.now(), c.at = R, c.uu = ba, c.v = M, c.ak = d.ak, 
                c.life = d.life, c.ev = d.ev, c.err = "err", c.status = f) : (U++, c.at = R, c.et = Date.now(), 
                c.uu = ba, c.v = M, c.ak = _.app_key, c.wsr = H, c.oifo = O, c.rq_c = U), wx.request({
                    url: "https://" + P + ".aldwx.com/d.html",
                    data: c,
                    header: {
                        AldStat: "MiniApp-Stat",
                        waid: _.appid || "",
                        wst: _.appsecret || "",
                        se: b || "",
                        op: L || "",
                        img: k
                    },
                    method: "GET",
                    success: function(a) {
                        f = a.statusCode, 200 != a.statusCode && 3 >= g && e("errorsend");
                    },
                    fail: function() {
                        3 >= g && e("errorsend");
                    }
                });
            };
            e();
        }
        function d() {
            var a = {};
            for (var b in K) a[b] = K[b];
            return a;
        }
        function p(a) {
            for (var b = "", c = 0; c < a.length; c++) a[c].length > b.length && (b = a[c]);
            return b;
        }
        function g(a) {
            var b = {};
            for (var c in a) "rawData" != c && "errMsg" != c && (b[c] = a[c]);
            return b;
        }
        function w(a) {
            if (-1 == a.indexOf("?")) return "";
            var b = {};
            return a.split("?")[1].split("&").forEach(function(a) {
                var c = a.split("=")[1];
                b[a.split("=")[0]] = c;
            }), b;
        }
        function v(a, b) {
            var c = d();
            c.ev = a, c.life = b, c.ec = j, c.st = N, C && (c.qr = C, c.sr = C), B && (c.usr = B), 
            "launch" !== b && (c.ahs = I), "hide" === b && (c.hdr = Date.now() - T, c.dr = Date.now() - A, 
            c.ifo = !!O), h(c);
        }
        function n(a, b) {
            var c = d();
            c.ev = a, c.st = Date.now(), c.life = b, c.pp = W, c.pc = z, c.dr = Date.now() - N, 
            c.ndr = Date.now() - X, c.rc = Z, c.bc = Y, c.ahs = I, Q && "{}" != JSON.stringify(Q) && (c.ag = Q), 
            C && (c.qr = C, c.sr = C), B && (c.usr = B), V || ($ = W, V = !0, c.ifp = V, c.fp = W), 
            h(c);
        }
        function y(a, b, c) {
            var f = d();
            f.ev = a, f.tp = b, f.st = N, c && (f.ct = c), h(f);
        }
        function S(a, b, c) {
            if (a[b]) {
                var d = a[b];
                a[b] = function(a) {
                    c.call(this, a, b), d.call(this, a);
                };
            } else a[b] = function(a) {
                c.call(this, a, b);
            };
        }
        var m = Math.floor, _ = require("./ald-stat-conf"), M = "7.0.0", P = "log", R = "" + Date.now() + m(1e7 * Math.random()), I = "" + Date.now() + m(1e7 * Math.random()), T = "", A = 0, t = 0, b = "", L = "", k = "", U = 0, H = "", O = "", ba = function() {
            var a = "";
            try {
                a = wx.getStorageSync("aldstat_uuid");
            } catch (b) {
                a = "uuid_getstoragesync";
            }
            if (a) O = !1; else {
                a = f(), O = !0;
                try {
                    wx.setStorageSync("aldstat_uuid", a), wx.setStorageSync("ald_ifo", !0);
                } catch (a) {
                    wx.setStorageSync("aldstat_uuid", "uuid_getstoragesync");
                }
            }
            return a;
        }(), N = Date.now(), B = "", C = "", F = "", j = 0, J = "", G = "", K = {}, V = !1, W = "", z = "", Q = "", X = "", Y = 0, Z = 0, $ = "", ca = !0;
        !function() {
            wx.request({
                url: "https://" + P + ".aldwx.com/config/app.json",
                header: {
                    AldStat: "MiniApp-Stat"
                },
                method: "GET",
                success: function(a) {
                    200 === a.statusCode && (a.data.version != M && console.warn("您的SDK不是最新版本，请尽快升级！"), 
                    a.data.warn && console.warn(a.data.warn), a.data.error && console.error(a.data.error));
                }
            });
        }();
        try {
            var da = wx.getSystemInfoSync();
            K.br = da.brand, K.pm = da.model, K.pr = da.pixelRatio, K.ww = da.windowWidth, K.wh = da.windowHeight, 
            K.lang = da.language, K.wv = da.version, K.wvv = da.platform, K.wsdk = da.SDKVersion, 
            K.sv = da.system;
        } catch (a) {}
        return wx.getNetworkType({
            success: function(a) {
                K.nt = a.networkType;
            }
        }), wx.getSetting({
            success: function(a) {
                a.authSetting["scope.userLocation"] ? wx.getLocation({
                    type: "wgs84",
                    success: function(a) {
                        K.lat = a.latitude, K.lng = a.longitude, K.spd = a.speed;
                    }
                }) : _.getLocation && wx.getLocation({
                    type: "wgs84",
                    success: function(a) {
                        K.lat = a.latitude, K.lng = a.longitude, K.spd = a.speed;
                    }
                });
            }
        }), x.prototype.debug = function(a) {
            y("debug", "0", a);
        }, x.prototype.warn = function(a) {
            y("warn", "1", a);
        }, x.prototype.sendEvent = function(a, b) {
            if (!("" !== a && "string" == typeof a && 255 >= a.length)) console.error("事件名称必须为String类型且不能超过255个字符"); else if ("string" == typeof b && 255 >= b.length) y("event", a, b); else if ("object" == typeof b) {
                if (255 <= JSON.stringify(b).length) return void console.error("自定义事件参数不能超过255个字符");
                y("event", a, JSON.stringify(b));
            } else void 0 === b ? y("event", a, !1) : console.error("事件参数必须为String,Object类型,且参数长度不能超过255个字符");
        }, x.prototype.sendSession = function(a) {
            if ("" === a || !a) return void console.error("请传入从后台获取的session_key");
            if ("" === _.appid || "" === _.appsecret) return void console.error("请在配置文件中填写小程序的appid和appsecret！");
            b = a;
            var c = d();
            c.st = Date.now(), c.tp = "session", c.ct = "session", c.ev = "event", "" === G ? wx.getSetting({
                success: function(a) {
                    a.authSetting["scope.userInfo"] ? wx.getUserInfo({
                        success: function(a) {
                            c.ufo = g(a), k = p(a.userInfo.avatarUrl.split("/")), "" !== J && (c.gid = J), h(c);
                        }
                    }) : "" === J ? console.warn("用户未授权") : (c.gid = J, h(c));
                }
            }) : (c.ufo = G, "" !== J && (c.gid = J), h(c));
        }, x.prototype.sendOpenid = function(a) {
            if ("" === a || !a) return void console.error("openID不能为空");
            L = a;
            var b = d();
            b.st = Date.now(), b.tp = "openid", b.ev = "event", b.ct = "openid", h(b);
        }, _.plugin ? {
            App: function(a) {
                var b = {};
                for (var c in a) "onLaunch" !== c && "onShow" !== c && "onHide" !== c && "onError" !== c && "onPageNotFound" !== c && "onUnlaunch" !== c && (b[c] = a[c]);
                b.onLaunch = function(b) {
                    D.call(this, b), "function" == typeof a.onLaunch && a.onLaunch.call(this, b);
                }, b.onShow = function(b) {
                    aa.call(this, b), a.onShow && "function" == typeof a.onShow && a.onShow.call(this, b);
                }, b.onHide = function() {
                    o.call(this), a.onHide && "function" == typeof a.onHide && a.onHide.call(this);
                }, b.onError = function(b) {
                    e.call(this, b), a.onError && "function" == typeof a.onError && a.onError.call(this, b);
                }, b.onUnlaunch = function() {
                    a.onUnlaunch && "function" == typeof a.onUnlaunch && a.onUnlaunch.call(this);
                }, b.onPageNotFound = function(b) {
                    a.onPageNotFound && "function" == typeof a.onPageNotFound && a.onPageNotFound.call(this, b);
                }, App(b);
            },
            Page: function(b) {
                var d = {};
                for (var e in b) "onLoad" !== e && "onReady" !== e && "onShow" !== e && "onHide" !== e && "onUnload" !== e && "onPullDownRefresh" !== e && "onReachBottom" !== e && "onShareAppMessage" !== e && "onPageScroll" !== e && "onTabItemTap" !== e && (d[e] = b[e]);
                d.onLoad = function(c) {
                    a.call(this, c), "function" == typeof b.onLoad && b.onLoad.call(this, c);
                }, d.onShow = function(a) {
                    r.call(this), "function" == typeof b.onShow && b.onShow.call(this, a);
                }, d.onHide = function(a) {
                    i.call(this), "function" == typeof b.onHide && b.onHide.call(this, a);
                }, d.onUnload = function(a) {
                    s.call(this), "function" == typeof b.onUnload && b.onUnload.call(this, a);
                }, d.onReady = function(a) {
                    b.onReady && "function" == typeof b.onReady && b.onReady.call(this, a);
                }, d.onReachBottom = function(a) {
                    u(), b.onReachBottom && "function" == typeof b.onReachBottom && b.onReachBottom.call(this, a);
                }, d.onPullDownRefresh = function(a) {
                    c(), b.onPullDownRefresh && "function" == typeof b.onPullDownRefresh && b.onPullDownRefresh.call(this, a);
                }, d.onPageScroll = function(a) {
                    b.onPageScroll && "function" == typeof b.onPageScroll && b.onPageScroll.call(this, a);
                }, d.onTabItemTap = function(a) {
                    b.onTabItemTap && "function" == typeof b.onTabItemTap && b.onTabItemTap.call(this, a);
                }, b.onShareAppMessage && "function" == typeof b.onShareAppMessage && (d.onShareAppMessage = function(a) {
                    var c = b.onShareAppMessage.call(this, a);
                    return void 0 === c ? (c = {}, c.path = this.route) : void 0 === c.path && (c.path = this.route), 
                    l.call(this, c);
                }), Page(d);
            }
        } : function() {
            !function() {
                var b = App, d = Page;
                App = function(a) {
                    S(a, "onLaunch", D), S(a, "onShow", aa), S(a, "onHide", o), S(a, "onError", e), 
                    b(a);
                }, Page = function(b) {
                    var e = b.onShareAppMessage;
                    S(b, "onLoad", a), S(b, "onUnload", s), S(b, "onShow", r), S(b, "onHide", i), S(b, "onReachBottom", u), 
                    S(b, "onPullDownRefresh", c), void 0 !== e && null !== e && (b.onShareAppMessage = function(a) {
                        if (void 0 !== e) {
                            var b = e.call(this, a);
                            return void 0 === b ? (b = {}, b.path = this.route) : void 0 === b.path && (b.path = this.route), 
                            l(b);
                        }
                    }), d(b);
                };
            }();
        }();
    });
})();