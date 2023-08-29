let bu1=document.getElementById("bu1");
let bu2=document.getElementById("bu2");
let bu3=document.getElementById("bu3");
let sec1="00",min1="00",hour1="00";
let hour=document.getElementById("hours");
let min=document.getElementById("minutes");
let sec=document.getElementById("second");
bu1.addEventListener("click",()=>{
  
clear=setInterval(()=>{
    sec1++;
    sec1=sec1>=10?sec1:"0"+sec1;
   
    if(sec1>=60){
        sec1=0;
        min1++;
        min1=min1>=10?min1:"0"+min1;
        
    }
    
    else if(min1>=60){

        min1=0;
        hour1++;
    }
sec.innerHTML=sec1;
min.innerHTML=min1+":";
hour.innerHTML=hour1 +":";
},1000)

})
bu2.addEventListener("click",()=>{
    clearInterval(clear);
})
bu3.addEventListener("click",()=>{
  clearInterval(clear);
 sec1="00",min1="00",hour1="00";
  sec.innerHTML=sec1;
min.innerHTML=min1+":";
hour.innerHTML=hour1 +":";


})
// {
//     let hour=document.getElementById("hour").value;
//     let min=document.getElementById("min").value;
//     let sec=document.getElementById("sec").value;
//     if(hour==0 && min==0 && sec==0){
//         document.getElementById("hint").innerHTML="Please enter the value to countdown";
//     }
//     else if(hour>0 || min>0 || sec>0){
//         document.getElementById("hint").innerHTML=" ";
//     }
// })
// bu2.addEventListener("click",()=>{
//      let hour=document.getElementById("hour").value;
//     let min=document.getElementById("min").value;
//     let sec=document.getElementById("sec").value;
//     if(hour==0 && min==0 && sec==0){
//         document.getElementById("hint").innerHTML="Please enter the value to countdown";
//     }
//       else if(hour>0 || min>0 || sec>0){
//         document.getElementById("hint").innerHTML=" ";
//     }

// })
// bu3.addEventListener("click",()=>{
//     let hour=document.getElementById("hour").value;
//     let min=document.getElementById("min").value;
//     let sec=document.getElementById("sec").value;
//      if(hour==0 && min==0 && sec==0){
//         document.getElementById("hint").innerHTML="Please enter the value to countdown";
//     }
//     if(hour>0 || min>0 || sec>0){
//         document.getElementById("hint").innerHTML=" ";
//     }
//     document.getElementById("hour").value="00";
//     document.getElementById("min").value="00";
//     document.getElementById("sec").value="00";
// }
// )