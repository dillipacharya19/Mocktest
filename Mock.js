let arr = [0,1,0,3,12];

function moveZero(arr){
    let bag = [];
    let countOfZero = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] != "0"){
            bag.push(arr[i]);
        } else {
            countOfZero++;
        }
    }
    for(let i=0;i<countOfZero;i++){
        bag.push(0)
    }
    return bag
}
console.log(moveZero(arr));
