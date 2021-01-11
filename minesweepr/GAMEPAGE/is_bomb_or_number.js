/*
最後更新日期:2020-12-09
最後更新人員:施政廷  

note1:  傳入位置，回傳-1為炸彈，其餘為周圍有幾顆炸彈

*/

function is_bomb_or_number(placeString)
{
    var dirs = ["UP", "DOWN", "LEFT", "RIGHT", "LU", "RU", "LD", "RD"];
    var num=0; 

    for (var BP in bombPlace) {
        if (bombPlace[BP] == placeString) 
        {  
            return -1;
        }
    } 

    for (var dir in dirs) {
        var place = return_direction(placeString, dirs[dir]);
        for (var BP in bombPlace) {
            if (bombPlace[BP] == place) num++;
        }
    }
    return num;  
}