/*
最後更新日期:2020-12-17
最後更新人員:施政廷

回傳:設定好炸彈點

*/
 
function seed_bomb() {
    var num = level.bombNum;
     
    var sames = ["", ]; //存取已經設置bomb的格子

    for (var i = 0; i < num; i++) {
        var str = random(); 
         
        bombPlace[i]=str;   //將位置儲存至bombPlace
    }
     
    function random() { //設置bomb在哪個位置的function
        var row = Math.floor(Math.random() * level.width);
        var col = Math.floor(Math.random() * level.height);
        var str = row + "_" + col;

        for (var same in sames) {
             
            if (sames[same] == str) {   //當sames的某個元素，也就是曾經設置過炸彈的格子，和即將要設置的炸彈點相同的話，再遞迴進行random一次
                return random();
            }  
            else if(same==sames.length-1) { //當跑到sames尾的時候，將這個炸彈點位置丟給sames做紀錄，且回傳炸彈點位置 
                sames.push(str); 
                return str;
            }else continue;
        }
    }
}