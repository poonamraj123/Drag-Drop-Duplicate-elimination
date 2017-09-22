/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var drag_images = document.getElementsByClassName('drag_img');
var drop_cntr = document.getElementById('drop_here');
var img_len = drag_images.length;

for (var i = 0; i < img_len; i++) {

    drag_images[i].addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('cntrId', this.getAttribute('id'))

    });
}
drop_cntr.addEventListener('dragover', function (event) {
    event.preventDefault();
    return false;
});
drop_cntr.addEventListener('drop', function (event) {
  
    var cntrId = event.dataTransfer.getData('cntrId');
      var remove_src = '<img src ="https://maxcdn.icons8.com/windows8/PNG/512/User_Interface/delete_sign-512.png" style = "width:10px" id ="remove_id' + cntrId+'" >';
    imgSrc = document.getElementById(cntrId + '_img').getAttribute('src');
    caption = document.getElementById(cntrId + '_txt').innerHTML,
    html = '<div id = "' + cntrId + 'Container" ><img src=" ' + imgSrc + ' " style = "width:50px;"  />';
    html += "<label>" + caption + " </label>";
    //append X mark image to the new div id for image & caption
    html += remove_src + "</div>";
    
    //checking whether the container has duplicate id
    if (document.getElementById(cntrId + 'Container') === null) {
     //if no any unique image insert into it
  document.getElementById('drop_here').insertAdjacentHTML('afterbegin', html);
  
  document.getElementById('remove_id'+cntrId).addEventListener('click', function () {
        var elementToBeRemove = document.getElementById('remove_id'+cntrId);
         elementToBeRemove.parentNode.remove();
    });
    
    } else {
        alert('Image alreadyExists');
        //remove element onclick
  }
  
});






      