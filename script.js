function beforesubmit(){
let outputdate=document.querySelector(".outputdate");
let inputdate=document.querySelector(".inputdate");
console.log("inputdate.value",inputdate.value);//date --UserInfo.getLocale() --en_US
let formatteddate=new Date(inputdate.value).toLocaleDateString("en-US");
outputdate.value=formatteddate;

}