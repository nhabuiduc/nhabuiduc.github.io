var AppService = (function () {
    function AppService() {
        this.sourceCodeEditor = new SourceCodeEditor();
    }
    AppService.prototype.setCodeMirror = function (codeMirror) {
        this.sourceCodeEditor.setCodeMirror(codeMirror);
    };
    AppService.prototype.getSource = function () {
        return this.sourceCodeEditor.getSource();
    };
    AppService.prototype.SetSelection = function (start, end) {
        this.onNodeSelectionChanged(start, end);
    };
    AppService.prototype.setErrorText = function (text) {
        var $errorBox = $("#errorBox");
        $errorBox.val(text);
    };
    return AppService;
})();
var app = angular.module('app', ['ya.treeview', 'ya.treeview.tpls', 'ui.codemirror']);
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
