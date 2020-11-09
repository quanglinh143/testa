function changeImages(id){
     var imgPath=document.getElementById(id).getAttribute('src');
    
     document.querySelector(".img-centerr").setAttribute('src',imgPath);
}