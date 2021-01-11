/*
最後更新日期:2020-12-16
最後更新人員:施政廷   
 
回傳:將炸彈點塞進gridArray

*/

function grid_array() { 
     
    for (var i = 0; i < level.height; i++) {
        gridArray[i] = [];
    }
    for (var BP in bombPlace) {
        var place = bombPlace[BP].split("_");

        gridArray[place[0]][place[1]] = -1;
    }  

    for (var i = 0; i < level.height; i++) {
        for (var j = 0; j < level.width; j++) {
            gridArray[i][j] = is_bomb_or_number(i + "_" + j);   //is_bomb_or_number判斷是否為炸彈 
        }
    } 
}