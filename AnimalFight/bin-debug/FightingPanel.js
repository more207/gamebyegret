var FightingPanel = (function (_super) {
    __extends(FightingPanel, _super);
    function FightingPanel() {
        _super.call(this);
        this._setFlg = [false, false, false, false, false];
        this.initPanel();
    }
    var d = __define,c=FightingPanel,p=c.prototype;
    p.initPanel = function () {
        this._giveUpBtn = new egret.TextField();
        this._giveUpBtn.text = "GiveUp";
        this._giveUpBtn.size = 50;
        this._giveUpBtn.x = 80;
        this._giveUpBtn.y = 950;
        this._giveUpBtn.width = 200;
        this._giveUpBtn.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this._giveUpBtn);
        this._giveUpBtn.touchEnabled = true;
        this._giveUpBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onGiveUpBtnClick, this);
        this._dealBtn = new egret.TextField();
        this._dealBtn.text = "Deal";
        this._dealBtn.size = 50;
        this._dealBtn.x = 360;
        this._dealBtn.y = 950;
        this._dealBtn.width = 200;
        this._dealBtn.textAlign = egret.HorizontalAlign.CENTER;
        this._dealBtn.textColor = GameColor.c_blue;
        this.addChild(this._dealBtn);
        this._dealBtn.touchEnabled = true;
        this._dealBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onDealBtnClick, this);
        this._handPosition = new Array();
        this._handPosition.push(new egret.Point(50, 700));
        this._handPosition.push(new egret.Point(150, 700));
        this._handPosition.push(new egret.Point(250, 700));
        this._handPosition.push(new egret.Point(350, 700));
        this._handPosition.push(new egret.Point(450, 700));
        this._setPosition = new Array();
        this._setPosition.push(new egret.Point(65, 140));
        this._setPosition.push(new egret.Point(245, 140));
        this._setPosition.push(new egret.Point(425, 140));
        this._setPosition.push(new egret.Point(155, 340));
        this._setPosition.push(new egret.Point(335, 340));
        this._cards = new Array();
        for (var i = 0; i < 5; i++) {
            var aCardUI = new CardUI();
            aCardUI.x = this._handPosition[i].x;
            aCardUI.y = this._handPosition[i].y;
            aCardUI.touchEnabled = true;
            aCardUI._handIndex = i;
            aCardUI.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchCard, this);
            this._cards.push(aCardUI);
            this.addChild(aCardUI);
        }
    };
    p.onDealBtnClick = function (evt) {
        // Check can be deal;
        for (var _i = 0, _a = this._setFlg; _i < _a.length; _i++) {
            var flg = _a[_i];
            if (!flg) {
                return;
            }
        }
        var gd = GameData.getInstance();
        for (var i = 0; i < 5; i++) {
            var aCard = gd.myDeck[i];
            var aCardUI = this._cards[i];
            aCard._setIndex = aCardUI._setIndex;
        }
        this.dispatchEvent(GameEvent.getEventByName(GameEvent.GAME_FIGHT));
    };
    p.onGiveUpBtnClick = function (evt) {
        var gd = GameData.getInstance();
        gd.playCount++;
        this.dispatchEvent(GameEvent.getEventByName(GameEvent.RETURN_TOP));
    };
    p.resetView = function () {
        var gd = GameData.getInstance();
        for (var i = 0; i < 5; i++) {
            var aCard = gd.myDeck[i];
            var aCardUI = this._cards[i];
            aCardUI.updateView(aCard);
            aCardUI.x = this._handPosition[aCard._handIndex].x;
            aCardUI.y = this._handPosition[aCard._handIndex].y;
            this._setFlg[i] = false;
        }
    };
    p.onTouchCard = function (evt) {
        var selected = evt.target;
        if (selected._isSetted) {
            selected._isSetted = false;
            selected.x = this._handPosition[selected._handIndex].x;
            selected.y = this._handPosition[selected._handIndex].y;
            this._setFlg[selected._setIndex] = false;
        }
        else {
            selected._isSetted = true;
            for (var i = 0; i < 5; i++) {
                if (!this._setFlg[i]) {
                    selected.x = this._setPosition[i].x;
                    selected.y = this._setPosition[i].y;
                    selected._setIndex = i;
                    this._setFlg[i] = true;
                    break;
                }
            }
        }
    };
    return FightingPanel;
}(egret.Sprite));
egret.registerClass(FightingPanel,'FightingPanel');
//# sourceMappingURL=FightingPanel.js.map