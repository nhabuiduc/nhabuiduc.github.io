var Playground;
(function (Playground) {
    var Highlight;
    (function (Highlight) {
        var a;
    })(Highlight = Playground.Highlight || (Playground.Highlight = {}));
})(Playground || (Playground = {}));
var CSharp = Microsoft.CodeAnalysis.CSharp;
var Core = Microsoft.CodeAnalysis;
var Linq = System.Linq;
var SGenerics = System.Collections.Generic;
var PHighlight = Playground.Highlight;
var CSharpSyntaxService = (function () {
    function CSharpSyntaxService() {
        this.changeQueue = new System.Collections.Generic.Queue();
    }
    // public methods
    CSharpSyntaxService.prototype.ParseTree = function (code) {
        var source = Core.Text.SourceText.From_1429(code);
        var tree = CSharp.CSharpSyntaxTree.ParseText_2029(source);
        this.lastTree = tree;
        this.lastSourceCode = source;
        return tree;
    };
    CSharpSyntaxService.prototype.addChange = function (change) {
        this.changeQueue.Enqueue(change);
    };
    //public AddChange(changes: Core.Text.TextChange): Core.SyntaxTree {
    //    if (this.lastSourceCode == null) {
    //        return;
    //    }
    //    var source = this.lastSourceCode.WithChanges_5075([changes]);
    //    var tree = this.lastTree.WithChangedText(source);
    //    this.lastTree = tree;
    //    this.lastSourceCode = source;
    //    return tree;
    //}
    CSharpSyntaxService.prototype.getLastTree = function () {
        if (this.lastTree == null) {
            return this.getTree();
        }
        return this.lastTree;
    };
    CSharpSyntaxService.prototype.getTree = function () {
        if (this.changeQueue.Count == 0) {
            return this.lastTree;
        }
        this.applyChangedOnSource();
        var tree = this.lastTree.WithChangedText(this.lastSourceCode);
        this.lastTree = tree;
        return this.lastTree;
    };
    CSharpSyntaxService.prototype.getTokensFromSpan = function (from, length) {
        var span = new Core.Text.TextSpan().ctor_1506(from, length);
        var result = this.getTree().GetRoot().DescendantTokens_9576(span);
        var arr = [];
        this.convertToHighlightSpans(result, span, arr);
        return arr;
    };
    // private methods  
    CSharpSyntaxService.prototype.handleHighlightToken = function (token, fullSpan, arr) {
        if (!fullSpan.IntersectsWith_1989(token.Span)) {
            return;
        }
        if (CSharp.CSharpExtensions.IsKeyword(token)) {
            arr.push(this.createSpan(token.Span, 1 /* Keyword */));
            return;
        }
        if (token.RawKind == 8511 /* StringLiteralToken */ || token.RawKind == 8516 /* InterpolatedStringStartToken */ || token.RawKind == 8517 /* InterpolatedStringMidToken */ || token.RawKind == 8518 /* InterpolatedStringEndToken */) {
            arr.push(this.createSpan(token.Span, 3 /* String */));
            return;
        }
        if (token.RawKind == 8508 /* IdentifierToken */) {
            if (token.Parent instanceof CSharp.Syntax.ConstructorDeclarationSyntax) {
                arr.push(this.createSpan(token.Span, 4 /* Constructor */));
                return;
            }
            if (token.Text == "var" && token.Parent instanceof CSharp.Syntax.IdentifierNameSyntax && !(token.Parent.Parent instanceof CSharp.Syntax.QualifiedNameSyntax)) {
                arr.push(this.createSpan(token.Span, 1 /* Keyword */));
                return;
            }
            if (token.Parent instanceof CSharp.Syntax.TypeDeclarationSyntax || token.Parent instanceof CSharp.Syntax.EnumDeclarationSyntax) {
                arr.push(this.createSpan(token.Span, 2 /* ClassName */));
                return;
            }
            if (this.isOnlyIdentifierOrLastInQualifiedName(token)) {
                arr.push(this.createSpan(token.Span, 2 /* ClassName */));
                return;
            }
        }
        arr.push(this.createSpan(token.Span, 0 /* None */));
    };
    CSharpSyntaxService.prototype.isOnlyIdentifierOrLastInQualifiedName = function (token) {
        var childOutermostNode;
        if (token.Parent instanceof CSharp.Syntax.IdentifierNameSyntax && !(token.Parent.Parent instanceof CSharp.Syntax.QualifiedNameSyntax)) {
            childOutermostNode = token.Parent;
        }
        if (!childOutermostNode) {
            var qualifiedName = token.Parent.Parent;
            if (qualifiedName.Right != token.Parent) {
                return false;
            }
            if (qualifiedName.Parent instanceof CSharp.Syntax.QualifiedNameSyntax) {
                return false;
            }
            childOutermostNode = qualifiedName;
        }
        var outermostNode = childOutermostNode.Parent;
        if (outermostNode instanceof CSharp.Syntax.PropertyDeclarationSyntax || outermostNode instanceof CSharp.Syntax.VariableDeclarationSyntax || outermostNode instanceof CSharp.Syntax.AttributeSyntax || outermostNode instanceof CSharp.Syntax.ObjectCreationExpressionSyntax) {
            return true;
        }
        if (outermostNode instanceof CSharp.Syntax.ForEachStatementSyntax) {
            return outermostNode.Type == childOutermostNode;
        }
        return false;
    };
    //private OutOfQualifiedName(token: Core.SyntaxToken): Core.SyntaxNode
    //{
    //    var result = token.Parent.Parent;
    //    while (result instanceof CSharp.Syntax.QualifiedNameSyntax) {
    //        result = result.Parent;
    //    }
    //    return result;
    //}
    CSharpSyntaxService.prototype.handleHighlightTrivia = function (trivia, fullSpan, arr) {
        if (!fullSpan.IntersectsWith_1989(trivia.Span)) {
            return;
        }
        if (trivia.HasStructure) {
            var structure = trivia.GetStructure();
            if (structure instanceof CSharp.Syntax.DocumentationCommentTriviaSyntax) {
                arr.push(this.createSpan(structure.Span, 120 /* XmlComment */));
            }
        }
        if (trivia.RawKind == 8541 /* SingleLineCommentTrivia */ || trivia.RawKind == 8542 /* MultiLineCommentTrivia */) {
            arr.push(this.createSpan(trivia.Span, 100 /* Comment */));
        }
    };
    CSharpSyntaxService.prototype.convertToHighlightSpans = function (tokens, fullSpan, arr) {
        var _this = this;
        _foreach(tokens, function (token) {
            if (token.HasLeadingTrivia) {
                _foreach(token.LeadingTrivia, function (trivia) {
                    _this.handleHighlightTrivia(trivia, fullSpan, arr);
                });
            }
            var hlToken = _this.handleHighlightToken(token, fullSpan, arr);
            if (token.HasTrailingTrivia) {
                _foreach(token.TrailingTrivia, function (trivia) {
                    _this.handleHighlightTrivia(trivia, fullSpan, arr);
                });
            }
        });
        return arr;
    };
    CSharpSyntaxService.prototype.createSpan = function (span, kind) {
        return new Playground.Highlight.HighlightSpan(span.Start, span.Length, kind);
    };
    CSharpSyntaxService.prototype.applyChangedOnSource = function () {
        var source = this.lastSourceCode;
        while (this.changeQueue.Count > 0) {
            source = source.WithChanges_9931(this.changeQueue.Dequeue());
        }
        this.lastSourceCode = source;
    };
    return CSharpSyntaxService;
})();
var TreeItem = (function () {
    function TreeItem() {
        this.collapsed = true;
    }
    Object.defineProperty(TreeItem.prototype, "hasChildren", {
        get: function () {
            return this.children != null;
        },
        enumerable: true,
        configurable: true
    });
    TreeItem.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    TreeItem.AssignTreeItem = function (treeItem, node) {
        if (node.IsNode) {
            return TreeItem.AssignTreeItem_Node(treeItem, node.AsNode());
        }
        return TreeItem.AssignTreeItem_Token(treeItem, node.AsToken());
    };
    TreeItem.ToTreeItem = function (node) {
        if (node.IsNode) {
            return TreeItem.ToTreeItem_Node(node.AsNode());
        }
        return TreeItem.ToTreeItem_Token(node.AsToken());
    };
    TreeItem.ModifyArrayTrivia = function (arr, leadingTrivias, tralingTrivias) {
        var count = 0;
        for (var i = 0; i < leadingTrivias.length; i++) {
            var node = leadingTrivias[i];
            if (arr.length <= count) {
                arr.push(TreeItem.ToTreeItem_Trivia(node, true));
            }
            else {
                TreeItem.AssignTreeItem_Trivia(arr[count], node, true);
            }
            count++;
        }
        for (var i = 0; i < tralingTrivias.length; i++) {
            var node = tralingTrivias[i];
            if (arr.length <= count) {
                arr.push(TreeItem.ToTreeItem_Trivia(node, false));
            }
            else {
                TreeItem.AssignTreeItem_Trivia(arr[count], node, false);
            }
            count++;
        }
        if (arr.length > count) {
            arr.splice(count);
        }
    };
    TreeItem.ModifyArray = function (arr, nodes) {
        var i = 0;
        for (i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            if (arr.length <= i) {
                arr.push(TreeItem.ToTreeItem(node));
            }
            else {
                TreeItem.AssignTreeItem(arr[i], node);
            }
        }
        if (arr.length > i) {
            arr.splice(i);
        }
    };
    TreeItem.ToTreeItem_Node = function (node) {
        var treeItem = new TreeItem();
        TreeItem.AssignTreeItem_Node(treeItem, node);
        return treeItem;
    };
    TreeItem.AssignTreeItem_Node = function (treeItem, node) {
        var kind = CSharp.SyntaxKind[node.RawKind];
        treeItem.syntaxNode = node;
        treeItem.cssClass = "syntaxNode";
        treeItem.fullSpan = node.FullSpan;
        treeItem.label = kind;
        if (!treeItem.id) {
            treeItem.id = TreeItem.getRandomInt(0, 10000000);
        }
        var childNodes = node.ChildNodesAndTokens();
        if (childNodes.Count > 0) {
            if (!treeItem.children) {
                treeItem.children = [];
            }
            if (treeItem.collapsed) {
                treeItem.children = [];
            }
            else {
                TreeItem.ModifyArray(treeItem.children, Linq.Enumerable.ToArray(childNodes));
            }
        }
        else {
            treeItem.children = null;
        }
    };
    TreeItem.ToTreeItem_Token = function (token) {
        var treeItem = new TreeItem();
        TreeItem.AssignTreeItem_Token(treeItem, token);
        return treeItem;
    };
    TreeItem.AssignTreeItem_Token = function (treeItem, token) {
        var kind = CSharp.SyntaxKind[token.RawKind];
        treeItem.label = kind;
        treeItem.cssClass = "syntaxToken";
        treeItem.syntaxToken = token;
        treeItem.fullSpan = token.FullSpan;
        if (!treeItem.id) {
            treeItem.id = TreeItem.getRandomInt(0, 10000);
        }
        if (token.HasLeadingTrivia || token.HasTrailingTrivia) {
            if (!treeItem.children) {
                treeItem.children = [];
            }
            if (treeItem.collapsed) {
                treeItem.children = [];
            }
            else {
                TreeItem.ModifyArrayTrivia(treeItem.children, Linq.Enumerable.ToArray(token.LeadingTrivia), Linq.Enumerable.ToArray(token.TrailingTrivia));
            }
        }
        else {
            treeItem.children = undefined;
        }
    };
    TreeItem.ToTreeItem_Trivia = function (trivia, leading) {
        var treeItem = new TreeItem();
        TreeItem.AssignTreeItem_Trivia(treeItem, trivia, leading);
        return treeItem;
    };
    TreeItem.AssignTreeItem_Trivia = function (treeItem, trivia, leading) {
        var kind = CSharp.SyntaxKind[trivia.RawKind];
        treeItem.label = (leading ? "Lead:" : "Trail:") + kind;
        treeItem.cssClass = "syntaxTrivia";
        treeItem.syntaxTrivia = trivia;
        treeItem.fullSpan = trivia.FullSpan;
        if (!treeItem.id) {
            treeItem.id = TreeItem.getRandomInt(0, 10000);
        }
        if (trivia.HasStructure) {
            if (!treeItem.children) {
                treeItem.children = [];
            }
            if (treeItem.collapsed) {
                treeItem.children = [];
            }
            else {
                //var nodeTrivia = TreeItem.ToTreeItem_Node();
                var nodeTrivia = trivia.GetStructure();
                TreeItem.ModifyArray(treeItem.children, [Core.SyntaxNodeOrToken.op_Implicit_1792(nodeTrivia)]);
            }
        }
        else {
            treeItem.children = undefined;
        }
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
///<reference path="Imports.ts"/>
///<reference path="CSharpSyntaxService.ts"/>
///<reference path="Tree-UI/TreeItem.ts"/>
var AppService = (function () {
    function AppService() {
        // fields
        this.sourceCodeEditor = new SourceCodeEditor();
    }
    // public methods
    AppService.prototype.setCodeMirror = function (codeMirror) {
        this.sourceCodeEditor.setCodeMirror(codeMirror);
    };
    AppService.prototype.getSource = function () {
        return this.sourceCodeEditor.getSource();
    };
    AppService.prototype.setSelection = function (start, end) {
        this.onNodeSelectionChanged(start, end);
    };
    AppService.prototype.setErrorText = function (text) {
        var $errorBox = $("#errorBox");
        $errorBox.val(text);
    };
    return AppService;
})();
var app = angular.module('app', ['ya.treeview', 'ya.treeview.tpls', 'ui.codemirror', 'ui.listview']);
app.service('appService', AppService);
app.service('csharpSyntaxService', CSharpSyntaxService);
var SourceCodeEditor = (function () {
    function SourceCodeEditor() {
    }
    SourceCodeEditor.prototype.setCodeMirror = function (codeMirror) {
        this.codeMirror = codeMirror;
        this.codeDoc = codeMirror.getDoc();
    };
    SourceCodeEditor.prototype.getSource = function () {
        return this.codeDoc.getValue();
    };
    return SourceCodeEditor;
})();
///<reference path="AppService.ts"/>
var Playground;
(function (Playground) {
    var CodeEditorController = (function () {
        function CodeEditorController($scope, appService, csharpSyntaxService) {
            this.$scope = $scope;
            this.appService = appService;
            this.csharpSyntaxService = csharpSyntaxService;
            this.cachedDiagnostics = [];
            this.appService.onNodeSelectionChanged = this.handleNodeSelectionChanged.bind(this);
            $scope.cmOption = {
                lineNumbers: true,
                indentWithTabs: true,
                onLoad: this.handleEditorLoad.bind(this),
            };
            this.appService.onNavigateToError = this.handleNavigateToError.bind(this);
        }
        //private highlightSyntax(): void {
        //    var code = this.appService.getSource();
        //    var tokens = this.csharpSyntaxService.GetTokensFromSpan(0, code.length);
        //    for (var i = 0; i < tokens.length; i++) {
        //        var token = tokens[i];
        //        var css = Playground.Mapping.highlightCss[token.Kind];
        //        var start = this.doc.posFromIndex(token.Start);
        //        var end = this.doc.posFromIndex(token.Start + token.Length);
        //        this.doc.markText(start, end, { className: css });                
        //    }
        //}
        CodeEditorController.prototype.handleEditorLoad = function (editor) {
            this.appService.setCodeMirror(editor);
            this.editor = editor;
            this.doc = editor.getDoc();
            editor.csharpSyntaxService = this.csharpSyntaxService;
            editor.runCSharpMode = Playground.CodeMirrorExtended.runCSharpMode;
            // define faked mode
            CodeMirror.defineMode('roslynCSharp', function (config, modeOptions) {
                return {
                    token: function (stream) {
                        stream.skipToEnd();
                        return null;
                    },
                    startState: function () {
                        return null;
                    }
                };
            });
            this.editor.setOption('mode', 'roslynCSharp');
            editor.on("cursorActivity", this.handleEditor_cursorActivity.bind(this));
            editor.on("beforeChange", this.handleEditor_beforeChange.bind(this));
            setInterval(this.handleShowError.bind(this), 2000);
        };
        // temporary solution is using mark text to show error
        // it should be replaced by run Mode
        // now we only support showing maximum 100 errors
        CodeEditorController.prototype.handleShowError = function () {
            var _this = this;
            var tree = this.csharpSyntaxService.getLastTree();
            if (tree == this.lastTreeForError)
                return;
            this.lastTreeForError = tree;
            var diagontics = tree.GetDiagnostics_4066();
            var diagnosticMarks = [];
            _foreach(diagontics, function (d) {
                if (diagnosticMarks.length > 100)
                    return;
                var c = _this.findCachedDiagnostic(d);
                if (c == null) {
                    // convert using codemirror instead of GetLineSpan of Roslyn                    
                    var start = _this.doc.posFromIndex(d.Location.SourceSpan.Start);
                    var end = _this.doc.posFromIndex(d.Location.SourceSpan.End);
                    c = new Playground.Cm.DiagnosticMarkedText(d, _this.doc.markText(start, end, { className: "cm-trailingspace" }), start, end);
                    _this.cachedDiagnostics.push(c);
                }
                c.isProcessed = true;
            });
            var index = 0;
            while (index < this.cachedDiagnostics.length) {
                var d = this.cachedDiagnostics[index];
                if (!d.isProcessed) {
                    d.mark.clear();
                    this.cachedDiagnostics.splice(index, 1);
                    continue;
                }
                d.isProcessed = false;
                index++;
            }
            //this.cachedDiagnostics = diagnosticMarks;
            if (this.appService.onErrorChanged) {
                this.appService.onErrorChanged(this.cachedDiagnostics);
            }
        };
        CodeEditorController.prototype.handleNavigateToError = function (d) {
            this.doc.setSelection(d.start, d.end);
        };
        CodeEditorController.prototype.findCachedDiagnostic = function (diagnostic) {
            for (var i = 0; i < this.cachedDiagnostics.length; i++) {
                var c = this.cachedDiagnostics[i];
                if (c.diagnostic.Equals_8787(diagnostic)) {
                    return c;
                }
            }
            return null;
        };
        CodeEditorController.prototype.handleEditor_cursorActivity = function (instance) {
            var position = this.doc.indexFromPos(this.doc.getCursor());
            this.appService.onCursorChange(position);
        };
        CodeEditorController.prototype.handleEditor_beforeChange = function (instance, change) {
            var start = this.doc.indexFromPos(change.from);
            var end = this.doc.indexFromPos(change.to);
            var length = end - start;
            var textChange = new Core.Text.TextChange().ctor_1791(new Core.Text.TextSpan().ctor_1506(start, length), change.text.join('\n'));
            this.csharpSyntaxService.addChange(textChange);
        };
        CodeEditorController.prototype.handleNodeSelectionChanged = function (start, end) {
            var posStart = this.doc.posFromIndex(start);
            var posEnd = this.doc.posFromIndex(end);
            this.doc.setSelection(posStart, posEnd);
        };
        return CodeEditorController;
    })();
    Playground.CodeEditorController = CodeEditorController;
})(Playground || (Playground = {}));
app.controller('CodeEditorController', ['$scope', 'appService', 'csharpSyntaxService', Playground.CodeEditorController]);
var Playground;
(function (Playground) {
    var Cm;
    (function (Cm) {
        var DiagnosticMarkedText = (function () {
            function DiagnosticMarkedText(diagnostic, mark, start, end, isProcessed) {
                if (isProcessed === void 0) { isProcessed = false; }
                this.diagnostic = diagnostic;
                this.mark = mark;
                this.start = start;
                this.end = end;
                this.isProcessed = isProcessed;
            }
            Object.defineProperty(DiagnosticMarkedText.prototype, "line", {
                get: function () {
                    return this.start.line + 1;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DiagnosticMarkedText.prototype, "column", {
                get: function () {
                    return this.start.ch + 1;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DiagnosticMarkedText.prototype, "error", {
                get: function () {
                    return this.diagnostic.GetMessage();
                },
                enumerable: true,
                configurable: true
            });
            return DiagnosticMarkedText;
        })();
        Cm.DiagnosticMarkedText = DiagnosticMarkedText;
    })(Cm = Playground.Cm || (Playground.Cm = {}));
})(Playground || (Playground = {}));
var Playground;
(function (Playground) {
    var CodeMirrorExtended = (function () {
        function CodeMirrorExtended() {
        }
        CodeMirrorExtended.runCSharpMode = function (cm, line, st) {
            var lineNo = line.lineNo();
            var startIndex = cm.getDoc().indexFromPos({ line: lineNo, ch: 0 });
            var result = CodeMirrorExtended.BuildEndPositionWithStyle(startIndex, line.text.length, cm, st);
        };
        CodeMirrorExtended.BuildEndPositionWithStyle = function (start, length, cm, st) {
            var tokenSpans = cm.csharpSyntaxService.getTokensFromSpan(start, length);
            var begin = start;
            _foreach(tokenSpans, function (ts) {
                var style = Playground.Mapping.getHighlight(ts.Kind);
                var end = ts.Start + ts.Length - start;
                if (!style && st.length > 1 && !st[st.length - 1]) {
                    st[st.length - 2] = end;
                    return;
                }
                st.push(end, style);
            });
            // make sure the last tokens need to be set
            if (st.length == 1 || st[st.length - 2] < length) {
                st.push(length, null);
            }
            else if (st[st.length - 2] > length) {
                st[st.length - 2] = length;
            }
        };
        return CodeMirrorExtended;
    })();
    Playground.CodeMirrorExtended = CodeMirrorExtended;
    var EndPositionWithStyle = (function () {
        function EndPositionWithStyle(end, style) {
            this.end = end;
            this.style = style;
        }
        return EndPositionWithStyle;
    })();
})(Playground || (Playground = {}));
//<reference path="HighlightSyntaxKind">
var Playground;
(function (Playground) {
    var Mapping = (function () {
        function Mapping() {
        }
        Mapping.getHighlight = function (kind) {
            return Mapping.highlightCss[kind] || null;
        };
        Mapping.highlightCss = new Object();
        return Mapping;
    })();
    Playground.Mapping = Mapping;
    Mapping.highlightCss[1 /* Keyword */] = 'keyword';
    Mapping.highlightCss[2 /* ClassName */] = 'class';
    Mapping.highlightCss[4 /* Constructor */] = 'constructor1';
    Mapping.highlightCss[100 /* Comment */] = 'comment';
    Mapping.highlightCss[120 /* XmlComment */] = 'xml-comment';
    Mapping.highlightCss[3 /* String */] = 'string';
})(Playground || (Playground = {}));
var Playground;
(function (Playground) {
    var Highlight;
    (function (Highlight) {
        var HighlightSpan = (function () {
            function HighlightSpan(Start, Length, Kind) {
                this.Start = Start;
                this.Length = Length;
                this.Kind = Kind;
            }
            return HighlightSpan;
        })();
        Highlight.HighlightSpan = HighlightSpan;
    })(Highlight = Playground.Highlight || (Playground.Highlight = {}));
})(Playground || (Playground = {}));
var Playground;
(function (Playground) {
    var Highlight;
    (function (Highlight) {
        (function (HighlightSyntaxKind) {
            HighlightSyntaxKind[HighlightSyntaxKind["None"] = 0] = "None";
            HighlightSyntaxKind[HighlightSyntaxKind["Keyword"] = 1] = "Keyword";
            HighlightSyntaxKind[HighlightSyntaxKind["ClassName"] = 2] = "ClassName";
            HighlightSyntaxKind[HighlightSyntaxKind["String"] = 3] = "String";
            HighlightSyntaxKind[HighlightSyntaxKind["Constructor"] = 4] = "Constructor";
            HighlightSyntaxKind[HighlightSyntaxKind["Comment"] = 100] = "Comment";
            HighlightSyntaxKind[HighlightSyntaxKind["XmlComment"] = 120] = "XmlComment";
        })(Highlight.HighlightSyntaxKind || (Highlight.HighlightSyntaxKind = {}));
        var HighlightSyntaxKind = Highlight.HighlightSyntaxKind;
    })(Highlight = Playground.Highlight || (Playground.Highlight = {}));
})(Playground || (Playground = {}));
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
///<reference path="AppService.ts"/>
var Playground;
(function (Playground) {
    var IssueViewController = (function () {
        function IssueViewController($scope, appService, csharpSyntaxService) {
            this.$scope = $scope;
            this.appService = appService;
            this.csharpSyntaxService = csharpSyntaxService;
            $scope.items = [];
            $scope.handleDbclick = this.handleDbclick.bind(this);
            //$scope.handleDbclick = function () { alert(''); };
            this.appService.onErrorChanged = this.HandleOnErrorChanged.bind(this);
        }
        IssueViewController.prototype.HandleOnErrorChanged = function (errors) {
            this.$scope.items = errors;
            this.$scope.$apply();
        };
        IssueViewController.prototype.handleDbclick = function (item) {
            if (this.appService.onNavigateToError) {
                this.appService.onNavigateToError(item);
            }
        };
        return IssueViewController;
    })();
    Playground.IssueViewController = IssueViewController;
})(Playground || (Playground = {}));
app.controller('IssueViewController', ['$scope', 'appService', 'csharpSyntaxService', Playground.IssueViewController]);
var config = {
    settings: {
        showPopoutIcon: false,
        showMaximiseIcon: false,
        showCloseIcon: false
    },
    content: [{
        type: 'row',
        content: [{
            type: 'component',
            title: 'Syntax Tree',
            width: 25,
            componentName: 'tabEditor',
            isClosable: false,
            componentState: { templateId: 'TreeTemplate' }
        }, {
            type: 'column',
            content: [{
                type: 'component',
                title: 'Editor',
                componentName: 'tabEditor',
                isClosable: false,
                componentState: { templateId: 'EditorTemplate' }
            }, {
                type: 'component',
                title: 'Issues',
                height: 25,
                componentName: 'tabEditor',
                isClosable: false,
                componentState: { templateId: 'IssuesTemplate' }
            }]
        }]
    }]
};
var myLayout = new GoldenLayout(config);
myLayout.registerComponent('tabEditor', function (container, state) {
    if (!state.templateId)
        return;
    var templateHtml = $('#' + state.templateId).html();
    container.getElement().html(templateHtml);
    // container.getElement().html('<h2>' + componentState.label + '</h2>');
});
myLayout.on('initialised', function () {
    angular.bootstrap(document.body, ['app']);
});
var YaTreeviewCtrl = (function () {
    function YaTreeviewCtrl($scope, $timeout, transcludeFn) {
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.transcludeFn = transcludeFn;
        $scope.node = new TreeItem();
        $scope.node.collapsed = false;
        $scope.node.children = $scope.options.initializedNodes != null ? $scope.options.initializedNodes : [];
        $scope.expand = this.expand.bind(this);
        $scope.collapse = this.collapse.bind(this);
        $scope.toggle = this.toggle.bind(this);
        $scope.selectNode = this.selectNode.bind(this);
        $scope.context = {
            selectedNodes: [],
            root: $scope.node,
            collapse: $scope.collapse,
            expand: $scope.expand,
            selectNode: $scope.selectNode,
            toggle: $scope.toggle
        };
        this.options = this.fillOption($scope.options);
    }
    YaTreeviewCtrl.prototype.fillOption = function (clientOptions) {
        var options = {};
        clientOptions = clientOptions || {};
        options.onExpand = clientOptions.onExpand || angular.noop;
        options.onCollapse = clientOptions.onCollapse || angular.noop;
        options.onSelect = clientOptions.onSelect || angular.noop;
        // options.onDblClick = clientOptions.onDblClick || angular.noop;
        return options;
    };
    YaTreeviewCtrl.prototype.expand = function (event, node) {
        node.collapsed = false;
        this.options.onExpand(event, node, this.$scope.context);
    };
    YaTreeviewCtrl.prototype.collapse = function (event, node) {
        node.collapsed = true;
        angular.forEach(node.children, function (child) {
            child.collapsed = true;
        });
        this.options.onCollapse(event, node, this.$scope.context);
    };
    YaTreeviewCtrl.prototype.selectNode = function (event, node) {
        this.options.onSelect(event, node, this.$scope.context);
    };
    YaTreeviewCtrl.prototype.toggle = function (event, node) {
        if (node.collapsed) {
            this.$scope.expand(event, node);
        }
        else {
            this.$scope.collapse(event, node);
        }
    };
    return YaTreeviewCtrl;
})();
angular.module("ya.treeview", []).controller("YaTreeviewCtrl", ["$scope", "$timeout", YaTreeviewCtrl]).directive("yaTreeview", function () {
    return {
        restrict: "AE",
        replace: true,
        transclude: true,
        controller: "YaTreeviewCtrl",
        scope: {
            id: "@yaId",
            options: "=yaOptions",
            context: "=yaContext",
        },
        templateUrl: "templates/ya-treeview/treeview.tpl.html",
        compile: function (tElement, tAttrs, tTranscludeFn) {
            return function (scope, iElement, iAttrs, treeviewCtrl) {
                treeviewCtrl.transcludeFn = tTranscludeFn;
            };
        }
    };
}).directive("yaNode", ["$compile", function ($compile) {
    return {
        restrict: "AE",
        replace: false,
        scope: false,
        templateUrl: "templates/ya-treeview/children.tpl.html",
        compile: function (tElement) {
            var template = tElement.clone();
            tElement.empty();
            return function (scope, iElement) {
                if (scope.node.hasChildren) {
                    iElement.append($compile(template.html())(scope));
                }
            };
        }
    };
}]).directive("yaTransclude", function () {
    return {
        restrict: "AE",
        replace: false,
        require: "^yaTreeview",
        scope: false,
        template: "",
        link: function (scope, iElement, iAttrs, treeviewCtrl) {
            treeviewCtrl.transcludeFn(scope, function (clone) {
                if (scope.node) {
                    iElement.append(clone);
                }
            });
        }
    };
});
angular.module("ya.treeview.tpls", ["templates/ya-treeview/children.tpl.html", "templates/ya-treeview/treeview.tpl.html"]);
angular.module("templates/ya-treeview/children.tpl.html", []).run(["$templateCache", function ($templateCache) {
    $templateCache.put("templates/ya-treeview/children.tpl.html", '<ul ng-hide=node.collapsed class=list-unstyled><li class=node ng-repeat="node in node.children"><div ng-show=node.hasChildren><a ng-show=node.collapsed class="btn btn-link pull-left" ng-click="expand($event, node)"><i class="glyphicon glyphicon-chevron-right"></i></a> <a ng-hide=node.collapsed class="btn btn-link pull-left" ng-click="collapse($event, node)"><i class="glyphicon glyphicon-chevron-down"></i></a></div><div class="node-content clearfix" ya-transclude ng-click="selectNode($event, node)" ng-dblclick="dblClick($event, node)"></div><div ya-node class=ya-node></div></li></ul>');
}]);
angular.module("templates/ya-treeview/treeview.tpl.html", []).run(["$templateCache", function ($templateCache) {
    $templateCache.put("templates/ya-treeview/treeview.tpl.html", "<div class=ya-treeview><div ya-node class=ya-node></div></div>");
}]);
///<reference path="AppService.ts"/>
///<reference path="Tree-UI/TreeView.ts"/>
var Playground;
(function (Playground) {
    var SyntaxTreeController = (function () {
        function SyntaxTreeController($scope, appService, csharpSyntaxService, $interval, $timeout) {
            this.$scope = $scope;
            this.appService = appService;
            this.csharpSyntaxService = csharpSyntaxService;
            this.$interval = $interval;
            this.$timeout = $timeout;
            this.isNavigatingFromTreeToSource = false;
            this.isCursorChanged = false;
            $scope.options = {
                onSelect: this.navigateToSource.bind(this),
                onExpand: this.handleNodeExpanded.bind(this)
            };
            setInterval(this.refreshTree.bind(this), 500);
            appService.onCursorChange = this.handleSourceCursorChanged.bind(this);
            this.initializeTree();
        }
        Object.defineProperty(SyntaxTreeController.prototype, "context", {
            get: function () {
                return this.$scope.context;
            },
            enumerable: true,
            configurable: true
        });
        SyntaxTreeController.prototype.initializeTree = function () {
            var tree = this.csharpSyntaxService.ParseTree($('#sourceCode').val());
            this.populateDiagnostic(tree);
            var nodes = Linq.Enumerable.ToArray(tree.GetRoot().ChildNodesAndTokens());
            this.$scope.options.initializedNodes = TreeItem.ToTreeItemArr(nodes);
        };
        SyntaxTreeController.prototype.handleSourceCursorChanged = function (position) {
            if (this.isNavigatingFromTreeToSource) {
                return;
            }
            this.lastPosition = position;
            this.isCursorChanged = true;
        };
        SyntaxTreeController.prototype.handleNodeExpanded = function ($event, virtualTreeItem, context) {
            if (virtualTreeItem.children.length > 0) {
                return;
            }
            if (virtualTreeItem.syntaxNode != null) {
                var nodes = Linq.Enumerable.ToArray(virtualTreeItem.syntaxNode.ChildNodesAndTokens());
                var virArr = TreeItem.ToTreeItemArr(nodes);
                virtualTreeItem.children = virArr;
            }
            else if (virtualTreeItem.syntaxToken != null) {
                var leadingTrivias = Linq.Enumerable.ToArray(virtualTreeItem.syntaxToken.LeadingTrivia);
                var trailingTrivias = Linq.Enumerable.ToArray(virtualTreeItem.syntaxToken.TrailingTrivia);
                var virLeading = TreeItem.ToTreeItemTriviaArr(leadingTrivias, true);
                var virTrailing = TreeItem.ToTreeItemTriviaArr(trailingTrivias, false);
                var arr = [];
                if (virtualTreeItem.syntaxToken.HasLeadingTrivia) {
                    arr = arr.concat(virLeading);
                }
                if (virtualTreeItem.syntaxToken.HasTrailingTrivia) {
                    arr = arr.concat(virTrailing);
                }
                virtualTreeItem.children = arr;
            }
            else {
                var nodeTrivia = TreeItem.ToTreeItem_Node(virtualTreeItem.syntaxTrivia.GetStructure());
                virtualTreeItem.children = [nodeTrivia];
            }
        };
        SyntaxTreeController.prototype.refreshTree = function () {
            var tree = this.csharpSyntaxService.getLastTree();
            if (this.lastTree != tree) {
                this.populateTree(tree);
                this.lastTree = tree;
                this.isCursorChanged = true;
            }
            if (this.isCursorChanged) {
                this.expandTreeToPosition(this.lastPosition);
            }
            this.isCursorChanged = false;
        };
        SyntaxTreeController.prototype.expandTreeToPosition = function (position) {
            var match = this.navigateToBestMatch(position);
            if (match == null) {
                return;
            }
            if (this.context.root.collapsed == true) {
                this.context.root.collapsed = false;
            }
            this.$scope.$apply();
            var $element = $("#" + match.id);
            if ($element.length == 0) {
                return;
            }
            var $treeContainer = $('#tree-container');
            $treeContainer.scrollTop($treeContainer.scrollTop() + $element.position().top - $treeContainer.position().top - $treeContainer.height() / 2);
        };
        SyntaxTreeController.prototype.navigateToBestMatch = function (position) {
            var match;
            if (!this.isNavigatingFromTreeToSource) {
                this.isNavigatingFromTreeToSource = true;
                try {
                    this.context.selectedNodes = [];
                    match = this.navigateToTreeItem(this.context.root, position);
                }
                finally {
                    this.isNavigatingFromTreeToSource = false;
                }
            }
            return match;
        };
        SyntaxTreeController.prototype.navigateToTreeItem = function (current, position) {
            var match = null;
            if (current == null) {
                return null;
            }
            if (current.fullSpan === void 0 || current.fullSpan.Contains_2103(position)) {
                this.context.selectedNodes.push(current);
                if (current.children) {
                    this.context.expand(null, current);
                    for (var i = 0; i < current.children.length; i++) {
                        var tempMatch = null;
                        if (match == null) {
                            tempMatch = this.navigateToTreeItem(current.children[i], position);
                        }
                        if (tempMatch != null) {
                            match = tempMatch;
                        }
                        else {
                            this.context.collapse(null, current.children[i]);
                        }
                    }
                }
                if (match == null) {
                    match = current;
                    this.context.collapse(null, current);
                }
            }
            return match;
        };
        SyntaxTreeController.prototype.populateDiagnostic = function (tree) {
            var diagnostics = tree.GetDiagnostics_4066();
            var list = System.Linq.Enumerable.ToArray(diagnostics);
            var errorStr = "";
            for (var i = 0; i < list.Count; i++) {
                var dia = list.$get$(i);
                errorStr += dia.GetMessage() + "\r\n";
                var span = dia.Location.SourceSpan;
            }
            this.appService.setErrorText(errorStr);
        };
        SyntaxTreeController.prototype.populateTree = function (tree) {
            var nodes = Linq.Enumerable.ToArray(tree.GetRoot().ChildNodesAndTokens());
            TreeItem.ModifyArray(this.context.root.children, nodes);
        };
        SyntaxTreeController.prototype.navigateToSource = function ($event, node, context) {
            context.selectedNodes = [node];
            var location;
            if (node.syntaxNode != null) {
                location = node.syntaxNode.Span;
            }
            else if (node.syntaxToken != null) {
                location = node.syntaxToken.Span;
            }
            else {
                location = node.syntaxTrivia.Span;
            }
            try {
                this.isNavigatingFromTreeToSource = true;
                this.appService.setSelection(location.Start, location.End);
            }
            finally {
                this.isNavigatingFromTreeToSource = false;
            }
        };
        return SyntaxTreeController;
    })();
    Playground.SyntaxTreeController = SyntaxTreeController;
})(Playground || (Playground = {}));
app.controller('SyntaxTreeController', ['$scope', 'appService', 'csharpSyntaxService', '$interval', '$timeout', Playground.SyntaxTreeController]);
//# sourceMappingURL=CSharpSyntaxVisualizer.js.map