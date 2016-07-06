var TreeItem = (function () {
    function TreeItem() {
    }
    TreeItem.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    TreeItem.ToTreeItem = function (node) {
        if (node.IsNode) {
            return TreeItem.ToTreeItem_Node(node.AsNode());
        }
        return TreeItem.ToTreeItem_Token(node.AsToken());
    };
    TreeItem.ToTreeItem_Node = function (node) {
        var kind = CSharp.SyntaxKind[node.RawKind];
        var treeItem = new TreeItem();
        treeItem.label = kind;
        treeItem.syntaxNode = node;
        treeItem.cssClass = "syntaxNode";
        treeItem.fullSpan = node.FullSpan;
        treeItem.id = TreeItem.getRandomInt(0, 10000000);
        if (node.ChildNodesAndTokens().Count > 0) {
            treeItem.children = [];
        }
        return treeItem;
    };
    TreeItem.ToTreeItem_Token = function (token) {
        var kind = CSharp.SyntaxKind[token.RawKind];
        var treeItem = new TreeItem();
        treeItem.label = kind;
        treeItem.cssClass = "syntaxToken";
        treeItem.syntaxToken = token;
        treeItem.fullSpan = token.FullSpan;
        treeItem.id = TreeItem.getRandomInt(0, 10000);
        if (token.HasLeadingTrivia || token.HasTrailingTrivia) {
            treeItem.children = [];
        }
        else {
            treeItem.children = undefined;
        }
        return treeItem;
    };
    TreeItem.ToTreeItem_Trivia = function (trivia, leading) {
        var kind = CSharp.SyntaxKind[trivia.RawKind];
        var treeItem = new TreeItem();
        treeItem.label = (leading ? "Lead:" : "Trail:") + kind;
        treeItem.cssClass = "syntaxTrivia";
        treeItem.syntaxTrivia = trivia;
        treeItem.id = TreeItem.getRandomInt(0, 10000);
        if (trivia.HasStructure) {
            treeItem.children = [];
        }
        else {
            treeItem.children = undefined;
        }
        treeItem.fullSpan = trivia.FullSpan;
        return treeItem;
    };
    TreeItem.ToTreeItemTriviaArr = function (nodes, leading) {
        var virArr = [];
        for (var i = 0; i < nodes.length; i++) {
            virArr.push(TreeItem.ToTreeItem_Trivia(nodes[i], leading));
        }
        return virArr;
    };
    TreeItem.ToTreeItemArr = function (nodes) {
        var virArr = [];
        for (var i = 0; i < nodes.length; i++) {
            virArr.push(TreeItem.ToTreeItem(nodes[i]));
        }
        return virArr;
    };
    return TreeItem;
})();
