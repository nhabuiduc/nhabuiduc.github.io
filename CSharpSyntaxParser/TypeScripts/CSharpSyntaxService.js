var CSharpSyntaxService = (function () {
    function CSharpSyntaxService() {
        this.changeQueue = new System.Collections.Generic.Queue();
    }
    CSharpSyntaxService.prototype.ParseTree = function (code) {
        var source = Core.Text.SourceText.From_1429(code);
        var tree = CSharp.CSharpSyntaxTree.ParseText_2029(source);
        this.lastTree = tree;
        this.lastSourceCode = source;
        return tree;
    };
    CSharpSyntaxService.prototype.AddChange = function (change) {
        this.changeQueue.Enqueue(change);
    };
    CSharpSyntaxService.prototype.GetTree = function () {
        if (this.changeQueue.Count == 0) {
            return this.lastTree;
        }
        this.ApplyChangedOnSource();
        var tree = this.lastTree.WithChangedText(this.lastSourceCode);
        this.lastTree = tree;
        return this.lastTree;
    };
    CSharpSyntaxService.prototype.ApplyChangedOnSource = function () {
        var source = this.lastSourceCode;
        while (this.changeQueue.Count > 0) {
            source = source.WithChanges_9931(this.changeQueue.Dequeue());
        }
        this.lastSourceCode = source;
    };
    return CSharpSyntaxService;
})();
