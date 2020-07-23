document.addEventListener('DOMContentLoaded', function (){
  // ここから削除
  // const imageContent = document.querySelector('img')
  // if (imageContent){
  // imageContent.remove();
  // }
  // ここまで削除
    document.getElementById('message_images').addEventListener('change', function(e){
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);
      const blobHTML = `<img src="${blob}">`;
      const inputHTML = `<input type='file' name='message[images][]' id="message_images">`;
      document.getElementById('new_message').insertAdjacentHTML('beforebegin', blobHTML);
      document.getElementById('new_message').insertAdjacentHTML('beforeend', inputHTML);
    });
  });