// window.alert("Hello JavaScript");



// 函式宣告式
// function minNumber(num1, num2){
//     let minN = num1;
//     if(num1 > num2){
//         minN =num2;
//     }
//     return minN;
// }



// 函式箭頭式
const minNumber = (num1, num2) => {
    let minN = num1;
    if(num1 > num2){
        minN = num2;
    }
    return minN;
}

const BCount = str => {
    let count = 0;
    for(let c of str){
        if(c === "B"){
            count++;
        }
    }
    return count;
}