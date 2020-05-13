(function() {
    function a(a) {
        var b = Math.floor;
        if (0 < a) {
            const c = (Date.now() - new Date(a).getTime()) / 1e3 / 60;
            return 1 > c ? "刚刚" : 60 > c ? b(c) + "分钟前" : 1440 > c ? b(c / 60) + "小时前" : 43200 > c ? b(c / 60 / 24) + "天前" : 263520 > c ? b(c / 60 / 24 / 30) + "个月前" : 525600 > c ? "半年前" : b(c / 60 / 24 / 365) + "年前";
        }
        return null;
    }
    function b(a, b) {
        const d = new Date(a), e = d.getFullYear(), f = d.getMonth() + 1, g = d.getDate(), h = d.getHours(), i = d.getMinutes(), j = d.getSeconds();
        return [ e, f, g ].map(c).join("-") + (b ? "" : " " + [ h, i, j ].map(c).join(":"));
    }
    function c(a) {
        return a = a.toString(), a[1] ? a : "0" + a;
    }
    module.exports = {
        formatTimeOfArray: function(c, d, e = 0) {
            var f = 0 === e ? a : b;
            if (!c.map) {
                let a = Object.keys(c);
                a.forEach(function(a) {
                    d.forEach(b => {
                        c[a][b] = f(c[a][b], 2 === e);
                    });
                });
            } else c.forEach(function(a) {
                d.forEach(b => {
                    a[b] = f(a[b], 2 === e);
                });
            });
            return c;
        },
        slimNumber: function(a) {
            var b = Math.round;
            return a = +a, 1e4 > a ? a : 9e5 > a ? (a / 1e4).toFixed(1) + "万" : 9e6 > a ? b(a / 1e6) + "百万" : 9e7 > a ? b(a / 1e7) + "千万" : (a / 1e8).toFixed(1) + "亿";
        },
        formatDate: b,
        formatTime: a
    };
})();