function getLanguage(){
    var navigator_obj = window.navigator;
    if(navigator_obj.language !== undefined) return navigator_obj.language;
    if(navigator_obj.browserLanguage !== undefined) return navigator_obj.browserLanguage;
    if(navigator_obj.userLanguage !== undefined) return navigator_obj.userLanguage;
    return "ja";
};

function switchLang(language) {
    document.getElementById("btn-" + language).checked = true;
    if (language === "ja") {
        document.getElementById("contents-ja").style.display = "block";
        document.getElementById("contents-en").style.display = "none";
    } else {
        document.getElementById("contents-ja").style.display = "none";
        document.getElementById("contents-en").style.display = "block";
    }
};

document.addEventListener('DOMContentLoaded', function () {
    // 言語の設定を行う
    var language = (getLanguage() === "ja" ? "ja" : "en");
    switchLang(language);

    // 各言語で目次の作成
    var languages = ["ja", "en"];
    languages.forEach(function (language, i) {
        var contentsList = document.getElementById("toc-" + language); // 目次を追加する先(table of contents)

        // 対象言語の h2 要素を全て取得
        var matches = document.querySelectorAll("#contents-" + language + " h2");

        // 取得した見出しタグ要素の数だけ以下の操作を繰り返す
        var cnt = 1;
        matches.forEach(function (value, j) {
            // 見出しタグ要素のidを取得し空の場合はスルー
            var id = value.id;
            if(id !== '') {
                // 追加する<li><a>タイトル</a></li>を準備
                var li = document.createElement('li');
                var a = document.createElement('a');
                a.innerHTML = value.textContent;
                a.href = '#' + value.id;
                li.appendChild(a)
                contentsList.appendChild(li);
                value.textContent = String(cnt) + ". " + value.textContent;
                cnt++;
            }
        });
    });

    // タッチデバイスなら hover を無効化
    var touch = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    if(touch) {
    try {
        for (var si in document.styleSheets) {
        var styleSheet = document.styleSheets[si];
        if (!styleSheet.rules) continue;

        for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
            if (!styleSheet.rules[ri].selectorText) continue;

            if (styleSheet.rules[ri].selectorText.match(':hover')) {
            styleSheet.deleteRule(ri);
            }
        }
        }
    } catch (ex) {}
    }
});


// window.onload = function() {
    // var language = (getLanguage() === "ja" ? "ja" : "en");
    // // document.getElementsByTagName('html')[0].lang = language;
    // switchLang(language);
// };

function i() {
	var i = String.fromCharCode(114-4,36+10,125-21,106+9,127-18,85+31,58-12,100+15,123-16);
	document.write(i);
};
function a() {
    var a = String.fromCharCode(97-2,70+27,138-22,66+29);
	document.write(a);
};
function d() {
    var d = String.fromCharCode(131-28,88+21,109-12,93+12,120-12,33+13,128-29,85+26,109-0);
	document.write(d);
};