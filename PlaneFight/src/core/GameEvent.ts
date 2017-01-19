class GameEvent extends egret.Event {

	public static EVENT_GAME_START:string = "EVENT_GAME_START";
	public static EVENT_GAME_GIVEUP:string = "EVENT_GAME_GIVEUP";
	public static EVENT_GAME_WIN:string = "EVENT_GAME_WIN";
	public static EVENT_GAME_LOSE:string = "EVENT_GAME_LOSE";

	public static SHOW_GAME_START:string = "SHOW_GAME_START";

    public constructor(type:string, bubbles:boolean = false, cancelable:boolean = false) {
        super(type,bubbles,cancelable);
    }

	public static getEventByName(evt:string):GameEvent {
		var gameEvent:GameEvent = new GameEvent(evt);
		return gameEvent;
	}
}