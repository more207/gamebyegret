var GameData = (function () {
    function GameData() {
        this.maxRow = 10;
        this.maxColume = 10;
        this.blockCnt = 100;
        this.maxPlaneCnt = 3;
    }
    var d = __define,c=GameData,p=c.prototype;
    GameData.getInstance = function () {
        if (GameData._instance == null) {
            GameData._instance = new GameData();
        }
        return GameData._instance;
    };
    GameData.getStageHeight = function () {
        return egret.MainContext.instance.stage.stageHeight;
    };
    GameData.getStageWidth = function () {
        return egret.MainContext.instance.stage.stageWidth;
    };
    p.initData = function () {
        this.blockData = [];
        this.mapData = new Array();
        this.planeList = [];
    };
    p.initBattle = function () {
        this.initData();
        var index = 0;
        for (var x = 0; x < this.maxRow; x++) {
            var col = new Array();
            for (var y = 0; y < this.maxColume; y++) {
                var aBlock = new BlockElement();
                aBlock.id = index;
                aBlock.posX = x;
                aBlock.posY = y;
                this.blockData.push(aBlock);
                col.push(index);
                index++;
            }
            this.mapData.push(col);
        }
        for (var f = 0; f < this.maxPlaneCnt; f++) {
            var aPlane = new PlaneElement();
            if (aPlane.placePlane()) {
                this.planeList.push(aPlane);
            }
        }
        // for(var x = 0; x < this.blockCnt; x++){
        // 	var aBlock : BlockElement = this.blockData[x];
        // 	console.debug("" + aBlock.id + " " + aBlock.value);
        // }
    };
    p.isClear = function () {
        for (var i = 0; i < this.planeList.length; i++) {
            var aPlane = this.planeList[i];
            if (!aPlane.isBeHit()) {
                return false;
            }
        }
        return true;
    };
    p.getBlockIndex = function (x, y) {
        return this.mapData[x][y];
    };
    p.getBlockElement = function (x, y) {
        var idx = this.mapData[x][y];
        return this.blockData[idx];
    };
    GameData._instance = null;
    return GameData;
}());
egret.registerClass(GameData,'GameData');
//# sourceMappingURL=GameData.js.map