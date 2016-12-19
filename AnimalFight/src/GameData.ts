class GameData {
	
	public winCount:number = 0;
	public playCount:number = 0;

    public cardCount:number = 15;

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

    public getPointString() : string {
        return this.winCount + "/" + this.playCount;
    }

// shuffle 
    public resetGame():void{
        this.cardDeck = new Array<Card>();
        this.myDeck = new Array<Card>();
        this.youDeck = new Array<Card>();
        this.otherDeck = new Array<Card>();

        for(var i = 0; i< 5;i++){
            for(var j = 0; j < 3;j++) {
               var oneCard = new Card(i,j);
               this.cardDeck.push(oneCard); 
            }
        }
    }

    public sendCard():void{
        
        var myHandIndex = 0;
        var youHandIndex = 0;
        
        for (var i = 15; i > 0;i--) {
            var pickIdx = Math.floor(Math.random() * i);
            var oneCard : Card = this.cardDeck.splice(pickIdx,1)[0];
            
            if(i%3 == 0) {
                oneCard._handIndex = myHandIndex;
                oneCard._setIndex = myHandIndex;
                myHandIndex++;
                this.myDeck.push(oneCard);
            } else if(i%3 == 1) {
                oneCard._handIndex = youHandIndex;
                oneCard._setIndex = youHandIndex;
                youHandIndex++;
                this.youDeck.push(oneCard);
            } else {
                this.otherDeck.push(oneCard);
            }

        }

    }
}