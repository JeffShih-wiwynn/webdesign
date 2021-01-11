/*
最後更新日期:2020-12-08
最後更新人員:施政廷
 
note1:  placeString:傳入某個grid.id，type為string(字串)
        dir:傳入以placeString為中心點的方向，得到需要的鄰近grid(字串)
        level:目前的難度(物件)
        回傳位置(字串)

note2:  judge判斷的是此grid的座標是否為合格座標，也就是說此座標是否真的有格子，如果不是合格座標，回傳false

note3:  grid_direction為物件，詳細參考grid_direction_define.js

note4:  傳入dir，switch出需要的座標

note5:  split_and_judge判斷是否為合格座標，如果是回傳此座標，否則回傳null
*/

//note1 
function return_direction(placeString, dir) {
    placeString = placeString.split("_");

    var row = parseInt(placeString[0]);
    var col = parseInt(placeString[1]);

    //note2
    if (judge(row, col) == false) return null;

    //note3
    var place = new grid_direction(row, col);

    //note4
    switch (dir) {
        case "UP":
            //note5
            if (split_and_judge(place.upPlace) == true) return place.upPlace;
            else return null;
        case "DOWN":
            if (split_and_judge(place.downPlace) == true) return place.downPlace;
            else return null;
        case "LEFT":
            if (split_and_judge(place.leftPlace) == true) return place.leftPlace;
            else return null;
        case "RIGHT":
            if (split_and_judge(place.rightPlace) == true) return place.rightPlace;
            else return null;
        case "LU":
            if (split_and_judge(place.LUPlace) == true) return place.LUPlace;
            else return null;
        case "RU":
            if (split_and_judge(place.RUPlace) == true) return place.RUPlace;
            else return null;
        case "LD":
            if (split_and_judge(place.LDPlace) == true) return place.LDPlace;
            else return null;
        case "RD":
            if (split_and_judge(place.RDPlace) == true) return place.RDPlace;
            else return null; 
        default:
            return place.selfPlace;

    }


    function split_and_judge(str) {
        var stra = [];
        stra = str.split("_");
        if (judge(parseInt(stra[0]), parseInt(stra[1])) == true) return true;
        else false;
    }

    function judge(row, col) {
        if (row >= 0 && row < level.height && col >= 0 && col < level.width) return true;
        else return false;
    }

}