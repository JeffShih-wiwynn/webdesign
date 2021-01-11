/*
最後更新日期:2020-12-16
最後更新人員:施政廷  

回傳:顯示格子，如碰到空白格子，顯示周圍的八格格子

*/
function display_number(placeString) {

    var x = document.getElementById(placeString);
    var placeString2 = placeString.split("_");

    if (x == null) return; //超過邊界直接返回  
    if (x.getAttribute('class').indexOf("after_click")!=-1) return -1; //插過旗子的格子直接返回 
    if (x.getAttribute('class').indexOf("flag")!=-1) return -1; //插過旗子的格子直接返回 

    var num = gridArray[placeString2[0]][placeString2[1]]; //透過gridArray讀取該格子的數字

    if (num == -1) //是炸彈的時候
    {
        x.setAttribute("class", "after_click bomb");  
        var y = document.createElement("img")   //創<img>並且塞入圖片
        y.setAttribute("src","bomb.png"); 
        x.appendChild(y);
    } else if (num != 0) { //當格子為數字的時候
        x.setAttribute("class", "after_click gridNum" + num); //設定兩個class gridNum詳細請看grid_text.css
        x.innerText = num;
    } else if (num == 0) {
        var queue = []; //儲存待檢查的陣列
        var visited = []; //儲存已經方問過的陣列

        queue.push(placeString); //先將原本的grid丟入queue檢查

        queue_check(queue,visited);     //  map式搜尋
        
    } 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function judge(visited, queue, a) {

        if (a == null) { //當返回的位置a不等於null或是visited的任一個元素
            return 0;
        }
        for (var vis in visited) {
            if (visited[vis] == a) {
                return 0;
            }
        }

        for (var qu in queue) { //當此元素已經在queue中
            if (queue[qu] == a)
                return 0;
        }
        return 1;
    }

    function queue_check(queue,visited){
        while (queue.length != 0) { //當queue 為空時，代表檢查結束
            var str = queue[0].split("_");
            var m = parseInt(str[0]);
            var n = parseInt(str[1]);
            if (document.getElementById(queue[0]).getAttribute("class").indexOf("flag")!=-1) //當為插旗子的格子
            {
                visited.push(queue[0]);
                queue.shift();
                continue;
            }

            if (gridArray[m][n] != 0) { //當queue[0]為非空白的時候，也就是數字 

                var x = document.getElementById(queue[0]); //queue[0]指的格子
                var str = x.getAttribute("class");
                if (str.indexOf('after_click') == -1) //判斷是否為已經按過的格子，如果沒有按過才可以設定
                {
                    x.setAttribute("class", "after_click gridNum" + gridArray[m][n]);
                    x.innerText = gridArray[m][n];
                }

                visited.push(queue[0]);
                queue.shift();
            } else { //當queue[0]為空白的時候
                dirs = ['UP', 'DOWN', 'LEFT', 'RIGHT', 'LU', 'RU', 'LD', 'RD'];
                for (var dir in dirs) {
                    var a = return_direction(queue[0], dirs[dir]);
                    if (judge(visited, queue, a) == 1) queue.push(a); //判斷是否再queue陣列，或是visited過的元素
                }
                document.getElementById(queue[0]).setAttribute("class", "after_click"); //queue[0]指的格子
                visited.push(queue[0]);
                queue.shift();
            }
        }
    }
}