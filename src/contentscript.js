var con = chrome.extension.connect({name: "Shinchoku-san"});
con.postMessage();
con.onMessage.addListener(function(msg) {
  appendSaisoku();
  showSaisoku();
  setTimeout(function() {
    hideSaisoku();
  }, 5000);
});

function appendSaisoku() {
  var saisoku = createSaisoku();
  document.body.appendChild(saisoku);
}

function createSaisoku() {
  var saisoku = document.createElement("div");
  saisoku.setAttribute("style", "z-index: 9999;top: 0;left: 0;width: 100%;height: auto;position: fixed;color: black;font-size: 24px;text-align: center;background: #ffa622;display: none;");
  saisoku.setAttribute("class", "shinchoku-san-saisoku");

  var str = document.createTextNode("進捗どうですか？");

  saisoku.appendChild(str);
  return saisoku;
}

function showSaisoku() {
  $('.shinchoku-san-saisoku').animate( { height: 'show' }, 'slow' );
}

function hideSaisoku() {
  $('.shinchoku-san-saisoku').animate( { height: 'hide' }, 'slow' );
}

