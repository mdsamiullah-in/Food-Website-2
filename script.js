var open = document.getElementById("open");
var icon = document.getElementById("icon");
icon.onclick = function(){
    if(open.style.display == "block"){
        open.style.display = "none";
    }else{
        open.style.display = "block";
    }

}
