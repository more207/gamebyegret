var MainBattlePage = (function (_super) {
    __extends(MainBattlePage, _super);
    function MainBattlePage() {
        _super.call(this);
        this.preSelectElementId = -1;
        this.initPage();
    }
    var d = __define,c=MainBattlePage,p=c.prototype;
    p.initPage = function () {
        this.initBattleBlocks();
    };
    p.initBattleBlocks = function () {
        this.battleBlockList = [];
        var gameData = GameData.getInstance();
        var offsetX = 10;
        var offsetY = 100;
        var index = 0;
        for (var x = 0; x < gameData.maxRow; x++) {
            for (var y = 0; y < gameData.maxColume; y++) {
                var aBlock = new BlockElementView(index, x, y);
                aBlock.x = x * BlockElementView.viewWidth + offsetX;
                aBlock.y = y * BlockElementView.viewHeight + offsetY;
                this.battleBlockList.push(aBlock);
                aBlock.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBlock, this);
                this.addChild(aBlock);
                index++;
            }
        }
    };
    p.updatePage = function () {
        var gameData = GameData.getInstance();
        for (var i = 0; i < gameData.blockCnt; i++) {
            var aBlock = this.battleBlockList[i];
            aBlock.updateView();
        }
    };
    p.onTouchBlock = function (e) {
        var ev = e.currentTarget;
        if (ev.isSelected()) {
            ev.hitBlock();
            this.preSelectElementId = -1;
        }
        else {
            if (this.preSelectElementId != -1) {
                this.battleBlockList[this.preSelectElementId].setUnSelect();
            }
            ev.setSelected();
            this.preSelectElementId = ev._id;
        }
    };
    return MainBattlePage;
}(egret.Sprite));
egret.registerClass(MainBattlePage,'MainBattlePage');
//# sourceMappingURL=MainBattlePage.js.map