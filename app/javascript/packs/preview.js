if (document.URL.match( /new/, /edit/)) {
  document.addEventListener('DOMContentLoaded', function(){
    const ImageList = document.getElementById('image-list')

    const createImageHTML = (blob) => {
       // 画像を表示するためのdiv要素を生成
      const imageElement = document.createElement('div')
      imageElement.setAttribute('id', "image-element")
      let imageElementNum = document.querySelectorAll('#image-element').length

      // 表示する画像を生成
      const blobImage = document.createElement('img')
      blobImage.setAttribute('src', blob)

      // ファイル選択ボタンを生成
      const inputHTML = document.createElement('input')
      inputHTML.setAttribute('id', `message_image_${imageElementNum}`)
      inputHTML.setAttribute('name', 'message[images][]')
      inputHTML.setAttribute('type', 'file')
      //=<input id="message_image_[番号]" name="message[images][]" type="file">というHTMLの要素を生成することができます。

      // 生成したHTMLの要素をブラウザに表示させる
      imageElement.appendChild(blobImage)
      imageElement.appendChild(inputHTML)
      ImageList.appendChild(imageElement)
    }

    document.getElementById('message_image').addEventListener('change', function(e){
      // 画像が表示されている場合のみ、すでに存在している画像を削除する
      // const imageContent = document.querySelector('img');
      // if (imageContent){
      //   imageContent.remove();
      // };
      // 後から追加実装するfurima-29297では必要な記述

      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob)
    });
  });
}