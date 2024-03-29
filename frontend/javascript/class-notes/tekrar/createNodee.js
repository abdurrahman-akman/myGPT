const addBtn = document.querySelector("#btn")
const ul = document.createElement("ul")
document.querySelector(".item-list").before(ul)

//! **** 1. click parametresi event nedir onu yazdık. 2. parametre ise   bu olay oldugunda hangi func hareket gerçekleşsin demektir
addBtn.addEventListener("click", (e) => {
  //   console.log("Btn Clicked")
  //   console.log(e)
  //   console.log(e.target)
  //   console.log(e.target.value)

  if (!input.value) {
    alert("Please enter a comment")
  } else {
    const input = document.querySelector("#input")
    const li = document.createElement("li")
    ul.appendChild(li)
    const textLi = document.createTextNode(input.value)
    li.appendChild(textLi)
    input.value = ""
    input.focus()
  }
})

document.querySelector("#input").addEventListener("keydown", (e) => {
    // console.log(e.code)
    // console.log(e.keyCode)
    if(e.code === "Enter") {
        addBtn.click()
    }
})