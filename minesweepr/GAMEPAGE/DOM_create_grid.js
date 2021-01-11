/*
最後更新日期:2020-12-17
最後更新人員:施政廷 

回傳:創建整個grid table

*/
 
function DOM_create_grid() {
     
    var getTbody = document.getElementById("gameTable");    //抓取GAME_PAGE.html的<tbody>

    for (var i = 0; i < level.height; i++) {
         
        var createTr = document.createElement("tr");    //建立新的<tr>，透過迴圈，每次都創建一個新的createTr，並且加入tbody 

        for (var j = 0; j < level.width; j++) {
             
            var createTd = document.createElement("td");    //建立新的<td>，透過迴圈，每次都創建一個新的createTd，並且加入createTr 
             
            createTd.setAttribute("id",i+"_"+j);    //1_2代表第一列第2行，方便使用split分割兩個數字辨識列與行
             
            createTd.setAttribute("class","before_click");  //先把每個未點擊的格子預設before_click的class
    
            createTr.appendChild(createTd);
        }
        getTbody.appendChild(createTr);
    }
}