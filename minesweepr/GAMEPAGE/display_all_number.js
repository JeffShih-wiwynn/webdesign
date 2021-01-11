/*
最後更新日期:2020-12-09
最後更新人員:施政廷 

note1:  bombPlace:bomb的位置(字串)
        level:選擇難度(物件)

note2:  判斷該格子是否為bomb，回傳true為"是" 
*/

//note1
function display_all_number() {
    for (var i = 0; i < level.height; i++) {
        for (var j = 0; j < level.width; j++) {
            var str = i + "_" + j;
            display_number(str);
        }
    } 
}