/**
 * =====================================================
 *  店铺菜单页 · 内容配置文件
 *  改内容只需要改这一个文件，改完保存刷新页面即可
 * =====================================================
 *
 *  【怎么换成自己的图片？】
 *  1. 把图片放进 assets 文件夹（例如 assets/table-1.jpg）
 *  2. 在下面把对应位置的 image 填成 'assets/table-1.jpg'
 *  3. image 留空('')时，页面会自动显示一张占位图，方便先看效果
 */
window.SITE_DATA = {
  /* ============ 店铺信息 ============ */
  shop: {
    name: "电竞羊",
    slogan: "陪玩 · 护航 · 趣味单",
    // 顶部横幅图片；留空则用下面的文字横幅
    banner: {
      image: "", // 例如 'assets/banner.jpg'（推荐尺寸 1500x600 左右）
      title: "电竞羊",
      subtitle: "陪玩 · 护航 · 趣味单 · 全天在线",
      contacts: ["点单搜索：公众号 电竞羊", "KOOK 频道：000000", "客服微信：dianjingyang"],
    },
  },

  /* ============ 主题配色（改这里可以整体换色） ============ */
  theme: {
    pageBg: "#fbe0ee", // 页面背景（粉色）
    cardHeader: "#ffc2cd", // 卡片标题栏颜色
    cardBorder: "#2b3a4a", // 卡片描边颜色
    accent: "#cc0000", // 选中状态红（Tab 选中色）
  },

  /* ============ 页面宽度（手机端铺满，桌面端居中） ============ */
  layout: {
    maxWidth: "480px",
  },

  /* ============ 主页卡片 ============
   * 每个卡片有两种类型：
   *  1) 菜单卡片：{ title: '标题', items: [...] }，一格格分类按钮
   *  2) 大图卡片：{ type: 'image', image: '', caption: '标题' }，如“下单须知”长图
   *
   * items 每一项：
   *   name     分类名称
   *   emoji    占位图标（换成真实图片时删掉 emoji，填 image）
   *   image    图标图片路径，如 'assets/icons/hot.png'
   *   bg       占位图标的背景色（可选）
   *   link     点击跳转，指向 category.html?id=xxx（xxx 要在下面 categories 里存在）
   *   scrollTo 点击滚动到页面上某个元素（与 link 二选一），如 'notice'
   */
  cards: [
    {
      title: "本店各品类价格表",
      items: [
        { name: "热门爆款", emoji: "🔥", bg: "#ffe3ec", link: "category.html?id=baokuan" },
        { name: "陪玩小时单", emoji: "⏰", bg: "#e3f1ff", link: "category.html?id=hourly" },
        { name: "基础护航体验单", emoji: "🛡️", bg: "#e8ffe9", link: "category.html?id=escort" },
        { name: "新赛季3x3", emoji: "🆕", bg: "#fff3d6", link: "category.html?id=season" },
      ],
    },
    {
      title: "本店各品类价格表(1)",
      items: [
        { name: "趣味单大合集", emoji: "🎮", bg: "#f2e6ff", link: "category.html?id=fun1" },
        { name: "趣味单大合集2", emoji: "🎲", bg: "#ffe9dd", link: "category.html?id=fun2" },
        { name: "大型趣味单", emoji: "🐲", bg: "#ffe3ec", link: "category.html?id=fun3" },
      ],
    },
    {
      title: "VIP",
      items: [
        { name: "VIP预存表", emoji: "💎", bg: "#e3f1ff", link: "category.html?id=vip" },
        { name: "⬇️下单须知/权益⬇️", emoji: "📋", bg: "#fff3d6", scrollTo: "notice" },
      ],
    },
    {
      type: "image",
      id: "notice",
      caption: "下单须知/权益",
      // 把长图路径填到这里，例如 'assets/notice.jpg'
      image: "",
    },
  ],

  /* ============ 分类子页（价格表） ============
   * 每个分类：{ 标题, tabs: [...] }
   * 每个 tab : { name: '名字', image: '图片路径' }
   *  - 原站 tab 名字自带的 🔘 圆点就是名字的一部分，可以自己删改
   *  - 一个 tab 也可以放多张图：images: ['xx.jpg', 'yy.jpg']
   *  - image 留空会显示自动生成的占位价格表
   */
  categories: {
    baokuan: {
      title: "热门爆款单价表",
      tabs: [
        { name: "🔘课程表", image: "" },
        { name: "🔘神秘黑洞", image: "" },
        { name: "🔘咱俩练练", image: "" },
        { name: "🔘石头剪刀布", image: "" },
        { name: "🔘黄金矿工", image: "" },
        { name: "🔘S级兑换", image: "" },
        { name: "🔘十二星座", image: "" },
        { name: "🔘爆款/防御力", image: "" },
      ],
    },
    hourly: {
      title: "陪玩小时单",
      tabs: [
        { name: "🔘基础陪玩", image: "" },
        { name: "🔘进阶陪玩", image: "" },
        { name: "🔘包天包周", image: "" },
      ],
    },
    escort: {
      title: "基础护航体验单",
      tabs: [
        { name: "🔘体验护航", image: "" },
        { name: "🔘高级护航", image: "" },
        { name: "🔘顶级护航", image: "" },
      ],
    },
    season: {
      title: "新赛季3x3",
      tabs: [
        { name: "🔘3x3速刷", image: "" },
        { name: "🔘3x3保底", image: "" },
      ],
    },
    fun1: {
      title: "趣味单大合集",
      tabs: [
        { name: "🔘美美得吃", image: "" },
        { name: "🔘超级加倍", image: "" },
      ],
    },
    fun2: {
      title: "趣味单大合集2",
      tabs: [
        { name: "🔘趣味玩法一", image: "" },
        { name: "🔘趣味玩法二", image: "" },
      ],
    },
    fun3: {
      title: "大型趣味单",
      tabs: [
        { name: "🔘大型玩法一", image: "" },
        { name: "🔘大型玩法二", image: "" },
      ],
    },
    vip: {
      title: "VIP预存表",
      tabs: [
        { name: "🔘VIP权益", image: "" },
        { name: "🔘预存档位", image: "" },
      ],
    },
  },

  /* ============ 页脚 ============ */
  footer: {
    poweredBy: "本页面由",
    brand: "电竞羊",
    brandLink: "", // 可填链接，如公众号地址；留空则纯文字
    poweredSuffix: "提供技术支持",
    disclaimer: "免责声明",
    disclaimerLink: "",
  },
};
