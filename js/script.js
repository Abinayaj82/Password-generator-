const btnCopy=document.querySelector('#btnCopy');
const outputElemant=document.querySelector('#output');
const numberElement=document.querySelector('#number');
const capitalElement=document.querySelector('#capital');
const smallElement=document.querySelector('#small');
const symbolElement=document.querySelector('#symbol');
const passwordLengthElement=document.querySelector('#length');
const frm=document.querySelector('#frm');


//button click to copy password
 btnCopy.addEventListener('click',async()=>{
    const pass= outputElemant.value;
    if(pass){
       await navigator.clipboard.writeText('pass');
       alert("code is copied to clipboard");
    }
    else{
        alert('There is no password to copy');
    }
});
/*
ASCII - American Standard Code for Information Interchange

0-128
0-255

65-90  -  A-Z
97-122 -  a-z
48-57  -  0-9
32     -  space

*/

function generateRandomChar(min,max){
    const limit=max-min+1;
    return String.fromCharCode(Math.floor(Math.random()*limit)+min);
}
function capitalValue(){
    return generateRandomChar(65,90);
}
function smallValue(){
    return generateRandomChar(97,122);
}
function numberValue(){
    return generateRandomChar(48,57);
}
function symbol(){
    var symbol="!~@#$%^&*(){}[]";
    return  symbol[Math.floor(Math.random()*symbol.length)];
} 
const functionArray=[
    {
        element:numberElement,
        fun:numberValue
    },
    {
        element:capitalElement,
        fun:capitalValue
    },
    {
        element:smallElement,
        fun:smallValue
    },
    {
        element:symbolElement,
        fun:symbol
    }
    

];
frm.addEventListener('submit',(e)=>{
    e.preventDefault();
 const limit=passwordLengthElement.value;
 let generatedPassword="";
 const funArray=functionArray.filter(({element})=>element.checked);
 for(i=0;i<limit;i++){
    const index=Math.floor(Math.random()*funArray.length);
    const letter=funArray[index].fun();
    generatedPassword+=letter;
}
 outputElemant.value=generatedPassword;
});