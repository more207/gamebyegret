var BlockElementView = (function (_super) {
    __extends(BlockElementView, _super);
    function BlockElementView(idx, x, y) {
        _super.call(this);
        this._selectedFLg = false;
        this._id = idx;
        this.posX = x;
        this.posY = y;
        this.initView();
    }
    var d = __define,c=BlockElementView,p=c.prototype;
    p.initView = function () {
        this.touchEnabled = true;
        this.touchChildren = false;
        this.width = BlockElementView.viewWidth;
        this.height = BlockElementView.viewHeight;
        // this.graphics.clear();
        // this.graphics.beginFill(0xff8000, 1);
        // this.graphics.lineStyle(2, 0x000000);
        // this.graphics.drawRect(0, 0, this.width, this.height);
        // this.graphics.endFill();
        this._testLabel = new egret.TextField();
        this._testLabel.x = 1;
        this._testLabel.y = 1;
        this._testLabel.width = this.width - 2;
        this._testLabel.height = this.height - 2;
        this._testLabel.size = 40;
        this._testLabel.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this._testLabel);
        this._selectMark = new egret.TextField();
        this._selectMark.x = 1;
        this._selectMark.y = 1;
        this._selectMark.width = this.width - 2;
        this._selectMark.height = this.height - 2;
        this._selectMark.background = true;
        this._selectMark.backgroundColor = 0xffffff;
        this._selectMark.textColor = 0;
        this._selectMark.visible = this._selectedFLg;
        this.addChild(this._selectMark);
    };
    p.updateView = function () {
        var aBlock = GameData.getInstance().getBlockElement(this.posX, this.posY);
        if (aBlock.static == BlockStatic.StaticBEHIT) {
            this._testLabel.background = false;
            this._testLabel.text = "" + GameData.getInstance().getBlockIndex(this.posX, this.posY);
            //this._testLabel.text = "" + this._id;
            if (aBlock.value == BlockValue.ValueEmpty) {
                //this._testLabel.text = "E";
                this._testLabel.textColor = 0xc0c0c0;
            }
            else if (aBlock.value == BlockValue.ValuePart) {
                //this._testLabel.text = "P";
                this._testLabel.textColor = 0xffff00;
            }
            else if (aBlock.value == BlockValue.ValueMain) {
                //this._testLabel.text = "M";
                this._testLabel.textColor = 0xff0000;
            }
        }
        else {
            this._testLabel.text = "";
            this._testLabel.background = true;
            this._testLabel.backgroundColor = 0x87ceeb;
        }
        if (this._selectedFLg) {
            this._selectMark.visible = true;
        }
        else {
            this._selectMark.visible = false;
        }
    };
    p.setSelected = function () {
        var aBlock = GameData.getInstance().getBlockElement(this.posX, this.posY);
        if (aBlock.static == BlockStatic.StaticBEHIT) {
            return false;
        }
        this._selectedFLg = true;
        this.updateView();
        return true;
    };
    p.isSelected = function () {
        return this._selectedFLg;
    };
    p.setUnSelect = function () {
        this._selectedFLg = false;
        this.updateView();
    };
    p.hitBlock = function () {
        var aBlock = GameData.getInstance().getBlockElement(this.posX, this.posY);
        aBlock.hitBlock();
        this._selectedFLg = false;
        this.updateView();
    };
    BlockElementView.viewWidth = 60;
    BlockElementView.viewHeight = 60;
    return BlockElementView;
}(BaseElementView));
egret.registerClass(BlockElementView,'BlockElementView');
//# sourceMappingURL=BlockElementView.js.map