
// HTMLドキュメントが読み込み完了したときに「loadイベントが発生しました」とコンソールに出力
$(window).on('load', ()=> {
  // 「loadイベントが発生しました」とコンソールに出力
  console.log('「loadイベントが発生しました」')
});

$(function(){
  $(document).on('scroll', ()=>{
    // スクロールした時にコンソールに「scrollイベントが発生しました」と出力する。
    console.log('「scrollイベントが発生しました」')
  })
});