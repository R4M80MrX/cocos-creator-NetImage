const { ccclass, property } = cc._decorator;

@ccclass
export default class NetImage extends cc.Node {
  @property
  _src: string = "";

  @property
  size: cc.Size = new cc.Size(0, 0);

  sprite: cc.Sprite;
  _spriteFrame: cc.SpriteFrame;

  set src(src: string) {
    this._src = src;

    if (!this.sprite) {
      this.sprite = this.addComponent(cc.Sprite);
    }

    this._loadFromUrl(this._src);
  }

  get src() {
    return this._src;
  }

  onload?: () => any;

  private _loadFromUrl(src: string) {
    cc.loader.load({ url: src, type: "png" }, (err, texture: cc.Texture2D) => {
      if (err) {
        cc.log(err);
        return;
      }

      this._spriteFrame = new cc.SpriteFrame(texture);

      this.sprite.spriteFrame = this._spriteFrame;

      if (this.size.width === 0 && this.size.height === 0) {
        this.setContentSize(this._spriteFrame.getRect());
      } else {
        this.setContentSize(this.size);
      }

      this.onload && this.onload();
    });
  }
}
