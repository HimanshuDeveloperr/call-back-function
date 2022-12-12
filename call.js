 

// ***imp***

 function attachEventlistenerAndFormingAClosure(){

     let count=1;
       const a=  document.querySelector("#click")
     
       a.addEventListener("click",function(){
         console.log ("it is invoked/call back by js when we click the button so it is nothing but a call back function inside our addeventlister just like settime out")
     
         console.log( "clicked"+" "+count ++ +" "+"time")
       })
 }

 attachEventlistenerAndFormingAClosure()