class AirBlockUI extends egret.Sprite {

	public static VALUE_EMPTY:number = 0;
	public static VALUE_PART:number = 1;
	public static VALUE_MAIN:number = 2;

	public constructor(px : number, py :number) {
		super();

		this.px = px;
		this.py = py;
		this.isBeShot = false;
		this.blockValue = AirBlockUI.VALUE_EMPTY;
		this.initView();
	}

	public px:number;
	public py:number;
	public blockValue:number;
	public isBeShot:boolean = false;

	private _debugLbl : egret.TextField;

	public initView() {

		this.x = this.px * 60;
		this.y = this.py * 60;
		this.width = 60;
		this.height = 60;

		this.graphics.drawRect(0,0,60,60);
		this.graphics.beginFill(0xFF0000);
		this.graphics.endFill();

		this._debugLbl.x = 0;
		this._debugLbl.y = 0;
		this._debugLbl.width = 60;
		this._debugLbl.height = 60;
		this.addChild(this._debugLbl);

	}

	public updateView() {
		if (this.isBeShot) {
			if(this.blockValue == AirBlockUI.VALUE_MAIN){
				this._debugLbl.text = "毁";
			} else if (this.blockValue == AirBlockUI.VALUE_PART) {
				this._debugLbl.text = "中";
			} else {
				this._debugLbl.text = "空";
			}
		} else {
			this._debugLbl.text = "未";
		}

	}


}