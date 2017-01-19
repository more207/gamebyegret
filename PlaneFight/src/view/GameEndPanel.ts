class GameEndPanel extends egret.Sprite{
	public constructor() {
		super();
	}

	private _infoLabel:egret.TextField;

	public initPanel(): void {
		this._infoLabel = new egret.TextField();
		
	}
}