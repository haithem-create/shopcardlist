//alert("This is an alert box"); 
//let y = document.querySelector(".quantity");
//console.log(y);
//let a = document.querySelector(".quantity input").value;


var likes = document.getElementsByClassName("like");

//console.log(boutton like);
for(let i=0;i<likes.length;i++){
    likes[i].addEventListener("click", function(){
        if(likes[i].style.color == "black")
        {
            likes[i].style.color = "red";
        
        } else{
            likes[i].style.color="black"
        }
    })    
}
var i = 0;
//var prix = document.querySelectorAll(".price")[i].innerHTML;

//boutton ajouter
var add = document.getElementsByClassName("plus-btn")
for(let i=0; i<add.length;i++){
    let prix = document.querySelectorAll(".price")[i].innerHTML;

    add[i].addEventListener("click",function(){
        
        let qtadd= document.getElementsByClassName("Quant");        
        qtadd[i].value=parseInt(qtadd[i].value)+1;
    
        //console.log(x);
        let compteur = document.querySelectorAll(".Quant")[i].value;
         //let compteur = document.querySelectorAll(".quantity input");
        let prixart = compteur * prix ;
        document.querySelectorAll(".price")[i].innerHTML= prixart;     
    })        

    
}

var minus = document.getElementsByClassName("minus-btn")
for(let i=0; i<minus.length;i++){
    let prix = document.querySelectorAll(".price")[i].innerHTML;
    minus[i].addEventListener("click",function(){
        let qtminus= document.getElementsByClassName("Quant")        
        if ((qtminus[i].value) >= 1){
            qtminus[i].value -- ;
        }
        let compteur = document.querySelectorAll(".quantity input")[i].value;
        let prixart = compteur * prix ;
        document.querySelectorAll(".price")[i].innerHTML= prixart;
    })
}

var del = document.querySelectorAll(".delete")
for(let i=0; i<del.length;i++){
    del[i].addEventListener("click",function(){
        del[i].parentNode.remove();
    })
}


