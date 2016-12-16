class GameData {
	
	public winCount = 0;
	public playCount = 0;

    public cardDeck:Array<Card> = null;
    public myDeck:Array<Card> = null;
    public youDeck:Array<Card> = null;
    public otherDeck:Array<Card> = null;
	
	private static _instance : GameData = null;
    
    public constructor() {
        
	}

    public static getInstance():GameData{
        if(GameData._instance == null){
            GameData._instance = new GameData();
        }
        return GameData._instance;
    }

	public static getStageHeight():number
    {
        return egret.MainContext.instance.stage.stageHeight;
    }

    public static getStageWidth():number
    {
        return egret.MainContext.instance.stage.stageWidth;
    }

    public resetCount():void{
        this.winCount = 0;
        this.playCount = 0;
    }

// shuffle 
    public resetGame():void{
        this.cardDeck = new Array<Card>();
        this.myDeck = new Array<Card>();
        this.youDeck = new Array<Card>();
        this.otherDeck = new Array<Card>();

        for(var i = 1; i< 6;i++){
            for(var j = 1; j < 4;j++) {
               var oneCard = new Card(i,j);
               this.cardDeck.push(oneCard); 
            }
        }
    }

    public dealGame():void{
        
    }
}