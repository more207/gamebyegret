class BattleModel {
	private blocks:Array<BlockModel>; 

	public constructor() {
		for(var i = 0; i < 10; i++) {
			for (var j = 0; j < 10; j++) {
				var aBlock = new BlockModel(i,j);
				this.blocks.push(aBlock);
			}
		}
	}

	public initModel():void{

	}
}