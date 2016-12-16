class CardUI extends egret.Sprite{

	public _isSetted : boolean = false;

	public _handIndex :number = 0;
	public _setIndex : number = 0;

	private _mainLabel : egret.TextField;
	private _subLabel : egret.TextField;

	public _card : Card;

	public constructor() {
		super();
		this.initComponents();

	}

	private initComponents():void{

		this.width = 150;
		this.height = 180;

		this.graphics.clear();

		this.graphics.beginFill(0xff8000, 1);
        this.graphics.lineStyle(2, 0x000000);
        this.graphics.drawRect(0, 0, this.width, this.height);
        this.graphics.endFill();

		this._mainLabel = new egret.TextField;
		
		this._mainLabel.size = 60;
		this._mainLabel.textColor = 0xFF0000;
		this._mainLabel.textAlign = egret.HorizontalAlign.CENTER;
		this._mainLabel.x = 5;
		this._mainLabel.y = 5;
		this.addChild(this._mainLabel);

		this._subLabel = new egret.TextField;
		
		this._subLabel.size = 30;
		this._subLabel.x = 5;
		this._subLabel.y = 70;
		this.addChild(this._subLabel);
	}

	public updateView(card:Card):void {
		this._isSetted = false;
		this._card = card;
		this._mainLabel.text = card.getMainText();
		this._subLabel.text = card.getSubText();
	}

}