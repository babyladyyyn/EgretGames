var game;
(function (game) {
    var TDSelectPanel = (function (_super) {
        __extends(TDSelectPanel, _super);
        function TDSelectPanel() {
            _super.call(this);
        }
        var d = __define,c=TDSelectPanel,p=c.prototype;
        d(TDSelectPanel, "Ins"
            ,function () {
                if (this.ins == null)
                    this.ins = new TDSelectPanel();
                return this.ins;
            }
        );
        p.showPanel = function (callFun, callObject) {
            if (this.isOpen) {
                return;
            }
            this.show(0);
            ///////////////////////////////////////////////////
            this.callObject = callObject;
            this.callFun = callFun;
            var data = RES.getRes("turretskin");
            var mcData;
            var mcTexture;
            for (var key in data) {
                mcData = RES.getRes(key + "_json");
                mcTexture = RES.getRes(key + "_png");
                var mcFactory = new egret.MovieClipDataFactory(mcData, mcTexture);
                var mc = new egret.MovieClip(mcFactory.generateMovieClipData(key));
                this.addChild(mc);
                mc.x = Math.abs(this.numChildren - 1) * mc.width + 10;
                mc.gotoAndPlay(1, -1);
                mc.name = key;
                mc.touchEnabled = true;
            }
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTab, this);
        };
        p.onTouchTab = function (e) {
            if (e.target instanceof egret.MovieClip) {
                this.callFun.apply(this.callObject, [e.target.name]);
            }
            this.closePanel();
        };
        p.closePanel = function () {
            if (!this.isOpen) {
                return;
            }
            this.close();
            ///////////////////////////////////////////////////
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTab, this);
            while (this.numChildren > 0) {
                this.removeChildAt(0);
            }
            this.callObject = null;
            this.callFun = null;
        };
        return TDSelectPanel;
    }(game.BasePanel));
    game.TDSelectPanel = TDSelectPanel;
    egret.registerClass(TDSelectPanel,'game.TDSelectPanel');
})(game || (game = {}));
