document.querySelector(".cheap").addEventListener("click",function(){
    document.querySelectorAll(".card").forEach((Card)=>{
        Card.remove()
    
})
cheap.forEach((McDonalds)=>{
    new Card(McDonalds.name,
        McDonalds.price,
        McDonalds.image).injectObject()
})
})