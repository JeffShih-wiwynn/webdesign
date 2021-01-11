/*
最後更新日期:2020-12-16
最後更新人員:施政廷 

定義遊戲難度

*/


//note1
function Level(){ //遊戲難度
    this.width=0,   //遊戲格子的寬度
    this.height=0,  //格子的長度
    this.bombNum=10 //炸彈數量
}

var easyLevel= new Level(); //簡單模式
    easyLevel.width=9;
    easyLevel.height=9;
    easyLevel.bombNum=10;
 
var hardLevel= new Level(); //困難模式
    hardLevel.width=16;
    hardLevel.height=16;
    hardLevel.bombNum=30;
 
 