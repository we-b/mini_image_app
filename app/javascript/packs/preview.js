document.addEventListener('DOMContentLoaded', function (){
  const ImageList = document.getElementById('image-list')

  const CreateImageHTML = (blob) => {
    let img = document.createElement('img')
    img.setAttribute('src', blob)
    ImageList.appendChild(img)

  }
    document.getElementById('message_images').addEventListener('change', function(e){
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      CreateImageHTML(blob)
    });
  });