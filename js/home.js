(function () {
  var data = window.SITE_DATA || {};
  var Util = window.Util;

  Util.applyTheme(data.theme);
  Util.applyLayout(data.layout);

  var shop = data.shop || {};
  document.title = (shop.name || "点单菜单") + " - 点单菜单";

  /* ---------- 顶部横幅 ---------- */
  function renderBanner() {
    var el = document.getElementById("banner");
    var banner = shop.banner || {};

    if (banner.image) {
      el.innerHTML = '<img class="banner-img" src="' + Util.esc(banner.image) + '" alt="' + Util.esc(shop.name) + '" />';
      return;
    }

    var contacts = (banner.contacts || [])
      .map(function (c) {
        return '<span class="shop-contact">' + Util.esc(c) + "</span>";
      })
      .join("");

    el.innerHTML =
      '<div class="banner-placeholder">' +
      '<h1 class="shop-name">' +
      Util.esc(banner.title || shop.name || "") +
      "</h1>" +
      (banner.subtitle ? '<p class="shop-slogan">' + Util.esc(banner.subtitle) + "</p>" : "") +
      (contacts ? '<div class="shop-contacts">' + contacts + "</div>" : "") +
      "</div>";
  }

  /* ---------- 卡片列表 ---------- */
  function renderItem(item) {
    var icon = "";
    if (item.image) {
      icon = '<img class="item-icon" src="' + Util.esc(item.image) + '" alt="" loading="lazy" />';
    } else {
      var bg = item.bg ? ' style="background:' + Util.esc(item.bg) + '"' : "";
      icon = '<span class="item-icon"' + bg + ">" + Util.esc(item.emoji || "🛍️") + "</span>";
    }
    return (
      '<div class="grid-item" data-name="' +
      Util.esc(item.name) +
      '" data-link="' +
      Util.esc(item.link || "") +
      '" data-scroll="' +
      Util.esc(item.scrollTo || "") +
      '">' +
      icon +
      '<span class="item-name">' +
      Util.esc(item.name) +
      "</span></div>"
    );
  }

  function renderCard(card) {
    if (card.type === "image") {
      var inner = card.image
        ? '<img class="card-image" src="' + Util.esc(card.image) + '" alt="' + Util.esc(card.caption || "") + '" loading="lazy" />'
        : '<div class="image-placeholder"><div class="ph-title">' + Util.esc(card.caption || "大图") + '</div>这里是占位图<br/>把长图放进 assets 文件夹，并在 js/data.js 里填写路径</div>';
      return (
        '<section class="card-image-wrap" ' +
        (card.id ? 'id="' + Util.esc(card.id) + '"' : "") +
        ">" +
        inner +
        "</section>"
      );
    }

    var items = (card.items || []).map(renderItem).join("");
    return (
      "<section class=\"card\">" +
      '<div class="card-header">' +
      Util.esc(card.title || "") +
      "</div>" +
      '<div class="card-body"><div class="card-grid">' +
      items +
      "</div></div>" +
      "</section>"
    );
  }

  function renderCards() {
    var el = document.getElementById("card-list");
    el.innerHTML = (data.cards || []).map(renderCard).join("");
    el.addEventListener("click", function (e) {
      var node = e.target.closest(".grid-item");
      if (!node) return;
      var link = node.getAttribute("data-link");
      var scrollTo = node.getAttribute("data-scroll");
      if (link) {
        window.location.href = link;
      } else if (scrollTo) {
        var target = document.getElementById(scrollTo);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  renderBanner();
  renderCards();
  Util.renderFooter(document.getElementById("footer"), data.footer);
})();
