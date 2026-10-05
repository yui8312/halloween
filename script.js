const input=document.getElementById("trickInput");
const button=document.getElementById("trickButton");
const character=document.getElementById("character");
const candy=document.getElementById("candy");
const sayArea=document.querySelector(".say-area");

const characters=["👻","💀","🧟","👁️","🎃","🤡"];
const candies=["🍪","🍫","🍬","🍭","🧁","🍩"];

button.addEventListener("click",function(){
    const text=input.value.trim();
    if(
        text==="トリック・オア・トリート"||
        text==="トリックオアトリート"||
        text==="とりっくおあとりーと"||
        text==="Trick or Treat"||
        text==="Trick or treat"||
        text==="trick or treat"||
        text==="トリック オア トリート"||
        text==="とりっく おあ とりーと"||
        text==="TrickorTreat"||
        text==="Trickortreat"||
        text==="trickortreat"||
        text==="トリック・オア・トリート!"||
        text==="トリックオアトリート!"||
        text==="とりっくおあとりーと!"||
        text==="Trick or Treat!"||
        text==="Trick or treat!"||
        text==="trick or treat!"||
        text==="Trick or Treat !"||
        text==="trick or treat !"||
        text==="トリック オア トリート!"||
        text==="とりっく おあ とりーと!"||
        text==="トリック オア トリート !"||
        text==="とりっく おあ とりーと !"||
        text==="TrickorTreat!"||
        text==="Trickortreat!"||
        text==="trickortreat!"||
        text==="おかしをくれなきゃいたずらしちゃうぞ"||
        text==="お菓子をくれなきゃいたずらしちゃうぞ"||
        text==="おかしをくれなきゃイタズラしちゃうぞ"||
        text==="お菓子をくれなきゃイタズラしちゃうぞ"||
        text==="おかしをくれなきゃいたずらしちゃうぞ！"||
        text==="お菓子をくれなきゃいたずらしちゃうぞ！"||
        text==="おかしをくれなきゃイタズラしちゃうぞ！"||
        text==="お菓子をくれなきゃイタズラしちゃうぞ！"
        
        
    ){

        sayArea.style.display="none";

        setTimeout(function(){
            const randomCharacter=characters[
                Math.floor(Math.random()*characters.length)
            ];

            character.textContent=randomCharacter;
            character.style.display="block";
            character.classList.add("appear");
        
        setTimeout(function(){
            character.classList.remove("appear");
            character.classList.add("leave");

        setTimeout(function(){
            const randomCandy=candies[
                Math.floor(Math.random()*candies.length)
            ];

            candy.textContent=randomCandy;
            candy.style.display="block";
        },1500);
    },3000);      
},1500);
}
});

candy.addEventListener("click",function(){
    candy.style.display="none";
    character.style.display="none";
    character.classList.remove("appear");
    character.classList.remove("leave");
    sayArea.style.display="block";
    input.value="";
});