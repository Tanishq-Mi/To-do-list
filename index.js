const inputbox = document.getElementById("input-box");
const listElement = document.getElementById("list-elements");

function AddTask() {
    if (inputbox.value === "") {
        alert("YOU MUST WRITE SOMETHING");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listElement.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = '';
    savedata();
}

listElement.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    savedata();}
},false);


function savedata(){
    localStorage.setItem("data",listElement.innerHTML);
}
function showdata(){listElement.innerHTML=localStorage.getItem("data");}
showdata();