var StartGamePanel = (function (_super) {
    __extends(StartGamePanel, _super);
    function StartGamePanel() {
        _super.call(this);
        this.initPanel();
    }
    var d = __define,c=StartGamePanel,p=c.prototype;
    p.initPanel = function () {
        this._titleLbl = new egret.TextField();
        this._titleLbl.text = "Animal Fight";
        this._titleLbl.size = 70;
        this._titleLbl.x = 120;
        this._titleLbl.y = 100;
        this._titleLbl.width = 400;
        this._titleLbl.textAlign = egret.HorizontalAlign.RIGHT;
        this.addChild(this._titleLbl);
        this._recordTitleLbl = new egret.TextField();
        this._recordTitleLbl.text = "Record";
        this._recordTitleLbl.size = 40;
        this._recordTitleLbl.x = 200;
        this._recordTitleLbl.y = 350;
        this._recordTitleLbl.width = 240;
        this._recordTitleLbl.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this._recordTitleLbl);
        this._recordLbl = new egret.TextField();
        this._recordLbl.text = "0/0";
        this._recordLbl.size = 40;
        this._recordLbl.x = 0;
        this._recordLbl.y = 400;
        this._recordLbl.width = GameData.getStageWidth();
        this._recordLbl.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this._recordLbl);
        this._startBtn = new egret.TextField();
        this._startBtn.text = "START";
        this._startBtn.size = 50;
        this._startBtn.x = 220;
        this._startBtn.y = 800;
        this._startBtn.width = 200;
        this._startBtn.textAlign = egret.HorizontalAlign.CENTER;
        this._startBtn.textColor = GameColor.c_blue;
        this.addChild(this._startBtn);
        this._startBtn.touchEnabled = true;
        this._startBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onStartBtnClick, this);
        this._resetBtn = new egret.TextField();
        this._resetBtn.text = "RESET";
        this._resetBtn.size = 50;
        this._resetBtn.x = 220;
        this._resetBtn.y = 900;
        this._resetBtn.width = 200;
        this._resetBtn.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this._resetBtn);
        this._resetBtn.touchEnabled = true;
        this._resetBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onResetBtnClick, this);
    };
    p.onStartBtnClick = function (evt) {
    };
    p.onResetBtnClick = function (evt) {
        GameData.getInstance().resetCount();
    };
    return StartGamePanel;
}(egret.Sprite));
egret.registerClass(StartGamePanel,'StartGamePanel');
