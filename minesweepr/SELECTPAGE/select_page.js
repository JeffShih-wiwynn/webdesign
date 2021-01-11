var state=0;

function scroll()
{
    if(state==0)
    {
        document.getElementById("body").style="background-position:top; transition: 20s; "; 
        state=1;
    } 
    else
    {
        document.getElementById("body").style="background-position:bottom; transition: 20s; "; 
        state=0;
    } 
}

function easy_level()
{
    localStorage.setItem("level","easy");
    location.href='../GAMEPAGE/game_page.html';
}

function hard_level()
{
    localStorage.setItem("level","hard");
    location.href='../GAMEPAGE/game_page.html';
}

function start()
{
    setInterval(scroll,3000); 
}

window.addEventListener("load",start,false);