const firebaseConfig={apiKey:"AIzaSyDTNyohMU-6CKUe-ik65DnSCsOnC-6KzoQ",authDomain:"diepclone-db438.firebaseapp.com",databaseURL:"https://diepclone-db438-default-rtdb.firebaseio.com",projectId:"diepclone-db438",storageBucket:"diepclone-db438.appspot.com",messagingSenderId:"224705209534",appId:"1:224705209534:web:c2be8a4ff68f6b1570eaef",measurementId:"G-6SG5T85ZX2"};firebase.initializeApp(firebaseConfig);const database=firebase.database(),counterRef=database.ref("counter");function showPage(){document.getElementById("container-holder").style.display="none",document.getElementById("page-content").style.display="block",document.getElementById("im-mad").style.display="none",name=document.getElementById("username").value.toUpperCase(),""==name&&(name="BILLY"),document.getElementById("name").innerHTML=name+",<br>"}function hide(){document.getElementById("container-holder").style.display="none",document.getElementById("im-mad").style.display="none"}function reset(){localStorage.clear(),location.reload()}function hidePage(){document.getElementById("container-holder").style.display="none",document.getElementById("page-content").style.display="none",document.getElementById("container-holder").style.display="block"}function mad(){document.getElementById("container-holder").style.display="none",document.getElementById("page-content").style.display="none",document.getElementById("im-mad").style.display="block"}function notMad(){document.getElementById("container-holder").style.display="none",document.getElementById("page-content").style.display="block",document.getElementById("im-mad").style.display="none"}counterRef.transaction(function(e){return"true"===localStorage.getItem("visited")?e:(localStorage.setItem("visited","true"),(e||0)+1)}),window.onload=function(){const e=document.getElementById("loading"),t=document.getElementById("page-content");localStorage.getItem("hasVisited")||(counterRef.transaction(function(e){return(e||0)+1}),localStorage.setItem("hasVisited",!0)),t.style.display="none",e.style.display="block",document.getElementById("container-holder").style.display="none",number=3500*Math.random()+500},counterRef.on("value",function(e){document.getElementById("counter").innerText=e.val()}),counterRef.on("value",function(e){0<e.val()&&(document.getElementById("container-holder").style.display="block",document.getElementById("loading").style.display="none",document.getElementById("loading-text").style.display="none",console.log("Number of visits: "+e.val()),setTimeout(()=>{console.clear()},500))});
