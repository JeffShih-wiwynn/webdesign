/*
最後更新日期:2020-12-16
最後更新人員:施政廷 

回傳:每次按下按鈕檢查勝負

*/

function check_result(id) {
    var str = id.split("_");
    var x = str[0];
    var y = str[1];

    if (gridArray[x][y] == -1) {
        setTimeout(function () {
            alert("you lose");
            localStorage.setItem("judge","lose");
        }, 500);
        disable_all();
    }

    judge();
    ///////////////////////////////////////////////////////

    function judge() {
        for (var i = 0; i < level.width; i++) {
            for (var j = 0; j < level.height; j++) {
                var str = i + "_" + j;
                var state = 0;
                for (var bp in bombPlace) {
                    if (bombPlace[bp] == str) state = 1;
                }
                var x = document.getElementById(i + "_" + j);

                if (x.className == "before_click" && state == 0) return;
            }
        }
        setTimeout(function () {
            alert("you win");
        }, 500);
        localStorage.setItem("times", timeRecord);
        localStorage.setItem("judge","win");
        disable_all();
    }

    function disable_all() {
        endGame = 1;
        clearInterval(timeRecorder);
    }

}