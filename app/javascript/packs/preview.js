document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('message_image').addEventListener('change', function(e){
    const file = e.target.files[0];
    const blob = window.URL.createObjectURL(file);
    const blobHTML = `<img src="${blob}">`;
    document.getElementById('new_message').insertAdjacentHTML('afterend' , blobHTML);
  });
});