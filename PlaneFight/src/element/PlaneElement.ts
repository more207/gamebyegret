
enum PlanHeadTo {
	Head_UP,
	Head_DOWN,
	Head_LEFT,
	Head_RIGHT
}

class PlaneElement extends BaseElement {

	public static toUp:number[][] = [[0,-1],[-2,0],[-1,0],[0,0],[1,0],[2,0],[0,1],[-1,2],[0,2],[1,2]];
	public static toDown:number[][] = [[-1,-2],[0,-2],[1,-2],[0,-1],[-2,0],[-1,0],[0,0],[1,0],[2,0],[-1,0]];
	public static toLeft:number[][] = [[-1,0],[0,-2],[0,-1],[0,0],[0,1],[0,2],[1,0],[2,-1],[2,0],[2,1]];
	public static toRight:number[][] = [[-2,-1],[-2,0],[-2,1],[-1,0],[0,-2],[0,-1],[0,0],[0,1],[0,2],[1,0]];

	public elements:number[];

	protected orientation:number;

	public constructor() {
		super();
	}

	public placePlane():boolean {
		
		var t:number = 0;
		var x:number = 0;
		var y:number = 0;

		var placeTimeCnt:number = 100;
		do{
			// 增加随机放置成功的可能性
			t = Math.floor(Math.random() * 4);
			if(t == PlanHeadTo.Head_UP) {
				x = Math.floor(Math.random() * 6) + 2;
				y = Math.floor(Math.random() * 7) + 1;
			} else if(t == PlanHeadTo.Head_DOWN) {
				x = Math.floor(Math.random() * 6) + 2;
				y = Math.floor(Math.random() * 7) + 2;
			}else if(t == PlanHeadTo.Head_LEFT) {
				x = Math.floor(Math.random() * 7) + 1;
				y = Math.floor(Math.random() * 6) + 2;
			}else if(t == PlanHeadTo.Head_RIGHT) {
				x = Math.floor(Math.random() * 7) + 2;
				y = Math.floor(Math.random() * 6) + 2;
			}

			if(this.tryToPlace(t,x,y)){
				this.orientation = t;
				this.posX = x;
				this.posY = y;
				return true;
			}

		}while(placeTimeCnt-- > 0);

		return false;

	}

	public tryToPlace(t:number, x:number, y:number):Boolean {
		var gameData = GameData.getInstance();
		var offset :number[][];
		if(t == PlanHeadTo.Head_UP) {
			offset = PlaneElement.toUp;
		} else if(t == PlanHeadTo.Head_DOWN) {
			offset = PlaneElement.toDown;
		}else if(t == PlanHeadTo.Head_LEFT) {
			offset = PlaneElement.toLeft;
		}else if(t == PlanHeadTo.Head_RIGHT) {
			offset = PlaneElement.toRight;
		}

		// try
		for(var i = 0; i<offset.length; i++){
			var aOffset = offset[i];
			var idx :number = gameData.mapData[x + aOffset[0]][y + aOffset[1]];	
			if(gameData.blockData[idx].value !=BlockValue.ValueEmpty){
				return false;
			}
		}

		// place
		for(var i = 0; i<offset.length; i++){
			var aOffset = offset[i];
			var idx :number = gameData.mapData[x + aOffset[0]][y + aOffset[1]];	
			if(aOffset[0] == 0 && aOffset[1] == 0) {
				gameData.blockData[idx].value = BlockValue.ValueMain;
			} else {
				gameData.blockData[idx].value = BlockValue.ValuePart;
			}
		}

		return true;
	}

	public isBeHit () {
		var gameData = GameData.getInstance();
		var idx :number = gameData.mapData[this.posX][this.posY];	
		if(gameData.blockData[idx].static == BlockStatic.StaticBEHIT){
			return true;
		}
		return false;
	}

}