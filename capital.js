// let names = 'kalyan';
// hgjhsgjdhhjsgdfj
let names='ramanand'

let length= names.length;

if(length==0){
    console.log(names)
}
else if(length==1){
    console.log(names.toUpperCase());
}
else{
    let midd=Math.floor(length/2);
    let op=names.slice(0,midd)+names[midd].toUpperCase()+names.slice(midd+1);
    console.log(op);
}



