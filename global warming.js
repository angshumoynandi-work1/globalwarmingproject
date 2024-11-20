
document.getElementById("aboutus").addEventListener("click", function(){
    document.querySelector("#about-popup").style.display="flex";   
});
document.getElementById("cross").addEventListener("click", function(){
    document.querySelector("#about-popup").style.display="none";
});

document.getElementById("donation").addEventListener("click", function(){
    document.querySelector("#donate-popup").style.display="flex";   
});
document.getElementById("cross1").addEventListener("click", function(){
    document.querySelector("#donate-popup").style.display="none";
});

// history popup
function viewhistory(){
    document.getElementById("history-popup").style.display="flex";
}
function hidehistory(){
    document.getElementById("history-popup").style.display="none";
}

// effects popup
function vieweffects(){
    document.getElementById("effects-popup").style.display="flex";
}
function hideeffects(){
    document.getElementById("effects-popup").style.display="none";
}


// causes popup
function viewcauses(){
    document.getElementById("causes-popup").style.display="flex";
}
function hidecauses(){
    document.getElementById("causes-popup").style.display="none";
}

//goals popup
function viewgoals(){
    document.getElementById("goals-popup").style.display="flex";
}
function hidegoals(){
    document.getElementById("goals-popup").style.display="none";
}

//bot popup
function viewbot(){
    document.getElementById("chatbot").style.display="none";
    document.getElementById("divbot").style.display="flex";
    document.getElementById("p1").style.display="block";
}
function entername(){
    const a=document.getElementById('botinput').value;
    document.getElementById('botinput').value='';
    document.getElementById('p2').innerHTML=a;
    document.getElementById('p2').style.display='block';
    document.getElementById('say-name').innerHTML=a;
    document.getElementById('p3').style.display='block';

}
function hidebot(){
    document.getElementById("chatbot").style.display="flex";
    document.getElementById("divbot").style.display="none";
    document.getElementById('p3').style.display='none';
    document.getElementById('p2').style.display='none';
}