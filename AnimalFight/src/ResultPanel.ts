class ResultPanel extends egret.Sprite {
	public constructor() {
		super();
		this.initPanel();
	}

	private _returnTopBtn : egret.TextField;
	private _restartBtn : egret.TextField;

	private _myCards : Array<CardUI>;
	private _yourCards : Array<CardUI>;

	private initPanel(){
		
		this._returnTopBtn = new egret.TextField();
        this._returnTopBtn.text = "Top";
        this._returnTopBtn.size = 50;
        this._returnTopBtn.x = 80;
        this._returnTopBtn.y = 900;
		this._returnTopBtn.width = 200;
		this._returnTopBtn.textAlign = egret.HorizontalAlign.CENTER;
		this._returnTopBtn.touchEnabled = true;
        this.addChild( this._returnTopBtn );
        this._returnTopBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onReturnTopBtnClick, this);

		this._restartBtn = new egret.TextField();
        this._restartBtn.text = "Restart";
        this._restartBtn.size = 50;
        this._restartBtn.x = 360;
        this._restartBtn.y = 900;
		this._restartBtn.width = 200;
		this._restartBtn.textAlign = egret.HorizontalAlign.CENTER;
		this._restartBtn.textColor = GameColor.c_blue;
        this.addChild( this._restartBtn );
        this._restartBtn.touchEnabled = true;
        this._restartBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onRestartBtnClick, this);

		this._myCards = new Array<CardUI>();
		this._yourCards = new Array<CardUI>();
		
		for(var i = 0; i < 5; i++) {
			var aCardUI:CardUI = new CardUI();
			aCardUI.x = 75;
			aCardUI.y = 100 + i * 150;
			this._myCards.push(aCardUI); 
			this.addChild(aCardUI);
		}

		for(var i = 0; i < 5; i++) {
			var aCardUI:CardUI = new CardUI();
			aCardUI.x = 415;
			aCardUI.y = 100 + i * 150;
			this._yourCards.push(aCardUI); 
			this.addChild(aCardUI);
		}

	}

	private onReturnTopBtnClick(evt:egret.TouchEvent):void {
		this.dispatchEvent(GameEvent.getEventByName(GameEvent.RETURN_TOP));
	}

	private onRestartBtnClick(evt:egret.TouchEvent):void {
		this.dispatchEvent(GameEvent.getEventByName(GameEvent.GAME_START));
	}

	public resetView() {
		var gd:GameData = GameData.getInstance();
		
		for (let aCard of gd.myDeck) {
			var aCardUI : CardUI = this._myCards[aCard._setIndex];
			aCardUI.updateView(aCard);
		}

		for (let aCard of gd.youDeck) {
			var aCardUI : CardUI = this._yourCards[aCard._setIndex];
			aCardUI.updateView(aCard);
		}

	}

}