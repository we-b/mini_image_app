document.addEventListener('DOMContentLoaded', function(){
  if ( document.getElementById('message_image')){
    const ImageList = document.getElementById('image-list');

    const createImageHTML = (blob) => {
      const imageElement = document.createElement('div');                             //createElement('要素')メソッドで要素作ってる

      const blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);                                            //画像情報(blob)を生成したimg要素のsrc属性に指定する
      imageElement.appendChild(blobImage);                                            //作った要素をブラウザに表示 親要素.appendChild(追加する子要素);
      ImageList.appendChild(imageElement);                                            //ImageList > imageElement > blobImage 
    };

    document.getElementById('message_image').addEventListener('change', function(e){
      const imageContent = document.querySelector('img');                             //画像が表示されている場合のみ、既に表示されている画像を削除する記述
      if (imageContent){
        imageContent.remove();
      }
      const file = e.target.files[0];                                                 //イベントハッシュeのtargetの中からfileを取得、代入
      const blob = window.URL.createObjectURL(file);                                  //取得した画像のURL作ってる

      createImageHTML(blob);
    });
  }
});