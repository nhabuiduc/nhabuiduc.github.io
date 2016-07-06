var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Playground;
(function (Playground) {
    var Highlight;
    (function (Highlight) {
        var HighlighWalker = (function (_super) {
            __extends(HighlighWalker, _super);
            function HighlighWalker() {
                _super.apply(this, arguments);
            }
            return HighlighWalker;
        })(Microsoft.CodeAnalysis.CSharp.CSharpSyntaxVisitorBase);
        Highlight.HighlighWalker = HighlighWalker;
    })(Highlight = Playground.Highlight || (Playground.Highlight = {}));
})(Playground || (Playground = {}));
