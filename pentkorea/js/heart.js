for(let i=0; i<10; i++){
  if(localStorage.getItem("key"+i) === undefined){
    localStorage.setItem("key"+i,"false");
  }
}

function love_fill(i){
    if(document.getElementById("love_fill_"+i).style.display == ""){
        document.getElementById("love_fill_"+i).style.display = "block";
        document.getElementById("love_bord_"+i).style.display = "none";
        localStorage.setItem("key"+i,"true");
    }
    else{
        document.getElementById("love_fill_"+i).style.display = "";
        document.getElementById("love_bord_"+i).style.display = "block";
        localStorage.setItem("key"+i,"false");
    }
}

function heart_remember(){
    for(let i=0; i<10; i++){
      console.log(localStorage.getItem("key"+i));
        if(localStorage.getItem("key"+i) == "true"){
            document.getElementById("love_fill_"+i).style.display="block";
            document.getElementById("love_bord_"+i).style.display="none";
        }
    }
}