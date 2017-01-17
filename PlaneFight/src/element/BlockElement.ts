
enum BlockStatic {
	StaticUNHIT = 0,
	StaticBEHIT
}

enum BlockValue {
	ValueEmpty = 0,
	ValuePart = 1,
	ValueMain = 2,
}

class BlockElement extends BaseElement {

	public constructor() {
		super();
		this.static = BlockStatic.StaticUNHIT;
		this.value = BlockValue.ValueEmpty;
	}
	
	public static:number;
	public value:number;

	public isBeHit():boolean{
		if(this.static == BlockStatic.StaticBEHIT ) {
			return true;
		}
		return false;
	}

	public hitBlock():void {
		this.static = BlockStatic.StaticBEHIT;
	}
}