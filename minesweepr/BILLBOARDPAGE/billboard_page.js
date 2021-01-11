array=[0,0,0,0,0,0];

function start()
{
    var times  = localStorage.getItem("times");
    times = parseInt(times);

    for(var i  = 5 ; i>0 ; i-- )
    {
        var x = localStorage.getItem("no_"+i);
        if(x==undefined)
        {
            localStorage.setItem("no_"+i,"999");
            document.getElementById("no_"+i).innerText="NO."+i+":999";
            array[i]=999;
        }
        else
        {
            document.getElementById("no_"+i).innerText="NO."+i+":"+x;
            array[i]=parseInt(x);
        }
    } 
    if(localStorage.getItem("judge")=="lose") return ;

    var red = 0;
    for(var i = 5 ; i>0 ; i--)
    {
        if(times<array[i]&&times>=array[i-1])
        {
            for(var j = 5 ; j >i ; j--)
            {
                array [j]= array[j-1];
            }
            array[i]=times;
            red = i;
        }
    }

    for(var i  = 5 ; i>0 ; i-- )
    { 
        document.getElementById("no_"+i).innerText="NO."+i+":"+array[i]; 
        if(red==i)document.getElementById("no_"+i).style ="color:red;";
        localStorage.setItem("no_"+i,array[i]);
    }
    
}

function back_to_title()
{
    location.href = "../MAINPAGE/main_page.html";
}


window.addEventListener("load",start,false);