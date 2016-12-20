class BlockModel {

	public static VALUE_EMPTY:number = 0;
	public static VALUE_PART:number = 1;
	public static VALUE_MAIN:number = 2;

	public constructor(px : number, py :number) {

		this.px = px;
		this.py = py;
		this.value = BlockModel.VALUE_EMPTY;
	}

	public px:number;
	public py:number;
	public value:number;
}