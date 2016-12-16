class FightingPanel extends egret.Sprite {
	public constructor() {
		super();
		this.initPanel();
	}

	private _giveUpBtn : egret.TextField;
	private _dealBtn : egret.TextField;

	private _setFlg:boolean[] = [false, false, false, false, false]; 

	private _setPosition : Array<egret.Point>;
	private _handPosition : Array<egret.Point>;

	private _cards : Array<CardUI>;

	private initPanel(){
		this._giveUpBtn = new egret.TextField();
        this._giveUpBtn.text = "GiveUp";
        this._giveUpBtn.size = 50;
        this._giveUpBtn.x = 80;
        this._giveUpBtn.y = 950;
		this._giveUpBtn.width = 200;
		this._giveUpBtn.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild( this._giveUpBtn );
        this._giveUpBtn.touchEnabled = true;
        this._giveUpBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onGiveUpBtnClick, this);

		this._dealBtn = new egret.TextField();
        this._dealBtn.text = "Deal";
        this._dealBtn.size = 50;
        this._dealBtn.x = 360;
        this._dealBtn.y = 950;
		this._dealBtn.width = 200;
		this._dealBtn.textAlign = egret.HorizontalAlign.CENTER;
		this._dealBtn.textColor = GameColor.c_blue;
        this.addChild( this._dealBtn );
        this._dealBtn.touchEnabled = true;
        this._dealBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onDealBtnClick, this);

		this._handPosition = new Array<egret.Point>();
		this._handPosition.push(new egret.Point(50, 700));
		this._handPosition.push(new egret.Point(150, 700));
		this._handPosition.push(new egret.Point(250, 700));
		this._handPosition.push(new egret.Point(350, 700));
		this._handPosition.push(new egret.Point(450, 700));

		this._setPosition = new Array<egret.Point>();
		this._setPosition.push(new egret.Point(65, 140));
		this._setPosition.push(new egret.Point(245, 140));
		this._setPosition.push(new egret.Point(425, 140));
		this._setPosition.push(new egret.Point(155, 340));
		this._setPosition.push(new egret.Point(335, 340));
		
		this._cards = new Array<CardUI>();
		for(var i = 0; i< 5; i++) {
			var aCardUI:CardUI = new CardUI();
			aCardUI.x = this._handPosition[i].x;
			aCardUI.y = this._handPosition[i].y;
			aCardUI.touchEnabled = true;
			aCardUI.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchCard, this);

			this._cards.push(aCardUI); 
			this.addChild(aCardUI);
		}
	}

	private onDealBtnClick(evt:egret.TouchEvent):void {
		// Check can be deal;
		for(let flg of this._setFlg) {
			if(!flg){
				return;
			}
		}

		this.dispatchEvent(GameEvent.getEventByName(GameEvent.GAME_FIGHT));
	}

	private onGiveUpBtnClick(evt:egret.TouchEvent):void {



		this.dispatchEvent(GameEvent.getEventByName(GameEvent.RETURN_TOP));
	}

	public resetView():void {

		var gd:GameData = GameData.getInstance();
		for(var i = 0; i< 5; i++) {
			var aCard : Card = gd.myDeck[i];
			var aCardUI:CardUI = this._cards[i];
			aCardUI.updateView(aCard);
			aCardUI.x = this._handPosition[aCard._handIndex].x;
			aCardUI.y = this._handPosition[aCard._handIndex].y;
			this._setFlg[i] = false;
		}

	}

	private onTouchCard(evt:egret.TouchEvent):void {
		var selected:CardUI = evt.target;
		if(selected._isSetted) {
			selected._isSetted = false;
			selected.x = this._handPosition[selected._card._handIndex].x;
			selected.y = this._handPosition[selected._card._handIndex].y;
			this._setFlg[selected._card._setIndex] = false;
		} else {
			selected._isSetted = true;
			for(var i = 0; i< 5; i++){
				if(!this._setFlg[i]) {
					selected.x = this._setPosition[i].x;
					selected.y = this._setPosition[i].y;
					selected._card._setIndex = i;
					this._setFlg[i] = true;
					break;
				}
			}
		}
	}

}