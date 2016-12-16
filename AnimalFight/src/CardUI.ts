class CardUI extends egret.Sprite{

	private _isShow : boolean;
	private _card : Card;

	private _mainLabel : egret.TextField;
	private _subLabel : egret.TextField;

	

	public constructor(card:Card) {
		super();
		this._card = card;
		this.initComponents();

	}

	private initComponents():void{
		this._isShow = true;

		this._mainLabel = new egret.TextField;
		this._mainLabel.text = this._card.getMainText();
		this._mainLabel.size = 60;
		this._mainLabel.textColor = 0xFF0000;
		this._mainLabel.textAlign = egret.HorizontalAlign.CENTER;
		this._mainLabel.x = this.stage.width/2;
		this._mainLabel.y = this.stage.height/2;
		this.addChild(this._mainLabel);

		this._subLabel = new egret.TextField;
		this._subLabel.text = this._card.getSubText();
		this._subLabel.size = 30;
		this.addChild(this._subLabel);
	}






}