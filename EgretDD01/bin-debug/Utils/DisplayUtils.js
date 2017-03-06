var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DisplayUtils = (function (_super) {
    __extends(DisplayUtils, _super);
    function DisplayUtils() {
        return _super.call(this) || this;
    }
    DisplayUtils.prototype.createBitmap = function (name) {
        var bitmap = new egret.Bitmap;
        var texture = RES.getRes(name);
        if (texture) {
            bitmap.texture = texture;
        }
        return bitmap;
    };
    DisplayUtils.prototype.removeFromParent = function (bitmap) {
        if (bitmap.parent) {
            bitmap.parent.removeChild(bitmap);
        }
    };
    return DisplayUtils;
}(BaseClass));
__reflect(DisplayUtils.prototype, "DisplayUtils");
//# sourceMappingURL=DisplayUtils.js.map