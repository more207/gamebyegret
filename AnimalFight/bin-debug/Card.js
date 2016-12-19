var Card = (function () {
    function Card(mk, sk) {
        this._mainKey = mk;
        this._subKey = sk;
    }
    var d = __define,c=Card,p=c.prototype;
    p.getMainText = function () {
        return AFKey.MK_TEXT[this._mainKey];
    };
    p.getSubText = function () {
        return AFKey.SK_TEXT[this._subKey];
    };
    p.toString = function () {
        return "main:" + this.getMainText() + " sub:" + this.getSubText();
    };
    Card.isFirstBiggerTheSecond = function (first, second) {
        if (first._mainKey != second._mainKey) {
            if (first._mainKey > second._mainKey) {
                if (first._mainKey == AFKey.MK_ELEPHANT && second._mainKey == AFKey.MK_MOUSE) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                if (first._mainKey == AFKey.MK_MOUSE && second._mainKey == AFKey.MK_ELEPHANT) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        else {
            if (first._subKey > second._subKey) {
                if (first._subKey == AFKey.SK_3_SCISSORS && second._mainKey == AFKey.SK_1_ROCK) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                if (second._subKey == AFKey.SK_3_SCISSORS && first._mainKey == AFKey.SK_1_ROCK) {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
    };
    return Card;
}());
egret.registerClass(Card,'Card');
//# sourceMappingURL=Card.js.map