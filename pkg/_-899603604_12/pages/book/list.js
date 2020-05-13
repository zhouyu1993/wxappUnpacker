(function() {
    const a = getApp();
    Page({
        data: {
            bookid: 0,
            volumes: [],
            loaded: !1,
            bookname: "",
            order: !1
        },
        volumes: [],
        volumes_index: 0,
        onReachBottom: function() {
            this.volumes_index < this.volumes.length ? (wx.showNavigationBarLoading(), this.volumes_index++, 
            this.setData({
                volumes: this.volumes.slice(0, this.volumes_index)
            }, function() {
                wx.hideNavigationBarLoading();
            })) : this.setData({
                loaded: !0
            });
        },
        onLoad: function(b) {
            wx.showLoading({
                title: "加载中..."
            }), a.get(`/v2/book/${b.bookid}/volumes`, {
                _fields: "id,volumes,chapters,name,vip,book_name"
            }, a => {
                0 === a.status.code && (wx.setNavigationBarTitle({
                    title: a.data.book_name
                }), this.volumes = a.data.volumes || [], this.initVolumeIndex(), this.setData({
                    bookname: a.data.book_name,
                    bookid: b.bookid,
                    volumes: this.volumes.slice(0, this.volumes_index)
                }, function() {
                    wx.hideLoading();
                }));
            }), wx.showShareMenu({
                withShareTicket: !0
            });
        },
        initVolumeIndex() {
            this.volumes_index = 0;
            let a = 0;
            for (let b = 0; b < this.volumes.length && (a += this.volumes[b].chapters.length, 
            this.volumes_index++, !(10 < a)); b++) ;
            this.volumes_index >= this.volumes.length && this.setData({
                loaded: !0
            });
        },
        on_swapOrder() {
            wx.showLoading({
                title: "重新排序中..."
            }), this.volumes.reverse().forEach(function(a) {
                a.chapters.reverse();
            }), this.initVolumeIndex(), this.setData({
                order: !this.data.order,
                volumes: this.volumes.slice(0, this.volumes_index)
            }, function() {
                wx.hideLoading();
            });
        },
        onShareAppMessage() {
            return a.shareSuccess(this.data.bookid), {
                title: "刚解锁了《" + this.data.bookname + "》来一起看!",
                path: "/pages/book/list?bookid=" + this.data.bookid
            };
        }
    });
})();