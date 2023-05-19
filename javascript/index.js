let p1 = 0;
let p2 = 0;
let total_p1 = 0;
let total_p2 = 0;
let flag = 0;

var img1 = document.createElement("img");
var img2 = document.createElement("img");

function getData(){
    if(flag==0){
        p2 = Math.floor((Math.random()*6)+1);
        var getData = document.querySelector("#myForm");
        p1 = getData.value;
        if(Number(p1)===Number(p2)){
            flag =1;
            document.querySelector("h1.heading").innerHTML="Computer chance";
            document.querySelector("p.p1").innerHTML="Your Score : "+total_p1;
        }
        else{
            total_p1 += Number(p1);
            document.querySelector("h1.heading").innerHTML="Your Score : "+total_p1;
        }
        img1.src = "images/dice"+p1+".png";
        img2.src = "images/dice"+p2+".png";
        var div1 = document.getElementById("x1");
        div1.appendChild(img1);
        var div2 = document.getElementById("x2");
        div2.appendChild(img2);
    }
    else if(flag==1){
        p2 = Math.floor((Math.random()*6)+1);
        var getData = document.querySelector("#myForm");
        p1 = getData.value;
        if(Number(p1)===Number(p2)){
            flag =2;
            if(Number(total_p1) === Number(total_p2)){
                document.querySelector("h1.heading").innerHTML="Draw";
            }
            else if(Number(total_p1) > Number(total_p2)){
                document.querySelector("h1.heading").innerHTML="You Win";
            }
            else{
                document.querySelector("h1.heading").innerHTML="Computer Wins";
            }
            document.querySelector("p.p2").innerHTML="Computer Score : "+total_p2;
        }
        else{
            total_p2 += Number(p2);
            document.querySelector("h1.heading").innerHTML="Computer Score : "+total_p2;
        }
        img1.src = "images/dice"+p1+".png";
        img2.src = "images/dice"+p2+".png";
        var div1 = document.getElementById("x1");
        div1.appendChild(img1);
        var div2 = document.getElementById("x2");
        div2.appendChild(img2);
    }
}