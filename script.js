let input = document.querySelector(".form-input")
let addbtn = document.querySelector(".fa-plus")
let list = document.querySelector("ul")




input.addEventListener("keyup", (e) => {
    e.preventDefault();
    let msg = document.querySelector("small")
    if (e.target.value.length < 5 || e.target.value.trim() == "") {
        msg.style.display = "inline"

    }
    else {
        msg.style.display = "none"
    }

})

addbtn.addEventListener("click", (e) => {
    e.preventDefault();
    let listItem = document.createElement("li")
    listItem.classList.add("list-group-item")
    listItem.classList.add("list-group-item-info")
    listItem.classList.add("d-flex")
    listItem.classList.add("align-items-center")

    let span = document.createElement("span")
    span.innerText = input.value


    let delbutton = document.createElement("button")
    delbutton.classList.add("deletebtn")
    delbutton.innerHTML = `<i class="fa-solid fa-trash"></i>`

    listItem.append(span, delbutton)
    list.append(listItem)
    input.value = ""

    // delete button
    // let deletebtns = document.querySelectorAll(".deletebtn")

    
        delbutton.addEventListener("click", function (e) {
           if(window.confirm("Want to delete?")){
            e.target.parentElement.parentElement.remove()
           }
        })

    });


let clearbtn=document.querySelector(".clear")
clearbtn.addEventListener("click",function(){
    list.innerHTML=""
})
