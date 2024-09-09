let cols=[0 ,35,36 ,37,38,39,40,41];
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
   
   checkrow();
   checkcol();
   checkdaigonal();
   checkrevdaigonal();
   checkdraw();
 
}
function checkrow(){
    let startrow=[0,1,2,3,7,8,9,10,14,15,16,17,21,22,23,24,28,29,30,31,35 ,36,37,38];
    for(let i=0 ;i<24;i++){
        let c1=document.getElementById(startrow[i]);
        let c2=document.getElementById(startrow[i]+1);
        let c3=document.getElementById(startrow[i]+2);
        let c4=document.getElementById(startrow[i]+3);
        if(c1.getAttribute("value")==c2.getAttribute("value")&&c2.getAttribute("value")==c3.getAttribute("value")&&c3.getAttribute("value")==c4.getAttribute("value")&&c1.getAttribute("value")!=0){
            console.log("win");
            announcewinner(c1.getAttribute("value"));
        }
    }
}
function checkcol(){
    let startcol=[35,28,21,36,29,22,37,30,23,38,31,24,39,32,25,40,33,26,41,34,27];
    for(let i=0 ;i<21;i++){
        let c1=document.getElementById(startcol[i]);
        let c2=document.getElementById(startcol[i]-7);
        let c3=document.getElementById(startcol[i]-14);
        let c4=document.getElementById(startcol[i]-21);
        if(c1.getAttribute("value")==c2.getAttribute("value")&&c2.getAttribute("value")==c3.getAttribute("value")&&c3.getAttribute("value")==c4.getAttribute("value")&&c1.getAttribute("value")!=0){
            console.log("win");
          
            announcewinner(c1.getAttribute("value"));
        }
    }
}

function checkdaigonal(){
    let startdiagonal=[35,29,23,36,30,24,37,31,38,28,22,21];
    for(let i=0 ;i<12;i++){
        let c1=document.getElementById(startdiagonal[i]);
        let c2=document.getElementById(startdiagonal[i]-6);
        let c3=document.getElementById(startdiagonal[i]-12);
        let c4=document.getElementById(startdiagonal[i]-18);
        if(c1.getAttribute("value")==c2.getAttribute("value")&&c2.getAttribute("value")==c3.getAttribute("value")&&c3.getAttribute("value")==c4.getAttribute("value")&&c1.getAttribute("value")!=0){
            console.log("win");
            announcewinner(c1.getAttribute("value"));
        }
    }
}

function checkrevdaigonal(){
    let startrevdiagonal=[0,8,16,1,9,17,2,10,3,7,15,14]
    for(let i=0 ;i<12;i++){
        let c1=document.getElementById(startrevdiagonal[i]);
        let c2=document.getElementById(startrevdiagonal[i]+8);
        let c3=document.getElementById(startrevdiagonal[i]+16);
        let c4=document.getElementById(startrevdiagonal[i]+24);
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

