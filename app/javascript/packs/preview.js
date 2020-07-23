document.addEventListener('DOMContentLoaded', function (){
  const clickLabel = () => {
    const inputAll = document.getElementsByName('message[images][]');
    const inputLast = inputAll[inputAll.length -1];
    const inputId = inputLast.getAttribute('id');
    document.getElementById('click-upload').setAttribute('for', inputId);
    return inputLast;
  };

  const changeInput = (inputArrayLast) => {
    document.getElementById('new_message').addEventListener('change', function(e){
      let file = e.target.files[0];
      let blob = window.URL.createObjectURL(file);
      let blobHTML = `<img src="${blob}">`;
      console.log(blobHTML)
      const i = Number(e.target.getAttribute('data-index')) +1;
      const inputHTML = `<input type='file' name='message[images][]' id="message_images_${i}" data-index="${i}">`;
      document.getElementById('new_message').insertAdjacentHTML('beforebegin', blobHTML);
      document.getElementById('new_message').insertAdjacentHTML('beforeend', inputHTML);
    });
  };

  document.getElementById('click-upload').addEventListener('click', function(){
    const inputArrayLast = clickLabel();
    changeInput(inputArrayLast);
  });
});