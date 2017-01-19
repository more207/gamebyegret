class MainBattlePage extends egret.Sprite{
	
	private battleBlockList:BlockElementView[]; 
	private preSelectElementId:number = -1;
	
	public constructor() {
		super();
		this.initPage();
	}

	public initPage() {
		this.initBattleBlocks();
	}

	public initBattleBlocks() {
		this.battleBlockList = [];

		var gameData :GameData = GameData.getInstance();
		
		var offsetX = 10;
		var offsetY = 100;
		var index:number = 0;
		for(var x = 0; x < gameData.maxRow; x++) {
			for(var y = 0;y < gameData.maxColume; y++) {
				var aBlock:BlockElementView = new BlockElementView(index, x, y);
				aBlock.x = x * BlockElementView.viewWidth + offsetX;
				aBlock.y = y * BlockElementView.viewHeight + offsetY;
				this.battleBlockList.push(aBlock);
				aBlock.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBlock, this);
				this.addChild(aBlock);
				index++;
			}
		}
	}


	public updatePage() {
		var gameData :GameData = GameData.getInstance();
		for(var i = 0; i < gameData.blockCnt; i++) {
			var aBlock:BlockElementView = this.battleBlockList[i];
			aBlock.updateView();
		}
	}

	public onTouchBlock(e:egret.TouchEvent):void {
		let ev:BlockElementView = <BlockElementView>e.currentTarget;
		if(ev.isSelected()) {
			this.preSelectElementId = -1;
			var ret:number = ev.hitBlock();
			if(ret == BlockValue.ValueMain){
				GameLogic.destroyPlane(ev.posX, ev.posY);
				//更新所有的方块
				this.updatePage();
			}

			if (GameLogic.checkGameWin() == true) {

				return;	
			}

			if (GameLogic.checkGameLose() == true) {
				
				return;
			}
		} else {
			if(this.preSelectElementId != -1) {
				this.battleBlockList[this.preSelectElementId].setUnSelect();
			}
			
			ev.setSelected();
			this.preSelectElementId = ev._id;
		}
	}

	public showGameWin() : boolean{
		//this.dispatchEvent(GameEvent.getEventByName(GameEvent.EVENT_GAME_WIN));
		return false;
	}

	public showGameLose() : boolean {
		return false;	
	}
	
}