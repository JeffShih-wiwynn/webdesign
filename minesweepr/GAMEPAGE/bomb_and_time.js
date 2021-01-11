/*
最後更新日期:2020-12-16
最後更新人員:施政廷  

回傳:在遊戲的左上角設置炸彈數量的顯示，右上角顯示以秒為單位的遊戲時間
*/

function bomb_and_time()
{
    var bnp = document.getElementById("bombNumPlace");
    var trp = document.getElementById("timeRecordPlace");

    var x =level.bombNum/3;
    var y = level.bombNum-x;

    bnp.setAttribute("colspan",x);
    trp.setAttribute("colspan",y);
    
    bombNumdisplay = level.bombNum;
    bnp.innerText = bombNumdisplay;

}