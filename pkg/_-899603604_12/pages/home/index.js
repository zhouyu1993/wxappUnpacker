(function() {
    var a = Math.floor;
    const b = [ [ 2665636, "人间正道", "", "出事这天的情形，吴明雄记得很清楚。" ], [ 2665603, "五代秘史", "", "只因招选诸贤士，竦动英雄杰士心。" ], [ 2665638, "城市白皮书", "", "在冰里，爸爸的脸出现了，裹在冰里的爸爸成了一头猪" ], [ 2665642, "武则天四大奇案", "", "本县既为民父母，务必为死者伸了冤情，方能上对君王，下对百姓。" ], [ 2665645, "刀子嘴与金凤凰", "", "胖大嫂的丈夫去世早，一家老小五口人，全靠她一人顶着。" ], [ 2665646, "斯文变相", "", "万宝灵丹，是药方上第一位要药，少了这个，如何使得？" ], [ 2665648, "阅微草堂笔记", "", "娘子与是妾有夙冤，然应偿二百鞭耳。" ], [ 2665649, "天城八月", "", "大雨在猛烈的抽搐中似乎向苍天悲唤，旋转成铺天盖地的呐喊声。" ], [ 2665651, "手工美人", "", "然后他听到沈力歉意地说：“对不起，做噩梦了。”" ], [ 2665597, "地下，地上", "", "王晓凤是徐州会战那一年认识的乔天朝。" ], [ 2665652, "妖手", "", "袁青朵是水夜最好的朋友，也是惟一的朋友。她不能眼睁睁看着她落入虎穴。" ], [ 2665656, "鲁班李玉林", "", "女主人勉强接受，她给玉林交待：先做个茶桌，急用。" ], [ 2665665, "官道", "", "过世的老同志，有熟悉的人，便相互议论一番，有人说，XXX这人不错。" ], [ 2665678, "绣鞋记", "", "海誓山盟何足据，多情全在绣花鞋。" ], [ 2665680, " 李公案奇闻", "", "生平不喜银钱，不贪衣食；穿的是破衣旧帽，吃的是淡饭粗茶；" ], [ 2664347, "爱情难说——惠慧随笔", "", "诗人站在生活之上，永远像一个婴儿和老人，置于无限希望和无穷绝望之中。" ], [ 2664354, "元成之世", "", "　在西汉，宦官登上政治舞台，应从武帝开始。" ], [ 2664356, "不能说话的十二岁", "", "一口烟下去他觉得很舒服，就眯了眼在那打盹。" ], [ 2664358, "你的生命如此多情", "", "　汽车在返程的路上。林星与夏卫华在车上交谈。" ], [ 2664342, "草样青春", "", "如果是春夏倒也好过一点，只是比较辛苦一点而已。" ], [ 2664361, "武林客栈：星涟卷", "", "剑气犹如锐风，贴着李清愁的后背追杀。" ], [ 2664326, "屋顶上空的爱情", "", "霓虹灯川流不息地蹦跳着欲壑难填的城市欲望，" ], [ 2664325, "暧昧", "", "方渐鸿和佳佳第一次见面，回忆自己的一双鞋子。" ], [ 2664328, "一网无鱼", "许春樵", "陈空受伤的心情渐渐平静下来，他躺在郁叶的怀里睡着了。" ], [ 2664324, "追逃", "", "　五名刑侦人员要押解四名贩毒分子回山水市，当然有些难度。" ], [ 2664327, "酒楼", "", "摆满了旧式家具的办公室安静得像一个坟墓。" ], [ 2664359, "玉观音", "", "按我现在挑肥拣瘦的标准，她身上的肉好像太多了一点儿，手感不好，而且智商也不高。" ], [ 2445986, "凉生，我们可不可以不忧伤", "乐小米", "在我年少的意识中，凉生是与我不同的，与整个魏家坪的孩子都不同。" ], [ 2486656, "佳期如梦之海上繁花", "匪我思存", "他穿着医生的白袍，就站在那里，高且瘦，却令她想到芝兰玉树，深秋的阳光透入明亮的玻璃，淡淡的金色光斑仿佛蝴蝶，停栖在他乌黑的发际。" ], [ 2515196, "原来你还在这里", "辛夷坞", "可是她为什么要坚强？为什么要独立？她只要一个期盼的肩膀供她痛哭一场。" ], [ 2515250, "如果可以这样爱", "千寻千寻", "她和他相爱，被世俗不容, 又互相伤害，到最后想拥有彼此时，老天已不给他们机会" ], [ 2515256, "昭奚旧草", "书海沧生", "以前我从不信神，因为信了神，就要相信报应。我害怕报应，所以不想信。后来神果然没有来，但报应先至。 " ], [ 2549048, "极光之恋", "王千赫", "她从没有像现在这样，感觉距离舞台这样近过。" ], [ 2485408, "十年一品温如言", "书海沧生", "第一年，她贪图美色，爱上他，一盆水泼出百年的冤家。" ], [ 2544514, "借我执拗如少年", "欧阳乾", "他们中的每一个人，都在这个世界上生猛的活过，以自己的热血，撞击着澎湃的红尘。" ], [ 2548974, "《猎灵手记》", "余人、独唱寂寞", "曾几何时，自己走遍天下都没找到这么一个能催旺自己命格的人，而这小子，却在历尽苦难后无意中碰到了这么个人。" ], [ 2544492, "钟情四海", "月关", "他说十八年后，地龙翻身，生死之间，祸福与共！" ], [ 1656720, "格子间女人", "舒仪", "她点起一根烟，百无聊赖地看着青烟在眼前丝丝缭绕，然后袅袅散去。" ], [ 2454174, "最初的相遇，最后的别离", "舒仪著", "你永远都不知道，因为遇见一个人、爱上一个人，你的人生会发生怎样的改变。" ], [ 2500849, "汉月天骄", "十一鸾", "就在山崖高处，一人持弓而立，素袍胜雪，背脊挺得有如剑一般笔直。" ], [ 2571212, "悟空传", "今何在", "他自己笑的快出眼泪来，却突然发现其他人都不笑。" ], [ 2453539, "尸案调查科", "九滴水著", "深夜无人的高粱地，摩的司机被劫杀，凶手临时起意怎么破？" ], [ 2325717, "失宠王妃：全2册", "常延霞（满城烟火）", "他带伤请战，无非是想为她保留住那里的美好" ], [ 2466959, "周梅森作品精选", "周梅森", "六爷武艺高强，刀枪棍棒样样俱精，骑得烈马，使得快枪，更加上浑身是胆。" ], [ 2466980, "神谕", "周梅森", "老夫收徒弟向来就只有几个小要求，首先要背景强大，其次得心高气傲，不屑师父教他，喜欢自己悟道，偶尔还帮师父打人，" ], [ 2466948, "冷血", "周梅森", "哨子响了，尖厉的喧叫把静寂的暗夜撕个粉碎。" ], [ 2466969, "中国制造", "周梅森", "万家灯火和满天繁星把面前这座八朝古都装点得一片辉煌。" ], [ 2664459, "我主沉浮", "周梅森", "共和道矜持的尊严源自权力" ], [ 2466998, "我本英雄", "周梅森", "经验证明，越是重大节日越有可能出点什么意外。" ], [ 2466939, "国殇", "周梅森", "明天一切将会重新开始。他将拥有属于明天的那轮辉煌的太阳。这就是历史将要证明的。" ], [ 2466945, "黑坟", "周梅森", "其实，在不为世人所知之前，田家铺也实实在在地存在着。" ], [ 1191887, "梦想与疯狂", "周梅森", "当监狱的铁门砰然关闭时，孙和平产生了一种异样的感觉。" ], [ 2467038, "三十年河东", "周梅森", "赵会长也看中了玉钏，且又有钱，为玉钏必会千金一掷的。" ], [ 2466947, "军歌", "周梅森", "战俘们诈尸般地从铺上爬起，屁股碰着屁股，脑瓜顶着脑瓜，手忙脚乱地穿衣服、靸鞋子。" ] ], c = getApp();
    Page({
        data: {
            isUserInfo: !0,
            bookid: 0,
            cover: "",
            author: "",
            text: "",
            name: "",
            isShare: !1,
            isShowSwap: !1
        },
        key: "",
        on_getuserinfo(a) {
            a.detail.signature && (this.setData({
                isUserInfo: !0
            }), c.setUserSign(a.detail), c.requestWeixinApi("/v2/data/weixin/index", a => {
                0 === a.status.code && c.getHistory(function(b) {
                    c.writeHistory(Object.assign(b, JSON.parse(a.data[0])));
                });
            }));
        },
        randomBook() {
            const d = a(Math.random() * b.length), e = b[d][0];
            c.get(`/v2/book/${e}`, {
                _fields: "cover,book_name,author_name"
            }, a => {
                0 === a.status.code && this.setData({
                    bookid: e,
                    cover: a.data.cover,
                    text: b[d][3],
                    name: a.data.book_name,
                    author: a.data.author_name
                }, function() {
                    wx.hideLoading();
                });
            }), c.checkShare(e, () => {
                this.setData({
                    isShare: !0
                });
            });
        },
        onLoad() {
            wx.showLoading(), wx.setNavigationBarColor({
                frontColor: "#000000",
                backgroundColor: "#eeeeee"
            }), wx.showShareMenu({
                withShareTicket: !0
            }), this.randomBook();
        },
        onShow() {
            wx.getSetting({
                success: a => {
                    a.authSetting["scope.userInfo"] ? wx.getUserInfo({
                        success: () => {
                            this.setData({
                                isUserInfo: !0
                            });
                        }
                    }) : this.setData({
                        isUserInfo: !1
                    });
                }
            });
        },
        onShareAppMessage() {
            return c.shareSuccess(this.data.bookid, () => {
                c.toBook(this.data.bookid);
            }), {
                title: "解锁《" + this.data.name + "》, 快来和我一起吧!!!",
                imageUrl: this.data.cover,
                path: "/pages/book/home?bookid=" + this.data.bookid
            };
        },
        on_read() {
            c.toBook(this.data.bookid);
        },
        on_input(a) {
            this.key = a.detail.value;
        },
        on_swap() {
            this.setData({
                isShowSwap: !0
            });
        },
        on_swap_cache() {
            this.setData({
                isShowSwap: !1
            });
        },
        on_search() {
            wx.showLoading({
                title: "测算中..."
            }), this.setData({
                isShowSwap: !1
            }), c.get(`/v2/book/search`, {
                key: this.key,
                page: 1,
                num: 100,
                _fields: "cover,author_name,book_name,book_id,total_num,intro"
            }, b => {
                if (0 === b.status.code && b.data.length) {
                    const c = b.data[a(Math.random() * b.data.length)];
                    this.setData({
                        bookid: c.book_id,
                        cover: c.cover,
                        text: c.intro,
                        name: c.book_name,
                        author: c.author_name
                    }, function() {
                        wx.hideLoading();
                    });
                } else this.randomBook();
            });
        }
    });
})();