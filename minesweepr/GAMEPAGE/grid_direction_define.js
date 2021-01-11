/*
最後更新日期:2020-12-08
最後更新人員:施政廷
 
note1:  grid_direction儲存自己以及四周格子的方位
*/

//note1
function grid_direction(SR, SC) { 
        this.selfPlace = SR + "_" + SC,
        this.upPlace = (SR-1)+"_"+SC,
        this.downPlace = (SR+1)+"_"+SC,
        this.leftPlace  = SR + "_" + (SC-1),
        this.rightPlace = SR + "_" + (SC+1),
        this.LUPlace  = (SR-1) + "_" + (SC-1),
        this.RUPlace  = (SR-1) + "_" + (SC+1),
        this.LDPlace  = (SR+1) + "_" + (SC-1),
        this.RDPlace  = (SR+1) + "_" + (SC+1) 
}