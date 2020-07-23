if (window.location.pathname === '/messages/new') {
  document.addEventListener('DOMContentLoaded', function (){
    const ImageList = document.getElementById('image-list')

    // 選択した画像を表示する関数
    const createImageHTML = (blob) => {
      // 画像を表示するためのdiv要素を生成
      const imageElement = document.createElement('div')
      imageElement.setAttribute('id', "image-element")
      let imageElementNum = document.querySelectorAll('#image-element')

      // 表示する画像を生成
      const img = document.createElement('img')
      img.setAttribute('src', blob)

      // ファイル選択ボタンを生成
      const inputHTML = document.createElement('input')
      inputHTML.setAttribute('id', `message_images_${imageElementNum}`)
      inputHTML.setAttribute('name', 'message[images][]')
      inputHTML.setAttribute('type', 'file')

      // 生成したHTMLの要素をブラウザに表示させる
      imageElement.appendChild(img)
      imageElement.appendChild(inputHTML)
      ImageList.appendChild(imageElement)

      inputHTML.addEventListener('change', (e) => {
        file = e.target.files[0];
        blob = window.URL.createObjectURL(file);

        createImageHTML(blob)
      })
    }

    document.getElementById('message_images').addEventListener('change', function(e){
      let file = e.target.files[0];
      let blob = window.URL.createObjectURL(file);

      createImageHTML(blob)

    });
  });
}
