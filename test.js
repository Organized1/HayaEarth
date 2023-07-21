let btn = document.getElementById('btn44');
let foteer = document.getElementById('footer');
window.onscroll = function(){

    if(scrollY >= 300){
        btn.style.display ='block';
        foteer.style.display ='block';
    }else{
        btn.style.display ='none';
    }
}
btn.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"


    })
}
