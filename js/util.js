window.Util = (function () {
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function svgToDataUri(svg) {
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  /* 自动生成一张“价格表”占位图，方便先看效果 */
  function priceTablePlaceholder(title, shopName) {
    var W = 750;
    var rows = [
      ["688 保 1688w", "指定 4 个"],
      ["1288 保 2588w", "指定 5 个"],
      ["2588 保 3588w", "指定 6 个"],
      ["5088 保 3888w", "指定 7 个"],
    ];
    var top = 250;
    var rowH = 110;
    var H = top + rows.length * rowH + 170;
    var parts = [];
    parts.push('<rect x="0" y="0" width="' + W + '" height="' + H + '" rx="20" fill="#FFF9FB"/>');
    parts.push('<rect x="24" y="24" width="' + (W - 48) + '" height="150" rx="16" fill="#FFE3EC"/>');
    parts.push(
      '<text x="' + W / 2 + '" y="95" font-size="40" font-weight="bold" fill="#D14C7E" text-anchor="middle" font-family="PingFang SC, Microsoft YaHei, sans-serif">' +
        esc(title) +
        "</text>"
    );
    parts.push(
      '<text x="' + W / 2 + '" y="140" font-size="24" fill="#B0728F" text-anchor="middle" font-family="PingFang SC, Microsoft YaHei, sans-serif">' +
        esc(shopName) +
        " · 价格表</text>"
    );
    for (var i = 0; i < rows.length; i++) {
      var y = top + i * rowH;
      parts.push(
        '<rect x="40" y="' + y + '" width="' + (W - 80) + '" height="86" rx="43" fill="' +
          (i % 2 === 0 ? "#FFF1E3" : "#FFEFF5") +
          '" stroke="#E8B4C8" stroke-dasharray="8 6" stroke-width="2"/>'
      );
      parts.push(
        '<text x="90" y="' + (y + 56) + '" font-size="34" font-weight="bold" fill="#8A5A3B" font-family="PingFang SC, Microsoft YaHei, sans-serif">' +
          esc(rows[i][0]) +
          "</text>"
      );
      parts.push(
        '<text x="' + (W - 90) + '" y="' + (y + 56) + '" font-size="34" font-weight="bold" fill="#D14C7E" text-anchor="end" font-family="PingFang SC, Microsoft YaHei, sans-serif">' +
          esc(rows[i][1]) +
          "</text>"
      );
    }
    parts.push(
      '<text x="' + W / 2 + '" y="' + (H - 90) + '" font-size="24" fill="#BBBBBB" text-anchor="middle" font-family="PingFang SC, Microsoft YaHei, sans-serif">这是一个占位图，把真实价格表图片路径填到 data.js 即可替换</text>'
    );
    parts.push(
      '<text x="' + W / 2 + '" y="' + (H - 50) + '" font-size="24" fill="#DDDDDD" text-anchor="middle" font-family="PingFang SC, Microsoft YaHei, sans-serif">— 电竞羊 · 占位示意图 —</text>'
    );
    return svgToDataUri(
      '<svg xmlns="http://www.w3.org/2000/svg" width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + " " + H + '">' + parts.join("") + "</svg>"
    );
  }

  /* 自动生成“下单须知”占位长图 */
  function noticePlaceholder(title, shopName, contacts) {
    var W = 750;
    var lines = [
      "1. 打手漏包 / 漏枪，按局补偿，具体以客服判定为准",
      "2. 未按约定撤离点撤离，本局不计入保底",
      "3. 老板挂机 / 掉线导致失败，本局正常计算在内",
      "4. 所有单据保底时长与规则以当期价格表为准",
      "5. 售后有效期为订单结束后 24 小时内",
      "6. 详细权益与赔付规则请咨询客服确认",
    ];
    var H = 320 + lines.length * 96 + 200;
    var parts = [];
    parts.push('<rect x="0" y="0" width="' + W + '" height="' + H + '" rx="20" fill="#3B2A33"/>');
    parts.push(
      '<text x="' + W / 2 + '" y="120" font-size="44" font-weight="bold" fill="#FFC2CD" text-anchor="middle" font-family="PingFang SC, Microsoft YaHei, sans-serif">' +
        esc(title) +
        "</text>"
    );
    parts.push(
      '<text x="' + W / 2 + '" y="175" font-size="24" fill="#C89BAB" text-anchor="middle" font-family="PingFang SC, Microsoft YaHei, sans-serif">' +
        esc(shopName) +
        " · 下单须知</text>"
    );
    parts.push('<rect x="45" y="215" width="' + (W - 90) + '" height="4" rx="2" fill="#5A4350"/>');
    for (var i = 0; i < lines.length; i++) {
      var y = 270 + i * 96;
      parts.push('<rect x="45" y="' + y + '" width="' + (W - 90) + '" height="76" rx="14" fill="#4A3540"/>');
      parts.push(
        '<text x="75" y="' + (y + 50) + '" font-size="26" fill="#F3DCE4" font-family="PingFang SC, Microsoft YaHei, sans-serif">' +
          esc(lines[i]) +
          "</text>"
      );
    }
    parts.push(
      '<text x="' + W / 2 + '" y="' + (H - 130) + '" font-size="30" font-weight="bold" fill="#FF8FB8" text-anchor="middle" font-family="PingFang SC, Microsoft YaHei, sans-serif">下单认准 ' +
        esc(shopName) +
        "</text>"
    );
    parts.push(
      '<text x="' + W / 2 + '" y="' + (H - 80) + '" font-size="24" fill="#C89BAB" text-anchor="middle" font-family="PingFang SC, Microsoft YaHei, sans-serif">' +
        esc(contacts || "") +
        "</text>"
    );
    return svgToDataUri(
      '<svg xmlns="http://www.w3.org/2000/svg" width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + " " + H + '">' + parts.join("") + "</svg>"
    );
  }

  function applyTheme(theme) {
    if (!theme) return;
    var root = document.documentElement.style;
    if (theme.pageBg) root.setProperty("--page-bg", theme.pageBg);
    if (theme.cardHeader) root.setProperty("--card-header", theme.cardHeader);
    if (theme.cardBorder) root.setProperty("--card-border", theme.cardBorder);
    if (theme.accent) root.setProperty("--accent", theme.accent);
  }

  function applyLayout(layout) {
    if (layout && layout.maxWidth) {
      document.documentElement.style.setProperty("--maxw", layout.maxWidth);
    }
  }

  function renderFooter(el, footer) {
    if (!el || !footer) return;
    var brand = footer.brandLink
      ? '<a href="' + esc(footer.brandLink) + '">' + esc(footer.brand) + "</a>"
      : '<span class="em">' + esc(footer.brand) + "</span>";
    var disclaimer = footer.disclaimerLink
      ? '<a href="' + esc(footer.disclaimerLink) + '">' + esc(footer.disclaimer) + "</a>"
      : "<span>" + esc(footer.disclaimer) + "</span>";
    el.innerHTML =
      '<div class="section"><span>' +
      esc(footer.poweredBy) +
      "</span>" +
      brand +
      "<span>" +
      esc(footer.poweredSuffix) +
      '</span></div><div class="section">' +
      disclaimer +
      "</div>";
  }

  return {
    esc: esc,
    svgToDataUri: svgToDataUri,
    priceTablePlaceholder: priceTablePlaceholder,
    noticePlaceholder: noticePlaceholder,
    applyTheme: applyTheme,
    applyLayout: applyLayout,
    renderFooter: renderFooter,
  };
})();
