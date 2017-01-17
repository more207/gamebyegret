var AirBlockUI = (function (_super) {
    __extends(AirBlockUI, _super);
    function AirBlockUI(px, py) {
        _super.call(this);
        this.isBeShot = false;
        this.px = px;
        this.py = py;
        this.isBeShot = false;
        this.blockValue = AirBlockUI.VALUE_EMPTY;
        this.initView();
    }
    var d = __define,c=AirBlockUI,p=c.prototype;
    p.initView = function () {
        this.x = this.px * 60;
        this.y = this.py * 60;
        this.width = 60;
        this.height = 60;
        this.graphics.drawRect(0, 0, 60, 60);
        this.graphics.beginFill(0xFF0000);
        this.graphics.endFill();
        this._debugLbl.x = 0;
        this._debugLbl.y = 0;
        this._debugLbl.width = 60;
        this._debugLbl.height = 60;
        this.addChild(this._debugLbl);
    };
    p.updateView = function () {
        if (this.isBeShot) {
            if (this.blockValue == AirBlockUI.VALUE_MAIN) {
                this._debugLbl.text = "毁";
            }
            else if (this.blockValue == AirBlockUI.VALUE_PART) {
                this._debugLbl.text = "中";
            }
            else {
                this._debugLbl.text = "空";
            }
        }
        else {
            this._debugLbl.text = "未";
        }
    };
    AirBlockUI.VALUE_EMPTY = 0;
    AirBlockUI.VALUE_PART = 1;
    AirBlockUI.VALUE_MAIN = 2;
    return AirBlockUI;
}(egret.Sprite));
egret.registerClass(AirBlockUI,'AirBlockUI');
//# sourceMappingURL=AirBlockUI.js.map