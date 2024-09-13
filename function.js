let cols=[0 ,35,36 ,37,38,39,40,41];
let start=[0,1,2,3,7,8,9,10,14,15,16,17,21,22,23,24,28,29,30,31,35 ,36,37,38];
let startcol=[0,7,14,1,8,15,2,9,16,3,10,17,4,11,18,5,12,19,6,13,20];
let startdiagonal=[3,4,10,5,11,17,6,12,18,13,19,20];
let startrevdiagonal=[0,8,16,1,9,17,2,10,3,7,15,14]

let currentplayer="red";
let cell=0;
let btn=document.querySelectorAll(".choice");
btn.forEach(element => {
    element.style.backgroundColor="red";
});
function play(id){
    id=id-50;
    let currentcell=document.getElementById(`${cols[id]}`);
    let audio=new Audio("/Audio_chipFallingSound.mp3");

    if(currentcell.getAttribute("value")=='0'&&currentplayer=="red"){
        currentcell.style.backgroundColor="red";
        audio.play();
        currentplayer="yellow";
        btn.forEach(element => {
            element.style.backgroundColor="yellow";
        });
        currentcell.setAttribute("value",1);
        checkwin();
        cols[id]=cols[id]-7;
        cell++;

    }else if(currentcell.getAttribute("value")=='0'&&currentplayer=="yellow"){
        currentcell.style.backgroundColor="yellow";
        audio.play();
        currentplayer="red";
        btn.forEach(element => {
            element.style.backgroundColor="red";
        });
        currentcell.setAttribute("value",2);
        cell++;
        checkwin();
        cols[id]=cols[id]-7;
      
    }

  
  
}

function checkwin(){
   
   checkwinner(start,24,1);
   checkwinner(startcol,21,7);
   checkwinner(startdiagonal,12,6);
   checkwinner(startrevdiagonal,12,8);
   checkdraw();
 
}
function checkwinner(start,length,step){
   
    for(let i=0 ;i<length;i++){
        let c1=document.getElementById(start[i]);
        let c2=document.getElementById(start[i]+1*step);
        let c3=document.getElementById(start[i]+2*step);
        let c4=document.getElementById(start[i]+3*step);
        if(c1.getAttribute("value")==c2.getAttribute("value")&&c2.getAttribute("value")==c3.getAttribute("value")&&c3.getAttribute("value")==c4.getAttribute("value")&&c1.getAttribute("value")!=0){
            console.log("win");
            announcewinner(c1.getAttribute("value"));
        }
    }
}

function announcewinner(winner){
    let title=document.getElementById("title");
    let audio=new Audio("/vectory.mp3");

    if(winner==1){
    title.innerHTML="red is the winner";
    btn.forEach(element => {
        element.style.backgroundColor="red";
    });
    }else{

     title.innerHTML="yellow is the winner"
     btn.forEach(element => {
        element.style.backgroundColor="yellow";
    });
    }
   audio.play();
   setTimeout(function(){location.reload()},5000);
   
}
function checkdraw(){
    if(cell==41){
        let title=document.getElementById("title");
        title.innerHTML="no winner";
        setInterval(function(){title.innerHTML+='.'},1000);
        setTimeout(function(){location.reload()},4000);
    }
}

