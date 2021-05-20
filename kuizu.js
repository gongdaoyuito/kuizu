const question = "ゲーム市場、最も売れたゲーム機は次のうちどれ？"
const answers = ["スーパーファミコン", "プレーステーション２", "ニンテンドースイッチ", "ニンテンドーDS",];
const correct = "ニンテンドーDS"
let seikaihuseikai = document.getElementById("seigohanntei")
console.log(seikaihuseikai)
//ボタンをクリックしたら正誤判定
function itiClick() {
  document.getElementById("seigohanntei").textContent = "不正解!";
  document.getElementById( 'sound-file' ).play() ;
};
function niClick() {
  document.getElementById("seigohanntei").textContent = "正解!";
  document.getElementById( 'sound-file2' ).play() ;
};
function sanClick() {
  document.getElementById("seigohanntei").textContent = "不正解!";
  document.getElementById( 'sound-file' ).play() ;
};
function yonClick() {
  document.getElementById("seigohanntei").textContent = "不正解!";
  document.getElementById( 'sound-file' ).play() ;
};

console.log(document.getElementsByTagName("seigohanntei"))