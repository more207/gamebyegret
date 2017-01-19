var GameLogic = (function () {
    function GameLogic() {
    }
    var d = __define,c=GameLogic,p=c.prototype;
    GameLogic.checkGameWin = function () {
        var gd = GameData.getInstance();
        for (var i = 0; i < gd.planeList.length; i++) {
            var pl = gd.planeList[i];
            var aBlock = gd.getBlockElement(pl.posX, pl.posY);
            if (!aBlock.isBeHit()) {
                return false;
            }
        }
        return true;
    };
    GameLogic.destroyPlane = function (x, y) {
        var gd = GameData.getInstance();
        for (var i = 0; i < gd.planeList.length; i++) {
            var aPlane = gd.planeList[i];
            if (x == aPlane.posX && y == aPlane.posY) {
                aPlane.distroy();
            }
        }
        return true;
    };
    return GameLogic;
}());
egret.registerClass(GameLogic,'GameLogic');
//# sourceMappingURL=GameLogic.js.map