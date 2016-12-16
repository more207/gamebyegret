


class Card {

	public constructor(mk:number,sk:number) {
		this._mainKey = mk;
		this._subKey = sk;
	}

	public _mainKey : number;
	public _subKey : number;

	public _handIndex : number;
	public _setIndex : number;
	
	public getMainText():string {
		return AFKey.MK_TEXT[this._mainKey];
	} 

	public getSubText():string{
		return AFKey.SK_TEXT[this._subKey];
	}

	public toString():string {
		return "main:" + this.getMainText() + " sub:" + this.getSubText();
	}

	public static isFirstBiggerTheSecond(first:Card,second:Card):boolean {

		if(first._mainKey != second._mainKey){
			if (first._mainKey > second._mainKey) {
				if(first._mainKey == AFKey.MK_ELEPHANT && second._mainKey == AFKey.MK_MOUSE){
					return false;
				} else {
					return true;
				}
			} else {
				if(first._mainKey == AFKey.MK_MOUSE && second._mainKey == AFKey.MK_ELEPHANT){
					return true;
				} else {
					return false;
				}
			}
		} else {
			if(first._subKey > second._subKey){
				if(first._subKey == AFKey.SK_3_SCISSORS && second._mainKey == AFKey.SK_1_ROCK){
					return false;
				} else {
					return true;
				}
			} else {
				if(second._subKey == AFKey.SK_3_SCISSORS && first._mainKey == AFKey.SK_1_ROCK){
					return false;
				} else {
					return true;
				}
			}
		}

	}

}