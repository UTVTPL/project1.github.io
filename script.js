kn = ["img/Knight1.png", "img/Knight2.png", "img/Knight3.png", "img/Knight4.png"];
pr = ["img/princess1.gif", "img/princess2.png", "img/princess3.png"];
mn = ["img/mine1.png", "img/mine2.png", "img/mine3.png", "img/mine4.png"]
mr = ["img/monstr1.png", "img/monstr2.png", "img/monstr3.png", "img/monstr4.png"]
for (i=1;i<6;i++){
    idImg=document.getElementById('hrd'+i)
    idImg.src="img/heard_full.png";
}
for (i=0;i<16;i++){
    idImg=document.getElementById('kl'+i)
    idImg.src="img/spacer.gif";
}
var indKn,indPr;
var steps=0;
indKn=Math.floor(Math.random()*4);
indPr=Math.floor(Math.random()*3);
kl0.src=kn[indKn];
kl15.src=pr[indPr];
for(i=0;i<7;i++){
    indrndkl=Math.floor(Math.random()*14+1);
    idImg=document.getElementById('kl'+indrndkl);
    indrndmn=Math.floor(Math.random()*4);
    idImg.src=mn[indrndmn];
    
}

    function stepKnight(){
  idImg=document.getElementById('kl'+steps);
 idImg.src="img/spacer.gif";
  steps=steps+Math.floor(Math.random()*3+1);
  idImg=document.getElementById('kl'+steps);
  idImg.src=kn[indKn];
    }
    interval=setInterval(stepKnight,1000)
