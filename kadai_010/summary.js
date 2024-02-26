$(function(){
  // 1	「文字色変化」ボタンを押した際に、文字色が任意の色に更新されている
  $('#change-color').on('click', ()=>{
    $('#target').css('color', 'blue');
  });

  // 2	「文字内容変化」ボタンを押した際に、「Hello！」の文字内容に更新されている
  $('#change-text').on('click', ()=>{
    $('#target').text('Hello！')
  });

  // 3	「フェードアウト」ボタンを押した際に、フェードアウトで文字が消える
  $('#fade-out').on('click',()=>{
    $('#target').fadeOut(2000);
  });
  
  // 4	「フェードイン」ボタンを押した際に、フェードインで文字が現れる
  $('#fade-in').on('click',()=>{
    $('#target').fadeIn(2000);
  });

});
