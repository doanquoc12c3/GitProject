
function convert(){
    var money = document.getElementById('amount').value;
    var country1 = document.getElementById('goc1').value;
    var country2 = document.getElementById('goc2').value;
    var usMoney = money/23000;
    var vnMoney = money*23000;
if(country1==='vn' && country2==='us'){
        document.getElementById('result').innerHTML = 'Result: ' + "$" + usMoney;
    } 
    else if (country1==='us' && country2 === 'vn'){
        document.getElementById('result').innerHTML = 'Result: ' +  vnMoney + 'VND';
    } 
    else{
        alert('Hay chon loai tien muon quy doi');
    }
}
