let likes = 0;

function updateLike(){
    likes++;
    document.getElementById("likes").innerText = `${likes}👍`;
}

function resetLike(){
    if(likes>0){
    likes--;
    document.getElementById("likes").innerText = `${likes}👍`;
    }

    if(likes<=0){
       document.getElementById("likes").innerText = `👎`;
       
    }
}

