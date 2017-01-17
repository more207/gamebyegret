var GameEvent = (function (_super) {
    __extends(GameEvent, _super);
    function GameEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        _super.call(this, type, bubbles, cancelable);
    }
    var d = __define,c=GameEvent,p=c.prototype;
    GameEvent.getEventByName = function (evt) {
        var gameEvent = new GameEvent(evt);
        return gameEvent;
    };
    GameEvent.EVENT_GAME_START = "EVENT_GAME_START";
    GameEvent.EVENT_GAME_GIVEUP = "EVENT_GAME_GIVEUP";
    GameEvent.EVENT_GAME_WIN = "EVENT_GAME_WIN";
    GameEvent.EVENT_GAME_LOSE = "EVENT_GAME_LOSE";
    return GameEvent;
}(egret.Event));
egret.registerClass(GameEvent,'GameEvent');
//# sourceMappingURL=GameEvent.js.map