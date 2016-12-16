var CardUI = (function (_super) {
    __extends(CardUI, _super);
    function CardUI(card) {
        _super.call(this);
        this._card = card;
        this.initComponents();
    }
    var d = __define,c=CardUI,p=c.prototype;
    p.initComponents = function () {
        this._isShow = true;
        this._mainLabel = new egret.TextField;
        this._mainLabel.text = this._card.getMainText();
        this._mainLabel.size = 60;
        this._mainLabel.textColor = 0xFF0000;
        this._mainLabel.textAlign = egret.HorizontalAlign.CENTER;
        this._mainLabel.x = this.stage.width / 2;
        this._mainLabel.y = this.stage.height / 2;
        this.addChild(this._mainLabel);
        this._subLabel = new egret.TextField;
        this._subLabel.text = this._card.getSubText();
        this._subLabel.size = 30;
        this.addChild(this._subLabel);
    };
    return CardUI;
}(egret.Sprite));
egret.registerClass(CardUI,'CardUI');
