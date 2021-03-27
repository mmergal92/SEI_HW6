$(()=>{
    let turn = 0;;
    $(".button").click(function(){
        if (turn == 0){
            if ($(this).text() == "X or O"){
                $(this).text("X");
                turn = 1;
                console.log("Player O turn")
            }
        }else {
            if (turn == 1){
                if ($(this).text() == "X or O"){
                    $(this).text("O");
                    turn = 0;
                    console.log("Player X turn")
                }
            }
        }
        // console.log($btn1.click())
        winFunc();
        checkTie();  
    })
})

function winFunc() {
    if($('#box1').text() == "X" && ($('#box1').text() == $('#box2').text() && $('#box2').text() == $('#box3').text())){
        alert("Player X won")
        console.log("Player X won")
    } else if($('#box1').text() == "O" && ($('#box1').text() == $('#box2').text() && $('#box2').text() == $('#box3').text())){
        alert("Player O won")
        console.log("Player O won")
    } else if($('#box4').text() == "X" && ($('#box4').text() == $('#box5').text() && $('#box5').text() == $('#box6').text())){
        alert("Player X won")
        console.log("Player X won")
    } else if($('#box4').text() == "O" && ($('#box4').text() == $('#box5').text() && $('#box5').text() == $('#box6').text())){
        alert("Player O won")
        console.log("Player O won")
    } else if($('#box7').text() == "X" && ($('#box7').text() == $('#box8').text() && $('#box8').text() == $('#box9').text())){
        alert("Player X won")
        console.log("Player X won")
    } else if($('#box7').text() == "O" && ($('#box7').text() == $('#box8').text() && $('#box8').text() == $('#box9').text())){
        alert("Player O won")
        console.log("Player O won")
    } else if($('#box1').text() == "X" && ($('#box1').text() == $('#box4').text() && $('#box4').text() == $('#box7').text())){
        alert("Player X won")
        console.log("Player X won")
    } else if($('#box1').text() == "O" && ($('#box1').text() == $('#box4').text() && $('#box4').text() == $('#box7').text())){
        alert("Player O won")
        console.log("Player O won")
    } else if($('#box2').text() == "X" && ($('#box2').text() == $('#box5').text() && $('#box5').text() == $('#box8').text())){
        alert("Player X won")
        console.log("Player X won")
    } else if($('#box2').text() == "O" && ($('#box2').text() == $('#box5').text() && $('#box5').text() == $('#box8').text())){
        alert("Player O won")
        console.log("Player O won")
    } else if($('#box3').text() == "X" && ($('#box3').text() == $('#box6').text() && $('#box6').text() == $('#box9').text())){
        alert("Player X won")
        console.log("Player X won")
    } else if($('#box3').text() == "O" && ($('#box3').text() == $('#box6').text() && $('#box6').text() == $('#box9').text())){
        alert("Player O won")
        console.log("Player O won")
    } else if($('#box1').text() == "X" && ($('#box1').text() == $('#box5').text() && $('#box5').text() == $('#box9').text())){
        alert("Player X won")
        console.log("Player X won")
    } else if($('#box1').text() == "O" && ($('#box1').text() == $('#box5').text() && $('#box5').text() == $('#box9').text())){
        alert("Player O won")
        console.log("Player O won")
    } else if($('#box3').text() == "X" && ($('#box3').text() == $('#box5').text() && $('#box5').text() == $('#box7').text())){
        alert("Player X won")
        console.log("Player X won")
    } else if($('#box3').text() == "O" && ($('#box3').text() == $('#box5').text() && $('#box5').text() == $('#box7').text())){
        alert("Player O won")
        console.log("Player O won")
    } else {
        console.log("No winners yet")
    }
}

function checkTie(){
    if (($('#box1').text() == "X" || ($('#box1').text() == "O")) && ($('#box2').text() == "X" || ($('#box2').text() == "O")) && ($('#box3').text() == "X" || ($('#box3').text() == "O")) 
    && ($('#box4').text() == "X" || ($('#box4').text() == "O")) && ($('#box5').text() == "X" || ($('#box5').text() == "O")) && ($('#box6').text() == "X" || ($('#box6').text() == "O"))
    && ($('#box7').text() == "X" || ($('#box7').text() == "O")) && ($('#box8').text() == "X" || ($('#box8').text() == "O")) && ($('#box9').text() == "X" || ($('#box9').text() == "O")))
    {
        alert("Tie")
        console.log("Tie for this game")
    }
}

/*
Was testing this array but it didnt work yet:

let winArray = [$btn1.text, $('#box2').text(), $('#box3').text()]
function winFunc(){
    // let v = true;
    for (let i=0; i < winArray.length; i++){
        if (winArray[i].text !== "X"){
            // v = false;
            console.log('no')
        }
        else{
            console.log("X wins")
        }
    }
    // console.log(winArray[0].text)
    console.log($btn1.text)
 }
/* Code i was working on with Nori:
let winArray = [$('#box1'), $('#box2'), $('#box3')]
function winFunc(){
    let v = true;
    for (let i=0; i < winArray.length; i++){
        if (winArray[i].text !== "X"){
            v = false;
            console.log(winArray[i].text())
        }
    }
    // console.log($('#box1').text())
    // console.log($('#box2').text())
    if (v == true){
        console.log("X Wins")
    }
 }
*/
//Other code I was testing out before:
         // if (($btn1.text == "X") && ($btn2.text == "X") && ($btn3.text == "X")){

// let winArray = [$btn1.text, $btn2.text, $btn3.text]
//         function winFunc(){
//             for (let i=0; i < winArray.length; i++){
//                 if (($(this).text("X") == true) && ($(this).text("X") == true) && ($(this).text("X") == true)){
//             console.log ("Player X Won")
//         }else{
//             console.log ("no winners yet")
//         }
//     }
// }

// let winArray = [$btn1, $btn2, $btn3]
//         function winFunc(){
//             for (let i=0; i < winArray.length; i++){
//                 if (($btn1.text == "X") && ($btn2.text == "X") && ($btn3.text == "X")){
//             console.log ("Player X Won")
//         }else{
//             console.log ("no winners yet")
//         }
//     }
// }
//         winFunc()  
//     })
 // let winArray = [$btn1, $btn2, $btn3]
   
    // $(".button").click(function, winFunc)
// function winFunc(){
        //     if ($btn1.text == "X" && $btn2.text == "X" && $btn3.text == "X"){
        //         console.log ("Player X Won")
        //     }else{
        //         console.log ("no winners")
        //     }
        // }
        // winFunc()
// let winArray = ['#box1','#box2','#box3']
// function winFunc(){
//     for (let i=0; i < winArray.length; i++){
//         if (($('#box1').text == "X") && ($('#box2').text == "X") && ($('#box3').text == "X")){
//             console.log ("Player X Won")
//         }
//     }
// }
//     const $btn1 = $('#box1').val(1);
//     const $btn2 = $('#box2').val(2);
//     const $btn3 = $('#box3').val(3);
//     const $btn4 = $('#box4').val(4);
//     const $btn5 = $('#box5').val(5);
//     const $btn6 = $('#box6').val(6);
//     const $btn7 = $('#box7').val(7);
//     const $btn8 = $('#box8').val(8);
//     const $btn9 = $('#box9').val(9);
