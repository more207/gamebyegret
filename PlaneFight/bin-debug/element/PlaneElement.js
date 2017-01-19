var PlanHeadTo;
(function (PlanHeadTo) {
    PlanHeadTo[PlanHeadTo["Head_UP"] = 0] = "Head_UP";
    PlanHeadTo[PlanHeadTo["Head_DOWN"] = 1] = "Head_DOWN";
    PlanHeadTo[PlanHeadTo["Head_LEFT"] = 2] = "Head_LEFT";
    PlanHeadTo[PlanHeadTo["Head_RIGHT"] = 3] = "Head_RIGHT";
})(PlanHeadTo || (PlanHeadTo = {}));
var PlaneElement = (function (_super) {
    __extends(PlaneElement, _super);
    function PlaneElement() {
        _super.call(this);
    }
    var d = __define,c=PlaneElement,p=c.prototype;
    p.placePlane = function () {
        var t = 0;
        var x = 0;
        var y = 0;
        var placeTimeCnt = 100;
        do {
            // 增加随机放置成功的可能性
            t = Math.floor(Math.random() * 4);
            if (t == PlanHeadTo.Head_UP) {
                x = Math.floor(Math.random() * 6) + 2;
                y = Math.floor(Math.random() * 7) + 1;
            }
            else if (t == PlanHeadTo.Head_DOWN) {
                x = Math.floor(Math.random() * 6) + 2;
                y = Math.floor(Math.random() * 7) + 2;
            }
            else if (t == PlanHeadTo.Head_LEFT) {
                x = Math.floor(Math.random() * 7) + 1;
                y = Math.floor(Math.random() * 6) + 2;
            }
            else if (t == PlanHeadTo.Head_RIGHT) {
                x = Math.floor(Math.random() * 7) + 2;
                y = Math.floor(Math.random() * 6) + 2;
            }
            if (this.tryToPlace(t, x, y)) {
                this.orientation = t;
                this.posX = x;
                this.posY = y;
                return true;
            }
        } while (placeTimeCnt-- > 0);
        return false;
    };
    p.tryToPlace = function (t, x, y) {
        var gameData = GameData.getInstance();
        var offset;
        if (t == PlanHeadTo.Head_UP) {
            offset = PlaneElement.toUp;
        }
        else if (t == PlanHeadTo.Head_DOWN) {
            offset = PlaneElement.toDown;
        }
        else if (t == PlanHeadTo.Head_LEFT) {
            offset = PlaneElement.toLeft;
        }
        else if (t == PlanHeadTo.Head_RIGHT) {
            offset = PlaneElement.toRight;
        }
        // try
        for (var i = 0; i < offset.length; i++) {
            var aOffset = offset[i];
            var idx = gameData.mapData[x + aOffset[0]][y + aOffset[1]];
            if (gameData.blockData[idx].value != BlockValue.ValueEmpty) {
                return false;
            }
        }
        // place
        for (var i = 0; i < offset.length; i++) {
            var aOffset = offset[i];
            var idx = gameData.mapData[x + aOffset[0]][y + aOffset[1]];
            if (aOffset[0] == 0 && aOffset[1] == 0) {
                gameData.blockData[idx].value = BlockValue.ValueMain;
            }
            else {
                gameData.blockData[idx].value = BlockValue.ValuePart;
            }
        }
        return true;
    };
    p.isBeHit = function () {
        var gameData = GameData.getInstance();
        var idx = gameData.mapData[this.posX][this.posY];
        if (gameData.blockData[idx].static == BlockStatic.StaticBEHIT) {
            return true;
        }
        return false;
    };
    p.distroy = function () {
        var gameData = GameData.getInstance();
        var offset;
        if (this.orientation == PlanHeadTo.Head_UP) {
            offset = PlaneElement.toUp;
        }
        else if (this.orientation == PlanHeadTo.Head_DOWN) {
            offset = PlaneElement.toDown;
        }
        else if (this.orientation == PlanHeadTo.Head_LEFT) {
            offset = PlaneElement.toLeft;
        }
        else if (this.orientation == PlanHeadTo.Head_RIGHT) {
            offset = PlaneElement.toRight;
        }
        // place
        for (var i = 0; i < offset.length; i++) {
            var aOffset = offset[i];
            var aBlock = gameData.getBlockElement(this.posX + aOffset[0], this.posY + aOffset[1]);
            aBlock.static = BlockStatic.StaticBEHIT;
        }
        return true;
    };
    PlaneElement.toUp = [[0, -1], [-2, 0], [-1, 0], [0, 0], [1, 0], [2, 0], [0, 1], [-1, 2], [0, 2], [1, 2]];
    PlaneElement.toDown = [[-1, -2], [0, -2], [1, -2], [0, -1], [-2, 0], [-1, 0], [0, 0], [1, 0], [2, 0], [-1, 0]];
    PlaneElement.toLeft = [[-1, 0], [0, -2], [0, -1], [0, 0], [0, 1], [0, 2], [1, 0], [2, -1], [2, 0], [2, 1]];
    PlaneElement.toRight = [[-2, -1], [-2, 0], [-2, 1], [-1, 0], [0, -2], [0, -1], [0, 0], [0, 1], [0, 2], [1, 0]];
    return PlaneElement;
}(BaseElement));
egret.registerClass(PlaneElement,'PlaneElement');
//# sourceMappingURL=PlaneElement.js.map