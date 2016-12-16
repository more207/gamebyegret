var GameEvent = (function () {
    function GameEvent() {
    }
    var d = __define,c=GameEvent,p=c.prototype;
    GameEvent.GAME_START = "EVENT_GAME_START";
    GameEvent.GAME_FIGHT = "EVENT_GAME_FIGHT";
    GameEvent.RETURN_TOP = "EVENT_RETURN_TOP";
    return GameEvent;
}());
egret.registerClass(GameEvent,'GameEvent');
