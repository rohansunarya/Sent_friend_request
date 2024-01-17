var isstatus= document.querySelector("h5")
var btn = document.querySelector("#add")

var check = 0;


btn.addEventListener("click",function(){
    if(check ==0){
    isstatus.innerHTML="Friends"
    btn.innerHTML="Remove Friend"
    isstatus.style.color="green"
    check=1;
}
else{
    isstatus.innerHTML="Stranger"
    isstatus.style.color="red"
    btn.innerHTML=" Add Friend"
    check=0;
}
 });
