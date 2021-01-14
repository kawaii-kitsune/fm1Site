var xmlDocHistory;
var xmlDocNext;
var xmlDocNow;
var isPlaying ;
var audio=new Audio("http://147.95.18.81:8000/live");

function Play(){ 
    
    changeState(true)
    audio.play();
    document.getElementById("buttonPlay").style.display="none" ;
    document.getElementById('buttonPause').style.display="block";
}

function Pause(){
    document.getElementById('buttonPlay').style.display="block"; 
    document.getElementById('buttonPause').style.display="none";
    changeState(false);
    audio.pause()
}
function changeState(state){
    isPlaying=state;
}
function getState(){
    return isPlaying;
}
function SetVolume(val)
{   
    audio.volume=val;
}

function appendHistory(){
    var ul = document.getElementById("list");
    ul.innerHTML = "";
    for(let index=0;index<5;index++){
        var artist=xmlDocHistory.getElementsByTagName("Song")[index].getElementsByTagName("Artist")[0].attributes.name.value
        var title=xmlDocHistory.getElementsByTagName("Song")[index].attributes.title.value
    var listElem=artist+" - "+title;
    
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(listElem));
    li.setAttribute("id", ''+index+'');
    ul.appendChild(li);
    }
}

function reasons(){
    if(document.getElementById("para").style.display=="none"){
        document.getElementById("para").style.display="block";
    }
    else if(document.getElementById("para").style.display=="block"){
        document.getElementById("para").style.display="none";
    }
}

function appendNext(){
    var artist=xmlDocNext.getElementsByTagName("Song")[0].getElementsByTagName("Artist")[0].attributes.name.value
    var title=xmlDocNext.getElementsByTagName("Song")[0].attributes.title.value
    var listElem="Playing Next: --"+artist+" - "+title+"--";
    var ul = document.getElementById("nextSong");
    
    ul.innerHTML=listElem;
}
function appendNowOnAir(){
    var song=xmlDocNow.getElementsByTagName("Song")[0].attributes.title.value;
    var artist=xmlDocNow.getElementsByTagName("Artist")[0].attributes.name.value;
    var artistEl = document.getElementById("title");  
    artistEl.innerHTML=artist+"--"+song;

}

function getXMLFile(path, callback){
    let request = new XMLHttpRequest();
    request.open("GET", path);
    request.setRequestHeader("Content-Type","text/xml");
    request.onreadystatechange=function(){
        if(request.readyState===4 && request.status===200){
            callback(request.responseXML);
        }
    };
    request.send();
}
document.getElementById("logo").onclick= function chatAppear(){
    if(document.getElementById("chat").style.display=='block'){
        document.getElementById("chat").style.display='none'
    }
    else{document.getElementById("chat").style.display='block'}
}
function XMLread(){
getXMLFile("Jazler/AirPlayHistory.xml",function(xml)
{   xmlDocHistory=xml;
    appendHistory();
});

getXMLFile("Jazler/AirPlayNext.xml",function(xml)
{   xmlDocNext=xml;
    appendNext();
});
getXMLFile("Jazler/NowOnAir.xml",function(xml)
{   xmlDocNow=xml;
    appendNowOnAir();
});
}

window.setInterval(function(){ // Set interval for checking
    XMLread();
}, 5000); 