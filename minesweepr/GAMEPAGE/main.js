/*
最後更新日期:2020-12-16
最後更新人員:施政廷   
 
還要做的
輸入端:輸入難度
輸出端:輸出難度，時間


回傳:主程式運行

*/

if("easy"==localStorage.getItem("level"))
{
    var level = easyLevel; //更改難度，目前給予easy和hard，未來可自己新增難度 
}
else 
{
    var level = hardLevel; //更改難度，目前給予easy和hard，未來可自己新增難度 
}



var bombPlace = [level.bombNum];    //紀錄放bomb的位置

var gridArray = []; //紀錄所有方格，-1為炸彈，0為空格，其餘為顯示數字

var timeRecord=0;   //計時用的變數

var bombNumdisplay=0;   //顯示剩餘多少炸彈的變數 

var endGame=0; //遊戲是否結束 

var timeRecorder=0; //計時器本身，停止用，詳細請看check_result.js
 
function main() {
     
    DOM_create_grid(); //依據傳入的level創建格子 
    
    seed_bomb();    //隨機播炸彈  

    grid_array();   //把目前的狀況存進grid_array之中 
     
    grid_listener();    //讓每個方格產生滑鼠左鍵及右鍵事件 

    bomb_and_time();    //讓左上角顯示炸彈數及時間 

    timeRecorder = setInterval(function () {   //計時用
        var x = document.getElementById("timeRecordPlace");
        x.innerHTML = "時間:"+timeRecord;
        timeRecord++;
    }, 1000); 
}

window.addEventListener("load", main, false);