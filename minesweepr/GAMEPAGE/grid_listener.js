/*
最後更新日期:2020-12-09
最後更新人員:施政廷  

回傳:將每個td設定"onclick='display_number(event)'"，也就是按下去的時候觸發display_number
*/

function grid_listener() {
    for (var i = 0; i < level.height; i++) {
        for (var j = 0; j < level.width; j++) {
            var str = i + "_" + j;
            var x = document.getElementById(str);


            x.onclick = function (e) { //按下左鍵
                if (endGame == 1) return; //遊戲結束後不允許觸發任何左右鍵互動

                var re = display_number(e.target.id); //顯示格子
                if (re != -1) check_result(e.target.id); //判斷勝負
            }
            x.oncontextmenu = function (e) { //按下右鍵觸發
                var bnp = document.getElementById("bombNumPlace");
                if (endGame == 1) return; //遊戲結束後不允許觸發任何左右鍵互動

                if (e.target.className.indexOf("after_click") != -1) return; //開過的格子不允許插旗子

                if (e.target.className.indexOf("flag") == -1) //當grid為非插旗子的狀態時，插旗子
                {
                    e.target.className = "before_click flag"; //class 新增flag ，詳細請看gird.css 
                    var y = document.createElement("img");
                    y.setAttribute("src", "flag.png");
                    document.getElementById(e.target.id).appendChild(y);
                    bnp.innerText = "剩餘炸彈:" + (--bombNumdisplay);
                } else //反之拔掉旗子
                {
                    e.target.className = "before_click"; //class移除flag
                    e.target.innerText = '';
                    bnp.innerText = "剩餘炸彈:" + (++bombNumdisplay);
                }

            }
        }
    }
}