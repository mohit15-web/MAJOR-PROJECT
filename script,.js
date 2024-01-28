window.onscroll = function(){
    scrollFunction();
}

function scrollFunction(){
    var navbar = document.getElementById("navbar");
    if(document.body.scrollTop > 20){
        navbar.classList.add("transparent");
    }else{
        navbar.classList.remove("transparent");
    }
}