const startBtn = document.querySelector(".control-btn span")
let blocksContainer = document.querySelector(".memory-game-blocks");
// Create Array From Game Blocks
let blocks = Array.from(blocksContainer.children);
startBtn.addEventListener("click" , ()=>{

    let yourNmae = prompt("what is your name?")
if(yourNmae == "" || yourNmae == null){
    document.querySelector(".name span").innerHTML = "Unknown"
}else{
    document.querySelector(".name span").innerHTML = yourNmae

}

document.querySelector(".control-btn").remove()
})

let duration = 1000;


let orderRange = [...Array(blocks.length).keys()]
//ORDERrANGE = [0,1,2,3,4,5,6,7,8,9,,10,11,12,13,14,15,16,17,18,19],
//ORDERrANGE = [18,1,2,3,4,5,6,19,8,9,,10,11,12,13,14,15,16,17,1,7],

shuffle(orderRange);

//add order Css proporty
blocks.forEach((block , index )=>{
block.style.order= orderRange[index];
block.addEventListener("click" ,() =>{
    flippedBlock(block)
})

})


//flip function
function flippedBlock(select){
    select.classList.add("is-flipped")

    //collect flipped card 
    let allFlipedBloks = blocks.filter(flippedBlock => flippedBlock.classList.contains("is-flipped"))
if(allFlipedBloks.length ===2){
//stop clicking
stopClicking()

matchedBlock(allFlipedBloks[0] ,  allFlipedBloks[1])

}
}
///shuffle function

function shuffle(aaray){
    //settings vars

    let current = aaray.length
    let temmp;
    let random ;


    while(current > 0){
        //get randomNum
        random = Math.floor(Math.random()*current)
        current--
        temmp = aaray[current]
        aaray[current] = aaray[random]

        aaray[random] = temmp


    }
    return aaray
}


function stopClicking(){
blocksContainer.classList.add("no-clicking")


setTimeout(()=>{
    blocksContainer.classList.remove("no-clicking")

} , duration )


}


function matchedBlock(first , second ){

    let triesElement = document.querySelector(".tries span")
        if(first.dataset.photo === second.dataset.photo){
                first.classList.remove("is-flipped")
                second.classList.remove("is-flipped")

                first.classList.add("matched")
                second.classList.add("matched")
        }
        else{

            triesElement.innerHTML = parseInt( triesElement.innerHTML)+1;        }
        setTimeout(()=>{
                first.classList.remove("is-flipped")
            second.classList.remove("is-flipped")


        } , duration)



}







