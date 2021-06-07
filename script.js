// let input = document.querySelector("#input");
// let btn = document.querySelector("#btn");

// // btn.addEventListener('click', ()=>{
// //     let num = input.value
// //     console.log(num)

// // })


// // console.log(num)




// let num;


// btn.addEventListener('click', ()=>{
//     num = input.value
// })


// console.log(num)

// function store(input){
//     let num = input
// }




// function massage(text = "Default parameter"){
//     console.log(`${text}`)
// }


// massage()
// massage("Hello world!")

    var humanV;

    var rockH = document.querySelector("#img-rock").addEventListener('click', ()=>{
        rockH = 0
        if(rockH === 0){
            humanV = 0
        }

        

    })
    var paperH = document.querySelector("#img-paper").addEventListener('click', ()=>{
        paperH = 1
        if(paperH === 1){
            humanV = 1
        }

    })
    var ssicorH = document.querySelector("#img-ssicor").addEventListener('click', ()=>{
        ssicorH = 2
        if(ssicorH === 2){
            humanV = 2
        }

    })

console.log(humanV)



















function play() {
    let value = ['rock', 'paper', 'ssicor'];


    //Bot1 Section
    let bot1 = Math.floor(Math.random() * value.length)
    console.log(value[bot1])

    //Bot2 Section
    let bot2 = Math.floor(Math.random() * value.length)
    console.log(value[bot2])



    function condition() {
        if (bot1 === 0 && bot2 === 1) {
            console.log('Bot2 won' + " by " + value[bot2])
        } else if (bot1 === 1 && bot2 === 0) {
            console.log('bot1 won' + " by " + value[bot1])
        } else if (bot1 === 0 && bot2 === 2) {
            console.log('bot1 won' + " by " + value[bot1])
        } else if (bot1 === 2 && bot2 === 0) {
            console.log('bot2 won' + " by " + value[bot2])
        } else if (bot1 === 1 && bot2 === 2) {
            console.log('bot2 won' + "by " + value[bot2])
        } else if (bot1 === 2 && bot2 === 1) {
            console.log("bot1 won" + " by " + value[bot1])
        } else {
            console.log("Draw")
        }
    }
    condition()
}


    

