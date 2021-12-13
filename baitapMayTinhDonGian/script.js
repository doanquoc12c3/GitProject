let firstValue = 0;
let secondValue = 0;
let countNumber = 0;
let operator = undefined;
let result = 0;
let numbers1 = [];
let numbers2 = [];

function reply_click(clicked_id){

    if(countNumber === 0){
        if(clicked_id !== '+' && clicked_id !== '-' && clicked_id !== 'x' && clicked_id !=='/' && clicked_id !=='='&& clicked_id !== 'C'){
            console.log(clicked_id);
            numbers1.push(clicked_id);
            console.log(numbers1)
            firstValue = parseInt(numbers1.join(''));
            document.getElementById('display').innerHTML = firstValue;
        } else{
            operator=clicked_id;
            // firstValue = parseInt(numbers1.join(''));
            console.log('gia tri cua so thu nhat la ' + firstValue);
            countNumber = countNumber+1;
            document.getElementById('display').innerHTML = operator;
        }
    } else if( countNumber === 1){
        if(clicked_id !== '+' && clicked_id !== '-' && clicked_id !== 'x' && clicked_id !=='/' && clicked_id !== 'C' && clicked_id !=='='){
            numbers2.push(clicked_id);
            console.log(numbers2)
            secondValue = parseInt(numbers2.join(''));
            document.getElementById('display').innerHTML = secondValue;
        } else if(clicked_id === '='){

            console.log('gia tri cua so thu hai vao la ' + secondValue);
            if(operator =='+'){
                result = firstValue + secondValue;

                console.log("tong cua 2 so la " + result)
            } else if(operator == '-'){
                result = firstValue - secondValue;
                console.log('hieu cua 2 so la' + result)
            } else if(operator == 'x'){
                result = firstValue * secondValue;
                console.log('tich cua hai so la ' + result)
            } else if(operator == '/'){
                result = firstValue/secondValue;
                console.log('thuong cua hai so la ' + result)
            }
            document.getElementById('display').innerHTML=result;
            firstValue = 0;
            secondValue = 0;
            operator=undefined;
            numbers1=[];
            numbers2=[];
            result = 0;
            countNumber=0

        }
    }





}