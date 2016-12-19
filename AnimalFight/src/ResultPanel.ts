class ResultPanel extends egret.Sprite {
	public constructor() {
		super();
		this.initPanel();
	}

	private _returnTopBtn : egret.TextField;
	private _restartBtn : egret.TextField;

	private _myCards : Array<CardUI>;
	private _yourCards : Array<CardUI>;

	private _resutLblArray : Array<egret.TextField>;

	private _messageLbl : egret.TextField;

	private initPanel(){
		

		this._myCards = new Array<CardUI>();
		this._yourCards = new Array<CardUI>();
		this._resutLblArray = new Array<egret.TextField>();
		
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

		for(var i = 0; i < 5; i++) {
			var rl = new egret.TextField();
			rl.x = 250;
			rl.y = 130 + i * 150;
			rl.width = 140;
			rl.height = 100;
			rl.size = 50;
			rl.textAlign = egret.HorizontalAlign.CENTER;
			rl.verticalAlign = egret.VerticalAlign.MIDDLE;
			this._resutLblArray.push(rl);
			this.addChild(rl);
		}

		this._messageLbl = new egret.TextField;
		this._messageLbl.x = 0;
		this._messageLbl.y = 910;
		this._messageLbl.width = 640;
		this._messageLbl.textAlign = egret.HorizontalAlign.CENTER;
		this._messageLbl.size = 50;

		this.addChild(this._messageLbl);

		this._returnTopBtn = new egret.TextField();
        this._returnTopBtn.text = "Top";
        this._returnTopBtn.size = 50;
        this._returnTopBtn.x = 80;
        this._returnTopBtn.y = 1000;
		this._returnTopBtn.width = 200;
		this._returnTopBtn.textAlign = egret.HorizontalAlign.CENTER;
		this._returnTopBtn.touchEnabled = true;
        this.addChild( this._returnTopBtn );
        this._returnTopBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onReturnTopBtnClick, this);

		this._restartBtn = new egret.TextField();
        this._restartBtn.text = "Restart";
        this._restartBtn.size = 50;
        this._restartBtn.x = 360;
        this._restartBtn.y = 1000;
		this._restartBtn.width = 200;
		this._restartBtn.textAlign = egret.HorizontalAlign.CENTER;
		this._restartBtn.textColor = GameColor.c_blue;
        this.addChild( this._restartBtn );
        this._restartBtn.touchEnabled = true;
        this._restartBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onRestartBtnClick, this);

	}

	private onReturnTopBtnClick(evt:egret.TouchEvent):void {
		this.dispatchEvent(GameEvent.getEventByName(GameEvent.RETURN_TOP));
	}

	private onRestartBtnClick(evt:egret.TouchEvent):void {
		this.dispatchEvent(GameEvent.getEventByName(GameEvent.GAME_START));
	}

	public resetView() {
		var gd:GameData = GameData.getInstance();
		var result : number = 0;

		for (let aCard of gd.myDeck) {
			var aCardUI : CardUI = this._myCards[aCard._setIndex];
			aCardUI.updateView(aCard);
		}

		for (let aCard of gd.youDeck) {
			var aCardUI : CardUI = this._yourCards[aCard._setIndex];
			aCardUI.updateView(aCard);
		}

		for (var i = 0; i < 5; i++) {
			var myCard:Card = gd.myDeck[i];
			var yourCard:Card = gd.youDeck[i];
			var aLbl:egret.TextField = this._resutLblArray[i];
			if (Card.isFirstBiggerTheSecond(myCard, yourCard)) {
				aLbl.text = "1";
				aLbl.textColor = GameColor.c_green;
				result++;
			} else {
				aLbl.text = "-1";
				aLbl.textColor = GameColor.c_red;
				result--;
			}
		}

		if(result > 0) {
			this._messageLbl.text = "WIN";
			gd.winCount++;
			gd.playCount++;
		} else {
			this._messageLbl.text = "LOSE";
			gd.playCount++;
		}

	}

}