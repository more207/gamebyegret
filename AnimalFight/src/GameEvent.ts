class GameEvent extends egret.Event{

	public static GAME_START:string = "EVENT_GAME_START";
	public static GAME_FIGHT:string = "EVENT_GAME_FIGHT";
	public static RETURN_TOP:string = "EVENT_RETURN_TOP";

    public constructor(type:string, bubbles:boolean = false, cancelable:boolean = false) {
        super(type,bubbles,cancelable);
    }

	public static getEventByName(evt:string):GameEvent {
		var gameEvent:GameEvent = new GameEvent(evt);
		return gameEvent;
	}
}