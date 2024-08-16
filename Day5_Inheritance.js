Rectangle.prototype.area = function() {
	return (this.h * this.w)
};

class Square extends Rectangle {
	constructor(s) {
		super(s);
		this.h = this.w = s
	}
}