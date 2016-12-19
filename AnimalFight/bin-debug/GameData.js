var GameData = (function () {
    function GameData() {
        this.winCount = 0;
        this.playCount = 0;
        this.cardCount = 15;
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
    p.getPointString = function () {
        return this.winCount + "/" + this.playCount;
    };
    // shuffle 
    p.resetGame = function () {
        this.cardDeck = new Array();
        this.myDeck = new Array();
        this.youDeck = new Array();
        this.otherDeck = new Array();
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 3; j++) {
                var oneCard = new Card(i, j);
                this.cardDeck.push(oneCard);
            }
        }
    };
    p.sendCard = function () {
        var myHandIndex = 0;
        var youHandIndex = 0;
        for (var i = 15; i > 0; i--) {
            var pickIdx = Math.floor(Math.random() * i);
            var oneCard = this.cardDeck.splice(pickIdx, 1)[0];
            if (i % 3 == 0) {
                oneCard._handIndex = myHandIndex;
                oneCard._setIndex = myHandIndex;
                myHandIndex++;
                this.myDeck.push(oneCard);
            }
            else if (i % 3 == 1) {
                oneCard._handIndex = youHandIndex;
                oneCard._setIndex = youHandIndex;
                youHandIndex++;
                this.youDeck.push(oneCard);
            }
            else {
                this.otherDeck.push(oneCard);
            }
        }
    };
    GameData._instance = null;
    return GameData;
}());
egret.registerClass(GameData,'GameData');
//# sourceMappingURL=GameData.js.map