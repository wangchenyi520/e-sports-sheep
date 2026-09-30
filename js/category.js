(function () {
  var data = window.SITE_DATA || {};
  var Util = window.Util;

  Util.applyTheme(data.theme);
  Util.applyLayout(data.layout);

  function getId() {
    var m = /[?&]id=([^&]+)/.exec(window.location.search);
    return m ? decodeURIComponent(m[1]) : "";
  }

  var id = getId();
  var cat = (data.categories || {})[id];

  var shopName = (data.shop && data.shop.name) || "本店";
  var shopContacts = (data.shop && data.shop.banner && data.shop.banner.contacts && data.shop.banner.contacts[0]) || "";

  function renderEmpty() {
    document.title = "未找到分类";
    document.getElementById("sub-title").textContent = "没有找到这个分类";
    document.getElementById("sub-tabs").style.display = "none";
    document.getElementById("sub-content").innerHTML =
      '<div class="empty-tip">请检查链接是否正确<br/>或返回首页重新进入</div>';
    Util.renderFooter(document.getElementById("footer"), data.footer);
  }

  function tabImages(tab) {
    if (tab.images && tab.images.length) return tab.images;
    if (tab.image) return [tab.image];
    var title = tab.placeholderTitle || tab.name.replace(/^[🔘◉●○\s]+/, "");
    return [Util.priceTablePlaceholder(title, shopName)];
  }

  function renderContent(tab, animate) {
    var el = document.getElementById("sub-content");
    var imgs = tabImages(tab)
      .map(function (src, i) {
        return '<img src="' + Util.esc(src) + '" alt="' + Util.esc(tab.name) + '" loading="lazy" data-idx="' + i + '" />';
      })
      .join("");
    el.innerHTML = imgs;
    if (animate) {
      el.classList.remove("fade-in");
      void el.offsetWidth;
      el.classList.add("fade-in");
    }
  }

  function activate(idx, tabsEl) {
    var tabs = cat.tabs || [];
    var buttons = tabsEl.querySelectorAll(".tab");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.toggle("active", i === idx);
    }
    renderContent(tabs[idx], true);
    var active = buttons[idx];
    if (active && active.scrollIntoView) {
      active.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }

  function render() {
    if (!cat) {
      renderEmpty();
      return;
    }

    document.title = cat.title + " - " + shopName;

    document.getElementById("sub-title").textContent = cat.title;

    var deco = document.createElement("div");
    deco.className = "sub-deco";
    deco.innerHTML = "<span>❀</span>";
    document.getElementById("sub-tabs").before(deco);

    var tabsEl = document.getElementById("sub-tabs");
    var tabs = cat.tabs || [];
    tabsEl.innerHTML = tabs
      .map(function (t, i) {
        return '<button class="tab' + (i === 0 ? " active" : "") + '" data-idx="' + i + '">' + Util.esc(t.name) + "</button>";
      })
      .join("");

    tabsEl.addEventListener("click", function (e) {
      var btn = e.target.closest(".tab");
      if (!btn) return;
      activate(parseInt(btn.getAttribute("data-idx"), 10), tabsEl);
    });

    renderContent(tabs[0] || { name: "" }, false);
    Util.renderFooter(document.getElementById("footer"), data.footer);
  }

  render();
})();
