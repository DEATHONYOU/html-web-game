class MpBar {
    constructor(x, y, w, h, maxMp, color) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.maxMp = maxMp;
      this.maxWidth = w;
      this.Mp = maxMp;
      this.color = color;
    }
  
    show(context) {
      context.lineWidth = 4;
      context.strokeStyle = "#0000ff";
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, this.w, this.h);
      context.strokeRect(this.x, this.y, this.maxWidth, this.h);
    }
  
    updateHealth(val) {
      if (val >= 0) {
        this.health = val;
        this.w = (this.health / this.maxHealth) * this.maxWidth;
      }
    }
  }