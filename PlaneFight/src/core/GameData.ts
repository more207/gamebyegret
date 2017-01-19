class GameData {
	public static VERSION:string = 'v0.1';

	public static getInstance():GameData{
        if(GameData._instance == null){
            GameData._instance = new GameData();
        }
        return GameData._instance;
    }

	public static getStageHeight():number
    {
        return egret.MainContext.instance.stage.stageHeight;
    }

    public static getStageWidth():number
    {
        return egret.MainContext.instance.stage.stageWidth;
    }

	public mapData:number[][];
	public blockData:BlockElement[];
	public planeList:PlaneElement[];

	public maxRow:number;
	public maxColume:number;
	public maxPlaneCnt:number;
	public maxHitCnt:number;

	public currentHitCnt:number;
	

	// game base info
	public gameModel

	public constructor() {
		this.maxRow = 10;
		this.maxColume = 10;
		this.maxPlaneCnt = 3;

	}

	private static _instance : GameData = null;

	public initData() {
		this.blockData = [];
		this.mapData = new Array();
		this.planeList = [];
	}

	public initBattle(){

		this.initData();

		this.currentHitCnt = 0;
		this.maxHitCnt = 30;

		var index = 0;
		for(var x = 0; x< this.maxRow;x++) {
			var col:number[] = new Array();		
			for(var y = 0; y < this.maxColume; y++) {
				var aBlock:BlockElement = new BlockElement();
				aBlock.id = index;
				aBlock.posX = x;
				aBlock.posY = y;

				this.blockData.push(aBlock);
				col.push(index);

				index++;
			}
			this.mapData.push(col);
		}

		for(var f = 0; f < this.maxPlaneCnt; f++){
			var aPlane : PlaneElement = new PlaneElement();
			if(aPlane.placePlane()){
				this.planeList.push(aPlane);
			}
		}

		// for(var x = 0; x < this.blockCnt; x++){
		// 	var aBlock : BlockElement = this.blockData[x];
		// 	console.debug("" + aBlock.id + " " + aBlock.value);
		// }
		
	}

	public isClear():boolean {
		for (var i = 0; i < this.planeList.length; i++) {
			var aPlane:PlaneElement = this.planeList[i];
			if(!aPlane.isBeHit()){
				return false;
			}
		}
		return true;
	}

	public getBlockIndex(x:number, y:number):number {
		return this.mapData[x][y];
	}

	public getBlockElement(x:number, y:number):BlockElement {
		var idx:number = this.mapData[x][y];
		return this.blockData[idx];
	}

	public hitBlock(x:number, y:number) : number {
		return 0;
	}


}