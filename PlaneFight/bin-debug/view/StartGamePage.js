var StartGamePage = (function (_super) {
    __extends(StartGamePage, _super);
    function StartGamePage() {
        _super.call(this);
        this.initPage();
    }
    var d = __define,c=StartGamePage,p=c.prototype;
    p.initPage = function () {
        this._titleLabel = new egret.TextField();
        this._titleLabel.text = "Plane Fight";
        this._titleLabel.size = 70;
        this._titleLabel.x = 0;
        this._titleLabel.y = 100;
        this._titleLabel.width = GameData.getStageWidth();
        this._titleLabel.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this._titleLabel);
        this._versionLabel = new egret.TextField();
        this._versionLabel.text = GameInfo.VERSION;
        this._versionLabel.size = 20;
        this._versionLabel.width = 80;
        this._versionLabel.x = GameData.getStageWidth() - 100;
        this._versionLabel.y = GameData.getStageHeight() - 100;
        this._versionLabel.textAlign = egret.HorizontalAlign.RIGHT;
        this.addChild(this._versionLabel);
        this._startButton = new eui.Button();
        this._startButton.label = "START";
        this._startButton.width = 200;
        this._startButton.x = GameData.getStageWidth() / 2 - 100;
        this._startButton.y = GameData.getStageHeight() - 200;
        this._startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickStartButton, this);
        this.addChild(this._startButton);
        // this._startButton = new egret.TextField();
        // this._startButton.text = "START";
        // this._startButton.size = 40;
        // this._startButton.width = 200; 
        // this._startButton.x = GameData.getStageWidth() / 2 - 100;
        // this._startButton.y = GameData.getStageHeight() - 200;
        // this._startButton.textAlign = egret.HorizontalAlign.CENTER;
        // this.addChild(this._startButton);
    };
    p.onClickStartButton = function (e) {
        this.dispatchEvent(GameEvent.getEventByName(GameEvent.EVENT_GAME_START));
    };
    return StartGamePage;
}(egret.Sprite));
egret.registerClass(StartGamePage,'StartGamePage');
//# sourceMappingURL=StartGamePage.js.map