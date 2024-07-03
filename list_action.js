const inputbox= document.getElementById("input-box");
const tasklist= document.getElementById("Task-list");
function addTask()
{
    if(inputbox.value==='')
        {
            alert("Enter Task");
        }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        tasklist.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
}
tasklist.addEventListener("click",function(e){
    if(e.target.tagName=='LI'){
        e.target.classList.toggle("checked");
       saveData();
    }
    else if(e.target.tagName==="SPAN")
        {
            e.target.parentElement.remove();
            saveData();
 
        }
},false);
function saveData()
{
    localStorage.setItem("data",tasklist.innerHTML);
}
function showData()
{
    tasklist.innerHTML=localStorage.getItem("data");
}
showData();

