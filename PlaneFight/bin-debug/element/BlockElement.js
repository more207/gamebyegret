var BlockStatic;
(function (BlockStatic) {
    BlockStatic[BlockStatic["StaticUNHIT"] = 0] = "StaticUNHIT";
    BlockStatic[BlockStatic["StaticBEHIT"] = 1] = "StaticBEHIT";
})(BlockStatic || (BlockStatic = {}));
var BlockValue;
(function (BlockValue) {
    BlockValue[BlockValue["ValueEmpty"] = 0] = "ValueEmpty";
    BlockValue[BlockValue["ValuePart"] = 1] = "ValuePart";
    BlockValue[BlockValue["ValueMain"] = 2] = "ValueMain";
})(BlockValue || (BlockValue = {}));
var BlockElement = (function (_super) {
    __extends(BlockElement, _super);
    function BlockElement() {
        _super.call(this);
        this.static = BlockStatic.StaticUNHIT;
        this.value = BlockValue.ValueEmpty;
    }
    var d = __define,c=BlockElement,p=c.prototype;
    p.isBeHit = function () {
        if (this.static == BlockStatic.StaticBEHIT) {
            return true;
        }
        return false;
    };
    p.hitBlock = function () {
        this.static = BlockStatic.StaticBEHIT;
        return this.value;
    };
    return BlockElement;
}(BaseElement));
egret.registerClass(BlockElement,'BlockElement');
//# sourceMappingURL=BlockElement.js.map