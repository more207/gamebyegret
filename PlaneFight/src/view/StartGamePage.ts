class StartGamePage extends egret.Sprite {
	public constructor() {
		super();
		this.initPage();
	}

	private _titleLabel : egret.TextField;
	private _versionLabel : egret.TextField;
	// private _startButton : egret.TextField;

	private _startButton : eui.Button;

	public initPage() :void {
		this._titleLabel = new egret.TextField();
		this._titleLabel.text = "Plane Fight";
		this._titleLabel.size = 70;
		this._titleLabel.x = 0;
		this._titleLabel.y = 100;
		this._titleLabel.width = GameData.getStageWidth(); 
		this._titleLabel.textAlign = egret.HorizontalAlign.CENTER;
		this.addChild(this._titleLabel);

		this._versionLabel = new egret.TextField();
		this._versionLabel.text = GameInfo.VERSION;
		this._versionLabel.size = 20;
		this._versionLabel.width = 80; 
		this._versionLabel.x = GameData.getStageWidth() - 100;
		this._versionLabel.y = GameData.getStageHeight() - 100;
		
		this._versionLabel.textAlign = egret.HorizontalAlign.RIGHT;
		this.addChild(this._versionLabel);

		this._startButton = new eui.Button();
		this._startButton.label = "START";
		this._startButton.width = 200;
		this._startButton.x = GameData.getStageWidth()/2 - 100;
		this._startButton.y = GameData.getStageHeight() - 200;
		this._startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickStartButton, this);
		this.addChild(this._startButton);


		// this._startButton = new egret.TextField();
		// this._startButton.text = "START";
		// this._startButton.size = 40;
		// this._startButton.width = 200; 
		// this._startButton.x = GameData.getStageWidth() / 2 - 100;
		// this._startButton.y = GameData.getStageHeight() - 200;
		// this._startButton.textAlign = egret.HorizontalAlign.CENTER;
		// this.addChild(this._startButton);

	}

	public onClickStartButton(e:egret.TouchEvent):void {
		this.dispatchEvent(GameEvent.getEventByName(GameEvent.EVENT_GAME_START));
	}


	// private toggleBtns:Array<eui.ToggleButton> = [];
	// private initToggleBar():void {
	// 	for (var i: number = 0; i < 4; i++) {
	// 		var btn: eui.ToggleButton = new eui.ToggleButton();
	// 		btn.label = i + 1 + "";
	// 		btn.y = 100;
	// 		btn.width = 80;
	// 		btn.height = 60;
	// 		btn.x = 20 + i * 80;
	// 		btn.addEventListener(eui.UIEvent.CHANGE, this.toggleChangeHandler, this);
	// 		this.toggleBtns.push(btn);
	// 		this.addChild(btn);
	// 	}
	// }
	// private toggleChangeHandler(evt: eui.UIEvent) {
	// 	for (var i: number = 0; i < this.toggleBtns.length; i++) {
	// 		var btn: eui.ToggleButton = this.toggleBtns[i];
	// 		btn.selected = (btn == evt.target);
	// 	}
	// }
}