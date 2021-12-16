function kangaroo(x1, v1, x2, v2) {
    // Write your code here

    let res1 = x1 + a1*v1;
    let res2 = x2 + a1*v2;
    while(res1 != res2){
        if(res1 > res2){
            a1++;
            console.log(res1)
        } else{
            a2++;
            console.log(res2)
        }
    }
    console.log('YES')
}

kangaroo(0,3,4,2)

