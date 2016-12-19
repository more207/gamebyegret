var ResultPanel = (function (_super) {
    __extends(ResultPanel, _super);
    function ResultPanel() {
        _super.call(this);
        this.initPanel();
    }
    var d = __define,c=ResultPanel,p=c.prototype;
    p.initPanel = function () {
        this._myCards = new Array();
        this._yourCards = new Array();
        this._resutLblArray = new Array();
        for (var i = 0; i < 5; i++) {
            var aCardUI = new CardUI();
            aCardUI.x = 75;
            aCardUI.y = 100 + i * 150;
            this._myCards.push(aCardUI);
            this.addChild(aCardUI);
        }
        for (var i = 0; i < 5; i++) {
            var aCardUI = new CardUI();
            aCardUI.x = 415;
            aCardUI.y = 100 + i * 150;
            this._yourCards.push(aCardUI);
            this.addChild(aCardUI);
        }
        for (var i = 0; i < 5; i++) {
            var rl = new egret.TextField();
            rl.x = 250;
            rl.y = 130 + i * 150;
            rl.width = 140;
            rl.height = 100;
            rl.size = 50;
            rl.textAlign = egret.HorizontalAlign.CENTER;
            rl.verticalAlign = egret.VerticalAlign.MIDDLE;
            this._resutLblArray.push(rl);
            this.addChild(rl);
        }
        this._messageLbl = new egret.TextField;
        this._messageLbl.x = 0;
        this._messageLbl.y = 910;
        this._messageLbl.width = 640;
        this._messageLbl.textAlign = egret.HorizontalAlign.CENTER;
        this._messageLbl.size = 50;
        this.addChild(this._messageLbl);
        this._returnTopBtn = new egret.TextField();
        this._returnTopBtn.text = "Top";
        this._returnTopBtn.size = 50;
        this._returnTopBtn.x = 80;
        this._returnTopBtn.y = 1000;
        this._returnTopBtn.width = 200;
        this._returnTopBtn.textAlign = egret.HorizontalAlign.CENTER;
        this._returnTopBtn.touchEnabled = true;
        this.addChild(this._returnTopBtn);
        this._returnTopBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onReturnTopBtnClick, this);
        this._restartBtn = new egret.TextField();
        this._restartBtn.text = "Restart";
        this._restartBtn.size = 50;
        this._restartBtn.x = 360;
        this._restartBtn.y = 1000;
        this._restartBtn.width = 200;
        this._restartBtn.textAlign = egret.HorizontalAlign.CENTER;
        this._restartBtn.textColor = GameColor.c_blue;
        this.addChild(this._restartBtn);
        this._restartBtn.touchEnabled = true;
        this._restartBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onRestartBtnClick, this);
    };
    p.onReturnTopBtnClick = function (evt) {
        this.dispatchEvent(GameEvent.getEventByName(GameEvent.RETURN_TOP));
    };
    p.onRestartBtnClick = function (evt) {
        this.dispatchEvent(GameEvent.getEventByName(GameEvent.GAME_START));
    };
    p.resetView = function () {
        var gd = GameData.getInstance();
        var result = 0;
        for (var _i = 0, _a = gd.myDeck; _i < _a.length; _i++) {
            var aCard = _a[_i];
            var aCardUI = this._myCards[aCard._setIndex];
            aCardUI.updateView(aCard);
        }
        for (var _b = 0, _c = gd.youDeck; _b < _c.length; _b++) {
            var aCard = _c[_b];
            var aCardUI = this._yourCards[aCard._setIndex];
            aCardUI.updateView(aCard);
        }
        for (var i = 0; i < 5; i++) {
            var myCard = gd.myDeck[i];
            var yourCard = gd.youDeck[i];
            var aLbl = this._resutLblArray[i];
            if (Card.isFirstBiggerTheSecond(myCard, yourCard)) {
                aLbl.text = "1";
                aLbl.textColor = GameColor.c_green;
                result++;
            }
            else {
                aLbl.text = "-1";
                aLbl.textColor = GameColor.c_red;
                result--;
            }
        }
        if (result > 0) {
            this._messageLbl.text = "WIN";
            gd.winCount++;
            gd.playCount++;
        }
        else {
            this._messageLbl.text = "LOSE";
            gd.playCount++;
        }
    };
    return ResultPanel;
}(egret.Sprite));
egret.registerClass(ResultPanel,'ResultPanel');
//# sourceMappingURL=ResultPanel.js.map