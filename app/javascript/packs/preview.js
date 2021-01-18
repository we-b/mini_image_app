if (document.URL.match( /new/ ) || document.URL.match( /edit/ )) {
  document.addEventListener('DOMContentLoaded', function(){
    const ImageList = document.getElementById('image-list');
    document.getElementById('message_image').addEventListener('change', function(e){
      // 画像が表示されている場合のみ、すでに存在している画像を削除する
      const imageContent = document.querySelector('img');
      if (imageContent){
        imageContent.remove();
      }
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      //画像を表示させるため、div要素を生成
      const imageElement = document.createElement('div');

      //表示させる画像の生成
      const blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);

      //ブラウザに表示させる
      imageElement.appendChild(blobImage);
      ImageList.appendChild(imageElement);
    });
  });
}