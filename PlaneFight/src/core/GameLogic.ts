class GameLogic {
	public constructor() {
	}

	public static checkGameWin():boolean {
		var gd:GameData = GameData.getInstance();
		for (var i = 0; i < gd.planeList.length; i++) {
			var pl:PlaneElement = gd.planeList[i];
			var aBlock:BlockElement = gd.getBlockElement(pl.posX, pl.posY);
			if (!aBlock.isBeHit()) {
				return false;
			}
		}
		return true;
	}

	public static checkGameLose():boolean {
		var gd:GameData = GameData.getInstance();
		if(gd.currentHitCnt > gd.maxHitCnt) {
			return true;
		}
		return false;
	}

	public static destroyPlane(x:number, y:number):boolean {
		var gd:GameData = GameData.getInstance();
		for (var i = 0; i < gd.planeList.length;i++) {
			var aPlane : PlaneElement = gd.planeList[i];
			if(x == aPlane.posX && y == aPlane.posY) {
				aPlane.distroy();
			}
		}

		return true;
	}

}