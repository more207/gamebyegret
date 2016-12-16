var GameData = (function () {
    function GameData() {
        this.winCount = 0;
        this.playCount = 0;
        this.cardDeck = null;
        this.myDeck = null;
        this.youDeck = null;
        this.otherDeck = null;
    }
    var d = __define,c=GameData,p=c.prototype;
    GameData.getInstance = function () {
        if (GameData._instance == null) {
            GameData._instance = new GameData();
        }
        return GameData._instance;
    };
    GameData.getStageHeight = function () {
        return egret.MainContext.instance.stage.stageHeight;
    };
    GameData.getStageWidth = function () {
        return egret.MainContext.instance.stage.stageWidth;
    };
    p.resetCount = function () {
        this.winCount = 0;
        this.playCount = 0;
    };
    p.resetGame = function () {
        this.cardDeck = new Array();
        for (var i = 1; i < 6; i++) {
            for (var j = 1; j < 4; j++) {
                var oneCard = new Card(i, j);
                this.cardDeck.push(oneCard);
            }
        }
    };
    GameData._instance = null;
    return GameData;
}());
egret.registerClass(GameData,'GameData');
