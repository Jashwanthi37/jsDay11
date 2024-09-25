let input=document.getElementById("input");
let addnote=document.getElementById("addnote");

addnote.addEventListener("click",function(){
    let div=document.createElement("div");
    div.innerText=input.value;
    document.body.appendChild(div);
    div.className="main";
    let div1=document.createElement("div");
    document.body.appendChild(div1);
    div1.className="section"
    let button=document.createElement("button");
    button.className="remove";
    button.innerText="Remove";
    div1.appendChild(button);
    button.addEventListener("click" ,function(){
        div.remove()
        div1.remove()
    });
    let button1=document.createElement("button");
    button1.innerText="Edit";
    button1.className="edit";
    div1.appendChild(button1)
    button1.addEventListener("click" ,function(){
        div.contentEditable=true;
        div.focus();
    });

    

})



