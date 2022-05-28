const cardName = document.querySelector("h1");
const que = prompt("which credit card do you use?")
if(que === "visa"){
    cardName.innerText = "Visa"
}if(que === "master card"){
    cardName.innerText = "Master Card"
    cardName.style.fontSize = "2em"
}else{
    document.write("errr")
}