var Playground;
(function (Playground) {
    var CodeEditorController = (function () {
        function CodeEditorController($scope, appService, csharpSyntaxService) {
            this.$scope = $scope;
            this.appService = appService;
            this.csharpSyntaxService = csharpSyntaxService;
            this.appService.onNodeSelectionChanged = this.handleNodeSelectionChanged.bind(this);
            $scope.cmOption = {
                lineNumbers: true,
                indentWithTabs: true,
                onLoad: this.handleEditorLoad.bind(this)
            };
            setInterval(this.highlightSyntax.bind(this), 1000);
        }
        CodeEditorController.prototype.highlightSyntax = function () {
        };
        CodeEditorController.prototype.handleEditorLoad = function (editor) {
            this.appService.setCodeMirror(editor);
            this.editor = editor;
            this.doc = editor.getDoc();
            editor.on("cursorActivity", this.handleEditor_cursorActivity.bind(this));
            editor.on("beforeChange", this.handleEditor_beforeChange.bind(this));
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
            this.csharpSyntaxService.AddChange(textChange);
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
