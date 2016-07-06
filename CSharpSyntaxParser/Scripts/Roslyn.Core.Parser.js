var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var CodeAnalysisResources = (function () {
            function CodeAnalysisResources() {
            }
            CodeAnalysisResources.AbsolutePathExpected = "Absolute path expected.";
            CodeAnalysisResources.ArgumentCannotBeEmpty = "Argument cannot be empty.";
            CodeAnalysisResources.ArgumentElementCannotBeNull = "Argument cannot have a null element.";
            CodeAnalysisResources.ArraysWithMoreThanOneDimensionCannotBeSerialized = "Arrays with more than one dimension cannot be serialized.";
            CodeAnalysisResources.Assembly = "assembly";
            CodeAnalysisResources.AssemblyFileNotFound = "Assembly file not found";
            CodeAnalysisResources.AssemblyMustHaveAtLeastOneModule = "Assembly must have at least one module.";
            CodeAnalysisResources.AssemblySigningNotSupported = "Assembly signing not supported.";
            CodeAnalysisResources.CannotAliasModule = "Can't alias a module.";
            CodeAnalysisResources.CannotCreateReferenceToModule = "Can't create a reference to a module.";
            CodeAnalysisResources.CannotCreateReferenceToSubmission = "Can't create a reference to a submission.";
            CodeAnalysisResources.CannotEmbedInteropTypesFromModule = "Can't embed interop types from module.";
            CodeAnalysisResources.CantCreateModuleReferenceToAssembly = "Can't create a module reference to an assembly.";
            CodeAnalysisResources.CantCreateReferenceToDynamicAssembly = "Can't create a metadata reference to a dynamic assembly.";
            CodeAnalysisResources.ChangesMustBeOrderedAndNotOverlapping = "The changes must be ordered and not overlapping.";
            CodeAnalysisResources.Class1 = "class";
            CodeAnalysisResources.CoffResourceInvalidRelocation = "Win32 resources, assumed to be in COFF object format, have one or more invalid relocation header values.";
            CodeAnalysisResources.CoffResourceInvalidSectionSize = "Win32 resources, assumed to be in COFF object format, have an invalid section size.";
            CodeAnalysisResources.CoffResourceInvalidSymbol = "Win32 resources, assumed to be in COFF object format, have one or more invalid symbol values.";
            CodeAnalysisResources.CoffResourceMissingSection = "Win32 resources, assumed to be in COFF object format, are missing one or both of sections '.rsrc$01' and '.rsrc$02'";
            CodeAnalysisResources.CompilationOptionsMustNotHaveErrors = "Compilation options must not have errors.";
            CodeAnalysisResources.CompilerAnalyzerFailure = "Compiler Analyzer Failure";
            CodeAnalysisResources.CompilerAnalyzerThrows = "The Compiler Analyzer '{0}' threw an exception with message '{1}'.";
            CodeAnalysisResources.Constructor = "constructor";
            CodeAnalysisResources.Delegate1 = "delegate";
            CodeAnalysisResources.DiagnosticIdCantBeNullOrWhitespace = "A DiagnosticDescriptor must have an Id that is neiter null nor an empty string nor a string that only contains white space.";
            CodeAnalysisResources.EmptyOrInvalidFileName = "Empty or invalid file name";
            CodeAnalysisResources.EmptyOrInvalidResourceName = "Empty or invalid resource name";
            CodeAnalysisResources.EndMustNotBeLessThanStart = "'end' must not be less than 'start'";
            CodeAnalysisResources.Enum1 = "enum";
            CodeAnalysisResources.Event1 = "event";
            CodeAnalysisResources.ExpectedNonEmptyPublicKey = "Expected non-empty public key";
            CodeAnalysisResources.FailedToResolveRuleSetName = "Could not locate the rule set file '{0}'.";
            CodeAnalysisResources.Field = "field";
            CodeAnalysisResources.FileNotFound = "File not found.";
            CodeAnalysisResources.FileSizeExceedsMaximumAllowed = "File size exceeds maximum allowed size of a valid metadata file.";
            CodeAnalysisResources.GetMetadataMustReturnInstance = "{0}.GetMetadata() must return an instance of {1}.";
            CodeAnalysisResources.IconStreamUnexpectedFormat = "Icon stream is not in the expected format.";
            CodeAnalysisResources.InMemoryAssembly = "<in-memory assembly>";
            CodeAnalysisResources.InMemoryModule = "<in-memory module>";
            CodeAnalysisResources.Interface1 = "interface";
            CodeAnalysisResources.InvalidAlias = "Invalid alias.";
            CodeAnalysisResources.InvalidAssemblyName = "Invalid assembly name: '{0}'";
            CodeAnalysisResources.InvalidCharactersInAssemblyCultureName = "Invalid characters in assembly culture name";
            CodeAnalysisResources.InvalidCharactersInAssemblyName = "Invalid characters in assembly name";
            CodeAnalysisResources.InvalidCompilationOptions = "Invalid compilation options -- submission can't be signed.";
            CodeAnalysisResources.InvalidContentType = "Invalid content type";
            CodeAnalysisResources.InvalidCultureName = "Invalid culture name: '{0}'";
            CodeAnalysisResources.InvalidHash = "Invalid hash.";
            CodeAnalysisResources.InvalidModuleName = "Invalid module name specified in metadata module '{0}': '{1}'";
            CodeAnalysisResources.InvalidOutputKindForSubmission = "Invalid output kind for submission. DynamicallyLinkedLibrary expected.";
            CodeAnalysisResources.InvalidRuleSetInclude = "An error occurred while loading the included rule set file {0} - {1}";
            CodeAnalysisResources.InvalidSizeOfPublicKeyToken = "Invalid size of public key token.";
            CodeAnalysisResources.Method = "method";
            CodeAnalysisResources.Module = "module";
            CodeAnalysisResources.ModuleCopyCannotBeUsedToCreateAssemblyMetadata = "Module copy can't be used to create an assembly metadata.";
            CodeAnalysisResources.NameCannotBeEmpty = "Name cannot be empty.";
            CodeAnalysisResources.NameCannotStartWithWhitespace = "Name cannot start with whitespace.";
            CodeAnalysisResources.NameContainsInvalidCharacter = "Name contains invalid characters.";
            CodeAnalysisResources.OutputKindNotSupported = "Output kind not supported.";
            CodeAnalysisResources.Parameter = "parameter";
            CodeAnalysisResources.PathReturnedByResolveMetadataFileMustBeAbsolute = "Path returned by {0}.ResolveMetadataFile must be absolute: '{1}'";
            CodeAnalysisResources.PathReturnedByResolveStrongNameKeyFileMustBeAbsolute = "Path returned by {0}.ResolveStrongNameKeyFile must be absolute: '{1}'";
            CodeAnalysisResources.PEImageDoesntContainManagedMetadata = "PE image doesn't contain managed metadata.";
            CodeAnalysisResources.PEImageNotAvailable = "PE image not available.";
            CodeAnalysisResources.PreviousSubmissionHasErrors = "Previous submission has errors.";
            CodeAnalysisResources.Property = "property, indexer";
            CodeAnalysisResources.ReferenceResolverShouldReturnReadableNonNullStream = "Reference resolver should return readable non-null stream.";
            CodeAnalysisResources.ResourceDataProviderShouldReturnNonNullStream = "Resource data provider should return non-null stream";
            CodeAnalysisResources.ResourceStreamProviderShouldReturnNonNullStream = "Resource stream provider should return non-null stream.";
            CodeAnalysisResources.Return1 = "return";
            CodeAnalysisResources.ReturnTypeCannotBeValuePointerbyRefOrOpen = "Return type can't be a value type, pointer, by-ref or open generic type";
            CodeAnalysisResources.ReturnTypeCannotBeVoidByRefOrOpen = "Return type can't be void, by-ref or open generic type";
            CodeAnalysisResources.RuleSetHasDuplicateRules = "The rule set file has duplicate rules for '{0}' with differing actions '{1}' and '{2}'.";
            CodeAnalysisResources.RuleSetSchemaViolation = "The file does not conform to the rule set schema - {0}";
            CodeAnalysisResources.SeverityError = "error";
            CodeAnalysisResources.SeverityHidden = "hidden";
            CodeAnalysisResources.SeverityInfo = "info";
            CodeAnalysisResources.SeverityWarning = "warning";
            CodeAnalysisResources.SizeHasToBePositive = "Size has to be positive.";
            CodeAnalysisResources.SpanDoesNotIncludeEndOfLine = "Then span does not include the end of a line.";
            CodeAnalysisResources.SpanDoesNotIncludeStartOfLine = "The span does not include the start of a line.";
            CodeAnalysisResources.StartMustNotBeNegative = "'start' must not be negative";
            CodeAnalysisResources.StreamMustSupportReadAndSeek = "Stream must support read and seek operations.";
            CodeAnalysisResources.Struct1 = "struct";
            CodeAnalysisResources.TypeMustBeASubclassOfSyntaxAnnotation = "type must be a subclass of SyntaxAnnotation.";
            CodeAnalysisResources.TypeMustBeSameAsHostObjectTypeOfPreviousSubmission = "Type must be same as host object type of previous submission.";
            CodeAnalysisResources.TypeParameter = "type parameter";
            CodeAnalysisResources.Unresolved = "Unresolved:";
            CodeAnalysisResources.UnsupportedHashAlgorithm = "Unsupported hash algorithm.";
            CodeAnalysisResources.ValueTooLargeToBeRepresented = "Value too large to be represented as a 30 bit unsigned integer.";
            CodeAnalysisResources.WinRTIdentityCantBeRetargetable = "WindowsRuntime identity can't be retargetable";
            CodeAnalysisResources.XmlReferencesNotSupported = "References to XML documents are not supported.";
            return CodeAnalysisResources;
        })();
        CodeAnalysis.CodeAnalysisResources = CodeAnalysisResources;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var ObjectPool = (function () {
            function ObjectPool() {
            }
            ObjectPool.prototype.ctor_3306 = function (factory) {
                this.ctor_5203(factory, System.Environment.ProcessorCount * 2);
                return this;
            };
            ObjectPool.prototype.ctor_5203 = function (factory, size) {
                System.Diagnostics.Debug.Assert(size >= 1);
                this.factory = factory;
                this.items = new Array(size - 1);
                return this;
            };
            ObjectPool.prototype.CreateInstance = function () {
                var inst = this.factory();
                return inst;
            };
            ObjectPool.prototype.Allocate = function () {
                var inst = this.firstItem;
                if (inst == null) {
                    inst = this.AllocateSlow();
                }
                else {
                    this.firstItem = null;
                }
                return inst;
            };
            ObjectPool.prototype.AllocateSlow = function () {
                var items = this.items;
                var inst = null;
                for (var i = 0; i < items.length; i++) {
                    inst = items[i];
                    if (inst != null) {
                        items[i] = null;
                        return inst;
                    }
                }
                return this.CreateInstance();
            };
            ObjectPool.prototype.Free = function (obj) {
                this.Validate(obj);
                this.ForgetTrackedObject(obj);
                if (this.firstItem == null) {
                    this.firstItem = obj;
                }
                else {
                    this.FreeSlow(obj);
                }
            };
            ObjectPool.prototype.FreeSlow = function (obj) {
                var items = this.items;
                for (var i = 0; i < items.length; i++) {
                    if (items[i] == null) {
                        items[i] = obj;
                        break;
                    }
                }
            };
            ObjectPool.prototype.ForgetTrackedObject = function (old, replacement) {
                if (replacement === void 0) { replacement = null; }
            };
            ObjectPool.prototype.Validate = function (obj) {
                System.Diagnostics.Debug.Assert(obj != null, "freeing null?");
                var items = this.items;
                for (var i = 0; i < items.length; i++) {
                    var value = items[i];
                    if (value == null) {
                        return;
                    }
                    System.Diagnostics.Debug.Assert(value != obj, "freeing twice?");
                }
            };
            return ObjectPool;
        })();
        Utilities.ObjectPool = ObjectPool;
        var ObjectPool;
        (function (ObjectPool) {
            var Element = (function () {
                function Element() {
                    this.Value = null;
                }
                return Element;
            })();
            ObjectPool.Element = Element;
        })(ObjectPool = Utilities.ObjectPool || (Utilities.ObjectPool = {}));
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var ArrayBuilder = (function () {
            function ArrayBuilder() {
            }
            ArrayBuilder.prototype.ctor_1158 = function (size) {
                this.builder = System.Collections.Immutable.ImmutableArray.CreateBuilder(size);
                return this;
            };
            ArrayBuilder.prototype.ctor_2019 = function () {
                this.ctor_1158(8);
                return this;
            };
            ArrayBuilder.prototype.ctor_1444 = function (pool) {
                this.ctor_2019();
                this.pool = pool;
                return this;
            };
            ArrayBuilder.prototype.ToImmutable = function () {
                return this.builder.ToImmutable();
            };
            Object.defineProperty(ArrayBuilder.prototype, "Count", {
                get: function () {
                    return this.builder.Count;
                },
                enumerable: true,
                configurable: true
            });
            ArrayBuilder.prototype.$get$ = function (index) {
                return this.builder.$get$(index);
            };
            ArrayBuilder.prototype.$set$ = function (index, value) {
                this.builder.$set$(index, value);
            };
            ArrayBuilder.prototype.Add = function (item) {
                this.builder.Add(item);
            };
            ArrayBuilder.prototype.Insert = function (index, item) {
                this.builder.Insert(index, item);
            };
            ArrayBuilder.prototype.EnsureCapacity = function (capacity) {
                this.builder.EnsureCapacity(capacity);
            };
            ArrayBuilder.prototype.Clear = function () {
                this.builder.Clear();
            };
            ArrayBuilder.prototype.Contains = function (item) {
                return this.builder.Contains(item);
            };
            ArrayBuilder.prototype.RemoveAt = function (index) {
                this.builder.RemoveAt(index);
            };
            ArrayBuilder.prototype.RemoveLast = function () {
                this.builder.RemoveAt(this.builder.Count - 1);
            };
            ArrayBuilder.prototype.ToArray = function () {
                return this.builder.ToArray();
            };
            ArrayBuilder.prototype.Last = function () {
                return this.builder.$get$(this.builder.Count - 1);
            };
            ArrayBuilder.prototype.First = function () {
                return this.builder.$get$(0);
            };
            ArrayBuilder.prototype.Any = function () {
                return this.builder.Count > 0;
            };
            ArrayBuilder.prototype.ToImmutableOrNull = function () {
                if (this.Count == 0) {
                    return null;
                }
                return this.ToImmutable();
            };
            ArrayBuilder.prototype.ToDowncastedImmutable = function () {
                if (this.Count == 0) {
                    return System.Collections.Immutable.ImmutableArray.Empty;
                }
                var tmp = ArrayBuilder.GetInstance_9802(this.Count);
                var iEnumerator = this.GetEnumerator();
                try {
                    while (iEnumerator.MoveNext()) {
                        var i = iEnumerator.Current;
                        tmp.Add(i);
                    }
                }
                finally {
                    if (iEnumerator !== null && iEnumerator.Dispose !== void 0)
                        iEnumerator.Dispose();
                }
                return tmp.ToImmutableAndFree();
            };
            ArrayBuilder.prototype.ToImmutableAndFree = function () {
                var result = this.ToImmutable();
                this.Free();
                return result;
            };
            ArrayBuilder.prototype.ToArrayAndFree = function () {
                var result = this.ToArray();
                this.Free();
                return result;
            };
            ArrayBuilder.prototype.Free = function () {
                var pool = this.pool;
                if (pool != null) {
                    if (this.Count < 128) {
                        if (this.Count != 0) {
                            this.Clear();
                        }
                        pool.Free(this);
                        return;
                    }
                    else {
                        pool.ForgetTrackedObject(this);
                    }
                }
            };
            ArrayBuilder.GetInstance_1997 = function () {
                var builder = ArrayBuilder.PoolInstance.Allocate();
                System.Diagnostics.Debug.Assert(builder.Count == 0);
                return builder;
            };
            ArrayBuilder.GetInstance_9802 = function (capacity) {
                var builder = ArrayBuilder.GetInstance_1997();
                builder.EnsureCapacity(capacity);
                return builder;
            };
            ArrayBuilder.GetInstance_7127 = function (capacity, fillWithValue) {
                var builder = ArrayBuilder.GetInstance_1997();
                builder.EnsureCapacity(capacity);
                for (var i = 0; i < capacity; i++) {
                    builder.Add(fillWithValue);
                }
                return builder;
            };
            ArrayBuilder.CreatePool_2004 = function () {
                return ArrayBuilder.CreatePool_7738(128);
            };
            ArrayBuilder.CreatePool_7738 = function (size) {
                var pool = null;
                pool = new Roslyn.Utilities.ObjectPool().ctor_5203(function () { return new ArrayBuilder().ctor_1444(pool); }, size);
                return pool;
            };
            ArrayBuilder.prototype.GetEnumerator = function () {
                return new ArrayBuilder.Enumerator().ctor_9504(this);
            };
            ArrayBuilder.prototype.AddRange_1909 = function (items) {
                this.builder.AddRange(items);
            };
            ArrayBuilder.prototype.AddRange_2893 = function (items, length) {
                this.builder.AddRange(items, length);
            };
            ArrayBuilder.prototype.AddRange_6776 = function (items) {
                this.builder.AddRange(items);
            };
            ArrayBuilder.prototype.AddRange_1179 = function () {
                var items = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    items[_i - 0] = arguments[_i];
                }
                this.builder.AddRange(items);
            };
            ArrayBuilder.prototype.AddRange_1745 = function (items, length) {
                this.builder.AddRange(items, length);
            };
            ArrayBuilder.prototype.Clip = function (limit) {
                System.Diagnostics.Debug.Assert(limit <= this.Count);
                this.builder.Count = limit;
            };
            ArrayBuilder.prototype.ZeroInit = function (count) {
                this.builder.Clear();
                this.builder.Count = count;
            };
            ArrayBuilder.prototype.AddMany = function (item, count) {
                for (var i = 0; i < count; i++) {
                    this.Add(item);
                }
            };
            ArrayBuilder.PoolInstance = ArrayBuilder.CreatePool_2004();
            return ArrayBuilder;
        })();
        CodeAnalysis.ArrayBuilder = ArrayBuilder;
        var ArrayBuilder;
        (function (ArrayBuilder) {
            var DebuggerProxy = (function () {
                function DebuggerProxy() {
                    this.builder = null;
                }
                DebuggerProxy.prototype.ctor_1459 = function (builder) {
                    this.builder = builder;
                    return this;
                };
                Object.defineProperty(DebuggerProxy.prototype, "A", {
                    get: function () {
                        var result = new Array(this.builder.Count);
                        for (var i = 0; i < result.length; i++) {
                            result[i] = this.builder.$get$(i);
                        }
                        return result;
                    },
                    enumerable: true,
                    configurable: true
                });
                return DebuggerProxy;
            })();
            ArrayBuilder.DebuggerProxy = DebuggerProxy;
            var Enumerator = (function () {
                function Enumerator() {
                    this.builder = null;
                    this.index = 0;
                }
                Enumerator.prototype.ctor_9504 = function (builder) {
                    this.builder = builder;
                    this.index = -1;
                    return this;
                };
                Object.defineProperty(Enumerator.prototype, "Current", {
                    get: function () {
                        return this.builder.$get$(this.index);
                    },
                    enumerable: true,
                    configurable: true
                });
                Enumerator.prototype.MoveNext = function () {
                    this.index++;
                    return this.index < this.builder.Count;
                };
                Enumerator.prototype.Dispose = function () {
                };
                Enumerator.prototype.Reset = function () {
                    this.index = -1;
                };
                return Enumerator;
            })();
            ArrayBuilder.Enumerator = Enumerator;
        })(ArrayBuilder = CodeAnalysis.ArrayBuilder || (CodeAnalysis.ArrayBuilder = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var ArrayBuilderExtensions = (function () {
            function ArrayBuilderExtensions() {
            }
            ArrayBuilderExtensions.Any = function (builder, predicate) {
                var itemEnumerator = builder.GetEnumerator();
                try {
                    while (itemEnumerator.MoveNext()) {
                        var item = itemEnumerator.Current;
                        if (predicate(item)) {
                            return true;
                        }
                    }
                }
                finally {
                    if (itemEnumerator !== null && itemEnumerator.Dispose !== void 0)
                        itemEnumerator.Dispose();
                }
                return false;
            };
            ArrayBuilderExtensions.All = function (builder, predicate) {
                var itemEnumerator = builder.GetEnumerator();
                try {
                    while (itemEnumerator.MoveNext()) {
                        var item = itemEnumerator.Current;
                        if (!predicate(item)) {
                            return false;
                        }
                    }
                }
                finally {
                    if (itemEnumerator !== null && itemEnumerator.Dispose !== void 0)
                        itemEnumerator.Dispose();
                }
                return true;
            };
            ArrayBuilderExtensions.SelectAsArray_1569 = function (items, map) {
                switch (items.Count) {
                    case 0:
                        return System.Collections.Immutable.ImmutableArray.Empty;
                    case 1:
                        return System.Collections.Immutable.ImmutableArray.Create_overload0(map(items.$get$(0)));
                    case 2:
                        return System.Collections.Immutable.ImmutableArray.Create_overload1(map(items.$get$(0)), map(items.$get$(1)));
                    case 3:
                        return System.Collections.Immutable.ImmutableArray.Create_overload2(map(items.$get$(0)), map(items.$get$(1)), map(items.$get$(2)));
                    case 4:
                        return System.Collections.Immutable.ImmutableArray.Create_overload3(map(items.$get$(0)), map(items.$get$(1)), map(items.$get$(2)), map(items.$get$(3)));
                    default:
                        var builder = CodeAnalysis.ArrayBuilder.GetInstance_9802(items.Count);
                        var itemEnumerator = items.GetEnumerator();
                        try {
                            while (itemEnumerator.MoveNext()) {
                                var item = itemEnumerator.Current;
                                builder.Add(map(item));
                            }
                        }
                        finally {
                            if (itemEnumerator !== null && itemEnumerator.Dispose !== void 0)
                                itemEnumerator.Dispose();
                        }
                        return builder.ToImmutableAndFree();
                }
            };
            ArrayBuilderExtensions.SelectAsArray_3004 = function (items, map, arg) {
                switch (items.Count) {
                    case 0:
                        return System.Collections.Immutable.ImmutableArray.Empty;
                    case 1:
                        return System.Collections.Immutable.ImmutableArray.Create_overload0(map(items.$get$(0), arg));
                    case 2:
                        return System.Collections.Immutable.ImmutableArray.Create_overload1(map(items.$get$(0), arg), map(items.$get$(1), arg));
                    case 3:
                        return System.Collections.Immutable.ImmutableArray.Create_overload2(map(items.$get$(0), arg), map(items.$get$(1), arg), map(items.$get$(2), arg));
                    case 4:
                        return System.Collections.Immutable.ImmutableArray.Create_overload3(map(items.$get$(0), arg), map(items.$get$(1), arg), map(items.$get$(2), arg), map(items.$get$(3), arg));
                    default:
                        var builder = CodeAnalysis.ArrayBuilder.GetInstance_9802(items.Count);
                        var itemEnumerator = items.GetEnumerator();
                        try {
                            while (itemEnumerator.MoveNext()) {
                                var item = itemEnumerator.Current;
                                builder.Add(map(item, arg));
                            }
                        }
                        finally {
                            if (itemEnumerator !== null && itemEnumerator.Dispose !== void 0)
                                itemEnumerator.Dispose();
                        }
                        return builder.ToImmutableAndFree();
                }
            };
            ArrayBuilderExtensions.AddOptional = function (builder, item) {
                if (item != null) {
                    builder.Add(item);
                }
            };
            ArrayBuilderExtensions.Push = function (builder, e) {
                builder.Add(e);
            };
            ArrayBuilderExtensions.Pop = function (builder) {
                var e = ArrayBuilderExtensions.Peek(builder);
                builder.RemoveAt(builder.Count - 1);
                return e;
            };
            ArrayBuilderExtensions.Peek = function (builder) {
                return builder.$get$(builder.Count - 1);
            };
            return ArrayBuilderExtensions;
        })();
        CodeAnalysis.ArrayBuilderExtensions = ArrayBuilderExtensions;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var ArrayElement = (function () {
            function ArrayElement() {
            }
            ArrayElement.MakeElementArray = function (items) {
                if (items == null) {
                    return null;
                }
                var array = new Array(items.length);
                for (var i = 0; i < items.length; i++) {
                    array[i].Value = items[i];
                }
                return array;
            };
            ArrayElement.MakeArray = function (items) {
                if (items == null) {
                    return null;
                }
                var array = new Array(items.length);
                for (var i = 0; i < items.length; i++) {
                    array[i] = items[i].Value;
                }
                return array;
            };
            return ArrayElement;
        })();
        CodeAnalysis.ArrayElement = ArrayElement;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var CachingBase = (function () {
            function CachingBase() {
                this.mask = 0;
                this.entries = null;
            }
            CachingBase.prototype.ctor_1934 = function (size) {
                var alignedSize = CachingBase.AlignSize(size);
                this.mask = alignedSize - 1;
                this.entries = new Array(alignedSize);
                return this;
            };
            CachingBase.AlignSize = function (size) {
                System.Diagnostics.Debug.Assert(size > 0);
                size--;
                size |= size >> 1;
                size |= size >> 2;
                size |= size >> 4;
                size |= size >> 8;
                size |= size >> 16;
                return size + 1;
            };
            return CachingBase;
        })();
        CodeAnalysis.CachingBase = CachingBase;
        var CachingFactory = (function (_super) {
            __extends(CachingFactory, _super);
            function CachingFactory() {
                _super.call(this);
                this.size = 0;
            }
            CachingFactory.prototype.ctor_1794 = function (size, valueFactory, keyHash, keyValueEquality) {
                _super.prototype.ctor_1934.call(this, size);
                InitArray(CachingFactory.Entry, this.entries);
                this.size = size;
                this.valueFactory = valueFactory;
                this.keyHash = keyHash;
                this.keyValueEquality = keyValueEquality;
                return this;
            };
            CachingFactory.prototype.Add = function (key, value) {
                var hash = this.GetKeyHash(key);
                var idx = hash & this.mask;
                this.entries[idx].hash = hash;
                this.entries[idx].value = value;
            };
            CachingFactory.prototype.TryGetValue = function (key, value) {
                var hash = this.GetKeyHash(key);
                var idx = hash & this.mask;
                var entries = this.entries;
                if (entries[idx].hash == hash) {
                    var candidate = entries[idx].value;
                    if (this.keyValueEquality(key, candidate)) {
                        value.refObj = candidate;
                        return true;
                    }
                }
                value.refObj = null;
                return false;
            };
            CachingFactory.prototype.GetOrMakeValue = function (key) {
                var hash = this.GetKeyHash(key);
                var idx = hash & this.mask;
                var entries = this.entries;
                if (entries[idx].hash == hash) {
                    var candidate = entries[idx].value;
                    if (this.keyValueEquality(key, candidate)) {
                        return candidate;
                    }
                }
                var value = this.valueFactory(key);
                entries[idx].hash = hash;
                entries[idx].value = value;
                return value;
            };
            CachingFactory.prototype.GetKeyHash = function (key) {
                var result = this.keyHash(key) | this.size;
                System.Diagnostics.Debug.Assert(result != 0);
                return result;
            };
            return CachingFactory;
        })(CachingBase);
        CodeAnalysis.CachingFactory = CachingFactory;
        var CachingIdentityFactory = (function (_super) {
            __extends(CachingIdentityFactory, _super);
            function CachingIdentityFactory() {
                _super.call(this);
            }
            CachingIdentityFactory.prototype.ctor_1901 = function (size, valueFactory) {
                _super.prototype.ctor_1934.call(this, size);
                InitArray(CachingIdentityFactory.Entry, this.entries);
                this.valueFactory = valueFactory;
                return this;
            };
            CachingIdentityFactory.prototype.ctor_3951 = function (size, valueFactory, pool) {
                this.ctor_1901(size, valueFactory);
                InitArray(CachingIdentityFactory.Entry, this.entries);
                this.pool = pool;
                return this;
            };
            CachingIdentityFactory.prototype.Add = function (key, value) {
                var hash = System.Runtime.CompilerServices.RuntimeHelpers.GetHashCode(key);
                var idx = hash & this.mask;
                this.entries[idx].key = key;
                this.entries[idx].value = value;
            };
            CachingIdentityFactory.prototype.TryGetValue = function (key, value) {
                var hash = System.Runtime.CompilerServices.RuntimeHelpers.GetHashCode(key);
                var idx = hash & this.mask;
                var entries = this.entries;
                if (entries[idx].key == key) {
                    value.refObj = entries[idx].value;
                    return true;
                }
                value.refObj = null;
                return false;
            };
            CachingIdentityFactory.prototype.GetOrMakeValue = function (key) {
                var hash = System.Runtime.CompilerServices.RuntimeHelpers.GetHashCode(key);
                var idx = hash & this.mask;
                var entries = this.entries;
                if (entries[idx].key == key) {
                    return entries[idx].value;
                }
                var value = this.valueFactory(key);
                entries[idx].key = key;
                entries[idx].value = value;
                return value;
            };
            CachingIdentityFactory.CreatePool = function (size, valueFactory) {
                var pool = null;
                pool = new Roslyn.Utilities.ObjectPool().ctor_5203(function () { return new CachingIdentityFactory().ctor_3951(size, valueFactory, pool); }, System.Environment.ProcessorCount * 2);
                return pool;
            };
            CachingIdentityFactory.prototype.Free = function () {
                var pool = this.pool;
                if (pool != null) {
                    pool.Free(this);
                }
            };
            return CachingIdentityFactory;
        })(CachingBase);
        CodeAnalysis.CachingIdentityFactory = CachingIdentityFactory;
        var CachingFactory;
        (function (CachingFactory) {
            var Entry = (function () {
                function Entry() {
                    this.hash = 0;
                    this.value = null;
                }
                return Entry;
            })();
            CachingFactory.Entry = Entry;
        })(CachingFactory = CodeAnalysis.CachingFactory || (CodeAnalysis.CachingFactory = {}));
        var CachingIdentityFactory;
        (function (CachingIdentityFactory) {
            var Entry = (function () {
                function Entry() {
                    this.key = null;
                    this.value = null;
                }
                return Entry;
            })();
            CachingIdentityFactory.Entry = Entry;
        })(CachingIdentityFactory = CodeAnalysis.CachingIdentityFactory || (CodeAnalysis.CachingIdentityFactory = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var ImmutableArrayExtensions = (function () {
            function ImmutableArrayExtensions() {
            }
            ImmutableArrayExtensions.AsImmutable_7446 = function (items) {
                return System.Collections.Immutable.ImmutableArray.CreateRange(items);
            };
            ImmutableArrayExtensions.AsImmutableOrEmpty_1620 = function (items) {
                if (items == null) {
                    return System.Collections.Immutable.ImmutableArray.Empty;
                }
                return System.Collections.Immutable.ImmutableArray.CreateRange(items);
            };
            ImmutableArrayExtensions.AsImmutableOrNull_2024 = function (items) {
                if (items == null) {
                    return structDefault(System.Collections.Immutable.ImmutableArray);
                }
                return System.Collections.Immutable.ImmutableArray.CreateRange(items);
            };
            ImmutableArrayExtensions.AsImmutable_1998 = function (items) {
                System.Diagnostics.Debug.Assert(items != null);
                return System.Collections.Immutable.ImmutableArray.Create(items);
            };
            ImmutableArrayExtensions.AsImmutableOrNull_9386 = function (items) {
                if (items == null) {
                    return structDefault(System.Collections.Immutable.ImmutableArray);
                }
                return System.Collections.Immutable.ImmutableArray.Create(items);
            };
            ImmutableArrayExtensions.AsImmutableOrEmpty_1316 = function (items) {
                if (items == null) {
                    return System.Collections.Immutable.ImmutableArray.Empty;
                }
                return System.Collections.Immutable.ImmutableArray.Create(items);
            };
            ImmutableArrayExtensions.SelectAsArray_1026 = function (items, map, arg) {
                switch (items.Length) {
                    case 0:
                        return System.Collections.Immutable.ImmutableArray.Empty;
                    case 1:
                        return System.Collections.Immutable.ImmutableArray.Create(map(items.$get$(0), 0, arg));
                    case 2:
                        return System.Collections.Immutable.ImmutableArray.Create(map(items.$get$(0), 0, arg), map(items.$get$(1), 1, arg));
                    case 3:
                        return System.Collections.Immutable.ImmutableArray.Create(map(items.$get$(0), 0, arg), map(items.$get$(1), 1, arg), map(items.$get$(2), 2, arg));
                    case 4:
                        return System.Collections.Immutable.ImmutableArray.Create(map(items.$get$(0), 0, arg), map(items.$get$(1), 1, arg), map(items.$get$(2), 2, arg), map(items.$get$(3), 3, arg));
                    default:
                        var builder = CodeAnalysis.ArrayBuilder.GetInstance_9802(items.Length);
                        for (var i = 0; i < items.Length; i++) {
                            builder.Add(map(items.$get$(i), i, arg));
                        }
                        return builder.ToImmutableAndFree();
                }
            };
            ImmutableArrayExtensions.WhereAsArray = function (array, predicate) {
                System.Diagnostics.Debug.Assert(!array.IsDefault);
                var builder = null;
                var none = true;
                var all = true;
                var n = array.Length;
                for (var i = 0; i < n; i++) {
                    var a = array.$get$(i);
                    if (predicate(a)) {
                        none = false;
                        if (all) {
                            continue;
                        }
                        System.Diagnostics.Debug.Assert(i > 0);
                        if (builder == null) {
                            builder = CodeAnalysis.ArrayBuilder.GetInstance_1997();
                        }
                        builder.Add(a);
                    }
                    else {
                        if (none) {
                            all = false;
                            continue;
                        }
                        System.Diagnostics.Debug.Assert(i > 0);
                        if (all) {
                            System.Diagnostics.Debug.Assert(builder == null);
                            all = false;
                            builder = CodeAnalysis.ArrayBuilder.GetInstance_1997();
                            for (var j = 0; j < i; j++) {
                                builder.Add(array.$get$(j));
                            }
                        }
                    }
                }
                if (builder != null) {
                    System.Diagnostics.Debug.Assert(!all);
                    System.Diagnostics.Debug.Assert(!none);
                    return builder.ToImmutableAndFree();
                }
                else if (all) {
                    return array;
                }
                else {
                    System.Diagnostics.Debug.Assert(none);
                    return System.Collections.Immutable.ImmutableArray.Empty;
                }
            };
            ImmutableArrayExtensions.NullToEmpty = function (array) {
                return array.IsDefault ? System.Collections.Immutable.ImmutableArray.Empty : array;
            };
            ImmutableArrayExtensions.HasAnyErrors = function (diagnostics) {
                var diagnosticEnumerator = diagnostics.GetEnumerator();
                try {
                    while (diagnosticEnumerator.MoveNext()) {
                        var diagnostic = diagnosticEnumerator.Current;
                        if (diagnostic.Severity == 3 /* Error */) {
                            return true;
                        }
                    }
                }
                finally {
                    if (diagnosticEnumerator !== null && diagnosticEnumerator.Dispose !== void 0)
                        diagnosticEnumerator.Dispose();
                }
                return false;
            };
            return ImmutableArrayExtensions;
        })();
        CodeAnalysis.ImmutableArrayExtensions = ImmutableArrayExtensions;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Collections;
        (function (Collections) {
            var PooledStringBuilder = (function () {
                function PooledStringBuilder() {
                    this.Builder = new System.Text.StringBuilder();
                }
                PooledStringBuilder.prototype.ctor_1297 = function (pool) {
                    System.Diagnostics.Debug.Assert(pool != null);
                    this.pool = pool;
                    return this;
                };
                Object.defineProperty(PooledStringBuilder.prototype, "Length", {
                    get: function () {
                        return this.Builder.Length;
                    },
                    enumerable: true,
                    configurable: true
                });
                PooledStringBuilder.prototype.Free = function () {
                    var builder = this.Builder;
                    if (builder.Capacity <= 1024) {
                        builder.Clear();
                        this.pool.Free(this);
                    }
                    else {
                        this.pool.ForgetTrackedObject(this);
                    }
                };
                PooledStringBuilder.prototype.ToString = function () {
                    return this.Builder.ToString();
                };
                PooledStringBuilder.prototype.ToStringAndFree_3093 = function () {
                    var result = this.Builder.ToString();
                    this.Free();
                    return result;
                };
                PooledStringBuilder.prototype.ToStringAndFree_5388 = function (startIndex, length) {
                    var result = this.Builder.ToString(startIndex, length);
                    this.Free();
                    return result;
                };
                PooledStringBuilder.CreatePool = function () {
                    var pool = null;
                    pool = new Roslyn.Utilities.ObjectPool().ctor_5203(function () { return new PooledStringBuilder().ctor_1297(pool); }, 32);
                    return pool;
                };
                PooledStringBuilder.GetInstance = function () {
                    var builder = PooledStringBuilder.PoolInstance.Allocate();
                    System.Diagnostics.Debug.Assert(builder.Builder.Length == 0);
                    return builder;
                };
                PooledStringBuilder.op_Implicit_1714 = function (obj) {
                    return obj.Builder;
                };
                PooledStringBuilder.PoolInstance = PooledStringBuilder.CreatePool();
                return PooledStringBuilder;
            })();
            Collections.PooledStringBuilder = PooledStringBuilder;
        })(Collections = CodeAnalysis.Collections || (CodeAnalysis.Collections = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var ParseOptions = (function () {
            function ParseOptions() {
                this.Kind = 0;
                this.DocumentationMode = 0;
            }
            ParseOptions.prototype.ctor_2205 = function (kind, documentationMode) {
                this.Kind = kind;
                this.DocumentationMode = documentationMode;
                return this;
            };
            ParseOptions.prototype.WithKind = function (kind) {
                return this.CommonWithKind(kind);
            };
            ParseOptions.prototype.CommonWithKind = function (kind) {
                throw new Error('not implemented');
            };
            ParseOptions.prototype.WithDocumentationMode = function (documentationMode) {
                return this.CommonWithDocumentationMode(documentationMode);
            };
            ParseOptions.prototype.CommonWithDocumentationMode = function (documentationMode) {
                throw new Error('not implemented');
            };
            ParseOptions.prototype.WithFeatures = function (features) {
                return this.CommonWithFeatures(features);
            };
            ParseOptions.prototype.CommonWithFeatures = function (features) {
                throw new Error('not implemented');
            };
            ParseOptions.prototype.Equals = function (obj) {
                throw new Error('not implemented');
            };
            ParseOptions.prototype.EqualsHelper = function (other) {
                if (ReferenceEquals(other, null)) {
                    return false;
                }
                return this.Kind == other.Kind && this.DocumentationMode == other.DocumentationMode && System.Linq.Enumerable.SequenceEqual(this.Features, other.Features) && (this.PreprocessorSymbolNames == null ? other.PreprocessorSymbolNames == null : System.Linq.Enumerable.SequenceEqual(this.PreprocessorSymbolNames, other.PreprocessorSymbolNames, System.StringComparer.Ordinal));
            };
            ParseOptions.prototype.GetHashCode = function () {
                throw new Error('not implemented');
            };
            ParseOptions.prototype.GetHashCodeHelper = function () {
                return Roslyn.Utilities.Hash.Combine_1641(this.Kind, Roslyn.Utilities.Hash.Combine_1641(this.DocumentationMode, Roslyn.Utilities.Hash.Combine_1641(this.HashFeatures(this.Features), Roslyn.Utilities.Hash.Combine_1641(Roslyn.Utilities.Hash.CombineValues_1752(this.PreprocessorSymbolNames, System.StringComparer.Ordinal), 0))));
            };
            ParseOptions.prototype.HashFeatures = function (features) {
                var value = 0;
                var kvEnumerator = features.GetEnumerator();
                try {
                    while (kvEnumerator.MoveNext()) {
                        var kv = kvEnumerator.Current;
                        value = Roslyn.Utilities.Hash.Combine_1641(kv.Key.GetHashCode(), Roslyn.Utilities.Hash.Combine_1641(kv.Value.GetHashCode(), value));
                    }
                }
                finally {
                    if (kvEnumerator !== null)
                        kvEnumerator.Dispose();
                }
                return value;
            };
            ParseOptions.prototype.op_Equality = function (right) {
                var left = this;
                return left == right;
            };
            ParseOptions.prototype.op_Inequality = function (right) {
                var left = this;
                return left != right;
            };
            return ParseOptions;
        })();
        CodeAnalysis.ParseOptions = ParseOptions;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var SourceReferenceResolver = (function () {
            function SourceReferenceResolver() {
            }
            SourceReferenceResolver.prototype.Equals = function (other) {
                throw new Error('not implemented');
            };
            SourceReferenceResolver.prototype.GetHashCode = function () {
                throw new Error('not implemented');
            };
            SourceReferenceResolver.prototype.NormalizePath = function (path, baseFilePath) {
                throw new Error('not implemented');
            };
            SourceReferenceResolver.prototype.ResolveReference = function (path, baseFilePath) {
                throw new Error('not implemented');
            };
            SourceReferenceResolver.prototype.OpenRead = function (resolvedPath) {
                throw new Error('not implemented');
            };
            SourceReferenceResolver.prototype.OpenReadChecked = function (fullPath) {
                var stream = this.OpenRead(fullPath);
                if (stream == null || !stream.CanRead) {
                    throw new System.InvalidOperationException(CodeAnalysis.CodeAnalysisResources.ReferenceResolverShouldReturnReadableNonNullStream);
                }
                return stream;
            };
            return SourceReferenceResolver;
        })();
        CodeAnalysis.SourceReferenceResolver = SourceReferenceResolver;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var CryptographicHashProvider = (function () {
            function CryptographicHashProvider() {
            }
            CryptographicHashProvider.GetHashSize = function (algorithmId) {
                switch (algorithmId) {
                    case 1 /* Sha1 */:
                        return (160 / 8 | 0);
                    case 2 /* Sha256 */:
                        return (256 / 8 | 0);
                    default:
                        throw Roslyn.Utilities.ExceptionUtilities.UnexpectedValue(algorithmId);
                }
            };
            CryptographicHashProvider.Sha1HashSize = 20;
            return CryptographicHashProvider;
        })();
        CodeAnalysis.CryptographicHashProvider = CryptographicHashProvider;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var CommonDiagnosticComparer = (function () {
            function CommonDiagnosticComparer() {
            }
            CommonDiagnosticComparer.prototype.Equals = function (x, y) {
                if (ReferenceEquals(x, y)) {
                    return true;
                }
                if (x == null || y == null) {
                    return false;
                }
                return x.Location.op_Equality(y.Location) && x.Id == y.Id;
            };
            CommonDiagnosticComparer.prototype.GetHashCode = function (obj) {
                if (ReferenceEquals(obj, null)) {
                    return 0;
                }
                return Roslyn.Utilities.Hash.Combine_7656(obj.Location, obj.Id.GetHashCode());
            };
            return CommonDiagnosticComparer;
        })();
        CodeAnalysis.CommonDiagnosticComparer = CommonDiagnosticComparer;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var CommonMessageProvider = (function () {
            function CommonMessageProvider() {
            }
            CommonMessageProvider.prototype.GetSeverity = function (code) {
                throw new Error('not implemented');
            };
            CommonMessageProvider.prototype.LoadMessage = function (code, language) {
                throw new Error('not implemented');
            };
            CommonMessageProvider.prototype.GetTitle = function (code) {
                throw new Error('not implemented');
            };
            CommonMessageProvider.prototype.GetDescription = function (code) {
                throw new Error('not implemented');
            };
            CommonMessageProvider.prototype.GetMessageFormat = function (code) {
                throw new Error('not implemented');
            };
            CommonMessageProvider.prototype.GetHelpLink = function (code) {
                throw new Error('not implemented');
            };
            CommonMessageProvider.prototype.GetCategory = function (code) {
                throw new Error('not implemented');
            };
            CommonMessageProvider.prototype.GetWarningLevel = function (code) {
                throw new Error('not implemented');
            };
            CommonMessageProvider.prototype.GetMessagePrefix = function (id, severity, isWarningAsError, culture) {
                throw new Error('not implemented');
            };
            CommonMessageProvider.prototype.GetIdForErrorCode = function (errorCode) {
                return this.CodePrefix + errorCode.ToString("0000");
            };
            return CommonMessageProvider;
        })();
        CodeAnalysis.CommonMessageProvider = CommonMessageProvider;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Diagnostic = (function () {
            function Diagnostic() {
            }
            Diagnostic.Create_2896 = function (descriptor, location) {
                var messageArgs = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    messageArgs[_i - 2] = arguments[_i];
                }
                return Diagnostic.Create_1146(descriptor, location, null, messageArgs);
            };
            Diagnostic.Create_1146 = function (descriptor, location, additionalLocations) {
                var messageArgs = [];
                for (var _i = 3; _i < arguments.length; _i++) {
                    messageArgs[_i - 3] = arguments[_i];
                }
                if (descriptor == null) {
                    throw new System.ArgumentNullException("descriptor");
                }
                var warningLevel = Diagnostic.GetDefaultWarningLevel(descriptor.DefaultSeverity);
                return Diagnostic.SimpleDiagnostic.Create_1471(descriptor, descriptor.DefaultSeverity, warningLevel, location != null ? location : CodeAnalysis.Location.None, additionalLocations, messageArgs);
            };
            Diagnostic.Create_1175 = function (id, category, message, severity, defaultSeverity, isEnabledByDefault, warningLevel, title, description, helpLink, location, additionalLocations, customTags) {
                if (title === void 0) { title = null; }
                if (description === void 0) { description = null; }
                if (helpLink === void 0) { helpLink = null; }
                if (location === void 0) { location = null; }
                if (additionalLocations === void 0) { additionalLocations = null; }
                if (customTags === void 0) { customTags = null; }
                if (id == null) {
                    throw new System.ArgumentNullException("id");
                }
                if (category == null) {
                    throw new System.ArgumentNullException("category");
                }
                if (message == null) {
                    throw new System.ArgumentNullException("message");
                }
                return Diagnostic.SimpleDiagnostic.Create_3980(id, title != null ? title : CodeAnalysis.LocalizableString.op_Implicit_1404(System.String.Empty), category, message, description != null ? description : CodeAnalysis.LocalizableString.op_Implicit_1404(System.String.Empty), helpLink != null ? helpLink : System.String.Empty, severity, defaultSeverity, isEnabledByDefault, warningLevel, location != null ? location : CodeAnalysis.Location.None, additionalLocations, customTags);
            };
            Diagnostic.Create_2350 = function (messageProvider, errorCode) {
                return Diagnostic.Create_1806(new CodeAnalysis.DiagnosticInfo().ctor_9510(messageProvider, errorCode));
            };
            Diagnostic.Create_1351 = function (messageProvider, errorCode) {
                var argumentsRest = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    argumentsRest[_i - 2] = arguments[_i];
                }
                return Diagnostic.Create_1806(new CodeAnalysis.DiagnosticInfo().ctor_4145(messageProvider, errorCode, argumentsRest));
            };
            Diagnostic.Create_1806 = function (info) {
                return new CodeAnalysis.DiagnosticWithInfo().ctor_3747(info, CodeAnalysis.Location.None);
            };
            Object.defineProperty(Diagnostic.prototype, "Category", {
                get: function () {
                    return this.Descriptor.Category;
                },
                enumerable: true,
                configurable: true
            });
            Diagnostic.prototype.GetMessage = function (formatProvider) {
                if (formatProvider === void 0) { formatProvider = null; }
                throw new Error('not implemented');
            };
            Object.defineProperty(Diagnostic.prototype, "DefaultSeverity", {
                get: function () {
                    return this.Descriptor.DefaultSeverity;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Diagnostic.prototype, "IsEnabledByDefault", {
                get: function () {
                    return this.Descriptor.IsEnabledByDefault;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Diagnostic.prototype, "IsWarningAsError", {
                get: function () {
                    return this.DefaultSeverity == 2 /* Warning */ && this.Severity == 3 /* Error */;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Diagnostic.prototype, "CustomTags", {
                get: function () {
                    return this.Descriptor.CustomTags;
                },
                enumerable: true,
                configurable: true
            });
            Diagnostic.prototype.ToString = function (ignored, formatProvider) {
                if (formatProvider === void 0) {
                    formatProvider = System.Globalization.CultureInfo.CurrentUICulture;
                }
                return CodeAnalysis.DiagnosticFormatter.Instance.Format(this, formatProvider);
            };
            Diagnostic.prototype.Equals = function (obj) {
                throw new Error('not implemented');
            };
            Diagnostic.prototype.GetHashCode = function () {
                throw new Error('not implemented');
            };
            Diagnostic.prototype.Equals_8787 = function (obj) {
                throw new Error('not implemented');
            };
            Diagnostic.prototype.WithLocation = function (location) {
                throw new Error('not implemented');
            };
            Diagnostic.prototype.WithSeverity = function (severity) {
                throw new Error('not implemented');
            };
            Object.defineProperty(Diagnostic.prototype, "Code", {
                get: function () {
                    return 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Diagnostic.prototype, "Arguments", {
                get: function () {
                    return Roslyn.Utilities.SpecializedCollections.EmptyReadOnlyList();
                },
                enumerable: true,
                configurable: true
            });
            Diagnostic.prototype.ContainsLocation = function (tree, filterSpanWithinTree) {
                if (filterSpanWithinTree === void 0) { filterSpanWithinTree = null; }
                var locations = this.GetDiagnosticLocationsWithinTree(tree);
                var locationEnumerator = locations.GetEnumerator();
                while (locationEnumerator.MoveNext()) {
                    var location = locationEnumerator.Current;
                    if (filterSpanWithinTree == null || filterSpanWithinTree.Contains_1915(location.SourceSpan)) {
                        return true;
                    }
                }
                return false;
            };
            Diagnostic.prototype.GetDiagnosticLocationsWithinTree = function (tree) {
                var __result = new Array();
                if (this.Location.SourceTree == tree) {
                    __result.push(this.Location);
                }
                if (this.AdditionalLocations != null) {
                    var additionalLocationEnumerator = this.AdditionalLocations.GetEnumerator();
                    while (additionalLocationEnumerator.MoveNext()) {
                        var additionalLocation = additionalLocationEnumerator.Current;
                        if (additionalLocation.SourceTree == tree) {
                            __result.push(additionalLocation);
                        }
                    }
                }
                return __result;
            };
            Diagnostic.prototype.WithReportDiagnostic = function (reportAction) {
                switch (reportAction) {
                    case 5 /* Suppress */:
                        return null;
                    case 1 /* Error */:
                        return this.WithSeverity(3 /* Error */);
                    case 0 /* Default */:
                        return this;
                    case 2 /* Warn */:
                        return this.WithSeverity(2 /* Warning */);
                    case 3 /* Info */:
                        return this.WithSeverity(1 /* Info */);
                    case 4 /* Hidden */:
                        return this.WithSeverity(0 /* Hidden */);
                    default:
                        throw Roslyn.Utilities.ExceptionUtilities.UnexpectedValue(reportAction);
                }
            };
            Diagnostic.GetDefaultWarningLevel = function (severity) {
                switch (severity) {
                    case 3 /* Error */:
                        return 0;
                    case 2 /* Warning */:
                        return 1;
                    default:
                        return Diagnostic.HighestValidWarningLevel;
                }
            };
            Diagnostic.prototype.IsNotConfigurable = function () {
                return CodeAnalysis.DiagnosticDescriptor.IsNotConfigurable_2122(this.CustomTags);
            };
            Diagnostic.CompilerDiagnosticCategory = "Compiler";
            Diagnostic.HighestValidWarningLevel = 4;
            return Diagnostic;
        })();
        CodeAnalysis.Diagnostic = Diagnostic;
        var Diagnostic;
        (function (Diagnostic) {
            var SimpleDiagnostic = (function (_super) {
                __extends(SimpleDiagnostic, _super);
                function SimpleDiagnostic() {
                    _super.call(this);
                    this.severity = 0;
                    this.warningLevel = 0;
                }
                SimpleDiagnostic.prototype.ctor_1463 = function (descriptor, severity, warningLevel, location, additionalLocations, messageArgs) {
                    if ((warningLevel == 0 && severity != 3 /* Error */) || (warningLevel != 0 && severity == 3 /* Error */)) {
                        throw new System.ArgumentException("warningLevel");
                    }
                    this.descriptor = descriptor;
                    this.severity = severity;
                    this.warningLevel = warningLevel;
                    this.location = location;
                    this.additionalLocations = additionalLocations == null ? Roslyn.Utilities.SpecializedCollections.EmptyReadOnlyList() : System.Collections.Immutable.ImmutableArray.ToImmutableArray(additionalLocations);
                    this.messageArgs = messageArgs != null ? messageArgs : Roslyn.Utilities.SpecializedCollections.EmptyArray();
                    return this;
                };
                SimpleDiagnostic.Create_1471 = function (descriptor, severity, warningLevel, location, additionalLocations, messageArgs) {
                    return new SimpleDiagnostic().ctor_1463(descriptor, severity, warningLevel, location, additionalLocations, messageArgs);
                };
                SimpleDiagnostic.Create_3980 = function (id, title, category, message, description, helpLink, severity, defaultSeverity, isEnabledByDefault, warningLevel, location, additionalLocations, customTags) {
                    var descriptor = new CodeAnalysis.DiagnosticDescriptor().ctor_3991(id, title, message, category, defaultSeverity, isEnabledByDefault, description, helpLink, Roslyn.Utilities.ImmutableArrayExtensions.ToImmutableArrayOrEmpty_1553(customTags));
                    return new SimpleDiagnostic().ctor_1463(descriptor, severity, warningLevel, location, additionalLocations, null);
                };
                Object.defineProperty(SimpleDiagnostic.prototype, "Descriptor", {
                    get: function () {
                        return this.descriptor;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SimpleDiagnostic.prototype, "Id", {
                    get: function () {
                        return this.descriptor.Id;
                    },
                    enumerable: true,
                    configurable: true
                });
                SimpleDiagnostic.prototype.GetMessage = function (formatProvider) {
                    if (formatProvider === void 0) { formatProvider = null; }
                    if (this.messageArgs.length == 0) {
                        return this.descriptor.MessageFormat.ToString_1106(formatProvider);
                    }
                    var localizedMessageFormat = this.descriptor.MessageFormat.ToString_1106(formatProvider);
                    return System.String.Format(formatProvider, localizedMessageFormat, this.messageArgs);
                };
                Object.defineProperty(SimpleDiagnostic.prototype, "Arguments", {
                    get: function () {
                        return this.messageArgs;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SimpleDiagnostic.prototype, "Severity", {
                    get: function () {
                        return this.severity;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SimpleDiagnostic.prototype, "WarningLevel", {
                    get: function () {
                        return this.warningLevel;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SimpleDiagnostic.prototype, "Location", {
                    get: function () {
                        return this.location;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SimpleDiagnostic.prototype, "AdditionalLocations", {
                    get: function () {
                        return this.additionalLocations;
                    },
                    enumerable: true,
                    configurable: true
                });
                SimpleDiagnostic.prototype.Equals_8787 = function (obj) {
                    var other = __as__(obj, SimpleDiagnostic);
                    return other != null && this.descriptor == other.descriptor && Roslyn.Utilities.EnumerableExtensions.SequenceEqual(this.messageArgs, other.messageArgs, function (a, b) { return a == b; }) && this.location.op_Equality(other.location) && this.severity == other.severity && this.warningLevel == other.warningLevel;
                };
                SimpleDiagnostic.prototype.Equals = function (obj) {
                    return this.Equals_8787(__as__(obj, Diagnostic));
                };
                SimpleDiagnostic.prototype.GetHashCode = function () {
                    return Roslyn.Utilities.Hash.Combine_7656(this.descriptor, Roslyn.Utilities.Hash.Combine_1641(this.messageArgs.GetHashCode(), Roslyn.Utilities.Hash.Combine_1641(this.location.GetHashCode(), Roslyn.Utilities.Hash.Combine_1641(this.severity.GetHashCode(), this.warningLevel))));
                };
                SimpleDiagnostic.prototype.WithLocation = function (location) {
                    if (location == null) {
                        throw new System.ArgumentNullException("location");
                    }
                    if (location.op_Inequality(this.location)) {
                        return new SimpleDiagnostic().ctor_1463(this.descriptor, this.severity, this.warningLevel, location, this.additionalLocations, this.messageArgs);
                    }
                    return this;
                };
                SimpleDiagnostic.prototype.WithSeverity = function (severity) {
                    if (this.Severity != severity) {
                        var warningLevel = SimpleDiagnostic.GetDefaultWarningLevel(severity);
                        return new SimpleDiagnostic().ctor_1463(this.descriptor, severity, warningLevel, this.location, this.additionalLocations, this.messageArgs);
                    }
                    return this;
                };
                return SimpleDiagnostic;
            })(Diagnostic);
            Diagnostic.SimpleDiagnostic = SimpleDiagnostic;
        })(Diagnostic = CodeAnalysis.Diagnostic || (CodeAnalysis.Diagnostic = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var DiagnosticBag = (function () {
            function DiagnosticBag() {
                this.lazyBag = null;
            }
            Object.defineProperty(DiagnosticBag.prototype, "IsEmptyWithoutResolution", {
                get: function () {
                    var bag = this.lazyBag;
                    return bag == null || bag.IsEmpty;
                },
                enumerable: true,
                configurable: true
            });
            DiagnosticBag.prototype.HasAnyErrors = function () {
                if (this.IsEmptyWithoutResolution) {
                    return false;
                }
                var diagnosticEnumerator = this.Bag.GetEnumerator();
                while (diagnosticEnumerator.MoveNext()) {
                    var diagnostic = diagnosticEnumerator.Current;
                    if (diagnostic.Severity == 3 /* Error */) {
                        return true;
                    }
                }
                return false;
            };
            DiagnosticBag.prototype.Add = function (diag) {
                var bag = this.Bag;
                bag.Enqueue(diag);
            };
            DiagnosticBag.prototype.AddRange_8543 = function (diagnostics) {
                if (!diagnostics.IsDefaultOrEmpty) {
                    var bag = this.Bag;
                    for (var i = 0; i < diagnostics.Length; i++) {
                        bag.Enqueue(diagnostics.$get$(i));
                    }
                }
            };
            DiagnosticBag.prototype.AddRange_1233 = function (diagnostics) {
                var diagnosticEnumerator = diagnostics.GetEnumerator();
                while (diagnosticEnumerator.MoveNext()) {
                    var diagnostic = diagnosticEnumerator.Current;
                    this.Bag.Enqueue(diagnostic);
                }
            };
            DiagnosticBag.prototype.AddRange_7045 = function (bag) {
                if (!bag.IsEmptyWithoutResolution) {
                    this.AddRange_1233(bag.Bag);
                }
            };
            DiagnosticBag.prototype.AddRangeAndFree = function (bag) {
                this.AddRange_7045(bag);
                bag.Free();
            };
            DiagnosticBag.prototype.ToReadOnlyAndFree_8611 = function () {
                var oldBag = this.lazyBag;
                this.Free();
                return DiagnosticBag.ToReadOnlyCore(oldBag);
            };
            DiagnosticBag.prototype.ToReadOnlyAndFree_9919 = function () {
                return this.ToReadOnlyAndFree_8611();
            };
            DiagnosticBag.prototype.ToReadOnly_6177 = function () {
                var oldBag = this.lazyBag;
                return DiagnosticBag.ToReadOnlyCore(oldBag);
            };
            DiagnosticBag.prototype.ToReadOnly_8964 = function () {
                return this.ToReadOnly_6177();
            };
            DiagnosticBag.ToReadOnlyCore = function (oldBag) {
                if (oldBag == null) {
                    return System.Collections.Immutable.ImmutableArray.Empty;
                }
                var builder = CodeAnalysis.ArrayBuilder.GetInstance_1997();
                var diagnosticEnumerator = oldBag.GetEnumerator();
                while (diagnosticEnumerator.MoveNext()) {
                    var diagnostic = diagnosticEnumerator.Current;
                    if (diagnostic.Severity != CodeAnalysis.InternalDiagnosticSeverity.Void) {
                        System.Diagnostics.Debug.Assert(diagnostic.Severity != CodeAnalysis.InternalDiagnosticSeverity.Unknown);
                        builder.Add(diagnostic);
                    }
                }
                return builder.ToImmutableAndFree();
            };
            DiagnosticBag.prototype.AsEnumerable = function () {
                var bag = this.Bag;
                var foundVoid = false;
                var diagnosticEnumerator = bag.GetEnumerator();
                while (diagnosticEnumerator.MoveNext()) {
                    var diagnostic = diagnosticEnumerator.Current;
                    if (diagnostic.Severity == CodeAnalysis.InternalDiagnosticSeverity.Void) {
                        foundVoid = true;
                        break;
                    }
                }
                return foundVoid ? this.AsEnumerableFiltered() : bag;
            };
            DiagnosticBag.prototype.AsEnumerableFiltered = function () {
                var __result = new Array();
                var diagnosticEnumerator = this.Bag.GetEnumerator();
                while (diagnosticEnumerator.MoveNext()) {
                    var diagnostic = diagnosticEnumerator.Current;
                    if (diagnostic.Severity != CodeAnalysis.InternalDiagnosticSeverity.Void) {
                        System.Diagnostics.Debug.Assert(diagnostic.Severity != CodeAnalysis.InternalDiagnosticSeverity.Unknown);
                        __result.push(diagnostic);
                    }
                }
                return __result;
            };
            DiagnosticBag.prototype.AsEnumerableWithoutResolution = function () {
                return this.lazyBag != null ? this.lazyBag : Roslyn.Utilities.SpecializedCollections.EmptyEnumerable();
            };
            DiagnosticBag.prototype.ToString = function () {
                if (this.IsEmptyWithoutResolution) {
                    return "<no errors>";
                }
                else {
                    var builder = new System.Text.StringBuilder();
                    var diagEnumerator = this.Bag.GetEnumerator();
                    while (diagEnumerator.MoveNext()) {
                        var diag = diagEnumerator.Current;
                        builder.AppendLine(diag.ToString());
                    }
                    return builder.ToString();
                }
            };
            Object.defineProperty(DiagnosticBag.prototype, "Bag", {
                get: function () {
                    var bag = this.lazyBag;
                    if (bag != null) {
                        return bag;
                    }
                    var newBag = new System.Collections.Concurrent.ConcurrentQueue();
                    this.lazyBag = newBag;
                    return newBag;
                },
                enumerable: true,
                configurable: true
            });
            DiagnosticBag.prototype.Clear = function () {
                var bag = this.lazyBag;
                if (bag != null) {
                    this.lazyBag = null;
                }
            };
            DiagnosticBag.GetInstance = function () {
                var bag = DiagnosticBag.poolInstance.Allocate();
                return bag;
            };
            DiagnosticBag.prototype.Free = function () {
                this.Clear();
                DiagnosticBag.poolInstance.Free(this);
            };
            DiagnosticBag.CreatePool = function (size) {
                return new Roslyn.Utilities.ObjectPool().ctor_5203(function () { return new DiagnosticBag(); }, size);
            };
            DiagnosticBag.prototype.GetDebuggerDisplay = function () {
                var lazyBag = this.lazyBag;
                return "Count = " + (lazyBag != null ? lazyBag.Count : 0);
            };
            DiagnosticBag.poolInstance = DiagnosticBag.CreatePool(128);
            return DiagnosticBag;
        })();
        CodeAnalysis.DiagnosticBag = DiagnosticBag;
        var DiagnosticBag;
        (function (DiagnosticBag) {
            var DebuggerProxy = (function () {
                function DebuggerProxy() {
                }
                DebuggerProxy.prototype.ctor_2011 = function (bag) {
                    this.bag = bag;
                    return this;
                };
                Object.defineProperty(DebuggerProxy.prototype, "Diagnostics", {
                    get: function () {
                        var lazyBag = this.bag.lazyBag;
                        if (lazyBag != null) {
                            return lazyBag.ToArray();
                        }
                        else {
                            return Roslyn.Utilities.SpecializedCollections.EmptyObjects;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                return DebuggerProxy;
            })();
            DiagnosticBag.DebuggerProxy = DebuggerProxy;
        })(DiagnosticBag = CodeAnalysis.DiagnosticBag || (CodeAnalysis.DiagnosticBag = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var DiagnosticDescriptor = (function () {
            function DiagnosticDescriptor() {
                this.DefaultSeverity = 0;
                this.IsEnabledByDefault = false;
            }
            DiagnosticDescriptor.prototype.ctor_1011 = function (id, title, messageFormat, category, defaultSeverity, isEnabledByDefault, description, helpLink) {
                if (description === void 0) { description = null; }
                if (helpLink === void 0) { helpLink = null; }
                var customTags = [];
                for (var _i = 8; _i < arguments.length; _i++) {
                    customTags[_i - 8] = arguments[_i];
                }
                this.ctor_3991(id, CodeAnalysis.LocalizableString.op_Implicit_1404(title), CodeAnalysis.LocalizableString.op_Implicit_1404(messageFormat), category, defaultSeverity, isEnabledByDefault, CodeAnalysis.LocalizableString.op_Implicit_1404(description), helpLink, CodeAnalysis.ImmutableArrayExtensions.AsImmutableOrEmpty_1316(customTags));
                return this;
            };
            DiagnosticDescriptor.prototype.ctor_1931 = function (id, title, messageFormat, category, defaultSeverity, isEnabledByDefault, description, helpLink) {
                if (description === void 0) { description = null; }
                if (helpLink === void 0) { helpLink = null; }
                var customTags = [];
                for (var _i = 8; _i < arguments.length; _i++) {
                    customTags[_i - 8] = arguments[_i];
                }
                this.ctor_3991(id, title, messageFormat, category, defaultSeverity, isEnabledByDefault, description, helpLink, CodeAnalysis.ImmutableArrayExtensions.AsImmutableOrEmpty_1316(customTags));
                return this;
            };
            DiagnosticDescriptor.prototype.ctor_3991 = function (id, title, messageFormat, category, defaultSeverity, isEnabledByDefault, description, helpLink, customTags) {
                if (System.String.IsNullOrWhiteSpace(id)) {
                    throw new System.ArgumentException(CodeAnalysis.CodeAnalysisResources.DiagnosticIdCantBeNullOrWhitespace, 'id');
                }
                if (messageFormat == null) {
                    throw new System.ArgumentNullException('messageFormat');
                }
                if (category == null) {
                    throw new System.ArgumentNullException('category');
                }
                if (title == null) {
                    throw new System.ArgumentNullException('title');
                }
                this.Id = id;
                this.Title = title;
                this.Category = category;
                this.MessageFormat = messageFormat;
                this.DefaultSeverity = defaultSeverity;
                this.IsEnabledByDefault = isEnabledByDefault;
                this.Description = description != null ? description : CodeAnalysis.LocalizableString.op_Implicit_1404(System.String.Empty);
                this.HelpLink = helpLink != null ? helpLink : System.String.Empty;
                this.CustomTags = CodeAnalysis.ImmutableArrayExtensions.AsImmutableOrEmpty_1620(customTags);
                return this;
            };
            DiagnosticDescriptor.prototype.Equals = function (obj) {
                var other = __as__(obj, DiagnosticDescriptor);
                return other != null && this.Category == other.Category && this.DefaultSeverity == other.DefaultSeverity && this.Description == other.Description && this.HelpLink == other.HelpLink && this.Id == other.Id && this.IsEnabledByDefault == other.IsEnabledByDefault && this.MessageFormat == other.MessageFormat && this.Title == other.Title;
            };
            DiagnosticDescriptor.prototype.GetHashCode = function () {
                return Roslyn.Utilities.Hash.Combine_1641(this.Category.GetHashCode(), Roslyn.Utilities.Hash.Combine_1641(this.DefaultSeverity.GetHashCode(), Roslyn.Utilities.Hash.Combine_1641(this.Description.GetHashCode(), Roslyn.Utilities.Hash.Combine_1641(this.HelpLink.GetHashCode(), Roslyn.Utilities.Hash.Combine_1641(this.Id.GetHashCode(), Roslyn.Utilities.Hash.Combine_1641(this.IsEnabledByDefault.GetHashCode(), Roslyn.Utilities.Hash.Combine_1641(this.MessageFormat.GetHashCode(), this.Title.GetHashCode())))))));
            };
            DiagnosticDescriptor.prototype.IsNotConfigurable_1344 = function () {
                return DiagnosticDescriptor.IsNotConfigurable_2122(this.CustomTags);
            };
            DiagnosticDescriptor.IsNotConfigurable_2122 = function (customTags) {
                var customTagEnumerator = customTags.GetEnumerator();
                while (customTagEnumerator.MoveNext()) {
                    var customTag = customTagEnumerator.Current;
                    if (customTag == CodeAnalysis.WellKnownDiagnosticTags.NotConfigurable) {
                        return true;
                    }
                }
                return false;
            };
            return DiagnosticDescriptor;
        })();
        CodeAnalysis.DiagnosticDescriptor = DiagnosticDescriptor;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var DiagnosticFormatter = (function () {
            function DiagnosticFormatter() {
            }
            DiagnosticFormatter.prototype.Format = function (diagnostic, formatter) {
                if (formatter === void 0) { formatter = null; }
                if (diagnostic == null) {
                    throw new System.ArgumentNullException("diagnostic");
                }
                var culture = __as__(formatter, System.Globalization.CultureInfo);
                var __tSwitch67 = diagnostic.Location.Kind;
                while (true) {
                    var __tDefault98 = false;
                    switch (__tSwitch67) {
                        case 1 /* SourceFile */:
                        case 3 /* XmlFile */:
                        case 4 /* ExternalFile */:
                            var span = diagnostic.Location.GetLineSpan();
                            var mappedSpan = diagnostic.Location.GetMappedLineSpan();
                            if (!span.IsValid || !mappedSpan.IsValid) {
                                __tDefault98 = true;
                                break;
                            }
                            var path, basePath;
                            if (mappedSpan.HasMappedPath) {
                                path = mappedSpan.Path;
                                basePath = span.Path;
                            }
                            else {
                                path = span.Path;
                                basePath = null;
                            }
                            return System.String.Format(formatter, "{0}{1}: {2}: {3}", this.FormatSourcePath(path, basePath, formatter), this.FormatSourceSpan(mappedSpan.Span, formatter), this.GetMessagePrefix(diagnostic, culture), diagnostic.GetMessage(culture));
                        default:
                            return System.String.Format(formatter, "{0}: {1}", this.GetMessagePrefix(diagnostic, culture), diagnostic.GetMessage(culture));
                    }
                    if (__tDefault98) {
                        return System.String.Format(formatter, "{0}: {1}", this.GetMessagePrefix(diagnostic, culture), diagnostic.GetMessage(culture));
                    }
                    break;
                }
            };
            DiagnosticFormatter.prototype.FormatSourcePath = function (path, basePath, formatter) {
                return path;
            };
            DiagnosticFormatter.prototype.FormatSourceSpan = function (span, formatter) {
                return System.String.Format("({0},{1})", span.Start.Line + 1, span.Start.Character + 1);
            };
            DiagnosticFormatter.prototype.GetMessagePrefix = function (diagnostic, culture) {
                var prefix;
                switch (diagnostic.Severity) {
                    case 0 /* Hidden */:
                        prefix = CodeAnalysis.CodeAnalysisResources.SeverityHidden;
                        break;
                    case 1 /* Info */:
                        prefix = CodeAnalysis.CodeAnalysisResources.SeverityInfo;
                        break;
                    case 2 /* Warning */:
                        prefix = CodeAnalysis.CodeAnalysisResources.SeverityWarning;
                        break;
                    case 3 /* Error */:
                        prefix = CodeAnalysis.CodeAnalysisResources.SeverityError;
                        break;
                    default:
                        throw Roslyn.Utilities.ExceptionUtilities.UnexpectedValue(diagnostic.Severity);
                }
                return System.String.Format(culture, "{0} {1}", prefix, diagnostic.Id);
            };
            DiagnosticFormatter.Instance = new DiagnosticFormatter();
            return DiagnosticFormatter;
        })();
        CodeAnalysis.DiagnosticFormatter = DiagnosticFormatter;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var WellKnownDiagnosticTags = (function () {
            function WellKnownDiagnosticTags() {
            }
            WellKnownDiagnosticTags.Unnecessary = "Unnecessary";
            WellKnownDiagnosticTags.EditAndContinue = "EditAndContinue";
            WellKnownDiagnosticTags.Build = "Build";
            WellKnownDiagnosticTags.Telemetry = "Telemetry";
            WellKnownDiagnosticTags.NotConfigurable = "NotConfigurable";
            WellKnownDiagnosticTags.AnalyzerException = "AnalyzerException";
            return WellKnownDiagnosticTags;
        })();
        CodeAnalysis.WellKnownDiagnosticTags = WellKnownDiagnosticTags;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var DiagnosticInfo = (function () {
            function DiagnosticInfo() {
                this.errorCode = 0;
                this.defaultSeverity = 0;
                this.effectiveSeverity = 0;
            }
            DiagnosticInfo.prototype.ctor_9510 = function (messageProvider, errorCode) {
                this.messageProvider = messageProvider;
                this.errorCode = errorCode;
                this.defaultSeverity = messageProvider.GetSeverity(errorCode);
                this.effectiveSeverity = this.defaultSeverity;
                return this;
            };
            DiagnosticInfo.prototype.ctor_4145 = function (messageProvider, errorCode) {
                var argumentsRest = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    argumentsRest[_i - 2] = arguments[_i];
                }
                this.ctor_9510(messageProvider, errorCode);
                DiagnosticInfo.AssertMessageSerializable(argumentsRest);
                this.arguments = argumentsRest;
                return this;
            };
            DiagnosticInfo.prototype.ctor_1200 = function (original, overridenSeverity) {
                this.messageProvider = original.MessageProvider;
                this.errorCode = original.errorCode;
                this.defaultSeverity = original.DefaultSeverity;
                this.arguments = original.arguments;
                this.effectiveSeverity = overridenSeverity;
                return this;
            };
            DiagnosticInfo.GetDescriptor = function (errorCode, messageProvider) {
                var defaultSeverity = messageProvider.GetSeverity(errorCode);
                return DiagnosticInfo.GetOrCreateDescriptor(errorCode, defaultSeverity, messageProvider);
            };
            DiagnosticInfo.GetOrCreateDescriptor = function (errorCode, defaultSeverity, messageProvider) {
                var value = { refObj: null };
                if (DiagnosticInfo.errorCodeToDescriptorMap.TryGetValue(errorCode, value)) {
                    return value.refObj;
                }
                value.refObj = DiagnosticInfo.CreateDescriptor(errorCode, defaultSeverity, messageProvider);
                DiagnosticInfo.errorCodeToDescriptorMap.SetItem(errorCode, value.refObj);
                return value.refObj;
            };
            DiagnosticInfo.CreateDescriptor = function (errorCode, defaultSeverity, messageProvider) {
                var id = messageProvider.GetIdForErrorCode(errorCode);
                var title = messageProvider.GetTitle(errorCode);
                var description = messageProvider.GetDescription(errorCode);
                var messageFormat = messageProvider.GetMessageFormat(errorCode);
                var helpLink = messageProvider.GetHelpLink(errorCode);
                var category = messageProvider.GetCategory(errorCode);
                var customTags = DiagnosticInfo.GetCustomTags(defaultSeverity);
                return new CodeAnalysis.DiagnosticDescriptor().ctor_3991(id, title, messageFormat, category, defaultSeverity, true, description, helpLink, customTags);
            };
            DiagnosticInfo.AssertMessageSerializable = function (args) {
                var argEnumerator = args.GetEnumerator();
                while (argEnumerator.MoveNext()) {
                    var arg = argEnumerator.Current;
                    System.Diagnostics.Debug.Assert(arg != null);
                }
            };
            DiagnosticInfo.prototype.ctor_6897 = function (messageProvider, isWarningAsError, errorCode) {
                var argumentsRest = [];
                for (var _i = 3; _i < arguments.length; _i++) {
                    argumentsRest[_i - 3] = arguments[_i];
                }
                this.ctor_4145(messageProvider, errorCode, argumentsRest);
                System.Diagnostics.Debug.Assert(!isWarningAsError || this.defaultSeverity == 2 /* Warning */);
                if (isWarningAsError) {
                    this.effectiveSeverity = 3 /* Error */;
                }
                return this;
            };
            DiagnosticInfo.prototype.GetInstanceWithSeverity = function (severity) {
                return new DiagnosticInfo().ctor_1200(this, severity);
            };
            DiagnosticInfo.prototype.WriteTo = function (writer) {
                writer.WriteValue(this.messageProvider);
                writer.WriteCompressedUInt(this.errorCode);
                writer.WriteInt32(this.effectiveSeverity);
                writer.WriteInt32(this.defaultSeverity);
                var count = (this.arguments != null) ? this.arguments.length : 0;
                writer.WriteCompressedUInt(count);
                if (count > 0) {
                    var argEnumerator = this.arguments.GetEnumerator();
                    while (argEnumerator.MoveNext()) {
                        var arg = argEnumerator.Current;
                        writer.WriteString(__ToString(arg));
                    }
                }
            };
            DiagnosticInfo.prototype.GetReader = function () {
                return function (r) { return new DiagnosticInfo().ctor_1156(r); };
            };
            DiagnosticInfo.prototype.ctor_1156 = function (reader) {
                this.messageProvider = reader.ReadValue();
                this.errorCode = reader.ReadCompressedUInt();
                this.effectiveSeverity = reader.ReadInt32();
                this.defaultSeverity = reader.ReadInt32();
                var count = reader.ReadCompressedUInt();
                if (count == 0) {
                    this.arguments = Roslyn.Utilities.SpecializedCollections.EmptyObjects;
                }
                else if (count > 0) {
                    this.arguments = new Array(count);
                    for (var i = 0; i < count; i++) {
                        this.arguments[i] = reader.ReadString_7160();
                    }
                }
                return this;
            };
            Object.defineProperty(DiagnosticInfo.prototype, "Code", {
                get: function () {
                    return this.errorCode;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DiagnosticInfo.prototype, "Descriptor", {
                get: function () {
                    return DiagnosticInfo.GetOrCreateDescriptor(this.errorCode, this.defaultSeverity, this.messageProvider);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DiagnosticInfo.prototype, "Severity", {
                get: function () {
                    return this.effectiveSeverity;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DiagnosticInfo.prototype, "DefaultSeverity", {
                get: function () {
                    return this.defaultSeverity;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DiagnosticInfo.prototype, "WarningLevel", {
                get: function () {
                    if (this.effectiveSeverity != this.defaultSeverity) {
                        return CodeAnalysis.Diagnostic.GetDefaultWarningLevel(this.effectiveSeverity);
                    }
                    return this.messageProvider.GetWarningLevel(this.errorCode);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DiagnosticInfo.prototype, "IsWarningAsError", {
                get: function () {
                    return this.DefaultSeverity == 2 /* Warning */ && this.Severity == 3 /* Error */;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DiagnosticInfo.prototype, "Category", {
                get: function () {
                    return this.messageProvider.GetCategory(this.errorCode);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DiagnosticInfo.prototype, "CustomTags", {
                get: function () {
                    return DiagnosticInfo.GetCustomTags(this.defaultSeverity);
                },
                enumerable: true,
                configurable: true
            });
            DiagnosticInfo.GetCustomTags = function (defaultSeverity) {
                return defaultSeverity == 3 /* Error */ ? DiagnosticInfo.CompilerErrorCustomTags : DiagnosticInfo.CompilerNonErrorCustomTags;
            };
            DiagnosticInfo.prototype.IsNotConfigurable = function () {
                return this.defaultSeverity == 3 /* Error */;
            };
            Object.defineProperty(DiagnosticInfo.prototype, "AdditionalLocations", {
                get: function () {
                    return Roslyn.Utilities.SpecializedCollections.EmptyReadOnlyList();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DiagnosticInfo.prototype, "MessageIdentifier", {
                get: function () {
                    return this.messageProvider.GetIdForErrorCode(this.errorCode);
                },
                enumerable: true,
                configurable: true
            });
            DiagnosticInfo.prototype.GetMessage = function (formatProvider) {
                if (formatProvider === void 0) { formatProvider = null; }
                var culture = __as__(formatProvider, System.Globalization.CultureInfo);
                if (culture == null) {
                    culture = System.Globalization.CultureInfo.InvariantCulture;
                }
                var message = this.messageProvider.LoadMessage(this.errorCode, culture);
                if (System.String.IsNullOrEmpty(message)) {
                    return System.String.Empty;
                }
                if (this.arguments == null || this.arguments.length == 0) {
                    return message;
                }
                return System.String.Format(formatProvider, message, this.GetArgumentsToUse(culture));
            };
            DiagnosticInfo.prototype.GetArgumentsToUse = function (culture) {
                var argumentsToUse = null;
                for (var i = 0; i < this.arguments.length; i++) {
                    var embedded = __as__(this.arguments[i], DiagnosticInfo);
                    if (embedded != null) {
                        argumentsToUse = this.InitializeArgumentListIfNeeded(argumentsToUse);
                        argumentsToUse[i] = embedded.GetMessage(culture);
                        continue;
                    }
                }
                return argumentsToUse != null ? argumentsToUse : this.arguments;
            };
            DiagnosticInfo.prototype.InitializeArgumentListIfNeeded = function (argumentsToUse) {
                if (argumentsToUse != null) {
                    return argumentsToUse;
                }
                var newArguments = new Array(this.arguments.length);
                TSArray.Copy(this.arguments, newArguments, newArguments.length);
                return newArguments;
            };
            Object.defineProperty(DiagnosticInfo.prototype, "Arguments", {
                get: function () {
                    return this.arguments;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DiagnosticInfo.prototype, "MessageProvider", {
                get: function () {
                    return this.messageProvider;
                },
                enumerable: true,
                configurable: true
            });
            DiagnosticInfo.prototype.ToString_1106 = function (formatProvider) {
                return this.ToString(null, formatProvider);
            };
            DiagnosticInfo.prototype.ToString = function (format, formatProvider) {
                return System.String.Format(formatProvider, "{0}: {1}", this.messageProvider.GetMessagePrefix(this.MessageIdentifier, this.Severity, this.IsWarningAsError, __as__(formatProvider, System.Globalization.CultureInfo)), this.GetMessage(formatProvider));
            };
            DiagnosticInfo.prototype.GetHashCode = function () {
                var hashCode = this.errorCode;
                if (this.arguments != null) {
                    for (var i = 0; i < this.arguments.length; i++) {
                        hashCode = Roslyn.Utilities.Hash.Combine_7656(this.arguments[i], hashCode);
                    }
                }
                return hashCode;
            };
            DiagnosticInfo.prototype.Equals = function (obj) {
                var other = __as__(obj, DiagnosticInfo);
                var result = false;
                if (other != null && other.errorCode == this.errorCode && __classOf(this) == __classOf(obj)) {
                    if (this.arguments == null && other.arguments == null) {
                        result = true;
                    }
                    else if (this.arguments != null && other.arguments != null && this.arguments.length == other.arguments.length) {
                        result = true;
                        for (var i = 0; i < this.arguments.length; i++) {
                            if (this.arguments[i] != other.arguments[i]) {
                                result = false;
                                break;
                            }
                        }
                    }
                }
                return result;
            };
            DiagnosticInfo.prototype.GetDebuggerDisplay = function () {
                switch (this.Code) {
                    case CodeAnalysis.InternalErrorCode.Unknown:
                        return "Unresolved DiagnosticInfo";
                    case CodeAnalysis.InternalErrorCode.Void:
                        return "Void DiagnosticInfo";
                    default:
                        return this.ToString();
                }
            };
            DiagnosticInfo.prototype.GetResolvedInfo = function () {
                throw Roslyn.Utilities.ExceptionUtilities.Unreachable;
            };
            DiagnosticInfo.errorCodeToDescriptorMap = System.Collections.Immutable.ImmutableDictionary.Empty;
            DiagnosticInfo.CompilerErrorCustomTags = System.Collections.Immutable.ImmutableArray.Create(CodeAnalysis.WellKnownDiagnosticTags.Telemetry, CodeAnalysis.WellKnownDiagnosticTags.NotConfigurable);
            DiagnosticInfo.CompilerNonErrorCustomTags = System.Collections.Immutable.ImmutableArray.Create(CodeAnalysis.WellKnownDiagnosticTags.Telemetry);
            return DiagnosticInfo;
        })();
        CodeAnalysis.DiagnosticInfo = DiagnosticInfo;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        (function (DiagnosticSeverity) {
            DiagnosticSeverity[DiagnosticSeverity["Hidden"] = 0] = "Hidden";
            DiagnosticSeverity[DiagnosticSeverity["Info"] = 1] = "Info";
            DiagnosticSeverity[DiagnosticSeverity["Warning"] = 2] = "Warning";
            DiagnosticSeverity[DiagnosticSeverity["Error"] = 3] = "Error";
        })(CodeAnalysis.DiagnosticSeverity || (CodeAnalysis.DiagnosticSeverity = {}));
        var DiagnosticSeverity = CodeAnalysis.DiagnosticSeverity;
        var InternalErrorCode = (function () {
            function InternalErrorCode() {
            }
            InternalErrorCode.Unknown = -1;
            InternalErrorCode.Void = -2;
            return InternalErrorCode;
        })();
        CodeAnalysis.InternalErrorCode = InternalErrorCode;
        var InternalDiagnosticSeverity = (function () {
            function InternalDiagnosticSeverity() {
            }
            InternalDiagnosticSeverity.Unknown = InternalErrorCode.Unknown;
            InternalDiagnosticSeverity.Void = InternalErrorCode.Void;
            return InternalDiagnosticSeverity;
        })();
        CodeAnalysis.InternalDiagnosticSeverity = InternalDiagnosticSeverity;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var DiagnosticWithInfo = (function (_super) {
            __extends(DiagnosticWithInfo, _super);
            function DiagnosticWithInfo() {
                _super.call(this);
            }
            DiagnosticWithInfo.prototype.ctor_3747 = function (info, location) {
                System.Diagnostics.Debug.Assert(info != null);
                System.Diagnostics.Debug.Assert(location != null);
                this.info = info;
                this.location = location;
                return this;
            };
            Object.defineProperty(DiagnosticWithInfo.prototype, "Location", {
                get: function () {
                    return this.location;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DiagnosticWithInfo.prototype, "AdditionalLocations", {
                get: function () {
                    return this.Info.AdditionalLocations;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DiagnosticWithInfo.prototype, "CustomTags", {
                get: function () {
                    return this.Info.CustomTags;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DiagnosticWithInfo.prototype, "Descriptor", {
                get: function () {
                    return this.Info.Descriptor;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DiagnosticWithInfo.prototype, "Id", {
                get: function () {
                    return this.Info.MessageIdentifier;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DiagnosticWithInfo.prototype, "Category", {
                get: function () {
                    return this.Info.Category;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DiagnosticWithInfo.prototype, "Code", {
                get: function () {
                    return this.Info.Code;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DiagnosticWithInfo.prototype, "Severity", {
                get: function () {
                    return this.Info.Severity;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DiagnosticWithInfo.prototype, "DefaultSeverity", {
                get: function () {
                    return this.Info.DefaultSeverity;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DiagnosticWithInfo.prototype, "IsEnabledByDefault", {
                get: function () {
                    return true;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DiagnosticWithInfo.prototype, "WarningLevel", {
                get: function () {
                    return this.Info.WarningLevel;
                },
                enumerable: true,
                configurable: true
            });
            DiagnosticWithInfo.prototype.GetMessage = function (formatProvider) {
                if (formatProvider === void 0) { formatProvider = null; }
                return this.Info.GetMessage(formatProvider);
            };
            Object.defineProperty(DiagnosticWithInfo.prototype, "Arguments", {
                get: function () {
                    return this.Info.Arguments;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DiagnosticWithInfo.prototype, "Info", {
                get: function () {
                    if (this.info.Severity == CodeAnalysis.InternalDiagnosticSeverity.Unknown) {
                        return this.info.GetResolvedInfo();
                    }
                    return this.info;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DiagnosticWithInfo.prototype, "HasLazyInfo", {
                get: function () {
                    return this.info.Severity == CodeAnalysis.InternalDiagnosticSeverity.Unknown || this.info.Severity == CodeAnalysis.InternalDiagnosticSeverity.Void;
                },
                enumerable: true,
                configurable: true
            });
            DiagnosticWithInfo.prototype.GetHashCode = function () {
                return Roslyn.Utilities.Hash.Combine_1641(this.Location.GetHashCode(), this.Info.GetHashCode());
            };
            DiagnosticWithInfo.prototype.Equals = function (obj) {
                return this.Equals_8787(__as__(obj, CodeAnalysis.Diagnostic));
            };
            DiagnosticWithInfo.prototype.Equals_8787 = function (obj) {
                if (this == obj) {
                    return true;
                }
                var other = __as__(obj, DiagnosticWithInfo);
                if (other == null || __classOf(this) != __classOf(other)) {
                    return false;
                }
                return this.Location.Equals(other.location) && this.Info.Equals(other.Info) && System.Linq.Enumerable.SequenceEqual(this.AdditionalLocations, other.AdditionalLocations);
            };
            DiagnosticWithInfo.prototype.WithLocation = function (location) {
                if (location == null) {
                    throw new System.ArgumentNullException("location");
                }
                if (location.op_Inequality(this.location)) {
                    return new DiagnosticWithInfo().ctor_3747(this.info, location);
                }
                return this;
            };
            DiagnosticWithInfo.prototype.WithSeverity = function (severity) {
                if (this.Severity != severity) {
                    return new DiagnosticWithInfo().ctor_3747(this.Info.GetInstanceWithSeverity(severity), this.location);
                }
                return this;
            };
            DiagnosticWithInfo.prototype.IsNotConfigurable = function () {
                return this.Info.IsNotConfigurable();
            };
            return DiagnosticWithInfo;
        })(CodeAnalysis.Diagnostic);
        CodeAnalysis.DiagnosticWithInfo = DiagnosticWithInfo;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Location = (function () {
            function Location() {
                this.Kind = 0;
            }
            Location.prototype.ctor_1148 = function () {
                return this;
            };
            Object.defineProperty(Location.prototype, "IsInSource", {
                get: function () {
                    return this.SourceTree != null;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Location.prototype, "SourceTree", {
                get: function () {
                    return null;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Location.prototype, "SourceSpan", {
                get: function () {
                    return structDefault(CodeAnalysis.Text.TextSpan);
                },
                enumerable: true,
                configurable: true
            });
            Location.prototype.GetLineSpan = function () {
                return structDefault(CodeAnalysis.FileLinePositionSpan);
            };
            Location.prototype.GetMappedLineSpan = function () {
                return structDefault(CodeAnalysis.FileLinePositionSpan);
            };
            Location.prototype.Equals = function (obj) {
                throw new Error('not implemented');
            };
            Location.prototype.GetHashCode = function () {
                throw new Error('not implemented');
            };
            Location.prototype.ToString = function () {
                var result = this.Kind.ToString();
                if (this.IsInSource) {
                    result += "(" + (this.SourceTree != null ? this.SourceTree.FilePath : null) + this.SourceSpan + ")";
                }
                else {
                    var pos = this.GetLineSpan();
                    if (pos.Path != null) {
                        result += "(" + pos.Path + "@" + (pos.StartLinePosition.Line + 1) + ":" + (pos.StartLinePosition.Character + 1) + ")";
                    }
                }
                return result;
            };
            Location.prototype.op_Equality = function (right) {
                var left = this;
                if (ReferenceEquals(left, null)) {
                    return ReferenceEquals(right, null);
                }
                return left.Equals(right);
            };
            Location.prototype.op_Inequality = function (right) {
                var left = this;
                return !(left.op_Equality(right));
            };
            Object.defineProperty(Location, "None", {
                get: function () {
                    return CodeAnalysis.NoLocation.Singleton;
                },
                enumerable: true,
                configurable: true
            });
            Location.Create_2122 = function (syntaxTree, textSpan) {
                if (syntaxTree == null) {
                    throw new System.ArgumentNullException("syntaxTree");
                }
                return new CodeAnalysis.SourceLocation().ctor_1003(syntaxTree, textSpan);
            };
            Location.Create_1465 = function (filePath, textSpan, lineSpan) {
                if (filePath == null) {
                    throw new System.ArgumentNullException("filePath");
                }
                return new CodeAnalysis.ExternalFileLocation().ctor_1166(filePath, textSpan, lineSpan);
            };
            return Location;
        })();
        CodeAnalysis.Location = Location;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var ExternalFileLocation = (function (_super) {
            __extends(ExternalFileLocation, _super);
            function ExternalFileLocation() {
                _super.call(this);
                this.sourceSpan = structDefault(CodeAnalysis.Text.TextSpan);
                this.lineSpan = structDefault(CodeAnalysis.FileLinePositionSpan);
            }
            ExternalFileLocation.prototype.ctor_1166 = function (filePath, sourceSpan, lineSpan) {
                _super.prototype.ctor_1148.call(this);
                this.sourceSpan = sourceSpan;
                this.lineSpan = new CodeAnalysis.FileLinePositionSpan().ctor_2529(filePath, lineSpan);
                return this;
            };
            Object.defineProperty(ExternalFileLocation.prototype, "SourceSpan", {
                get: function () {
                    return this.sourceSpan;
                },
                enumerable: true,
                configurable: true
            });
            ExternalFileLocation.prototype.GetLineSpan = function () {
                return this.lineSpan;
            };
            ExternalFileLocation.prototype.GetMappedLineSpan = function () {
                return this.lineSpan;
            };
            Object.defineProperty(ExternalFileLocation.prototype, "Kind", {
                get: function () {
                    return 4 /* ExternalFile */;
                },
                enumerable: true,
                configurable: true
            });
            ExternalFileLocation.prototype.Equals = function (obj) {
                return this.Equals_1713(__as__(obj, ExternalFileLocation));
            };
            ExternalFileLocation.prototype.Equals_1713 = function (obj) {
                if (ReferenceEquals(obj, this)) {
                    return true;
                }
                return obj != null && this.sourceSpan.op_Equality(obj.sourceSpan) && this.lineSpan.Equals_2972(obj.lineSpan);
            };
            ExternalFileLocation.prototype.GetHashCode = function () {
                return Roslyn.Utilities.Hash.Combine_1641(this.lineSpan.GetHashCode(), this.sourceSpan.GetHashCode());
            };
            return ExternalFileLocation;
        })(CodeAnalysis.Location);
        CodeAnalysis.ExternalFileLocation = ExternalFileLocation;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var FileLinePositionSpan = (function () {
            function FileLinePositionSpan() {
                this.span = structDefault(CodeAnalysis.Text.LinePositionSpan);
                this.hasMappedPath = false;
            }
            Object.defineProperty(FileLinePositionSpan.prototype, "Path", {
                get: function () {
                    return this.path;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FileLinePositionSpan.prototype, "HasMappedPath", {
                get: function () {
                    return this.hasMappedPath;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FileLinePositionSpan.prototype, "StartLinePosition", {
                get: function () {
                    return this.span.Start;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FileLinePositionSpan.prototype, "EndLinePosition", {
                get: function () {
                    return this.span.End;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FileLinePositionSpan.prototype, "Span", {
                get: function () {
                    return this.span;
                },
                enumerable: true,
                configurable: true
            });
            FileLinePositionSpan.prototype.ctor_1503 = function (path, start, end) {
                this.ctor_2529(path, new CodeAnalysis.Text.LinePositionSpan().ctor_1348(start, end));
                return this;
            };
            FileLinePositionSpan.prototype.ctor_2529 = function (path, span) {
                if (path == null) {
                    throw new System.ArgumentNullException("path");
                }
                this.path = path;
                this.span = span;
                this.hasMappedPath = false;
                return this;
            };
            FileLinePositionSpan.prototype.ctor_1079 = function (path, span, hasMappedPath) {
                this.path = path;
                this.span = span;
                this.hasMappedPath = hasMappedPath;
                return this;
            };
            Object.defineProperty(FileLinePositionSpan.prototype, "IsValid", {
                get: function () {
                    return this.path != null;
                },
                enumerable: true,
                configurable: true
            });
            FileLinePositionSpan.prototype.Equals_2972 = function (other) {
                return this.span.Equals_2915(other.span) && this.hasMappedPath == other.hasMappedPath && System.String.Equals(this.path, other.path, 4 /* Ordinal */);
            };
            FileLinePositionSpan.prototype.Equals = function (other) {
                return other instanceof FileLinePositionSpan && this.Equals_2972(other);
            };
            FileLinePositionSpan.prototype.GetHashCode = function () {
                return Roslyn.Utilities.Hash.Combine_7656(this.path, Roslyn.Utilities.Hash.Combine_1020(this.hasMappedPath, this.span.GetHashCode()));
            };
            FileLinePositionSpan.prototype.ToString = function () {
                return this.path + ": " + this.span;
            };
            return FileLinePositionSpan;
        })();
        CodeAnalysis.FileLinePositionSpan = FileLinePositionSpan;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var LocalizableString = (function () {
            function LocalizableString() {
                this.myHash = Gb.NextHashCode();
            }
            LocalizableString.prototype.ToString_1106 = function (formatProvider) {
                throw new Error('not implemented');
            };
            LocalizableString.op_Explicit_9899 = function (localizableResource) {
                return localizableResource.ToString_1106(null);
            };
            LocalizableString.op_Implicit_1404 = function (fixedResource) {
                return new LocalizableString.FixedLocalizableString().ctor_8981(fixedResource);
            };
            LocalizableString.prototype.ToString = function (ignored, formatProvider) {
                return this.ToString_1106(formatProvider);
            };
            LocalizableString.prototype.GetHashCode = function () {
                return this.myHash;
            };
            return LocalizableString;
        })();
        CodeAnalysis.LocalizableString = LocalizableString;
        var LocalizableString;
        (function (LocalizableString) {
            var FixedLocalizableString = (function (_super) {
                __extends(FixedLocalizableString, _super);
                function FixedLocalizableString() {
                    _super.call(this);
                }
                FixedLocalizableString.prototype.ctor_8981 = function (fixedResource) {
                    this.fixedString = fixedResource;
                    return this;
                };
                FixedLocalizableString.prototype.ToString_1106 = function (formatProvider) {
                    return this.fixedString;
                };
                return FixedLocalizableString;
            })(LocalizableString);
            LocalizableString.FixedLocalizableString = FixedLocalizableString;
        })(LocalizableString = CodeAnalysis.LocalizableString || (CodeAnalysis.LocalizableString = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var LocalizableResourceString = (function (_super) {
            __extends(LocalizableResourceString, _super);
            function LocalizableResourceString() {
                _super.call(this);
            }
            LocalizableResourceString.prototype.ctor_1830 = function (nameOfLocalizableResource, resourceManager, resourceSource) {
                var formatArguments = [];
                for (var _i = 3; _i < arguments.length; _i++) {
                    formatArguments[_i - 3] = arguments[_i];
                }
                if (nameOfLocalizableResource == null) {
                    throw new System.ArgumentNullException('nameOfLocalizableResource');
                }
                if (resourceManager == null) {
                    throw new System.ArgumentNullException('resourceManager');
                }
                if (resourceSource == null) {
                    throw new System.ArgumentNullException('resourceSource');
                }
                if (formatArguments == null) {
                    throw new System.ArgumentNullException('formatArguments');
                }
                this.resourceManager = resourceManager;
                this.nameOfLocalizableResource = nameOfLocalizableResource;
                this.resourceSource = resourceSource;
                this.formatArguments = formatArguments;
                return this;
            };
            LocalizableResourceString.prototype.ctor_9714 = function (reader) {
                this.resourceSource = reader.ReadValue();
                this.nameOfLocalizableResource = reader.ReadString_7160();
                this.resourceManager = new System.Resources.ResourceManager("", this.resourceSource);
                var length = reader.ReadCompressedUInt();
                if (length == 0) {
                    this.formatArguments = LocalizableResourceString.EmptyArguments;
                }
                else {
                    var argumentsBuilder = CodeAnalysis.ArrayBuilder.GetInstance_9802(length);
                    for (var i = 0; i < length; i++) {
                        argumentsBuilder.Add(reader.ReadString_7160());
                    }
                    this.formatArguments = argumentsBuilder.ToArrayAndFree();
                }
                return this;
            };
            LocalizableResourceString.prototype.GetReader = function () {
                return function (reader) { return (new LocalizableResourceString().ctor_9714(reader)); };
            };
            LocalizableResourceString.prototype.WriteTo = function (writer) {
                writer.WriteValue(this.resourceSource);
                writer.WriteString(this.nameOfLocalizableResource);
                var length = this.formatArguments.length;
                writer.WriteCompressedUInt(length);
                for (var i = 0; i < length; i++) {
                    writer.WriteString(this.formatArguments[i]);
                }
            };
            LocalizableResourceString.prototype.ToString_1106 = function (formatProvider) {
                var temp = __as__(formatProvider, System.Globalization.CultureInfo);
                var culture = temp != null ? temp : System.Globalization.CultureInfo.CurrentUICulture;
                var resourceString = this.resourceManager.GetString(this.nameOfLocalizableResource, culture);
                return resourceString != null ? (this.formatArguments.length > 0 ? System.String.Format(resourceString, this.formatArguments) : resourceString) : System.String.Empty;
            };
            LocalizableResourceString.EmptyArguments = new Array(0);
            return LocalizableResourceString;
        })(CodeAnalysis.LocalizableString);
        CodeAnalysis.LocalizableResourceString = LocalizableResourceString;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        (function (LocationKind) {
            LocationKind[LocationKind["None"] = 0] = "None";
            LocationKind[LocationKind["SourceFile"] = 1] = "SourceFile";
            LocationKind[LocationKind["MetadataFile"] = 2] = "MetadataFile";
            LocationKind[LocationKind["XmlFile"] = 3] = "XmlFile";
            LocationKind[LocationKind["ExternalFile"] = 4] = "ExternalFile";
        })(CodeAnalysis.LocationKind || (CodeAnalysis.LocationKind = {}));
        var LocationKind = CodeAnalysis.LocationKind;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var NoLocation = (function (_super) {
            __extends(NoLocation, _super);
            function NoLocation() {
                _super.call(this);
            }
            Object.defineProperty(NoLocation.prototype, "Kind", {
                get: function () {
                    return 0 /* None */;
                },
                enumerable: true,
                configurable: true
            });
            NoLocation.prototype.Equals = function (obj) {
                return this == obj;
            };
            NoLocation.prototype.GetHashCode = function () {
                return 0x16487756;
            };
            NoLocation.Singleton = new NoLocation();
            return NoLocation;
        })(CodeAnalysis.Location);
        CodeAnalysis.NoLocation = NoLocation;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        (function (ReportDiagnostic) {
            ReportDiagnostic[ReportDiagnostic["Default"] = 0] = "Default";
            ReportDiagnostic[ReportDiagnostic["Error"] = 1] = "Error";
            ReportDiagnostic[ReportDiagnostic["Warn"] = 2] = "Warn";
            ReportDiagnostic[ReportDiagnostic["Info"] = 3] = "Info";
            ReportDiagnostic[ReportDiagnostic["Hidden"] = 4] = "Hidden";
            ReportDiagnostic[ReportDiagnostic["Suppress"] = 5] = "Suppress";
        })(CodeAnalysis.ReportDiagnostic || (CodeAnalysis.ReportDiagnostic = {}));
        var ReportDiagnostic = CodeAnalysis.ReportDiagnostic;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var SourceLocation = (function (_super) {
            __extends(SourceLocation, _super);
            function SourceLocation() {
                _super.call(this);
                this.span = structDefault(CodeAnalysis.Text.TextSpan);
            }
            SourceLocation.prototype.ctor_1003 = function (syntaxTree, span) {
                _super.prototype.ctor_1148.call(this);
                this.syntaxTree = syntaxTree;
                this.span = span;
                return this;
            };
            SourceLocation.prototype.ctor_1875 = function (node) {
                this.ctor_1003(node.SyntaxTree, node.Span);
                return this;
            };
            SourceLocation.prototype.ctor_1902 = function (token) {
                this.ctor_1003(token.SyntaxTree, token.Span);
                return this;
            };
            SourceLocation.prototype.ctor_1192 = function (nodeOrToken) {
                this.ctor_1003(nodeOrToken.SyntaxTree, nodeOrToken.Span);
                return this;
            };
            SourceLocation.prototype.ctor_2008 = function (trivia) {
                this.ctor_1003(trivia.SyntaxTree, trivia.Span);
                return this;
            };
            SourceLocation.prototype.ctor_1638 = function (syntaxRef) {
                this.ctor_1003(syntaxRef.SyntaxTree, syntaxRef.Span);
                return this;
            };
            Object.defineProperty(SourceLocation.prototype, "Kind", {
                get: function () {
                    return 1 /* SourceFile */;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SourceLocation.prototype, "SourceSpan", {
                get: function () {
                    return this.span;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SourceLocation.prototype, "SourceTree", {
                get: function () {
                    return this.syntaxTree;
                },
                enumerable: true,
                configurable: true
            });
            SourceLocation.prototype.GetLineSpan = function () {
                if (this.syntaxTree == null) {
                    var result = structDefault(CodeAnalysis.FileLinePositionSpan);
                    System.Diagnostics.Debug.Assert(!result.IsValid);
                    return result;
                }
                return this.syntaxTree.GetLineSpan(this.span);
            };
            SourceLocation.prototype.GetMappedLineSpan = function () {
                if (this.syntaxTree == null) {
                    var result = structDefault(CodeAnalysis.FileLinePositionSpan);
                    System.Diagnostics.Debug.Assert(!result.IsValid);
                    return result;
                }
                return this.syntaxTree.GetMappedLineSpan(this.span);
            };
            SourceLocation.prototype.Equals_2017 = function (other) {
                if (ReferenceEquals(this, other)) {
                    return true;
                }
                return other != null && other.syntaxTree == this.syntaxTree && other.span.op_Equality(this.span);
            };
            SourceLocation.prototype.Equals = function (obj) {
                return this.Equals_2017(__as__(obj, SourceLocation));
            };
            SourceLocation.prototype.GetHashCode = function () {
                return Roslyn.Utilities.Hash.Combine_7656(this.syntaxTree, this.span.GetHashCode());
            };
            return SourceLocation;
        })(CodeAnalysis.Location);
        CodeAnalysis.SourceLocation = SourceLocation;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        (function (DocumentationMode) {
            DocumentationMode[DocumentationMode["None"] = 0] = "None";
            DocumentationMode[DocumentationMode["Parse"] = 1] = "Parse";
            DocumentationMode[DocumentationMode["Diagnose"] = 2] = "Diagnose";
        })(CodeAnalysis.DocumentationMode || (CodeAnalysis.DocumentationMode = {}));
        var DocumentationMode = CodeAnalysis.DocumentationMode;
        var DocumentationModeEnumBounds = (function () {
            function DocumentationModeEnumBounds() {
            }
            DocumentationModeEnumBounds.IsValid = function (value) {
                return value >= 0 /* None */ && value <= 2 /* Diagnose */;
            };
            return DocumentationModeEnumBounds;
        })();
        CodeAnalysis.DocumentationModeEnumBounds = DocumentationModeEnumBounds;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Instrumentation;
        (function (Instrumentation) {
            (function (FunctionId) {
                FunctionId[FunctionId["CSharp_SyntaxTree_FullParse"] = 1] = "CSharp_SyntaxTree_FullParse";
                FunctionId[FunctionId["CSharp_SyntaxTree_IncrementalParse"] = 2] = "CSharp_SyntaxTree_IncrementalParse";
                FunctionId[FunctionId["CSharp_SyntaxTree_GetText"] = 3] = "CSharp_SyntaxTree_GetText";
                FunctionId[FunctionId["CSharp_SyntaxNode_SerializeTo"] = 4] = "CSharp_SyntaxNode_SerializeTo";
                FunctionId[FunctionId["CSharp_SyntaxNode_DeserializeFrom"] = 5] = "CSharp_SyntaxNode_DeserializeFrom";
                FunctionId[FunctionId["CSharp_Compilation_Create"] = 6] = "CSharp_Compilation_Create";
                FunctionId[FunctionId["CSharp_Compilation_AddSyntaxTrees"] = 7] = "CSharp_Compilation_AddSyntaxTrees";
                FunctionId[FunctionId["CSharp_Compilation_RemoveSyntaxTrees"] = 8] = "CSharp_Compilation_RemoveSyntaxTrees";
                FunctionId[FunctionId["CSharp_Compilation_ReplaceSyntaxTree"] = 9] = "CSharp_Compilation_ReplaceSyntaxTree";
                FunctionId[FunctionId["CSharp_Compilation_FindEntryPoint"] = 10] = "CSharp_Compilation_FindEntryPoint";
                FunctionId[FunctionId["CSharp_Compilation_ClassifyConversion"] = 11] = "CSharp_Compilation_ClassifyConversion";
                FunctionId[FunctionId["CSharp_Compilation_GetDiagnostics"] = 12] = "CSharp_Compilation_GetDiagnostics";
                FunctionId[FunctionId["CSharp_Compilation_Emit"] = 13] = "CSharp_Compilation_Emit";
                FunctionId[FunctionId["CSharp_Compilation_CreateSourceAssembly"] = 14] = "CSharp_Compilation_CreateSourceAssembly";
                FunctionId[FunctionId["CSharp_Compilation_GetGlobalNamespace"] = 15] = "CSharp_Compilation_GetGlobalNamespace";
                FunctionId[FunctionId["CSharp_Compiler_CompileMethodBodies"] = 16] = "CSharp_Compiler_CompileMethodBodies";
                FunctionId[FunctionId["CSharp_Compiler_CompileSynthesizedMethodMetadata"] = 17] = "CSharp_Compiler_CompileSynthesizedMethodMetadata";
                FunctionId[FunctionId["CSharp_DocumentationCommentCompiler_WriteDocumentationCommentXml"] = 18] = "CSharp_DocumentationCommentCompiler_WriteDocumentationCommentXml";
                FunctionId[FunctionId["CSharp_CommandLineParser_Parse"] = 19] = "CSharp_CommandLineParser_Parse";
                FunctionId[FunctionId["CSharp_SemanticModel_GetTypeInfo"] = 20] = "CSharp_SemanticModel_GetTypeInfo";
                FunctionId[FunctionId["CSharp_SemanticModel_GetConversion"] = 21] = "CSharp_SemanticModel_GetConversion";
                FunctionId[FunctionId["CSharp_SemanticModel_GetSpeculativeTypeInfo"] = 22] = "CSharp_SemanticModel_GetSpeculativeTypeInfo";
                FunctionId[FunctionId["CSharp_SemanticModel_GetSymbolInfo"] = 23] = "CSharp_SemanticModel_GetSymbolInfo";
                FunctionId[FunctionId["CSharp_SemanticModel_GetSpeculativeSymbolInfo"] = 24] = "CSharp_SemanticModel_GetSpeculativeSymbolInfo";
                FunctionId[FunctionId["CSharp_SemanticModel_LookupSymbols"] = 25] = "CSharp_SemanticModel_LookupSymbols";
                FunctionId[FunctionId["CSharp_SemanticModel_AnalyzeControlFlow"] = 26] = "CSharp_SemanticModel_AnalyzeControlFlow";
                FunctionId[FunctionId["CSharp_SemanticModel_AnalyzeDataFlow"] = 27] = "CSharp_SemanticModel_AnalyzeDataFlow";
                FunctionId[FunctionId["CSharp_SemanticModel_ClassifyConversion"] = 28] = "CSharp_SemanticModel_ClassifyConversion";
                FunctionId[FunctionId["CSharp_SemanticModel_ClassifyConversionForCast"] = 29] = "CSharp_SemanticModel_ClassifyConversionForCast";
                FunctionId[FunctionId["CSharp_SemanticModel_GetDeclaredSymbol"] = 30] = "CSharp_SemanticModel_GetDeclaredSymbol";
                FunctionId[FunctionId["CSharp_SemanticModel_GetDeclaredConstructorSymbol"] = 31] = "CSharp_SemanticModel_GetDeclaredConstructorSymbol";
                FunctionId[FunctionId["CSharp_SemanticModel_ResolveOverloads"] = 32] = "CSharp_SemanticModel_ResolveOverloads";
                FunctionId[FunctionId["CSharp_SemanticModel_ResolveIndexerOverloads"] = 33] = "CSharp_SemanticModel_ResolveIndexerOverloads";
                FunctionId[FunctionId["CSharp_SemanticModel_GetDiagnostics"] = 34] = "CSharp_SemanticModel_GetDiagnostics";
                FunctionId[FunctionId["CSharp_SemanticModel_GetMemberGroup"] = 35] = "CSharp_SemanticModel_GetMemberGroup";
                FunctionId[FunctionId["CSharp_SemanticModel_GetIndexerGroup"] = 36] = "CSharp_SemanticModel_GetIndexerGroup";
                FunctionId[FunctionId["CSharp_SemanticModel_GetConstantValue"] = 37] = "CSharp_SemanticModel_GetConstantValue";
                FunctionId[FunctionId["CSharp_SemanticModel_GetQueryClauseInfo"] = 38] = "CSharp_SemanticModel_GetQueryClauseInfo";
                FunctionId[FunctionId["CSharp_SemanticModel_GetAwaitExpressionInfo"] = 39] = "CSharp_SemanticModel_GetAwaitExpressionInfo";
                FunctionId[FunctionId["CSharp_SemanticModel_GetForEachStatementInfo"] = 40] = "CSharp_SemanticModel_GetForEachStatementInfo";
                FunctionId[FunctionId["CSharp_SemanticModel_GetAliasInfo"] = 41] = "CSharp_SemanticModel_GetAliasInfo";
                FunctionId[FunctionId["CSharp_SemanticModel_GetSpeculativeAliasInfo"] = 42] = "CSharp_SemanticModel_GetSpeculativeAliasInfo";
                FunctionId[FunctionId["CSharp_SemanticModel_GetEnclosingSymbol"] = 43] = "CSharp_SemanticModel_GetEnclosingSymbol";
                FunctionId[FunctionId["CSharp_SemanticModel_IsAccessible"] = 44] = "CSharp_SemanticModel_IsAccessible";
                FunctionId[FunctionId["CSharp_SemanticModel_GetPreprocessorSymbolInfo"] = 45] = "CSharp_SemanticModel_GetPreprocessorSymbolInfo";
                FunctionId[FunctionId["VisualBasic_SyntaxTree_FullParse"] = 46] = "VisualBasic_SyntaxTree_FullParse";
                FunctionId[FunctionId["VisualBasic_SyntaxTree_IncrementalParse"] = 47] = "VisualBasic_SyntaxTree_IncrementalParse";
                FunctionId[FunctionId["VisualBasic_SyntaxTree_GetText"] = 48] = "VisualBasic_SyntaxTree_GetText";
                FunctionId[FunctionId["VisualBasic_SyntaxNode_SerializeTo"] = 49] = "VisualBasic_SyntaxNode_SerializeTo";
                FunctionId[FunctionId["VisualBasic_SyntaxNode_DeserializeFrom"] = 50] = "VisualBasic_SyntaxNode_DeserializeFrom";
                FunctionId[FunctionId["VisualBasic_Compilation_Create"] = 51] = "VisualBasic_Compilation_Create";
                FunctionId[FunctionId["VisualBasic_Compilation_AddSyntaxTrees"] = 52] = "VisualBasic_Compilation_AddSyntaxTrees";
                FunctionId[FunctionId["VisualBasic_Compilation_RemoveSyntaxTrees"] = 53] = "VisualBasic_Compilation_RemoveSyntaxTrees";
                FunctionId[FunctionId["VisualBasic_Compilation_ReplaceSyntaxTree"] = 54] = "VisualBasic_Compilation_ReplaceSyntaxTree";
                FunctionId[FunctionId["VisualBasic_Compilation_FindEntryPoint"] = 55] = "VisualBasic_Compilation_FindEntryPoint";
                FunctionId[FunctionId["VisualBasic_Compilation_ClassifyConversion"] = 56] = "VisualBasic_Compilation_ClassifyConversion";
                FunctionId[FunctionId["VisualBasic_Compilation_GetDiagnostics"] = 57] = "VisualBasic_Compilation_GetDiagnostics";
                FunctionId[FunctionId["VisualBasic_Compilation_Emit"] = 58] = "VisualBasic_Compilation_Emit";
                FunctionId[FunctionId["VisualBasic_Compilation_CreateSourceAssembly"] = 59] = "VisualBasic_Compilation_CreateSourceAssembly";
                FunctionId[FunctionId["VisualBasic_Compilation_GetGlobalNamespace"] = 60] = "VisualBasic_Compilation_GetGlobalNamespace";
                FunctionId[FunctionId["VisualBasic_Compiler_CompileMethodBodies"] = 61] = "VisualBasic_Compiler_CompileMethodBodies";
                FunctionId[FunctionId["VisualBasic_DocumentationCommentCompiler_WriteDocumentationCommentXml"] = 62] = "VisualBasic_DocumentationCommentCompiler_WriteDocumentationCommentXml";
                FunctionId[FunctionId["VisualBasic_CommandLineParser_Parse"] = 63] = "VisualBasic_CommandLineParser_Parse";
                FunctionId[FunctionId["VisualBasic_SemanticModel_GetTypeInfo"] = 64] = "VisualBasic_SemanticModel_GetTypeInfo";
                FunctionId[FunctionId["VisualBasic_SemanticModel_GetSpeculativeTypeInfo"] = 65] = "VisualBasic_SemanticModel_GetSpeculativeTypeInfo";
                FunctionId[FunctionId["VisualBasic_SemanticModel_GetSymbolInfo"] = 66] = "VisualBasic_SemanticModel_GetSymbolInfo";
                FunctionId[FunctionId["VisualBasic_SemanticModel_GetSpeculativeSymbolInfo"] = 67] = "VisualBasic_SemanticModel_GetSpeculativeSymbolInfo";
                FunctionId[FunctionId["VisualBasic_SemanticModel_LookupSymbols"] = 68] = "VisualBasic_SemanticModel_LookupSymbols";
                FunctionId[FunctionId["VisualBasic_SemanticModel_AnalyzeControlFlow"] = 69] = "VisualBasic_SemanticModel_AnalyzeControlFlow";
                FunctionId[FunctionId["VisualBasic_SemanticModel_AnalyzeDataFlow"] = 70] = "VisualBasic_SemanticModel_AnalyzeDataFlow";
                FunctionId[FunctionId["VisualBasic_SemanticModel_ClassifyConversion"] = 71] = "VisualBasic_SemanticModel_ClassifyConversion";
                FunctionId[FunctionId["VisualBasic_SemanticModel_GetDeclaredSymbol"] = 72] = "VisualBasic_SemanticModel_GetDeclaredSymbol";
                FunctionId[FunctionId["VisualBasic_SemanticModel_ResolveOverloads"] = 73] = "VisualBasic_SemanticModel_ResolveOverloads";
                FunctionId[FunctionId["VisualBasic_SemanticModel_GetDiagnostics"] = 74] = "VisualBasic_SemanticModel_GetDiagnostics";
                FunctionId[FunctionId["VisualBasic_SemanticModel_GetMemberGroup"] = 75] = "VisualBasic_SemanticModel_GetMemberGroup";
                FunctionId[FunctionId["VisualBasic_SemanticModel_GetSpeculativeMemberGroup"] = 76] = "VisualBasic_SemanticModel_GetSpeculativeMemberGroup";
                FunctionId[FunctionId["VisualBasic_SemanticModel_GetConstantValue"] = 77] = "VisualBasic_SemanticModel_GetConstantValue";
                FunctionId[FunctionId["VisualBasic_SemanticModel_GetSpeculativeConstantValue"] = 78] = "VisualBasic_SemanticModel_GetSpeculativeConstantValue";
                FunctionId[FunctionId["VisualBasic_SemanticModel_GetForEachStatementInfo"] = 79] = "VisualBasic_SemanticModel_GetForEachStatementInfo";
                FunctionId[FunctionId["VisualBasic_SemanticModel_GetAliasInfo"] = 80] = "VisualBasic_SemanticModel_GetAliasInfo";
                FunctionId[FunctionId["VisualBasic_SemanticModel_GetSpeculativeAliasInfo"] = 81] = "VisualBasic_SemanticModel_GetSpeculativeAliasInfo";
                FunctionId[FunctionId["VisualBasic_SemanticModel_GetEnclosingSymbol"] = 82] = "VisualBasic_SemanticModel_GetEnclosingSymbol";
                FunctionId[FunctionId["VisualBasic_SemanticModel_IsAccessible"] = 83] = "VisualBasic_SemanticModel_IsAccessible";
                FunctionId[FunctionId["VisualBasic_SemanticModel_GetPreprocessorSymbolInfo"] = 84] = "VisualBasic_SemanticModel_GetPreprocessorSymbolInfo";
                FunctionId[FunctionId["Common_Compilation_SerializeToPeStream"] = 85] = "Common_Compilation_SerializeToPeStream";
                FunctionId[FunctionId["Common_CommandLineCompiler_ResolveMetadataReferences"] = 86] = "Common_CommandLineCompiler_ResolveMetadataReferences";
                FunctionId[FunctionId["Count"] = 87] = "Count";
            })(Instrumentation.FunctionId || (Instrumentation.FunctionId = {}));
            var FunctionId = Instrumentation.FunctionId;
        })(Instrumentation = CodeAnalysis.Instrumentation || (CodeAnalysis.Instrumentation = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Instrumentation;
        (function (Instrumentation) {
            var Logger = (function () {
                function Logger() {
                }
                Logger.GetNextUniqueBlockId = function () {
                    Logger.lastUniqueBlockId++;
                    return Logger.lastUniqueBlockId;
                };
                Logger.IsEnabled = function (functionId) {
                    return Instrumentation.RoslynCompilerEventSource.Instance.IsEnabled();
                };
                Logger.IsVerbose = function () {
                    return Instrumentation.RoslynCompilerEventSource.Instance.IsEnabled(5 /* Verbose */, (-1));
                };
                Logger.LogString_1794 = function (functionId, message) {
                    if (message === void 0) { message = null; }
                    if (!Logger.IsEnabled(functionId)) {
                        return;
                    }
                    message = Logger.IsVerbose() ? message : System.String.Empty;
                    Instrumentation.RoslynCompilerEventSource.Instance.LogString(message != null ? message : System.String.Empty, functionId);
                };
                Logger.LogString_1877 = function (functionId, messageGetter) {
                    if (!Logger.IsEnabled(functionId)) {
                        return;
                    }
                    var message = Logger.IsVerbose() ? messageGetter() : System.String.Empty;
                    Instrumentation.RoslynCompilerEventSource.Instance.LogString(message, functionId);
                };
                Logger.LogString_1018 = function (functionId, messageGetter, arg0) {
                    if (!Logger.IsEnabled(functionId)) {
                        return;
                    }
                    var message = Logger.IsVerbose() ? messageGetter(arg0) : System.String.Empty;
                    Instrumentation.RoslynCompilerEventSource.Instance.LogString(message, functionId);
                };
                Logger.LogString_1002 = function (functionId, messageGetter, arg0, arg1) {
                    if (!Logger.IsEnabled(functionId)) {
                        return;
                    }
                    var message = Logger.IsVerbose() ? messageGetter(arg0, arg1) : System.String.Empty;
                    Instrumentation.RoslynCompilerEventSource.Instance.LogString(message, functionId);
                };
                Logger.LogString_2002 = function (functionId, messageGetter, arg0, arg1, arg2) {
                    if (!Logger.IsEnabled(functionId)) {
                        return;
                    }
                    var message = Logger.IsVerbose() ? messageGetter(arg0, arg1, arg2) : System.String.Empty;
                    Instrumentation.RoslynCompilerEventSource.Instance.LogString(message, functionId);
                };
                Logger.LogString_1771 = function (functionId, messageGetter, arg0, arg1, arg2, arg3) {
                    if (!Logger.IsEnabled(functionId)) {
                        return;
                    }
                    var message = Logger.IsVerbose() ? messageGetter(arg0, arg1, arg2, arg3) : System.String.Empty;
                    Instrumentation.RoslynCompilerEventSource.Instance.LogString(message, functionId);
                };
                Logger.LogBlock_1335 = function (functionId, message, number, cancellationToken) {
                    if (message === void 0) { message = null; }
                    if (number === void 0) { number = 0; }
                    if (cancellationToken === void 0) { cancellationToken = structDefault(System.Threading.CancellationToken); }
                    if (!Logger.IsEnabled(functionId)) {
                        return structDefault(Logger.Block);
                    }
                    message = Logger.IsVerbose() ? message : System.String.Empty;
                    return new Logger.Block().ctor_6625(functionId, number, message != null ? message : System.String.Empty, Logger.GetNextUniqueBlockId(), cancellationToken);
                };
                Logger.LogBlock_1676 = function (functionId, messageGetter, number, cancellationToken) {
                    if (number === void 0) { number = 0; }
                    if (cancellationToken === void 0) { cancellationToken = structDefault(System.Threading.CancellationToken); }
                    if (!Logger.IsEnabled(functionId)) {
                        return structDefault(Logger.Block);
                    }
                    var message = Logger.IsVerbose() ? messageGetter() : System.String.Empty;
                    return new Logger.Block().ctor_6625(functionId, number, message, Logger.GetNextUniqueBlockId(), cancellationToken);
                };
                Logger.LogBlock_1399 = function (functionId, messageGetter, arg0, number, cancellationToken) {
                    if (number === void 0) { number = 0; }
                    if (cancellationToken === void 0) { cancellationToken = structDefault(System.Threading.CancellationToken); }
                    if (!Logger.IsEnabled(functionId)) {
                        return structDefault(Logger.Block);
                    }
                    var message = Logger.IsVerbose() ? messageGetter(arg0) : System.String.Empty;
                    return new Logger.Block().ctor_6625(functionId, number, message, Logger.GetNextUniqueBlockId(), cancellationToken);
                };
                Logger.LogBlock_1215 = function (functionId, messageGetter, arg0, arg1, number, cancellationToken) {
                    if (number === void 0) { number = 0; }
                    if (cancellationToken === void 0) { cancellationToken = structDefault(System.Threading.CancellationToken); }
                    if (!Logger.IsEnabled(functionId)) {
                        return structDefault(Logger.Block);
                    }
                    var message = Logger.IsVerbose() ? messageGetter(arg0, arg1) : System.String.Empty;
                    return new Logger.Block().ctor_6625(functionId, number, message, Logger.GetNextUniqueBlockId(), cancellationToken);
                };
                Logger.LogBlock_1471 = function (functionId, messageGetter, arg0, arg1, arg2, number, cancellationToken) {
                    if (number === void 0) { number = 0; }
                    if (cancellationToken === void 0) { cancellationToken = structDefault(System.Threading.CancellationToken); }
                    if (!Logger.IsEnabled(functionId)) {
                        return structDefault(Logger.Block);
                    }
                    var message = Logger.IsVerbose() ? messageGetter(arg0, arg1, arg2) : System.String.Empty;
                    return new Logger.Block().ctor_6625(functionId, number, message, Logger.GetNextUniqueBlockId(), cancellationToken);
                };
                Logger.LogBlock_8586 = function (functionId, messageGetter, arg0, arg1, arg2, arg3, number, cancellationToken) {
                    if (number === void 0) { number = 0; }
                    if (cancellationToken === void 0) { cancellationToken = structDefault(System.Threading.CancellationToken); }
                    if (!Logger.IsEnabled(functionId)) {
                        return structDefault(Logger.Block);
                    }
                    var message = Logger.IsVerbose() ? messageGetter(arg0, arg1, arg2, arg3) : System.String.Empty;
                    return new Logger.Block().ctor_6625(functionId, number, message, Logger.GetNextUniqueBlockId(), cancellationToken);
                };
                Logger.lastUniqueBlockId = 0;
                return Logger;
            })();
            Instrumentation.Logger = Logger;
            var Logger;
            (function (Logger) {
                var Block = (function () {
                    function Block() {
                        this.functionId = 0;
                        this.number = 0;
                        this.blockId = 0;
                        this.cancellationToken = structDefault(System.Threading.CancellationToken);
                    }
                    Block.prototype.ctor_6625 = function (functionId, number, message, blockId, cancellationToken) {
                        System.Diagnostics.Debug.Assert(functionId > 0);
                        this.functionId = functionId;
                        this.number = number;
                        this.blockId = blockId;
                        this.cancellationToken = cancellationToken;
                        Instrumentation.RoslynCompilerEventSource.Instance.BlockStart(message, functionId, blockId);
                        return this;
                    };
                    Block.prototype.Dispose = function () {
                        if (this.functionId == 0) {
                            return;
                        }
                        if (this.cancellationToken.IsCancellationRequested) {
                            Instrumentation.RoslynCompilerEventSource.Instance.BlockCanceled(this.functionId, this.number, this.blockId);
                        }
                        else {
                            Instrumentation.RoslynCompilerEventSource.Instance.BlockStop(this.functionId, this.number, this.blockId);
                        }
                    };
                    return Block;
                })();
                Logger.Block = Block;
            })(Logger = Instrumentation.Logger || (Instrumentation.Logger = {}));
        })(Instrumentation = CodeAnalysis.Instrumentation || (CodeAnalysis.Instrumentation = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Instrumentation;
        (function (Instrumentation) {
            var PerformanceGoals = (function () {
                function PerformanceGoals() {
                }
                PerformanceGoals.static_ctor_PerformanceGoals = function () {
                    var Throughput_100 = "Throughput_100";
                    PerformanceGoals.Goals = new Array(87 /* Count */);
                    PerformanceGoals.Goals[1 /* CSharp_SyntaxTree_FullParse */] = Throughput_100;
                    PerformanceGoals.Goals[46 /* VisualBasic_SyntaxTree_FullParse */] = Throughput_100;
                    return 0;
                };
                PerformanceGoals.Undefined = "Undefined";
                PerformanceGoals.static_construct = PerformanceGoals.static_ctor_PerformanceGoals();
                return PerformanceGoals;
            })();
            Instrumentation.PerformanceGoals = PerformanceGoals;
        })(Instrumentation = CodeAnalysis.Instrumentation || (CodeAnalysis.Instrumentation = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Instrumentation;
        (function (Instrumentation) {
            var RoslynCompilerEventSource = (function (_super) {
                __extends(RoslynCompilerEventSource, _super);
                function RoslynCompilerEventSource() {
                    _super.call(this);
                    this.initialized = false;
                }
                RoslynCompilerEventSource.prototype.ctor_1071 = function () {
                    this.initialized = true;
                    return this;
                };
                RoslynCompilerEventSource.prototype.LogString = function (message, functionId) {
                    this.WriteEvent(1, message != null ? message : System.String.Empty, functionId);
                };
                RoslynCompilerEventSource.prototype.BlockStart = function (message, functionId, blockId) {
                    this.WriteEvent(2, message != null ? message : System.String.Empty, functionId, blockId);
                };
                RoslynCompilerEventSource.prototype.BlockStop = function (functionId, number, blockId) {
                    this.WriteEvent(3, functionId, number, blockId);
                };
                RoslynCompilerEventSource.prototype.BlockCanceled = function (functionId, number, blockId) {
                    this.WriteEvent(4, functionId, number, blockId);
                };
                RoslynCompilerEventSource.prototype.SendFunctionDefinitions_1251 = function (definitions) {
                    this.WriteEvent(5, definitions);
                };
                RoslynCompilerEventSource.prototype.OnEventCommand = function (command) {
                    _super.prototype.OnEventCommand.call(this, command);
                    if (command.Command == -1 /* SendManifest */ || command.Command != -3 /* Disable */ || this.FunctionDefinitionRequested(command)) {
                        if (this.initialized) {
                            this.SendFunctionDefinitionsAsync();
                        }
                        else {
                        }
                    }
                };
                RoslynCompilerEventSource.prototype.FunctionDefinitionRequested = function (command) {
                    return command.Arguments != null && System.Linq.Enumerable.FirstOrDefault(command.Arguments.Keys) == "SendFunctionDefinitions";
                };
                RoslynCompilerEventSource.prototype.SendFunctionDefinitionsAsync = function () {
                };
                RoslynCompilerEventSource.prototype.SendFunctionDefinitions_6303 = function () {
                    this.SendFunctionDefinitions_1251(RoslynCompilerEventSource.GenerateFunctionDefinitions());
                };
                RoslynCompilerEventSource.GenerateFunctionDefinitions = function () {
                    var output = new System.Text.StringBuilder();
                    var output = new System.Text.StringBuilder();
                    var arr = Gb.GetEnumMembers(Instrumentation.FunctionId);
                    for (var i = 0; i < arr.length; i++) {
                        var func = arr[i];
                        output.Append(func.value);
                        output.Append(' ');
                        output.Append(func.key);
                        output.Append(' ');
                        output.AppendLine(Instrumentation.PerformanceGoals.Goals[func.value] == null ? Instrumentation.PerformanceGoals.Undefined : Instrumentation.PerformanceGoals.Goals[func.value]);
                    }
                    return output.ToString();
                };
                RoslynCompilerEventSource.Instance = new RoslynCompilerEventSource().ctor_1071();
                return RoslynCompilerEventSource;
            })(System.Diagnostics.Tracing.EventSource);
            Instrumentation.RoslynCompilerEventSource = RoslynCompilerEventSource;
        })(Instrumentation = CodeAnalysis.Instrumentation || (CodeAnalysis.Instrumentation = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var ArrayExtensions = (function () {
            function ArrayExtensions() {
            }
            ArrayExtensions.Copy = function (array, start, length) {
                System.Diagnostics.Debug.Assert(start >= 0);
                System.Diagnostics.Debug.Assert(start <= array.length);
                if (start + length > array.length) {
                    length = array.length - start;
                }
                var newArray = new Array(length);
                TSArray.Copy(array, start, newArray, 0, length);
                return newArray;
            };
            ArrayExtensions.ValueEquals = function (array, other) {
                if (array == other) {
                    return true;
                }
                if (array == null || other == null || array.length != other.length) {
                    return false;
                }
                for (var i = 0; i < array.length; i++) {
                    if (array[i] != other[i]) {
                        return false;
                    }
                }
                return true;
            };
            ArrayExtensions.InsertAt_2794 = function (array, position, item) {
                var newArray = new Array(array.length + 1);
                if (position > 0) {
                    TSArray.Copy(array, newArray, position);
                }
                if (position < array.length) {
                    TSArray.Copy(array, position, newArray, position + 1, array.length - position);
                }
                newArray[position] = item;
                return newArray;
            };
            ArrayExtensions.Append_1186 = function (array, item) {
                return ArrayExtensions.InsertAt_2794(array, array.length, item);
            };
            ArrayExtensions.InsertAt_1940 = function (array, position, items) {
                var newArray = new Array(array.length + items.length);
                if (position > 0) {
                    TSArray.Copy(array, newArray, position);
                }
                if (position < array.length) {
                    TSArray.Copy(array, position, newArray, position + items.length, array.length - position);
                }
                items.CopyTo(newArray, position);
                return newArray;
            };
            ArrayExtensions.Append_1863 = function (array, items) {
                return ArrayExtensions.InsertAt_1940(array, array.length, items);
            };
            ArrayExtensions.RemoveAt_1797 = function (array, position) {
                return ArrayExtensions.RemoveAt_1286(array, position, 1);
            };
            ArrayExtensions.RemoveAt_1286 = function (array, position, length) {
                if (position + length > array.length) {
                    length = array.length - position;
                }
                var newArray = new Array(array.length - length);
                if (position > 0) {
                    TSArray.Copy(array, newArray, position);
                }
                if (position < newArray.length) {
                    TSArray.Copy(array, position + length, newArray, position, newArray.length - position);
                }
                return newArray;
            };
            ArrayExtensions.ReplaceAt_8851 = function (array, position, item) {
                var newArray = new Array(array.length);
                TSArray.Copy(array, newArray, array.length);
                newArray[position] = item;
                return newArray;
            };
            ArrayExtensions.ReplaceAt_9303 = function (array, position, length, items) {
                return ArrayExtensions.InsertAt_1940(ArrayExtensions.RemoveAt_1286(array, position, length), position, items);
            };
            ArrayExtensions.ReverseContents_4458 = function (array) {
                ArrayExtensions.ReverseContents_5048(array, 0, array.length);
            };
            ArrayExtensions.ReverseContents_5048 = function (array, start, count) {
                var end = start + count - 1;
                for (var i = start, j = end; i < j; i++, j--) {
                    var tmp = array[i];
                    array[i] = array[j];
                    array[j] = tmp;
                }
            };
            ArrayExtensions.BinarySearch = function (array, value) {
                var low = 0;
                var high = array.length - 1;
                while (low <= high) {
                    var middle = low + ((high - low) >> 1);
                    var midValue = array[middle];
                    if (midValue == value) {
                        return middle;
                    }
                    else if (midValue > value) {
                        high = middle - 1;
                    }
                    else {
                        low = middle + 1;
                    }
                }
                return ~low;
            };
            return ArrayExtensions;
        })();
        Utilities.ArrayExtensions = ArrayExtensions;
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var ConsList = (function () {
            function ConsList() {
            }
            ConsList.prototype.ctor_4411 = function () {
                this.head = null;
                this.tail = null;
                return this;
            };
            ConsList.prototype.ctor_9301 = function (head, tail) {
                System.Diagnostics.Debug.Assert(tail != null);
                this.head = head;
                this.tail = tail;
                return this;
            };
            Object.defineProperty(ConsList.prototype, "Head", {
                get: function () {
                    System.Diagnostics.Debug.Assert(this != ConsList.Empty);
                    return this.head;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ConsList.prototype, "Tail", {
                get: function () {
                    System.Diagnostics.Debug.Assert(this != ConsList.Empty);
                    return this.tail;
                },
                enumerable: true,
                configurable: true
            });
            ConsList.prototype.Any = function () {
                return this != ConsList.Empty;
            };
            ConsList.prototype.Push = function (value) {
                return new ConsList().ctor_9301(value, this);
            };
            ConsList.prototype.GetEnumerator = function () {
                return new ConsList.Enumerator().ctor_9667(this);
            };
            ConsList.prototype.ToString = function () {
                var result = new System.Text.StringBuilder();
                var any = false;
                for (var list = this; list.tail != null; list = list.tail) {
                    if (any) {
                        result.Append(", ");
                    }
                    result.Append(list.head);
                    any = true;
                }
                result.Append("]");
                return result.ToString();
            };
            ConsList.Empty = new ConsList().ctor_4411();
            return ConsList;
        })();
        Utilities.ConsList = ConsList;
        var ConsList;
        (function (ConsList) {
            var Enumerator = (function () {
                function Enumerator() {
                    this.current = null;
                    this.tail = null;
                }
                Enumerator.prototype.ctor_9667 = function (list) {
                    this.current = null;
                    this.tail = list;
                    return this;
                };
                Object.defineProperty(Enumerator.prototype, "Current", {
                    get: function () {
                        System.Diagnostics.Debug.Assert(this.tail != null);
                        return this.current;
                    },
                    enumerable: true,
                    configurable: true
                });
                Enumerator.prototype.MoveNext = function () {
                    var currentTail = this.tail;
                    var newTail = currentTail.tail;
                    if (newTail != null) {
                        this.current = currentTail.head;
                        this.tail = newTail;
                        return true;
                    }
                    this.current = null;
                    return false;
                };
                Enumerator.prototype.Dispose = function () {
                };
                Enumerator.prototype.Reset = function () {
                    throw new System.NotSupportedException();
                };
                return Enumerator;
            })();
            ConsList.Enumerator = Enumerator;
        })(ConsList = Utilities.ConsList || (Utilities.ConsList = {}));
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var DocumentationCommentXmlNames = (function () {
            function DocumentationCommentXmlNames() {
            }
            DocumentationCommentXmlNames.ElementEquals = function (name1, name2, fromVb) {
                if (fromVb === void 0) { fromVb = false; }
                return System.String.Equals(name1, name2, fromVb ? 4 /* Ordinal */ : 5 /* OrdinalIgnoreCase */);
            };
            DocumentationCommentXmlNames.AttributeEquals = function (name1, name2) {
                return System.String.Equals(name1, name2, 4 /* Ordinal */);
            };
            DocumentationCommentXmlNames.Equals = function (left, right) {
                return left == right;
            };
            DocumentationCommentXmlNames.CElementName = "c";
            DocumentationCommentXmlNames.CodeElementName = "code";
            DocumentationCommentXmlNames.CompletionListElementName = "completionlist";
            DocumentationCommentXmlNames.ExampleElementName = "example";
            DocumentationCommentXmlNames.ExceptionElementName = "exception";
            DocumentationCommentXmlNames.IncludeElementName = "include";
            DocumentationCommentXmlNames.ListElementName = "list";
            DocumentationCommentXmlNames.ParaElementName = "para";
            DocumentationCommentXmlNames.ParameterElementName = "param";
            DocumentationCommentXmlNames.ParameterReferenceElementName = "paramref";
            DocumentationCommentXmlNames.PermissionElementName = "permission";
            DocumentationCommentXmlNames.RemarksElementName = "remarks";
            DocumentationCommentXmlNames.ReturnsElementName = "returns";
            DocumentationCommentXmlNames.SeeElementName = "see";
            DocumentationCommentXmlNames.SeeAlsoElementName = "seealso";
            DocumentationCommentXmlNames.SummaryElementName = "summary";
            DocumentationCommentXmlNames.TypeParameterElementName = "typeparam";
            DocumentationCommentXmlNames.TypeParameterReferenceElementName = "typeparamref";
            DocumentationCommentXmlNames.ValueElementName = "value";
            DocumentationCommentXmlNames.CrefAttributeName = "cref";
            DocumentationCommentXmlNames.NameAttributeName = "name";
            DocumentationCommentXmlNames.FileAttributeName = "file";
            DocumentationCommentXmlNames.PathAttributeName = "path";
            DocumentationCommentXmlNames.TypeAttributeName = "type";
            return DocumentationCommentXmlNames;
        })();
        Utilities.DocumentationCommentXmlNames = DocumentationCommentXmlNames;
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var EnumerableExtensions = (function () {
            function EnumerableExtensions() {
            }
            EnumerableExtensions.Do = function (source, action) {
                if (source == null) {
                    throw new System.ArgumentNullException();
                }
                if (action == null) {
                    throw new System.ArgumentNullException();
                }
                var list = source;
                if (list.Count === void 0) {
                    list = null;
                }
                if (list != null) {
                    for (var i = 0, count = list.Count; i < count; i++) {
                        action(list.$get$(i));
                    }
                }
                else {
                    var valueEnumerator = source.GetEnumerator();
                    try {
                        while (valueEnumerator.MoveNext()) {
                            var value = valueEnumerator.Current;
                            action(value);
                        }
                    }
                    finally {
                        if (valueEnumerator !== null && valueEnumerator.Dispose !== void 0)
                            valueEnumerator.Dispose();
                    }
                }
                return source;
            };
            EnumerableExtensions.Concat = function (source, value) {
                if (source == null) {
                    throw new System.ArgumentNullException();
                }
                return EnumerableExtensions.ConcatWorker(source, value);
            };
            EnumerableExtensions.ConcatWorker = function (source, value) {
                var __result = new Array();
                var vEnumerator = source.GetEnumerator();
                try {
                    while (vEnumerator.MoveNext()) {
                        var v = vEnumerator.Current;
                        __result.push(v);
                    }
                }
                finally {
                    if (vEnumerator !== null && vEnumerator.Dispose !== void 0)
                        vEnumerator.Dispose();
                }
                __result.push(value);
                return __result;
            };
            EnumerableExtensions.IsSingle = function (list) {
                var enumerator = list.GetEnumerator();
                try {
                    return enumerator.MoveNext() && !enumerator.MoveNext();
                }
                finally {
                    if (enumerator != null)
                        enumerator.Dispose();
                }
            };
            EnumerableExtensions.IsEmpty_9700 = function (source) {
                var readOnlyCollection = source;
                if (readOnlyCollection.Count === void 0) {
                    readOnlyCollection = null;
                }
                var str = __as__(source, String);
                if (str != null) {
                    return str.length == 0;
                }
                var tEnumerator = source.GetEnumerator();
                try {
                    while (tEnumerator.MoveNext()) {
                        var t = tEnumerator.Current;
                        return false;
                    }
                }
                finally {
                    if (tEnumerator !== null && tEnumerator.Dispose !== void 0)
                        tEnumerator.Dispose();
                }
                return true;
            };
            EnumerableExtensions.IsEmpty_1287 = function (source) {
                return source.Count == 0;
            };
            EnumerableExtensions.IsEmpty_7933 = function (source) {
                return source.Count == 0;
            };
            EnumerableExtensions.IsEmpty_2124 = function (source) {
                return source.length == 0;
            };
            EnumerableExtensions.IsEmpty_1491 = function (source) {
                return source.length == 0;
            };
            EnumerableExtensions.IsEmpty_7926 = function (source) {
                return source.Count == 0;
            };
            EnumerableExtensions.WhereNotNull = function (source) {
                if (source == null) {
                    return Utilities.SpecializedCollections.EmptyEnumerable();
                }
                return System.Linq.Enumerable.Where(source, EnumerableExtensions.NotNullTest);
            };
            EnumerableExtensions.All = function (source) {
                if (source == null) {
                    throw new System.ArgumentNullException();
                }
                var bEnumerator = source.GetEnumerator();
                try {
                    while (bEnumerator.MoveNext()) {
                        var b = bEnumerator.Current;
                        if (!b) {
                            return false;
                        }
                    }
                }
                finally {
                    if (bEnumerator !== null && bEnumerator.Dispose !== void 0)
                        bEnumerator.Dispose();
                }
                return true;
            };
            EnumerableExtensions.IsSorted = function (enumerable, comparer) {
                var e = enumerable.GetEnumerator();
                try {
                    if (!e.MoveNext()) {
                        return true;
                    }
                    var previous = e.Current;
                    while (e.MoveNext()) {
                        if (comparer.Compare(previous, e.Current) > 0) {
                            return false;
                        }
                        previous = e.Current;
                    }
                    return true;
                }
                finally {
                    if (e != null)
                        e.Dispose();
                }
            };
            EnumerableExtensions.SequenceEqual = function (first, second, comparer) {
                System.Diagnostics.Debug.Assert(comparer != null);
                if (first == second) {
                    return true;
                }
                if (first == null || second == null) {
                    return false;
                }
                var enumerator = first.GetEnumerator();
                try {
                    var enumerator2 = second.GetEnumerator();
                    try {
                        while (enumerator.MoveNext()) {
                            if (!enumerator2.MoveNext() || !comparer(enumerator.Current, enumerator2.Current)) {
                                return false;
                            }
                        }
                        if (enumerator2.MoveNext()) {
                            return false;
                        }
                    }
                    finally {
                        if (enumerator2 != null)
                            enumerator2.Dispose();
                    }
                }
                finally {
                    if (enumerator != null)
                        enumerator.Dispose();
                }
                return true;
            };
            EnumerableExtensions.Contains = function (sequence, predicate) {
                return System.Linq.Enumerable.Any(sequence, predicate);
            };
            EnumerableExtensions.NotNullTest = function (x) { return x != null; };
            return EnumerableExtensions;
        })();
        Utilities.EnumerableExtensions = EnumerableExtensions;
        var EnumerableExtensions;
        (function (EnumerableExtensions) {
            var ComparisonComparer = (function (_super) {
                __extends(ComparisonComparer, _super);
                function ComparisonComparer() {
                    _super.call(this);
                }
                ComparisonComparer.prototype.ctor_7564 = function (compare) {
                    this.compare = compare;
                    return this;
                };
                ComparisonComparer.prototype.Compare = function (x, y) {
                    return this.compare(x, y);
                };
                return ComparisonComparer;
            })(System.Collections.Generic.Comparer);
            EnumerableExtensions.ComparisonComparer = ComparisonComparer;
        })(EnumerableExtensions = Utilities.EnumerableExtensions || (Utilities.EnumerableExtensions = {}));
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var ExceptionUtilities = (function () {
            function ExceptionUtilities() {
            }
            ExceptionUtilities.UnexpectedValue = function (o) {
                var output = System.String.Format("Unexpected value '{0}' of type '{1}'", o, (o != null) ? typeof o : "<unknown>");
                System.Diagnostics.Debug.Assert(false, output);
                return new System.InvalidOperationException(output);
            };
            Object.defineProperty(ExceptionUtilities, "Unreachable", {
                get: function () {
                    return new System.InvalidOperationException("This program location is thought to be unreachable.");
                },
                enumerable: true,
                configurable: true
            });
            return ExceptionUtilities;
        })();
        Utilities.ExceptionUtilities = ExceptionUtilities;
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var Hash = (function () {
            function Hash() {
            }
            Hash.Combine_1641 = function (newKey, currentKey) {
                return ((currentKey * 0xA5555529) + newKey);
            };
            Hash.Combine_1020 = function (newKeyPart, currentKey) {
                return Hash.Combine_1641(currentKey, newKeyPart ? 1 : 0);
            };
            Hash.Combine_7656 = function (newKeyPart, currentKey) {
                var hash = (currentKey * 0xA5555529);
                if (newKeyPart != null) {
                    if (typeof newKeyPart["GetHashCode"] == 'undefined') {
                        throw new System.FunctionRequiredException("there is no GetHashCode function");
                    }
                    return (hash + newKeyPart.GetHashCode());
                }
                return hash;
            };
            Hash.CombineValues_1752 = function (values, stringComparer, maxItemsToHash) {
                if (maxItemsToHash === void 0) { maxItemsToHash = Int32.MaxValue; }
                if (values == null) {
                    return 0;
                }
                var hashCode = 0;
                var count = 0;
                var valueEnumerator = values.GetEnumerator();
                try {
                    while (valueEnumerator.MoveNext()) {
                        var value = valueEnumerator.Current;
                        if (count++ >= maxItemsToHash) {
                            break;
                        }
                        if (value != null) {
                            hashCode = Hash.Combine_1641(stringComparer.GetHashCode(value), hashCode);
                        }
                    }
                }
                finally {
                    if (valueEnumerator !== null && valueEnumerator.Dispose !== void 0)
                        valueEnumerator.Dispose();
                }
                return hashCode;
            };
            Hash.GetFNVHashCode_1519 = function (data) {
                var hashCode = Hash.FnvOffsetBias;
                for (var i = 0; i < data.length; i++) {
                    hashCode = ((hashCode ^ data[i]) * Hash.FnvPrime);
                }
                return hashCode;
            };
            Hash.GetFNVHashCode_6282 = function (data) {
                var hashCode = Hash.FnvOffsetBias;
                for (var i = 0; i < data.Length; i++) {
                    hashCode = ((hashCode ^ data.$get$(i)) * Hash.FnvPrime);
                }
                return hashCode;
            };
            Hash.GetFNVHashCode_8424 = function (text, start, length) {
                var hashCode = Hash.FnvOffsetBias;
                var end = start + length;
                for (var i = start; i < end; i++) {
                    hashCode = ((hashCode ^ text[i].charCodeAt(0)) * Hash.FnvPrime);
                }
                return hashCode;
            };
            Hash.GetFNVHashCode_6588 = function (text, start) {
                return Hash.GetFNVHashCode_8424(text, start, text.length - start);
            };
            Hash.GetFNVHashCode_6086 = function (text) {
                return Hash.CombineFNVHash_1688(Hash.FnvOffsetBias, text);
            };
            Hash.GetFNVHashCode_1874 = function (text) {
                var hashCode = Hash.FnvOffsetBias;
                var end = text.Length;
                for (var i = 0; i < end; i++) {
                    hashCode = ((hashCode ^ text.$get$(i).charCodeAt(0)) * Hash.FnvPrime);
                }
                return hashCode;
            };
            Hash.GetFNVHashCode_1270 = function (text, start, length) {
                var hashCode = Hash.FnvOffsetBias;
                var end = start + length;
                for (var i = start; i < end; i++) {
                    hashCode = ((hashCode ^ text[i].charCodeAt(0)) * Hash.FnvPrime);
                }
                return hashCode;
            };
            Hash.GetFNVHashCode_1818 = function (ch) {
                return Hash.CombineFNVHash_8743(Hash.FnvOffsetBias, ch);
            };
            Hash.CombineFNVHash_1688 = function (hashCode, text) {
                var chEnumerator = text.GetEnumerator();
                try {
                    while (chEnumerator.MoveNext()) {
                        var ch = chEnumerator.Current;
                        hashCode = ((hashCode ^ ch.charCodeAt(0)) * Hash.FnvPrime);
                    }
                }
                finally {
                    if (chEnumerator !== null && chEnumerator.Dispose !== void 0)
                        chEnumerator.Dispose();
                }
                return hashCode;
            };
            Hash.CombineFNVHash_8743 = function (hashCode, ch) {
                return ((hashCode ^ ch.charCodeAt(0)) * Hash.FnvPrime);
            };
            Hash.FnvOffsetBias = 2166136261;
            Hash.FnvPrime = 16777619;
            return Hash;
        })();
        Utilities.Hash = Hash;
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var HashAlgorithm = (function () {
            function HashAlgorithm() {
            }
            return HashAlgorithm;
        })();
        Utilities.HashAlgorithm = HashAlgorithm;
        var SHA1CryptoServiceProvider = (function (_super) {
            __extends(SHA1CryptoServiceProvider, _super);
            function SHA1CryptoServiceProvider() {
                _super.apply(this, arguments);
            }
            return SHA1CryptoServiceProvider;
        })(HashAlgorithm);
        Utilities.SHA1CryptoServiceProvider = SHA1CryptoServiceProvider;
        var SHA256CryptoServiceProvider = (function (_super) {
            __extends(SHA256CryptoServiceProvider, _super);
            function SHA256CryptoServiceProvider() {
                _super.apply(this, arguments);
            }
            return SHA256CryptoServiceProvider;
        })(HashAlgorithm);
        Utilities.SHA256CryptoServiceProvider = SHA256CryptoServiceProvider;
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var ImmutableArrayExtensions = (function () {
            function ImmutableArrayExtensions() {
            }
            ImmutableArrayExtensions.ToImmutableArrayOrEmpty_1791 = function (items) {
                if (items == null) {
                    return System.Collections.Immutable.ImmutableArray.Create();
                }
                return System.Collections.Immutable.ImmutableArray.Create(items);
            };
            ImmutableArrayExtensions.ToImmutableArrayOrEmpty_1553 = function (items) {
                if (items == null) {
                    return System.Collections.Immutable.ImmutableArray.Create();
                }
                return System.Collections.Immutable.ImmutableArray.CreateRange(items);
            };
            ImmutableArrayExtensions.ToImmutableArrayOrEmpty_1007 = function (items) {
                if (items.IsDefault) {
                    return System.Collections.Immutable.ImmutableArray.Create();
                }
                return items;
            };
            return ImmutableArrayExtensions;
        })();
        Utilities.ImmutableArrayExtensions = ImmutableArrayExtensions;
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var KeyValuePair = (function () {
            function KeyValuePair() {
            }
            KeyValuePair.Create = function (key, value) {
                return new System.Collections.Generic.KeyValuePair(key, value);
            };
            return KeyValuePair;
        })();
        Utilities.KeyValuePair = KeyValuePair;
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var SpecializedCollections = (function () {
            function SpecializedCollections() {
            }
            SpecializedCollections.EmptyArray = function () {
                return SpecializedCollections.Empty.Array.Instance;
            };
            SpecializedCollections.EmptyEnumerator = function () {
                return SpecializedCollections.Empty.Enumerator.Instance;
            };
            SpecializedCollections.EmptyEnumerable = function () {
                return SpecializedCollections.Empty.List.Instance;
            };
            SpecializedCollections.EmptyCollection = function () {
                return SpecializedCollections.Empty.List.Instance;
            };
            SpecializedCollections.EmptyList = function () {
                return SpecializedCollections.Empty.List.Instance;
            };
            SpecializedCollections.EmptyReadOnlyList = function () {
                return SpecializedCollections.Empty.List.Instance;
            };
            SpecializedCollections.EmptySet = function () {
                return SpecializedCollections.Empty.Set.Instance;
            };
            SpecializedCollections.EmptyDictionary = function () {
                return SpecializedCollections.Empty.Dictionary.Instance;
            };
            SpecializedCollections.SingletonEnumerable = function (value) {
                return new SpecializedCollections.Singleton.Collection(value);
            };
            SpecializedCollections.SingletonCollection = function (value) {
                return new SpecializedCollections.Singleton.Collection(value);
            };
            SpecializedCollections.SingletonEnumerator = function (value) {
                return new SpecializedCollections.Singleton.Enumerator(value);
            };
            SpecializedCollections.ReadOnlyEnumerable = function (values) {
                return new SpecializedCollections.ReadOnly.Enumerable(values);
            };
            SpecializedCollections.ReadOnlyCollection = function (collection) {
                return collection == null || collection.Count == 0 ? SpecializedCollections.EmptyCollection() : new SpecializedCollections.ReadOnly.Collection(collection);
            };
            return SpecializedCollections;
        })();
        Utilities.SpecializedCollections = SpecializedCollections;
        var SpecializedCollections;
        (function (SpecializedCollections) {
            var Empty = (function () {
                function Empty() {
                }
                return Empty;
            })();
            SpecializedCollections.Empty = Empty;
            var Empty;
            (function (Empty) {
                var Array = (function () {
                    function Array() {
                    }
                    Array.Instance = [];
                    return Array;
                })();
                Empty.Array = Array;
                SpecializedCollections.EmptyBytes = SpecializedCollections.EmptyArray();
                SpecializedCollections.EmptyObjects = SpecializedCollections.EmptyArray();
                var Enumerator = (function () {
                    function Enumerator() {
                    }
                    Object.defineProperty(Enumerator.prototype, "Current", {
                        get: function () {
                            throw new System.InvalidOperationException();
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Enumerator.prototype.MoveNext = function () {
                        return false;
                    };
                    Enumerator.prototype.Reset = function () {
                        throw new System.InvalidOperationException();
                    };
                    Enumerator.prototype.Dispose = function () {
                    };
                    Enumerator.Instance = new Enumerator();
                    return Enumerator;
                })();
                Empty.Enumerator = Enumerator;
                var Enumerable = (function () {
                    function Enumerable() {
                        this.enumerator = Empty.Enumerator.Instance;
                    }
                    Enumerable.prototype.GetEnumerator = function () {
                        return this.enumerator;
                    };
                    return Enumerable;
                })();
                Empty.Enumerable = Enumerable;
                var Collection = (function (_super) {
                    __extends(Collection, _super);
                    function Collection() {
                        _super.call(this);
                    }
                    Collection.prototype.Add = function (item) {
                        throw new System.NotSupportedException();
                    };
                    Collection.prototype.Clear = function () {
                    };
                    Collection.prototype.Contains = function (item) {
                        return false;
                    };
                    Collection.prototype.CopyTo = function (array, arrayIndex) {
                    };
                    Object.defineProperty(Collection.prototype, "Count", {
                        get: function () {
                            return 0;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Collection.prototype, "IsReadOnly", {
                        get: function () {
                            return true;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Collection.prototype.Remove = function (item) {
                        throw new System.NotSupportedException();
                    };
                    Collection.Instance = new Collection();
                    return Collection;
                })(Roslyn.Utilities.SpecializedCollections.Empty.Enumerable);
                Empty.Collection = Collection;
                var Dictionary = (function (_super) {
                    __extends(Dictionary, _super);
                    function Dictionary() {
                        _super.call(this);
                    }
                    Dictionary.prototype.Add = function (key, value) {
                        throw new System.NotSupportedException();
                    };
                    Dictionary.prototype.ContainsKey = function (key) {
                        return false;
                    };
                    Object.defineProperty(Dictionary.prototype, "Keys", {
                        get: function () {
                            return Roslyn.Utilities.SpecializedCollections.Empty.Collection.Instance;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Dictionary.prototype.Remove = function (key, value) {
                        throw new System.NotSupportedException();
                    };
                    Dictionary.prototype.TryGetValue = function (key, value) {
                        value.refObj = null;
                        return false;
                    };
                    Object.defineProperty(Dictionary.prototype, "Values", {
                        get: function () {
                            return Roslyn.Utilities.SpecializedCollections.Empty.Collection.Instance;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Dictionary.prototype.$get$ = function (key) {
                        throw new System.NotSupportedException();
                    };
                    Dictionary.prototype.$set$ = function (key, value) {
                        throw new System.NotSupportedException();
                    };
                    Dictionary.Instance = new Dictionary();
                    return Dictionary;
                })(Collection);
                Empty.Dictionary = Dictionary;
                var List = (function (_super) {
                    __extends(List, _super);
                    function List() {
                        _super.call(this);
                    }
                    List.prototype.IndexOf = function (item) {
                        return -1;
                    };
                    List.prototype.Insert = function (index, item) {
                        throw new System.NotSupportedException();
                    };
                    List.prototype.RemoveAt = function (index) {
                        throw new System.NotSupportedException();
                    };
                    List.prototype.$get$ = function (index) {
                        throw new System.ArgumentOutOfRangeException("index");
                    };
                    List.prototype.$set$ = function (index, value) {
                        throw new System.NotSupportedException();
                    };
                    List.Instance = new List();
                    return List;
                })(Roslyn.Utilities.SpecializedCollections.Empty.Collection);
                Empty.List = List;
                var Set = (function (_super) {
                    __extends(Set, _super);
                    function Set() {
                        _super.call(this);
                    }
                    Set.prototype.Add = function (item) {
                        throw new System.NotImplementedException();
                    };
                    Set.prototype.ExceptWith = function (other) {
                        throw new System.NotImplementedException();
                    };
                    Set.prototype.IntersectWith = function (other) {
                        throw new System.NotImplementedException();
                    };
                    Set.prototype.IsProperSubsetOf = function (other) {
                        throw new System.NotImplementedException();
                    };
                    Set.prototype.IsProperSupersetOf = function (other) {
                        throw new System.NotImplementedException();
                    };
                    Set.prototype.IsSubsetOf = function (other) {
                        throw new System.NotImplementedException();
                    };
                    Set.prototype.IsSupersetOf = function (other) {
                        throw new System.NotImplementedException();
                    };
                    Set.prototype.Overlaps = function (other) {
                        throw new System.NotImplementedException();
                    };
                    Set.prototype.SetEquals = function (other) {
                        throw new System.NotImplementedException();
                    };
                    Set.prototype.SymmetricExceptWith = function (other) {
                        throw new System.NotImplementedException();
                    };
                    Set.prototype.UnionWith = function (other) {
                        throw new System.NotImplementedException();
                    };
                    Set.prototype.GetEnumerator = function () {
                        return Roslyn.Utilities.SpecializedCollections.Empty.Set.Instance.GetEnumerator();
                    };
                    Set.Instance = new Set();
                    return Set;
                })(Roslyn.Utilities.SpecializedCollections.Empty.Collection);
                Empty.Set = Set;
            })(Empty = SpecializedCollections.Empty || (SpecializedCollections.Empty = {}));
            var ReadOnly;
            (function (ReadOnly) {
                var Enumerable = (function () {
                    function Enumerable(underlying) {
                        this.Underlying = null;
                        this.Underlying = underlying;
                    }
                    Enumerable.prototype.GetEnumerator = function () {
                        return this.Underlying.GetEnumerator();
                    };
                    return Enumerable;
                })();
                ReadOnly.Enumerable = Enumerable;
                var Collection = (function (_super) {
                    __extends(Collection, _super);
                    function Collection(underlying) {
                        _super.call(this, underlying);
                    }
                    Collection.prototype.Add = function (item) {
                        throw new System.NotSupportedException();
                    };
                    Collection.prototype.Clear = function () {
                        throw new System.NotSupportedException();
                    };
                    Collection.prototype.Contains = function (item) {
                        return this.Underlying.Contains(item);
                    };
                    Collection.prototype.CopyTo = function (array, arrayIndex) {
                        this.Underlying.CopyTo(array, arrayIndex);
                    };
                    Object.defineProperty(Collection.prototype, "Count", {
                        get: function () {
                            return this.Underlying.Count;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Collection.prototype, "IsReadOnly", {
                        get: function () {
                            return true;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Collection.prototype.Remove = function (item) {
                        throw new System.NotSupportedException();
                    };
                    return Collection;
                })(Roslyn.Utilities.SpecializedCollections.ReadOnly.Enumerable);
                ReadOnly.Collection = Collection;
                var Set = (function (_super) {
                    __extends(Set, _super);
                    function Set(underlying) {
                        _super.call(this, underlying);
                    }
                    Set.prototype.Add = function (item) {
                        throw new System.NotSupportedException();
                    };
                    Set.prototype.ExceptWith = function (other) {
                        throw new System.NotSupportedException();
                    };
                    Set.prototype.IntersectWith = function (other) {
                        throw new System.NotSupportedException();
                    };
                    Set.prototype.IsProperSubsetOf = function (other) {
                        return this.Underlying.IsProperSubsetOf(other);
                    };
                    Set.prototype.IsProperSupersetOf = function (other) {
                        return this.Underlying.IsProperSupersetOf(other);
                    };
                    Set.prototype.IsSubsetOf = function (other) {
                        return this.Underlying.IsSubsetOf(other);
                    };
                    Set.prototype.IsSupersetOf = function (other) {
                        return this.Underlying.IsSupersetOf(other);
                    };
                    Set.prototype.Overlaps = function (other) {
                        return this.Underlying.Overlaps(other);
                    };
                    Set.prototype.SetEquals = function (other) {
                        return this.Underlying.SetEquals(other);
                    };
                    Set.prototype.SymmetricExceptWith = function (other) {
                        throw new System.NotSupportedException();
                    };
                    Set.prototype.UnionWith = function (other) {
                        throw new System.NotSupportedException();
                    };
                    return Set;
                })(Roslyn.Utilities.SpecializedCollections.ReadOnly.Collection);
                ReadOnly.Set = Set;
            })(ReadOnly = SpecializedCollections.ReadOnly || (SpecializedCollections.ReadOnly = {}));
            var Singleton;
            (function (Singleton) {
                var Collection = (function () {
                    function Collection(value) {
                        this.loneValue = null;
                        this.loneValue = value;
                    }
                    Collection.prototype.Add = function (item) {
                        throw new System.NotSupportedException();
                    };
                    Collection.prototype.Clear = function () {
                        throw new System.NotSupportedException();
                    };
                    Collection.prototype.Contains = function (item) {
                        return System.Collections.Generic.EqualityComparer.Default.Equals(this.loneValue, item);
                    };
                    Collection.prototype.CopyTo = function (array, arrayIndex) {
                        array[arrayIndex] = this.loneValue;
                    };
                    Object.defineProperty(Collection.prototype, "Count", {
                        get: function () {
                            return 1;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Collection.prototype, "IsReadOnly", {
                        get: function () {
                            return true;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Collection.prototype.Remove = function (item) {
                        throw new System.NotSupportedException();
                    };
                    Collection.prototype.GetEnumerator = function () {
                        return new Roslyn.Utilities.SpecializedCollections.Singleton.Enumerator(this.loneValue);
                    };
                    return Collection;
                })();
                Singleton.Collection = Collection;
                var Enumerator = (function () {
                    function Enumerator(value) {
                        this.loneValue = null;
                        this.moveNextCalled = false;
                        this.loneValue = value;
                        this.moveNextCalled = false;
                    }
                    Object.defineProperty(Enumerator.prototype, "Current", {
                        get: function () {
                            return this.loneValue;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Enumerator.prototype.Dispose = function () {
                    };
                    Enumerator.prototype.MoveNext = function () {
                        if (!this.moveNextCalled) {
                            this.moveNextCalled = true;
                            return true;
                        }
                        return false;
                    };
                    Enumerator.prototype.Reset = function () {
                        this.moveNextCalled = false;
                    };
                    return Enumerator;
                })();
                Singleton.Enumerator = Enumerator;
            })(Singleton = SpecializedCollections.Singleton || (SpecializedCollections.Singleton = {}));
        })(SpecializedCollections = Utilities.SpecializedCollections || (Utilities.SpecializedCollections = {}));
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var StringExtensions = (function () {
            function StringExtensions() {
            }
            StringExtensions.Join = function (source, separator) {
                if (source == null) {
                    throw new System.ArgumentNullException();
                }
                if (separator == null) {
                    throw new System.ArgumentNullException();
                }
                return System.String.Join(separator, source);
            };
            StringExtensions.NeedsLocalization = function (value) {
                return value;
            };
            StringExtensions.LooksLikeInterfaceName = function (name) {
                return name.length >= 3 && name[0] == 'I' && System.String.IsUpper(name[1]) && System.String.IsLower(name[2]);
            };
            StringExtensions.LooksLikeTypeParameterName = function (name) {
                return name.length >= 3 && name[0] == 'T' && System.String.IsUpper(name[1]) && System.String.IsLower(name[2]);
            };
            StringExtensions.ToPascalCase = function (shortName, trimLeadingTypePrefix) {
                if (trimLeadingTypePrefix === void 0) { trimLeadingTypePrefix = true; }
                return StringExtensions.ConvertCase(shortName, trimLeadingTypePrefix, StringExtensions.toUpper);
            };
            StringExtensions.ToCamelCase = function (shortName, trimLeadingTypePrefix) {
                if (trimLeadingTypePrefix === void 0) { trimLeadingTypePrefix = true; }
                return StringExtensions.ConvertCase(shortName, trimLeadingTypePrefix, StringExtensions.toLower);
            };
            StringExtensions.ConvertCase = function (shortName, trimLeadingTypePrefix, convert) {
                if (!System.String.IsNullOrEmpty(shortName)) {
                    if (trimLeadingTypePrefix && (StringExtensions.LooksLikeInterfaceName(shortName) || StringExtensions.LooksLikeTypeParameterName(shortName))) {
                        return convert(shortName[1]) + shortName.substr(2);
                    }
                    if (convert(shortName[0]) != shortName[0]) {
                        return convert(shortName[0]) + shortName.substr(1);
                    }
                }
                return shortName;
            };
            StringExtensions.IsValidClrTypeName = function (name) {
                return !System.String.IsNullOrEmpty(name) && name.indexOf('\0') == -1;
            };
            StringExtensions.IsValidClrNamespaceName = function (name) {
                if (System.String.IsNullOrEmpty(name)) {
                    return false;
                }
                var lastChar = '.';
                var cEnumerator = name.GetEnumerator();
                try {
                    while (cEnumerator.MoveNext()) {
                        var c = cEnumerator.Current;
                        if (c == '\0' || (c == '.' && lastChar == '.')) {
                            return false;
                        }
                        lastChar = c;
                    }
                }
                finally {
                    if (cEnumerator !== null && cEnumerator.Dispose !== void 0)
                        cEnumerator.Dispose();
                }
                return lastChar != '.';
            };
            StringExtensions.GetWithSingleAttributeSuffix = function (name, isCaseSensitive) {
                var cleaned = name;
                while ((cleaned = StringExtensions.GetWithoutAttributeSuffix(cleaned, isCaseSensitive)) != null) {
                    name = cleaned;
                }
                return name + "Attribute";
            };
            StringExtensions.TryGetWithoutAttributeSuffix_1927 = function (name, result) {
                return StringExtensions.TryGetWithoutAttributeSuffix_1131(name, true, result);
            };
            StringExtensions.GetWithoutAttributeSuffix = function (name, isCaseSensitive) {
                var result = null;
                var result_ref0 = { refObj: result };
                var ret_val__200 = StringExtensions.TryGetWithoutAttributeSuffix_1131(name, isCaseSensitive, result_ref0);
                result = result_ref0.refObj;
                return ret_val__200 ? result : null;
            };
            StringExtensions.TryGetWithoutAttributeSuffix_1131 = function (name, isCaseSensitive, result) {
                var AttributeSuffix = "Attribute";
                var comparison = isCaseSensitive ? 4 /* Ordinal */ : 5 /* OrdinalIgnoreCase */;
                if (name.length > AttributeSuffix.length && name.EndsWith(AttributeSuffix, comparison)) {
                    result.refObj = name.substr(0, name.length - AttributeSuffix.length);
                    return true;
                }
                result.refObj = null;
                return false;
            };
            StringExtensions.IsValidUnicodeString = function (str) {
                return true;
            };
            StringExtensions.Unquote_5789 = function (arg) {
                var quoted = false;
                var quoted_ref0 = { refObj: quoted };
                var ret_val__974 = StringExtensions.Unquote_7452(arg, quoted_ref0);
                quoted = quoted_ref0.refObj;
                return ret_val__974;
            };
            StringExtensions.Unquote_7452 = function (arg, quoted) {
                if (arg.length > 1 && arg[0] == '"' && arg[arg.length - 1] == '"') {
                    quoted.refObj = true;
                    return arg.substr(1, arg.length - 2);
                }
                else {
                    quoted.refObj = false;
                    return arg;
                }
            };
            StringExtensions.First = function (arg) {
                return arg[0];
            };
            StringExtensions.Last = function (arg) {
                return arg[arg.length - 1];
            };
            StringExtensions.All = function (arg, predicate) {
                var cEnumerator = arg.GetEnumerator();
                try {
                    while (cEnumerator.MoveNext()) {
                        var c = cEnumerator.Current;
                        if (!predicate(c)) {
                            return false;
                        }
                    }
                }
                finally {
                    if (cEnumerator !== null && cEnumerator.Dispose !== void 0)
                        cEnumerator.Dispose();
                }
                return true;
            };
            StringExtensions.toLower = System.String.ToLower;
            StringExtensions.toUpper = System.String.ToUpper;
            return StringExtensions;
        })();
        Utilities.StringExtensions = StringExtensions;
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var StringTable = (function () {
            function StringTable() {
                this.localTable = StructArray(StringTable.Entry, StringTable.LocalSize);
                this.localRandom = System.Environment.TickCount;
            }
            StringTable.prototype.ctor_1032 = function () {
                this.ctor_2526(null);
                return this;
            };
            StringTable.prototype.ctor_2526 = function (pool) {
                this.pool = pool;
                return this;
            };
            StringTable.CreatePool = function () {
                var pool = null;
                pool = new Utilities.ObjectPool().ctor_5203(function () { return new StringTable().ctor_2526(pool); }, System.Environment.ProcessorCount * 2);
                return pool;
            };
            StringTable.GetInstance = function () {
                return StringTable.StaticPool.Allocate();
            };
            StringTable.prototype.Free = function () {
                this.pool.Free(this);
            };
            StringTable.prototype.Add_5745 = function (chars, start, len) {
                var hashCode = Utilities.Hash.GetFNVHashCode_1270(chars, start, len);
                var arr = this.localTable;
                var idx = StringTable.LocalIdxFromHash(hashCode);
                var text = arr[idx].Text;
                if (text != null && arr[idx].HashCode == hashCode) {
                    var result = arr[idx].Text;
                    if (StringTable.TextEquals_2659(result, chars, start, len)) {
                        return result;
                    }
                }
                var shared = StringTable.FindSharedEntry_8276(chars, start, len, hashCode);
                if (shared != null) {
                    arr[idx].HashCode = hashCode;
                    arr[idx].Text = shared;
                    return shared;
                }
                return this.AddItem_1779(chars, start, len, hashCode);
            };
            StringTable.prototype.Add_2770 = function (chars, start, len) {
                var hashCode = Utilities.Hash.GetFNVHashCode_8424(chars, start, len);
                var arr = this.localTable;
                var idx = StringTable.LocalIdxFromHash(hashCode);
                var text = arr[idx].Text;
                if (text != null && arr[idx].HashCode == hashCode) {
                    var result = arr[idx].Text;
                    if (StringTable.TextEquals_1395(result, chars, start, len)) {
                        return result;
                    }
                }
                var shared = StringTable.FindSharedEntry_1588(chars, start, len, hashCode);
                if (shared != null) {
                    arr[idx].HashCode = hashCode;
                    arr[idx].Text = shared;
                    return shared;
                }
                return this.AddItem_2078(chars, start, len, hashCode);
            };
            StringTable.prototype.Add_1301 = function (chars) {
                var hashCode = Utilities.Hash.GetFNVHashCode_1818(chars);
                var arr = this.localTable;
                var idx = StringTable.LocalIdxFromHash(hashCode);
                var text = arr[idx].Text;
                if (text != null) {
                    var result = arr[idx].Text;
                    if (text.length == 1 && text[0] == chars) {
                        return result;
                    }
                }
                var shared = StringTable.FindSharedEntry_2038(chars, hashCode);
                if (shared != null) {
                    arr[idx].HashCode = hashCode;
                    arr[idx].Text = shared;
                    return shared;
                }
                return this.AddItem_1837(chars, hashCode);
            };
            StringTable.prototype.Add_1270 = function (chars) {
                var hashCode = Utilities.Hash.GetFNVHashCode_1874(chars);
                var arr = this.localTable;
                var idx = StringTable.LocalIdxFromHash(hashCode);
                var text = arr[idx].Text;
                if (text != null && arr[idx].HashCode == hashCode) {
                    var result = arr[idx].Text;
                    if (StringTable.TextEquals_1689(result, chars)) {
                        return result;
                    }
                }
                var shared = StringTable.FindSharedEntry_1080(chars, hashCode);
                if (shared != null) {
                    arr[idx].HashCode = hashCode;
                    arr[idx].Text = shared;
                    return shared;
                }
                return this.AddItem_1988(chars, hashCode);
            };
            StringTable.prototype.Add_2003 = function (chars) {
                var hashCode = Utilities.Hash.GetFNVHashCode_6086(chars);
                var arr = this.localTable;
                var idx = StringTable.LocalIdxFromHash(hashCode);
                var text = arr[idx].Text;
                if (text != null && arr[idx].HashCode == hashCode) {
                    var result = arr[idx].Text;
                    if (result == chars) {
                        return result;
                    }
                }
                var shared = StringTable.FindSharedEntry_2102(chars, hashCode);
                if (shared != null) {
                    arr[idx].HashCode = hashCode;
                    arr[idx].Text = shared;
                    return shared;
                }
                this.AddCore(chars, hashCode);
                return chars;
            };
            StringTable.FindSharedEntry_8276 = function (chars, start, len, hashCode) {
                var arr = StringTable.sharedTable;
                var idx = StringTable.SharedIdxFromHash(hashCode);
                var e = null;
                for (var i = 1; i < StringTable.SharedBucketSize + 1; i++) {
                    e = arr[idx].Text;
                    var hash = arr[idx].HashCode;
                    if (e != null) {
                        if (hash == hashCode && StringTable.TextEquals_2659(e, chars, start, len)) {
                            break;
                        }
                        e = null;
                    }
                    else {
                        break;
                    }
                    idx = (idx + i) & StringTable.SharedSizeMask;
                }
                return e;
            };
            StringTable.FindSharedEntry_1588 = function (chars, start, len, hashCode) {
                var arr = StringTable.sharedTable;
                var idx = StringTable.SharedIdxFromHash(hashCode);
                var e = null;
                for (var i = 1; i < StringTable.SharedBucketSize + 1; i++) {
                    e = arr[idx].Text;
                    var hash = arr[idx].HashCode;
                    if (e != null) {
                        if (hash == hashCode && StringTable.TextEquals_1395(e, chars, start, len)) {
                            break;
                        }
                        e = null;
                    }
                    else {
                        break;
                    }
                    idx = (idx + i) & StringTable.SharedSizeMask;
                }
                return e;
            };
            StringTable.FindSharedEntry_2038 = function (chars, hashCode) {
                var arr = StringTable.sharedTable;
                var idx = StringTable.SharedIdxFromHash(hashCode);
                var e = null;
                for (var i = 1; i < StringTable.SharedBucketSize + 1; i++) {
                    e = arr[idx].Text;
                    if (e != null) {
                        if (e.length == 1 && e[0] == chars) {
                            break;
                        }
                        e = null;
                    }
                    else {
                        break;
                    }
                    idx = (idx + i) & StringTable.SharedSizeMask;
                }
                return e;
            };
            StringTable.FindSharedEntry_1080 = function (chars, hashCode) {
                var arr = StringTable.sharedTable;
                var idx = StringTable.SharedIdxFromHash(hashCode);
                var e = null;
                for (var i = 1; i < StringTable.SharedBucketSize + 1; i++) {
                    e = arr[idx].Text;
                    var hash = arr[idx].HashCode;
                    if (e != null) {
                        if (hash == hashCode && StringTable.TextEquals_1689(e, chars)) {
                            break;
                        }
                        e = null;
                    }
                    else {
                        break;
                    }
                    idx = (idx + i) & StringTable.SharedSizeMask;
                }
                return e;
            };
            StringTable.FindSharedEntry_2102 = function (chars, hashCode) {
                var arr = StringTable.sharedTable;
                var idx = StringTable.SharedIdxFromHash(hashCode);
                var e = null;
                for (var i = 1; i < StringTable.SharedBucketSize + 1; i++) {
                    e = arr[idx].Text;
                    var hash = arr[idx].HashCode;
                    if (e != null) {
                        if (hash == hashCode && e == chars) {
                            break;
                        }
                        e = null;
                    }
                    else {
                        break;
                    }
                    idx = (idx + i) & StringTable.SharedSizeMask;
                }
                return e;
            };
            StringTable.prototype.AddItem_1779 = function (chars, start, len, hashCode) {
                var text = Gb.StringFromCharArray(chars, start, len);
                this.AddCore(text, hashCode);
                return text;
            };
            StringTable.prototype.AddItem_2078 = function (chars, start, len, hashCode) {
                var text = chars.substr(start, len);
                this.AddCore(chars, hashCode);
                return text;
            };
            StringTable.prototype.AddItem_1837 = function (chars, hashCode) {
                var text = Gb.StringFromChar(chars, 1);
                this.AddCore(text, hashCode);
                return text;
            };
            StringTable.prototype.AddItem_1988 = function (chars, hashCode) {
                var text = chars.ToString();
                this.AddCore(text, hashCode);
                return text;
            };
            StringTable.prototype.AddCore = function (chars, hashCode) {
                this.AddSharedEntry(hashCode, chars);
                var arr = this.localTable;
                var idx = StringTable.LocalIdxFromHash(hashCode);
                arr[idx].HashCode = hashCode;
                arr[idx].Text = chars;
            };
            StringTable.prototype.AddSharedEntry = function (hashCode, text) {
                var arr = StringTable.sharedTable;
                var idx = StringTable.SharedIdxFromHash(hashCode);
                var curIdx = idx;
                foundIdx: while (true) {
                    for (var i = 1; i < StringTable.SharedBucketSize + 1; i++) {
                        if (arr[curIdx].Text == null) {
                            idx = curIdx;
                            break foundIdx;
                        }
                        curIdx = (curIdx + i) & StringTable.SharedSizeMask;
                    }
                    var i1 = this.LocalNextRandom() & StringTable.SharedBucketSizeMask;
                    idx = (idx + (((i1 * i1 + i1) / 2 | 0))) & StringTable.SharedSizeMask;
                    break;
                }
                arr[idx].HashCode = hashCode;
                arr[idx].Text = text;
            };
            StringTable.AddShared = function (chars) {
                var hashCode = Utilities.Hash.GetFNVHashCode_1874(chars);
                var shared = StringTable.FindSharedEntry_1080(chars, hashCode);
                if (shared != null) {
                    return shared;
                }
                return StringTable.AddSharedSlow_9166(hashCode, chars);
            };
            StringTable.AddSharedSlow_9166 = function (hashCode, builder) {
                var text = builder.ToString();
                StringTable.AddSharedSlow_6583(hashCode, text);
                return text;
            };
            StringTable.AddSharedSlow_6583 = function (hashCode, text) {
                var arr = StringTable.sharedTable;
                var idx = StringTable.SharedIdxFromHash(hashCode);
                var curIdx = idx;
                foundIdx: while (true) {
                    for (var i = 1; i < StringTable.SharedBucketSize + 1; i++) {
                        if (arr[curIdx].Text == null) {
                            idx = curIdx;
                            break foundIdx;
                        }
                        curIdx = (curIdx + i) & StringTable.SharedSizeMask;
                    }
                    var i1 = StringTable.SharedNextRandom() & StringTable.SharedBucketSizeMask;
                    idx = (idx + (((i1 * i1 + i1) / 2 | 0))) & StringTable.SharedSizeMask;
                    break;
                }
                arr[idx].HashCode = hashCode;
                var Text_ref0 = { refObj: arr[idx].Text };
                System.Threading.Volatile.Write(Text_ref0, text);
                arr[idx].Text = Text_ref0.refObj;
                ;
            };
            StringTable.LocalIdxFromHash = function (hash) {
                return hash & StringTable.LocalSizeMask;
            };
            StringTable.SharedIdxFromHash = function (hash) {
                return (hash ^ (hash >> StringTable.LocalSizeBits)) & StringTable.SharedSizeMask;
            };
            StringTable.prototype.LocalNextRandom = function () {
                return this.localRandom++;
            };
            StringTable.SharedNextRandom = function () {
                StringTable.sharedRandom++;
                return StringTable.sharedRandom;
            };
            StringTable.TextEquals_1395 = function (array, text, start, length) {
                if (array.length != length) {
                    return false;
                }
                for (var i = 0; i < array.length; i++) {
                    if (array[i] != text[start + i]) {
                        return false;
                    }
                }
                return true;
            };
            StringTable.TextEquals_1689 = function (array, text) {
                if (array.length != text.Length) {
                    return false;
                }
                for (var i = array.length - 1; i >= 0; i--) {
                    if (array[i] != text.$get$(i)) {
                        return false;
                    }
                }
                return true;
            };
            StringTable.TextEquals_2659 = function (array, text, start, length) {
                return array.length == length && StringTable.TextEqualsCore(array, text, start);
            };
            StringTable.TextEqualsCore = function (array, text, start) {
                var s = start;
                for (var i = 0; i < array.length; i++) {
                    if (array[i] != text[s]) {
                        return false;
                    }
                    s++;
                }
                return true;
            };
            StringTable.LocalSizeBits = 11;
            StringTable.LocalSize = (1 << StringTable.LocalSizeBits);
            StringTable.LocalSizeMask = StringTable.LocalSize - 1;
            StringTable.SharedSizeBits = 16;
            StringTable.SharedSize = (1 << StringTable.SharedSizeBits);
            StringTable.SharedSizeMask = StringTable.SharedSize - 1;
            StringTable.SharedBucketBits = 4;
            StringTable.SharedBucketSize = (1 << StringTable.SharedBucketBits);
            StringTable.SharedBucketSizeMask = StringTable.SharedBucketSize - 1;
            StringTable.sharedRandom = System.Environment.TickCount;
            StringTable.StaticPool = StringTable.CreatePool();
            return StringTable;
        })();
        Utilities.StringTable = StringTable;
        var StringTable;
        (function (StringTable) {
            var Entry = (function () {
                function Entry() {
                    this.HashCode = 0;
                    this.Text = null;
                }
                return Entry;
            })();
            StringTable.Entry = Entry;
        })(StringTable = Utilities.StringTable || (Utilities.StringTable = {}));
        StringTable.sharedTable = StructArray(StringTable.Entry, StringTable.SharedSize);
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var TextChangeRangeExtensions = (function () {
            function TextChangeRangeExtensions() {
            }
            TextChangeRangeExtensions.Accumulate = function (accumulatedTextChangeSoFar, changesInNextVersion) {
                if (!System.Linq.Enumerable.Any(changesInNextVersion)) {
                    return accumulatedTextChangeSoFar;
                }
                var newChange = Microsoft.CodeAnalysis.Text.TextChangeRange.Collapse(changesInNextVersion);
                if (accumulatedTextChangeSoFar == null) {
                    return newChange;
                }
                var currentStart = accumulatedTextChangeSoFar.Span.Start;
                var currentOldEnd = accumulatedTextChangeSoFar.Span.End;
                var currentNewEnd = accumulatedTextChangeSoFar.Span.Start + accumulatedTextChangeSoFar.NewLength;
                if (newChange.Span.Start < currentStart) {
                    currentStart = newChange.Span.Start;
                }
                if (currentNewEnd > newChange.Span.End) {
                    currentNewEnd = currentNewEnd + newChange.NewLength - newChange.Span.Length;
                }
                else {
                    currentOldEnd = currentOldEnd + newChange.Span.End - currentNewEnd;
                    currentNewEnd = newChange.Span.Start + newChange.NewLength;
                }
                return new Microsoft.CodeAnalysis.Text.TextChangeRange().ctor_4786(Microsoft.CodeAnalysis.Text.TextSpan.FromBounds(currentStart, currentOldEnd), currentNewEnd - currentStart);
            };
            return TextChangeRangeExtensions;
        })();
        Utilities.TextChangeRangeExtensions = TextChangeRangeExtensions;
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var TextKeyedCache = (function () {
            function TextKeyedCache() {
                this.localTable = StructArray(TextKeyedCache.LocalEntry, TextKeyedCache.LocalSize);
            }
            TextKeyedCache.StaticConstructor = function () {
                TextKeyedCache.wrap_sharedTable.NewFunc = function () {
                    return StructArray(TextKeyedCache.SharedEntry, TextKeyedCache.SharedSize);
                };
                TextKeyedCache.wrap_StaticPool.NewFunc = function () {
                    return TextKeyedCache.CreatePool();
                };
                return 1;
            };
            TextKeyedCache.prototype.ctor_1063 = function () {
                this.ctor_3603(null);
                return this;
            };
            TextKeyedCache.prototype.ctor_3603 = function (pool) {
                this.pool = pool;
                this.strings = new Utilities.StringTable().ctor_1032();
                return this;
            };
            TextKeyedCache.CreatePool = function () {
                var pool = null;
                pool = new Utilities.ObjectPool().ctor_5203(function () { return new TextKeyedCache().ctor_3603(pool); }, System.Environment.ProcessorCount * 4);
                return pool;
            };
            TextKeyedCache.GetInstance = function (clss) {
                return TextKeyedCache.wrap_StaticPool.RegisterOrGet(clss).Allocate();
            };
            TextKeyedCache.prototype.Free = function () {
                this.pool.Free(this);
            };
            TextKeyedCache.prototype.FindItem = function (chars, start, len, hashCode) {
                var arr = this.localTable;
                var idx = TextKeyedCache.LocalIdxFromHash(hashCode);
                var text = arr[idx].Text;
                if (text != null && arr[idx].HashCode == hashCode) {
                    if (Utilities.StringTable.TextEquals_2659(text, chars, start, len)) {
                        return arr[idx].Item;
                    }
                }
                var e = this.FindSharedEntry(chars, start, len, hashCode);
                if (e != null) {
                    arr[idx].HashCode = hashCode;
                    arr[idx].Text = e.Text;
                    var tk = e.Item;
                    arr[idx].Item = tk;
                    return tk;
                }
                return null;
            };
            TextKeyedCache.prototype.FindSharedEntry = function (chars, start, len, hashCode) {
                if (this.sharedTableInst == null) {
                    return null;
                }
                var arr = this.sharedTableInst;
                var idx = TextKeyedCache.SharedIdxFromHash(hashCode);
                var e = null;
                for (var i = 1; i < TextKeyedCache.SharedBucketSize + 1; i++) {
                    e = arr[idx].Entry;
                    var hash = arr[idx].HashCode;
                    if (e != null) {
                        if (hash == hashCode && Utilities.StringTable.TextEquals_2659(e.Text, chars, start, len)) {
                            break;
                        }
                        e = null;
                    }
                    else {
                        break;
                    }
                    idx = (idx + i) & TextKeyedCache.SharedSizeMask;
                }
                return e;
            };
            TextKeyedCache.prototype.AddItem = function (chars, start, len, hashCode, item) {
                var text = this.strings.Add_5745(chars, start, len);
                var e = new TextKeyedCache.SharedEntryValue().ctor_2137(text, item);
                this.AddSharedEntry(hashCode, e);
                var arr = this.localTable;
                var idx = TextKeyedCache.LocalIdxFromHash(hashCode);
                arr[idx].HashCode = hashCode;
                arr[idx].Text = text;
                arr[idx].Item = item;
            };
            TextKeyedCache.prototype.AddSharedEntry = function (hashCode, e) {
                this.sharedTableInst = TextKeyedCache.wrap_sharedTable.RegisterOrGet(__classOf(e.Item));
                var arr = this.sharedTableInst;
                var idx = TextKeyedCache.SharedIdxFromHash(hashCode);
                var curIdx = idx;
                foundIdx: while (true) {
                    for (var i = 1; i < TextKeyedCache.SharedBucketSize + 1; i++) {
                        if (arr[curIdx].Entry == null) {
                            idx = curIdx;
                            break foundIdx;
                        }
                        curIdx = (curIdx + i) & TextKeyedCache.SharedSizeMask;
                    }
                    var i1 = this.NextRandom() & TextKeyedCache.SharedBucketSizeMask;
                    idx = (idx + (((i1 * i1 + i1) / 2 | 0))) & TextKeyedCache.SharedSizeMask;
                    break;
                }
                arr[idx].HashCode = hashCode;
                var Entry_ref0 = { refObj: arr[idx].Entry };
                System.Threading.Volatile.Write(Entry_ref0, e);
                arr[idx].Entry = Entry_ref0.refObj;
                ;
            };
            TextKeyedCache.LocalIdxFromHash = function (hash) {
                return hash & TextKeyedCache.LocalSizeMask;
            };
            TextKeyedCache.SharedIdxFromHash = function (hash) {
                return (hash ^ (hash >> TextKeyedCache.LocalSizeBits)) & TextKeyedCache.SharedSizeMask;
            };
            TextKeyedCache.prototype.NextRandom = function () {
                var r = this.random;
                if (r != null) {
                    return r.Next();
                }
                r = new System.Random();
                this.random = r;
                return r.Next();
            };
            TextKeyedCache.LocalSizeBits = 11;
            TextKeyedCache.LocalSize = (1 << TextKeyedCache.LocalSizeBits);
            TextKeyedCache.LocalSizeMask = TextKeyedCache.LocalSize - 1;
            TextKeyedCache.SharedSizeBits = 16;
            TextKeyedCache.SharedSize = (1 << TextKeyedCache.SharedSizeBits);
            TextKeyedCache.SharedSizeMask = TextKeyedCache.SharedSize - 1;
            TextKeyedCache.SharedBucketBits = 4;
            TextKeyedCache.SharedBucketSize = (1 << TextKeyedCache.SharedBucketBits);
            TextKeyedCache.SharedBucketSizeMask = TextKeyedCache.SharedBucketSize - 1;
            TextKeyedCache.wrap_sharedTable = new GenericStatic_Static();
            TextKeyedCache.wrap_StaticPool = new GenericStatic_Static();
            TextKeyedCache.StaticConstructorVar = TextKeyedCache.StaticConstructor();
            return TextKeyedCache;
        })();
        Utilities.TextKeyedCache = TextKeyedCache;
        var TextKeyedCache;
        (function (TextKeyedCache) {
            var LocalEntry = (function () {
                function LocalEntry() {
                    this.HashCode = 0;
                }
                return LocalEntry;
            })();
            TextKeyedCache.LocalEntry = LocalEntry;
        })(TextKeyedCache = Utilities.TextKeyedCache || (Utilities.TextKeyedCache = {}));
        var TextKeyedCache;
        (function (TextKeyedCache) {
            var SharedEntry = (function () {
                function SharedEntry() {
                    this.HashCode = 0;
                }
                return SharedEntry;
            })();
            TextKeyedCache.SharedEntry = SharedEntry;
        })(TextKeyedCache = Utilities.TextKeyedCache || (Utilities.TextKeyedCache = {}));
        var TextKeyedCache;
        (function (TextKeyedCache) {
            var SharedEntryValue = (function () {
                function SharedEntryValue() {
                }
                SharedEntryValue.prototype.ctor_2137 = function (Text, item) {
                    this.Text = Text;
                    this.Item = item;
                    return this;
                };
                return SharedEntryValue;
            })();
            TextKeyedCache.SharedEntryValue = SharedEntryValue;
        })(TextKeyedCache = Utilities.TextKeyedCache || (Utilities.TextKeyedCache = {}));
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        (function (ThreeState) {
            ThreeState[ThreeState["Unknown"] = 0] = "Unknown";
            ThreeState[ThreeState["False"] = 1] = "False";
            ThreeState[ThreeState["True"] = 2] = "True";
        })(CodeAnalysis.ThreeState || (CodeAnalysis.ThreeState = {}));
        var ThreeState = CodeAnalysis.ThreeState;
        var ThreeStateHelpers = (function () {
            function ThreeStateHelpers() {
            }
            ThreeStateHelpers.ToThreeState = function (value) {
                return value ? 2 /* True */ : 1 /* False */;
            };
            ThreeStateHelpers.HasValue = function (value) {
                return value != 0 /* Unknown */;
            };
            ThreeStateHelpers.Value = function (value) {
                System.Diagnostics.Debug.Assert(value != 0 /* Unknown */);
                return value == 2 /* True */;
            };
            return ThreeStateHelpers;
        })();
        CodeAnalysis.ThreeStateHelpers = ThreeStateHelpers;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var ValueTuple = (function () {
            function ValueTuple() {
            }
            ValueTuple.Create_1047 = function (item1, item2) {
                return new Utilities.G2.ValueTuple().ctor_6194(item1, item2);
            };
            ValueTuple.Create_7791 = function (item1, item2, item3) {
                return new Utilities.G3.ValueTuple().ctor_1594(item1, item2, item3);
            };
            return ValueTuple;
        })();
        Utilities.ValueTuple = ValueTuple;
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var G2;
        (function (G2) {
            var ValueTuple = (function () {
                function ValueTuple() {
                }
                ValueTuple.prototype.ctor_6194 = function (item1, item2) {
                    this.Item1 = item1;
                    this.Item2 = item2;
                    return this;
                };
                ValueTuple.prototype.Equals_5155 = function (other) {
                    return ValueTuple.comparer1.Equals(this.Item1, other.Item1) && ValueTuple.comparer2.Equals(this.Item2, other.Item2);
                };
                ValueTuple.prototype.Equals = function (obj) {
                    return this.Equals_1491(obj);
                };
                ValueTuple.prototype.Equals_1491 = function (obj) {
                    if (obj instanceof ValueTuple) {
                        var other = obj;
                        return this.Equals_5155(other);
                    }
                    return false;
                };
                ValueTuple.prototype.GetHashCode = function () {
                    return Utilities.Hash.Combine_1641(ValueTuple.comparer1.GetHashCode(this.Item1), ValueTuple.comparer2.GetHashCode(this.Item2));
                };
                ValueTuple.prototype.op_Equality = function (right) {
                    var left = this;
                    return left.Equals_5155(right);
                };
                ValueTuple.prototype.op_Inequality = function (right) {
                    var left = this;
                    return !left.Equals_5155(right);
                };
                ValueTuple.comparer1 = System.Collections.Generic.EqualityComparer.Default;
                ValueTuple.comparer2 = System.Collections.Generic.EqualityComparer.Default;
                return ValueTuple;
            })();
            G2.ValueTuple = ValueTuple;
        })(G2 = Utilities.G2 || (Utilities.G2 = {}));
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var G3;
        (function (G3) {
            var ValueTuple = (function () {
                function ValueTuple() {
                }
                ValueTuple.prototype.ctor_1594 = function (item1, item2, item3) {
                    this.Item1 = item1;
                    this.Item2 = item2;
                    this.Item3 = item3;
                    return this;
                };
                ValueTuple.prototype.Equals_1335 = function (other) {
                    return ValueTuple.comparer1.Equals(this.Item1, other.Item1) && ValueTuple.comparer2.Equals(this.Item2, other.Item2) && ValueTuple.comparer3.Equals(this.Item3, other.Item3);
                };
                ValueTuple.prototype.Equals = function (obj) {
                    return this.Equals_1491(obj);
                };
                ValueTuple.prototype.Equals_1491 = function (obj) {
                    if (obj instanceof ValueTuple) {
                        var other = obj;
                        return this.Equals_1335(other);
                    }
                    return false;
                };
                ValueTuple.prototype.GetHashCode = function () {
                    return Utilities.Hash.Combine_1641(Utilities.Hash.Combine_1641(ValueTuple.comparer1.GetHashCode(this.Item1), ValueTuple.comparer2.GetHashCode(this.Item2)), ValueTuple.comparer3.GetHashCode(this.Item3));
                };
                ValueTuple.prototype.op_Equality = function (right) {
                    var left = this;
                    return left.Equals_1335(right);
                };
                ValueTuple.prototype.op_Inequality = function (right) {
                    var left = this;
                    return !left.Equals_1335(right);
                };
                ValueTuple.comparer1 = System.Collections.Generic.EqualityComparer.Default;
                ValueTuple.comparer2 = System.Collections.Generic.EqualityComparer.Default;
                ValueTuple.comparer3 = System.Collections.Generic.EqualityComparer.Default;
                return ValueTuple;
            })();
            G3.ValueTuple = ValueTuple;
        })(G3 = Utilities.G3 || (Utilities.G3 = {}));
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var ObjectBinder = (function () {
            function ObjectBinder() {
            }
            ObjectBinder.prototype.GetType = function (assemblyName, typeName) {
                throw new Error('not implemented');
            };
            ObjectBinder.prototype.GetReader = function (type) {
                throw new Error('not implemented');
            };
            return ObjectBinder;
        })();
        Utilities.ObjectBinder = ObjectBinder;
        var ObjectBinder;
        (function (ObjectBinder) {
            var TypeKey = (function () {
                function TypeKey() {
                }
                TypeKey.prototype.ctor_1051 = function (assemblyName, typeName) {
                    this.AssemblyName = assemblyName;
                    this.TypeName = typeName;
                    return this;
                };
                TypeKey.prototype.Equals_1132 = function (other) {
                    return this.AssemblyName == other.AssemblyName && this.TypeName == other.TypeName;
                };
                TypeKey.prototype.Equals = function (obj) {
                    return obj instanceof TypeKey && this.Equals_1132(obj);
                };
                TypeKey.prototype.GetHashCode = function () {
                    return Utilities.Hash.Combine_1641(this.AssemblyName.GetHashCode(), this.TypeName.GetHashCode());
                };
                return TypeKey;
            })();
            ObjectBinder.TypeKey = TypeKey;
        })(ObjectBinder = Utilities.ObjectBinder || (Utilities.ObjectBinder = {}));
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var RecordingObjectBinder = (function (_super) {
            __extends(RecordingObjectBinder, _super);
            function RecordingObjectBinder() {
                _super.call(this);
            }
            RecordingObjectBinder.prototype.Record_1251 = function (type) {
                throw new Error('not implemented');
            };
            RecordingObjectBinder.prototype.Record_2061 = function (instance) {
                throw new Error('not implemented');
            };
            return RecordingObjectBinder;
        })(Utilities.ObjectBinder);
        Utilities.RecordingObjectBinder = RecordingObjectBinder;
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var ConcurrentRecordingObjectBinder = (function (_super) {
            __extends(ConcurrentRecordingObjectBinder, _super);
            function ConcurrentRecordingObjectBinder() {
                _super.call(this);
                this.typeMap = new System.Collections.Concurrent.ConcurrentDictionary();
                this.readerMap = new System.Collections.Concurrent.ConcurrentDictionary();
            }
            ConcurrentRecordingObjectBinder.prototype.GetType = function (assemblyName, typeName) {
                var type;
                var type_ref0 = { refObj: type };
                var ret_val__902 = this.typeMap.TryGetValue(new Utilities.ObjectBinder.TypeKey().ctor_1051(assemblyName, typeName), type_ref0);
                type = type_ref0.refObj;
                if (!ret_val__902) {
                    System.Diagnostics.Debug.Assert(false, assemblyName + "/" + typeName + " don't exist");
                }
                return type;
            };
            ConcurrentRecordingObjectBinder.prototype.GetReader = function (type) {
                var reader;
                var reader_ref0 = { refObj: reader };
                var ret_val__423 = this.readerMap.TryGetValue(type, reader_ref0);
                reader = reader_ref0.refObj;
                if (!ret_val__423) {
                    System.Diagnostics.Debug.Assert(false, type.toString() + " reader doesn't exist");
                }
                return reader;
            };
            ConcurrentRecordingObjectBinder.prototype.HasConstructor = function (type) {
                return this.readerMap.ContainsKey(type);
            };
            ConcurrentRecordingObjectBinder.prototype.Record_1251 = function (type) {
                if (type != null) {
                    var key = new Utilities.ObjectBinder.TypeKey().ctor_1051(Gb.AssemblyName, type.name);
                    this.typeMap.TryAdd(key, type);
                }
            };
            ConcurrentRecordingObjectBinder.prototype.Record_2061 = function (instance) {
                if (instance != null) {
                    var type = __classOf(instance);
                    var readable = instance;
                    if (readable.GetReader === void 0) {
                        readable = null;
                    }
                    if (readable != null) {
                        if (this.HasConstructor(type)) {
                            return;
                        }
                        this.readerMap.TryAdd(type, readable.GetReader());
                    }
                    this.Record_1251(type);
                }
            };
            return ConcurrentRecordingObjectBinder;
        })(Utilities.RecordingObjectBinder);
        Utilities.ConcurrentRecordingObjectBinder = ConcurrentRecordingObjectBinder;
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var ObjectReaderWriterBase = (function () {
            function ObjectReaderWriterBase() {
            }
            ObjectReaderWriterBase.ByteMarkerMask = 3 << 6;
            ObjectReaderWriterBase.Byte1Marker = 0;
            ObjectReaderWriterBase.Byte2Marker = 1 << 6;
            ObjectReaderWriterBase.Byte4Marker = 2 << 6;
            return ObjectReaderWriterBase;
        })();
        Utilities.ObjectReaderWriterBase = ObjectReaderWriterBase;
        var ObjectReaderWriterBase;
        (function (ObjectReaderWriterBase) {
            (function (DataKind) {
                DataKind[DataKind["Null"] = 0] = "Null";
                DataKind[DataKind["Type"] = 1] = "Type";
                DataKind[DataKind["TypeRef"] = 2] = "TypeRef";
                DataKind[DataKind["TypeRef_B"] = 3] = "TypeRef_B";
                DataKind[DataKind["TypeRef_S"] = 4] = "TypeRef_S";
                DataKind[DataKind["Object_W"] = 5] = "Object_W";
                DataKind[DataKind["ObjectRef"] = 6] = "ObjectRef";
                DataKind[DataKind["ObjectRef_B"] = 7] = "ObjectRef_B";
                DataKind[DataKind["ObjectRef_S"] = 8] = "ObjectRef_S";
                DataKind[DataKind["StringUtf8"] = 9] = "StringUtf8";
                DataKind[DataKind["StringUtf16"] = 10] = "StringUtf16";
                DataKind[DataKind["StringRef"] = 11] = "StringRef";
                DataKind[DataKind["StringRef_B"] = 12] = "StringRef_B";
                DataKind[DataKind["StringRef_S"] = 13] = "StringRef_S";
                DataKind[DataKind["Boolean_T"] = 14] = "Boolean_T";
                DataKind[DataKind["Boolean_F"] = 15] = "Boolean_F";
                DataKind[DataKind["Char"] = 16] = "Char";
                DataKind[DataKind["Int8"] = 17] = "Int8";
                DataKind[DataKind["Int16"] = 18] = "Int16";
                DataKind[DataKind["Int32"] = 19] = "Int32";
                DataKind[DataKind["Int32_B"] = 20] = "Int32_B";
                DataKind[DataKind["Int32_S"] = 21] = "Int32_S";
                DataKind[DataKind["Int32_Z"] = 22] = "Int32_Z";
                DataKind[DataKind["Int64"] = 23] = "Int64";
                DataKind[DataKind["UInt8"] = 24] = "UInt8";
                DataKind[DataKind["UInt16"] = 25] = "UInt16";
                DataKind[DataKind["UInt32"] = 26] = "UInt32";
                DataKind[DataKind["UInt64"] = 27] = "UInt64";
                DataKind[DataKind["Float4"] = 28] = "Float4";
                DataKind[DataKind["Float8"] = 29] = "Float8";
                DataKind[DataKind["Decimal"] = 30] = "Decimal";
                DataKind[DataKind["DateTime"] = 31] = "DateTime";
                DataKind[DataKind["Enum"] = 32] = "Enum";
                DataKind[DataKind["Array"] = 33] = "Array";
                DataKind[DataKind["Array_0"] = 34] = "Array_0";
                DataKind[DataKind["Array_1"] = 35] = "Array_1";
                DataKind[DataKind["Array_2"] = 36] = "Array_2";
                DataKind[DataKind["Array_3"] = 37] = "Array_3";
            })(ObjectReaderWriterBase.DataKind || (ObjectReaderWriterBase.DataKind = {}));
            var DataKind = ObjectReaderWriterBase.DataKind;
        })(ObjectReaderWriterBase = Utilities.ObjectReaderWriterBase || (Utilities.ObjectReaderWriterBase = {}));
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var ObjectReader = (function (_super) {
            __extends(ObjectReader, _super);
            function ObjectReader() {
                _super.call(this);
            }
            ObjectReader.prototype.ctor_3403 = function (stream, defaultData, binder) {
                if (defaultData === void 0) { defaultData = null; }
                if (binder === void 0) { binder = null; }
                System.Diagnostics.Debug.Assert(System.BitConverter.IsLittleEndian);
                this.reader = new System.IO.BinaryReader(stream, System.Text.Encoding.UTF8);
                this.dataMap = new Utilities.ObjectReaderData().ctor_1681(defaultData);
                this.binder = binder;
                return this;
            };
            ObjectReader.prototype.Dispose = function () {
                this.dataMap.Dispose();
            };
            ObjectReader.prototype.ReadBoolean = function () {
                return this.reader.ReadBoolean();
            };
            ObjectReader.prototype.ReadByte = function () {
                return this.reader.ReadByte();
            };
            ObjectReader.prototype.ReadChar = function () {
                return this.reader.ReadChar();
            };
            ObjectReader.prototype.ReadDecimal = function () {
                return this.reader.ReadDecimal();
            };
            ObjectReader.prototype.ReadDouble = function () {
                return this.reader.ReadDouble();
            };
            ObjectReader.prototype.ReadSingle = function () {
                return this.reader.ReadSingle();
            };
            ObjectReader.prototype.ReadInt32 = function () {
                return this.reader.ReadInt32();
            };
            ObjectReader.prototype.ReadInt64 = function () {
                return this.reader.ReadInt64();
            };
            ObjectReader.prototype.ReadSByte = function () {
                return this.reader.ReadSByte();
            };
            ObjectReader.prototype.ReadInt16 = function () {
                return this.reader.ReadInt16();
            };
            ObjectReader.prototype.ReadUInt32 = function () {
                return this.reader.ReadUInt32();
            };
            ObjectReader.prototype.ReadUInt16 = function () {
                return this.reader.ReadUInt16();
            };
            ObjectReader.prototype.ReadDateTime = function () {
                return new Date(this.ReadDecimal());
            };
            ObjectReader.prototype.ReadCompressedUInt = function () {
                var info = this.reader.ReadByte();
                var marker = (info & ObjectReader.ByteMarkerMask);
                var byte0 = (info & ~ObjectReader.ByteMarkerMask);
                if (marker == ObjectReader.Byte1Marker) {
                    return byte0;
                }
                else if (marker == ObjectReader.Byte2Marker) {
                    var byte1 = this.reader.ReadByte();
                    return (byte0 << 8) | byte1;
                }
                else if (marker == ObjectReader.Byte4Marker) {
                    var byte1 = this.reader.ReadByte();
                    var byte2 = this.reader.ReadByte();
                    var byte3 = this.reader.ReadByte();
                    return (byte0 << 24) | (byte1 << 16) | (byte2 << 8) | byte3;
                }
                else {
                    throw Utilities.ExceptionUtilities.UnexpectedValue(marker);
                }
            };
            ObjectReader.prototype.ReadValue = function () {
                var kind = this.reader.ReadByte();
                switch (kind) {
                    case 0 /* Null */:
                        return null;
                    case 14 /* Boolean_T */:
                        return ObjectReader.BooleanTrue;
                    case 15 /* Boolean_F */:
                        return ObjectReader.BooleanFalse;
                    case 17 /* Int8 */:
                        return this.reader.ReadSByte();
                    case 24 /* UInt8 */:
                        return this.reader.ReadByte();
                    case 18 /* Int16 */:
                        return this.reader.ReadInt16();
                    case 25 /* UInt16 */:
                        return this.reader.ReadUInt16();
                    case 19 /* Int32 */:
                        return this.reader.ReadInt32();
                    case 20 /* Int32_B */:
                        return this.reader.ReadByte();
                    case 21 /* Int32_S */:
                        return this.reader.ReadUInt16();
                    case 22 /* Int32_Z */:
                        return ObjectReader.Int32Zero;
                    case 26 /* UInt32 */:
                        return this.reader.ReadUInt32();
                    case 23 /* Int64 */:
                        return this.reader.ReadInt64();
                    case 28 /* Float4 */:
                        return this.reader.ReadSingle();
                    case 29 /* Float8 */:
                        return this.reader.ReadDouble();
                    case 30 /* Decimal */:
                        return this.reader.ReadDecimal();
                    case 31 /* DateTime */:
                        return this.ReadDateTime();
                    case 16 /* Char */:
                        return this.ReadChar();
                    case 9 /* StringUtf8 */:
                    case 10 /* StringUtf16 */:
                    case 11 /* StringRef */:
                    case 12 /* StringRef_B */:
                    case 13 /* StringRef_S */:
                        return this.ReadString_4398(kind);
                    case 5 /* Object_W */:
                    case 6 /* ObjectRef */:
                    case 7 /* ObjectRef_B */:
                    case 8 /* ObjectRef_S */:
                        return this.ReadObject(kind);
                    case 1 /* Type */:
                    case 2 /* TypeRef */:
                    case 3 /* TypeRef_B */:
                    case 4 /* TypeRef_S */:
                        return this.ReadType_2536(kind);
                    case 33 /* Array */:
                    case 34 /* Array_0 */:
                    case 35 /* Array_1 */:
                    case 36 /* Array_2 */:
                    case 37 /* Array_3 */:
                        return this.ReadArray(kind);
                    default:
                        throw Utilities.ExceptionUtilities.UnexpectedValue(kind);
                }
            };
            ObjectReader.prototype.ReadString_7160 = function () {
                var kind = this.reader.ReadByte();
                if (kind == 0 /* Null */) {
                    return null;
                }
                else {
                    return this.ReadString_4398(kind);
                }
            };
            ObjectReader.prototype.ReadString_4398 = function (kind) {
                switch (kind) {
                    case 12 /* StringRef_B */:
                        return this.dataMap.GetValue(this.reader.ReadByte());
                    case 13 /* StringRef_S */:
                        return this.dataMap.GetValue(this.reader.ReadUInt16());
                    case 11 /* StringRef */:
                        return this.dataMap.GetValue(this.reader.ReadInt32());
                    case 10 /* StringUtf16 */:
                    case 9 /* StringUtf8 */:
                        return this.ReadStringLiteral(kind);
                    default:
                        throw Utilities.ExceptionUtilities.UnexpectedValue(kind);
                }
            };
            ObjectReader.prototype.ReadStringLiteral = function (kind) {
                var id = this.dataMap.GetNextId();
                var value;
                if (kind == 9 /* StringUtf8 */) {
                    value = this.reader.ReadString();
                }
                else {
                    value = this.reader.ReadString();
                }
                this.dataMap.AddValue(id, value);
                return value;
            };
            ObjectReader.prototype.ReadArray = function (kind) {
                var length = 0;
                switch (kind) {
                    case 34 /* Array_0 */:
                        length = 0;
                        break;
                    case 35 /* Array_1 */:
                        length = 1;
                        break;
                    case 36 /* Array_2 */:
                        length = 2;
                        break;
                    case 37 /* Array_3 */:
                        length = 3;
                        break;
                    case 33 /* Array */:
                    default:
                        length = this.ReadCompressedUInt();
                        break;
                }
                var elementType = this.ReadType_7814();
                var array = new Array(length);
                for (var i = 0; i < length; i++) {
                    var value = this.ReadValue();
                    array[i] = value;
                }
                return array;
            };
            ObjectReader.prototype.ReadType_7814 = function () {
                var kind = this.reader.ReadByte();
                return this.ReadType_2536(kind);
            };
            ObjectReader.prototype.ReadType_2536 = function (kind) {
                switch (kind) {
                    case 3 /* TypeRef_B */:
                        return this.dataMap.GetValue(this.reader.ReadByte());
                    case 4 /* TypeRef_S */:
                        return this.dataMap.GetValue(this.reader.ReadUInt16());
                    case 2 /* TypeRef */:
                        return this.dataMap.GetValue(this.reader.ReadInt32());
                    case 1 /* Type */:
                        var id = this.dataMap.GetNextId();
                        var assemblyName = this.ReadString_7160();
                        var typeName = this.ReadString_7160();
                        if (this.binder == null) {
                            throw this.NoBinderException(typeName);
                        }
                        var type = this.binder.GetType(assemblyName, typeName);
                        this.dataMap.AddValue(id, type);
                        return type;
                    default:
                        throw Utilities.ExceptionUtilities.UnexpectedValue(kind);
                }
            };
            ObjectReader.prototype.ReadObject = function (kind) {
                switch (kind) {
                    case 7 /* ObjectRef_B */:
                        return this.dataMap.GetValue(this.reader.ReadByte());
                    case 8 /* ObjectRef_S */:
                        return this.dataMap.GetValue(this.reader.ReadUInt16());
                    case 6 /* ObjectRef */:
                        return this.dataMap.GetValue(this.reader.ReadInt32());
                    case 5 /* Object_W */:
                        return this.ReadReadableObject();
                    case 33 /* Array */:
                        return this.ReadArray(kind);
                    default:
                        throw Utilities.ExceptionUtilities.UnexpectedValue(kind);
                }
            };
            ObjectReader.prototype.ReadReadableObject = function () {
                var id = this.dataMap.GetNextId();
                var type = this.ReadType_7814();
                var instance = this.CreateInstance(type);
                this.dataMap.AddValue(id, instance);
                return instance;
            };
            ObjectReader.prototype.CreateInstance = function (type) {
                if (this.binder == null) {
                    return this.NoBinderException(type.name);
                }
                var reader = this.binder.GetReader(type);
                if (reader == null) {
                    return this.NoReaderException(type.name);
                }
                return reader(this);
            };
            ObjectReader.prototype.NoBinderException = function (typeName) {
                throw new System.InvalidOperationException(System.String.Format(Utilities.StringExtensions.NeedsLocalization("Cannot deserialize type '{0}', no binder supplied."), typeName));
            };
            ObjectReader.prototype.NoReaderException = function (typeName) {
                throw new System.InvalidOperationException(System.String.Format(Utilities.StringExtensions.NeedsLocalization("Cannot deserialize type '{0}', it has no deserialization reader."), typeName));
            };
            ObjectReader.Int32Zero = 0;
            ObjectReader.BooleanTrue = true;
            ObjectReader.BooleanFalse = false;
            return ObjectReader;
        })(Utilities.ObjectReaderWriterBase);
        Utilities.ObjectReader = ObjectReader;
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var ObjectReaderData = (function () {
            function ObjectReaderData() {
                this.values = ObjectReaderData.ListPool.Allocate();
                this.baseDataCount = 0;
            }
            ObjectReaderData.prototype.ctor_3282 = function () {
                var items = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    items[_i - 0] = arguments[_i];
                }
                this.ctor_1102(items);
                return this;
            };
            ObjectReaderData.prototype.ctor_1102 = function (items) {
                if (items != null) {
                    var valueEnumerator = items.GetEnumerator();
                    try {
                        while (valueEnumerator.MoveNext()) {
                            var value = valueEnumerator.Current;
                            this.values.Add(value);
                        }
                    }
                    finally {
                        if (valueEnumerator !== null)
                            valueEnumerator.Dispose();
                    }
                }
                return this;
            };
            ObjectReaderData.prototype.ctor_1681 = function (baseData) {
                System.Diagnostics.Debug.Assert(baseData == null || baseData.baseData == null, "Should be <= 1 level deep");
                this.baseData = baseData;
                this.baseDataCount = (baseData != null) ? baseData.values.Count : 0;
                return this;
            };
            ObjectReaderData.prototype.Dispose = function () {
                this.values.Clear();
                ObjectReaderData.ListPool.Free(this.values);
            };
            ObjectReaderData.prototype.GetNextId = function () {
                this.values.Add(null);
                return this.baseDataCount + this.values.Count - 1;
            };
            ObjectReaderData.prototype.AddValue = function (id, value) {
                this.values.$set$(id - this.baseDataCount, value);
            };
            ObjectReaderData.prototype.GetValue = function (id) {
                if (this.baseData != null) {
                    if (id < this.baseDataCount) {
                        return this.baseData.GetValue(id);
                    }
                    else {
                        return this.values.$get$(id - this.baseDataCount);
                    }
                }
                else {
                    return this.values.$get$(id);
                }
            };
            ObjectReaderData.ListPool = new Utilities.ObjectPool().ctor_5203(function () { return new System.Collections.Generic.List(128); }, 2);
            return ObjectReaderData;
        })();
        Utilities.ObjectReaderData = ObjectReaderData;
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var ObjectWriter = (function (_super) {
            __extends(ObjectWriter, _super);
            function ObjectWriter() {
                _super.call(this);
                this.cancellationToken = structDefault(System.Threading.CancellationToken);
            }
            ObjectWriter.prototype.ctor_4283 = function (stream, defaultData, binder, cancellationToken) {
                if (defaultData === void 0) { defaultData = null; }
                if (binder === void 0) { binder = null; }
                if (cancellationToken === void 0) { cancellationToken = structDefault(System.Threading.CancellationToken); }
                System.Diagnostics.Debug.Assert(System.BitConverter.IsLittleEndian);
                this.writer = new System.IO.BinaryWriter(stream, System.Text.Encoding.UTF8);
                this.dataMap = new Utilities.ObjectWriterData().ctor_6162(defaultData);
                this.binder = binder != null ? binder : new Utilities.SimpleRecordingObjectBinder();
                this.cancellationToken = cancellationToken;
                return this;
            };
            Object.defineProperty(ObjectWriter.prototype, "Binder", {
                get: function () {
                    return this.binder;
                },
                enumerable: true,
                configurable: true
            });
            ObjectWriter.prototype.Dispose = function () {
                this.dataMap.Dispose();
            };
            ObjectWriter.prototype.WriteBoolean = function (value) {
                this.writer.WriteBoolean(value);
            };
            ObjectWriter.prototype.WriteByte = function (value) {
                this.writer.WriteByte(value);
            };
            ObjectWriter.prototype.WriteChar = function (ch) {
                this.writer.WriteChar(ch);
            };
            ObjectWriter.prototype.WriteDecimal = function (value) {
                this.writer.WriteDecimal(value);
            };
            ObjectWriter.prototype.WriteDouble = function (value) {
                this.writer.WriteDouble(value);
            };
            ObjectWriter.prototype.WriteSingle = function (value) {
                this.writer.WriteSingle(value);
            };
            ObjectWriter.prototype.WriteInt32 = function (value) {
                this.writer.WriteInt32(value);
            };
            ObjectWriter.prototype.WriteInt64 = function (value) {
                this.writer.WriteInt64(value);
            };
            ObjectWriter.prototype.WriteSByte = function (value) {
                this.writer.WriteSByte(value);
            };
            ObjectWriter.prototype.WriteInt16 = function (value) {
                this.writer.WriteInt16(value);
            };
            ObjectWriter.prototype.WriteUInt32 = function (value) {
                this.writer.WriteUInt32(value);
            };
            ObjectWriter.prototype.WriteUInt64 = function (value) {
                this.writer.WriteUInt32(value);
            };
            ObjectWriter.prototype.WriteUInt16 = function (value) {
                this.writer.WriteUInt16(value);
            };
            ObjectWriter.prototype.WriteDateTime = function (value) {
                this.WriteInt64(value.getTime());
            };
            ObjectWriter.prototype.WriteCompressedUInt = function (value) {
                if (value <= (Byte.MaxValue >> 2)) {
                    this.writer.WriteByte(value);
                }
                else if (value <= (ushort.MaxValue >> 2)) {
                    var byte0 = (((value >> 8) & 0xFF) | ObjectWriter.Byte2Marker);
                    var byte1 = (value & 0xFF);
                    this.writer.WriteByte(byte0);
                    this.writer.WriteByte(byte1);
                }
                else if (value <= (uint.MaxValue >> 2)) {
                    var byte0 = (((value >> 24) & 0xFF) | ObjectWriter.Byte4Marker);
                    var byte1 = ((value >> 16) & 0xFF);
                    var byte2 = ((value >> 8) & 0xFF);
                    var byte3 = (value & 0xFF);
                    this.writer.WriteByte(byte0);
                    this.writer.WriteByte(byte1);
                    this.writer.WriteByte(byte2);
                    this.writer.WriteByte(byte3);
                }
                else {
                    throw new System.ArgumentException(Microsoft.CodeAnalysis.CodeAnalysisResources.ValueTooLargeToBeRepresented);
                }
            };
            ObjectWriter.prototype.WriteString = function (value) {
                var _this = this;
                if (value == null) {
                    this.writer.WriteByte((0 /* Null */));
                }
                else {
                    var id = 0;
                    if ((function () {
                        var id_ref0 = { refObj: id };
                        var ret_val_ = _this.dataMap.TryGetId(value, id_ref0);
                        id = id_ref0.refObj;
                        return ret_val_;
                    })()) {
                        System.Diagnostics.Debug.Assert(id >= 0);
                        if (id <= Byte.MaxValue) {
                            this.writer.WriteByte((12 /* StringRef_B */));
                            this.writer.WriteByte(id);
                        }
                        else if (id <= ushort.MaxValue) {
                            this.writer.WriteByte((13 /* StringRef_S */));
                            this.writer.WriteUShort(id);
                        }
                        else {
                            this.writer.WriteByte((11 /* StringRef */));
                            this.writer.WriteInt32(id);
                        }
                    }
                    else {
                        this.dataMap.Add(value);
                        if (Roslyn.Utilities.StringExtensions.IsValidUnicodeString(value)) {
                            this.writer.WriteByte((9 /* StringUtf8 */));
                            this.writer.WriteString(value);
                        }
                        else {
                            this.writer.WriteByte((10 /* StringUtf16 */));
                            this.writer.WriteString(value);
                        }
                    }
                }
            };
            ObjectWriter.prototype.WriteValue = function (value) {
                if (value == null) {
                    this.writer.WriteByte((0 /* Null */ | 0));
                }
                else {
                    if (typeof value == 'boolean' || value.constructor == Boolean) {
                        if (value) {
                            this.writer.WriteByte((14 /* Boolean_T */));
                        }
                        else {
                            this.writer.WriteByte((15 /* Boolean_F */));
                        }
                    }
                    else if ((typeof value == 'number' || value.constructor == Number) && IsInt(value)) {
                        var v = (value);
                        if (v == 0) {
                            this.writer.WriteByte((22 /* Int32_Z */));
                        }
                        else if (v >= 0 && v < Byte.MaxValue) {
                            this.writer.WriteByte((20 /* Int32_B */));
                            this.writer.WriteByte(v);
                        }
                        else if (v >= 0 && v < ushort.MaxValue) {
                            this.writer.WriteByte((21 /* Int32_S */));
                            this.writer.WriteUShort(v);
                        }
                        else {
                            this.writer.WriteByte((19 /* Int32 */));
                            this.writer.WriteInt32(v);
                        }
                    }
                    else if (typeof value == 'number' || value.constructor == Number) {
                        this.writer.WriteDecimal(value);
                    }
                    else if ((typeof value == 'string' || value.constructor == String) && value.length == 1) {
                        this.writer.WriteByte((16 /* Char */));
                        this.WriteChar(value);
                    }
                    else if (typeof value == 'string' || value.constructor == String) {
                        this.WriteString(value);
                    }
                    else if (value instanceof Date) {
                        this.writer.WriteByte((31 /* DateTime */ | 0));
                        this.WriteDateTime(value);
                    }
                    else if (value instanceof Array) {
                        this.WriteArray(value);
                    }
                    else {
                        this.WriteObject(value);
                    }
                }
            };
            ObjectWriter.prototype.WriteArray = function (instance) {
                var length = instance.length;
                switch (length) {
                    case 0:
                        this.writer.WriteByte((34 /* Array_0 */));
                        break;
                    case 1:
                        this.writer.WriteByte((35 /* Array_1 */));
                        break;
                    case 2:
                        this.writer.WriteByte((36 /* Array_2 */));
                        break;
                    case 3:
                        this.writer.WriteByte((37 /* Array_3 */));
                        break;
                    default:
                        this.writer.WriteByte((33 /* Array */));
                        this.WriteCompressedUInt(length);
                        break;
                }
                var clssType = UnknownType;
                if (length > 0) {
                    clssType = __classOf(instance[0]);
                }
                this.WriteType(clssType);
                for (var i = 0; i < length; i++) {
                    this.WriteValue(instance[i]);
                }
            };
            ObjectWriter.prototype.WriteType = function (clssType) {
                var id = 0;
                var id_ref0 = { refObj: id };
                var ret_val_ = this.dataMap.TryGetId(clssType, id_ref0);
                id = id_ref0.refObj;
                if (ret_val_) {
                    System.Diagnostics.Debug.Assert(id >= 0);
                    if (id <= Byte.MaxValue) {
                        this.writer.WriteByte((3 /* TypeRef_B */ | 0));
                        this.writer.WriteByte(id);
                    }
                    else if (id <= ushort.MaxValue) {
                        this.writer.WriteByte((4 /* TypeRef_S */ | 0));
                        this.writer.WriteUShort(id);
                    }
                    else {
                        this.writer.WriteByte((2 /* TypeRef */ | 0));
                        this.writer.WriteInt32(id);
                    }
                }
                else {
                    this.dataMap.Add(clssType);
                    if (this.binder != null) {
                        this.binder.Record_1251(clssType);
                    }
                    this.writer.WriteByte((1 /* Type */));
                    var assemblyName = Gb.AssemblyName;
                    this.WriteString(assemblyName);
                    this.WriteString(clssType.name);
                }
            };
            ObjectWriter.prototype.WriteObject = function (instance) {
                var _this = this;
                this.cancellationToken.ThrowIfCancellationRequested();
                var id = 0;
                if ((function () {
                    var id_ref0 = { refObj: id };
                    var ret_val_ = _this.dataMap.TryGetId(instance, id_ref0);
                    id = id_ref0.refObj;
                    return ret_val_;
                })()) {
                    System.Diagnostics.Debug.Assert(id >= 0);
                    if (id <= Byte.MaxValue) {
                        this.writer.WriteByte((7 /* ObjectRef_B */));
                        this.writer.WriteByte(id);
                    }
                    else if (id <= ushort.MaxValue) {
                        this.writer.WriteByte((8 /* ObjectRef_S */));
                        this.writer.WriteUShort(id);
                    }
                    else {
                        this.writer.WriteByte((6 /* ObjectRef */));
                        this.writer.WriteInt32(id);
                    }
                }
                else {
                    this.dataMap.Add(instance);
                    if (typeof instance['WriteTo'] === 'undefined') {
                        throw this.NotWritableException(__classOf(instance).name);
                    }
                    var iwriteable = instance;
                    if (iwriteable != null) {
                        this.WriteWritableObject(iwriteable);
                        return;
                    }
                }
            };
            ObjectWriter.prototype.WriteWritableObject = function (instance) {
                this.writer.WriteByte((5 /* Object_W */ | 0));
                var type = __classOf(instance);
                this.WriteType(type);
                if (this.binder != null) {
                    this.binder.Record_2061(instance);
                }
                instance.WriteTo(this);
            };
            ObjectWriter.prototype.NotWritableException = function (typeName) {
                throw new System.InvalidOperationException(System.String.Format(Roslyn.Utilities.StringExtensions.NeedsLocalization("The type '{0}' cannot be written, it does not implement IObjectWritable"), typeName));
            };
            return ObjectWriter;
        })(Utilities.ObjectReaderWriterBase);
        Utilities.ObjectWriter = ObjectWriter;
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var ObjectWriterData = (function () {
            function ObjectWriterData() {
                this.valueToIdMap = ObjectWriterData.DictionaryPool.Allocate();
                this.nextId = 0;
            }
            ObjectWriterData.prototype.ctor_5212 = function () {
                var items = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    items[_i - 0] = arguments[_i];
                }
                this.ctor_7515(items);
                return this;
            };
            ObjectWriterData.prototype.ctor_7515 = function (items) {
                if (items != null) {
                    var valueEnumerator = items.GetEnumerator();
                    try {
                        while (valueEnumerator.MoveNext()) {
                            var value = valueEnumerator.Current;
                            this.valueToIdMap.Add(value, this.valueToIdMap.Count);
                        }
                    }
                    finally {
                        if (valueEnumerator !== null)
                            valueEnumerator.Dispose();
                    }
                }
                this.nextId = this.valueToIdMap.Count;
                return this;
            };
            ObjectWriterData.prototype.ctor_6162 = function (baseData) {
                this.baseData = baseData;
                this.nextId = (baseData != null) ? baseData.nextId : 0;
                return this;
            };
            ObjectWriterData.prototype.Dispose = function () {
                if (this.valueToIdMap.Count > 1024) {
                    ObjectWriterData.DictionaryPool.ForgetTrackedObject(this.valueToIdMap);
                    return;
                }
                this.valueToIdMap.Clear();
                ObjectWriterData.DictionaryPool.Free(this.valueToIdMap);
            };
            ObjectWriterData.prototype.TryGetId = function (value, id) {
                if (this.baseData != null && this.baseData.TryGetId(value, id)) {
                    return true;
                }
                return this.valueToIdMap.TryGetValue(value, id);
            };
            ObjectWriterData.prototype.GetNextId = function () {
                var id = this.nextId;
                this.nextId++;
                return id;
            };
            ObjectWriterData.prototype.Add = function (value) {
                var id = this.GetNextId();
                this.valueToIdMap.Add(value, id);
                return id;
            };
            ObjectWriterData.DictionaryPool = new Utilities.ObjectPool().ctor_5203(function () { return new System.Collections.Generic.ObjectDictionary(128); }, 2);
            return ObjectWriterData;
        })();
        Utilities.ObjectWriterData = ObjectWriterData;
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Roslyn;
(function (Roslyn) {
    var Utilities;
    (function (Utilities) {
        var SimpleRecordingObjectBinder = (function (_super) {
            __extends(SimpleRecordingObjectBinder, _super);
            function SimpleRecordingObjectBinder() {
                _super.call(this);
                this.typeMap = new System.Collections.Generic.Dictionary();
                this.readerMap = new System.Collections.Generic.Dictionary();
            }
            SimpleRecordingObjectBinder.prototype.GetType = function (assemblyName, typeName) {
                var type;
                var type_ref0 = { refObj: type };
                var ret_val__421 = this.typeMap.TryGetValue(new Utilities.ObjectBinder.TypeKey().ctor_1051(assemblyName, typeName), type_ref0);
                type = type_ref0.refObj;
                if (!ret_val__421) {
                    System.Diagnostics.Debug.Assert(false, assemblyName + "/" + typeName + " don't exist");
                }
                return type;
            };
            SimpleRecordingObjectBinder.prototype.GetReader = function (type) {
                var reader;
                var reader_ref0 = { refObj: reader };
                var ret_val__533 = this.readerMap.TryGetValue(type, reader_ref0);
                reader = reader_ref0.refObj;
                if (!ret_val__533) {
                    System.Diagnostics.Debug.Assert(false, type.toString() + " reader doesn't exist");
                }
                return reader;
            };
            SimpleRecordingObjectBinder.prototype.HasConstructor = function (type) {
                return this.readerMap.ContainsKey(type);
            };
            SimpleRecordingObjectBinder.prototype.Record_1251 = function (type) {
                if (type != null) {
                    var key = new Utilities.ObjectBinder.TypeKey().ctor_1051(Gb.AssemblyName, type.name);
                    if (!this.typeMap.ContainsKey(key)) {
                        this.typeMap.Add(key, type);
                    }
                }
            };
            SimpleRecordingObjectBinder.prototype.Record_2061 = function (instance) {
                if (instance != null) {
                    var clssType = __classOf(instance);
                    var readable = instance;
                    if (typeof readable["GetReader"] === 'undefined') {
                        readable = null;
                    }
                    if (readable != null) {
                        if (this.HasConstructor(clssType)) {
                            return;
                        }
                        if (!this.readerMap.ContainsKey(clssType)) {
                            this.readerMap.Add(clssType, readable.GetReader());
                        }
                    }
                    this.Record_1251(clssType);
                }
            };
            return SimpleRecordingObjectBinder;
        })(Utilities.RecordingObjectBinder);
        Utilities.SimpleRecordingObjectBinder = SimpleRecordingObjectBinder;
    })(Utilities = Roslyn.Utilities || (Roslyn.Utilities = {}));
})(Roslyn || (Roslyn = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        (function (SourceCodeKind) {
            SourceCodeKind[SourceCodeKind["Regular"] = 0] = "Regular";
            SourceCodeKind[SourceCodeKind["Script"] = 1] = "Script";
            SourceCodeKind[SourceCodeKind["Interactive"] = 2] = "Interactive";
        })(CodeAnalysis.SourceCodeKind || (CodeAnalysis.SourceCodeKind = {}));
        var SourceCodeKind = CodeAnalysis.SourceCodeKind;
        var SourceCodeKindExtensions = (function () {
            function SourceCodeKindExtensions() {
            }
            SourceCodeKindExtensions.IsValid = function (value) {
                return value >= 0 /* Regular */ && value <= 2 /* Interactive */;
            };
            return SourceCodeKindExtensions;
        })();
        CodeAnalysis.SourceCodeKindExtensions = SourceCodeKindExtensions;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        (function (SpecialType) {
            SpecialType[SpecialType["None"] = 0] = "None";
            SpecialType[SpecialType["System_Object"] = 1] = "System_Object";
            SpecialType[SpecialType["System_Enum"] = 2] = "System_Enum";
            SpecialType[SpecialType["System_MulticastDelegate"] = 3] = "System_MulticastDelegate";
            SpecialType[SpecialType["System_Delegate"] = 4] = "System_Delegate";
            SpecialType[SpecialType["System_ValueType"] = 5] = "System_ValueType";
            SpecialType[SpecialType["System_Void"] = 6] = "System_Void";
            SpecialType[SpecialType["System_Boolean"] = 7] = "System_Boolean";
            SpecialType[SpecialType["System_Char"] = 8] = "System_Char";
            SpecialType[SpecialType["System_SByte"] = 9] = "System_SByte";
            SpecialType[SpecialType["System_Byte"] = 10] = "System_Byte";
            SpecialType[SpecialType["System_Int16"] = 11] = "System_Int16";
            SpecialType[SpecialType["System_UInt16"] = 12] = "System_UInt16";
            SpecialType[SpecialType["System_Int32"] = 13] = "System_Int32";
            SpecialType[SpecialType["System_UInt32"] = 14] = "System_UInt32";
            SpecialType[SpecialType["System_Int64"] = 15] = "System_Int64";
            SpecialType[SpecialType["System_UInt64"] = 16] = "System_UInt64";
            SpecialType[SpecialType["System_Decimal"] = 17] = "System_Decimal";
            SpecialType[SpecialType["System_Single"] = 18] = "System_Single";
            SpecialType[SpecialType["System_Double"] = 19] = "System_Double";
            SpecialType[SpecialType["System_String"] = 20] = "System_String";
            SpecialType[SpecialType["System_IntPtr"] = 21] = "System_IntPtr";
            SpecialType[SpecialType["System_UIntPtr"] = 22] = "System_UIntPtr";
            SpecialType[SpecialType["System_Array"] = 23] = "System_Array";
            SpecialType[SpecialType["System_Collections_IEnumerable"] = 24] = "System_Collections_IEnumerable";
            SpecialType[SpecialType["System_Collections_Generic_IEnumerable_T"] = 25] = "System_Collections_Generic_IEnumerable_T";
            SpecialType[SpecialType["System_Collections_Generic_IList_T"] = 26] = "System_Collections_Generic_IList_T";
            SpecialType[SpecialType["System_Collections_Generic_ICollection_T"] = 27] = "System_Collections_Generic_ICollection_T";
            SpecialType[SpecialType["System_Collections_IEnumerator"] = 28] = "System_Collections_IEnumerator";
            SpecialType[SpecialType["System_Collections_Generic_IEnumerator_T"] = 29] = "System_Collections_Generic_IEnumerator_T";
            SpecialType[SpecialType["System_Collections_Generic_IReadOnlyList_T"] = 30] = "System_Collections_Generic_IReadOnlyList_T";
            SpecialType[SpecialType["System_Collections_Generic_IReadOnlyCollection_T"] = 31] = "System_Collections_Generic_IReadOnlyCollection_T";
            SpecialType[SpecialType["System_Nullable_T"] = 32] = "System_Nullable_T";
            SpecialType[SpecialType["System_DateTime"] = 33] = "System_DateTime";
            SpecialType[SpecialType["System_Runtime_CompilerServices_IsVolatile"] = 34] = "System_Runtime_CompilerServices_IsVolatile";
            SpecialType[SpecialType["System_IDisposable"] = 35] = "System_IDisposable";
            SpecialType[SpecialType["System_TypedReference"] = 36] = "System_TypedReference";
            SpecialType[SpecialType["System_ArgIterator"] = 37] = "System_ArgIterator";
            SpecialType[SpecialType["System_RuntimeArgumentHandle"] = 38] = "System_RuntimeArgumentHandle";
            SpecialType[SpecialType["System_RuntimeFieldHandle"] = 39] = "System_RuntimeFieldHandle";
            SpecialType[SpecialType["System_RuntimeMethodHandle"] = 40] = "System_RuntimeMethodHandle";
            SpecialType[SpecialType["System_RuntimeTypeHandle"] = 41] = "System_RuntimeTypeHandle";
            SpecialType[SpecialType["System_IAsyncResult"] = 42] = "System_IAsyncResult";
            SpecialType[SpecialType["System_AsyncCallback"] = 43] = "System_AsyncCallback";
            SpecialType[SpecialType["Count"] = SpecialType.System_AsyncCallback] = "Count";
        })(CodeAnalysis.SpecialType || (CodeAnalysis.SpecialType = {}));
        var SpecialType = CodeAnalysis.SpecialType;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var ObjectDisplayExtensions = (function () {
            function ObjectDisplayExtensions() {
            }
            ObjectDisplayExtensions.IncludesOption = function (options, flag) {
                return (options & flag) == flag;
            };
            return ObjectDisplayExtensions;
        })();
        CodeAnalysis.ObjectDisplayExtensions = ObjectDisplayExtensions;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        (function (ObjectDisplayOptions) {
            ObjectDisplayOptions[ObjectDisplayOptions["None"] = 0] = "None";
            ObjectDisplayOptions[ObjectDisplayOptions["IncludeCodePoints"] = 1 << 0] = "IncludeCodePoints";
            ObjectDisplayOptions[ObjectDisplayOptions["IncludeTypeSuffix"] = 1 << 1] = "IncludeTypeSuffix";
            ObjectDisplayOptions[ObjectDisplayOptions["UseHexadecimalNumbers"] = 1 << 2] = "UseHexadecimalNumbers";
            ObjectDisplayOptions[ObjectDisplayOptions["UseQuotes"] = 1 << 3] = "UseQuotes";
        })(CodeAnalysis.ObjectDisplayOptions || (CodeAnalysis.ObjectDisplayOptions = {}));
        var ObjectDisplayOptions = CodeAnalysis.ObjectDisplayOptions;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var LanguageNames = (function () {
            function LanguageNames() {
            }
            LanguageNames.CSharp = "C#";
            LanguageNames.VisualBasic = "Visual Basic";
            return LanguageNames;
        })();
        CodeAnalysis.LanguageNames = LanguageNames;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var WellKnownMemberNames = (function () {
            function WellKnownMemberNames() {
            }
            WellKnownMemberNames.EnumBackingFieldName = "value__";
            WellKnownMemberNames.InstanceConstructorName = ".ctor";
            WellKnownMemberNames.StaticConstructorName = ".cctor";
            WellKnownMemberNames.Indexer = "this[]";
            WellKnownMemberNames.DestructorName = "Finalize";
            WellKnownMemberNames.DelegateInvokeName = "Invoke";
            WellKnownMemberNames.DelegateBeginInvokeName = "BeginInvoke";
            WellKnownMemberNames.DelegateEndInvokeName = "EndInvoke";
            WellKnownMemberNames.EntryPointMethodName = "Main";
            WellKnownMemberNames.DefaultScriptClassName = "Script";
            WellKnownMemberNames.ObjectToString = "ToString";
            WellKnownMemberNames.ObjectEquals = "Equals";
            WellKnownMemberNames.ObjectGetHashCode = "GetHashCode";
            WellKnownMemberNames.ImplicitConversionName = "op_Implicit";
            WellKnownMemberNames.ExplicitConversionName = "op_Explicit";
            WellKnownMemberNames.AdditionOperatorName = "op_Addition";
            WellKnownMemberNames.BitwiseAndOperatorName = "op_BitwiseAnd";
            WellKnownMemberNames.BitwiseOrOperatorName = "op_BitwiseOr";
            WellKnownMemberNames.DecrementOperatorName = "op_Decrement";
            WellKnownMemberNames.DivisionOperatorName = "op_Division";
            WellKnownMemberNames.EqualityOperatorName = "op_Equality";
            WellKnownMemberNames.ExclusiveOrOperatorName = "op_ExclusiveOr";
            WellKnownMemberNames.FalseOperatorName = "op_False";
            WellKnownMemberNames.GreaterThanOperatorName = "op_GreaterThan";
            WellKnownMemberNames.GreaterThanOrEqualOperatorName = "op_GreaterThanOrEqual";
            WellKnownMemberNames.IncrementOperatorName = "op_Increment";
            WellKnownMemberNames.InequalityOperatorName = "op_Inequality";
            WellKnownMemberNames.LeftShiftOperatorName = "op_LeftShift";
            WellKnownMemberNames.UnsignedLeftShiftOperatorName = "op_UnsignedLeftShift";
            WellKnownMemberNames.LessThanOperatorName = "op_LessThan";
            WellKnownMemberNames.LessThanOrEqualOperatorName = "op_LessThanOrEqual";
            WellKnownMemberNames.LogicalNotOperatorName = "op_LogicalNot";
            WellKnownMemberNames.LogicalOrOperatorName = "op_LogicalOr";
            WellKnownMemberNames.LogicalAndOperatorName = "op_LogicalAnd";
            WellKnownMemberNames.ModulusOperatorName = "op_Modulus";
            WellKnownMemberNames.MultiplyOperatorName = "op_Multiply";
            WellKnownMemberNames.OnesComplementOperatorName = "op_OnesComplement";
            WellKnownMemberNames.RightShiftOperatorName = "op_RightShift";
            WellKnownMemberNames.UnsignedRightShiftOperatorName = "op_UnsignedRightShift";
            WellKnownMemberNames.SubtractionOperatorName = "op_Subtraction";
            WellKnownMemberNames.TrueOperatorName = "op_True";
            WellKnownMemberNames.UnaryNegationOperatorName = "op_UnaryNegation";
            WellKnownMemberNames.UnaryPlusOperatorName = "op_UnaryPlus";
            WellKnownMemberNames.ConcatenateOperatorName = "op_Concatenate";
            WellKnownMemberNames.ExponentOperatorName = "op_Exponent";
            WellKnownMemberNames.IntegerDivisionOperatorName = "op_IntegerDivision";
            WellKnownMemberNames.LikeOperatorName = "op_Like";
            WellKnownMemberNames.GetEnumeratorMethodName = "GetEnumerator";
            WellKnownMemberNames.MoveNextMethodName = "MoveNext";
            WellKnownMemberNames.CurrentPropertyName = "Current";
            WellKnownMemberNames.ValuePropertyName = "Value";
            WellKnownMemberNames.CollectionInitializerAddMethodName = "Add";
            WellKnownMemberNames.GetAwaiter = "GetAwaiter";
            WellKnownMemberNames.IsCompleted = "IsCompleted";
            WellKnownMemberNames.GetResult = "GetResult";
            WellKnownMemberNames.OnCompleted = "OnCompleted";
            return WellKnownMemberNames;
        })();
        CodeAnalysis.WellKnownMemberNames = WellKnownMemberNames;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var AbstractSyntaxNavigator = (function () {
            function AbstractSyntaxNavigator() {
            }
            AbstractSyntaxNavigator.prototype.GetStepIntoFunction = function (skipped, directives, docComments) {
                throw new Error('not implemented');
            };
            AbstractSyntaxNavigator.prototype.GetPredicateFunction = function (includeZeroWidth) {
                return includeZeroWidth ? CodeAnalysis.SyntaxToken.Any : CodeAnalysis.SyntaxToken.NonZeroWidth;
            };
            AbstractSyntaxNavigator.prototype.Matches = function (predicate, token) {
                return predicate == null || ReferenceEquals(predicate, CodeAnalysis.SyntaxToken.Any) || predicate(token);
            };
            AbstractSyntaxNavigator.prototype.GetFirstToken_1312 = function (current, includeZeroWidth, includeSkipped, includeDirectives, includeDocumentationComments) {
                return this.GetFirstToken_2110(current, this.GetPredicateFunction(includeZeroWidth), this.GetStepIntoFunction(includeSkipped, includeDirectives, includeDocumentationComments));
            };
            AbstractSyntaxNavigator.prototype.GetLastToken_4205 = function (current, includeZeroWidth, includeSkipped, includeDirectives, includeDocumentationComments) {
                return this.GetLastToken_1389(current, this.GetPredicateFunction(includeZeroWidth), this.GetStepIntoFunction(includeSkipped, includeDirectives, includeDocumentationComments));
            };
            AbstractSyntaxNavigator.prototype.GetPreviousToken_1070 = function (current, includeZeroWidth, includeSkipped, includeDirectives, includeDocumentationComments) {
                return this.GetPreviousToken_1392(current, this.GetPredicateFunction(includeZeroWidth), this.GetStepIntoFunction(includeSkipped, includeDirectives, includeDocumentationComments));
            };
            AbstractSyntaxNavigator.prototype.GetNextToken_1578 = function (current, includeZeroWidth, includeSkipped, includeDirectives, includeDocumentationComments) {
                return this.GetNextToken_1071(current, this.GetPredicateFunction(includeZeroWidth), this.GetStepIntoFunction(includeSkipped, includeDirectives, includeDocumentationComments));
            };
            AbstractSyntaxNavigator.prototype.GetPreviousToken_1392 = function (current, predicate, stepInto) {
                return this.GetPreviousToken_3425(current, predicate, stepInto != null, stepInto);
            };
            AbstractSyntaxNavigator.prototype.GetNextToken_1071 = function (current, predicate, stepInto) {
                return this.GetNextToken_1799(current, predicate, stepInto != null, stepInto);
            };
            AbstractSyntaxNavigator.prototype.GetFirstToken_2110 = function (current, predicate, stepInto) {
                var childEnumerator = current.ChildNodesAndTokens().GetEnumerator();
                try {
                    while (childEnumerator.MoveNext()) {
                        var child = childEnumerator.Current;
                        var token = child.IsToken ? this.GetFirstToken_6850(child.AsToken(), predicate, stepInto) : this.GetFirstToken_2110(child.AsNode(), predicate, stepInto);
                        if (token.RawKind != AbstractSyntaxNavigator.None) {
                            return token;
                        }
                    }
                }
                finally {
                    if (childEnumerator !== null)
                        childEnumerator.Dispose();
                }
                return structDefault(CodeAnalysis.SyntaxToken);
            };
            AbstractSyntaxNavigator.prototype.GetLastToken_1389 = function (current, predicate, stepInto) {
                var childEnumerator = current.ChildNodesAndTokens().Reverse().GetEnumerator();
                try {
                    while (childEnumerator.MoveNext()) {
                        var child = childEnumerator.Current;
                        var token = child.IsToken ? this.GetLastToken_1408(child.AsToken(), predicate, stepInto) : this.GetLastToken_1389(child.AsNode(), predicate, stepInto);
                        if (token.RawKind != AbstractSyntaxNavigator.None) {
                            return token;
                        }
                    }
                }
                finally {
                    if (childEnumerator !== null)
                        childEnumerator.Dispose();
                }
                return structDefault(CodeAnalysis.SyntaxToken);
            };
            AbstractSyntaxNavigator.prototype.GetFirstToken_1704 = function (triviaList, predicate, stepInto) {
                System.Diagnostics.Debug.Assert(stepInto != null);
                var triviaEnumerator = triviaList.GetEnumerator();
                try {
                    while (triviaEnumerator.MoveNext()) {
                        var trivia = triviaEnumerator.Current;
                        if (trivia.HasStructure && stepInto(trivia)) {
                            var structure = trivia.GetStructure();
                            var token = this.GetFirstToken_2110(structure, predicate, stepInto);
                            if (token.RawKind != AbstractSyntaxNavigator.None) {
                                return token;
                            }
                        }
                    }
                }
                finally {
                    if (triviaEnumerator !== null)
                        triviaEnumerator.Dispose();
                }
                return structDefault(CodeAnalysis.SyntaxToken);
            };
            AbstractSyntaxNavigator.prototype.GetLastToken_1461 = function (list, predicate, stepInto) {
                System.Diagnostics.Debug.Assert(stepInto != null);
                var token = structDefault(CodeAnalysis.SyntaxToken);
                var triviaEnumerator = list.Reverse().GetEnumerator();
                try {
                    while (triviaEnumerator.MoveNext()) {
                        var trivia = triviaEnumerator.Current;
                        var token_ref0 = { refObj: token };
                        var ret_val__626 = this.TryGetLastTokenForStructuredTrivia(trivia, predicate, stepInto, token_ref0);
                        token = token_ref0.refObj;
                        if (ret_val__626) {
                            return token;
                        }
                    }
                }
                finally {
                    if (triviaEnumerator !== null)
                        triviaEnumerator.Dispose();
                }
                return structDefault(CodeAnalysis.SyntaxToken);
            };
            AbstractSyntaxNavigator.prototype.TryGetLastTokenForStructuredTrivia = function (trivia, predicate, stepInto, token) {
                token.refObj = structDefault(CodeAnalysis.SyntaxToken);
                if (!trivia.HasStructure || stepInto == null || !stepInto(trivia)) {
                    return false;
                }
                token.refObj = this.GetLastToken_1389(trivia.GetStructure(), predicate, stepInto);
                return token.refObj.RawKind != AbstractSyntaxNavigator.None;
            };
            AbstractSyntaxNavigator.prototype.GetFirstToken_6850 = function (token, predicate, stepInto) {
                if (stepInto != null) {
                    var firstToken = this.GetFirstToken_1704(token.LeadingTrivia, predicate, stepInto);
                    if (firstToken.RawKind != AbstractSyntaxNavigator.None) {
                        return firstToken;
                    }
                }
                if (this.Matches(predicate, token)) {
                    return token;
                }
                if (stepInto != null) {
                    var firstToken = this.GetFirstToken_1704(token.TrailingTrivia, predicate, stepInto);
                    if (firstToken.RawKind != AbstractSyntaxNavigator.None) {
                        return firstToken;
                    }
                }
                return structDefault(CodeAnalysis.SyntaxToken);
            };
            AbstractSyntaxNavigator.prototype.GetLastToken_1408 = function (token, predicate, stepInto) {
                if (stepInto != null) {
                    var lastToken = this.GetLastToken_1461(token.TrailingTrivia, predicate, stepInto);
                    if (lastToken.RawKind != AbstractSyntaxNavigator.None) {
                        return lastToken;
                    }
                }
                if (this.Matches(predicate, token)) {
                    return token;
                }
                if (stepInto != null) {
                    var lastToken = this.GetLastToken_1461(token.LeadingTrivia, predicate, stepInto);
                    if (lastToken.RawKind != AbstractSyntaxNavigator.None) {
                        return lastToken;
                    }
                }
                return structDefault(CodeAnalysis.SyntaxToken);
            };
            AbstractSyntaxNavigator.prototype.GetNextToken_1439 = function (current, predicate, stepInto) {
                var returnNext = false;
                var returnNext_ref0 = { refObj: returnNext };
                var ret_val__636 = this.GetNextToken_1982(current, current.Token.LeadingTrivia, predicate, stepInto, returnNext_ref0);
                returnNext = returnNext_ref0.refObj;
                var token = ret_val__636;
                if (token.RawKind != AbstractSyntaxNavigator.None) {
                    return token;
                }
                if (returnNext && (predicate == null || predicate == CodeAnalysis.SyntaxToken.Any || predicate(current.Token))) {
                    return current.Token;
                }
                var returnNext_ref0 = { refObj: returnNext };
                var ret_val__78 = this.GetNextToken_1982(current, current.Token.TrailingTrivia, predicate, stepInto, returnNext_ref0);
                returnNext = returnNext_ref0.refObj;
                token = ret_val__78;
                if (token.RawKind != AbstractSyntaxNavigator.None) {
                    return token;
                }
                return this.GetNextToken_1799(current.Token, predicate, false, stepInto);
            };
            AbstractSyntaxNavigator.prototype.GetPreviousToken_1349 = function (current, predicate, stepInto) {
                var returnPrevious = false;
                var returnPrevious_ref0 = { refObj: returnPrevious };
                var ret_val__220 = this.GetPreviousToken_1405(current, current.Token.TrailingTrivia, predicate, stepInto, returnPrevious_ref0);
                returnPrevious = returnPrevious_ref0.refObj;
                var token = ret_val__220;
                if (token.RawKind != AbstractSyntaxNavigator.None) {
                    return token;
                }
                if (returnPrevious && this.Matches(predicate, current.Token)) {
                    return current.Token;
                }
                var returnPrevious_ref0 = { refObj: returnPrevious };
                var ret_val__433 = this.GetPreviousToken_1405(current, current.Token.LeadingTrivia, predicate, stepInto, returnPrevious_ref0);
                returnPrevious = returnPrevious_ref0.refObj;
                token = ret_val__433;
                if (token.RawKind != AbstractSyntaxNavigator.None) {
                    return token;
                }
                return this.GetPreviousToken_3425(current.Token, predicate, false, stepInto);
            };
            AbstractSyntaxNavigator.prototype.GetNextToken_1982 = function (current, list, predicate, stepInto, returnNext) {
                var triviaEnumerator = list.GetEnumerator();
                try {
                    while (triviaEnumerator.MoveNext()) {
                        var trivia = triviaEnumerator.Current;
                        if (returnNext.refObj) {
                            if (trivia.HasStructure && stepInto != null && stepInto(trivia)) {
                                var structure = trivia.GetStructure();
                                var token = this.GetFirstToken_2110(structure, predicate, stepInto);
                                if (token.RawKind != AbstractSyntaxNavigator.None) {
                                    return token;
                                }
                            }
                        }
                        else if (trivia.op_Equality(current)) {
                            returnNext.refObj = true;
                        }
                    }
                }
                finally {
                    if (triviaEnumerator !== null)
                        triviaEnumerator.Dispose();
                }
                return structDefault(CodeAnalysis.SyntaxToken);
            };
            AbstractSyntaxNavigator.prototype.GetPreviousToken_1405 = function (current, list, predicate, stepInto, returnPrevious) {
                var token = structDefault(CodeAnalysis.SyntaxToken);
                var triviaEnumerator = list.Reverse().GetEnumerator();
                try {
                    while (triviaEnumerator.MoveNext()) {
                        var trivia = triviaEnumerator.Current;
                        if (returnPrevious.refObj) {
                            var token_ref0 = { refObj: token };
                            var ret_val__650 = this.TryGetLastTokenForStructuredTrivia(trivia, predicate, stepInto, token_ref0);
                            token = token_ref0.refObj;
                            if (ret_val__650) {
                                return token;
                            }
                        }
                        else if (trivia.op_Equality(current)) {
                            returnPrevious.refObj = true;
                        }
                    }
                }
                finally {
                    if (triviaEnumerator !== null)
                        triviaEnumerator.Dispose();
                }
                return structDefault(CodeAnalysis.SyntaxToken);
            };
            AbstractSyntaxNavigator.prototype.GetNextToken_1474 = function (node, predicate, stepInto) {
                while (node.Parent != null) {
                    var returnNext = false;
                    var childEnumerator = node.Parent.ChildNodesAndTokens().GetEnumerator();
                    try {
                        while (childEnumerator.MoveNext()) {
                            var child = childEnumerator.Current;
                            if (returnNext) {
                                if (child.IsToken) {
                                    var token = this.GetFirstToken_6850(child.AsToken(), predicate, stepInto);
                                    if (token.RawKind != AbstractSyntaxNavigator.None) {
                                        return token;
                                    }
                                }
                                else {
                                    var token = this.GetFirstToken_2110(child.AsNode(), predicate, stepInto);
                                    if (token.RawKind != AbstractSyntaxNavigator.None) {
                                        return token;
                                    }
                                }
                            }
                            else if (child.IsNode && child.AsNode() == node) {
                                returnNext = true;
                            }
                        }
                    }
                    finally {
                        if (childEnumerator !== null)
                            childEnumerator.Dispose();
                    }
                    node = node.Parent;
                }
                if (node.IsStructuredTrivia) {
                    return this.GetNextToken_1439(node.ParentTrivia, predicate, stepInto);
                }
                return structDefault(CodeAnalysis.SyntaxToken);
            };
            AbstractSyntaxNavigator.prototype.GetPreviousToken_6217 = function (node, predicate, stepInto) {
                while (node.Parent != null) {
                    var returnPrevious = false;
                    var childEnumerator = node.Parent.ChildNodesAndTokens().Reverse().GetEnumerator();
                    try {
                        while (childEnumerator.MoveNext()) {
                            var child = childEnumerator.Current;
                            if (returnPrevious) {
                                if (child.IsToken) {
                                    var token = this.GetLastToken_1408(child.AsToken(), predicate, stepInto);
                                    if (token.RawKind != AbstractSyntaxNavigator.None) {
                                        return token;
                                    }
                                }
                                else {
                                    var token = this.GetLastToken_1389(child.AsNode(), predicate, stepInto);
                                    if (token.RawKind != AbstractSyntaxNavigator.None) {
                                        return token;
                                    }
                                }
                            }
                            else if (child.IsNode && child.AsNode() == node) {
                                returnPrevious = true;
                            }
                        }
                    }
                    finally {
                        if (childEnumerator !== null)
                            childEnumerator.Dispose();
                    }
                    node = node.Parent;
                }
                if (node.IsStructuredTrivia) {
                    return this.GetPreviousToken_1349(node.ParentTrivia, predicate, stepInto);
                }
                return structDefault(CodeAnalysis.SyntaxToken);
            };
            AbstractSyntaxNavigator.prototype.GetNextToken_1799 = function (current, predicate, searchInsideCurrentTokenTrailingTrivia, stepInto) {
                System.Diagnostics.Debug.Assert(searchInsideCurrentTokenTrailingTrivia == false || stepInto != null);
                if (current.Parent != null) {
                    if (searchInsideCurrentTokenTrailingTrivia) {
                        var firstToken = this.GetFirstToken_1704(current.TrailingTrivia, predicate, stepInto);
                        if (firstToken.RawKind != AbstractSyntaxNavigator.None) {
                            return firstToken;
                        }
                    }
                    var returnNext = false;
                    var childEnumerator = current.Parent.ChildNodesAndTokens().GetEnumerator();
                    try {
                        while (childEnumerator.MoveNext()) {
                            var child = childEnumerator.Current;
                            if (returnNext) {
                                if (child.IsToken) {
                                    var token = this.GetFirstToken_6850(child.AsToken(), predicate, stepInto);
                                    if (token.RawKind != AbstractSyntaxNavigator.None) {
                                        return token;
                                    }
                                }
                                else {
                                    var token = this.GetFirstToken_2110(child.AsNode(), predicate, stepInto);
                                    if (token.RawKind != AbstractSyntaxNavigator.None) {
                                        return token;
                                    }
                                }
                            }
                            else if (child.IsToken && child.AsToken().op_Equality(current)) {
                                returnNext = true;
                            }
                        }
                    }
                    finally {
                        if (childEnumerator !== null)
                            childEnumerator.Dispose();
                    }
                    return this.GetNextToken_1474(current.Parent, predicate, stepInto);
                }
                return structDefault(CodeAnalysis.SyntaxToken);
            };
            AbstractSyntaxNavigator.prototype.GetPreviousToken_3425 = function (current, predicate, searchInsideCurrentTokenLeadingTrivia, stepInto) {
                System.Diagnostics.Debug.Assert(searchInsideCurrentTokenLeadingTrivia == false || stepInto != null);
                if (current.Parent != null) {
                    if (searchInsideCurrentTokenLeadingTrivia) {
                        var lastToken = this.GetLastToken_1461(current.LeadingTrivia, predicate, stepInto);
                        if (lastToken.RawKind != AbstractSyntaxNavigator.None) {
                            return lastToken;
                        }
                    }
                    var returnPrevious = false;
                    var childEnumerator = current.Parent.ChildNodesAndTokens().Reverse().GetEnumerator();
                    try {
                        while (childEnumerator.MoveNext()) {
                            var child = childEnumerator.Current;
                            if (returnPrevious) {
                                if (child.IsToken) {
                                    var token = this.GetLastToken_1408(child.AsToken(), predicate, stepInto);
                                    if (token.RawKind != AbstractSyntaxNavigator.None) {
                                        return token;
                                    }
                                }
                                else {
                                    var token = this.GetLastToken_1389(child.AsNode(), predicate, stepInto);
                                    if (token.RawKind != AbstractSyntaxNavigator.None) {
                                        return token;
                                    }
                                }
                            }
                            else if (child.IsToken && child.AsToken().op_Equality(current)) {
                                returnPrevious = true;
                            }
                        }
                    }
                    finally {
                        if (childEnumerator !== null)
                            childEnumerator.Dispose();
                    }
                    return this.GetPreviousToken_6217(current.Parent, predicate, stepInto);
                }
                return structDefault(CodeAnalysis.SyntaxToken);
            };
            AbstractSyntaxNavigator.None = 0;
            return AbstractSyntaxNavigator;
        })();
        CodeAnalysis.AbstractSyntaxNavigator = AbstractSyntaxNavigator;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Syntax;
        (function (Syntax) {
            var AbstractWarningStateMap = (function () {
                function AbstractWarningStateMap() {
                }
                AbstractWarningStateMap.prototype.ctor_9031 = function (syntaxTree) {
                    this.warningStateMapEntries = this.CreateWarningStateMapEntries(syntaxTree);
                    return this;
                };
                AbstractWarningStateMap.prototype.CreateWarningStateMapEntries = function (syntaxTree) {
                    throw new Error('not implemented');
                };
                AbstractWarningStateMap.prototype.GetWarningState = function (id, position) {
                    var entry = this.GetEntryAtOrBeforePosition(position);
                    var state = 0;
                    var state_ref0 = { refObj: state };
                    var ret_val__652 = entry.SpecificWarningOption.TryGetValue(id, state_ref0);
                    state = state_ref0.refObj;
                    if (ret_val__652) {
                        return state;
                    }
                    return entry.GeneralWarningOption;
                };
                AbstractWarningStateMap.prototype.GetEntryAtOrBeforePosition = function (position) {
                    System.Diagnostics.Debug.Assert(this.warningStateMapEntries != null && this.warningStateMapEntries.length > 0);
                    var r = TSArray.BinarySearch(this.warningStateMapEntries, new AbstractWarningStateMap.WarningStateMapEntry().ctor_1040(position));
                    return this.warningStateMapEntries[r >= 0 ? r : ((~r) - 1)];
                };
                return AbstractWarningStateMap;
            })();
            Syntax.AbstractWarningStateMap = AbstractWarningStateMap;
            var AbstractWarningStateMap;
            (function (AbstractWarningStateMap) {
                var WarningStateMapEntry = (function () {
                    function WarningStateMapEntry() {
                        this.Position = 0;
                        this.GeneralWarningOption = 0;
                    }
                    WarningStateMapEntry.prototype.ctor_1040 = function (position) {
                        this.Position = position;
                        this.GeneralWarningOption = 0 /* Default */;
                        this.SpecificWarningOption = System.Collections.Immutable.ImmutableDictionary.Create();
                        return this;
                    };
                    WarningStateMapEntry.prototype.ctor_1499 = function (position, general, specific) {
                        this.Position = position;
                        this.GeneralWarningOption = general;
                        this.SpecificWarningOption = specific != null ? specific : System.Collections.Immutable.ImmutableDictionary.Create();
                        return this;
                    };
                    WarningStateMapEntry.prototype.CompareTo = function (other) {
                        return this.Position - other.Position;
                    };
                    return WarningStateMapEntry;
                })();
                AbstractWarningStateMap.WarningStateMapEntry = WarningStateMapEntry;
            })(AbstractWarningStateMap = Syntax.AbstractWarningStateMap || (Syntax.AbstractWarningStateMap = {}));
        })(Syntax = CodeAnalysis.Syntax || (CodeAnalysis.Syntax = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var AnnotationExtensions = (function () {
            function AnnotationExtensions() {
            }
            AnnotationExtensions.WithAdditionalAnnotations_6931 = function (node) {
                var annotations = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    annotations[_i - 1] = arguments[_i];
                }
                return node.WithAdditionalAnnotationsInternal(annotations);
            };
            AnnotationExtensions.WithAdditionalAnnotations_2071 = function (node, annotations) {
                return node.WithAdditionalAnnotationsInternal(annotations);
            };
            AnnotationExtensions.WithoutAnnotations_1188 = function (node) {
                var annotations = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    annotations[_i - 1] = arguments[_i];
                }
                return node.GetNodeWithoutAnnotations(annotations);
            };
            AnnotationExtensions.WithoutAnnotations_1188_Arr = function (node, annotations) {
                return node.GetNodeWithoutAnnotations(annotations);
            };
            AnnotationExtensions.WithoutAnnotations_1837 = function (node, annotations) {
                return node.GetNodeWithoutAnnotations(annotations);
            };
            AnnotationExtensions.WithoutAnnotations_7581 = function (node, annotationKind) {
                if (node.HasAnnotations_4203(annotationKind)) {
                    return AnnotationExtensions.WithoutAnnotations_1188_Arr(node, System.Linq.Enumerable.ToArray(node.GetAnnotations_1417(annotationKind)));
                }
                else {
                    return node;
                }
            };
            return AnnotationExtensions;
        })();
        CodeAnalysis.AnnotationExtensions = AnnotationExtensions;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var ChildSyntaxList = (function () {
            function ChildSyntaxList() {
                this.count = 0;
            }
            ChildSyntaxList.prototype.ctor_5028 = function (node) {
                this.node = node;
                this.count = ChildSyntaxList.CountNodes(node.Green);
                return this;
            };
            Object.defineProperty(ChildSyntaxList.prototype, "Count", {
                get: function () {
                    return this.count;
                },
                enumerable: true,
                configurable: true
            });
            ChildSyntaxList.CountNodes = function (green) {
                var n = 0;
                for (var i = 0, s = green.SlotCount; i < s; i++) {
                    var child = green.GetSlot(i);
                    if (child != null) {
                        if (!child.IsList) {
                            n++;
                        }
                        else {
                            n += child.SlotCount;
                        }
                    }
                }
                return n;
            };
            ChildSyntaxList.prototype.$get$ = function (index) {
                if (((index >>> 0) < this.count)) {
                    return ChildSyntaxList.ItemInternal(this.node, index);
                }
                throw new System.ArgumentOutOfRangeException("index");
            };
            Object.defineProperty(ChildSyntaxList.prototype, "Node", {
                get: function () {
                    return this.node;
                },
                enumerable: true,
                configurable: true
            });
            ChildSyntaxList.Occupancy = function (green) {
                return green.IsList ? green.SlotCount : 1;
            };
            ChildSyntaxList.ItemInternal = function (node, index) {
                var greenChild;
                var green = node.Green;
                var idx = index;
                var slotIndex = 0;
                var position = node.Position;
                while (true) {
                    greenChild = green.GetSlot(slotIndex);
                    if (greenChild != null) {
                        var currentOccupancy = ChildSyntaxList.Occupancy(greenChild);
                        if (idx < currentOccupancy) {
                            break;
                        }
                        idx -= currentOccupancy;
                        position += greenChild.FullWidth;
                    }
                    slotIndex++;
                }
                var red = node.GetNodeSlot(slotIndex);
                if (!greenChild.IsList) {
                    if (red != null) {
                        return CodeAnalysis.SyntaxNodeOrToken.op_Implicit_1792(red);
                    }
                }
                else if (red != null) {
                    var redChild = red.GetNodeSlot(idx);
                    if (redChild != null) {
                        return CodeAnalysis.SyntaxNodeOrToken.op_Implicit_1792(redChild);
                    }
                    greenChild = greenChild.GetSlot(idx);
                    position = red.GetChildPosition(idx);
                }
                else {
                    position += greenChild.GetSlotOffset(idx);
                    greenChild = greenChild.GetSlot(idx);
                }
                return new CodeAnalysis.SyntaxNodeOrToken().ctor_1484(node, greenChild, position, index);
            };
            ChildSyntaxList.ChildThatContainsPosition = function (node, targetPosition) {
                System.Diagnostics.Debug.Assert(node.FullSpan.Contains_2103(targetPosition));
                var red = node;
                var green = node.Green;
                var position = node.Position;
                var idx = 0;
                var dbgLoopCount = 0;
                do {
                    System.Diagnostics.Debug.Assert(dbgLoopCount < 2, "A list of lists. Impossible!");
                    dbgLoopCount++;
                    for (var slotIndex = 0;; slotIndex++) {
                        var greenChild = green.GetSlot(slotIndex);
                        if (greenChild != null) {
                            var endPosition = position + greenChild.FullWidth;
                            if (targetPosition < endPosition) {
                                if (red != null) {
                                    red = red.GetNodeSlot(slotIndex);
                                }
                                green = greenChild;
                                break;
                            }
                            position = endPosition;
                            idx += ChildSyntaxList.Occupancy(greenChild);
                        }
                    }
                } while (green.IsList);
                return red != null ? CodeAnalysis.SyntaxNodeOrToken.op_Implicit_1792(red) : new CodeAnalysis.SyntaxNodeOrToken().ctor_1484(node, green, position, idx);
            };
            ChildSyntaxList.ItemInternalAsNode = function (node, index) {
                var greenChild;
                var green = node.Green;
                var idx = index;
                var slotIndex = 0;
                while (true) {
                    greenChild = green.GetSlot(slotIndex);
                    if (greenChild != null) {
                        var currentOccupancy = ChildSyntaxList.Occupancy(greenChild);
                        if (idx < currentOccupancy) {
                            break;
                        }
                        idx -= currentOccupancy;
                    }
                    slotIndex++;
                }
                var red = node.GetNodeSlot(slotIndex);
                if (greenChild.IsList && red != null) {
                    return red.GetNodeSlot(idx);
                }
                return red;
            };
            Object.defineProperty(ChildSyntaxList.prototype, "Nodes", {
                get: function () {
                    return System.Linq.Enumerable.ToArray(this);
                },
                enumerable: true,
                configurable: true
            });
            ChildSyntaxList.prototype.Any = function () {
                return this.count != 0;
            };
            ChildSyntaxList.prototype.First = function () {
                if (this.Any()) {
                    return this.$get$(0);
                }
                throw new System.InvalidOperationException();
            };
            ChildSyntaxList.prototype.Last = function () {
                if (this.Any()) {
                    return this.$get$(this.count - 1);
                }
                throw new System.InvalidOperationException();
            };
            ChildSyntaxList.prototype.Reverse = function () {
                return new ChildSyntaxList.Reversed().ctor_4304(this.node, this.count);
            };
            ChildSyntaxList.prototype.GetEnumerator = function () {
                if (this.node == null) {
                    return Roslyn.Utilities.SpecializedCollections.EmptyEnumerator();
                }
                return new ChildSyntaxList.EnumeratorImpl().ctor_1716(this.node, this.count);
            };
            ChildSyntaxList.prototype.Equals = function (obj) {
                return obj instanceof ChildSyntaxList && this.Equals_4638(obj);
            };
            ChildSyntaxList.prototype.Equals_4638 = function (other) {
                return this.node == other.node;
            };
            ChildSyntaxList.prototype.GetHashCode = function () {
                return this.node == null ? 0 : this.node.GetHashCode();
            };
            ChildSyntaxList.prototype.op_Equality = function (list2) {
                var list1 = this;
                return list1.Equals_4638(list2);
            };
            ChildSyntaxList.prototype.op_Inequality = function (list2) {
                var list1 = this;
                return !list1.Equals_4638(list2);
            };
            return ChildSyntaxList;
        })();
        CodeAnalysis.ChildSyntaxList = ChildSyntaxList;
        var ChildSyntaxList;
        (function (ChildSyntaxList) {
            var Enumerator = (function () {
                function Enumerator() {
                    this.count = 0;
                    this.childIndex = 0;
                }
                Enumerator.prototype.ctor_2091 = function (node, count) {
                    this.node = node;
                    this.count = count;
                    this.childIndex = -1;
                    return this;
                };
                Enumerator.prototype.InitializeFrom = function (node) {
                    this.node = node;
                    this.count = ChildSyntaxList.CountNodes(node.Green);
                    this.childIndex = -1;
                };
                Enumerator.prototype.MoveNext = function () {
                    var newIndex = this.childIndex + 1;
                    if (newIndex < this.count) {
                        this.childIndex = newIndex;
                        return true;
                    }
                    return false;
                };
                Object.defineProperty(Enumerator.prototype, "Current", {
                    get: function () {
                        return ChildSyntaxList.ItemInternal(this.node, this.childIndex);
                    },
                    enumerable: true,
                    configurable: true
                });
                Enumerator.prototype.Reset = function () {
                    this.childIndex = -1;
                };
                Enumerator.prototype.TryMoveNextAndGetCurrent = function (current) {
                    if (!this.MoveNext()) {
                        return false;
                    }
                    current.refObj = ChildSyntaxList.ItemInternal(this.node, this.childIndex);
                    return true;
                };
                Enumerator.prototype.TryMoveNextAndGetCurrentAsNode = function () {
                    while (this.MoveNext()) {
                        var nodeValue = ChildSyntaxList.ItemInternalAsNode(this.node, this.childIndex);
                        if (nodeValue != null) {
                            return nodeValue;
                        }
                    }
                    return null;
                };
                return Enumerator;
            })();
            ChildSyntaxList.Enumerator = Enumerator;
        })(ChildSyntaxList = CodeAnalysis.ChildSyntaxList || (CodeAnalysis.ChildSyntaxList = {}));
        var ChildSyntaxList;
        (function (ChildSyntaxList) {
            var EnumeratorImpl = (function () {
                function EnumeratorImpl() {
                    this.enumerator = structDefault(ChildSyntaxList.Enumerator);
                }
                EnumeratorImpl.prototype.ctor_1716 = function (node, count) {
                    this.enumerator = new ChildSyntaxList.Enumerator().ctor_2091(node, count);
                    return this;
                };
                Object.defineProperty(EnumeratorImpl.prototype, "Current", {
                    get: function () {
                        return this.enumerator.Current;
                    },
                    enumerable: true,
                    configurable: true
                });
                EnumeratorImpl.prototype.MoveNext = function () {
                    return this.enumerator.MoveNext();
                };
                EnumeratorImpl.prototype.Reset = function () {
                    this.enumerator.Reset();
                };
                EnumeratorImpl.prototype.Dispose = function () {
                };
                return EnumeratorImpl;
            })();
            ChildSyntaxList.EnumeratorImpl = EnumeratorImpl;
            var Reversed = (function () {
                function Reversed() {
                    this.count = 0;
                }
                Reversed.prototype.ctor_4304 = function (node, count) {
                    this.node = node;
                    this.count = count;
                    return this;
                };
                Reversed.prototype.GetEnumerator = function () {
                    if (this.node == null) {
                        return Roslyn.Utilities.SpecializedCollections.EmptyEnumerator();
                    }
                    return new Reversed.EnumeratorImpl().ctor_1716(this.node, this.count);
                };
                Reversed.prototype.GetHashCode = function () {
                    return this.node != null ? Roslyn.Utilities.Hash.Combine_1641(this.node.GetHashCode(), this.count) : 0;
                };
                Reversed.prototype.Equals = function (obj) {
                    return (obj instanceof Reversed) && this.Equals_1958(obj);
                };
                Reversed.prototype.Equals_1958 = function (other) {
                    return this.node == other.node && this.count == other.count;
                };
                return Reversed;
            })();
            ChildSyntaxList.Reversed = Reversed;
            var Reversed;
            (function (Reversed) {
                var Enumerator = (function () {
                    function Enumerator() {
                        this.count = 0;
                        this.childIndex = 0;
                    }
                    Enumerator.prototype.ctor_2091 = function (node, count) {
                        this.node = node;
                        this.count = count;
                        this.childIndex = count;
                        return this;
                    };
                    Enumerator.prototype.MoveNext = function () {
                        return --this.childIndex >= 0;
                    };
                    Object.defineProperty(Enumerator.prototype, "Current", {
                        get: function () {
                            return ChildSyntaxList.ItemInternal(this.node, this.childIndex);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Enumerator.prototype.Reset = function () {
                        this.childIndex = this.count;
                    };
                    return Enumerator;
                })();
                Reversed.Enumerator = Enumerator;
            })(Reversed = ChildSyntaxList.Reversed || (ChildSyntaxList.Reversed = {}));
            var Reversed;
            (function (Reversed) {
                var EnumeratorImpl = (function () {
                    function EnumeratorImpl() {
                        this.enumerator = structDefault(Reversed.Enumerator);
                    }
                    EnumeratorImpl.prototype.ctor_1716 = function (node, count) {
                        this.enumerator = new Reversed.Enumerator().ctor_2091(node, count);
                        return this;
                    };
                    Object.defineProperty(EnumeratorImpl.prototype, "Current", {
                        get: function () {
                            return this.enumerator.Current;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    EnumeratorImpl.prototype.MoveNext = function () {
                        return this.enumerator.MoveNext();
                    };
                    EnumeratorImpl.prototype.Reset = function () {
                        this.enumerator.Reset();
                    };
                    EnumeratorImpl.prototype.Dispose = function () {
                    };
                    return EnumeratorImpl;
                })();
                Reversed.EnumeratorImpl = EnumeratorImpl;
            })(Reversed = ChildSyntaxList.Reversed || (ChildSyntaxList.Reversed = {}));
        })(ChildSyntaxList = CodeAnalysis.ChildSyntaxList || (CodeAnalysis.ChildSyntaxList = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var GreenNode = (function () {
            function GreenNode() {
                this.kind = 0;
                this.flags = 0;
                this.slotCount = 0;
                this.fullWidth = 0;
            }
            GreenNode.prototype.ctor_1817 = function (kind) {
                this.kind = kind;
                return this;
            };
            GreenNode.prototype.ctor_1801 = function (kind, fullWidth) {
                this.kind = kind;
                this.fullWidth = fullWidth;
                return this;
            };
            GreenNode.prototype.ctor_1879 = function (kind, diagnostics, fullWidth) {
                this.kind = kind;
                this.fullWidth = fullWidth;
                if (diagnostics != null && diagnostics.length > 0) {
                    this.flags |= GreenNode.NodeFlags.ContainsDiagnostics;
                    GreenNode.diagnosticsTable.Add(this, diagnostics);
                }
                return this;
            };
            GreenNode.prototype.ctor_1355 = function (kind, diagnostics) {
                this.kind = kind;
                if (diagnostics != null && diagnostics.length > 0) {
                    this.flags |= GreenNode.NodeFlags.ContainsDiagnostics;
                    GreenNode.diagnosticsTable.Add(this, diagnostics);
                }
                return this;
            };
            GreenNode.prototype.ctor_6664 = function (kind, diagnostics, annotations) {
                this.ctor_1355(kind, diagnostics);
                if (annotations != null && annotations.length > 0) {
                    var annotationEnumerator = annotations.GetEnumerator();
                    try {
                        while (annotationEnumerator.MoveNext()) {
                            var annotation = annotationEnumerator.Current;
                            if (annotation == null)
                                throw new System.ArgumentException("annotations", "");
                        }
                    }
                    finally {
                        if (annotationEnumerator !== null)
                            annotationEnumerator.Dispose();
                    }
                    this.flags |= GreenNode.NodeFlags.ContainsAnnotations;
                    GreenNode.annotationsTable.Add(this, annotations);
                }
                return this;
            };
            GreenNode.prototype.ctor_7650 = function (kind, diagnostics, annotations, fullWidth) {
                this.ctor_1879(kind, diagnostics, fullWidth);
                if (annotations != null && annotations.length > 0) {
                    var annotationEnumerator = annotations.GetEnumerator();
                    try {
                        while (annotationEnumerator.MoveNext()) {
                            var annotation = annotationEnumerator.Current;
                            if (annotation == null)
                                throw new System.ArgumentException("annotations", "");
                        }
                    }
                    finally {
                        if (annotationEnumerator !== null)
                            annotationEnumerator.Dispose();
                    }
                    this.flags |= GreenNode.NodeFlags.ContainsAnnotations;
                    GreenNode.annotationsTable.Add(this, annotations);
                }
                return this;
            };
            GreenNode.prototype.AdjustFlagsAndWidth = function (node) {
                System.Diagnostics.Debug.Assert(node != null, "PERF: caller must ensure that node!=null, we do not want to re-check that here.");
                this.flags |= (node.flags & GreenNode.NodeFlags.InheritMask);
                this.fullWidth += node.fullWidth;
            };
            Object.defineProperty(GreenNode.prototype, "RawKind", {
                get: function () {
                    return this.kind;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GreenNode.prototype, "IsList", {
                get: function () {
                    return this.RawKind == GreenNode.ListKind;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GreenNode.prototype, "IsStructuredTrivia", {
                get: function () {
                    return false;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GreenNode.prototype, "IsDirective", {
                get: function () {
                    return false;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GreenNode.prototype, "IsToken", {
                get: function () {
                    return false;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GreenNode.prototype, "SlotCount", {
                get: function () {
                    var count = this.slotCount;
                    if (count == Byte.MaxValue) {
                        count = this.GetSlotCount();
                    }
                    return count;
                },
                set: function (value) {
                    this.slotCount = value;
                },
                enumerable: true,
                configurable: true
            });
            GreenNode.prototype.GetSlot = function (index) {
                throw new Error('not implemented');
            };
            GreenNode.prototype.GetSlotCount = function () {
                return this.slotCount;
            };
            GreenNode.prototype.GetSlotOffset = function (index) {
                throw new Error('not implemented');
            };
            Object.defineProperty(GreenNode.prototype, "Flags", {
                get: function () {
                    return this.flags;
                },
                enumerable: true,
                configurable: true
            });
            GreenNode.prototype.SetFlags = function (flags) {
                this.flags |= flags;
            };
            GreenNode.prototype.ClearFlags = function (flags) {
                this.flags &= ~flags;
            };
            Object.defineProperty(GreenNode.prototype, "IsMissing", {
                get: function () {
                    return (this.flags & GreenNode.NodeFlags.IsNotMissing) == 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GreenNode.prototype, "ParsedInAsync", {
                get: function () {
                    return (this.flags & GreenNode.NodeFlags.FactoryContextIsInAsync) != 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GreenNode.prototype, "ParsedInQuery", {
                get: function () {
                    return (this.flags & GreenNode.NodeFlags.FactoryContextIsInQuery) != 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GreenNode.prototype, "ParsedInIterator", {
                get: function () {
                    return (this.flags & GreenNode.NodeFlags.FactoryContextIsInIterator) != 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GreenNode.prototype, "ContainsSkippedText", {
                get: function () {
                    return (this.flags & GreenNode.NodeFlags.ContainsSkippedText) != 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GreenNode.prototype, "ContainsStructuredTrivia", {
                get: function () {
                    return (this.flags & GreenNode.NodeFlags.ContainsStructuredTrivia) != 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GreenNode.prototype, "ContainsDirectives", {
                get: function () {
                    return (this.flags & GreenNode.NodeFlags.ContainsDirectives) != 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GreenNode.prototype, "ContainsDiagnostics", {
                get: function () {
                    return (this.flags & GreenNode.NodeFlags.ContainsDiagnostics) != 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GreenNode.prototype, "ContainsAnnotations", {
                get: function () {
                    return (this.flags & GreenNode.NodeFlags.ContainsAnnotations) != 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GreenNode.prototype, "FullWidth", {
                get: function () {
                    return this.fullWidth;
                },
                set: function (value) {
                    this.fullWidth = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GreenNode.prototype, "Width", {
                get: function () {
                    return this.fullWidth - this.GetLeadingTriviaWidth() - this.GetTrailingTriviaWidth();
                },
                enumerable: true,
                configurable: true
            });
            GreenNode.prototype.GetLeadingTriviaWidth = function () {
                return this.FullWidth != 0 ? this.GetFirstTerminal().GetLeadingTriviaWidth() : 0;
            };
            GreenNode.prototype.GetTrailingTriviaWidth = function () {
                return this.FullWidth != 0 ? this.GetLastTerminal().GetTrailingTriviaWidth() : 0;
            };
            Object.defineProperty(GreenNode.prototype, "HasLeadingTrivia", {
                get: function () {
                    return this.GetLeadingTriviaWidth() != 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GreenNode.prototype, "HasTrailingTrivia", {
                get: function () {
                    return this.GetTrailingTriviaWidth() != 0;
                },
                enumerable: true,
                configurable: true
            });
            GreenNode.prototype.ctor_1105 = function (reader) {
                var kindBits = reader.ReadUInt16();
                this.kind = (kindBits & ~GreenNode.ExtendedSerializationInfoMask);
                if ((kindBits & GreenNode.ExtendedSerializationInfoMask) != 0) {
                    var diagnostics = reader.ReadValue();
                    if (diagnostics != null && diagnostics.length > 0) {
                        this.flags |= GreenNode.NodeFlags.ContainsDiagnostics;
                        GreenNode.diagnosticsTable.Add(this, diagnostics);
                    }
                    var annotations = reader.ReadValue();
                    if (annotations != null && annotations.length > 0) {
                        this.flags |= GreenNode.NodeFlags.ContainsAnnotations;
                        GreenNode.annotationsTable.Add(this, annotations);
                    }
                }
                return this;
            };
            GreenNode.prototype.WriteTo = function (writer) {
                this.WriteTo_2123(writer);
            };
            GreenNode.prototype.WriteTo_2123 = function (writer) {
                var kindBits = this.kind;
                var hasDiagnostics = this.GetDiagnostics().length > 0;
                var hasAnnotations = this.GetAnnotations_1741().length > 0;
                if (hasDiagnostics || hasAnnotations) {
                    kindBits |= GreenNode.ExtendedSerializationInfoMask;
                }
                writer.WriteUInt16(kindBits);
                if (hasDiagnostics || hasAnnotations) {
                    writer.WriteValue(hasDiagnostics ? this.GetDiagnostics() : null);
                    writer.WriteValue(hasAnnotations ? this.GetAnnotations_1741() : null);
                }
            };
            GreenNode.prototype.GetReader = function () {
                throw new Error('not implemented');
            };
            GreenNode.prototype.HasAnnotations_4203 = function (annotationKind) {
                var annotations = this.GetAnnotations_1741();
                if (annotations == GreenNode.NoAnnotations) {
                    return false;
                }
                var aEnumerator = annotations.GetEnumerator();
                try {
                    while (aEnumerator.MoveNext()) {
                        var a = aEnumerator.Current;
                        if (a.Kind == annotationKind) {
                            return true;
                        }
                    }
                }
                finally {
                    if (aEnumerator !== null)
                        aEnumerator.Dispose();
                }
                return false;
            };
            GreenNode.prototype.HasAnnotations_9693 = function (annotationKinds) {
                var annotations = this.GetAnnotations_1741();
                if (annotations == GreenNode.NoAnnotations) {
                    return false;
                }
                var aEnumerator = annotations.GetEnumerator();
                try {
                    while (aEnumerator.MoveNext()) {
                        var a = aEnumerator.Current;
                        if (System.Linq.Enumerable.Contains(annotationKinds, a.Kind)) {
                            return true;
                        }
                    }
                }
                finally {
                    if (aEnumerator !== null)
                        aEnumerator.Dispose();
                }
                return false;
            };
            GreenNode.prototype.HasAnnotation = function (annotation) {
                var annotations = this.GetAnnotations_1741();
                if (annotations == GreenNode.NoAnnotations) {
                    return false;
                }
                var aEnumerator = annotations.GetEnumerator();
                try {
                    while (aEnumerator.MoveNext()) {
                        var a = aEnumerator.Current;
                        if (a.op_Equality(annotation)) {
                            return true;
                        }
                    }
                }
                finally {
                    if (aEnumerator !== null)
                        aEnumerator.Dispose();
                }
                return false;
            };
            GreenNode.prototype.GetAnnotations_1417 = function (annotationKind) {
                if (System.String.IsNullOrWhiteSpace(annotationKind)) {
                    throw new System.ArgumentNullException("annotationKind");
                }
                var annotations = this.GetAnnotations_1741();
                if (annotations == GreenNode.NoAnnotations) {
                    return GreenNode.NoAnnotationsEnumerable;
                }
                return GreenNode.GetAnnotationsSlow_1547(annotations, annotationKind);
            };
            GreenNode.GetAnnotationsSlow_1547 = function (annotations, annotationKind) {
                var __result = new Array();
                var annotationEnumerator = annotations.GetEnumerator();
                try {
                    while (annotationEnumerator.MoveNext()) {
                        var annotation = annotationEnumerator.Current;
                        if (annotation.Kind == annotationKind) {
                            __result.push(annotation);
                        }
                    }
                }
                finally {
                    if (annotationEnumerator !== null)
                        annotationEnumerator.Dispose();
                }
                return __result;
            };
            GreenNode.prototype.GetAnnotations_2034 = function (annotationKinds) {
                if (annotationKinds == null) {
                    throw new System.ArgumentNullException("annotationKinds");
                }
                var annotations = this.GetAnnotations_1741();
                if (annotations == GreenNode.NoAnnotations) {
                    return GreenNode.NoAnnotationsEnumerable;
                }
                return GreenNode.GetAnnotationsSlow_1032(annotations, annotationKinds);
            };
            GreenNode.GetAnnotationsSlow_1032 = function (annotations, annotationKinds) {
                var __result = new Array();
                var annotationEnumerator = annotations.GetEnumerator();
                try {
                    while (annotationEnumerator.MoveNext()) {
                        var annotation = annotationEnumerator.Current;
                        if (System.Linq.Enumerable.Contains(annotationKinds, annotation.Kind)) {
                            __result.push(annotation);
                        }
                    }
                }
                finally {
                    if (annotationEnumerator !== null)
                        annotationEnumerator.Dispose();
                }
                return __result;
            };
            GreenNode.prototype.GetAnnotations_1741 = function () {
                if (this.ContainsAnnotations) {
                    var annotations;
                    var annotations_ref0 = { refObj: annotations };
                    var ret_val__925 = GreenNode.annotationsTable.TryGetValue(this, annotations_ref0);
                    annotations = annotations_ref0.refObj;
                    if (ret_val__925) {
                        System.Diagnostics.Debug.Assert(annotations.length != 0, "we should return nonempty annotations or NoAnnotations");
                        return annotations;
                    }
                }
                return GreenNode.NoAnnotations;
            };
            GreenNode.prototype.SetAnnotations = function (annotations) {
                throw new Error('not implemented');
            };
            GreenNode.prototype.GetDiagnostics = function () {
                if (this.ContainsDiagnostics) {
                    var diags;
                    var diags_ref0 = { refObj: diags };
                    var ret_val__96 = GreenNode.diagnosticsTable.TryGetValue(this, diags_ref0);
                    diags = diags_ref0.refObj;
                    if (ret_val__96) {
                        return diags;
                    }
                }
                return GreenNode.NoDiagnostics;
            };
            GreenNode.prototype.SetDiagnostics = function (diagnostics) {
                throw new Error('not implemented');
            };
            GreenNode.prototype.ToFullString = function () {
                throw new Error('not implemented');
            };
            GreenNode.prototype.WriteTo_1120 = function (writer) {
                this.WriteTo_1077(writer, true, true);
            };
            GreenNode.prototype.WriteTo_1077 = function (writer, leading, trailing) {
                var first = true;
                var n = this.SlotCount;
                var lastIndex = n - 1;
                for (; lastIndex >= 0; lastIndex--) {
                    var child = this.GetSlot(lastIndex);
                    if (child != null) {
                        break;
                    }
                }
                for (var i = 0; i < n; i++) {
                    var child = this.GetSlot(i);
                    if (child != null) {
                        child.WriteTo_1077(writer, leading || !first, trailing || (i < lastIndex));
                        first = false;
                    }
                }
            };
            Object.defineProperty(GreenNode.prototype, "RawContextualKind", {
                get: function () {
                    return this.RawKind;
                },
                enumerable: true,
                configurable: true
            });
            GreenNode.prototype.GetValue = function () {
                return null;
            };
            GreenNode.prototype.GetValueText = function () {
                return System.String.Empty;
            };
            GreenNode.prototype.GetLeadingTriviaCore = function () {
                return null;
            };
            GreenNode.prototype.GetTrailingTriviaCore = function () {
                return null;
            };
            GreenNode.prototype.WithLeadingTrivia = function (trivia) {
                return this;
            };
            GreenNode.prototype.WithTrailingTrivia = function (trivia) {
                return this;
            };
            GreenNode.prototype.GetFirstTerminal = function () {
                var node = this;
                do {
                    var firstChild = null;
                    for (var i = 0, n = node.SlotCount; i < n; i++) {
                        var child = node.GetSlot(i);
                        if (child != null) {
                            firstChild = child;
                            break;
                        }
                    }
                    node = firstChild;
                } while (node != null && node.slotCount > 0);
                return node;
            };
            GreenNode.prototype.GetLastTerminal = function () {
                var node = this;
                do {
                    var lastChild = null;
                    for (var i = node.SlotCount - 1; i >= 0; i--) {
                        var child = node.GetSlot(i);
                        if (child != null) {
                            lastChild = child;
                            break;
                        }
                    }
                    node = lastChild;
                } while (node != null && node.slotCount > 0);
                return node;
            };
            GreenNode.prototype.GetLastNonmissingTerminal = function () {
                var node = this;
                do {
                    var nonmissingChild = null;
                    for (var i = node.SlotCount - 1; i >= 0; i--) {
                        var child = node.GetSlot(i);
                        if (child != null && !child.IsMissing) {
                            nonmissingChild = child;
                            break;
                        }
                    }
                    node = nonmissingChild;
                } while (node != null && node.slotCount > 0);
                return node;
            };
            GreenNode.prototype.IsEquivalentTo = function (other) {
                if (this == other) {
                    return true;
                }
                if (other == null) {
                    return false;
                }
                return GreenNode.EquivalentToInternal(this, other);
            };
            GreenNode.EquivalentToInternal = function (node1, node2) {
                if (node1.RawKind != node2.RawKind) {
                    if (node1.IsList && node1.SlotCount == 1) {
                        node1 = node1.GetSlot(0);
                    }
                    if (node2.IsList && node2.SlotCount == 1) {
                        node2 = node2.GetSlot(0);
                    }
                    if (node1.RawKind != node2.RawKind) {
                        return false;
                    }
                }
                if (node1.fullWidth != node2.fullWidth) {
                    return false;
                }
                var n = node1.SlotCount;
                if (n != node2.SlotCount) {
                    return false;
                }
                for (var i = 0; i < n; i++) {
                    var node1Child = node1.GetSlot(i);
                    var node2Child = node2.GetSlot(i);
                    if (node1Child != null && node2Child != null && !node1Child.IsEquivalentTo(node2Child)) {
                        return false;
                    }
                }
                return true;
            };
            GreenNode.prototype.GetStructure = function (parentTrivia) {
                throw new Error('not implemented');
            };
            GreenNode.prototype.CreateList = function (nodes, alwaysCreateListNode) {
                if (alwaysCreateListNode === void 0) { alwaysCreateListNode = false; }
                throw new Error('not implemented');
            };
            GreenNode.prototype.CreateSeparator = function (element) {
                throw new Error('not implemented');
            };
            GreenNode.prototype.IsTriviaWithEndOfLine = function () {
                throw new Error('not implemented');
            };
            GreenNode.prototype.CreateRed_5702 = function () {
                return this.CreateRed_9614(null, 0);
            };
            GreenNode.prototype.CreateRed_9614 = function (parent, position) {
                throw new Error('not implemented');
            };
            Object.defineProperty(GreenNode.prototype, "IsCacheable", {
                get: function () {
                    return ((this.flags & GreenNode.NodeFlags.InheritMask) == GreenNode.NodeFlags.IsNotMissing) && this.SlotCount <= GreenNode.MaxCachedChildNum;
                },
                enumerable: true,
                configurable: true
            });
            GreenNode.prototype.GetCacheHash = function () {
                System.Diagnostics.Debug.Assert(this.IsCacheable);
                var code = (this.flags) ^ this.RawKind;
                var cnt = this.SlotCount;
                for (var i = 0; i < cnt; i++) {
                    var child = this.GetSlot(i);
                    if (child != null) {
                        code = Roslyn.Utilities.Hash.Combine_1641(System.Runtime.CompilerServices.RuntimeHelpers.GetHashCode(child), code);
                    }
                }
                return code & System.Int32.MaxValue;
            };
            GreenNode.prototype.IsCacheEquivalent_1054 = function (kind, flags, child1) {
                System.Diagnostics.Debug.Assert(this.IsCacheable);
                return this.RawKind == kind && this.flags == flags && this.GetSlot(0) == child1;
            };
            GreenNode.prototype.IsCacheEquivalent_1226 = function (kind, flags, child1, child2) {
                System.Diagnostics.Debug.Assert(this.IsCacheable);
                return this.RawKind == kind && this.flags == flags && this.GetSlot(0) == child1 && this.GetSlot(1) == child2;
            };
            GreenNode.prototype.IsCacheEquivalent_5779 = function (kind, flags, child1, child2, child3) {
                System.Diagnostics.Debug.Assert(this.IsCacheable);
                return this.RawKind == kind && this.flags == flags && this.GetSlot(0) == child1 && this.GetSlot(1) == child2 && this.GetSlot(2) == child3;
            };
            GreenNode.prototype.ToString = function () {
                return this.ToString();
            };
            GreenNode.ListKind = 1;
            GreenNode.diagnosticsTable = new System.Runtime.CompilerServices.ConditionalWeakTable();
            GreenNode.annotationsTable = new System.Runtime.CompilerServices.ConditionalWeakTable();
            GreenNode.NoDiagnostics = Roslyn.Utilities.SpecializedCollections.EmptyArray();
            GreenNode.NoAnnotations = Roslyn.Utilities.SpecializedCollections.EmptyArray();
            GreenNode.NoAnnotationsEnumerable = Roslyn.Utilities.SpecializedCollections.EmptyEnumerable();
            GreenNode.ExtendedSerializationInfoMask = (1 << 15 | 0);
            GreenNode.MaxCachedChildNum = 3;
            return GreenNode;
        })();
        CodeAnalysis.GreenNode = GreenNode;
        var GreenNode;
        (function (GreenNode) {
            (function (NodeFlags) {
                NodeFlags[NodeFlags["None"] = 0] = "None";
                NodeFlags[NodeFlags["ContainsDiagnostics"] = 1 << 0] = "ContainsDiagnostics";
                NodeFlags[NodeFlags["ContainsStructuredTrivia"] = 1 << 1] = "ContainsStructuredTrivia";
                NodeFlags[NodeFlags["ContainsDirectives"] = 1 << 2] = "ContainsDirectives";
                NodeFlags[NodeFlags["ContainsSkippedText"] = 1 << 3] = "ContainsSkippedText";
                NodeFlags[NodeFlags["ContainsAnnotations"] = 1 << 4] = "ContainsAnnotations";
                NodeFlags[NodeFlags["IsNotMissing"] = 1 << 5] = "IsNotMissing";
                NodeFlags[NodeFlags["FactoryContextIsInAsync"] = 1 << 6] = "FactoryContextIsInAsync";
                NodeFlags[NodeFlags["FactoryContextIsInQuery"] = 1 << 7] = "FactoryContextIsInQuery";
                NodeFlags[NodeFlags["FactoryContextIsInIterator"] = NodeFlags.FactoryContextIsInQuery] = "FactoryContextIsInIterator";
                NodeFlags[NodeFlags["FactoryContextMask"] = NodeFlags.FactoryContextIsInAsync | NodeFlags.FactoryContextIsInQuery] = "FactoryContextMask";
                NodeFlags[NodeFlags["InheritMask"] = Byte.MaxValue & ~NodeFlags.FactoryContextMask] = "InheritMask";
            })(GreenNode.NodeFlags || (GreenNode.NodeFlags = {}));
            var NodeFlags = GreenNode.NodeFlags;
        })(GreenNode = CodeAnalysis.GreenNode || (CodeAnalysis.GreenNode = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var GreenNodeExtensions = (function () {
            function GreenNodeExtensions() {
            }
            GreenNodeExtensions.WithAnnotationsGreen = function (node, annotations) {
                var newAnnotations = CodeAnalysis.ArrayBuilder.GetInstance_1997();
                var candidateEnumerator = annotations.GetEnumerator();
                try {
                    while (candidateEnumerator.MoveNext()) {
                        var candidate = candidateEnumerator.Current;
                        if (!newAnnotations.Contains(candidate)) {
                            newAnnotations.Add(candidate);
                        }
                    }
                }
                finally {
                    if (candidateEnumerator !== null)
                        candidateEnumerator.Dispose();
                }
                if (newAnnotations.Count == 0) {
                    newAnnotations.Free();
                    var existingAnnotations = node.GetAnnotations_1741();
                    if (existingAnnotations == null || existingAnnotations.length == 0) {
                        return node;
                    }
                    else {
                        return node.SetAnnotations(null);
                    }
                }
                else {
                    return node.SetAnnotations(newAnnotations.ToArrayAndFree());
                }
            };
            GreenNodeExtensions.WithAdditionalAnnotationsGreen = function (node, annotations) {
                var existingAnnotations = node.GetAnnotations_1741();
                if (annotations == null) {
                    return node;
                }
                var newAnnotations = CodeAnalysis.ArrayBuilder.GetInstance_1997();
                newAnnotations.AddRange_1745(existingAnnotations, existingAnnotations.length);
                var candidateEnumerator = annotations.GetEnumerator();
                try {
                    while (candidateEnumerator.MoveNext()) {
                        var candidate = candidateEnumerator.Current;
                        if (!newAnnotations.Contains(candidate)) {
                            newAnnotations.Add(candidate);
                        }
                    }
                }
                finally {
                    if (candidateEnumerator !== null)
                        candidateEnumerator.Dispose();
                }
                if (newAnnotations.Count == existingAnnotations.length) {
                    newAnnotations.Free();
                    return node;
                }
                else {
                    return node.SetAnnotations(newAnnotations.ToArrayAndFree());
                }
            };
            GreenNodeExtensions.WithoutAnnotationsGreen = function (node, annotations) {
                var existingAnnotations = node.GetAnnotations_1741();
                if (annotations == null || existingAnnotations.length == 0) {
                    return node;
                }
                var removalAnnotations = CodeAnalysis.ArrayBuilder.GetInstance_1997();
                removalAnnotations.AddRange_6776(annotations);
                try {
                    if (removalAnnotations.Count == 0) {
                        return node;
                    }
                    var newAnnotations = CodeAnalysis.ArrayBuilder.GetInstance_1997();
                    var candidateEnumerator = existingAnnotations.GetEnumerator();
                    try {
                        while (candidateEnumerator.MoveNext()) {
                            var candidate = candidateEnumerator.Current;
                            if (!removalAnnotations.Contains(candidate)) {
                                newAnnotations.Add(candidate);
                            }
                        }
                    }
                    finally {
                        if (candidateEnumerator !== null)
                            candidateEnumerator.Dispose();
                    }
                    return node.SetAnnotations(newAnnotations.ToArrayAndFree());
                }
                finally {
                    removalAnnotations.Free();
                }
            };
            GreenNodeExtensions.WithDiagnosticsGreen = function (node, diagnostics) {
                return node.SetDiagnostics(diagnostics);
            };
            GreenNodeExtensions.WithoutDiagnosticsGreen = function (node) {
                var current = node.GetDiagnostics();
                if (current == null || current.length == 0) {
                    return node;
                }
                return node.SetDiagnostics(null);
            };
            return GreenNodeExtensions;
        })();
        CodeAnalysis.GreenNodeExtensions = GreenNodeExtensions;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var LineDirectiveMap = (function () {
            function LineDirectiveMap() {
            }
            LineDirectiveMap.prototype.ShouldAddDirective = function (directive) {
                throw new Error('not implemented');
            };
            LineDirectiveMap.prototype.GetEntry = function (directive, sourceText, previous) {
                throw new Error('not implemented');
            };
            LineDirectiveMap.prototype.InitializeFirstEntry = function () {
                throw new Error('not implemented');
            };
            LineDirectiveMap.prototype.ctor_1651 = function (syntaxTree) {
                var syntaxRoot = CodeAnalysis.SyntaxNodeOrToken.op_Implicit_1792(syntaxTree.GetRoot());
                var directives = syntaxRoot.GetDirectives_1318(this.ShouldAddDirective.bind(this));
                System.Diagnostics.Debug.Assert(directives != null);
                this.Entries = this.CreateEntryMap(syntaxTree.GetText(), directives);
                return this;
            };
            LineDirectiveMap.prototype.TranslateSpan_2705 = function (sourceText, treeFilePath, span) {
                var unmappedStartPos = sourceText.Lines.GetLinePosition(span.Start);
                var unmappedEndPos = sourceText.Lines.GetLinePosition(span.End);
                var entry = this.FindEntry(unmappedStartPos.Line);
                return this.TranslateSpan_1274(entry, treeFilePath, unmappedStartPos, unmappedEndPos);
            };
            LineDirectiveMap.prototype.TranslateSpan_1274 = function (entry, treeFilePath, unmappedStartPos, unmappedEndPos) {
                var path = entry.MappedPathOpt != null ? entry.MappedPathOpt : treeFilePath;
                var mappedStartLine = unmappedStartPos.Line - entry.UnmappedLine + entry.MappedLine;
                var mappedEndLine = unmappedEndPos.Line - entry.UnmappedLine + entry.MappedLine;
                return new CodeAnalysis.FileLinePositionSpan().ctor_1079(path, new CodeAnalysis.Text.LinePositionSpan().ctor_1348((mappedStartLine == -1) ? new CodeAnalysis.Text.LinePosition().ctor_9638(unmappedStartPos.Character) : new CodeAnalysis.Text.LinePosition().ctor_1367(mappedStartLine, unmappedStartPos.Character), (mappedEndLine == -1) ? new CodeAnalysis.Text.LinePosition().ctor_9638(unmappedEndPos.Character) : new CodeAnalysis.Text.LinePosition().ctor_1367(mappedEndLine, unmappedEndPos.Character)), entry.MappedPathOpt != null);
            };
            LineDirectiveMap.prototype.GetLineVisibility = function (sourceText, position) {
                throw new Error('not implemented');
            };
            LineDirectiveMap.prototype.TranslateSpanAndVisibility = function (sourceText, treeFilePath, span, isHiddenPosition) {
                throw new Error('not implemented');
            };
            LineDirectiveMap.prototype.HasAnyHiddenRegions = function () {
                return System.Linq.Enumerable.Any(this.Entries, function (e) { return e.State == 5 /* Hidden */; });
            };
            LineDirectiveMap.prototype.FindEntry = function (lineNumber) {
                var r = this.FindEntryIndex(lineNumber);
                return this.Entries[r];
            };
            LineDirectiveMap.prototype.FindEntryIndex = function (lineNumber) {
                var r = TSArray.BinarySearch(this.Entries, new LineDirectiveMap.LineMappingEntry().ctor_9372(lineNumber));
                return r >= 0 ? r : ((~r) - 1);
            };
            LineDirectiveMap.prototype.CreateEntryMap = function (sourceText, directives) {
                var entries = StructArray(LineDirectiveMap.LineMappingEntry, System.Linq.Enumerable.Count(directives) + 1);
                var current = this.InitializeFirstEntry();
                var index = 0;
                entries[index] = current;
                var directiveEnumerator = directives.GetEnumerator();
                try {
                    while (directiveEnumerator.MoveNext()) {
                        var directive = directiveEnumerator.Current;
                        current = this.GetEntry(directive, sourceText, current);
                        ++index;
                        entries[index] = current;
                    }
                }
                finally {
                    if (directiveEnumerator !== null)
                        directiveEnumerator.Dispose();
                }
                for (var i = 0; i < entries.length - 1; ++i) {
                    System.Diagnostics.Debug.Assert(entries[i].CompareTo(entries[i + 1]) < 0);
                }
                return entries;
            };
            return LineDirectiveMap;
        })();
        CodeAnalysis.LineDirectiveMap = LineDirectiveMap;
        var LineDirectiveMap;
        (function (LineDirectiveMap) {
            (function (PositionState) {
                PositionState[PositionState["Unknown"] = 0] = "Unknown";
                PositionState[PositionState["Unmapped"] = 1] = "Unmapped";
                PositionState[PositionState["Remapped"] = 2] = "Remapped";
                PositionState[PositionState["RemappedAfterUnknown"] = 3] = "RemappedAfterUnknown";
                PositionState[PositionState["RemappedAfterHidden"] = 4] = "RemappedAfterHidden";
                PositionState[PositionState["Hidden"] = 5] = "Hidden";
            })(LineDirectiveMap.PositionState || (LineDirectiveMap.PositionState = {}));
            var PositionState = LineDirectiveMap.PositionState;
        })(LineDirectiveMap = CodeAnalysis.LineDirectiveMap || (CodeAnalysis.LineDirectiveMap = {}));
        var LineDirectiveMap;
        (function (LineDirectiveMap) {
            var LineMappingEntry = (function () {
                function LineMappingEntry() {
                    this.UnmappedLine = 0;
                    this.MappedLine = 0;
                    this.State = 0;
                }
                LineMappingEntry.prototype.ctor_9372 = function (unmappedLine) {
                    this.UnmappedLine = unmappedLine;
                    this.MappedLine = unmappedLine;
                    this.MappedPathOpt = null;
                    this.State = 1 /* Unmapped */;
                    return this;
                };
                LineMappingEntry.prototype.ctor_1477 = function (unmappedLine, mappedLine, mappedPathOpt, state) {
                    this.UnmappedLine = unmappedLine;
                    this.MappedLine = mappedLine;
                    this.MappedPathOpt = mappedPathOpt;
                    this.State = state;
                    return this;
                };
                LineMappingEntry.prototype.CompareTo = function (other) {
                    return this.UnmappedLine.CompareTo(other.UnmappedLine);
                };
                return LineMappingEntry;
            })();
            LineDirectiveMap.LineMappingEntry = LineMappingEntry;
        })(LineDirectiveMap = CodeAnalysis.LineDirectiveMap || (CodeAnalysis.LineDirectiveMap = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        (function (LineVisibility) {
            LineVisibility[LineVisibility["BeforeFirstLineDirective"] = 0] = "BeforeFirstLineDirective";
            LineVisibility[LineVisibility["Hidden"] = 1] = "Hidden";
            LineVisibility[LineVisibility["Visible"] = 2] = "Visible";
        })(CodeAnalysis.LineVisibility || (CodeAnalysis.LineVisibility = {}));
        var LineVisibility = CodeAnalysis.LineVisibility;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var SeparatedSyntaxList = (function () {
            function SeparatedSyntaxList() {
                this.list = structDefault(CodeAnalysis.SyntaxNodeOrTokenList);
                this.count = 0;
                this.separatorCount = 0;
            }
            SeparatedSyntaxList.prototype.ctor_1274 = function (list) {
                SeparatedSyntaxList.Validate(list);
                var allCount = list.Count;
                this.count = (allCount + 1) >> 1;
                this.separatorCount = allCount >> 1;
                this.list = list;
                return this;
            };
            SeparatedSyntaxList.Validate = function (list) {
                for (var i = 0; i < list.Count; i++) {
                    var item = list.$get$(i);
                    if ((i & 1) == 0) {
                        System.Diagnostics.Debug.Assert(item.IsNode, "Node missing in separated list.");
                    }
                    else {
                        System.Diagnostics.Debug.Assert(item.IsToken, "Separator token missing in separated list.");
                    }
                }
            };
            SeparatedSyntaxList.prototype.ctor_9044 = function (node, index) {
                this.ctor_1274(new CodeAnalysis.SyntaxNodeOrTokenList().ctor_1240(node, index));
                return this;
            };
            Object.defineProperty(SeparatedSyntaxList.prototype, "Node", {
                get: function () {
                    return this.list.Node;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SeparatedSyntaxList.prototype, "Count", {
                get: function () {
                    return this.count;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SeparatedSyntaxList.prototype, "SeparatorCount", {
                get: function () {
                    return this.separatorCount;
                },
                enumerable: true,
                configurable: true
            });
            SeparatedSyntaxList.prototype.$get$ = function (index) {
                var node = this.list.Node;
                if (node != null) {
                    if (!node.IsList) {
                        if (index == 0) {
                            return node;
                        }
                    }
                    else {
                        if (((index >>> 0) < this.count)) {
                            return node.GetNodeSlot(index << 1);
                        }
                    }
                }
                throw new System.ArgumentOutOfRangeException("index");
            };
            SeparatedSyntaxList.prototype.GetSeparator = function (index) {
                var node = this.list.Node;
                if (node != null) {
                    System.Diagnostics.Debug.Assert(node.IsList, "separated list cannot be a singleton separator");
                    if (((index >>> 0) < this.separatorCount)) {
                        index = (index << 1) + 1;
                        var green = node.Green.GetSlot(index);
                        System.Diagnostics.Debug.Assert(green.IsToken);
                        return new CodeAnalysis.SyntaxToken().ctor_1108(node.Parent, green, node.GetChildPosition(index), this.list.index + index);
                    }
                }
                throw new System.ArgumentOutOfRangeException("index");
            };
            SeparatedSyntaxList.prototype.GetSeparators = function () {
                return System.Linq.Enumerable.Select(System.Linq.Enumerable.Where(this.list, function (n) { return n.IsToken; }), function (n) { return n.AsToken(); });
            };
            Object.defineProperty(SeparatedSyntaxList.prototype, "FullSpan", {
                get: function () {
                    return this.list.FullSpan;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SeparatedSyntaxList.prototype, "Span", {
                get: function () {
                    return this.list.Span;
                },
                enumerable: true,
                configurable: true
            });
            SeparatedSyntaxList.prototype.ToString = function () {
                return this.list.ToString();
            };
            SeparatedSyntaxList.prototype.ToFullString = function () {
                return this.list.ToFullString();
            };
            SeparatedSyntaxList.prototype.First = function () {
                return this.$get$(0);
            };
            SeparatedSyntaxList.prototype.FirstOrDefault = function () {
                if (this.Any()) {
                    return this.$get$(0);
                }
                else {
                    return null;
                }
            };
            SeparatedSyntaxList.prototype.Last = function () {
                return this.$get$(this.Count - 1);
            };
            SeparatedSyntaxList.prototype.LastOrDefault = function () {
                if (this.Any()) {
                    return this.$get$(this.Count - 1);
                }
                else {
                    return null;
                }
            };
            SeparatedSyntaxList.prototype.Contains = function (node) {
                return this.IndexOf_1996(node) >= 0;
            };
            SeparatedSyntaxList.prototype.IndexOf_1996 = function (node) {
                for (var i = 0, n = this.Count; i < n; i++) {
                    if (this.$get$(i) == node) {
                        return i;
                    }
                }
                return -1;
            };
            SeparatedSyntaxList.prototype.IndexOf_1153 = function (predicate) {
                for (var i = 0, n = this.Count; i < n; i++) {
                    if (predicate(this.$get$(i))) {
                        return i;
                    }
                }
                return -1;
            };
            SeparatedSyntaxList.prototype.IndexOf_9119 = function (rawKind) {
                for (var i = 0, n = this.Count; i < n; i++) {
                    if (this.$get$(i).RawKind == rawKind) {
                        return i;
                    }
                }
                return -1;
            };
            SeparatedSyntaxList.prototype.LastIndexOf_2121 = function (node) {
                for (var i = this.Count - 1; i >= 0; i--) {
                    if (this.$get$(i) == node) {
                        return i;
                    }
                }
                return -1;
            };
            SeparatedSyntaxList.prototype.LastIndexOf_2446 = function (predicate) {
                for (var i = this.Count - 1; i >= 0; i--) {
                    if (predicate(this.$get$(i))) {
                        return i;
                    }
                }
                return -1;
            };
            SeparatedSyntaxList.prototype.Any = function () {
                return this.list.Any();
            };
            SeparatedSyntaxList.prototype.GetWithSeparators = function () {
                return this.list;
            };
            SeparatedSyntaxList.prototype.op_Equality = function (right) {
                var left = this;
                return left.Equals_1373(right);
            };
            SeparatedSyntaxList.prototype.op_Inequality = function (right) {
                var left = this;
                return !left.Equals_1373(right);
            };
            SeparatedSyntaxList.prototype.Equals_1373 = function (other) {
                return this.list.op_Equality(other.list);
            };
            SeparatedSyntaxList.prototype.Equals = function (obj) {
                return (obj instanceof SeparatedSyntaxList) && this.Equals_1373(obj);
            };
            SeparatedSyntaxList.prototype.GetHashCode = function () {
                return this.list.GetHashCode();
            };
            SeparatedSyntaxList.prototype.Add = function (node) {
                return this.Insert(this.Count, node);
            };
            SeparatedSyntaxList.prototype.AddRange = function (nodes) {
                return this.InsertRange(this.Count, nodes);
            };
            SeparatedSyntaxList.prototype.Insert = function (index, node) {
                if (node == null) {
                    throw new System.ArgumentNullException("node");
                }
                return this.InsertRange(index, new Array(node));
            };
            SeparatedSyntaxList.prototype.InsertRange = function (index, nodes) {
                if (nodes == null) {
                    throw new System.ArgumentNullException("nodes");
                }
                if (index < 0 || index > this.Count) {
                    throw new System.ArgumentOutOfRangeException("index");
                }
                var nodesWithSeps = this.GetWithSeparators();
                var insertionIndex = index < this.Count ? nodesWithSeps.IndexOf(CodeAnalysis.SyntaxNodeOrToken.op_Implicit_1792(this.$get$(index))) : nodesWithSeps.Count;
                if (insertionIndex > 0 && insertionIndex < nodesWithSeps.Count) {
                    var previous = nodesWithSeps.$get$(insertionIndex - 1);
                    if (previous.IsToken && !SeparatedSyntaxList.KeepSeparatorWithPreviousNode(previous.AsToken())) {
                        insertionIndex--;
                    }
                }
                var nodesToInsertWithSeparators = new System.Collections.Generic.List();
                var itemEnumerator = nodes.GetEnumerator();
                try {
                    while (itemEnumerator.MoveNext()) {
                        var item = itemEnumerator.Current;
                        if (item != null) {
                            if (nodesToInsertWithSeparators.Count > 0 || (insertionIndex > 0 && nodesWithSeps.$get$(insertionIndex - 1).IsNode)) {
                                nodesToInsertWithSeparators.Add(CodeAnalysis.SyntaxNodeOrToken.op_Implicit_7398(item.Green.CreateSeparator(item)));
                            }
                            nodesToInsertWithSeparators.Add(CodeAnalysis.SyntaxNodeOrToken.op_Implicit_1792(item));
                        }
                    }
                }
                finally {
                    if (itemEnumerator !== null)
                        itemEnumerator.Dispose();
                }
                if (insertionIndex < nodesWithSeps.Count && nodesWithSeps.$get$(insertionIndex).IsNode) {
                    var node = nodesWithSeps.$get$(insertionIndex).AsNode();
                    nodesToInsertWithSeparators.Add(CodeAnalysis.SyntaxNodeOrToken.op_Implicit_7398(node.Green.CreateSeparator(node)));
                }
                return new SeparatedSyntaxList().ctor_1274(nodesWithSeps.InsertRange(insertionIndex, nodesToInsertWithSeparators));
            };
            SeparatedSyntaxList.KeepSeparatorWithPreviousNode = function (separator) {
                var trEnumerator = separator.TrailingTrivia.GetEnumerator();
                try {
                    while (trEnumerator.MoveNext()) {
                        var tr = trEnumerator.Current;
                        if (tr.UnderlyingNode.IsTriviaWithEndOfLine()) {
                            return true;
                        }
                    }
                }
                finally {
                    if (trEnumerator !== null)
                        trEnumerator.Dispose();
                }
                return false;
            };
            SeparatedSyntaxList.prototype.RemoveAt = function (index) {
                if (index < 0 || index > this.Count) {
                    throw new System.ArgumentOutOfRangeException("index");
                }
                return this.Remove(this.$get$(index));
            };
            SeparatedSyntaxList.prototype.Remove = function (node) {
                var nodesWithSeps = this.GetWithSeparators();
                var index = nodesWithSeps.IndexOf(CodeAnalysis.SyntaxNodeOrToken.op_Implicit_1792(node));
                if (index >= 0 && index <= nodesWithSeps.Count) {
                    nodesWithSeps = nodesWithSeps.RemoveAt(index);
                    if (index < nodesWithSeps.Count && nodesWithSeps.$get$(index).IsToken) {
                        nodesWithSeps = nodesWithSeps.RemoveAt(index);
                    }
                    else if (index > 0 && nodesWithSeps.$get$(index - 1).IsToken) {
                        nodesWithSeps = nodesWithSeps.RemoveAt(index - 1);
                    }
                    return new SeparatedSyntaxList().ctor_1274(nodesWithSeps);
                }
                else {
                    return this;
                }
            };
            SeparatedSyntaxList.prototype.Replace = function (nodeInList, newNode) {
                if (newNode == null) {
                    throw new System.ArgumentNullException("newNode");
                }
                var index = this.IndexOf_1996(nodeInList);
                if (index >= 0 && index < this.Count) {
                    return new SeparatedSyntaxList().ctor_1274(this.GetWithSeparators().Replace(CodeAnalysis.SyntaxNodeOrToken.op_Implicit_1792(nodeInList), CodeAnalysis.SyntaxNodeOrToken.op_Implicit_1792(newNode)));
                }
                else {
                    throw new System.ArgumentException("nodeInList");
                }
            };
            SeparatedSyntaxList.prototype.ReplaceRange = function (nodeInList, newNodes) {
                if (newNodes == null) {
                    throw new System.ArgumentNullException("newNodes");
                }
                var index = this.IndexOf_1996(nodeInList);
                if (index >= 0 && index < this.Count) {
                    var newNodeList = System.Linq.Enumerable.ToList(newNodes);
                    if (newNodeList.Count == 0) {
                        return this.Remove(nodeInList);
                    }
                    var listWithFirstReplaced = this.Replace(nodeInList, newNodeList.$get$(0));
                    if (newNodeList.Count > 1) {
                        newNodeList.RemoveAt(0);
                        return listWithFirstReplaced.InsertRange(index + 1, newNodeList);
                    }
                    else {
                        return listWithFirstReplaced;
                    }
                }
                else {
                    throw new System.ArgumentException("nodeInList");
                }
            };
            SeparatedSyntaxList.prototype.ReplaceSeparator = function (separatorToken, newSeparator) {
                var nodesWithSeps = this.GetWithSeparators();
                var index = nodesWithSeps.IndexOf(CodeAnalysis.SyntaxNodeOrToken.op_Implicit_7398(separatorToken));
                if (index < 0 || index >= this.Count) {
                    throw new System.ArgumentException("separatorToken");
                }
                if (newSeparator.RawKind != nodesWithSeps.$get$(index).RawKind || newSeparator.Language != nodesWithSeps.$get$(index).Language) {
                    throw new System.ArgumentException("newSeparator");
                }
                return new SeparatedSyntaxList().ctor_1274(nodesWithSeps.Replace(CodeAnalysis.SyntaxNodeOrToken.op_Implicit_7398(separatorToken), CodeAnalysis.SyntaxNodeOrToken.op_Implicit_7398(newSeparator)));
            };
            Object.defineProperty(SeparatedSyntaxList.prototype, "Nodes", {
                get: function () {
                    return System.Linq.Enumerable.ToArray(this);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SeparatedSyntaxList.prototype, "NodesWithSeparators", {
                get: function () {
                    return System.Linq.Enumerable.ToArray(this.list);
                },
                enumerable: true,
                configurable: true
            });
            SeparatedSyntaxList.prototype.GetEnumerator = function () {
                if (this.Any()) {
                    return new SeparatedSyntaxList.EnumeratorImpl().ctor_7599(this);
                }
                return Roslyn.Utilities.SpecializedCollections.EmptyEnumerator();
            };
            return SeparatedSyntaxList;
        })();
        CodeAnalysis.SeparatedSyntaxList = SeparatedSyntaxList;
        var SeparatedSyntaxList;
        (function (SeparatedSyntaxList) {
            var Enumerator = (function () {
                function Enumerator() {
                    this.list = structDefault(SeparatedSyntaxList);
                    this.index = 0;
                }
                Enumerator.prototype.ctor_1104 = function (list) {
                    this.list = list;
                    this.index = -1;
                    return this;
                };
                Enumerator.prototype.MoveNext = function () {
                    var newIndex = this.index + 1;
                    if (newIndex < this.list.Count) {
                        this.index = newIndex;
                        return true;
                    }
                    return false;
                };
                Object.defineProperty(Enumerator.prototype, "Current", {
                    get: function () {
                        return this.list.$get$(this.index);
                    },
                    enumerable: true,
                    configurable: true
                });
                Enumerator.prototype.Reset = function () {
                    this.index = -1;
                };
                Enumerator.prototype.Equals = function (obj) {
                    throw new System.NotSupportedException();
                };
                Enumerator.prototype.GetHashCode = function () {
                    throw new System.NotSupportedException();
                };
                return Enumerator;
            })();
            SeparatedSyntaxList.Enumerator = Enumerator;
        })(SeparatedSyntaxList = CodeAnalysis.SeparatedSyntaxList || (CodeAnalysis.SeparatedSyntaxList = {}));
        var SeparatedSyntaxList;
        (function (SeparatedSyntaxList) {
            var EnumeratorImpl = (function () {
                function EnumeratorImpl() {
                    this.e = structDefault(SeparatedSyntaxList.Enumerator);
                }
                EnumeratorImpl.prototype.ctor_7599 = function (list) {
                    this.e = new SeparatedSyntaxList.Enumerator().ctor_1104(list);
                    return this;
                };
                Object.defineProperty(EnumeratorImpl.prototype, "Current", {
                    get: function () {
                        return this.e.Current;
                    },
                    enumerable: true,
                    configurable: true
                });
                EnumeratorImpl.prototype.Dispose = function () {
                };
                EnumeratorImpl.prototype.MoveNext = function () {
                    return this.e.MoveNext();
                };
                EnumeratorImpl.prototype.Reset = function () {
                    this.e.Reset();
                };
                return EnumeratorImpl;
            })();
            SeparatedSyntaxList.EnumeratorImpl = EnumeratorImpl;
        })(SeparatedSyntaxList = CodeAnalysis.SeparatedSyntaxList || (CodeAnalysis.SeparatedSyntaxList = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var SyntaxAnnotation = (function () {
            function SyntaxAnnotation() {
                this.id = 0;
            }
            SyntaxAnnotation.prototype.ctor_1690 = function () {
                SyntaxAnnotation.nextId++;
                this.id = SyntaxAnnotation.nextId;
                return this;
            };
            SyntaxAnnotation.prototype.ctor_7926 = function (kind) {
                this.ctor_1690();
                this.Kind = kind;
                return this;
            };
            SyntaxAnnotation.prototype.ctor_8539 = function (kind, data) {
                this.ctor_7926(kind);
                this.Data = data;
                return this;
            };
            SyntaxAnnotation.prototype.ctor_1772 = function (reader) {
                this.id = reader.ReadInt64();
                this.Kind = reader.ReadString_7160();
                this.Data = reader.ReadString_7160();
                return this;
            };
            SyntaxAnnotation.prototype.WriteTo = function (writer) {
                writer.WriteInt64(this.id);
                writer.WriteString(this.Kind);
                writer.WriteString(this.Data);
            };
            SyntaxAnnotation.prototype.GetReader = function () {
                return function (r) { return new SyntaxAnnotation().ctor_1772(r); };
            };
            SyntaxAnnotation.prototype.Equals_1427 = function (other) {
                return other != null && this.id == other.id;
            };
            SyntaxAnnotation.prototype.op_Equality = function (right) {
                var left = this;
                if (left == right) {
                    return true;
                }
                if (left == null || right == null) {
                    return false;
                }
                return left.Equals_1427(right);
            };
            SyntaxAnnotation.prototype.op_Inequality = function (right) {
                var left = this;
                if (left == right) {
                    return false;
                }
                if (left == null || right == null) {
                    return true;
                }
                return !left.Equals_1427(right);
            };
            SyntaxAnnotation.prototype.Equals = function (obj) {
                return this.Equals_1427(__as__(obj, SyntaxAnnotation));
            };
            SyntaxAnnotation.prototype.GetHashCode = function () {
                return this.id.GetHashCode();
            };
            SyntaxAnnotation.ElasticAnnotation = new SyntaxAnnotation().ctor_1690();
            SyntaxAnnotation.nextId = 0;
            return SyntaxAnnotation;
        })();
        CodeAnalysis.SyntaxAnnotation = SyntaxAnnotation;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var SyntaxDiffer = (function () {
            function SyntaxDiffer() {
                this.oldNodes = new System.Collections.Generic.Stack(SyntaxDiffer.InitialStackSize);
                this.newNodes = new System.Collections.Generic.Stack(SyntaxDiffer.InitialStackSize);
                this.changes = new System.Collections.Generic.List();
                this.oldSpan = structDefault(CodeAnalysis.Text.TextSpan);
                this.computeNewText = false;
                this.nodeSimilaritySet = new System.Collections.Generic.HashSet();
                this.tokenTextSimilaritySet = new System.Collections.Generic.HashSet();
            }
            SyntaxDiffer.prototype.ctor_1162 = function (oldNode, newNode, computeNewText) {
                this.oldNodes.Push(CodeAnalysis.SyntaxNodeOrToken.op_Implicit_1792(oldNode));
                this.newNodes.Push(CodeAnalysis.SyntaxNodeOrToken.op_Implicit_1792(newNode));
                this.oldSpan = oldNode.FullSpan;
                this.computeNewText = computeNewText;
                return this;
            };
            SyntaxDiffer.GetTextChanges_8869 = function (before, after) {
                if (before == after) {
                    return Roslyn.Utilities.SpecializedCollections.EmptyList();
                }
                else if (before == null) {
                    return new Array(new CodeAnalysis.Text.TextChange().ctor_1791(new CodeAnalysis.Text.TextSpan().ctor_1506(0, 0), after.GetText().ToString()));
                }
                else if (after == null) {
                    throw new System.ArgumentNullException("after");
                }
                else {
                    return SyntaxDiffer.GetTextChanges_1735(before.GetRoot(), after.GetRoot());
                }
            };
            SyntaxDiffer.GetTextChanges_1735 = function (oldNode, newNode) {
                return new SyntaxDiffer().ctor_1162(oldNode, newNode, true).ComputeTextChangesFromOld();
            };
            SyntaxDiffer.prototype.ComputeTextChangesFromOld = function () {
                this.ComputeChangeRecords();
                var reducedChanges = this.ReduceChanges(this.changes);
                return System.Linq.Enumerable.ToList(System.Linq.Enumerable.Select(reducedChanges, function (c) { return new CodeAnalysis.Text.TextChange().ctor_1791(c.Range.Span, c.NewText); }));
            };
            SyntaxDiffer.GetPossiblyDifferentTextSpans_6752 = function (before, after) {
                if (before == after) {
                    return Roslyn.Utilities.SpecializedCollections.EmptyList();
                }
                else if (before == null) {
                    return new Array(new CodeAnalysis.Text.TextSpan().ctor_1506(0, after.GetText().Length));
                }
                else if (after == null) {
                    throw new System.ArgumentNullException("after");
                }
                else {
                    return SyntaxDiffer.GetPossiblyDifferentTextSpans_1819(before.GetRoot(), after.GetRoot());
                }
            };
            SyntaxDiffer.GetPossiblyDifferentTextSpans_1819 = function (oldNode, newNode) {
                return new SyntaxDiffer().ctor_1162(oldNode, newNode, false).ComputeSpansInNew();
            };
            SyntaxDiffer.prototype.ComputeSpansInNew = function () {
                this.ComputeChangeRecords();
                var reducedChanges = this.ReduceChanges(this.changes);
                var newSpans = new System.Collections.Generic.List();
                var delta = 0;
                var changeEnumerator = reducedChanges.GetEnumerator();
                try {
                    while (changeEnumerator.MoveNext()) {
                        var change = changeEnumerator.Current;
                        if (change.Range.NewLength > 0) {
                            var start = change.Range.Span.Start + delta;
                            newSpans.Add(new CodeAnalysis.Text.TextSpan().ctor_1506(start, change.Range.NewLength));
                        }
                        delta += change.Range.NewLength - change.Range.Span.Length;
                    }
                }
                finally {
                    if (changeEnumerator !== null)
                        changeEnumerator.Dispose();
                }
                return newSpans;
            };
            SyntaxDiffer.prototype.ComputeChangeRecords = function () {
                while (true) {
                    if (this.newNodes.Count == 0) {
                        if (this.oldNodes.Count > 0) {
                            this.RecordDeleteOld(this.oldNodes.Count);
                        }
                        break;
                    }
                    else if (this.oldNodes.Count == 0) {
                        if (this.newNodes.Count > 0) {
                            this.RecordInsertNew(this.newNodes.Count);
                        }
                        break;
                    }
                    else {
                        var action = this.GetNextAction();
                        switch (action.Operation) {
                            case 1 /* SkipBoth */:
                                SyntaxDiffer.RemoveFirst(this.oldNodes, action.Count);
                                SyntaxDiffer.RemoveFirst(this.newNodes, action.Count);
                                break;
                            case 2 /* ReduceOld */:
                                SyntaxDiffer.ReplaceFirstWithChildren(this.oldNodes);
                                break;
                            case 3 /* ReduceNew */:
                                SyntaxDiffer.ReplaceFirstWithChildren(this.newNodes);
                                break;
                            case 4 /* ReduceBoth */:
                                SyntaxDiffer.ReplaceFirstWithChildren(this.oldNodes);
                                SyntaxDiffer.ReplaceFirstWithChildren(this.newNodes);
                                break;
                            case 5 /* InsertNew */:
                                this.RecordInsertNew(action.Count);
                                break;
                            case 6 /* DeleteOld */:
                                this.RecordDeleteOld(action.Count);
                                break;
                            case 7 /* ReplaceOldWithNew */:
                                this.RecordReplaceOldWithNew(action.Count, action.Count);
                                break;
                        }
                    }
                }
            };
            SyntaxDiffer.prototype.GetNextAction = function () {
                var oldIsToken = this.oldNodes.Peek().IsToken;
                var newIsToken = this.newNodes.Peek().IsToken;
                var indexOfOldInNew = 0;
                var similarityOfOldInNew = 0;
                var indexOfNewInOld = 0;
                var similarityOfNewInOld = 0;
                var indexOfOldInNew_ref0 = { refObj: indexOfOldInNew };
                var similarityOfOldInNew_ref1 = { refObj: similarityOfOldInNew };
                this.FindBestMatch(this.newNodes, this.oldNodes.Peek(), indexOfOldInNew_ref0, similarityOfOldInNew_ref1);
                indexOfOldInNew = indexOfOldInNew_ref0.refObj;
                similarityOfOldInNew = similarityOfOldInNew_ref1.refObj;
                ;
                var indexOfNewInOld_ref0 = { refObj: indexOfNewInOld };
                var similarityOfNewInOld_ref1 = { refObj: similarityOfNewInOld };
                this.FindBestMatch(this.oldNodes, this.newNodes.Peek(), indexOfNewInOld_ref0, similarityOfNewInOld_ref1);
                indexOfNewInOld = indexOfNewInOld_ref0.refObj;
                similarityOfNewInOld = similarityOfNewInOld_ref1.refObj;
                ;
                if (indexOfOldInNew == 0 && indexOfNewInOld == 0) {
                    if (SyntaxDiffer.AreIdentical(this.oldNodes.Peek(), this.newNodes.Peek())) {
                        return new SyntaxDiffer.DiffAction().ctor_7831(1 /* SkipBoth */, 1);
                    }
                    else if (!oldIsToken && !newIsToken) {
                        return new SyntaxDiffer.DiffAction().ctor_7831(4 /* ReduceBoth */, 1);
                    }
                    else {
                        return new SyntaxDiffer.DiffAction().ctor_7831(7 /* ReplaceOldWithNew */, 1);
                    }
                }
                else if (indexOfOldInNew >= 0 || indexOfNewInOld >= 0) {
                    if (indexOfNewInOld < 0 || similarityOfOldInNew >= similarityOfNewInOld) {
                        if (indexOfOldInNew > 0) {
                            return new SyntaxDiffer.DiffAction().ctor_7831(5 /* InsertNew */, indexOfOldInNew);
                        }
                        else if (!newIsToken) {
                            if (SyntaxDiffer.AreSimilar(this.oldNodes.Peek(), this.newNodes.Peek())) {
                                return new SyntaxDiffer.DiffAction().ctor_7831(4 /* ReduceBoth */, 1);
                            }
                            else {
                                return new SyntaxDiffer.DiffAction().ctor_7831(3 /* ReduceNew */, 1);
                            }
                        }
                        else {
                            return new SyntaxDiffer.DiffAction().ctor_7831(7 /* ReplaceOldWithNew */, 1);
                        }
                    }
                    else {
                        if (indexOfNewInOld > 0) {
                            return new SyntaxDiffer.DiffAction().ctor_7831(6 /* DeleteOld */, indexOfNewInOld);
                        }
                        else if (!oldIsToken) {
                            if (SyntaxDiffer.AreSimilar(this.oldNodes.Peek(), this.newNodes.Peek())) {
                                return new SyntaxDiffer.DiffAction().ctor_7831(4 /* ReduceBoth */, 1);
                            }
                            else {
                                return new SyntaxDiffer.DiffAction().ctor_7831(2 /* ReduceOld */, 1);
                            }
                        }
                        else {
                            return new SyntaxDiffer.DiffAction().ctor_7831(7 /* ReplaceOldWithNew */, 1);
                        }
                    }
                }
                else {
                    if (!oldIsToken && !newIsToken) {
                        var sim = this.GetSimilarity(this.oldNodes.Peek(), this.newNodes.Peek());
                        if (sim >= System.Math.Max(this.oldNodes.Peek().FullSpan.Length, this.newNodes.Peek().FullSpan.Length)) {
                            return new SyntaxDiffer.DiffAction().ctor_7831(4 /* ReduceBoth */, 1);
                        }
                    }
                    return new SyntaxDiffer.DiffAction().ctor_7831(7 /* ReplaceOldWithNew */, 1);
                }
            };
            SyntaxDiffer.ReplaceFirstWithChildren = function (stack) {
                var node = stack.Pop();
                var c = 0;
                var children = StructArray(CodeAnalysis.SyntaxNodeOrToken, node.ChildNodesAndTokens().Count);
                var childEnumerator = node.ChildNodesAndTokens().GetEnumerator();
                try {
                    while (childEnumerator.MoveNext()) {
                        var child = childEnumerator.Current;
                        if (child.FullSpan.Length > 0) {
                            children[c] = child;
                            c++;
                        }
                    }
                }
                finally {
                    if (childEnumerator !== null)
                        childEnumerator.Dispose();
                }
                for (var i = c - 1; i >= 0; i--) {
                    stack.Push(children[i]);
                }
            };
            SyntaxDiffer.prototype.FindBestMatch = function (stack, node, index, similarity) {
                index.refObj = -1;
                similarity.refObj = -1;
                var i = 0;
                var listNodeEnumerator = stack.GetEnumerator();
                try {
                    while (listNodeEnumerator.MoveNext()) {
                        var listNode = listNodeEnumerator.Current;
                        if (i >= SyntaxDiffer.MaxSearchLength) {
                            break;
                        }
                        if (SyntaxDiffer.AreIdentical(listNode, node)) {
                            var sim = node.FullSpan.Length;
                            if (sim > similarity.refObj) {
                                index.refObj = i;
                                similarity.refObj = sim;
                                return;
                            }
                        }
                        else if (SyntaxDiffer.AreSimilar(listNode, node)) {
                            var sim = this.GetSimilarity(listNode, node);
                            if (sim == node.FullSpan.Length && node.IsToken) {
                                if (listNode.ToFullString() == node.ToFullString()) {
                                    index.refObj = i;
                                    similarity.refObj = sim;
                                    return;
                                }
                            }
                            if (sim > similarity.refObj) {
                                index.refObj = i;
                                similarity.refObj = sim;
                            }
                        }
                        else {
                            var j = 0;
                            var childEnumerator = listNode.ChildNodesAndTokens().GetEnumerator();
                            try {
                                while (childEnumerator.MoveNext()) {
                                    var child = childEnumerator.Current;
                                    if (j >= SyntaxDiffer.MaxSearchLength) {
                                        break;
                                    }
                                    j++;
                                    if (SyntaxDiffer.AreIdentical(child, node)) {
                                        index.refObj = i;
                                        similarity.refObj = node.FullSpan.Length;
                                        return;
                                    }
                                    else if (SyntaxDiffer.AreSimilar(child, node)) {
                                        var sim = this.GetSimilarity(child, node);
                                        if (sim > similarity.refObj) {
                                            index.refObj = i;
                                            similarity.refObj = sim;
                                        }
                                    }
                                }
                            }
                            finally {
                                if (childEnumerator !== null)
                                    childEnumerator.Dispose();
                            }
                        }
                        i++;
                    }
                }
                finally {
                    if (listNodeEnumerator !== null)
                        listNodeEnumerator.Dispose();
                }
            };
            SyntaxDiffer.prototype.GetSimilarity = function (node1, node2) {
                var w = 0;
                this.nodeSimilaritySet.Clear();
                this.tokenTextSimilaritySet.Clear();
                if (node1.IsToken && node2.IsToken) {
                    var text1 = node1.ToString();
                    var text2 = node2.ToString();
                    if (text1 == text2) {
                        w += text1.length;
                    }
                    var trEnumerator = node1.GetLeadingTrivia().GetEnumerator();
                    try {
                        while (trEnumerator.MoveNext()) {
                            var tr = trEnumerator.Current;
                            this.nodeSimilaritySet.Add(tr.UnderlyingNode);
                        }
                    }
                    finally {
                        if (trEnumerator !== null)
                            trEnumerator.Dispose();
                    }
                    var trEnumerator = node1.GetTrailingTrivia().GetEnumerator();
                    try {
                        while (trEnumerator.MoveNext()) {
                            var tr = trEnumerator.Current;
                            this.nodeSimilaritySet.Add(tr.UnderlyingNode);
                        }
                    }
                    finally {
                        if (trEnumerator !== null)
                            trEnumerator.Dispose();
                    }
                    var trEnumerator = node2.GetLeadingTrivia().GetEnumerator();
                    try {
                        while (trEnumerator.MoveNext()) {
                            var tr = trEnumerator.Current;
                            if (this.nodeSimilaritySet.Contains(tr.UnderlyingNode)) {
                                w += tr.FullSpan.Length;
                            }
                        }
                    }
                    finally {
                        if (trEnumerator !== null)
                            trEnumerator.Dispose();
                    }
                    var trEnumerator = node2.GetTrailingTrivia().GetEnumerator();
                    try {
                        while (trEnumerator.MoveNext()) {
                            var tr = trEnumerator.Current;
                            if (this.nodeSimilaritySet.Contains(tr.UnderlyingNode)) {
                                w += tr.FullSpan.Length;
                            }
                        }
                    }
                    finally {
                        if (trEnumerator !== null)
                            trEnumerator.Dispose();
                    }
                }
                else {
                    var n1Enumerator = node1.ChildNodesAndTokens().GetEnumerator();
                    try {
                        while (n1Enumerator.MoveNext()) {
                            var n1 = n1Enumerator.Current;
                            this.nodeSimilaritySet.Add(n1.UnderlyingNode);
                            if (n1.IsToken) {
                                this.tokenTextSimilaritySet.Add(n1.ToString());
                            }
                        }
                    }
                    finally {
                        if (n1Enumerator !== null)
                            n1Enumerator.Dispose();
                    }
                    var n2Enumerator = node2.ChildNodesAndTokens().GetEnumerator();
                    try {
                        while (n2Enumerator.MoveNext()) {
                            var n2 = n2Enumerator.Current;
                            if (this.nodeSimilaritySet.Contains(n2.UnderlyingNode)) {
                                w += n2.FullSpan.Length;
                            }
                            else if (n2.IsToken) {
                                var tokenText = n2.ToString();
                                if (this.tokenTextSimilaritySet.Contains(tokenText)) {
                                    w += tokenText.length;
                                }
                            }
                        }
                    }
                    finally {
                        if (n2Enumerator !== null)
                            n2Enumerator.Dispose();
                    }
                }
                return w;
            };
            SyntaxDiffer.AreIdentical = function (node1, node2) {
                return node1.UnderlyingNode == node2.UnderlyingNode;
            };
            SyntaxDiffer.AreSimilar = function (node1, node2) {
                return node1.RawKind == node2.RawKind;
            };
            SyntaxDiffer.prototype.RecordDeleteOld = function (oldNodeCount) {
                var oldSpan = SyntaxDiffer.GetSpan(this.oldNodes, 0, oldNodeCount);
                var removedNodes = SyntaxDiffer.CopyFirst(this.oldNodes, oldNodeCount);
                SyntaxDiffer.RemoveFirst(this.oldNodes, oldNodeCount);
                this.RecordChange(new SyntaxDiffer.ChangeRecord().ctor_2028(new CodeAnalysis.Text.TextChangeRange().ctor_4786(oldSpan, 0), removedNodes, null));
            };
            SyntaxDiffer.prototype.RecordReplaceOldWithNew = function (oldNodeCount, newNodeCount) {
                var oldSpan = SyntaxDiffer.GetSpan(this.oldNodes, 0, oldNodeCount);
                var removedNodes = SyntaxDiffer.CopyFirst(this.oldNodes, oldNodeCount);
                SyntaxDiffer.RemoveFirst(this.oldNodes, oldNodeCount);
                var newSpan = SyntaxDiffer.GetSpan(this.newNodes, 0, newNodeCount);
                var insertedNodes = SyntaxDiffer.CopyFirst(this.newNodes, newNodeCount);
                SyntaxDiffer.RemoveFirst(this.newNodes, newNodeCount);
                this.RecordChange(new SyntaxDiffer.ChangeRecord().ctor_2028(new CodeAnalysis.Text.TextChangeRange().ctor_4786(oldSpan, newSpan.Length), removedNodes, insertedNodes));
            };
            SyntaxDiffer.prototype.RecordInsertNew = function (newNodeCount) {
                var newSpan = SyntaxDiffer.GetSpan(this.newNodes, 0, newNodeCount);
                var insertedNodes = SyntaxDiffer.CopyFirst(this.newNodes, newNodeCount);
                SyntaxDiffer.RemoveFirst(this.newNodes, newNodeCount);
                var start = this.oldNodes.Count > 0 ? this.oldNodes.Peek().Position : this.oldSpan.End;
                this.RecordChange(new SyntaxDiffer.ChangeRecord().ctor_2028(new CodeAnalysis.Text.TextChangeRange().ctor_4786(new CodeAnalysis.Text.TextSpan().ctor_1506(start, 0), newSpan.Length), null, insertedNodes));
            };
            SyntaxDiffer.prototype.RecordChange = function (change) {
                if (this.changes.Count > 0) {
                    var last = this.changes.$get$(this.changes.Count - 1);
                    if (last.Range.Span.End == change.Range.Span.Start) {
                        this.changes.$set$(this.changes.Count - 1, new SyntaxDiffer.ChangeRecord().ctor_2028(new CodeAnalysis.Text.TextChangeRange().ctor_4786(new CodeAnalysis.Text.TextSpan().ctor_1506(last.Range.Span.Start, last.Range.Span.Length + change.Range.Span.Length), last.Range.NewLength + change.Range.NewLength), SyntaxDiffer.Combine(last.OldNodes, change.OldNodes), SyntaxDiffer.Combine(last.NewNodes, change.NewNodes)));
                        return;
                    }
                    System.Diagnostics.Debug.Assert(change.Range.Span.Start >= last.Range.Span.End);
                }
                this.changes.Add(change);
            };
            SyntaxDiffer.GetSpan = function (stack, first, length) {
                var start = -1, end = -1, i = 0;
                var nEnumerator = stack.GetEnumerator();
                try {
                    while (nEnumerator.MoveNext()) {
                        var n = nEnumerator.Current;
                        if (i == first) {
                            start = n.Position;
                        }
                        if (i == first + length - 1) {
                            end = n.EndPosition;
                            break;
                        }
                        i++;
                    }
                }
                finally {
                    if (nEnumerator !== null)
                        nEnumerator.Dispose();
                }
                System.Diagnostics.Debug.Assert(start >= 0);
                System.Diagnostics.Debug.Assert(end >= 0);
                return CodeAnalysis.Text.TextSpan.FromBounds(start, end);
            };
            SyntaxDiffer.Combine = function (first, next) {
                if (first == null) {
                    return next;
                }
                if (next == null) {
                    return first;
                }
                var nodes = SyntaxDiffer.ToArray(first, first.Count);
                for (var i = 0; i < nodes.length; i++) {
                    next.Push(nodes[i]);
                }
                return next;
            };
            SyntaxDiffer.CopyFirst = function (stack, n) {
                if (n == 0) {
                    return null;
                }
                var nodes = SyntaxDiffer.ToArray(stack, n);
                var newStack = new System.Collections.Generic.Stack(nodes);
                return newStack;
            };
            SyntaxDiffer.ToArray = function (stack, n) {
                var nodes = StructArray(CodeAnalysis.SyntaxNodeOrToken, n);
                var i = n - 1;
                var nodeEnumerator = stack.GetEnumerator();
                try {
                    while (nodeEnumerator.MoveNext()) {
                        var node = nodeEnumerator.Current;
                        nodes[i] = node;
                        i--;
                        if (i < 0) {
                            break;
                        }
                    }
                }
                finally {
                    if (nodeEnumerator !== null)
                        nodeEnumerator.Dispose();
                }
                return nodes;
            };
            SyntaxDiffer.RemoveFirst = function (stack, count) {
                for (var i = 0; i < count; ++i) {
                    stack.Pop();
                }
            };
            SyntaxDiffer.prototype.ReduceChanges = function (changeRecords) {
                var textChanges = new System.Collections.Generic.List(changeRecords.Count);
                var oldText = new System.Text.StringBuilder();
                var newText = new System.Text.StringBuilder();
                var crEnumerator = changeRecords.GetEnumerator();
                try {
                    while (crEnumerator.MoveNext()) {
                        var cr = crEnumerator.Current;
                        if (cr.Range.Span.Length > 0 && cr.Range.NewLength > 0) {
                            var range = cr.Range;
                            SyntaxDiffer.CopyText(cr.OldNodes, oldText);
                            SyntaxDiffer.CopyText(cr.NewNodes, newText);
                            var commonLeadingCount = 0;
                            var commonTrailingCount = 0;
                            var commonLeadingCount_ref0 = { refObj: commonLeadingCount };
                            var commonTrailingCount_ref1 = { refObj: commonTrailingCount };
                            SyntaxDiffer.GetCommonEdgeLengths(oldText, newText, commonLeadingCount_ref0, commonTrailingCount_ref1);
                            commonLeadingCount = commonLeadingCount_ref0.refObj;
                            commonTrailingCount = commonTrailingCount_ref1.refObj;
                            ;
                            if (commonLeadingCount > 0 || commonTrailingCount > 0) {
                                range = new CodeAnalysis.Text.TextChangeRange().ctor_4786(new CodeAnalysis.Text.TextSpan().ctor_1506(range.Span.Start + commonLeadingCount, range.Span.Length - (commonLeadingCount + commonTrailingCount)), range.NewLength - (commonLeadingCount + commonTrailingCount));
                                if (commonTrailingCount > 0) {
                                    newText.Remove(newText.Length - commonTrailingCount, commonTrailingCount);
                                }
                                if (commonLeadingCount > 0) {
                                    newText.Remove(0, commonLeadingCount);
                                }
                            }
                            if (range.Span.Length > 0 || range.NewLength > 0) {
                                textChanges.Add(new SyntaxDiffer.ChangeRangeWithText().ctor_1862(range, this.computeNewText ? newText.ToString() : null));
                            }
                        }
                        else {
                            textChanges.Add(new SyntaxDiffer.ChangeRangeWithText().ctor_1862(cr.Range, this.computeNewText ? SyntaxDiffer.GetText(cr.NewNodes) : null));
                        }
                    }
                }
                finally {
                    if (crEnumerator !== null)
                        crEnumerator.Dispose();
                }
                return textChanges;
            };
            SyntaxDiffer.GetCommonEdgeLengths = function (oldText, newText, commonLeadingCount, commonTrailingCount) {
                var maxChars = System.Math.Min(oldText.Length, newText.Length);
                commonLeadingCount.refObj = 0;
                for (; commonLeadingCount.refObj < maxChars; commonLeadingCount.refObj++) {
                    if (oldText.$get$(commonLeadingCount.refObj) != newText.$get$(commonLeadingCount.refObj)) {
                        break;
                    }
                }
                maxChars = maxChars - commonLeadingCount.refObj;
                commonTrailingCount.refObj = 0;
                for (; commonTrailingCount.refObj < maxChars; commonTrailingCount.refObj++) {
                    if (oldText.$get$(oldText.Length - commonTrailingCount.refObj - 1) != newText.$get$(newText.Length - commonTrailingCount.refObj - 1)) {
                        break;
                    }
                }
            };
            SyntaxDiffer.GetText = function (stack) {
                if (stack == null || stack.Count == 0) {
                    return System.String.Empty;
                }
                var span = SyntaxDiffer.GetSpan(stack, 0, stack.Count);
                var builder = new System.Text.StringBuilder(span.Length);
                SyntaxDiffer.CopyText(stack, builder);
                return builder.ToString();
            };
            SyntaxDiffer.CopyText = function (stack, builder) {
                builder.Length = 0;
                if (stack != null && stack.Count > 0) {
                    var writer = new System.IO.StringWriter(builder);
                    var nEnumerator = stack.GetEnumerator();
                    try {
                        while (nEnumerator.MoveNext()) {
                            var n = nEnumerator.Current;
                            n.WriteTo(writer);
                        }
                    }
                    finally {
                        if (nEnumerator !== null)
                            nEnumerator.Dispose();
                    }
                    writer.Flush();
                }
            };
            SyntaxDiffer.InitialStackSize = 8;
            SyntaxDiffer.MaxSearchLength = 8;
            return SyntaxDiffer;
        })();
        CodeAnalysis.SyntaxDiffer = SyntaxDiffer;
        var SyntaxDiffer;
        (function (SyntaxDiffer) {
            (function (DiffOp) {
                DiffOp[DiffOp["None"] = 0] = "None";
                DiffOp[DiffOp["SkipBoth"] = 1] = "SkipBoth";
                DiffOp[DiffOp["ReduceOld"] = 2] = "ReduceOld";
                DiffOp[DiffOp["ReduceNew"] = 3] = "ReduceNew";
                DiffOp[DiffOp["ReduceBoth"] = 4] = "ReduceBoth";
                DiffOp[DiffOp["InsertNew"] = 5] = "InsertNew";
                DiffOp[DiffOp["DeleteOld"] = 6] = "DeleteOld";
                DiffOp[DiffOp["ReplaceOldWithNew"] = 7] = "ReplaceOldWithNew";
            })(SyntaxDiffer.DiffOp || (SyntaxDiffer.DiffOp = {}));
            var DiffOp = SyntaxDiffer.DiffOp;
        })(SyntaxDiffer = CodeAnalysis.SyntaxDiffer || (CodeAnalysis.SyntaxDiffer = {}));
        var SyntaxDiffer;
        (function (SyntaxDiffer) {
            var DiffAction = (function () {
                function DiffAction() {
                    this.Operation = 0;
                    this.Count = 0;
                }
                DiffAction.prototype.ctor_7831 = function (operation, count) {
                    System.Diagnostics.Debug.Assert(count >= 0);
                    this.Operation = operation;
                    this.Count = count;
                    return this;
                };
                return DiffAction;
            })();
            SyntaxDiffer.DiffAction = DiffAction;
        })(SyntaxDiffer = CodeAnalysis.SyntaxDiffer || (CodeAnalysis.SyntaxDiffer = {}));
        var SyntaxDiffer;
        (function (SyntaxDiffer) {
            var ChangeRecord = (function () {
                function ChangeRecord() {
                    this.Range = structDefault(CodeAnalysis.Text.TextChangeRange);
                }
                ChangeRecord.prototype.ctor_2028 = function (range, oldNodes, newNodes) {
                    this.Range = range;
                    this.OldNodes = oldNodes;
                    this.NewNodes = newNodes;
                    return this;
                };
                return ChangeRecord;
            })();
            SyntaxDiffer.ChangeRecord = ChangeRecord;
        })(SyntaxDiffer = CodeAnalysis.SyntaxDiffer || (CodeAnalysis.SyntaxDiffer = {}));
        var SyntaxDiffer;
        (function (SyntaxDiffer) {
            var ChangeRangeWithText = (function () {
                function ChangeRangeWithText() {
                    this.Range = structDefault(CodeAnalysis.Text.TextChangeRange);
                }
                ChangeRangeWithText.prototype.ctor_1862 = function (range, newText) {
                    this.Range = range;
                    this.NewText = newText;
                    return this;
                };
                return ChangeRangeWithText;
            })();
            SyntaxDiffer.ChangeRangeWithText = ChangeRangeWithText;
        })(SyntaxDiffer = CodeAnalysis.SyntaxDiffer || (CodeAnalysis.SyntaxDiffer = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var SyntaxList = (function () {
            function SyntaxList() {
            }
            SyntaxList.prototype.ctor_6698 = function (node) {
                this.node = node;
                return this;
            };
            Object.defineProperty(SyntaxList.prototype, "Node", {
                get: function () {
                    return this.node;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxList.prototype, "Count", {
                get: function () {
                    return this.node == null ? 0 : (this.node.IsList ? this.node.SlotCount : 1);
                },
                enumerable: true,
                configurable: true
            });
            SyntaxList.prototype.$get$ = function (index) {
                if (this.node != null) {
                    if (this.node.IsList) {
                        if (((index >>> 0) < this.node.SlotCount)) {
                            return this.node.GetNodeSlot(index);
                        }
                    }
                    else if (index == 0) {
                        return this.node;
                    }
                }
                throw new System.ArgumentOutOfRangeException();
            };
            SyntaxList.prototype.ItemInternal = function (index) {
                if (this.node.IsList) {
                    return this.node.GetNodeSlot(index);
                }
                System.Diagnostics.Debug.Assert(index == 0);
                return this.node;
            };
            Object.defineProperty(SyntaxList.prototype, "FullSpan", {
                get: function () {
                    if (this.Count == 0) {
                        return structDefault(CodeAnalysis.Text.TextSpan);
                    }
                    else {
                        return CodeAnalysis.Text.TextSpan.FromBounds(this.$get$(0).FullSpan.Start, this.$get$(this.Count - 1).FullSpan.End);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxList.prototype, "Span", {
                get: function () {
                    if (this.Count == 0) {
                        return structDefault(CodeAnalysis.Text.TextSpan);
                    }
                    else {
                        return CodeAnalysis.Text.TextSpan.FromBounds(this.$get$(0).Span.Start, this.$get$(this.Count - 1).Span.End);
                    }
                },
                enumerable: true,
                configurable: true
            });
            SyntaxList.prototype.ToString = function () {
                return this.node != null ? this.node.ToString() : System.String.Empty;
            };
            SyntaxList.prototype.ToFullString = function () {
                return this.node != null ? this.node.ToFullString() : System.String.Empty;
            };
            SyntaxList.prototype.Add = function (node) {
                return this.Insert(this.Count, node);
            };
            SyntaxList.prototype.AddRange = function (nodes) {
                return this.InsertRange(this.Count, nodes);
            };
            SyntaxList.prototype.Insert = function (index, node) {
                if (node == null) {
                    throw new System.ArgumentNullException("node");
                }
                return this.InsertRange(index, new Array(node));
            };
            SyntaxList.prototype.InsertRange = function (index, nodes) {
                if (index < 0 || index > this.Count) {
                    throw new System.ArgumentOutOfRangeException("index");
                }
                if (nodes == null) {
                    throw new System.ArgumentNullException("nodes");
                }
                var list = System.Linq.Enumerable.ToList(this);
                list.InsertRange(index, nodes);
                if (list.Count == 0) {
                    return this;
                }
                else {
                    return SyntaxList.CreateList_6694(list.$get$(0).Green, list);
                }
            };
            SyntaxList.prototype.RemoveAt = function (index) {
                if (index < 0 || index > this.Count) {
                    throw new System.ArgumentOutOfRangeException("index");
                }
                return this.Remove(this.$get$(index));
            };
            SyntaxList.prototype.Remove = function (node) {
                return SyntaxList.CreateList_1946(System.Linq.Enumerable.ToList(System.Linq.Enumerable.Where(this, function (x) { return x != node; })));
            };
            SyntaxList.prototype.Replace = function (nodeInList, newNode) {
                return this.ReplaceRange(nodeInList, new Array(newNode));
            };
            SyntaxList.prototype.ReplaceRange = function (nodeInList, newNodes) {
                if (nodeInList == null) {
                    throw new System.ArgumentNullException("nodeInList");
                }
                if (newNodes == null) {
                    throw new System.ArgumentNullException("newNodes");
                }
                var index = this.IndexOf_1996(nodeInList);
                if (index >= 0 && index < this.Count) {
                    var list = System.Linq.Enumerable.ToList(this);
                    list.RemoveAt(index);
                    list.InsertRange(index, newNodes);
                    return SyntaxList.CreateList_1946(list);
                }
                else {
                    throw new System.ArgumentException("nodeInList");
                }
            };
            SyntaxList.CreateList_1946 = function (items) {
                if (items.Count == 0) {
                    return structDefault(SyntaxList);
                }
                else {
                    return SyntaxList.CreateList_6694(items.$get$(0).Green, items);
                }
            };
            SyntaxList.CreateList_6694 = function (creator, items) {
                if (items.Count == 0) {
                    return structDefault(SyntaxList);
                }
                var newGreen = creator.CreateList(System.Linq.Enumerable.Select(items, function (n) { return n.Green; }));
                return new SyntaxList().ctor_6698(newGreen.CreateRed_5702());
            };
            SyntaxList.prototype.First = function () {
                return this.$get$(0);
            };
            SyntaxList.prototype.FirstOrDefault = function () {
                if (this.Any()) {
                    return this.$get$(0);
                }
                else {
                    return null;
                }
            };
            SyntaxList.prototype.Last = function () {
                return this.$get$(this.Count - 1);
            };
            SyntaxList.prototype.LastOrDefault = function () {
                if (this.Any()) {
                    return this.$get$(this.Count - 1);
                }
                else {
                    return null;
                }
            };
            SyntaxList.prototype.Any = function () {
                System.Diagnostics.Debug.Assert(this.node == null || this.Count != 0);
                return this.node != null;
            };
            Object.defineProperty(SyntaxList.prototype, "Nodes", {
                get: function () {
                    return System.Linq.Enumerable.ToArray(this);
                },
                enumerable: true,
                configurable: true
            });
            SyntaxList.prototype.GetEnumerator = function () {
                if (this.Any()) {
                    return new SyntaxList.EnumeratorImpl().ctor_1415(this);
                }
                return Roslyn.Utilities.SpecializedCollections.EmptyEnumerator();
            };
            SyntaxList.prototype.op_Equality = function (right) {
                var left = this;
                return left.node == right.node;
            };
            SyntaxList.prototype.op_Inequality = function (right) {
                var left = this;
                return left.node != right.node;
            };
            SyntaxList.prototype.Equals_1466 = function (other) {
                return this.node == other.node;
            };
            SyntaxList.prototype.Equals = function (obj) {
                return obj instanceof SyntaxList && this.Equals_1466(obj);
            };
            SyntaxList.prototype.GetHashCode = function () {
                if (this.node == null) {
                    return 0;
                }
                return this.node.GetHashCode();
            };
            SyntaxList.op_Implicit_1229 = function (nodes) {
                return new SyntaxList().ctor_6698(nodes.node);
            };
            SyntaxList.op_Implicit_9594 = function (nodes) {
                return new SyntaxList().ctor_6698(nodes.Node);
            };
            SyntaxList.prototype.IndexOf_1996 = function (node) {
                var index = 0;
                var childEnumerator = this.GetEnumerator();
                try {
                    while (childEnumerator.MoveNext()) {
                        var child = childEnumerator.Current;
                        if (child == node) {
                            return index;
                        }
                        index++;
                    }
                }
                finally {
                    if (childEnumerator !== null)
                        childEnumerator.Dispose();
                }
                return -1;
            };
            SyntaxList.prototype.IndexOf_1153 = function (predicate) {
                var index = 0;
                var childEnumerator = this.GetEnumerator();
                try {
                    while (childEnumerator.MoveNext()) {
                        var child = childEnumerator.Current;
                        if (predicate(child)) {
                            return index;
                        }
                        index++;
                    }
                }
                finally {
                    if (childEnumerator !== null)
                        childEnumerator.Dispose();
                }
                return -1;
            };
            SyntaxList.prototype.IndexOf_9119 = function (rawKind) {
                var index = 0;
                var childEnumerator = this.GetEnumerator();
                try {
                    while (childEnumerator.MoveNext()) {
                        var child = childEnumerator.Current;
                        if (child.RawKind == rawKind) {
                            return index;
                        }
                        index++;
                    }
                }
                finally {
                    if (childEnumerator !== null)
                        childEnumerator.Dispose();
                }
                return -1;
            };
            SyntaxList.prototype.LastIndexOf_2121 = function (node) {
                for (var i = this.Count - 1; i >= 0; i--) {
                    if (this.$get$(i) === node) {
                        return i;
                    }
                }
                return -1;
            };
            SyntaxList.prototype.LastIndexOf_2446 = function (predicate) {
                for (var i = this.Count - 1; i >= 0; i--) {
                    if (predicate(this.$get$(i))) {
                        return i;
                    }
                }
                return -1;
            };
            return SyntaxList;
        })();
        CodeAnalysis.SyntaxList = SyntaxList;
        var SyntaxList;
        (function (SyntaxList) {
            var Enumerator = (function () {
                function Enumerator() {
                    this.list = structDefault(SyntaxList);
                    this.index = 0;
                }
                Enumerator.prototype.ctor_4311 = function (list) {
                    this.list = list;
                    this.index = -1;
                    return this;
                };
                Enumerator.prototype.MoveNext = function () {
                    var newIndex = this.index + 1;
                    if (newIndex < this.list.Count) {
                        this.index = newIndex;
                        return true;
                    }
                    return false;
                };
                Object.defineProperty(Enumerator.prototype, "Current", {
                    get: function () {
                        return this.list.ItemInternal(this.index);
                    },
                    enumerable: true,
                    configurable: true
                });
                Enumerator.prototype.Reset = function () {
                    this.index = -1;
                };
                Enumerator.prototype.Equals = function (obj) {
                    throw new System.NotSupportedException();
                };
                Enumerator.prototype.GetHashCode = function () {
                    throw new System.NotSupportedException();
                };
                return Enumerator;
            })();
            SyntaxList.Enumerator = Enumerator;
        })(SyntaxList = CodeAnalysis.SyntaxList || (CodeAnalysis.SyntaxList = {}));
        var SyntaxList;
        (function (SyntaxList) {
            var EnumeratorImpl = (function () {
                function EnumeratorImpl() {
                    this.e = structDefault(SyntaxList.Enumerator);
                }
                EnumeratorImpl.prototype.ctor_1415 = function (list) {
                    this.e = new SyntaxList.Enumerator().ctor_4311(list);
                    return this;
                };
                EnumeratorImpl.prototype.MoveNext = function () {
                    return this.e.MoveNext();
                };
                Object.defineProperty(EnumeratorImpl.prototype, "Current", {
                    get: function () {
                        return this.e.Current;
                    },
                    enumerable: true,
                    configurable: true
                });
                EnumeratorImpl.prototype.Dispose = function () {
                };
                EnumeratorImpl.prototype.Reset = function () {
                    this.e.Reset();
                };
                return EnumeratorImpl;
            })();
            SyntaxList.EnumeratorImpl = EnumeratorImpl;
        })(SyntaxList = CodeAnalysis.SyntaxList || (CodeAnalysis.SyntaxList = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var SyntaxNode = (function () {
            function SyntaxNode() {
                this.position = 0;
                this.myHash = Gb.NextHashCode();
            }
            SyntaxNode.prototype.ctor_5435 = function (green, parent, position) {
                System.Diagnostics.Debug.Assert(position >= 0, "position cannot be negative");
                this.position = position;
                this.green = green;
                this.parent = parent;
                return this;
            };
            SyntaxNode.prototype.ctor_8973 = function (green, position, syntaxTree) {
                this.ctor_5435(green, null, position);
                this._syntaxTree = syntaxTree;
                return this;
            };
            SyntaxNode.prototype.GetHashCode = function () {
                return this.myHash;
            };
            Object.defineProperty(SyntaxNode.prototype, "RawKind", {
                get: function () {
                    return this.green.RawKind;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNode.prototype, "Green", {
                get: function () {
                    return this.green;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNode.prototype, "Position", {
                get: function () {
                    return this.position;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNode.prototype, "EndPosition", {
                get: function () {
                    return this.position + this.green.FullWidth;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNode.prototype, "SyntaxTree", {
                get: function () {
                    return this.SyntaxTreeCore;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNode.prototype, "IsList", {
                get: function () {
                    return this.Green.IsList;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNode.prototype, "FullSpan", {
                get: function () {
                    return new CodeAnalysis.Text.TextSpan().ctor_1506(this.Position, this.Green.FullWidth);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNode.prototype, "SlotCount", {
                get: function () {
                    return this.Green.SlotCount;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNode.prototype, "Span", {
                get: function () {
                    var start = this.Position;
                    var width = this.Green.FullWidth;
                    var precedingWidth = this.Green.GetLeadingTriviaWidth();
                    start += precedingWidth;
                    width -= precedingWidth;
                    width -= this.Green.GetTrailingTriviaWidth();
                    System.Diagnostics.Debug.Assert(width >= 0);
                    return new CodeAnalysis.Text.TextSpan().ctor_1506(start, width);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNode.prototype, "SpanStart", {
                get: function () {
                    return this.Position + this.Green.GetLeadingTriviaWidth();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNode.prototype, "Width", {
                get: function () {
                    return this.Green.Width;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNode.prototype, "FullWidth", {
                get: function () {
                    return this.Green.FullWidth;
                },
                enumerable: true,
                configurable: true
            });
            SyntaxNode.prototype.GetRed_1713 = function (field, slot) {
                var result = field.refObj;
                if (result == null) {
                    var green = this.Green.GetSlot(slot);
                    if (green != null) {
                        result = green.CreateRed_9614(this, this.GetChildPosition(slot));
                        field.refObj = result;
                    }
                }
                return result;
            };
            SyntaxNode.prototype.GetRedAtZero_1834 = function (field) {
                var result = field.refObj;
                if (result == null) {
                    var green = this.Green.GetSlot(0);
                    if (green != null) {
                        result = green.CreateRed_9614(this, this.Position);
                        field.refObj = result;
                    }
                }
                return result;
            };
            SyntaxNode.prototype.GetRed_2015 = function (field, slot) {
                var result = field.refObj;
                if (result == null) {
                    var green = this.Green.GetSlot(slot);
                    if (green != null) {
                        result = green.CreateRed_9614(this, this.GetChildPosition(slot));
                        field.refObj = result;
                    }
                }
                return result;
            };
            SyntaxNode.prototype.GetRedAtZero_2231 = function (field) {
                var result = field.refObj;
                if (result == null) {
                    var green = this.Green.GetSlot(0);
                    if (green != null) {
                        result = green.CreateRed_9614(this, this.Position);
                        field.refObj = result;
                    }
                }
                return result;
            };
            SyntaxNode.prototype.GetRedElement = function (element, slot) {
                System.Diagnostics.Debug.Assert(this.IsList);
                var result = element.refObj;
                if (result == null) {
                    var green = this.Green.GetSlot(slot);
                    result = green.CreateRed_9614(this.Parent, this.GetChildPosition(slot));
                    element.refObj = result;
                }
                return result;
            };
            SyntaxNode.prototype.GetRedElementIfNotToken = function (element) {
                System.Diagnostics.Debug.Assert(this.IsList);
                var result = element.refObj;
                if (result == null) {
                    var green = this.Green.GetSlot(1);
                    if (!green.IsToken) {
                        result = green.CreateRed_9614(this.Parent, this.GetChildPosition(1));
                        element.refObj = result;
                    }
                }
                return result;
            };
            SyntaxNode.prototype.GetWeakRedElement = function (slot, index) {
                var value = null;
                if (slot.refObj != null) {
                    var value_ref0 = { refObj: value };
                    var ret_val__52 = slot.refObj.TryGetTarget(value_ref0);
                    value = value_ref0.refObj;
                    if (ret_val__52) {
                        return value;
                    }
                }
                return this.CreateWeakItem(slot, index);
            };
            SyntaxNode.prototype.CreateWeakItem = function (slot, index) {
                var greenChild = this.Green.GetSlot(index);
                var newNode = greenChild.CreateRed_9614(this.Parent, this.GetChildPosition(index));
                var newWeakReference = new System.WeakReference(newNode);
                while (true) {
                    var previousNode = null;
                    var previousWeakReference = slot.refObj;
                    var refPreviousNode = { refObj: previousNode };
                    if (previousWeakReference != null && previousWeakReference.TryGetTarget(refPreviousNode) == true) {
                        previousNode = refPreviousNode.refObj;
                        return previousNode;
                    }
                    slot.refObj = newWeakReference;
                    return newNode;
                }
            };
            SyntaxNode.prototype.ToString = function () {
                throw new Error('not implemented');
            };
            SyntaxNode.prototype.ToFullString = function () {
                throw new Error('not implemented');
            };
            SyntaxNode.prototype.WriteTo = function (writer) {
                throw new Error('not implemented');
            };
            SyntaxNode.prototype.GetText = function (encoding, checksumAlgorithm) {
                if (encoding === void 0) { encoding = null; }
                if (checksumAlgorithm === void 0) { checksumAlgorithm = 1 /* Sha1 */; }
                var builder = new System.Text.StringBuilder();
                this.WriteTo(new System.IO.StringWriter(builder));
                return new CodeAnalysis.Text.StringBuilderText().ctor_1446(builder, encoding, checksumAlgorithm);
            };
            SyntaxNode.prototype.IsEquivalentTo_9689 = function (other) {
                return this.EquivalentToCore(other);
            };
            Object.defineProperty(SyntaxNode.prototype, "IsMissing", {
                get: function () {
                    return this.Green.IsMissing;
                },
                enumerable: true,
                configurable: true
            });
            SyntaxNode.prototype.IsPartOfStructuredTrivia = function () {
                for (var node = this; node != null; node = node.Parent) {
                    if (node.IsStructuredTrivia)
                        return true;
                }
                return false;
            };
            Object.defineProperty(SyntaxNode.prototype, "IsStructuredTrivia", {
                get: function () {
                    return this.Green.IsStructuredTrivia;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNode.prototype, "HasStructuredTrivia", {
                get: function () {
                    return this.Green.ContainsStructuredTrivia && !this.Green.IsStructuredTrivia;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNode.prototype, "ContainsSkippedText", {
                get: function () {
                    return this.Green.ContainsSkippedText;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNode.prototype, "ContainsDirectives", {
                get: function () {
                    return this.Green.ContainsDirectives;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNode.prototype, "ContainsDiagnostics", {
                get: function () {
                    return this.Green.ContainsDiagnostics;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNode.prototype, "HasLeadingTrivia", {
                get: function () {
                    return this.Green.HasLeadingTrivia;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNode.prototype, "HasTrailingTrivia", {
                get: function () {
                    return this.Green.HasTrailingTrivia;
                },
                enumerable: true,
                configurable: true
            });
            SyntaxNode.prototype.GetCachedSlot = function (index) {
                throw new Error('not implemented');
            };
            SyntaxNode.prototype.GetChildIndex = function (slot) {
                var index = 0;
                for (var i = 0; i < slot; i++) {
                    var item = this.Green.GetSlot(i);
                    if (item != null) {
                        if (item.IsList) {
                            index += item.SlotCount;
                        }
                        else {
                            index++;
                        }
                    }
                }
                return index;
            };
            SyntaxNode.prototype.GetChildPosition = function (index) {
                var offset = 0;
                var green = this.Green;
                while (index > 0) {
                    index--;
                    var prevSibling = this.GetCachedSlot(index);
                    if (prevSibling != null) {
                        return prevSibling.EndPosition + offset;
                    }
                    var greenChild = green.GetSlot(index);
                    if (greenChild != null) {
                        offset += greenChild.FullWidth;
                    }
                }
                return this.Position + offset;
            };
            SyntaxNode.prototype.GetLocation = function () {
                return this.SyntaxTree.GetLocation(this.Span);
            };
            SyntaxNode.prototype.GetDiagnostics = function () {
                return this.SyntaxTree.GetDiagnostics_1067(this);
            };
            SyntaxNode.prototype.GetReference = function () {
                return this.SyntaxTree.GetReference(this);
            };
            SyntaxNode.prototype.getParent = function () {
                return this.parent;
            };
            Object.defineProperty(SyntaxNode.prototype, "Parent", {
                get: function () {
                    return this.parent;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNode.prototype, "ParentTrivia", {
                get: function () {
                    return structDefault(CodeAnalysis.SyntaxTrivia);
                },
                enumerable: true,
                configurable: true
            });
            SyntaxNode.prototype.getParentOrStructuredTriviaParent = function () {
                return SyntaxNode.GetParent(this, true);
            };
            Object.defineProperty(SyntaxNode.prototype, "ParentOrStructuredTriviaParent", {
                get: function () {
                    return SyntaxNode.GetParent(this, true);
                },
                enumerable: true,
                configurable: true
            });
            SyntaxNode.prototype.ChildNodesAndTokens = function () {
                return new CodeAnalysis.ChildSyntaxList().ctor_5028(this);
            };
            SyntaxNode.prototype.ChildThatContainsPosition = function (position) {
                throw new Error('not implemented');
            };
            SyntaxNode.prototype.GetNodeSlot = function (slot) {
                throw new Error('not implemented');
            };
            SyntaxNode.prototype.ChildNodes = function () {
                var __result = new Array();
                var nodeOrTokenEnumerator = this.ChildNodesAndTokens().GetEnumerator();
                try {
                    while (nodeOrTokenEnumerator.MoveNext()) {
                        var nodeOrToken = nodeOrTokenEnumerator.Current;
                        if (nodeOrToken.IsNode) {
                            __result.push(nodeOrToken.AsNode());
                        }
                    }
                }
                finally {
                    if (nodeOrTokenEnumerator !== null)
                        nodeOrTokenEnumerator.Dispose();
                }
                return __result;
            };
            SyntaxNode.prototype.Ancestors = function (ascendOutOfTrivia) {
                if (ascendOutOfTrivia === void 0) { ascendOutOfTrivia = true; }
                if (this.Parent == null) {
                    return Roslyn.Utilities.SpecializedCollections.EmptyEnumerable();
                }
                var result = this.Parent.AncestorsAndSelf(ascendOutOfTrivia);
                return result != null ? result : Roslyn.Utilities.SpecializedCollections.EmptyEnumerable();
            };
            SyntaxNode.prototype.AncestorsAndSelf = function (ascendOutOfTrivia) {
                if (ascendOutOfTrivia === void 0) { ascendOutOfTrivia = true; }
                var __result = new Array();
                for (var node = this; node != null; node = SyntaxNode.GetParent(node, ascendOutOfTrivia)) {
                    __result.push(node);
                }
                return __result;
            };
            SyntaxNode.GetParent = function (node, ascendOutOfTrivia) {
                var parent = node.Parent;
                if (parent == null && ascendOutOfTrivia) {
                    var structuredTrivia = node;
                    if (structuredTrivia.ParentTrivia === void 0) {
                        structuredTrivia = null;
                    }
                    if (structuredTrivia != null) {
                        parent = structuredTrivia.ParentTrivia.Token.Parent;
                    }
                }
                return parent;
            };
            SyntaxNode.prototype.FirstAncestorOrSelf = function (type, predicate, ascendOutOfTrivia) {
                if (predicate === void 0) { predicate = null; }
                if (ascendOutOfTrivia === void 0) { ascendOutOfTrivia = true; }
                for (var node = this; node != null; node = SyntaxNode.GetParent(node, ascendOutOfTrivia)) {
                    var tnode = node;
                    if (!__classOfType(tnode, type)) {
                        tnode = null;
                    }
                    if (tnode != null && (predicate == null || predicate(tnode))) {
                        return tnode;
                    }
                }
                return null;
            };
            SyntaxNode.prototype.DescendantNodes_1576 = function (descendIntoChildren, descendIntoTrivia) {
                if (descendIntoChildren === void 0) { descendIntoChildren = null; }
                if (descendIntoTrivia === void 0) { descendIntoTrivia = false; }
                return this.DescendantNodesImpl(this.FullSpan, descendIntoChildren, descendIntoTrivia, false);
            };
            SyntaxNode.prototype.DescendantNodes_9625 = function (span, descendIntoChildren, descendIntoTrivia) {
                if (descendIntoChildren === void 0) { descendIntoChildren = null; }
                if (descendIntoTrivia === void 0) { descendIntoTrivia = false; }
                return this.DescendantNodesImpl(span, descendIntoChildren, descendIntoTrivia, false);
            };
            SyntaxNode.prototype.DescendantNodesAndSelf_4808 = function (descendIntoChildren, descendIntoTrivia) {
                if (descendIntoChildren === void 0) { descendIntoChildren = null; }
                if (descendIntoTrivia === void 0) { descendIntoTrivia = false; }
                return this.DescendantNodesImpl(this.FullSpan, descendIntoChildren, descendIntoTrivia, true);
            };
            SyntaxNode.prototype.DescendantNodesAndSelf_5609 = function (span, descendIntoChildren, descendIntoTrivia) {
                if (descendIntoChildren === void 0) { descendIntoChildren = null; }
                if (descendIntoTrivia === void 0) { descendIntoTrivia = false; }
                return this.DescendantNodesImpl(span, descendIntoChildren, descendIntoTrivia, true);
            };
            SyntaxNode.prototype.DescendantNodesAndTokens_1161 = function (descendIntoChildren, descendIntoTrivia) {
                if (descendIntoChildren === void 0) { descendIntoChildren = null; }
                if (descendIntoTrivia === void 0) { descendIntoTrivia = false; }
                return this.DescendantNodesAndTokensImpl(this.FullSpan, descendIntoChildren, descendIntoTrivia, false);
            };
            SyntaxNode.prototype.DescendantNodesAndTokens_3345 = function (span, descendIntoChildren, descendIntoTrivia) {
                if (descendIntoChildren === void 0) { descendIntoChildren = null; }
                if (descendIntoTrivia === void 0) { descendIntoTrivia = false; }
                return this.DescendantNodesAndTokensImpl(span, descendIntoChildren, descendIntoTrivia, false);
            };
            SyntaxNode.prototype.DescendantNodesAndTokensAndSelf_1678 = function (descendIntoChildren, descendIntoTrivia) {
                if (descendIntoChildren === void 0) { descendIntoChildren = null; }
                if (descendIntoTrivia === void 0) { descendIntoTrivia = false; }
                return this.DescendantNodesAndTokensImpl(this.FullSpan, descendIntoChildren, descendIntoTrivia, true);
            };
            SyntaxNode.prototype.DescendantNodesAndTokensAndSelf_4591 = function (span, descendIntoChildren, descendIntoTrivia) {
                if (descendIntoChildren === void 0) { descendIntoChildren = null; }
                if (descendIntoTrivia === void 0) { descendIntoTrivia = false; }
                return this.DescendantNodesAndTokensImpl(span, descendIntoChildren, descendIntoTrivia, true);
            };
            SyntaxNode.prototype.FindNode = function (span, findInsideTrivia, getInnermostNodeForTie) {
                if (findInsideTrivia === void 0) { findInsideTrivia = false; }
                if (getInnermostNodeForTie === void 0) { getInnermostNodeForTie = false; }
                if (!this.FullSpan.Contains_1915(span)) {
                    throw new System.ArgumentOutOfRangeException("span");
                }
                var node = this.FindToken(span.Start, findInsideTrivia).Parent.FirstAncestorOrSelf(function (a) { return a.FullSpan.Contains_1915(span); });
                var cuRoot = node.SyntaxTree != null ? node.SyntaxTree.GetRoot() : null;
                if (!getInnermostNodeForTie) {
                    while (true) {
                        var parent = node.Parent;
                        if (parent == null || parent.FullWidth != node.FullWidth)
                            break;
                        if (parent == cuRoot)
                            break;
                        node = parent;
                    }
                }
                return node;
            };
            SyntaxNode.prototype.FindToken = function (position, findInsideTrivia) {
                if (findInsideTrivia === void 0) { findInsideTrivia = false; }
                return this.FindTokenCore_1334(position, findInsideTrivia);
            };
            SyntaxNode.prototype.GetFirstToken = function (includeZeroWidth, includeSkipped, includeDirectives, includeDocumentationComments) {
                if (includeZeroWidth === void 0) { includeZeroWidth = false; }
                if (includeSkipped === void 0) { includeSkipped = false; }
                if (includeDirectives === void 0) { includeDirectives = false; }
                if (includeDocumentationComments === void 0) { includeDocumentationComments = false; }
                return this.Navigator.GetFirstToken_1312(this, includeZeroWidth, includeSkipped, includeDirectives, includeDocumentationComments);
            };
            SyntaxNode.prototype.GetLastToken = function (includeZeroWidth, includeSkipped, includeDirectives, includeDocumentationComments) {
                if (includeZeroWidth === void 0) { includeZeroWidth = false; }
                if (includeSkipped === void 0) { includeSkipped = false; }
                if (includeDirectives === void 0) { includeDirectives = false; }
                if (includeDocumentationComments === void 0) { includeDocumentationComments = false; }
                return this.Navigator.GetLastToken_4205(this, includeZeroWidth, includeSkipped, includeDirectives, includeDocumentationComments);
            };
            SyntaxNode.prototype.ChildTokens = function () {
                var __result = new Array();
                var nodeOrTokenEnumerator = this.ChildNodesAndTokens().GetEnumerator();
                try {
                    while (nodeOrTokenEnumerator.MoveNext()) {
                        var nodeOrToken = nodeOrTokenEnumerator.Current;
                        if (nodeOrToken.IsToken) {
                            __result.push(nodeOrToken.AsToken());
                        }
                    }
                }
                finally {
                    if (nodeOrTokenEnumerator !== null)
                        nodeOrTokenEnumerator.Dispose();
                }
                return __result;
            };
            SyntaxNode.prototype.DescendantTokens_9785 = function (descendIntoChildren, descendIntoTrivia) {
                if (descendIntoChildren === void 0) { descendIntoChildren = null; }
                if (descendIntoTrivia === void 0) { descendIntoTrivia = false; }
                return System.Linq.Enumerable.Select(System.Linq.Enumerable.Where(this.DescendantNodesAndTokens_1161(descendIntoChildren, descendIntoTrivia), function (sn) { return sn.IsToken; }), function (sn) { return sn.AsToken(); });
            };
            SyntaxNode.prototype.DescendantTokens_9576 = function (span, descendIntoChildren, descendIntoTrivia) {
                if (descendIntoChildren === void 0) { descendIntoChildren = null; }
                if (descendIntoTrivia === void 0) { descendIntoTrivia = false; }
                return System.Linq.Enumerable.Select(System.Linq.Enumerable.Where(this.DescendantNodesAndTokens_3345(span, descendIntoChildren, descendIntoTrivia), function (sn) { return sn.IsToken; }), function (sn) { return sn.AsToken(); });
            };
            SyntaxNode.prototype.GetLeadingTrivia = function () {
                return this.GetFirstToken(true, false, false, false).LeadingTrivia;
            };
            SyntaxNode.prototype.GetTrailingTrivia = function () {
                return this.GetLastToken(true, false, false, false).TrailingTrivia;
            };
            SyntaxNode.prototype.FindTrivia = function (position, findInsideTrivia) {
                if (findInsideTrivia === void 0) { findInsideTrivia = false; }
                return this.FindTriviaCore(position, findInsideTrivia);
            };
            SyntaxNode.prototype.DescendantTrivia_7298 = function (descendIntoChildren, descendIntoTrivia) {
                if (descendIntoChildren === void 0) { descendIntoChildren = null; }
                if (descendIntoTrivia === void 0) { descendIntoTrivia = false; }
                return this.DescendantTriviaImpl(this.FullSpan, descendIntoChildren, descendIntoTrivia);
            };
            SyntaxNode.prototype.DescendantTrivia_9080 = function (span, descendIntoChildren, descendIntoTrivia) {
                if (descendIntoChildren === void 0) { descendIntoChildren = null; }
                if (descendIntoTrivia === void 0) { descendIntoTrivia = false; }
                return this.DescendantTriviaImpl(span, descendIntoChildren, descendIntoTrivia);
            };
            Object.defineProperty(SyntaxNode.prototype, "ContainsAnnotations", {
                get: function () {
                    return this.Green.ContainsAnnotations;
                },
                enumerable: true,
                configurable: true
            });
            SyntaxNode.prototype.HasAnnotations_4203 = function (annotationKind) {
                return this.Green.HasAnnotations_4203(annotationKind);
            };
            SyntaxNode.prototype.HasAnnotations_9693 = function (annotationKinds) {
                return this.Green.HasAnnotations_9693(annotationKinds);
            };
            SyntaxNode.prototype.HasAnnotation = function (annotation) {
                return this.Green.HasAnnotation(annotation);
            };
            SyntaxNode.prototype.GetAnnotations_1417 = function (annotationKind) {
                return this.Green.GetAnnotations_1417(annotationKind);
            };
            SyntaxNode.prototype.GetAnnotations_2034 = function (annotationKinds) {
                return this.Green.GetAnnotations_2034(annotationKinds);
            };
            SyntaxNode.prototype.GetAnnotations_1741 = function () {
                return this.Green.GetAnnotations_1741();
            };
            SyntaxNode.prototype.GetAnnotatedNodesAndTokens_1420 = function (annotationKind) {
                return System.Linq.Enumerable.Where(this.DescendantNodesAndTokensAndSelf_1678(function (n) { return n.ContainsAnnotations; }, true), function (t) { return t.HasAnnotations_4203(annotationKind); });
            };
            SyntaxNode.prototype.GetAnnotatedNodesAndTokens_6260 = function () {
                var annotationKinds = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    annotationKinds[_i - 0] = arguments[_i];
                }
                return System.Linq.Enumerable.Where(this.DescendantNodesAndTokensAndSelf_1678(function (n) { return n.ContainsAnnotations; }, true), function (t) { return t.HasAnnotations_9693(annotationKinds); });
            };
            SyntaxNode.prototype.GetAnnotatedNodesAndTokens_1187 = function (annotation) {
                return System.Linq.Enumerable.Where(this.DescendantNodesAndTokensAndSelf_1678(function (n) { return n.ContainsAnnotations; }, true), function (t) { return t.HasAnnotation(annotation); });
            };
            SyntaxNode.prototype.GetAnnotatedNodes_9485 = function (syntaxAnnotation) {
                return System.Linq.Enumerable.Select(System.Linq.Enumerable.Where(this.GetAnnotatedNodesAndTokens_1187(syntaxAnnotation), function (n) { return n.IsNode; }), function (n) { return n.AsNode(); });
            };
            SyntaxNode.prototype.GetAnnotatedNodes_1519 = function (annotationKind) {
                return System.Linq.Enumerable.Select(System.Linq.Enumerable.Where(this.GetAnnotatedNodesAndTokens_1420(annotationKind), function (n) { return n.IsNode; }), function (n) { return n.AsNode(); });
            };
            SyntaxNode.prototype.GetAnnotatedTokens_1936 = function (syntaxAnnotation) {
                return System.Linq.Enumerable.Select(System.Linq.Enumerable.Where(this.GetAnnotatedNodesAndTokens_1187(syntaxAnnotation), function (n) { return n.IsToken; }), function (n) { return n.AsToken(); });
            };
            SyntaxNode.prototype.GetAnnotatedTokens_4443 = function (annotationKind) {
                return System.Linq.Enumerable.Select(System.Linq.Enumerable.Where(this.GetAnnotatedNodesAndTokens_1420(annotationKind), function (n) { return n.IsToken; }), function (n) { return n.AsToken(); });
            };
            SyntaxNode.prototype.GetAnnotatedTrivia_1911 = function (annotationKind) {
                return System.Linq.Enumerable.Where(this.DescendantTrivia_7298(function (n) { return n.ContainsAnnotations; }, true), function (tr) { return tr.HasAnnotations_4203(annotationKind); });
            };
            SyntaxNode.prototype.GetAnnotatedTrivia_1609 = function () {
                var annotationKinds = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    annotationKinds[_i - 0] = arguments[_i];
                }
                return System.Linq.Enumerable.Where(this.DescendantTrivia_7298(function (n) { return n.ContainsAnnotations; }, true), function (tr) { return tr.HasAnnotations_1739_Arr(annotationKinds); });
            };
            SyntaxNode.prototype.GetAnnotatedTrivia_1355 = function (annotation) {
                return System.Linq.Enumerable.Where(this.DescendantTrivia_7298(function (n) { return n.ContainsAnnotations; }, true), function (tr) { return tr.HasAnnotation(annotation); });
            };
            SyntaxNode.prototype.WithAdditionalAnnotationsInternal = function (annotations) {
                return CodeAnalysis.GreenNodeExtensions.WithAdditionalAnnotationsGreen(this.Green, annotations).CreateRed_5702();
            };
            SyntaxNode.prototype.GetNodeWithoutAnnotations = function (annotations) {
                return CodeAnalysis.GreenNodeExtensions.WithoutAnnotationsGreen(this.Green, annotations).CreateRed_5702();
            };
            SyntaxNode.prototype.CopyAnnotationsTo = function (node) {
                if (node == null) {
                    return null;
                }
                var annotations = this.Green.GetAnnotations_1741();
                if (annotations != null && annotations.length > 0) {
                    return (CodeAnalysis.GreenNodeExtensions.WithAdditionalAnnotationsGreen(node.Green, annotations)).CreateRed_5702();
                }
                return node;
            };
            SyntaxNode.prototype.IsEquivalentTo_2068 = function (node, topLevel) {
                if (topLevel === void 0) { topLevel = false; }
                return this.IsEquivalentToCore(node, topLevel);
            };
            SyntaxNode.prototype.SerializeTo = function (stream, cancellationToken) {
                if (cancellationToken === void 0) { cancellationToken = structDefault(System.Threading.CancellationToken); }
                throw new Error('not implemented');
            };
            SyntaxNode.prototype.EquivalentToCore = function (other) {
                throw new Error('not implemented');
            };
            SyntaxNode.prototype.FindTokenCore_1334 = function (position, findInsideTrivia) {
                throw new Error('not implemented');
            };
            SyntaxNode.prototype.FindTokenCore_1204 = function (position, stepInto) {
                throw new Error('not implemented');
            };
            SyntaxNode.prototype.FindTriviaCore = function (position, findInsideTrivia) {
                throw new Error('not implemented');
            };
            SyntaxNode.prototype.ReplaceCore = function (nodes, computeReplacementNode, tokens, computeReplacementToken, trivia, computeReplacementTrivia) {
                if (nodes === void 0) { nodes = null; }
                if (computeReplacementNode === void 0) { computeReplacementNode = null; }
                if (tokens === void 0) { tokens = null; }
                if (computeReplacementToken === void 0) { computeReplacementToken = null; }
                if (trivia === void 0) { trivia = null; }
                if (computeReplacementTrivia === void 0) { computeReplacementTrivia = null; }
                throw new Error('not implemented');
            };
            SyntaxNode.prototype.ReplaceNodeInListCore = function (originalNode, replacementNodes) {
                throw new Error('not implemented');
            };
            SyntaxNode.prototype.InsertNodesInListCore = function (nodeInList, nodesToInsert, insertBefore) {
                throw new Error('not implemented');
            };
            SyntaxNode.prototype.ReplaceTokenInListCore = function (originalToken, newTokens) {
                throw new Error('not implemented');
            };
            SyntaxNode.prototype.InsertTokensInListCore = function (originalToken, newTokens, insertBefore) {
                throw new Error('not implemented');
            };
            SyntaxNode.prototype.ReplaceTriviaInListCore = function (originalTrivia, newTrivia) {
                throw new Error('not implemented');
            };
            SyntaxNode.prototype.InsertTriviaInListCore = function (originalTrivia, newTrivia, insertBefore) {
                throw new Error('not implemented');
            };
            SyntaxNode.prototype.RemoveNodesCore = function (nodes, options) {
                throw new Error('not implemented');
            };
            SyntaxNode.prototype.NormalizeWhitespaceCore = function (indentation, elasticTrivia) {
                throw new Error('not implemented');
            };
            SyntaxNode.prototype.IsEquivalentToCore = function (node, topLevel) {
                if (topLevel === void 0) { topLevel = false; }
                throw new Error('not implemented');
            };
            SyntaxNode.prototype.DescendantNodesImpl = function (span, descendIntoChildren, descendIntoTrivia, includeSelf) {
                return descendIntoTrivia ? System.Linq.Enumerable.Select(System.Linq.Enumerable.Where(this.DescendantNodesAndTokensImpl(span, descendIntoChildren, descendIntoTrivia, includeSelf), function (e) { return e.IsNode; }), function (e) { return e.AsNode(); }) : this.DescendantNodesOnly(span, descendIntoChildren, includeSelf);
            };
            SyntaxNode.prototype.DescendantNodesAndTokensImpl = function (span, descendIntoChildren, descendIntoTrivia, includeSelf) {
                return descendIntoTrivia ? this.DescendantNodesAndTokensIntoTrivia(span, descendIntoChildren, includeSelf) : this.DescendantNodesAndTokensOnly(span, descendIntoChildren, includeSelf);
            };
            SyntaxNode.prototype.DescendantTriviaImpl = function (span, descendIntoChildren, descendIntoTrivia) {
                if (descendIntoChildren === void 0) { descendIntoChildren = null; }
                if (descendIntoTrivia === void 0) { descendIntoTrivia = false; }
                return descendIntoTrivia ? this.DescendantTriviaIntoTrivia(span, descendIntoChildren) : this.DescendantTriviaOnly(span, descendIntoChildren);
            };
            SyntaxNode.IsInSpan = function (span, childSpan) {
                return span.refObj.OverlapsWith(childSpan) || (childSpan.Length == 0 && span.refObj.IntersectsWith_1989(childSpan));
            };
            SyntaxNode.prototype.DescendantNodesOnly = function (span, descendIntoChildren, includeSelf) {
                var _this = this;
                var __result = new Array();
                if (includeSelf && (function () {
                    var span_ref0 = { refObj: span };
                    var ret_val__811 = SyntaxNode.IsInSpan(span_ref0, _this.FullSpan);
                    span = span_ref0.refObj;
                    return ret_val__811;
                })()) {
                    __result.push(this);
                }
                var stack = new SyntaxNode.ChildSyntaxListEnumeratorStack().ctor_1506(this, descendIntoChildren);
                try {
                    while (stack.IsNotEmpty) {
                        var span_ref0 = { refObj: span };
                        var ret_val__547 = stack.TryGetNextAsNodeInSpan(span_ref0);
                        span = span_ref0.refObj;
                        var nodeValue = ret_val__547;
                        if (nodeValue != null) {
                            stack.PushChildren_1656(nodeValue, descendIntoChildren);
                            __result.push(nodeValue);
                        }
                    }
                }
                finally {
                    if (stack != null)
                        stack.Dispose();
                }
                return __result;
            };
            SyntaxNode.prototype.DescendantNodesAndTokensOnly = function (span, descendIntoChildren, includeSelf) {
                var _this = this;
                var __result = new Array();
                if (includeSelf && (function () {
                    var span_ref0 = { refObj: span };
                    var ret_val__880 = SyntaxNode.IsInSpan(span_ref0, _this.FullSpan);
                    span = span_ref0.refObj;
                    return ret_val__880;
                })()) {
                    __result.push(CodeAnalysis.SyntaxNodeOrToken.op_Implicit_1792(this));
                }
                var stack = new SyntaxNode.ChildSyntaxListEnumeratorStack().ctor_1506(this, descendIntoChildren);
                try {
                    while (stack.IsNotEmpty) {
                        var value = structDefault(CodeAnalysis.SyntaxNodeOrToken);
                        var span_ref0 = { refObj: span };
                        var value_ref1 = { refObj: value };
                        var ret_val__14 = stack.TryGetNextInSpan(span_ref0, value_ref1);
                        span = span_ref0.refObj;
                        value = value_ref1.refObj;
                        if (ret_val__14) {
                            var nodeValue = value.AsNode();
                            if (nodeValue != null) {
                                stack.PushChildren_1656(nodeValue, descendIntoChildren);
                            }
                            __result.push(value);
                        }
                    }
                }
                finally {
                    if (stack != null)
                        stack.Dispose();
                }
                return __result;
            };
            SyntaxNode.prototype.DescendantNodesAndTokensIntoTrivia = function (span, descendIntoChildren, includeSelf) {
                var _this = this;
                var __result = new Array();
                if (includeSelf && (function () {
                    var span_ref0 = { refObj: span };
                    var ret_val__856 = SyntaxNode.IsInSpan(span_ref0, _this.FullSpan);
                    span = span_ref0.refObj;
                    return ret_val__856;
                })()) {
                    __result.push(CodeAnalysis.SyntaxNodeOrToken.op_Implicit_1792(this));
                }
                var stack = new SyntaxNode.ThreeEnumeratorListStack().ctor_4049(this, descendIntoChildren);
                try {
                    while (stack.IsNotEmpty) {
                        switch (stack.PeekNext()) {
                            case 0 /* Node */:
                                var value = structDefault(CodeAnalysis.SyntaxNodeOrToken);
                                var span_ref0 = { refObj: span };
                                var value_ref1 = { refObj: value };
                                var ret_val__703 = stack.TryGetNextInSpan(span_ref0, value_ref1);
                                span = span_ref0.refObj;
                                value = value_ref1.refObj;
                                if (ret_val__703) {
                                    if (value.IsNode) {
                                        stack.PushChildren(value.AsNode(), descendIntoChildren);
                                    }
                                    else if (value.IsToken) {
                                        var token = value.AsToken();
                                        if (token.HasStructuredTrivia) {
                                            if (token.HasTrailingTrivia) {
                                                var token_ref0 = { refObj: token };
                                                stack.PushTrailingTrivia(token_ref0);
                                                token = token_ref0.refObj;
                                                ;
                                            }
                                            var value_ref0 = { refObj: value };
                                            stack.PushToken(value_ref0);
                                            value = value_ref0.refObj;
                                            ;
                                            if (token.HasLeadingTrivia) {
                                                var token_ref0 = { refObj: token };
                                                stack.PushLeadingTrivia(token_ref0);
                                                token = token_ref0.refObj;
                                                ;
                                            }
                                            break;
                                        }
                                    }
                                    __result.push(value);
                                }
                                break;
                            case 1 /* Trivia */:
                                var trivia = structDefault(CodeAnalysis.SyntaxTrivia);
                                var trivia_ref0 = { refObj: trivia };
                                var ret_val__264 = stack.TryGetNext(trivia_ref0);
                                trivia = trivia_ref0.refObj;
                                if (ret_val__264) {
                                    if (trivia.HasStructure && (function () {
                                        var span_ref0 = { refObj: span };
                                        var ret_val__564 = SyntaxNode.IsInSpan(span_ref0, trivia.FullSpan);
                                        span = span_ref0.refObj;
                                        return ret_val__564;
                                    })()) {
                                        var structureNode = trivia.GetStructure();
                                        stack.PushChildren(structureNode, descendIntoChildren);
                                        __result.push(CodeAnalysis.SyntaxNodeOrToken.op_Implicit_1792(structureNode));
                                    }
                                }
                                break;
                            case 2 /* Token */:
                                __result.push(stack.PopToken());
                                break;
                        }
                    }
                }
                finally {
                    if (stack != null)
                        stack.Dispose();
                }
                return __result;
            };
            SyntaxNode.prototype.DescendantTriviaOnly = function (span, descendIntoChildren) {
                var __result = new Array();
                var stack = new SyntaxNode.ChildSyntaxListEnumeratorStack().ctor_1506(this, descendIntoChildren);
                try {
                    var value = structDefault(CodeAnalysis.SyntaxNodeOrToken);
                    while (stack.IsNotEmpty) {
                        var span_ref0 = { refObj: span };
                        var value_ref1 = { refObj: value };
                        var ret_val__207 = stack.TryGetNextInSpan(span_ref0, value_ref1);
                        span = span_ref0.refObj;
                        value = value_ref1.refObj;
                        if (ret_val__207) {
                            if (value.IsNode) {
                                var nodeValue = value.AsNode();
                                stack.PushChildren_1656(nodeValue, descendIntoChildren);
                            }
                            else if (value.IsToken) {
                                var token = value.AsToken();
                                var triviaEnumerator = token.LeadingTrivia.GetEnumerator();
                                try {
                                    while (triviaEnumerator.MoveNext()) {
                                        var trivia = triviaEnumerator.Current;
                                        var span_ref0 = { refObj: span };
                                        var ret_val__684 = SyntaxNode.IsInSpan(span_ref0, trivia.FullSpan);
                                        span = span_ref0.refObj;
                                        if (ret_val__684) {
                                            __result.push(trivia);
                                        }
                                    }
                                }
                                finally {
                                    if (triviaEnumerator !== null)
                                        triviaEnumerator.Dispose();
                                }
                                var triviaEnumerator = token.TrailingTrivia.GetEnumerator();
                                try {
                                    while (triviaEnumerator.MoveNext()) {
                                        var trivia = triviaEnumerator.Current;
                                        var span_ref0 = { refObj: span };
                                        var ret_val__192 = SyntaxNode.IsInSpan(span_ref0, trivia.FullSpan);
                                        span = span_ref0.refObj;
                                        if (ret_val__192) {
                                            __result.push(trivia);
                                        }
                                    }
                                }
                                finally {
                                    if (triviaEnumerator !== null)
                                        triviaEnumerator.Dispose();
                                }
                            }
                        }
                    }
                }
                finally {
                    if (stack != null)
                        stack.Dispose();
                }
                return __result;
            };
            SyntaxNode.prototype.DescendantTriviaIntoTrivia = function (span, descendIntoChildren) {
                var __result = new Array();
                var stack = new SyntaxNode.TwoEnumeratorListStack().ctor_3899(this, descendIntoChildren);
                try {
                    while (stack.IsNotEmpty) {
                        switch (stack.PeekNext()) {
                            case 0 /* Node */:
                                var value = structDefault(CodeAnalysis.SyntaxNodeOrToken);
                                var span_ref0 = { refObj: span };
                                var value_ref1 = { refObj: value };
                                var ret_val__351 = stack.TryGetNextInSpan(span_ref0, value_ref1);
                                span = span_ref0.refObj;
                                value = value_ref1.refObj;
                                if (ret_val__351) {
                                    if (value.IsNode) {
                                        var nodeValue = value.AsNode();
                                        stack.PushChildren(nodeValue, descendIntoChildren);
                                    }
                                    else if (value.IsToken) {
                                        var token = value.AsToken();
                                        if (token.HasTrailingTrivia) {
                                            var token_ref0 = { refObj: token };
                                            stack.PushTrailingTrivia(token_ref0);
                                            token = token_ref0.refObj;
                                            ;
                                        }
                                        if (token.HasLeadingTrivia) {
                                            var token_ref0 = { refObj: token };
                                            stack.PushLeadingTrivia(token_ref0);
                                            token = token_ref0.refObj;
                                            ;
                                        }
                                    }
                                }
                                break;
                            case 1 /* Trivia */:
                                var trivia = structDefault(CodeAnalysis.SyntaxTrivia);
                                var trivia_ref0 = { refObj: trivia };
                                var ret_val__968 = stack.TryGetNext(trivia_ref0);
                                trivia = trivia_ref0.refObj;
                                if (ret_val__968) {
                                    if (trivia.HasStructure) {
                                        var structureNode = trivia.GetStructure();
                                        stack.PushChildren(structureNode, descendIntoChildren);
                                    }
                                    var span_ref0 = { refObj: span };
                                    var ret_val__61 = SyntaxNode.IsInSpan(span_ref0, trivia.FullSpan);
                                    span = span_ref0.refObj;
                                    if (ret_val__61) {
                                        __result.push(trivia);
                                    }
                                }
                                break;
                        }
                    }
                }
                finally {
                    if (stack != null)
                        stack.Dispose();
                }
                return __result;
            };
            return SyntaxNode;
        })();
        CodeAnalysis.SyntaxNode = SyntaxNode;
        var SyntaxNode;
        (function (SyntaxNode) {
            var ChildSyntaxListEnumeratorStack = (function () {
                function ChildSyntaxListEnumeratorStack() {
                    this.stackPtr = 0;
                }
                ChildSyntaxListEnumeratorStack.prototype.ctor_1506 = function (startingNode, descendIntoChildren) {
                    if (descendIntoChildren == null || descendIntoChildren(startingNode)) {
                        this.stack = ChildSyntaxListEnumeratorStack.StackPool.Allocate();
                        this.stackPtr = 0;
                        this.stack[0].InitializeFrom(startingNode);
                    }
                    else {
                        this.stack = null;
                        this.stackPtr = -1;
                    }
                    return this;
                };
                Object.defineProperty(ChildSyntaxListEnumeratorStack.prototype, "IsNotEmpty", {
                    get: function () {
                        return this.stackPtr >= 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                ChildSyntaxListEnumeratorStack.prototype.TryGetNextInSpan = function (span, value) {
                    value.refObj = structDefault(CodeAnalysis.SyntaxNodeOrToken);
                    while (this.stack[this.stackPtr].TryMoveNextAndGetCurrent(value)) {
                        if (SyntaxNode.IsInSpan(span, value.refObj.FullSpan)) {
                            return true;
                        }
                    }
                    this.stackPtr--;
                    return false;
                };
                ChildSyntaxListEnumeratorStack.prototype.TryGetNextAsNodeInSpan = function (span) {
                    var nodeValue;
                    while ((nodeValue = this.stack[this.stackPtr].TryMoveNextAndGetCurrentAsNode()) != null) {
                        if (SyntaxNode.IsInSpan(span, nodeValue.FullSpan)) {
                            return nodeValue;
                        }
                    }
                    this.stackPtr--;
                    return null;
                };
                ChildSyntaxListEnumeratorStack.prototype.PushChildren_4828 = function (node) {
                    if (++this.stackPtr >= this.stack.length) {
                        var stack_ref0 = { refObj: this.stack };
                        TSArray.Resize(stack_ref0, (this.stackPtr * 2));
                        this.stack = stack_ref0.refObj;
                        ;
                    }
                    this.stack[this.stackPtr].InitializeFrom(node);
                };
                ChildSyntaxListEnumeratorStack.prototype.PushChildren_1656 = function (node, descendIntoChildren) {
                    if (descendIntoChildren == null || descendIntoChildren(node)) {
                        this.PushChildren_4828(node);
                    }
                };
                ChildSyntaxListEnumeratorStack.prototype.Dispose = function () {
                    if (this.stack != null && this.stack.length < 256) {
                        ChildSyntaxListEnumeratorStack.StackPool.Free(this.stack);
                    }
                };
                ChildSyntaxListEnumeratorStack.StackPool = new Roslyn.Utilities.ObjectPool().ctor_3306(function () { return StructArray(CodeAnalysis.ChildSyntaxList.Enumerator, 16); });
                return ChildSyntaxListEnumeratorStack;
            })();
            SyntaxNode.ChildSyntaxListEnumeratorStack = ChildSyntaxListEnumeratorStack;
        })(SyntaxNode = CodeAnalysis.SyntaxNode || (CodeAnalysis.SyntaxNode = {}));
        var SyntaxNode;
        (function (SyntaxNode) {
            var TriviaListEnumeratorStack = (function () {
                function TriviaListEnumeratorStack() {
                    this.stackPtr = 0;
                }
                TriviaListEnumeratorStack.prototype.TryGetNext = function (value) {
                    value.refObj = structDefault(CodeAnalysis.SyntaxTrivia);
                    if (this.stack[this.stackPtr].TryMoveNextAndGetCurrent(value)) {
                        return true;
                    }
                    this.stackPtr--;
                    return false;
                };
                TriviaListEnumeratorStack.prototype.PushLeadingTrivia = function (token) {
                    this.Grow();
                    this.stack[this.stackPtr].InitializeFromLeadingTrivia(token);
                };
                TriviaListEnumeratorStack.prototype.PushTrailingTrivia = function (token) {
                    this.Grow();
                    this.stack[this.stackPtr].InitializeFromTrailingTrivia(token);
                };
                TriviaListEnumeratorStack.prototype.Grow = function () {
                    if (this.stack == null) {
                        this.stack = TriviaListEnumeratorStack.StackPool.Allocate();
                        this.stackPtr = -1;
                    }
                    if (++this.stackPtr >= this.stack.length) {
                        var stack_ref0 = { refObj: this.stack };
                        TSArray.Resize(stack_ref0, (this.stackPtr * 2));
                        this.stack = stack_ref0.refObj;
                        ;
                    }
                };
                TriviaListEnumeratorStack.prototype.Dispose = function () {
                    if (this.stack != null && this.stack.length < 256) {
                        TSArray.Clear(this.stack, 0, this.stack.length);
                        TriviaListEnumeratorStack.StackPool.Free(this.stack);
                    }
                };
                TriviaListEnumeratorStack.StackPool = new Roslyn.Utilities.ObjectPool().ctor_3306(function () { return StructArray(CodeAnalysis.SyntaxTriviaList.Enumerator, 16); });
                return TriviaListEnumeratorStack;
            })();
            SyntaxNode.TriviaListEnumeratorStack = TriviaListEnumeratorStack;
        })(SyntaxNode = CodeAnalysis.SyntaxNode || (CodeAnalysis.SyntaxNode = {}));
        var SyntaxNode;
        (function (SyntaxNode) {
            var TwoEnumeratorListStack = (function () {
                function TwoEnumeratorListStack() {
                    this.nodeStack = structDefault(SyntaxNode.ChildSyntaxListEnumeratorStack);
                    this.triviaStack = structDefault(SyntaxNode.TriviaListEnumeratorStack);
                }
                TwoEnumeratorListStack.prototype.ctor_3899 = function (startingNode, descendIntoChildren) {
                    this.nodeStack = new SyntaxNode.ChildSyntaxListEnumeratorStack().ctor_1506(startingNode, descendIntoChildren);
                    this.triviaStack = new SyntaxNode.TriviaListEnumeratorStack();
                    if (this.nodeStack.IsNotEmpty) {
                        this.discriminatorStack = CodeAnalysis.ArrayBuilder.GetInstance_1997();
                        CodeAnalysis.ArrayBuilderExtensions.Push(this.discriminatorStack, 0 /* Node */);
                    }
                    else {
                        this.discriminatorStack = null;
                    }
                    return this;
                };
                Object.defineProperty(TwoEnumeratorListStack.prototype, "IsNotEmpty", {
                    get: function () {
                        return this.discriminatorStack != null && this.discriminatorStack.Count > 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                TwoEnumeratorListStack.prototype.PeekNext = function () {
                    return CodeAnalysis.ArrayBuilderExtensions.Peek(this.discriminatorStack);
                };
                TwoEnumeratorListStack.prototype.TryGetNextInSpan = function (span, value) {
                    if (this.nodeStack.TryGetNextInSpan(span, value)) {
                        return true;
                    }
                    CodeAnalysis.ArrayBuilderExtensions.Pop(this.discriminatorStack);
                    return false;
                };
                TwoEnumeratorListStack.prototype.TryGetNext = function (value) {
                    if (this.triviaStack.TryGetNext(value)) {
                        return true;
                    }
                    CodeAnalysis.ArrayBuilderExtensions.Pop(this.discriminatorStack);
                    return false;
                };
                TwoEnumeratorListStack.prototype.PushChildren = function (node, descendIntoChildren) {
                    if (descendIntoChildren == null || descendIntoChildren(node)) {
                        this.nodeStack.PushChildren_4828(node);
                        CodeAnalysis.ArrayBuilderExtensions.Push(this.discriminatorStack, 0 /* Node */);
                    }
                };
                TwoEnumeratorListStack.prototype.PushLeadingTrivia = function (token) {
                    this.triviaStack.PushLeadingTrivia(token);
                    CodeAnalysis.ArrayBuilderExtensions.Push(this.discriminatorStack, 1 /* Trivia */);
                };
                TwoEnumeratorListStack.prototype.PushTrailingTrivia = function (token) {
                    this.triviaStack.PushTrailingTrivia(token);
                    CodeAnalysis.ArrayBuilderExtensions.Push(this.discriminatorStack, 1 /* Trivia */);
                };
                TwoEnumeratorListStack.prototype.Dispose = function () {
                    this.nodeStack.Dispose();
                    this.triviaStack.Dispose();
                    if (this.discriminatorStack != null) {
                        this.discriminatorStack.Free();
                    }
                };
                return TwoEnumeratorListStack;
            })();
            SyntaxNode.TwoEnumeratorListStack = TwoEnumeratorListStack;
            var TwoEnumeratorListStack;
            (function (TwoEnumeratorListStack) {
                (function (Which) {
                    Which[Which["Node"] = 0] = "Node";
                    Which[Which["Trivia"] = 1] = "Trivia";
                })(TwoEnumeratorListStack.Which || (TwoEnumeratorListStack.Which = {}));
                var Which = TwoEnumeratorListStack.Which;
            })(TwoEnumeratorListStack = SyntaxNode.TwoEnumeratorListStack || (SyntaxNode.TwoEnumeratorListStack = {}));
        })(SyntaxNode = CodeAnalysis.SyntaxNode || (CodeAnalysis.SyntaxNode = {}));
        var SyntaxNode;
        (function (SyntaxNode) {
            var ThreeEnumeratorListStack = (function () {
                function ThreeEnumeratorListStack() {
                    this.nodeStack = structDefault(SyntaxNode.ChildSyntaxListEnumeratorStack);
                    this.triviaStack = structDefault(SyntaxNode.TriviaListEnumeratorStack);
                }
                ThreeEnumeratorListStack.prototype.ctor_4049 = function (startingNode, descendIntoChildren) {
                    this.nodeStack = new SyntaxNode.ChildSyntaxListEnumeratorStack().ctor_1506(startingNode, descendIntoChildren);
                    this.triviaStack = new SyntaxNode.TriviaListEnumeratorStack();
                    if (this.nodeStack.IsNotEmpty) {
                        this.tokenStack = CodeAnalysis.ArrayBuilder.GetInstance_1997();
                        this.discriminatorStack = CodeAnalysis.ArrayBuilder.GetInstance_1997();
                        CodeAnalysis.ArrayBuilderExtensions.Push(this.discriminatorStack, 0 /* Node */);
                    }
                    else {
                        this.tokenStack = null;
                        this.discriminatorStack = null;
                    }
                    return this;
                };
                Object.defineProperty(ThreeEnumeratorListStack.prototype, "IsNotEmpty", {
                    get: function () {
                        return this.discriminatorStack != null && this.discriminatorStack.Count > 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                ThreeEnumeratorListStack.prototype.PeekNext = function () {
                    return CodeAnalysis.ArrayBuilderExtensions.Peek(this.discriminatorStack);
                };
                ThreeEnumeratorListStack.prototype.TryGetNextInSpan = function (span, value) {
                    if (this.nodeStack.TryGetNextInSpan(span, value)) {
                        return true;
                    }
                    CodeAnalysis.ArrayBuilderExtensions.Pop(this.discriminatorStack);
                    return false;
                };
                ThreeEnumeratorListStack.prototype.TryGetNext = function (value) {
                    if (this.triviaStack.TryGetNext(value)) {
                        return true;
                    }
                    CodeAnalysis.ArrayBuilderExtensions.Pop(this.discriminatorStack);
                    return false;
                };
                ThreeEnumeratorListStack.prototype.PopToken = function () {
                    CodeAnalysis.ArrayBuilderExtensions.Pop(this.discriminatorStack);
                    return CodeAnalysis.ArrayBuilderExtensions.Pop(this.tokenStack);
                };
                ThreeEnumeratorListStack.prototype.PushChildren = function (node, descendIntoChildren) {
                    if (descendIntoChildren == null || descendIntoChildren(node)) {
                        this.nodeStack.PushChildren_4828(node);
                        CodeAnalysis.ArrayBuilderExtensions.Push(this.discriminatorStack, 0 /* Node */);
                    }
                };
                ThreeEnumeratorListStack.prototype.PushLeadingTrivia = function (token) {
                    this.triviaStack.PushLeadingTrivia(token);
                    CodeAnalysis.ArrayBuilderExtensions.Push(this.discriminatorStack, 1 /* Trivia */);
                };
                ThreeEnumeratorListStack.prototype.PushTrailingTrivia = function (token) {
                    this.triviaStack.PushTrailingTrivia(token);
                    CodeAnalysis.ArrayBuilderExtensions.Push(this.discriminatorStack, 1 /* Trivia */);
                };
                ThreeEnumeratorListStack.prototype.PushToken = function (value) {
                    CodeAnalysis.ArrayBuilderExtensions.Push(this.tokenStack, value.refObj);
                    CodeAnalysis.ArrayBuilderExtensions.Push(this.discriminatorStack, 2 /* Token */);
                };
                ThreeEnumeratorListStack.prototype.Dispose = function () {
                    this.nodeStack.Dispose();
                    this.triviaStack.Dispose();
                    if (this.tokenStack != null) {
                        this.tokenStack.Free();
                    }
                    if (this.discriminatorStack == null) {
                        this.discriminatorStack.Free();
                    }
                };
                return ThreeEnumeratorListStack;
            })();
            SyntaxNode.ThreeEnumeratorListStack = ThreeEnumeratorListStack;
            var ThreeEnumeratorListStack;
            (function (ThreeEnumeratorListStack) {
                (function (Which) {
                    Which[Which["Node"] = 0] = "Node";
                    Which[Which["Trivia"] = 1] = "Trivia";
                    Which[Which["Token"] = 2] = "Token";
                })(ThreeEnumeratorListStack.Which || (ThreeEnumeratorListStack.Which = {}));
                var Which = ThreeEnumeratorListStack.Which;
            })(ThreeEnumeratorListStack = SyntaxNode.ThreeEnumeratorListStack || (SyntaxNode.ThreeEnumeratorListStack = {}));
        })(SyntaxNode = CodeAnalysis.SyntaxNode || (CodeAnalysis.SyntaxNode = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var SyntaxNodeExtensions = (function () {
            function SyntaxNodeExtensions() {
            }
            SyntaxNodeExtensions.ReplaceSyntax = function (root, nodes, computeReplacementNode, tokens, computeReplacementToken, trivia, computeReplacementTrivia) {
                return root.ReplaceCore(nodes, computeReplacementNode, tokens, computeReplacementToken, trivia, computeReplacementTrivia);
            };
            SyntaxNodeExtensions.ReplaceNodes = function (root, nodes, computeReplacementNode) {
                return root.ReplaceCore(nodes, computeReplacementNode, null, null, null, null);
            };
            SyntaxNodeExtensions.ReplaceNode_3137 = function (root, oldNode, newNode) {
                return root.ReplaceCore(new Array(oldNode), function (o, r) { return newNode; }, null, null, null, null);
            };
            SyntaxNodeExtensions.ReplaceNode_1914 = function (root, oldNode, newNodes) {
                return root.ReplaceNodeInListCore(oldNode, newNodes);
            };
            SyntaxNodeExtensions.InsertNodesBefore = function (root, nodeInList, newNodes) {
                return root.InsertNodesInListCore(nodeInList, newNodes, true);
            };
            SyntaxNodeExtensions.InsertNodesAfter = function (root, nodeInList, newNodes) {
                return root.InsertNodesInListCore(nodeInList, newNodes, false);
            };
            SyntaxNodeExtensions.ReplaceToken_1116 = function (root, tokenInList, newTokens) {
                return root.ReplaceTokenInListCore(tokenInList, newTokens);
            };
            SyntaxNodeExtensions.InsertTokensBefore = function (root, tokenInList, newTokens) {
                return root.InsertTokensInListCore(tokenInList, newTokens, true);
            };
            SyntaxNodeExtensions.InsertTokensAfter = function (root, tokenInList, newTokens) {
                return root.InsertTokensInListCore(tokenInList, newTokens, false);
            };
            SyntaxNodeExtensions.ReplaceTrivia_2582 = function (root, oldTrivia, newTrivia) {
                return root.ReplaceTriviaInListCore(oldTrivia, newTrivia);
            };
            SyntaxNodeExtensions.InsertTriviaBefore = function (root, trivia, newTrivia) {
                return root.InsertTriviaInListCore(trivia, newTrivia, true);
            };
            SyntaxNodeExtensions.InsertTriviaAfter = function (root, trivia, newTrivia) {
                return root.InsertTriviaInListCore(trivia, newTrivia, false);
            };
            SyntaxNodeExtensions.ReplaceTokens = function (root, tokens, computeReplacementToken) {
                return root.ReplaceCore(null, null, tokens, computeReplacementToken, null, null);
            };
            SyntaxNodeExtensions.ReplaceToken_1612 = function (root, oldToken, newToken) {
                return root.ReplaceCore(null, null, new Array(oldToken), function (o, r) { return newToken; }, null, null);
            };
            SyntaxNodeExtensions.ReplaceTrivia_7706 = function (root, trivia, computeReplacementTrivia) {
                return root.ReplaceCore(null, null, null, null, trivia, computeReplacementTrivia);
            };
            SyntaxNodeExtensions.ReplaceTrivia_1991 = function (root, trivia, newTrivia) {
                return root.ReplaceCore(null, null, null, null, new Array(trivia), function (o, r) { return newTrivia; });
            };
            SyntaxNodeExtensions.RemoveNode = function (root, node, options) {
                return root.RemoveNodesCore(new Array(node), options);
            };
            SyntaxNodeExtensions.RemoveNodes = function (root, nodes, options) {
                return root.RemoveNodesCore(nodes, options);
            };
            SyntaxNodeExtensions.NormalizeWhitespace = function (node, indentation, elasticTrivia) {
                if (indentation === void 0) { indentation = SyntaxNodeExtensions.DefaultIndentation; }
                if (elasticTrivia === void 0) { elasticTrivia = false; }
                return node.NormalizeWhitespaceCore(indentation, elasticTrivia);
            };
            SyntaxNodeExtensions.WithLeadingTrivia_9576 = function (node, trivia) {
                var first = node.GetFirstToken(true, false, false, false);
                var newFirst = first.WithLeadingTrivia_1905(trivia);
                return SyntaxNodeExtensions.ReplaceToken_1612(node, first, newFirst);
            };
            SyntaxNodeExtensions.WithLeadingTrivia_1499 = function (node, trivia) {
                var first = node.GetFirstToken(true, false, false, false);
                var newFirst = first.WithLeadingTrivia_1496(trivia);
                return SyntaxNodeExtensions.ReplaceToken_1612(node, first, newFirst);
            };
            SyntaxNodeExtensions.WithoutLeadingTrivia = function (node) {
                return SyntaxNodeExtensions.WithLeadingTrivia_1499(node, null);
            };
            SyntaxNodeExtensions.WithLeadingTrivia_2040 = function (node) {
                var trivia = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    trivia[_i - 1] = arguments[_i];
                }
                return SyntaxNodeExtensions.WithLeadingTrivia_1499(node, trivia);
            };
            SyntaxNodeExtensions.WithTrailingTrivia_5344 = function (node, trivia) {
                var last = node.GetLastToken(true, false, false, false);
                var newLast = last.WithTrailingTrivia_6264(trivia);
                return SyntaxNodeExtensions.ReplaceToken_1612(node, last, newLast);
            };
            SyntaxNodeExtensions.WithTrailingTrivia_1964 = function (node, trivia) {
                var last = node.GetLastToken(true, false, false, false);
                var newLast = last.WithTrailingTrivia_1187(trivia);
                return SyntaxNodeExtensions.ReplaceToken_1612(node, last, newLast);
            };
            SyntaxNodeExtensions.WithoutTrailingTrivia = function (node) {
                return SyntaxNodeExtensions.WithTrailingTrivia_1964(node, null);
            };
            SyntaxNodeExtensions.WithTrailingTrivia_7421 = function (node) {
                var trivia = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    trivia[_i - 1] = arguments[_i];
                }
                return SyntaxNodeExtensions.WithTrailingTrivia_1964(node, trivia);
            };
            SyntaxNodeExtensions.DefaultIndentation = "    ";
            return SyntaxNodeExtensions;
        })();
        CodeAnalysis.SyntaxNodeExtensions = SyntaxNodeExtensions;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var SyntaxNodeOrToken = (function () {
            function SyntaxNodeOrToken() {
                this.position = 0;
                this.tokenIndex = 0;
            }
            SyntaxNodeOrToken.prototype.ctor_1281 = function (node) {
                if (node != null) {
                    System.Diagnostics.Debug.Assert(!node.Green.IsList, "node cannot be a list");
                    this.position = node.Position;
                    this.nodeOrParent = node;
                }
                this.tokenIndex = -1;
                return this;
            };
            SyntaxNodeOrToken.prototype.ctor_1484 = function (parent, token, position, index) {
                System.Diagnostics.Debug.Assert(parent == null || !parent.Green.IsList, "parent cannot be a list");
                System.Diagnostics.Debug.Assert(token != null || (parent == null && position == 0 && index == 0), "parts must form a token");
                System.Diagnostics.Debug.Assert(token == null || token.IsToken, "token must be a token");
                System.Diagnostics.Debug.Assert(index >= 0, "index must not be negative");
                System.Diagnostics.Debug.Assert(parent == null || token != null, "null token cannot have parent");
                this.position = position;
                this.tokenIndex = index;
                this.nodeOrParent = parent;
                this.token = token;
                return this;
            };
            Object.defineProperty(SyntaxNodeOrToken.prototype, "KindText", {
                get: function () {
                    if (this.token != null) {
                        return this.token.KindText;
                    }
                    else if (this.nodeOrParent != null) {
                        return this.nodeOrParent.Green.KindText;
                    }
                    else {
                        return "None";
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNodeOrToken.prototype, "RawKind", {
                get: function () {
                    if (this.token != null) {
                        return this.token.RawKind;
                    }
                    else if (this.nodeOrParent != null) {
                        return this.nodeOrParent.RawKind;
                    }
                    else {
                        return 0;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNodeOrToken.prototype, "Language", {
                get: function () {
                    if (this.token != null) {
                        return this.token.Language;
                    }
                    else if (this.nodeOrParent != null) {
                        return this.nodeOrParent.Language;
                    }
                    else {
                        return System.String.Empty;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNodeOrToken.prototype, "IsMissing", {
                get: function () {
                    if (this.token != null) {
                        return this.token.IsMissing;
                    }
                    else if (this.nodeOrParent != null) {
                        return this.nodeOrParent.IsMissing;
                    }
                    else {
                        return false;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNodeOrToken.prototype, "Parent", {
                get: function () {
                    if (this.token != null) {
                        return this.nodeOrParent;
                    }
                    else if (this.nodeOrParent != null) {
                        return this.nodeOrParent.Parent;
                    }
                    else {
                        return null;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNodeOrToken.prototype, "UnderlyingNode", {
                get: function () {
                    if (this.token != null) {
                        return this.token;
                    }
                    else if (this.nodeOrParent != null) {
                        return this.nodeOrParent.Green;
                    }
                    else {
                        return null;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNodeOrToken.prototype, "Position", {
                get: function () {
                    return this.position;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNodeOrToken.prototype, "IsToken", {
                get: function () {
                    return !this.IsNode;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNodeOrToken.prototype, "IsNode", {
                get: function () {
                    return this.tokenIndex < 0;
                },
                enumerable: true,
                configurable: true
            });
            SyntaxNodeOrToken.prototype.AsToken = function () {
                if (this.token != null) {
                    return new CodeAnalysis.SyntaxToken().ctor_1108(this.nodeOrParent, this.token, this.Position, this.tokenIndex);
                }
                return structDefault(CodeAnalysis.SyntaxToken);
            };
            SyntaxNodeOrToken.prototype.AsNode = function () {
                if (this.token != null) {
                    return null;
                }
                return this.nodeOrParent;
            };
            SyntaxNodeOrToken.prototype.ChildNodesAndTokens = function () {
                return this.IsToken ? structDefault(CodeAnalysis.ChildSyntaxList) : this.nodeOrParent.ChildNodesAndTokens();
            };
            Object.defineProperty(SyntaxNodeOrToken.prototype, "Span", {
                get: function () {
                    if (this.token != null) {
                        return this.AsToken().Span;
                    }
                    if (this.nodeOrParent != null) {
                        return this.nodeOrParent.Span;
                    }
                    return structDefault(CodeAnalysis.Text.TextSpan);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNodeOrToken.prototype, "SpanStart", {
                get: function () {
                    if (this.token != null) {
                        return this.position + this.token.GetLeadingTriviaWidth();
                    }
                    if (this.nodeOrParent != null) {
                        return this.nodeOrParent.SpanStart;
                    }
                    return 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNodeOrToken.prototype, "FullSpan", {
                get: function () {
                    if (this.token != null) {
                        return new CodeAnalysis.Text.TextSpan().ctor_1506(this.Position, this.token.FullWidth);
                    }
                    if (this.nodeOrParent != null) {
                        return this.nodeOrParent.FullSpan;
                    }
                    return structDefault(CodeAnalysis.Text.TextSpan);
                },
                enumerable: true,
                configurable: true
            });
            SyntaxNodeOrToken.prototype.ToString = function () {
                if (this.token != null) {
                    return this.token.ToString();
                }
                if (this.nodeOrParent != null) {
                    return this.nodeOrParent.ToString();
                }
                return System.String.Empty;
            };
            SyntaxNodeOrToken.prototype.ToFullString = function () {
                if (this.token != null) {
                    return this.token.ToFullString();
                }
                if (this.nodeOrParent != null) {
                    return this.nodeOrParent.ToFullString();
                }
                return System.String.Empty;
            };
            SyntaxNodeOrToken.prototype.WriteTo = function (writer) {
                if (this.token != null) {
                    this.token.WriteTo_1120(writer);
                }
                else if (this.nodeOrParent != null) {
                    this.nodeOrParent.WriteTo(writer);
                }
            };
            Object.defineProperty(SyntaxNodeOrToken.prototype, "HasLeadingTrivia", {
                get: function () {
                    if (this.token != null) {
                        return this.token.HasLeadingTrivia;
                    }
                    if (this.nodeOrParent != null) {
                        return this.nodeOrParent.HasLeadingTrivia;
                    }
                    return false;
                },
                enumerable: true,
                configurable: true
            });
            SyntaxNodeOrToken.prototype.GetLeadingTrivia = function () {
                if (this.token != null) {
                    return this.AsToken().LeadingTrivia;
                }
                if (this.nodeOrParent != null) {
                    return this.nodeOrParent.GetLeadingTrivia();
                }
                return structDefault(CodeAnalysis.SyntaxTriviaList);
            };
            Object.defineProperty(SyntaxNodeOrToken.prototype, "HasTrailingTrivia", {
                get: function () {
                    if (this.token != null) {
                        return this.token.HasTrailingTrivia;
                    }
                    if (this.nodeOrParent != null) {
                        return this.nodeOrParent.HasTrailingTrivia;
                    }
                    return false;
                },
                enumerable: true,
                configurable: true
            });
            SyntaxNodeOrToken.prototype.GetTrailingTrivia = function () {
                if (this.token != null) {
                    return this.AsToken().TrailingTrivia;
                }
                if (this.nodeOrParent != null) {
                    return this.nodeOrParent.GetTrailingTrivia();
                }
                return structDefault(CodeAnalysis.SyntaxTriviaList);
            };
            SyntaxNodeOrToken.prototype.WithLeadingTrivia_2002 = function (trivia) {
                if (this.token != null) {
                    return SyntaxNodeOrToken.op_Implicit_7398(this.AsToken().WithLeadingTrivia_1496(trivia));
                }
                if (this.nodeOrParent != null) {
                    return SyntaxNodeOrToken.op_Implicit_1792(CodeAnalysis.SyntaxNodeExtensions.WithLeadingTrivia_1499(this.nodeOrParent, trivia));
                }
                return this;
            };
            SyntaxNodeOrToken.prototype.WithLeadingTrivia_1694 = function () {
                var trivia = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    trivia[_i - 0] = arguments[_i];
                }
                return this.WithLeadingTrivia_2002(trivia);
            };
            SyntaxNodeOrToken.prototype.WithTrailingTrivia_5961 = function (trivia) {
                if (this.token != null) {
                    return SyntaxNodeOrToken.op_Implicit_7398(this.AsToken().WithTrailingTrivia_1187(trivia));
                }
                if (this.nodeOrParent != null) {
                    return SyntaxNodeOrToken.op_Implicit_1792(CodeAnalysis.SyntaxNodeExtensions.WithTrailingTrivia_1964(this.nodeOrParent, trivia));
                }
                return this;
            };
            SyntaxNodeOrToken.prototype.WithTrailingTrivia_3457 = function () {
                var trivia = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    trivia[_i - 0] = arguments[_i];
                }
                return this.WithTrailingTrivia_5961(trivia);
            };
            Object.defineProperty(SyntaxNodeOrToken.prototype, "ContainsDiagnostics", {
                get: function () {
                    if (this.token != null) {
                        return this.token.ContainsDiagnostics;
                    }
                    if (this.nodeOrParent != null) {
                        return this.nodeOrParent.ContainsDiagnostics;
                    }
                    return false;
                },
                enumerable: true,
                configurable: true
            });
            SyntaxNodeOrToken.prototype.GetDiagnostics = function () {
                if (this.token != null) {
                    return this.AsToken().GetDiagnostics();
                }
                if (this.nodeOrParent != null) {
                    return this.nodeOrParent.GetDiagnostics();
                }
                return Roslyn.Utilities.SpecializedCollections.EmptyEnumerable();
            };
            Object.defineProperty(SyntaxNodeOrToken.prototype, "ContainsDirectives", {
                get: function () {
                    if (this.token != null) {
                        return this.token.ContainsDirectives;
                    }
                    if (this.nodeOrParent != null) {
                        return this.nodeOrParent.ContainsDirectives;
                    }
                    return false;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNodeOrToken.prototype, "ContainsAnnotations", {
                get: function () {
                    if (this.token != null) {
                        return this.token.ContainsAnnotations;
                    }
                    if (this.nodeOrParent != null) {
                        return this.nodeOrParent.ContainsAnnotations;
                    }
                    return false;
                },
                enumerable: true,
                configurable: true
            });
            SyntaxNodeOrToken.prototype.HasAnnotations_4203 = function (annotationKind) {
                if (this.token != null) {
                    return this.token.HasAnnotations_4203(annotationKind);
                }
                if (this.nodeOrParent != null) {
                    return this.nodeOrParent.HasAnnotations_4203(annotationKind);
                }
                return false;
            };
            SyntaxNodeOrToken.prototype.HasAnnotations_9693 = function (annotationKinds) {
                if (this.token != null) {
                    return this.token.HasAnnotations_9693(annotationKinds);
                }
                if (this.nodeOrParent != null) {
                    return this.nodeOrParent.HasAnnotations_9693(annotationKinds);
                }
                return false;
            };
            SyntaxNodeOrToken.prototype.HasAnnotation = function (annotation) {
                if (this.token != null) {
                    return this.token.HasAnnotation(annotation);
                }
                if (this.nodeOrParent != null) {
                    return this.nodeOrParent.HasAnnotation(annotation);
                }
                return false;
            };
            SyntaxNodeOrToken.prototype.GetAnnotations_1417 = function (annotationKind) {
                if (this.token != null) {
                    return this.token.GetAnnotations_1417(annotationKind);
                }
                if (this.nodeOrParent != null) {
                    return this.nodeOrParent.GetAnnotations_1417(annotationKind);
                }
                return Roslyn.Utilities.SpecializedCollections.EmptyEnumerable();
            };
            SyntaxNodeOrToken.prototype.GetAnnotations_2034 = function (annotationKinds) {
                if (this.token != null) {
                    return this.token.GetAnnotations_2034(annotationKinds);
                }
                if (this.nodeOrParent != null) {
                    return this.nodeOrParent.GetAnnotations_2034(annotationKinds);
                }
                return Roslyn.Utilities.SpecializedCollections.EmptyEnumerable();
            };
            SyntaxNodeOrToken.prototype.WithAdditionalAnnotations_2051 = function () {
                var annotations = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    annotations[_i - 0] = arguments[_i];
                }
                return this.WithAdditionalAnnotations_1967(annotations);
            };
            SyntaxNodeOrToken.prototype.WithAdditionalAnnotations_1967 = function (annotations) {
                if (annotations == null) {
                    throw new System.ArgumentNullException("annotations");
                }
                if (this.token != null) {
                    return SyntaxNodeOrToken.op_Implicit_7398(this.AsToken().WithAdditionalAnnotations_1605(annotations));
                }
                if (this.nodeOrParent != null) {
                    return SyntaxNodeOrToken.op_Implicit_1792(CodeAnalysis.AnnotationExtensions.WithAdditionalAnnotations_2071(this.nodeOrParent, annotations));
                }
                return this;
            };
            SyntaxNodeOrToken.prototype.WithoutAnnotations_6685 = function () {
                var annotations = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    annotations[_i - 0] = arguments[_i];
                }
                return this.WithoutAnnotations_2101(annotations);
            };
            SyntaxNodeOrToken.prototype.WithoutAnnotations_2101 = function (annotations) {
                if (annotations == null) {
                    throw new System.ArgumentNullException("annotations");
                }
                if (this.token != null) {
                    return SyntaxNodeOrToken.op_Implicit_7398(this.AsToken().WithoutAnnotations_1841(annotations));
                }
                if (this.nodeOrParent != null) {
                    return SyntaxNodeOrToken.op_Implicit_1792(CodeAnalysis.AnnotationExtensions.WithoutAnnotations_1837(this.nodeOrParent, annotations));
                }
                return this;
            };
            SyntaxNodeOrToken.prototype.WithoutAnnotations_1777 = function (annotationKind) {
                if (annotationKind == null) {
                    throw new System.ArgumentNullException("annotationKind");
                }
                if (this.HasAnnotations_4203(annotationKind)) {
                    return this.WithoutAnnotations_2101(this.GetAnnotations_1417(annotationKind));
                }
                else {
                    return this;
                }
            };
            SyntaxNodeOrToken.prototype.Equals_2291 = function (other) {
                System.Diagnostics.Debug.Assert((this.nodeOrParent == other.nodeOrParent && this.token == other.token && this.position == other.position && this.tokenIndex == other.tokenIndex) == (this.nodeOrParent == other.nodeOrParent && this.token == other.token && this.tokenIndex == other.tokenIndex));
                return this.nodeOrParent == other.nodeOrParent && this.token == other.token && this.tokenIndex == other.tokenIndex;
            };
            SyntaxNodeOrToken.prototype.op_Equality = function (right) {
                var left = this;
                return left.Equals_2291(right);
            };
            SyntaxNodeOrToken.prototype.op_Inequality = function (right) {
                var left = this;
                return !left.Equals_2291(right);
            };
            SyntaxNodeOrToken.prototype.Equals = function (obj) {
                return obj instanceof SyntaxNodeOrToken && this.Equals_2291(obj);
            };
            SyntaxNodeOrToken.prototype.GetHashCode = function () {
                return Roslyn.Utilities.Hash.Combine_7656(this.nodeOrParent, Roslyn.Utilities.Hash.Combine_7656(this.token, this.tokenIndex));
            };
            SyntaxNodeOrToken.prototype.IsEquivalentTo = function (other) {
                if (this.IsNode != other.IsNode) {
                    return false;
                }
                var thisUnderlying = this.UnderlyingNode;
                var otherUnderlying = other.UnderlyingNode;
                return (thisUnderlying == otherUnderlying) || (thisUnderlying != null && thisUnderlying.IsEquivalentTo(otherUnderlying));
            };
            SyntaxNodeOrToken.op_Implicit_7398 = function (token) {
                return new SyntaxNodeOrToken().ctor_1484(token.Parent, token.Node, token.Position, token.Index);
            };
            SyntaxNodeOrToken.op_Explicit_3521 = function (nodeOrToken) {
                return nodeOrToken.AsToken();
            };
            SyntaxNodeOrToken.op_Implicit_1792 = function (node) {
                return new SyntaxNodeOrToken().ctor_1281(node);
            };
            SyntaxNodeOrToken.op_Explicit_1741 = function (nodeOrToken) {
                return nodeOrToken.AsNode();
            };
            Object.defineProperty(SyntaxNodeOrToken.prototype, "SyntaxTree", {
                get: function () {
                    if (this.nodeOrParent != null) {
                        return this.nodeOrParent.SyntaxTree;
                    }
                    return null;
                },
                enumerable: true,
                configurable: true
            });
            SyntaxNodeOrToken.prototype.GetLocation = function () {
                if (this.token != null) {
                    return this.AsToken().GetLocation();
                }
                if (this.nodeOrParent != null) {
                    return this.nodeOrParent.GetLocation();
                }
                return null;
            };
            SyntaxNodeOrToken.prototype.GetDirectives_1318 = function (typeDirective, filter) {
                if (filter === void 0) { filter = null; }
                var directives = null;
                var directives_ref0 = { refObj: directives };
                SyntaxNodeOrToken.GetDirectives_1988(typeDirective, this, filter, directives_ref0);
                directives = directives_ref0.refObj;
                ;
                return directives != null ? directives : Roslyn.Utilities.SpecializedCollections.EmptyList();
            };
            SyntaxNodeOrToken.GetDirectives_1988 = function (typeDirective, node, filter, directives) {
                if (node.token != null) {
                    SyntaxNodeOrToken.GetDirectives_1443(typeDirective, node.AsToken(), filter, directives);
                }
                else if (node.nodeOrParent != null) {
                    SyntaxNodeOrToken.GetDirectives_1246(typeDirective, node.nodeOrParent, filter, directives);
                }
            };
            SyntaxNodeOrToken.GetDirectives_1246 = function (typeDirective, node, filter, directives) {
                if (node.ContainsDirectives) {
                    var childEnumerator = node.ChildNodesAndTokens().GetEnumerator();
                    try {
                        while (childEnumerator.MoveNext()) {
                            var child = childEnumerator.Current;
                            SyntaxNodeOrToken.GetDirectives_1988(typeDirective, child, filter, directives);
                        }
                    }
                    finally {
                        if (childEnumerator !== null)
                            childEnumerator.Dispose();
                    }
                }
            };
            SyntaxNodeOrToken.GetDirectives_1443 = function (typeDirective, token, filter, directives) {
                if (token.ContainsDirectives) {
                    SyntaxNodeOrToken.GetDirectives_4779(typeDirective, token.LeadingTrivia, filter, directives);
                    SyntaxNodeOrToken.GetDirectives_4779(typeDirective, token.TrailingTrivia, filter, directives);
                }
            };
            SyntaxNodeOrToken.GetDirectives_4779 = function (typeDirective, trivia, filter, directives) {
                var trEnumerator = trivia.GetEnumerator();
                try {
                    while (trEnumerator.MoveNext()) {
                        var tr = trEnumerator.Current;
                        if (tr.IsDirective) {
                            var directive = __as__(tr.GetStructure(), typeDirective);
                            if (directive != null && (filter == null || filter(directive))) {
                                if (directives.refObj == null) {
                                    directives.refObj = new System.Collections.Generic.List();
                                }
                                directives.refObj.Add(directive);
                            }
                        }
                        else if (tr.HasStructure) {
                            SyntaxNodeOrToken.GetDirectives_1246(typeDirective, tr.GetStructure(), filter, directives);
                        }
                    }
                }
                finally {
                    if (trEnumerator !== null)
                        trEnumerator.Dispose();
                }
            };
            Object.defineProperty(SyntaxNodeOrToken.prototype, "Width", {
                get: function () {
                    if (this.token != null) {
                        return this.token.Width;
                    }
                    if (this.nodeOrParent != null) {
                        return this.nodeOrParent.Width;
                    }
                    return 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNodeOrToken.prototype, "FullWidth", {
                get: function () {
                    if (this.token != null) {
                        return this.token.FullWidth;
                    }
                    if (this.nodeOrParent != null) {
                        return this.nodeOrParent.FullWidth;
                    }
                    return 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNodeOrToken.prototype, "EndPosition", {
                get: function () {
                    return this.position + this.FullWidth;
                },
                enumerable: true,
                configurable: true
            });
            SyntaxNodeOrToken.GetFirstChildIndexSpanningPosition_6215 = function (node, position) {
                if (!node.FullSpan.IntersectsWith_1739(position)) {
                    throw new System.ArgumentException("Must be within node's FullSpan", "position");
                }
                return SyntaxNodeOrToken.GetFirstChildIndexSpanningPosition_2019(node.ChildNodesAndTokens(), position);
            };
            SyntaxNodeOrToken.GetFirstChildIndexSpanningPosition_2019 = function (list, position) {
                var lo = 0;
                var hi = list.Count - 1;
                while (lo <= hi) {
                    var r = lo + ((hi - lo) >> 1);
                    var m = list.$get$(r);
                    if (position < m.Position) {
                        hi = r - 1;
                    }
                    else {
                        if (position == m.Position) {
                            for (; r > 0 && list.$get$(r - 1).FullWidth == 0; r--) {
                                ;
                            }
                            return r;
                        }
                        else if (position >= m.EndPosition) {
                            lo = r + 1;
                            continue;
                        }
                        return r;
                    }
                }
                throw Roslyn.Utilities.ExceptionUtilities.Unreachable;
            };
            SyntaxNodeOrToken.prototype.GetNextSibling = function () {
                var parent = this.Parent;
                if (parent == null) {
                    return structDefault(SyntaxNodeOrToken);
                }
                var siblings = parent.ChildNodesAndTokens();
                return siblings.Count < 8 ? this.GetNextSiblingFromStart(siblings) : this.GetNextSiblingWithSearch(siblings);
            };
            SyntaxNodeOrToken.prototype.GetPreviousSibling = function () {
                if (this.Parent != null) {
                    var returnNext = false;
                    var childEnumerator = this.Parent.ChildNodesAndTokens().Reverse().GetEnumerator();
                    try {
                        while (childEnumerator.MoveNext()) {
                            var child = childEnumerator.Current;
                            if (returnNext) {
                                return child;
                            }
                            if (child.op_Equality(this)) {
                                returnNext = true;
                            }
                        }
                    }
                    finally {
                        if (childEnumerator !== null)
                            childEnumerator.Dispose();
                    }
                }
                return structDefault(SyntaxNodeOrToken);
            };
            SyntaxNodeOrToken.prototype.GetNextSiblingFromStart = function (siblings) {
                var returnNext = false;
                var siblingEnumerator = siblings.GetEnumerator();
                try {
                    while (siblingEnumerator.MoveNext()) {
                        var sibling = siblingEnumerator.Current;
                        if (returnNext) {
                            return sibling;
                        }
                        if (sibling.op_Equality(this)) {
                            returnNext = true;
                        }
                    }
                }
                finally {
                    if (siblingEnumerator !== null)
                        siblingEnumerator.Dispose();
                }
                return structDefault(SyntaxNodeOrToken);
            };
            SyntaxNodeOrToken.prototype.GetNextSiblingWithSearch = function (siblings) {
                var firstIndex = SyntaxNodeOrToken.GetFirstChildIndexSpanningPosition_2019(siblings, this.position);
                var count = siblings.Count;
                var returnNext = false;
                for (var i = firstIndex; i < count; i++) {
                    if (returnNext) {
                        return siblings.$get$(i);
                    }
                    if (siblings.$get$(i).op_Equality(this)) {
                        returnNext = true;
                    }
                }
                return structDefault(SyntaxNodeOrToken);
            };
            return SyntaxNodeOrToken;
        })();
        CodeAnalysis.SyntaxNodeOrToken = SyntaxNodeOrToken;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var SyntaxNodeOrTokenList = (function () {
            function SyntaxNodeOrTokenList() {
                this.index = 0;
            }
            SyntaxNodeOrTokenList.prototype.ctor_1240 = function (node, index) {
                System.Diagnostics.Debug.Assert(node != null || index == 0);
                if (node != null) {
                    this.node = node;
                    this.index = index;
                }
                return this;
            };
            Object.defineProperty(SyntaxNodeOrTokenList.prototype, "Node", {
                get: function () {
                    return this.node;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNodeOrTokenList.prototype, "Position", {
                get: function () {
                    return this.node == null ? 0 : this.node.Position;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNodeOrTokenList.prototype, "Parent", {
                get: function () {
                    return this.node == null ? null : this.node.Parent;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNodeOrTokenList.prototype, "Count", {
                get: function () {
                    return this.node == null ? 0 : this.node.Green.IsList ? this.node.SlotCount : 1;
                },
                enumerable: true,
                configurable: true
            });
            SyntaxNodeOrTokenList.prototype.$get$ = function (index) {
                if (this.node != null) {
                    if (!this.node.IsList) {
                        if (index == 0) {
                            return CodeAnalysis.SyntaxNodeOrToken.op_Implicit_1792(this.node);
                        }
                    }
                    else {
                        if (((index >>> 0) < this.node.SlotCount)) {
                            var green = this.node.Green.GetSlot(index);
                            if (green.IsToken) {
                                return CodeAnalysis.SyntaxNodeOrToken.op_Implicit_7398(new CodeAnalysis.SyntaxToken().ctor_1108(this.Parent, green, this.node.GetChildPosition(index), this.index + index));
                            }
                            else {
                                return CodeAnalysis.SyntaxNodeOrToken.op_Implicit_1792(this.node.GetNodeSlot(index));
                            }
                        }
                    }
                }
                throw new System.ArgumentOutOfRangeException("index");
            };
            Object.defineProperty(SyntaxNodeOrTokenList.prototype, "FullSpan", {
                get: function () {
                    if (this.node == null) {
                        return structDefault(CodeAnalysis.Text.TextSpan);
                    }
                    else {
                        return this.node.FullSpan;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxNodeOrTokenList.prototype, "Span", {
                get: function () {
                    if (this.node == null) {
                        return structDefault(CodeAnalysis.Text.TextSpan);
                    }
                    else {
                        return this.node.Span;
                    }
                },
                enumerable: true,
                configurable: true
            });
            SyntaxNodeOrTokenList.prototype.ToString = function () {
                return this.node != null ? this.node.ToString() : System.String.Empty;
            };
            SyntaxNodeOrTokenList.prototype.ToFullString = function () {
                return this.node != null ? this.node.ToFullString() : System.String.Empty;
            };
            SyntaxNodeOrTokenList.prototype.First = function () {
                return this.$get$(0);
            };
            SyntaxNodeOrTokenList.prototype.FirstOrDefault = function () {
                if (this.Any()) {
                    return this.$get$(0);
                }
                else {
                    return structDefault(CodeAnalysis.SyntaxNodeOrToken);
                }
            };
            SyntaxNodeOrTokenList.prototype.Last = function () {
                return this.$get$(this.Count - 1);
            };
            SyntaxNodeOrTokenList.prototype.LastOrDefault = function () {
                if (this.Any()) {
                    return this.$get$(this.Count - 1);
                }
                else {
                    return structDefault(CodeAnalysis.SyntaxNodeOrToken);
                }
            };
            SyntaxNodeOrTokenList.prototype.IndexOf = function (nodeOrToken) {
                var i = 0;
                var childEnumerator = this.GetEnumerator();
                try {
                    while (childEnumerator.MoveNext()) {
                        var child = childEnumerator.Current;
                        if (child.op_Equality(nodeOrToken)) {
                            return i;
                        }
                        i++;
                    }
                }
                finally {
                    if (childEnumerator !== null)
                        childEnumerator.Dispose();
                }
                return -1;
            };
            SyntaxNodeOrTokenList.prototype.Any = function () {
                return this.node != null;
            };
            SyntaxNodeOrTokenList.prototype.CopyTo = function (offset, array, arrayOffset, count) {
                for (var i = 0; i < count; i++) {
                    array[arrayOffset + i] = this.$get$(i + offset).UnderlyingNode;
                }
            };
            SyntaxNodeOrTokenList.prototype.Add = function (nodeOrToken) {
                return this.Insert(this.Count, nodeOrToken);
            };
            SyntaxNodeOrTokenList.prototype.AddRange = function (nodesOrTokens) {
                return this.InsertRange(this.Count, nodesOrTokens);
            };
            SyntaxNodeOrTokenList.prototype.Insert = function (index, nodeOrToken) {
                if (nodeOrToken.op_Equality(structDefault(CodeAnalysis.SyntaxNodeOrToken))) {
                    throw new System.ArgumentException("nodeOrToken");
                }
                return this.InsertRange(index, Roslyn.Utilities.SpecializedCollections.SingletonEnumerable(nodeOrToken));
            };
            SyntaxNodeOrTokenList.prototype.InsertRange = function (index, nodesAndTokens) {
                if (index < 0 || index > this.Count) {
                    throw new System.ArgumentOutOfRangeException("index");
                }
                if (nodesAndTokens == null) {
                    throw new System.ArgumentNullException("nodesAndTokens");
                }
                if (Roslyn.Utilities.EnumerableExtensions.IsEmpty_9700(nodesAndTokens)) {
                    return this;
                }
                var nodes = System.Linq.Enumerable.ToList(this);
                nodes.InsertRange(index, nodesAndTokens);
                return SyntaxNodeOrTokenList.CreateList(nodes.$get$(0).UnderlyingNode, nodes);
            };
            SyntaxNodeOrTokenList.CreateList = function (creator, items) {
                if (items.Count == 0) {
                    return structDefault(SyntaxNodeOrTokenList);
                }
                var newGreen = creator.CreateList(System.Linq.Enumerable.Select(items, function (n) { return n.UnderlyingNode; }));
                if (newGreen.IsToken) {
                    newGreen = creator.CreateList(new Array(newGreen), true);
                }
                return new SyntaxNodeOrTokenList().ctor_1240(newGreen.CreateRed_5702(), 0);
            };
            SyntaxNodeOrTokenList.prototype.RemoveAt = function (index) {
                if (index < 0 || index >= this.Count) {
                    throw new System.ArgumentOutOfRangeException("index");
                }
                var node = this.$get$(index);
                var nodes = System.Linq.Enumerable.ToList(this);
                nodes.RemoveAt(index);
                return SyntaxNodeOrTokenList.CreateList(node.UnderlyingNode, nodes);
            };
            SyntaxNodeOrTokenList.prototype.Remove = function (nodeOrTokenInList) {
                var index = this.IndexOf(nodeOrTokenInList);
                if (index >= 0 && index < this.Count) {
                    return this.RemoveAt(index);
                }
                else {
                    return this;
                }
            };
            SyntaxNodeOrTokenList.prototype.Replace = function (nodeOrTokenInList, newNodeOrToken) {
                if (newNodeOrToken.op_Equality(structDefault(CodeAnalysis.SyntaxNodeOrToken))) {
                    throw new System.ArgumentException("newNodeOrToken");
                }
                return this.ReplaceRange(nodeOrTokenInList, new Array(newNodeOrToken));
            };
            SyntaxNodeOrTokenList.prototype.ReplaceRange = function (nodeOrTokenInList, newNodesAndTokens) {
                var index = this.IndexOf(nodeOrTokenInList);
                if (index >= 0 && index < this.Count) {
                    var nodes = System.Linq.Enumerable.ToList(this);
                    nodes.RemoveAt(index);
                    nodes.InsertRange(index, newNodesAndTokens);
                    return SyntaxNodeOrTokenList.CreateList(nodeOrTokenInList.UnderlyingNode, nodes);
                }
                else {
                    throw new System.ArgumentException("nodeOrTokenInList");
                }
            };
            Object.defineProperty(SyntaxNodeOrTokenList.prototype, "Nodes", {
                get: function () {
                    return System.Linq.Enumerable.ToArray(this);
                },
                enumerable: true,
                configurable: true
            });
            SyntaxNodeOrTokenList.prototype.GetEnumerator = function () {
                return this.node == null ? Roslyn.Utilities.SpecializedCollections.EmptyEnumerator() : new SyntaxNodeOrTokenList.Enumerator().ctor_2058(this);
            };
            SyntaxNodeOrTokenList.prototype.op_Equality = function (right) {
                var left = this;
                return left.Equals_1312(right);
            };
            SyntaxNodeOrTokenList.prototype.op_Inequality = function (right) {
                var left = this;
                return !left.Equals_1312(right);
            };
            SyntaxNodeOrTokenList.prototype.Equals_1312 = function (other) {
                return this.node == other.node;
            };
            SyntaxNodeOrTokenList.prototype.Equals = function (obj) {
                return (obj instanceof SyntaxNodeOrTokenList) && this.Equals_1312(obj);
            };
            SyntaxNodeOrTokenList.prototype.GetHashCode = function () {
                return this.node != null ? this.node.GetHashCode() : 0;
            };
            return SyntaxNodeOrTokenList;
        })();
        CodeAnalysis.SyntaxNodeOrTokenList = SyntaxNodeOrTokenList;
        var SyntaxNodeOrTokenList;
        (function (SyntaxNodeOrTokenList) {
            var Enumerator = (function () {
                function Enumerator() {
                    this.list = structDefault(SyntaxNodeOrTokenList);
                    this.index = 0;
                }
                Enumerator.prototype.ctor_2058 = function (list) {
                    this.list = list;
                    this.index = -1;
                    return this;
                };
                Enumerator.prototype.MoveNext = function () {
                    if (this.index < this.list.Count) {
                        this.index++;
                    }
                    return this.index < this.list.Count;
                };
                Object.defineProperty(Enumerator.prototype, "Current", {
                    get: function () {
                        return this.list.$get$(this.index);
                    },
                    enumerable: true,
                    configurable: true
                });
                Enumerator.prototype.Reset = function () {
                };
                Enumerator.prototype.Dispose = function () {
                };
                Enumerator.prototype.Equals = function (obj) {
                    throw new System.NotSupportedException();
                };
                Enumerator.prototype.GetHashCode = function () {
                    throw new System.NotSupportedException();
                };
                return Enumerator;
            })();
            SyntaxNodeOrTokenList.Enumerator = Enumerator;
        })(SyntaxNodeOrTokenList = CodeAnalysis.SyntaxNodeOrTokenList || (CodeAnalysis.SyntaxNodeOrTokenList = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var SyntaxReference = (function () {
            function SyntaxReference() {
            }
            SyntaxReference.prototype.GetSyntax = function (cancellationToken) {
                if (cancellationToken === void 0) { cancellationToken = structDefault(System.Threading.CancellationToken); }
                throw new Error('not implemented');
            };
            SyntaxReference.prototype.GetLocation = function () {
                return this.SyntaxTree.GetLocation(this.Span);
            };
            return SyntaxReference;
        })();
        CodeAnalysis.SyntaxReference = SyntaxReference;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        (function (SyntaxRemoveOptions) {
            SyntaxRemoveOptions[SyntaxRemoveOptions["KeepNoTrivia"] = 0x0] = "KeepNoTrivia";
            SyntaxRemoveOptions[SyntaxRemoveOptions["KeepLeadingTrivia"] = 0x1] = "KeepLeadingTrivia";
            SyntaxRemoveOptions[SyntaxRemoveOptions["KeepTrailingTrivia"] = 0x2] = "KeepTrailingTrivia";
            SyntaxRemoveOptions[SyntaxRemoveOptions["KeepExteriorTrivia"] = SyntaxRemoveOptions.KeepLeadingTrivia | SyntaxRemoveOptions.KeepTrailingTrivia] = "KeepExteriorTrivia";
            SyntaxRemoveOptions[SyntaxRemoveOptions["KeepUnbalancedDirectives"] = 0x4] = "KeepUnbalancedDirectives";
            SyntaxRemoveOptions[SyntaxRemoveOptions["KeepDirectives"] = 0x8] = "KeepDirectives";
            SyntaxRemoveOptions[SyntaxRemoveOptions["KeepEndOfLine"] = 0x10] = "KeepEndOfLine";
            SyntaxRemoveOptions[SyntaxRemoveOptions["AddElasticMarker"] = 0x20] = "AddElasticMarker";
        })(CodeAnalysis.SyntaxRemoveOptions || (CodeAnalysis.SyntaxRemoveOptions = {}));
        var SyntaxRemoveOptions = CodeAnalysis.SyntaxRemoveOptions;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var SyntaxToken = (function () {
            function SyntaxToken() {
                this.position = 0;
                this.index = 0;
            }
            SyntaxToken.prototype.ctor_1108 = function (parent, token, position, index) {
                System.Diagnostics.Debug.Assert(parent == null || !parent.Green.IsList, "list cannot be a parent");
                System.Diagnostics.Debug.Assert(token == null || token.IsToken, "token must be a token");
                this.parent = parent;
                this.token = token;
                this.position = position;
                this.index = index;
                return this;
            };
            SyntaxToken.prototype.ctor_1607 = function (token) {
                System.Diagnostics.Debug.Assert(token == null || token.IsToken, "token must be a token");
                this.token = token;
                return this;
            };
            Object.defineProperty(SyntaxToken.prototype, "RawKind", {
                get: function () {
                    return this.token != null ? this.token.RawKind : 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxToken.prototype, "Language", {
                get: function () {
                    return this.token != null ? this.token.Language : System.String.Empty;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxToken.prototype, "RawContextualKind", {
                get: function () {
                    return this.token != null ? this.token.RawContextualKind : 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxToken.prototype, "Parent", {
                get: function () {
                    return this.parent;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxToken.prototype, "Node", {
                get: function () {
                    return this.token;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxToken.prototype, "Index", {
                get: function () {
                    return this.index;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxToken.prototype, "Position", {
                get: function () {
                    return this.position;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxToken.prototype, "Width", {
                get: function () {
                    return this.token != null ? this.token.Width : 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxToken.prototype, "FullWidth", {
                get: function () {
                    return this.token != null ? this.token.FullWidth : 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxToken.prototype, "Span", {
                get: function () {
                    return this.token != null ? new CodeAnalysis.Text.TextSpan().ctor_1506(this.position + this.token.GetLeadingTriviaWidth(), this.token.Width) : structDefault(CodeAnalysis.Text.TextSpan);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxToken.prototype, "EndPosition", {
                get: function () {
                    return this.token != null ? this.position + this.token.FullWidth : 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxToken.prototype, "SpanStart", {
                get: function () {
                    return this.token != null ? this.position + this.token.GetLeadingTriviaWidth() : 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxToken.prototype, "FullSpan", {
                get: function () {
                    return new CodeAnalysis.Text.TextSpan().ctor_1506(this.position, this.FullWidth);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxToken.prototype, "IsMissing", {
                get: function () {
                    return this.token != null && this.token.IsMissing;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxToken.prototype, "Value", {
                get: function () {
                    return this.token != null ? this.token.GetValue() : null;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxToken.prototype, "ValueText", {
                get: function () {
                    return this.token != null ? this.token.GetValueText() : null;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxToken.prototype, "Text", {
                get: function () {
                    return this.token != null ? this.token.ToString() : System.String.Empty;
                },
                enumerable: true,
                configurable: true
            });
            SyntaxToken.prototype.ToString = function () {
                return this.token != null ? this.token.ToString() : System.String.Empty;
            };
            SyntaxToken.prototype.ToFullString = function () {
                return this.token != null ? this.token.ToFullString() : System.String.Empty;
            };
            SyntaxToken.prototype.WriteTo_1120 = function (writer) {
                if (this.token != null) {
                    this.token.WriteTo_1120(writer);
                }
            };
            SyntaxToken.prototype.WriteTo_1077 = function (writer, leading, trailing) {
                if (this.token != null) {
                    this.token.WriteTo_1077(writer, leading, trailing);
                }
            };
            Object.defineProperty(SyntaxToken.prototype, "HasLeadingTrivia", {
                get: function () {
                    return this.token != null && this.token.GetLeadingTriviaCore() != null;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxToken.prototype, "HasTrailingTrivia", {
                get: function () {
                    return this.token != null && this.token.GetTrailingTriviaCore() != null;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxToken.prototype, "LeadingWidth", {
                get: function () {
                    return this.token != null ? this.token.GetLeadingTriviaWidth() : 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxToken.prototype, "TrailingWidth", {
                get: function () {
                    return this.token != null ? this.token.GetTrailingTriviaWidth() : 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxToken.prototype, "ContainsDiagnostics", {
                get: function () {
                    return this.token != null && this.token.ContainsDiagnostics;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxToken.prototype, "ContainsDirectives", {
                get: function () {
                    return this.token != null && this.token.ContainsDirectives;
                },
                enumerable: true,
                configurable: true
            });
            SyntaxToken.prototype.IsPartOfStructuredTrivia = function () {
                return this.parent != null && this.parent.IsPartOfStructuredTrivia();
            };
            Object.defineProperty(SyntaxToken.prototype, "HasStructuredTrivia", {
                get: function () {
                    return this.token != null && this.token.ContainsStructuredTrivia;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxToken.prototype, "ContainsAnnotations", {
                get: function () {
                    return this.token != null && this.token.ContainsAnnotations;
                },
                enumerable: true,
                configurable: true
            });
            SyntaxToken.prototype.HasAnnotations_4203 = function (annotationKind) {
                return this.token != null && this.token.HasAnnotations_4203(annotationKind);
            };
            SyntaxToken.prototype.HasAnnotations_1739 = function () {
                var annotationKinds = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    annotationKinds[_i - 0] = arguments[_i];
                }
                return this.token != null && this.token.HasAnnotations_9693(annotationKinds);
            };
            SyntaxToken.prototype.HasAnnotation = function (annotation) {
                return this.token != null && this.token.HasAnnotation(annotation);
            };
            SyntaxToken.prototype.GetAnnotations_1417 = function (annotationKind) {
                return this.token != null ? this.token.GetAnnotations_1417(annotationKind) : Roslyn.Utilities.SpecializedCollections.EmptyEnumerable();
            };
            SyntaxToken.prototype.GetAnnotations_6794 = function () {
                var annotationKinds = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    annotationKinds[_i - 0] = arguments[_i];
                }
                return this.GetAnnotations_2034(annotationKinds);
            };
            SyntaxToken.prototype.GetAnnotations_2034 = function (annotationKinds) {
                return this.token != null ? this.token.GetAnnotations_2034(annotationKinds) : Roslyn.Utilities.SpecializedCollections.EmptyEnumerable();
            };
            SyntaxToken.prototype.WithAdditionalAnnotations_8112 = function () {
                var annotations = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    annotations[_i - 0] = arguments[_i];
                }
                return this.WithAdditionalAnnotations_1605(annotations);
            };
            SyntaxToken.prototype.WithAdditionalAnnotations_1605 = function (annotations) {
                if (annotations == null) {
                    throw new System.ArgumentNullException("annotations");
                }
                if (this.Node != null) {
                    return new SyntaxToken().ctor_1108(null, CodeAnalysis.GreenNodeExtensions.WithAdditionalAnnotationsGreen(this.token, annotations), 0, 0);
                }
                return structDefault(SyntaxToken);
            };
            SyntaxToken.prototype.WithoutAnnotations_1344 = function () {
                var annotations = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    annotations[_i - 0] = arguments[_i];
                }
                return this.WithoutAnnotations_1841(annotations);
            };
            SyntaxToken.prototype.WithoutAnnotations_1841 = function (annotations) {
                if (annotations == null) {
                    throw new System.ArgumentNullException("annotations");
                }
                if (this.Node != null) {
                    return new SyntaxToken().ctor_1108(null, CodeAnalysis.GreenNodeExtensions.WithoutAnnotationsGreen(this.token, annotations), 0, 0);
                }
                return structDefault(SyntaxToken);
            };
            SyntaxToken.prototype.WithoutAnnotations_1141 = function (annotationKind) {
                if (annotationKind == null) {
                    throw new System.ArgumentNullException("annotationKind");
                }
                if (this.HasAnnotations_4203(annotationKind)) {
                    return this.WithoutAnnotations_1841(this.GetAnnotations_1417(annotationKind));
                }
                else {
                    return this;
                }
            };
            SyntaxToken.prototype.CopyAnnotationsTo = function (token) {
                if (token.Node == null) {
                    return structDefault(SyntaxToken);
                }
                if (this.token == null) {
                    return token;
                }
                var annotations = this.Node.GetAnnotations_1741();
                if (annotations == null || annotations.length == 0) {
                    return token;
                }
                return new SyntaxToken().ctor_1108(null, CodeAnalysis.GreenNodeExtensions.WithAdditionalAnnotationsGreen(token.Node, annotations), 0, 0);
            };
            Object.defineProperty(SyntaxToken.prototype, "LeadingTrivia", {
                get: function () {
                    return this.token != null ? new CodeAnalysis.SyntaxTriviaList().ctor_5254(this, this.token.GetLeadingTriviaCore(), this.Position) : structDefault(CodeAnalysis.SyntaxTriviaList);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxToken.prototype, "TrailingTrivia", {
                get: function () {
                    if (this.token != null) {
                        var leading = this.token.GetLeadingTriviaCore();
                        var index = 0;
                        if (leading != null) {
                            index = leading.IsList ? leading.SlotCount : 1;
                        }
                        var trailingGreen = this.token.GetTrailingTriviaCore();
                        var trailingPosition = this.position + this.FullWidth;
                        if (trailingGreen != null) {
                            trailingPosition -= trailingGreen.FullWidth;
                        }
                        return new CodeAnalysis.SyntaxTriviaList().ctor_5254(this, trailingGreen, trailingPosition, index);
                    }
                    return structDefault(CodeAnalysis.SyntaxTriviaList);
                },
                enumerable: true,
                configurable: true
            });
            SyntaxToken.prototype.WithLeadingTrivia_1905 = function (trivia) {
                return this.WithLeadingTrivia_1496(trivia);
            };
            SyntaxToken.prototype.WithTrailingTrivia_6264 = function (trivia) {
                return this.WithTrailingTrivia_1187(trivia);
            };
            SyntaxToken.prototype.WithLeadingTrivia_1185 = function () {
                var trivia = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    trivia[_i - 0] = arguments[_i];
                }
                return this.WithLeadingTrivia_1496(trivia);
            };
            SyntaxToken.prototype.WithLeadingTrivia_1496 = function (trivia) {
                var greenList = trivia == null ? null : System.Linq.Enumerable.Select(trivia, function (t) { return t.UnderlyingNode; });
                return this.token != null ? new SyntaxToken().ctor_1108(null, this.token.WithLeadingTrivia(this.token.CreateList(greenList)), 0, 0) : structDefault(SyntaxToken);
            };
            SyntaxToken.prototype.WithTrailingTrivia_8808 = function () {
                var trivia = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    trivia[_i - 0] = arguments[_i];
                }
                return this.WithTrailingTrivia_1187(trivia);
            };
            SyntaxToken.prototype.WithTrailingTrivia_1187 = function (trivia) {
                var greenList = trivia == null ? null : System.Linq.Enumerable.Select(trivia, function (t) { return t.UnderlyingNode; });
                return this.token != null ? new SyntaxToken().ctor_1108(null, this.token.WithTrailingTrivia(this.token.CreateList(greenList)), 0, 0) : structDefault(SyntaxToken);
            };
            SyntaxToken.prototype.GetAllTrivia = function () {
                if (this.HasLeadingTrivia) {
                    if (this.HasTrailingTrivia) {
                        return System.Linq.Enumerable.Concat(this.LeadingTrivia, this.TrailingTrivia);
                    }
                    return this.LeadingTrivia;
                }
                else if (this.HasTrailingTrivia) {
                    return this.TrailingTrivia;
                }
                else {
                    return Roslyn.Utilities.SpecializedCollections.EmptyEnumerable();
                }
            };
            SyntaxToken.prototype.op_Equality = function (right) {
                var left = this;
                return left.Equals_1664(right);
            };
            SyntaxToken.prototype.op_Inequality = function (right) {
                var left = this;
                return !left.Equals_1664(right);
            };
            SyntaxToken.prototype.Equals_1664 = function (other) {
                return this.parent == other.parent && this.token == other.token && this.position == other.position && this.index == other.index;
            };
            SyntaxToken.prototype.Equals = function (obj) {
                return obj instanceof SyntaxToken && this.Equals_1664(obj);
            };
            SyntaxToken.prototype.GetHashCode = function () {
                return Roslyn.Utilities.Hash.Combine_7656(this.parent, Roslyn.Utilities.Hash.Combine_7656(this.token, Roslyn.Utilities.Hash.Combine_1641(this.position, this.index)));
            };
            SyntaxToken.prototype.GetNextToken_1522 = function (includeZeroWidth, includeSkipped, includeDirectives, includeDocumentationComments) {
                if (includeZeroWidth === void 0) { includeZeroWidth = false; }
                if (includeSkipped === void 0) { includeSkipped = false; }
                if (includeDirectives === void 0) { includeDirectives = false; }
                if (includeDocumentationComments === void 0) { includeDocumentationComments = false; }
                if (this.token == null) {
                    return structDefault(SyntaxToken);
                }
                return this.token.Navigator.GetNextToken_1578(this, includeZeroWidth, includeSkipped, includeDirectives, includeDocumentationComments);
            };
            SyntaxToken.prototype.GetNextToken_2254 = function (predicate, stepInto) {
                if (stepInto === void 0) { stepInto = null; }
                if (this.token == null) {
                    return structDefault(SyntaxToken);
                }
                return this.token.Navigator.GetNextToken_1071(this, predicate, stepInto);
            };
            SyntaxToken.prototype.GetPreviousToken_2067 = function (includeZeroWidth, includeSkipped, includeDirectives, includeDocumentationComments) {
                if (includeZeroWidth === void 0) { includeZeroWidth = false; }
                if (includeSkipped === void 0) { includeSkipped = false; }
                if (includeDirectives === void 0) { includeDirectives = false; }
                if (includeDocumentationComments === void 0) { includeDocumentationComments = false; }
                if (this.token == null) {
                    return structDefault(SyntaxToken);
                }
                return this.token.Navigator.GetPreviousToken_1070(this, includeZeroWidth, includeSkipped, includeDirectives, includeDocumentationComments);
            };
            SyntaxToken.prototype.GetPreviousToken_8036 = function (predicate, stepInto) {
                if (stepInto === void 0) { stepInto = null; }
                return this.token.Navigator.GetPreviousToken_1392(this, predicate, stepInto);
            };
            Object.defineProperty(SyntaxToken.prototype, "SyntaxTree", {
                get: function () {
                    var parent = this.parent;
                    return parent == null ? null : parent.SyntaxTree;
                },
                enumerable: true,
                configurable: true
            });
            SyntaxToken.prototype.GetLocation = function () {
                return this.token != null ? this.SyntaxTree.GetLocation(this.Span) : CodeAnalysis.Location.None;
            };
            SyntaxToken.prototype.GetDiagnostics = function () {
                return this.token != null ? this.SyntaxTree.GetDiagnostics_9583(this) : Roslyn.Utilities.SpecializedCollections.EmptyEnumerable();
            };
            SyntaxToken.prototype.IsEquivalentTo = function (token) {
                return (this.token == null && token.Node == null) || (this.token != null && token.Node != null && this.token.IsEquivalentTo(token.Node));
            };
            SyntaxToken.NonZeroWidth = function (t) { return t.Width > 0; };
            SyntaxToken.Any = function (t) { return true; };
            return SyntaxToken;
        })();
        CodeAnalysis.SyntaxToken = SyntaxToken;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var SyntaxTokenList = (function () {
            function SyntaxTokenList() {
                this.position = 0;
                this.index = 0;
            }
            SyntaxTokenList.prototype.ctor_9846 = function (parent, tokenOrList, position, index) {
                System.Diagnostics.Debug.Assert(tokenOrList != null || (position == 0 && index == 0 && parent == null));
                System.Diagnostics.Debug.Assert(position >= 0);
                System.Diagnostics.Debug.Assert(tokenOrList == null || (tokenOrList.IsToken) || (tokenOrList.IsList));
                this.parent = parent;
                this.node = tokenOrList;
                this.position = position;
                this.index = index;
                return this;
            };
            SyntaxTokenList.prototype.ctor_9126 = function (token) {
                this.parent = token.Parent;
                this.node = token.Node;
                this.position = token.Position;
                this.index = 0;
                return this;
            };
            Object.defineProperty(SyntaxTokenList.prototype, "Node", {
                get: function () {
                    return this.node;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxTokenList.prototype, "Position", {
                get: function () {
                    return this.position;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxTokenList.prototype, "Count", {
                get: function () {
                    return this.node == null ? 0 : (this.node.IsList ? this.node.SlotCount : 1);
                },
                enumerable: true,
                configurable: true
            });
            SyntaxTokenList.prototype.$get$ = function (index) {
                if (this.node != null) {
                    if (this.node.IsList) {
                        if (((index >>> 0) < this.node.SlotCount)) {
                            return new CodeAnalysis.SyntaxToken().ctor_1108(this.parent, this.node.GetSlot(index), this.position + this.node.GetSlotOffset(index), this.index + index);
                        }
                    }
                    else if (index == 0) {
                        return new CodeAnalysis.SyntaxToken().ctor_1108(this.parent, this.node, this.position, this.index);
                    }
                }
                throw new System.ArgumentOutOfRangeException("index");
            };
            Object.defineProperty(SyntaxTokenList.prototype, "FullSpan", {
                get: function () {
                    if (this.node == null) {
                        return structDefault(CodeAnalysis.Text.TextSpan);
                    }
                    else {
                        return new CodeAnalysis.Text.TextSpan().ctor_1506(this.Position, this.node.FullWidth);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxTokenList.prototype, "Span", {
                get: function () {
                    if (this.node == null) {
                        return structDefault(CodeAnalysis.Text.TextSpan);
                    }
                    else {
                        return CodeAnalysis.Text.TextSpan.FromBounds(this.position + this.node.GetLeadingTriviaWidth(), this.position + this.node.FullWidth - this.node.GetTrailingTriviaWidth());
                    }
                },
                enumerable: true,
                configurable: true
            });
            SyntaxTokenList.prototype.ToString = function () {
                return this.node != null ? this.node.ToString() : System.String.Empty;
            };
            SyntaxTokenList.prototype.ToFullString = function () {
                return this.node != null ? this.node.ToFullString() : System.String.Empty;
            };
            SyntaxTokenList.prototype.First = function () {
                if (this.Any()) {
                    return this.$get$(0);
                }
                throw new System.InvalidOperationException();
            };
            SyntaxTokenList.prototype.Last = function () {
                if (this.Any()) {
                    return this.$get$(this.Count - 1);
                }
                throw new System.InvalidOperationException();
            };
            SyntaxTokenList.prototype.Any = function () {
                return this.node != null;
            };
            SyntaxTokenList.prototype.Reverse = function () {
                return new SyntaxTokenList.Reversed().ctor_1073(this);
            };
            SyntaxTokenList.prototype.CopyTo = function (offset, array, arrayOffset, count) {
                System.Diagnostics.Debug.Assert(this.Count >= offset + count);
                for (var i = 0; i < count; i++) {
                    array[arrayOffset + i] = this.GetGreenNodeAt_3176(offset + i);
                }
            };
            SyntaxTokenList.prototype.GetGreenNodeAt_3176 = function (i) {
                return SyntaxTokenList.GetGreenNodeAt_1419(this.node, i);
            };
            SyntaxTokenList.GetGreenNodeAt_1419 = function (node, i) {
                System.Diagnostics.Debug.Assert(node.IsList || (i == 0 && !node.IsList));
                return node.IsList ? node.GetSlot(i) : node;
            };
            SyntaxTokenList.prototype.IndexOf_1948 = function (tokenInList) {
                for (var i = 0, n = this.Count; i < n; i++) {
                    var token = this.$get$(i);
                    if (token.op_Equality(tokenInList)) {
                        return i;
                    }
                }
                return -1;
            };
            SyntaxTokenList.prototype.IndexOf_9119 = function (rawKind) {
                for (var i = 0, n = this.Count; i < n; i++) {
                    if (this.$get$(i).RawKind == rawKind) {
                        return i;
                    }
                }
                return -1;
            };
            SyntaxTokenList.prototype.Add = function (token) {
                return this.Insert(this.Count, token);
            };
            SyntaxTokenList.prototype.AddRange = function (tokens) {
                return this.InsertRange(this.Count, tokens);
            };
            SyntaxTokenList.prototype.Insert = function (index, token) {
                if (token.op_Equality(structDefault(CodeAnalysis.SyntaxToken))) {
                    throw new System.ArgumentException("token");
                }
                return this.InsertRange(index, new Array(token));
            };
            SyntaxTokenList.prototype.InsertRange = function (index, tokens) {
                if (index < 0 || index > this.Count) {
                    throw new System.ArgumentOutOfRangeException("index");
                }
                if (tokens == null) {
                    throw new System.ArgumentNullException("tokens");
                }
                var items = System.Linq.Enumerable.ToList(tokens);
                if (items.Count == 0) {
                    return this;
                }
                var list = System.Linq.Enumerable.ToList(this);
                list.InsertRange(index, tokens);
                if (list.Count == 0) {
                    return this;
                }
                else {
                    return new SyntaxTokenList().ctor_9846(null, list.$get$(0).Node.CreateList(System.Linq.Enumerable.Select(list, function (n) { return n.Node; })), 0, 0);
                }
            };
            SyntaxTokenList.prototype.RemoveAt = function (index) {
                if (index < 0 || index >= this.Count) {
                    throw new System.ArgumentOutOfRangeException("index");
                }
                var list = System.Linq.Enumerable.ToList(this);
                list.RemoveAt(index);
                return new SyntaxTokenList().ctor_9846(null, this.node.CreateList(System.Linq.Enumerable.Select(list, function (n) { return n.Node; })), 0, 0);
            };
            SyntaxTokenList.prototype.Remove = function (tokenInList) {
                var index = this.IndexOf_1948(tokenInList);
                if (index >= 0 && index <= this.Count) {
                    return this.RemoveAt(index);
                }
                else {
                    return this;
                }
            };
            SyntaxTokenList.prototype.Replace = function (tokenInList, newToken) {
                if (newToken.op_Equality(structDefault(CodeAnalysis.SyntaxToken))) {
                    throw new System.ArgumentException("newToken");
                }
                return this.ReplaceRange(tokenInList, new Array(newToken));
            };
            SyntaxTokenList.prototype.ReplaceRange = function (tokenInList, newTokens) {
                var index = this.IndexOf_1948(tokenInList);
                if (index >= 0 && index <= this.Count) {
                    var list = System.Linq.Enumerable.ToList(this);
                    list.RemoveAt(index);
                    list.InsertRange(index, newTokens);
                    return new SyntaxTokenList().ctor_9846(null, this.node.CreateList(System.Linq.Enumerable.Select(list, function (n) { return n.Node; })), 0, 0);
                }
                else {
                    throw new System.ArgumentException("tokenInList");
                }
            };
            Object.defineProperty(SyntaxTokenList.prototype, "Nodes", {
                get: function () {
                    return System.Linq.Enumerable.ToArray(this);
                },
                enumerable: true,
                configurable: true
            });
            SyntaxTokenList.prototype.GetEnumerator = function () {
                if (this.node == null) {
                    return Roslyn.Utilities.SpecializedCollections.EmptyEnumerator();
                }
                return new SyntaxTokenList.EnumeratorImpl().ctor_1809(this);
            };
            SyntaxTokenList.prototype.op_Equality = function (right) {
                var left = this;
                return left.Equals_9666(right);
            };
            SyntaxTokenList.prototype.op_Inequality = function (right) {
                var left = this;
                return !left.Equals_9666(right);
            };
            SyntaxTokenList.prototype.Equals_9666 = function (other) {
                return this.node == other.node && this.parent == other.parent && this.index == other.index;
            };
            SyntaxTokenList.prototype.Equals = function (obj) {
                return (obj instanceof SyntaxTokenList) && this.Equals_9666(obj);
            };
            SyntaxTokenList.prototype.GetHashCode = function () {
                return Roslyn.Utilities.Hash.Combine_7656(this.node, this.index);
            };
            SyntaxTokenList.Create = function (token) {
                return new SyntaxTokenList().ctor_9126(token);
            };
            return SyntaxTokenList;
        })();
        CodeAnalysis.SyntaxTokenList = SyntaxTokenList;
        var SyntaxTokenList;
        (function (SyntaxTokenList) {
            var Enumerator = (function () {
                function Enumerator() {
                    this.baseIndex = 0;
                    this.count = 0;
                    this.index = 0;
                    this.position = 0;
                }
                Enumerator.prototype.ctor_1786 = function (list) {
                    this.parent = list.parent;
                    this.singleNodeOrList = list.node;
                    this.baseIndex = list.index;
                    this.count = list.Count;
                    this.index = -1;
                    this.current = null;
                    this.position = list.position;
                    return this;
                };
                Enumerator.prototype.MoveNext = function () {
                    if (this.count == 0 || this.count <= this.index + 1) {
                        this.current = null;
                        return false;
                    }
                    this.index++;
                    if (this.current != null) {
                        this.position += this.current.FullWidth;
                    }
                    this.current = SyntaxTokenList.GetGreenNodeAt_1419(this.singleNodeOrList, this.index);
                    System.Diagnostics.Debug.Assert(this.current != null);
                    return true;
                };
                Object.defineProperty(Enumerator.prototype, "Current", {
                    get: function () {
                        if (this.current == null) {
                            throw new System.InvalidOperationException();
                        }
                        return new CodeAnalysis.SyntaxToken().ctor_1108(this.parent, this.current, this.position, this.baseIndex + this.index);
                    },
                    enumerable: true,
                    configurable: true
                });
                Enumerator.prototype.Equals = function (obj) {
                    throw new System.NotSupportedException();
                };
                Enumerator.prototype.GetHashCode = function () {
                    throw new System.NotSupportedException();
                };
                return Enumerator;
            })();
            SyntaxTokenList.Enumerator = Enumerator;
        })(SyntaxTokenList = CodeAnalysis.SyntaxTokenList || (CodeAnalysis.SyntaxTokenList = {}));
        var SyntaxTokenList;
        (function (SyntaxTokenList) {
            var EnumeratorImpl = (function () {
                function EnumeratorImpl() {
                    this.enumerator = structDefault(SyntaxTokenList.Enumerator);
                }
                EnumeratorImpl.prototype.ctor_1809 = function (list) {
                    this.enumerator = new SyntaxTokenList.Enumerator().ctor_1786(list);
                    return this;
                };
                Object.defineProperty(EnumeratorImpl.prototype, "Current", {
                    get: function () {
                        return this.enumerator.Current;
                    },
                    enumerable: true,
                    configurable: true
                });
                EnumeratorImpl.prototype.MoveNext = function () {
                    return this.enumerator.MoveNext();
                };
                EnumeratorImpl.prototype.Reset = function () {
                    throw new System.NotSupportedException();
                };
                EnumeratorImpl.prototype.Dispose = function () {
                };
                return EnumeratorImpl;
            })();
            SyntaxTokenList.EnumeratorImpl = EnumeratorImpl;
        })(SyntaxTokenList = CodeAnalysis.SyntaxTokenList || (CodeAnalysis.SyntaxTokenList = {}));
        var SyntaxTokenList;
        (function (SyntaxTokenList) {
            var Reversed = (function () {
                function Reversed() {
                    this.list = structDefault(SyntaxTokenList);
                }
                Reversed.prototype.ctor_1073 = function (list) {
                    this.list = list;
                    return this;
                };
                Reversed.prototype.GetEnumerator = function () {
                    if (this.list.Count == 0) {
                        return Roslyn.Utilities.SpecializedCollections.EmptyEnumerator();
                    }
                    return new Reversed.EnumeratorImpl().ctor_1809(this.list);
                };
                Reversed.prototype.Equals = function (obj) {
                    return obj instanceof Reversed && this.Equals_1958(obj);
                };
                Reversed.prototype.Equals_1958 = function (other) {
                    return this.list.Equals_9666(other.list);
                };
                Reversed.prototype.GetHashCode = function () {
                    return this.list.GetHashCode();
                };
                return Reversed;
            })();
            SyntaxTokenList.Reversed = Reversed;
            var Reversed;
            (function (Reversed) {
                var Enumerator = (function () {
                    function Enumerator() {
                        this.baseIndex = 0;
                        this.count = 0;
                        this.index = 0;
                        this.position = 0;
                    }
                    Enumerator.prototype.ctor_1786 = function (list) {
                        if (list.Any()) {
                            this.parent = list.parent;
                            this.singleNodeOrList = list.node;
                            this.baseIndex = list.index;
                            this.count = list.Count;
                            this.index = this.count;
                            this.current = null;
                            var last = list.Last();
                            this.position = last.Position + last.FullWidth;
                        }
                        return this;
                    };
                    Enumerator.prototype.MoveNext = function () {
                        if (this.count == 0 || this.index <= 0) {
                            this.current = null;
                            return false;
                        }
                        this.index--;
                        this.current = SyntaxTokenList.GetGreenNodeAt_1419(this.singleNodeOrList, this.index);
                        this.position -= this.current.FullWidth;
                        return true;
                    };
                    Object.defineProperty(Enumerator.prototype, "Current", {
                        get: function () {
                            if (this.current == null) {
                                throw new System.InvalidOperationException();
                            }
                            return new CodeAnalysis.SyntaxToken().ctor_1108(this.parent, this.current, this.position, this.baseIndex + this.index);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Enumerator.prototype.Equals = function (obj) {
                        throw new System.NotSupportedException();
                    };
                    Enumerator.prototype.GetHashCode = function () {
                        throw new System.NotSupportedException();
                    };
                    return Enumerator;
                })();
                Reversed.Enumerator = Enumerator;
            })(Reversed = SyntaxTokenList.Reversed || (SyntaxTokenList.Reversed = {}));
            var Reversed;
            (function (Reversed) {
                var EnumeratorImpl = (function () {
                    function EnumeratorImpl() {
                        this.enumerator = structDefault(Reversed.Enumerator);
                    }
                    EnumeratorImpl.prototype.ctor_1809 = function (list) {
                        this.enumerator = new Reversed.Enumerator().ctor_1786(list);
                        return this;
                    };
                    Object.defineProperty(EnumeratorImpl.prototype, "Current", {
                        get: function () {
                            return this.enumerator.Current;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    EnumeratorImpl.prototype.MoveNext = function () {
                        return this.enumerator.MoveNext();
                    };
                    EnumeratorImpl.prototype.Reset = function () {
                        throw new System.NotSupportedException();
                    };
                    EnumeratorImpl.prototype.Dispose = function () {
                    };
                    return EnumeratorImpl;
                })();
                Reversed.EnumeratorImpl = EnumeratorImpl;
            })(Reversed = SyntaxTokenList.Reversed || (SyntaxTokenList.Reversed = {}));
        })(SyntaxTokenList = CodeAnalysis.SyntaxTokenList || (CodeAnalysis.SyntaxTokenList = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var SyntaxTree = (function () {
            function SyntaxTree() {
                this.lazyChecksum = structDefault(System.Collections.Immutable.ImmutableArray);
                this.lazyHashAlgorithm = 0;
                this.HasCompilationUnitRoot = false;
                this.Length = 0;
            }
            Object.defineProperty(SyntaxTree.prototype, "Options", {
                get: function () {
                    return this.OptionsCore;
                },
                enumerable: true,
                configurable: true
            });
            SyntaxTree.prototype.TryGetText = function (text) {
                throw new Error('not implemented');
            };
            SyntaxTree.prototype.GetText = function (cancellationToken) {
                if (cancellationToken === void 0) { cancellationToken = structDefault(System.Threading.CancellationToken); }
                throw new Error('not implemented');
            };
            SyntaxTree.prototype.TryGetRoot = function (root) {
                return this.TryGetRootCore(root);
            };
            SyntaxTree.prototype.TryGetRootCore = function (root) {
                throw new Error('not implemented');
            };
            SyntaxTree.prototype.GetRoot = function (cancellationToken) {
                if (cancellationToken === void 0) { cancellationToken = structDefault(System.Threading.CancellationToken); }
                return this.GetRootCore(cancellationToken);
            };
            SyntaxTree.prototype.GetRootCore = function (cancellationToken) {
                throw new Error('not implemented');
            };
            SyntaxTree.prototype.WithChangedText = function (newText) {
                throw new Error('not implemented');
            };
            SyntaxTree.prototype.GetDiagnostics_4066 = function (cancellationToken) {
                if (cancellationToken === void 0) { cancellationToken = structDefault(System.Threading.CancellationToken); }
                throw new Error('not implemented');
            };
            SyntaxTree.prototype.GetDiagnostics_1067 = function (node) {
                throw new Error('not implemented');
            };
            SyntaxTree.prototype.GetDiagnostics_9583 = function (token) {
                throw new Error('not implemented');
            };
            SyntaxTree.prototype.GetDiagnostics_1774 = function (trivia) {
                throw new Error('not implemented');
            };
            SyntaxTree.prototype.GetDiagnostics_6963 = function (nodeOrToken) {
                throw new Error('not implemented');
            };
            SyntaxTree.prototype.GetLineSpan = function (span, cancellationToken) {
                if (cancellationToken === void 0) { cancellationToken = structDefault(System.Threading.CancellationToken); }
                throw new Error('not implemented');
            };
            SyntaxTree.prototype.GetMappedLineSpan = function (span, cancellationToken) {
                if (cancellationToken === void 0) { cancellationToken = structDefault(System.Threading.CancellationToken); }
                throw new Error('not implemented');
            };
            SyntaxTree.prototype.GetLineVisibility = function (position, cancellationToken) {
                if (cancellationToken === void 0) { cancellationToken = structDefault(System.Threading.CancellationToken); }
                return 2 /* Visible */;
            };
            SyntaxTree.prototype.GetMappedLineSpanAndVisibility = function (span, isHiddenPosition) {
                isHiddenPosition.refObj = this.GetLineVisibility(span.Start) == 1 /* Hidden */;
                return this.GetMappedLineSpan(span);
            };
            SyntaxTree.prototype.GetDisplayPath = function (span, resolver) {
                var mappedSpan = this.GetMappedLineSpan(span);
                if (resolver == null || Roslyn.Utilities.EnumerableExtensions.IsEmpty_2124(mappedSpan.Path)) {
                    return mappedSpan.Path;
                }
                return resolver.NormalizePath(mappedSpan.Path, mappedSpan.HasMappedPath ? this.FilePath : null) != null ? resolver.NormalizePath(mappedSpan.Path, mappedSpan.HasMappedPath ? this.FilePath : null) : mappedSpan.Path;
            };
            SyntaxTree.prototype.GetDisplayLineNumber = function (span) {
                return this.GetMappedLineSpan(span).StartLinePosition.Line + 1;
            };
            SyntaxTree.prototype.HasHiddenRegions = function () {
                throw new Error('not implemented');
            };
            SyntaxTree.prototype.GetChangedSpans = function (syntaxTree) {
                throw new Error('not implemented');
            };
            SyntaxTree.prototype.GetLocation = function (span) {
                throw new Error('not implemented');
            };
            SyntaxTree.prototype.IsEquivalentTo = function (tree, topLevel) {
                if (topLevel === void 0) { topLevel = false; }
                throw new Error('not implemented');
            };
            SyntaxTree.prototype.GetReference = function (node) {
                throw new Error('not implemented');
            };
            SyntaxTree.prototype.GetChanges = function (oldTree) {
                throw new Error('not implemented');
            };
            SyntaxTree.prototype.WithRootAndOptions = function (root, options) {
                throw new Error('not implemented');
            };
            SyntaxTree.prototype.WithFilePath = function (path) {
                throw new Error('not implemented');
            };
            return SyntaxTree;
        })();
        CodeAnalysis.SyntaxTree = SyntaxTree;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var SyntaxTreeExtensions = (function () {
            function SyntaxTreeExtensions() {
            }
            SyntaxTreeExtensions.VerifySource = function (tree, changes) {
                if (changes === void 0) { changes = null; }
                var root = tree.GetRoot();
                var text = tree.GetText();
                var fullSpan = new CodeAnalysis.Text.TextSpan().ctor_1506(0, text.Length);
                var node = null;
                if (changes != null) {
                    var change = CodeAnalysis.Text.TextChangeRange.Collapse(changes).Span;
                    if (change.op_Inequality(fullSpan)) {
                        node = System.Linq.Enumerable.LastOrDefault(root.DescendantNodes_1576(function (n) { return n.FullSpan.Contains_1915(change); }));
                    }
                }
                if (node == null) {
                    node = root;
                }
                var span = node.FullSpan;
                var textSpanOpt = span.Intersection(fullSpan);
                var index = 0;
                if (textSpanOpt == null) {
                    index = 0;
                }
                else {
                    var fromText = text.ToString_4959(textSpanOpt);
                    var fromNode = node.ToFullString();
                    index = SyntaxTreeExtensions.FindFirstDifference(fromText, fromNode);
                }
                if (index >= 0) {
                    index += span.Start;
                    var message;
                    if (index < text.Length) {
                        var position = text.Lines.GetLinePosition(index);
                        var line = text.Lines.$get$(position.Line);
                        var allText = text.ToString();
                        message = System.String.Format("Unexpected difference at offset {0}: Line {1}, Column {2} \"{3}\"", index, position.Line + 1, position.Character + 1, line.ToString());
                    }
                    else {
                        message = "Unexpected difference past end of the file";
                    }
                    System.Diagnostics.Debug.Assert(false, message);
                }
            };
            SyntaxTreeExtensions.FindFirstDifference = function (s1, s2) {
                var n1 = s1.length;
                var n2 = s2.length;
                var n = System.Math.Min(n1, n2);
                for (var i = 0; i < n; i++) {
                    if (s1[i] != s2[i]) {
                        return i;
                    }
                }
                return (n1 == n2) ? -1 : n + 1;
            };
            return SyntaxTreeExtensions;
        })();
        CodeAnalysis.SyntaxTreeExtensions = SyntaxTreeExtensions;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var SyntaxTrivia = (function () {
            function SyntaxTrivia() {
                this.token = structDefault(CodeAnalysis.SyntaxToken);
                this.position = 0;
                this.index = 0;
            }
            SyntaxTrivia.prototype.ctor_1046 = function (token, triviaNode, position, index) {
                this.token = token;
                this.triviaNode = triviaNode;
                this.position = position;
                this.index = index;
                System.Diagnostics.Debug.Assert(this.RawKind != 0 || this.Equals_3529(structDefault(SyntaxTrivia)));
                return this;
            };
            Object.defineProperty(SyntaxTrivia.prototype, "RawKind", {
                get: function () {
                    return this.triviaNode != null ? this.triviaNode.RawKind : 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxTrivia.prototype, "Language", {
                get: function () {
                    return this.triviaNode != null ? this.triviaNode.Language : System.String.Empty;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxTrivia.prototype, "Token", {
                get: function () {
                    return this.token;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxTrivia.prototype, "UnderlyingNode", {
                get: function () {
                    return this.triviaNode;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxTrivia.prototype, "Position", {
                get: function () {
                    return this.position;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxTrivia.prototype, "Index", {
                get: function () {
                    return this.index;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxTrivia.prototype, "Width", {
                get: function () {
                    return this.triviaNode != null ? this.triviaNode.Width : 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxTrivia.prototype, "FullWidth", {
                get: function () {
                    return this.triviaNode != null ? this.triviaNode.FullWidth : 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxTrivia.prototype, "Span", {
                get: function () {
                    return this.triviaNode != null ? new CodeAnalysis.Text.TextSpan().ctor_1506(this.position + this.triviaNode.GetLeadingTriviaWidth(), this.triviaNode.Width) : structDefault(CodeAnalysis.Text.TextSpan);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxTrivia.prototype, "SpanStart", {
                get: function () {
                    return this.triviaNode != null ? this.position + this.triviaNode.GetLeadingTriviaWidth() : 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxTrivia.prototype, "FullSpan", {
                get: function () {
                    return this.triviaNode != null ? new CodeAnalysis.Text.TextSpan().ctor_1506(this.position, this.triviaNode.FullWidth) : structDefault(CodeAnalysis.Text.TextSpan);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxTrivia.prototype, "ContainsDiagnostics", {
                get: function () {
                    return this.triviaNode != null && this.triviaNode.ContainsDiagnostics;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxTrivia.prototype, "HasStructure", {
                get: function () {
                    return this.triviaNode != null && this.triviaNode.IsStructuredTrivia;
                },
                enumerable: true,
                configurable: true
            });
            SyntaxTrivia.prototype.IsPartOfStructuredTrivia = function () {
                return this.token.Parent != null && this.token.Parent.IsPartOfStructuredTrivia();
            };
            Object.defineProperty(SyntaxTrivia.prototype, "ContainsAnnotations", {
                get: function () {
                    return this.triviaNode != null && this.triviaNode.ContainsAnnotations;
                },
                enumerable: true,
                configurable: true
            });
            SyntaxTrivia.prototype.HasAnnotations_4203 = function (annotationKind) {
                return this.triviaNode != null && this.triviaNode.HasAnnotations_4203(annotationKind);
            };
            SyntaxTrivia.prototype.HasAnnotations_1739 = function () {
                var annotationKinds = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    annotationKinds[_i - 0] = arguments[_i];
                }
                return this.triviaNode != null && this.triviaNode.HasAnnotations_9693(annotationKinds);
            };
            SyntaxTrivia.prototype.HasAnnotations_1739_Arr = function (annotationKinds) {
                return this.triviaNode != null && this.triviaNode.HasAnnotations_9693(annotationKinds);
            };
            SyntaxTrivia.prototype.HasAnnotation = function (annotation) {
                return this.triviaNode != null && this.triviaNode.HasAnnotation(annotation);
            };
            SyntaxTrivia.prototype.GetAnnotations_1417 = function (annotationKind) {
                return this.triviaNode != null ? this.triviaNode.GetAnnotations_1417(annotationKind) : Roslyn.Utilities.SpecializedCollections.EmptyEnumerable();
            };
            SyntaxTrivia.prototype.GetAnnotations_6794 = function () {
                var annotationKinds = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    annotationKinds[_i - 0] = arguments[_i];
                }
                return this.triviaNode != null ? this.triviaNode.GetAnnotations_2034(annotationKinds) : Roslyn.Utilities.SpecializedCollections.EmptyEnumerable();
            };
            Object.defineProperty(SyntaxTrivia.prototype, "IsDirective", {
                get: function () {
                    return this.triviaNode != null && this.triviaNode.IsDirective;
                },
                enumerable: true,
                configurable: true
            });
            SyntaxTrivia.prototype.GetStructure = function () {
                return this.HasStructure ? this.triviaNode.GetStructure(this) : null;
            };
            SyntaxTrivia.prototype.ToString = function () {
                return this.triviaNode != null ? this.triviaNode.ToString() : System.String.Empty;
            };
            SyntaxTrivia.prototype.ToFullString = function () {
                return this.triviaNode != null ? this.triviaNode.ToFullString() : System.String.Empty;
            };
            SyntaxTrivia.prototype.WriteTo = function (writer) {
                if (this.triviaNode != null) {
                    this.triviaNode.WriteTo_1120(writer);
                }
            };
            SyntaxTrivia.prototype.op_Equality = function (right) {
                var left = this;
                return left.Equals_3529(right);
            };
            SyntaxTrivia.prototype.op_Inequality = function (right) {
                var left = this;
                return !left.Equals_3529(right);
            };
            SyntaxTrivia.prototype.Equals_3529 = function (other) {
                return this.token.op_Equality(other.token) && this.triviaNode == other.triviaNode && this.position == other.position && this.index == other.index;
            };
            SyntaxTrivia.prototype.Equals = function (obj) {
                return obj instanceof SyntaxTrivia && this.Equals_3529(obj);
            };
            SyntaxTrivia.prototype.GetHashCode = function () {
                return Roslyn.Utilities.Hash.Combine_1641(this.token.GetHashCode(), Roslyn.Utilities.Hash.Combine_7656(this.triviaNode, Roslyn.Utilities.Hash.Combine_1641(this.position, this.index)));
            };
            SyntaxTrivia.prototype.WithAdditionalAnnotations_1767 = function () {
                var annotations = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    annotations[_i - 0] = arguments[_i];
                }
                return this.WithAdditionalAnnotations_2069(annotations);
            };
            SyntaxTrivia.prototype.WithAdditionalAnnotations_2069 = function (annotations) {
                if (annotations == null) {
                    throw new System.ArgumentNullException("annotations");
                }
                if (this.UnderlyingNode != null) {
                    return new SyntaxTrivia().ctor_1046(structDefault(CodeAnalysis.SyntaxToken), CodeAnalysis.GreenNodeExtensions.WithAdditionalAnnotationsGreen(this.UnderlyingNode, annotations), 0, 0);
                }
                return structDefault(SyntaxTrivia);
            };
            SyntaxTrivia.prototype.WithoutAnnotations_9940 = function () {
                var annotations = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    annotations[_i - 0] = arguments[_i];
                }
                return this.WithoutAnnotations_4941(annotations);
            };
            SyntaxTrivia.prototype.WithoutAnnotations_4941 = function (annotations) {
                if (annotations == null) {
                    throw new System.ArgumentNullException("annotations");
                }
                if (this.UnderlyingNode != null) {
                    return new SyntaxTrivia().ctor_1046(structDefault(CodeAnalysis.SyntaxToken), CodeAnalysis.GreenNodeExtensions.WithoutAnnotationsGreen(this.UnderlyingNode, annotations), 0, 0);
                }
                return structDefault(SyntaxTrivia);
            };
            SyntaxTrivia.prototype.WithoutAnnotations_4599 = function (annotationKind) {
                if (annotationKind == null) {
                    throw new System.ArgumentNullException("annotationKind");
                }
                if (this.HasAnnotations_4203(annotationKind)) {
                    return this.WithoutAnnotations_4941(this.GetAnnotations_1417(annotationKind));
                }
                else {
                    return this;
                }
            };
            SyntaxTrivia.prototype.CopyAnnotationsTo = function (trivia) {
                if (trivia.UnderlyingNode == null) {
                    return structDefault(SyntaxTrivia);
                }
                if (this.UnderlyingNode == null) {
                    return trivia;
                }
                var annotations = this.UnderlyingNode.GetAnnotations_1741();
                if (annotations == null || annotations.length == 0) {
                    return trivia;
                }
                return new SyntaxTrivia().ctor_1046(structDefault(CodeAnalysis.SyntaxToken), CodeAnalysis.GreenNodeExtensions.WithAdditionalAnnotationsGreen(trivia.UnderlyingNode, annotations), 0, 0);
            };
            Object.defineProperty(SyntaxTrivia.prototype, "SyntaxTree", {
                get: function () {
                    return this.token.SyntaxTree;
                },
                enumerable: true,
                configurable: true
            });
            SyntaxTrivia.prototype.GetLocation = function () {
                return this.SyntaxTree.GetLocation(this.Span);
            };
            SyntaxTrivia.prototype.GetDiagnostics = function () {
                return this.SyntaxTree.GetDiagnostics_1774(this);
            };
            SyntaxTrivia.prototype.IsEquivalentTo = function (trivia) {
                return (this.triviaNode == null && trivia.UnderlyingNode == null) || (this.triviaNode != null && trivia.UnderlyingNode != null && this.triviaNode.IsEquivalentTo(trivia.UnderlyingNode));
            };
            SyntaxTrivia.Any = function (t) { return true; };
            return SyntaxTrivia;
        })();
        CodeAnalysis.SyntaxTrivia = SyntaxTrivia;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var SyntaxTriviaList = (function () {
            function SyntaxTriviaList() {
                this.token = structDefault(CodeAnalysis.SyntaxToken);
                this.position = 0;
                this.index = 0;
            }
            SyntaxTriviaList.prototype.ctor_5254 = function (token, node, position, index) {
                if (index === void 0) { index = 0; }
                this.token = token;
                this.node = node;
                this.position = position;
                this.index = index;
                return this;
            };
            SyntaxTriviaList.prototype.ctor_1248 = function (token, node) {
                this.token = token;
                this.node = node;
                this.position = token.Position;
                this.index = 0;
                return this;
            };
            SyntaxTriviaList.prototype.ctor_2284 = function (trivia) {
                this.token = structDefault(CodeAnalysis.SyntaxToken);
                this.node = trivia.UnderlyingNode;
                this.position = 0;
                this.index = 0;
                return this;
            };
            Object.defineProperty(SyntaxTriviaList.prototype, "Token", {
                get: function () {
                    return this.token;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxTriviaList.prototype, "Node", {
                get: function () {
                    return this.node;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxTriviaList.prototype, "Position", {
                get: function () {
                    return this.position;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxTriviaList.prototype, "Index", {
                get: function () {
                    return this.index;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxTriviaList.prototype, "Count", {
                get: function () {
                    return this.node == null ? 0 : (this.node.IsList ? this.node.SlotCount : 1);
                },
                enumerable: true,
                configurable: true
            });
            SyntaxTriviaList.prototype.ElementAt = function (index) {
                return this.$get$(index);
            };
            SyntaxTriviaList.prototype.$get$ = function (index) {
                if (this.node != null) {
                    if (this.node.IsList) {
                        if (((index >>> 0) < this.node.SlotCount)) {
                            return new CodeAnalysis.SyntaxTrivia().ctor_1046(this.token, this.node.GetSlot(index), this.position + this.node.GetSlotOffset(index), this.index + index);
                        }
                    }
                    else if (index == 0) {
                        return new CodeAnalysis.SyntaxTrivia().ctor_1046(this.token, this.node, this.position, this.index);
                    }
                }
                throw new System.ArgumentOutOfRangeException("index");
            };
            Object.defineProperty(SyntaxTriviaList.prototype, "FullSpan", {
                get: function () {
                    if (this.node == null) {
                        return structDefault(CodeAnalysis.Text.TextSpan);
                    }
                    else {
                        return new CodeAnalysis.Text.TextSpan().ctor_1506(this.Position, this.node.FullWidth);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SyntaxTriviaList.prototype, "Span", {
                get: function () {
                    if (this.node == null) {
                        return structDefault(CodeAnalysis.Text.TextSpan);
                    }
                    else {
                        return CodeAnalysis.Text.TextSpan.FromBounds(this.position + this.node.GetLeadingTriviaWidth(), this.position + this.node.FullWidth - this.node.GetTrailingTriviaWidth());
                    }
                },
                enumerable: true,
                configurable: true
            });
            SyntaxTriviaList.prototype.First = function () {
                if (this.Any()) {
                    return this.$get$(0);
                }
                throw new System.InvalidOperationException();
            };
            SyntaxTriviaList.prototype.Last = function () {
                if (this.Any()) {
                    return this.$get$(this.Count - 1);
                }
                throw new System.InvalidOperationException();
            };
            SyntaxTriviaList.prototype.Any = function () {
                return this.node != null;
            };
            SyntaxTriviaList.prototype.Reverse = function () {
                return new SyntaxTriviaList.Reversed().ctor_2098(this);
            };
            SyntaxTriviaList.prototype.IndexOf_1053 = function (triviaInList) {
                for (var i = 0, n = this.Count; i < n; i++) {
                    var trivia = this.$get$(i);
                    if (trivia.op_Equality(triviaInList)) {
                        return i;
                    }
                }
                return -1;
            };
            SyntaxTriviaList.prototype.IndexOf_9119 = function (rawKind) {
                for (var i = 0, n = this.Count; i < n; i++) {
                    if (this.$get$(i).RawKind == rawKind) {
                        return i;
                    }
                }
                return -1;
            };
            SyntaxTriviaList.prototype.Add = function (trivia) {
                return this.Insert(this.Count, trivia);
            };
            SyntaxTriviaList.prototype.AddRange = function (trivia) {
                return this.InsertRange(this.Count, trivia);
            };
            SyntaxTriviaList.prototype.Insert = function (index, trivia) {
                if (trivia.op_Equality(structDefault(CodeAnalysis.SyntaxTrivia))) {
                    throw new System.ArgumentException("trivia");
                }
                return this.InsertRange(index, new Array(trivia));
            };
            SyntaxTriviaList.prototype.InsertRange = function (index, trivia) {
                if (index < 0 || index > this.Count) {
                    throw new System.ArgumentOutOfRangeException("index");
                }
                var items = System.Linq.Enumerable.ToList(trivia);
                if (items.Count == 0) {
                    return this;
                }
                var list = System.Linq.Enumerable.ToList(this);
                list.InsertRange(index, items);
                if (list.Count == 0) {
                    return this;
                }
                else {
                    return new SyntaxTriviaList().ctor_5254(structDefault(CodeAnalysis.SyntaxToken), list.$get$(0).UnderlyingNode.CreateList(System.Linq.Enumerable.Select(list, function (n) { return n.UnderlyingNode; })), 0, 0);
                }
            };
            SyntaxTriviaList.prototype.RemoveAt = function (index) {
                if (index < 0 || index >= this.Count) {
                    throw new System.ArgumentOutOfRangeException("index");
                }
                var list = System.Linq.Enumerable.ToList(this);
                list.RemoveAt(index);
                return new SyntaxTriviaList().ctor_5254(structDefault(CodeAnalysis.SyntaxToken), this.node.CreateList(System.Linq.Enumerable.Select(list, function (n) { return n.UnderlyingNode; })), 0, 0);
            };
            SyntaxTriviaList.prototype.Remove = function (triviaInList) {
                var index = this.IndexOf_1053(triviaInList);
                if (index >= 0 && index < this.Count) {
                    return this.RemoveAt(index);
                }
                else {
                    return this;
                }
            };
            SyntaxTriviaList.prototype.Replace = function (triviaInList, newTrivia) {
                if (newTrivia.op_Equality(structDefault(CodeAnalysis.SyntaxTrivia))) {
                    throw new System.ArgumentException("newTrivia");
                }
                return this.ReplaceRange(triviaInList, new Array(newTrivia));
            };
            SyntaxTriviaList.prototype.ReplaceRange = function (triviaInList, newTrivia) {
                var index = this.IndexOf_1053(triviaInList);
                if (index >= 0 && index < this.Count) {
                    var list = System.Linq.Enumerable.ToList(this);
                    list.RemoveAt(index);
                    list.InsertRange(index, newTrivia);
                    return new SyntaxTriviaList().ctor_5254(structDefault(CodeAnalysis.SyntaxToken), this.node.CreateList(System.Linq.Enumerable.Select(list, function (n) { return n.UnderlyingNode; })), 0, 0);
                }
                else {
                    throw new System.ArgumentException("triviaInList");
                }
            };
            Object.defineProperty(SyntaxTriviaList.prototype, "Nodes", {
                get: function () {
                    return System.Linq.Enumerable.ToArray(this);
                },
                enumerable: true,
                configurable: true
            });
            SyntaxTriviaList.prototype.GetEnumerator = function () {
                if (this.node == null) {
                    return Roslyn.Utilities.SpecializedCollections.EmptyEnumerator();
                }
                return new SyntaxTriviaList.EnumeratorImpl().ctor_1471(this);
            };
            SyntaxTriviaList.prototype.GetGreenNodeAt_3176 = function (i) {
                return SyntaxTriviaList.GetGreenNodeAt_1419(this.node, i);
            };
            SyntaxTriviaList.GetGreenNodeAt_1419 = function (node, i) {
                System.Diagnostics.Debug.Assert(node.IsList || (i == 0 && !node.IsList));
                return node.IsList ? node.GetSlot(i) : node;
            };
            SyntaxTriviaList.prototype.Equals_1854 = function (other) {
                return this.node == other.node && this.index == other.index && this.token.Equals_1664(other.token);
            };
            SyntaxTriviaList.prototype.op_Equality = function (right) {
                var left = this;
                return left.Equals_1854(right);
            };
            SyntaxTriviaList.prototype.op_Inequality = function (right) {
                var left = this;
                return !left.Equals_1854(right);
            };
            SyntaxTriviaList.prototype.Equals = function (obj) {
                return (obj instanceof SyntaxTriviaList) && this.Equals_1854(obj);
            };
            SyntaxTriviaList.prototype.GetHashCode = function () {
                return Roslyn.Utilities.Hash.Combine_1641(this.token.GetHashCode(), Roslyn.Utilities.Hash.Combine_7656(this.node, this.index));
            };
            SyntaxTriviaList.prototype.CopyTo = function (offset, array, arrayOffset, count) {
                if (offset < 0 || count < 0 || this.Count < offset + count) {
                    throw new System.IndexOutOfRangeException();
                }
                if (count == 0) {
                    return;
                }
                var first = this.$get$(offset);
                array[arrayOffset] = first;
                var position = first.Position;
                var current = first;
                for (var i = 1; i < count; i++) {
                    position += current.FullWidth;
                    current = new CodeAnalysis.SyntaxTrivia().ctor_1046(this.token, this.GetGreenNodeAt_3176(offset + i), position, this.index + i);
                    array[arrayOffset + i] = current;
                }
            };
            SyntaxTriviaList.prototype.ToString = function () {
                return this.node != null ? this.node.ToString() : System.String.Empty;
            };
            SyntaxTriviaList.prototype.ToFullString = function () {
                return this.node != null ? this.node.ToFullString() : System.String.Empty;
            };
            SyntaxTriviaList.Create = function (trivia) {
                return new SyntaxTriviaList().ctor_2284(trivia);
            };
            SyntaxTriviaList.Empty = structDefault(SyntaxTriviaList);
            return SyntaxTriviaList;
        })();
        CodeAnalysis.SyntaxTriviaList = SyntaxTriviaList;
        var SyntaxTriviaList;
        (function (SyntaxTriviaList) {
            var Reversed = (function () {
                function Reversed() {
                    this.list = structDefault(SyntaxTriviaList);
                }
                Reversed.prototype.ctor_2098 = function (list) {
                    this.list = list;
                    return this;
                };
                Reversed.prototype.GetEnumerator = function () {
                    if (this.list.Count == 0) {
                        return Roslyn.Utilities.SpecializedCollections.EmptyEnumerator();
                    }
                    return new Reversed.ReversedEnumeratorImpl().ctor_1247(this.list);
                };
                Reversed.prototype.GetHashCode = function () {
                    return this.list.GetHashCode();
                };
                Reversed.prototype.Equals = function (obj) {
                    return (obj instanceof Reversed) && this.Equals_1958(obj);
                };
                Reversed.prototype.Equals_1958 = function (other) {
                    return this.list.Equals_1854(other.list);
                };
                return Reversed;
            })();
            SyntaxTriviaList.Reversed = Reversed;
            var Reversed;
            (function (Reversed) {
                var Enumerator = (function () {
                    function Enumerator() {
                        this.token = structDefault(CodeAnalysis.SyntaxToken);
                        this.baseIndex = 0;
                        this.count = 0;
                        this.index = 0;
                        this.position = 0;
                    }
                    Enumerator.prototype.ctor_9491 = function (list) {
                        if (list.Any()) {
                            this.token = list.token;
                            this.singleNodeOrList = list.node;
                            this.baseIndex = list.index;
                            this.count = list.Count;
                            this.index = this.count;
                            this.current = null;
                            var last = list.Last();
                            this.position = last.Position + last.FullWidth;
                        }
                        return this;
                    };
                    Enumerator.prototype.MoveNext = function () {
                        if (this.count == 0 || this.index <= 0) {
                            this.current = null;
                            return false;
                        }
                        this.index--;
                        this.current = SyntaxTriviaList.GetGreenNodeAt_1419(this.singleNodeOrList, this.index);
                        this.position -= this.current.FullWidth;
                        return true;
                    };
                    Object.defineProperty(Enumerator.prototype, "Current", {
                        get: function () {
                            if (this.current == null) {
                                throw new System.InvalidOperationException();
                            }
                            return new CodeAnalysis.SyntaxTrivia().ctor_1046(this.token, this.current, this.position, this.baseIndex + this.index);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return Enumerator;
                })();
                Reversed.Enumerator = Enumerator;
            })(Reversed = SyntaxTriviaList.Reversed || (SyntaxTriviaList.Reversed = {}));
            var Reversed;
            (function (Reversed) {
                var ReversedEnumeratorImpl = (function () {
                    function ReversedEnumeratorImpl() {
                        this.enumerator = structDefault(Reversed.Enumerator);
                    }
                    ReversedEnumeratorImpl.prototype.ctor_1247 = function (list) {
                        this.enumerator = new Reversed.Enumerator().ctor_9491(list);
                        return this;
                    };
                    Object.defineProperty(ReversedEnumeratorImpl.prototype, "Current", {
                        get: function () {
                            return this.enumerator.Current;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    ReversedEnumeratorImpl.prototype.MoveNext = function () {
                        return this.enumerator.MoveNext();
                    };
                    ReversedEnumeratorImpl.prototype.Reset = function () {
                        throw new System.NotSupportedException();
                    };
                    ReversedEnumeratorImpl.prototype.Dispose = function () {
                    };
                    return ReversedEnumeratorImpl;
                })();
                Reversed.ReversedEnumeratorImpl = ReversedEnumeratorImpl;
            })(Reversed = SyntaxTriviaList.Reversed || (SyntaxTriviaList.Reversed = {}));
        })(SyntaxTriviaList = CodeAnalysis.SyntaxTriviaList || (CodeAnalysis.SyntaxTriviaList = {}));
        var SyntaxTriviaList;
        (function (SyntaxTriviaList) {
            var Enumerator = (function () {
                function Enumerator() {
                    this.token = structDefault(CodeAnalysis.SyntaxToken);
                    this.baseIndex = 0;
                    this.count = 0;
                    this.index = 0;
                    this.position = 0;
                }
                Enumerator.prototype.ctor_9491 = function (list) {
                    this.token = list.token;
                    this.singleNodeOrList = list.node;
                    this.baseIndex = list.index;
                    this.count = list.Count;
                    this.index = -1;
                    this.current = null;
                    this.position = list.position;
                    return this;
                };
                Enumerator.prototype.InitializeFrom = function (token, greenNode, index, position) {
                    this.token = token.refObj;
                    this.singleNodeOrList = greenNode;
                    this.baseIndex = index;
                    this.count = greenNode.IsList ? greenNode.SlotCount : 1;
                    this.index = -1;
                    this.current = null;
                    this.position = position;
                };
                Enumerator.prototype.InitializeFromLeadingTrivia = function (token) {
                    this.InitializeFrom(token, token.refObj.Node.GetLeadingTriviaCore(), 0, token.refObj.Position);
                };
                Enumerator.prototype.InitializeFromTrailingTrivia = function (token) {
                    var leading = token.refObj.Node.GetLeadingTriviaCore();
                    var index = 0;
                    if (leading != null) {
                        index = leading.IsList ? leading.SlotCount : 1;
                    }
                    var trailingGreen = token.refObj.Node.GetTrailingTriviaCore();
                    var trailingPosition = token.refObj.Position + token.refObj.FullWidth;
                    if (trailingGreen != null) {
                        trailingPosition -= trailingGreen.FullWidth;
                    }
                    this.InitializeFrom(token, trailingGreen, index, trailingPosition);
                };
                Enumerator.prototype.MoveNext = function () {
                    var newIndex = this.index + 1;
                    if (newIndex >= this.count) {
                        this.current = null;
                        return false;
                    }
                    this.index = newIndex;
                    if (this.current != null) {
                        this.position += this.current.FullWidth;
                    }
                    this.current = SyntaxTriviaList.GetGreenNodeAt_1419(this.singleNodeOrList, newIndex);
                    return true;
                };
                Object.defineProperty(Enumerator.prototype, "Current", {
                    get: function () {
                        if (this.current == null) {
                            throw new System.InvalidOperationException();
                        }
                        return new CodeAnalysis.SyntaxTrivia().ctor_1046(this.token, this.current, this.position, this.baseIndex + this.index);
                    },
                    enumerable: true,
                    configurable: true
                });
                Enumerator.prototype.TryMoveNextAndGetCurrent = function (current) {
                    if (!this.MoveNext()) {
                        return false;
                    }
                    current.refObj = new CodeAnalysis.SyntaxTrivia().ctor_1046(this.token, this.current, this.position, this.baseIndex + this.index);
                    return true;
                };
                return Enumerator;
            })();
            SyntaxTriviaList.Enumerator = Enumerator;
        })(SyntaxTriviaList = CodeAnalysis.SyntaxTriviaList || (CodeAnalysis.SyntaxTriviaList = {}));
        var SyntaxTriviaList;
        (function (SyntaxTriviaList) {
            var EnumeratorImpl = (function () {
                function EnumeratorImpl() {
                    this.enumerator = structDefault(SyntaxTriviaList.Enumerator);
                }
                EnumeratorImpl.prototype.ctor_1471 = function (list) {
                    this.enumerator = new SyntaxTriviaList.Enumerator().ctor_9491(list);
                    return this;
                };
                Object.defineProperty(EnumeratorImpl.prototype, "Current", {
                    get: function () {
                        return this.enumerator.Current;
                    },
                    enumerable: true,
                    configurable: true
                });
                EnumeratorImpl.prototype.MoveNext = function () {
                    return this.enumerator.MoveNext();
                };
                EnumeratorImpl.prototype.Reset = function () {
                    throw new System.NotSupportedException();
                };
                EnumeratorImpl.prototype.Dispose = function () {
                };
                return EnumeratorImpl;
            })();
            SyntaxTriviaList.EnumeratorImpl = EnumeratorImpl;
        })(SyntaxTriviaList = CodeAnalysis.SyntaxTriviaList || (CodeAnalysis.SyntaxTriviaList = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var SyntaxWalker = (function () {
            function SyntaxWalker() {
                this.Depth = 0;
            }
            SyntaxWalker.prototype.ctor_1744 = function (depth) {
                if (depth === void 0) { depth = 0 /* Node */; }
                this.Depth = depth;
                return this;
            };
            SyntaxWalker.prototype.Visit = function (node) {
                var childEnumerator = node.ChildNodesAndTokens().GetEnumerator();
                try {
                    while (childEnumerator.MoveNext()) {
                        var child = childEnumerator.Current;
                        if (child.IsNode) {
                            if (this.Depth >= 0 /* Node */) {
                                this.Visit(child.AsNode());
                            }
                        }
                        else if (child.IsToken) {
                            if (this.Depth >= 1 /* Token */) {
                                this.VisitToken(child.AsToken());
                            }
                        }
                    }
                }
                finally {
                    if (childEnumerator !== null)
                        childEnumerator.Dispose();
                }
            };
            SyntaxWalker.prototype.VisitToken = function (token) {
                if (this.Depth >= 2 /* Trivia */) {
                    this.VisitLeadingTrivia(token);
                    this.VisitTrailingTrivia(token);
                }
            };
            SyntaxWalker.prototype.VisitLeadingTrivia = function (token) {
                if (token.HasLeadingTrivia) {
                    var triviaEnumerator = token.LeadingTrivia.GetEnumerator();
                    try {
                        while (triviaEnumerator.MoveNext()) {
                            var trivia = triviaEnumerator.Current;
                            this.VisitTrivia(trivia);
                        }
                    }
                    finally {
                        if (triviaEnumerator !== null)
                            triviaEnumerator.Dispose();
                    }
                }
            };
            SyntaxWalker.prototype.VisitTrailingTrivia = function (token) {
                if (token.HasTrailingTrivia) {
                    var triviaEnumerator = token.TrailingTrivia.GetEnumerator();
                    try {
                        while (triviaEnumerator.MoveNext()) {
                            var trivia = triviaEnumerator.Current;
                            this.VisitTrivia(trivia);
                        }
                    }
                    finally {
                        if (triviaEnumerator !== null)
                            triviaEnumerator.Dispose();
                    }
                }
            };
            SyntaxWalker.prototype.VisitTrivia = function (trivia) {
                if (this.Depth >= 3 /* StructuredTrivia */ && trivia.HasStructure) {
                    this.Visit(trivia.GetStructure());
                }
            };
            return SyntaxWalker;
        })();
        CodeAnalysis.SyntaxWalker = SyntaxWalker;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        (function (SyntaxWalkerDepth) {
            SyntaxWalkerDepth[SyntaxWalkerDepth["Node"] = 0] = "Node";
            SyntaxWalkerDepth[SyntaxWalkerDepth["Token"] = 1] = "Token";
            SyntaxWalkerDepth[SyntaxWalkerDepth["Trivia"] = 2] = "Trivia";
            SyntaxWalkerDepth[SyntaxWalkerDepth["StructuredTrivia"] = 3] = "StructuredTrivia";
        })(CodeAnalysis.SyntaxWalkerDepth || (CodeAnalysis.SyntaxWalkerDepth = {}));
        var SyntaxWalkerDepth = CodeAnalysis.SyntaxWalkerDepth;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Syntax;
        (function (Syntax) {
            var TranslationSyntaxReference = (function (_super) {
                __extends(TranslationSyntaxReference, _super);
                function TranslationSyntaxReference() {
                    _super.call(this);
                }
                TranslationSyntaxReference.prototype.ctor_1683 = function (reference) {
                    this.reference = reference;
                    return this;
                };
                Object.defineProperty(TranslationSyntaxReference.prototype, "Span", {
                    get: function () {
                        return this.reference.Span;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TranslationSyntaxReference.prototype, "SyntaxTree", {
                    get: function () {
                        return this.reference.SyntaxTree;
                    },
                    enumerable: true,
                    configurable: true
                });
                TranslationSyntaxReference.prototype.GetSyntax = function (cancellationToken) {
                    if (cancellationToken === void 0) { cancellationToken = structDefault(System.Threading.CancellationToken); }
                    var node = this.Translate(this.reference, cancellationToken);
                    System.Diagnostics.Debug.Assert(node.SyntaxTree == this.reference.SyntaxTree);
                    return node;
                };
                TranslationSyntaxReference.prototype.Translate = function (reference, cancellationToken) {
                    throw new Error('not implemented');
                };
                return TranslationSyntaxReference;
            })(CodeAnalysis.SyntaxReference);
            Syntax.TranslationSyntaxReference = TranslationSyntaxReference;
        })(Syntax = CodeAnalysis.Syntax || (CodeAnalysis.Syntax = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Text;
        (function (Text) {
            var TextLineCollection = (function () {
                function TextLineCollection() {
                    this.Count = 0;
                }
                TextLineCollection.prototype.$get$ = function (index) {
                    throw new System.NotImplementedException();
                };
                TextLineCollection.prototype.IndexOf = function (position) {
                    throw new Error('not implemented');
                };
                TextLineCollection.prototype.GetLineFromPosition = function (position) {
                    return this.$get$(this.IndexOf(position));
                };
                TextLineCollection.prototype.GetLinePosition = function (position) {
                    var line = this.GetLineFromPosition(position);
                    return new Text.LinePosition().ctor_1367(line.LineNumber, position - line.Start);
                };
                TextLineCollection.prototype.GetLinePositionSpan = function (span) {
                    return new Text.LinePositionSpan().ctor_1348(this.GetLinePosition(span.Start), this.GetLinePosition(span.End));
                };
                TextLineCollection.prototype.GetPosition = function (position) {
                    return this.$get$(position.Line).Start + position.Character;
                };
                TextLineCollection.prototype.GetTextSpan = function (span) {
                    return Text.TextSpan.FromBounds(this.GetPosition(span.Start), this.GetPosition(span.End));
                };
                TextLineCollection.prototype.GetEnumerator = function () {
                    return new TextLineCollection.Enumerator().ctor_1673(this);
                };
                return TextLineCollection;
            })();
            Text.TextLineCollection = TextLineCollection;
            var TextLineCollection;
            (function (TextLineCollection) {
                var Enumerator = (function () {
                    function Enumerator() {
                        this.index = 0;
                    }
                    Enumerator.prototype.ctor_1673 = function (lines, index) {
                        if (index === void 0) { index = -1; }
                        this.lines = lines;
                        this.index = index;
                        return this;
                    };
                    Object.defineProperty(Enumerator.prototype, "Current", {
                        get: function () {
                            var ndx = this.index;
                            if (ndx >= 0 && ndx < this.lines.Count) {
                                return this.lines.$get$(ndx);
                            }
                            else {
                                return structDefault(Text.TextLine);
                            }
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Enumerator.prototype.MoveNext = function () {
                        if (this.index < this.lines.Count - 1) {
                            this.index = this.index + 1;
                            return true;
                        }
                        return false;
                    };
                    Enumerator.prototype.Reset = function () {
                    };
                    Enumerator.prototype.Dispose = function () {
                    };
                    Enumerator.prototype.Equals = function (obj) {
                        throw new System.NotSupportedException();
                    };
                    Enumerator.prototype.GetHashCode = function () {
                        throw new System.NotSupportedException();
                    };
                    return Enumerator;
                })();
                TextLineCollection.Enumerator = Enumerator;
            })(TextLineCollection = Text.TextLineCollection || (Text.TextLineCollection = {}));
        })(Text = CodeAnalysis.Text || (CodeAnalysis.Text = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Text;
        (function (Text) {
            var SourceTextContainer = (function () {
                function SourceTextContainer() {
                }
                return SourceTextContainer;
            })();
            Text.SourceTextContainer = SourceTextContainer;
        })(Text = CodeAnalysis.Text || (CodeAnalysis.Text = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Text;
        (function (Text) {
            var SourceText = (function () {
                function SourceText() {
                    this.checksumAlgorithm = 0;
                    this.lazyChecksum = structDefault(System.Collections.Immutable.ImmutableArray);
                    this.Length = 0;
                }
                SourceText.prototype.ctor_1670 = function (checksum, checksumAlgorithm, container) {
                    if (checksum === void 0) { checksum = structDefault(System.Collections.Immutable.ImmutableArray); }
                    if (checksumAlgorithm === void 0) { checksumAlgorithm = 1 /* Sha1 */; }
                    if (container === void 0) { container = null; }
                    SourceText.ValidateChecksumAlgorithm(checksumAlgorithm);
                    if (!checksum.IsDefault && checksum.Length != CodeAnalysis.CryptographicHashProvider.GetHashSize(checksumAlgorithm)) {
                        throw new System.ArgumentException(CodeAnalysis.CodeAnalysisResources.InvalidHash, 'checksum');
                    }
                    this.checksumAlgorithm = checksumAlgorithm;
                    this.lazyChecksum = checksum;
                    this.lazyContainer = container;
                    return this;
                };
                SourceText.ValidateChecksumAlgorithm = function (checksumAlgorithm) {
                };
                SourceText.From_1429 = function (text, encoding, checksumAlgorithm) {
                    if (encoding === void 0) { encoding = null; }
                    if (checksumAlgorithm === void 0) { checksumAlgorithm = 1 /* Sha1 */; }
                    if (text == null) {
                        throw new System.ArgumentNullException('text');
                    }
                    return new Text.StringText().ctor_3448(text, encoding, structDefault(System.Collections.Immutable.ImmutableArray), checksumAlgorithm);
                };
                Object.defineProperty(SourceText.prototype, "ChecksumAlgorithm", {
                    get: function () {
                        return this.checksumAlgorithm;
                    },
                    enumerable: true,
                    configurable: true
                });
                SourceText.prototype.$get$ = function (position) {
                    throw new System.NotImplementedException();
                };
                SourceText.prototype.CopyTo = function (sourceIndex, destination, destinationIndex, count) {
                    throw new Error('not implemented');
                };
                Object.defineProperty(SourceText.prototype, "Container", {
                    get: function () {
                        if (this.lazyContainer == null) {
                            this.lazyContainer = new SourceText.StaticContainer().ctor_1615(this);
                        }
                        return this.lazyContainer;
                    },
                    enumerable: true,
                    configurable: true
                });
                SourceText.prototype.CheckSubSpan = function (span) {
                    if (span.Start < 0 || span.Start > this.Length || span.End > this.Length) {
                        throw new System.ArgumentOutOfRangeException("span");
                    }
                };
                SourceText.prototype.GetSubText_1692 = function (span) {
                    this.CheckSubSpan(span);
                    var spanLength = span.Length;
                    if (spanLength == 0) {
                        return SourceText.From_1429(System.String.Empty, this.Encoding, this.ChecksumAlgorithm);
                    }
                    else if (spanLength == this.Length && span.Start == 0) {
                        return this;
                    }
                    else {
                        return new Text.SubText().ctor_1484(this, span);
                    }
                };
                SourceText.prototype.GetSubText_1518 = function (start) {
                    if (start < 0 || start > this.Length) {
                        throw new System.ArgumentOutOfRangeException("start");
                    }
                    if (start == 0) {
                        return this;
                    }
                    else {
                        return this.GetSubText_1692(new Text.TextSpan().ctor_1506(start, this.Length - start));
                    }
                };
                SourceText.prototype.Write_1707 = function (textWriter, cancellationToken) {
                    if (cancellationToken === void 0) { cancellationToken = structDefault(System.Threading.CancellationToken); }
                    this.Write_5564(textWriter, new Text.TextSpan().ctor_1506(0, this.Length), cancellationToken);
                };
                SourceText.prototype.Write_5564 = function (writer, span, cancellationToken) {
                    if (cancellationToken === void 0) { cancellationToken = structDefault(System.Threading.CancellationToken); }
                    this.CheckSubSpan(span);
                    var buffer = SourceText.CharArrayPool.Allocate();
                    try {
                        var offset = System.Math.Min(this.Length, span.Start);
                        var length = System.Math.Min(this.Length, span.End) - offset;
                        while (offset < length) {
                            cancellationToken.ThrowIfCancellationRequested();
                            var count = System.Math.Min(buffer.length, length - offset);
                            this.CopyTo(offset, buffer, 0, count);
                            writer.WriteCharArray(buffer, 0, count);
                            offset += count;
                        }
                    }
                    finally {
                        SourceText.CharArrayPool.Free(buffer);
                    }
                };
                SourceText.prototype.ToString = function () {
                    return this.ToString_4959(new Text.TextSpan().ctor_1506(0, this.Length));
                };
                SourceText.prototype.ToString_4959 = function (span) {
                    this.CheckSubSpan(span);
                    var builder = new System.Text.StringBuilder();
                    var buffer = new Array(System.Math.Min(span.Length, 1024));
                    var position = System.Math.Max(System.Math.Min(span.Start, this.Length), 0);
                    var length = System.Math.Min(span.End, this.Length) - position;
                    while (position < this.Length && length > 0) {
                        var copyLength = System.Math.Min(buffer.length, length);
                        this.CopyTo(position, buffer, 0, copyLength);
                        builder.Append(buffer, 0, copyLength);
                        length -= copyLength;
                        position += copyLength;
                    }
                    return builder.ToString();
                };
                SourceText.prototype.WithChanges_5075 = function (changes) {
                    if (changes == null) {
                        throw new System.ArgumentNullException('changes');
                    }
                    if (!System.Linq.Enumerable.Any(changes)) {
                        return this;
                    }
                    var segments = CodeAnalysis.ArrayBuilder.GetInstance_1997();
                    var changeRanges = CodeAnalysis.ArrayBuilder.GetInstance_1997();
                    var position = 0;
                    var changeEnumerator = changes.GetEnumerator();
                    try {
                        while (changeEnumerator.MoveNext()) {
                            var change = changeEnumerator.Current;
                            if (change.Span.Start < position) {
                                throw new System.ArgumentException(CodeAnalysis.CodeAnalysisResources.ChangesMustBeOrderedAndNotOverlapping, 'changes');
                            }
                            if (change.Span.Start > position) {
                                var subText = this.GetSubText_1692(new Text.TextSpan().ctor_1506(position, change.Span.Start - position));
                                Text.CompositeText.AddSegments(segments, subText);
                            }
                            if (!System.String.IsNullOrEmpty(change.NewText)) {
                                var segment = SourceText.From_1429(change.NewText, this.Encoding, this.ChecksumAlgorithm);
                                Text.CompositeText.AddSegments(segments, segment);
                            }
                            position = change.Span.End;
                            changeRanges.Add(new Text.TextChangeRange().ctor_4786(change.Span, change.NewText != null ? change.NewText.length : 0));
                        }
                    }
                    finally {
                        if (changeEnumerator !== null)
                            changeEnumerator.Dispose();
                    }
                    if (position < this.Length) {
                        var subText = this.GetSubText_1692(new Text.TextSpan().ctor_1506(position, this.Length - position));
                        Text.CompositeText.AddSegments(segments, subText);
                    }
                    return new Text.ChangedText().ctor_1415(this, changeRanges.ToImmutableAndFree(), segments.ToImmutableAndFree());
                };
                SourceText.prototype.WithChanges_9931 = function () {
                    var changes = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        changes[_i - 0] = arguments[_i];
                    }
                    return this.WithChanges_5075(changes);
                };
                SourceText.prototype.Replace_1550 = function (span, newText) {
                    return this.WithChanges_9931(new Text.TextChange().ctor_1791(span, newText));
                };
                SourceText.prototype.Replace_5382 = function (start, length, newText) {
                    return this.Replace_1550(new Text.TextSpan().ctor_1506(start, length), newText);
                };
                SourceText.prototype.GetChangeRanges = function (oldText) {
                    if (oldText == null) {
                        throw new System.ArgumentNullException("oldText");
                    }
                    if (oldText == this) {
                        return Text.TextChangeRange.NoChanges;
                    }
                    else {
                        return System.Collections.Immutable.ImmutableArray.Create(new Text.TextChangeRange().ctor_4786(new Text.TextSpan().ctor_1506(0, oldText.Length), this.Length));
                    }
                };
                SourceText.prototype.GetTextChanges = function (oldText) {
                    var newPosDelta = 0;
                    var ranges = System.Linq.Enumerable.ToList(this.GetChangeRanges(oldText));
                    var textChanges = new System.Collections.Generic.List(ranges.Count);
                    var rangeEnumerator = ranges.GetEnumerator();
                    try {
                        while (rangeEnumerator.MoveNext()) {
                            var range = rangeEnumerator.Current;
                            var newPos = range.Span.Start + newPosDelta;
                            var newt;
                            if (range.NewLength > 0) {
                                var span = new Text.TextSpan().ctor_1506(newPos, range.NewLength);
                                newt = this.ToString_4959(span);
                            }
                            else {
                                newt = System.String.Empty;
                            }
                            textChanges.Add(new Text.TextChange().ctor_1791(range.Span, newt));
                            newPosDelta += range.NewLength - range.Span.Length;
                        }
                    }
                    finally {
                        if (rangeEnumerator !== null)
                            rangeEnumerator.Dispose();
                    }
                    return Roslyn.Utilities.ImmutableArrayExtensions.ToImmutableArrayOrEmpty_1553(textChanges);
                };
                Object.defineProperty(SourceText.prototype, "Lines", {
                    get: function () {
                        if (this.lazyLineInfo == null) {
                            var info = new SourceText.LineInfo().ctor_4205(this, this.ParseLineStarts());
                            this.lazyLineInfo = info;
                        }
                        return this.lazyLineInfo;
                    },
                    enumerable: true,
                    configurable: true
                });
                SourceText.prototype.ParseLineStarts = function () {
                    var length = this.Length;
                    if (0 == this.Length) {
                        return new Array(0);
                    }
                    var position = 0;
                    var index = 0;
                    var arrayBuilder = CodeAnalysis.ArrayBuilder.GetInstance_1997();
                    while (index < length) {
                        var c = this.$get$(index++);
                        var bias = '\r'.charCodeAt(0) + 1;
                        if (((c.charCodeAt(0) - bias) >>> 0) <= (127 - bias)) {
                            continue;
                        }
                        if (c == '\r' && index < length && this.$get$(index) == '\n') {
                            index++;
                        }
                        else if (!Text.TextUtilities.IsAnyLineBreakCharacter(c)) {
                            continue;
                        }
                        arrayBuilder.Add(position);
                        position = index;
                    }
                    arrayBuilder.Add(position);
                    return arrayBuilder.ToArrayAndFree();
                };
                SourceText.prototype.ContentEquals = function (other) {
                    if (ReferenceEquals(this, other)) {
                        return true;
                    }
                    var leftChecksum = this.lazyChecksum;
                    var rightChecksum = other.lazyChecksum;
                    if (!leftChecksum.IsDefault && !rightChecksum.IsDefault && this.Encoding == other.Encoding && this.ChecksumAlgorithm == other.ChecksumAlgorithm) {
                        return System.Linq.ImmutableArrayExtensions.SequenceEqual(leftChecksum, rightChecksum);
                    }
                    return this.ContentEqualsImpl(other);
                };
                SourceText.prototype.ContentEqualsImpl = function (other) {
                    if (other == null) {
                        return false;
                    }
                    if (ReferenceEquals(this, other)) {
                        return true;
                    }
                    if (this.Length != other.Length) {
                        return false;
                    }
                    var buffer1 = SourceText.CharArrayPool.Allocate();
                    var buffer2 = SourceText.CharArrayPool.Allocate();
                    try {
                        var position = 0;
                        while (position < this.Length) {
                            var n = System.Math.Min(this.Length - position, buffer1.length);
                            this.CopyTo(position, buffer1, 0, n);
                            other.CopyTo(position, buffer2, 0, n);
                            for (var i = 0; i < n; i++) {
                                if (buffer1[i] != buffer2[i]) {
                                    return false;
                                }
                            }
                            position += n;
                        }
                        return true;
                    }
                    finally {
                        SourceText.CharArrayPool.Free(buffer2);
                        SourceText.CharArrayPool.Free(buffer1);
                    }
                };
                SourceText.CharBufferSize = 32 * 1024;
                SourceText.CharBufferCount = 5;
                SourceText.CharArrayPool = new Roslyn.Utilities.ObjectPool().ctor_5203(function () { return new Array(SourceText.CharBufferSize); }, SourceText.CharBufferCount);
                return SourceText;
            })();
            Text.SourceText = SourceText;
            var SourceText;
            (function (SourceText) {
                var LineInfo = (function (_super) {
                    __extends(LineInfo, _super);
                    function LineInfo() {
                        _super.call(this);
                        this.lastLineNumber = 0;
                    }
                    LineInfo.prototype.ctor_4205 = function (text, lineStarts) {
                        this.text = text;
                        this.lineStarts = lineStarts;
                        return this;
                    };
                    Object.defineProperty(LineInfo.prototype, "Count", {
                        get: function () {
                            return this.lineStarts.length;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    LineInfo.prototype.$get$ = function (index) {
                        if (index < 0 || index >= this.lineStarts.length) {
                            throw new System.ArgumentOutOfRangeException("index");
                        }
                        var start = this.lineStarts[index];
                        if (index == this.lineStarts.length - 1) {
                            return Text.TextLine.FromSpan(this.text, Text.TextSpan.FromBounds(start, this.text.Length));
                        }
                        else {
                            var end = this.lineStarts[index + 1];
                            return Text.TextLine.FromSpan(this.text, Text.TextSpan.FromBounds(start, end));
                        }
                    };
                    LineInfo.prototype.IndexOf = function (position) {
                        if (position < 0 || position > this.text.Length) {
                            throw new System.ArgumentOutOfRangeException("position");
                        }
                        var lineNumber = 0;
                        var lastLineNumber = this.lastLineNumber;
                        if (position >= this.lineStarts[lastLineNumber]) {
                            var limit = System.Math.Min(this.lineStarts.length, lastLineNumber + 4);
                            for (var i = lastLineNumber; i < limit; i++) {
                                if (position < this.lineStarts[i]) {
                                    lineNumber = i - 1;
                                    this.lastLineNumber = lineNumber;
                                    return lineNumber;
                                }
                            }
                        }
                        lineNumber = Roslyn.Utilities.ArrayExtensions.BinarySearch(this.lineStarts, position);
                        if (lineNumber < 0) {
                            lineNumber = (~lineNumber) - 1;
                        }
                        this.lastLineNumber = lineNumber;
                        return lineNumber;
                    };
                    LineInfo.prototype.GetLineFromPosition = function (position) {
                        return this.$get$(this.IndexOf(position));
                    };
                    return LineInfo;
                })(Text.TextLineCollection);
                SourceText.LineInfo = LineInfo;
            })(SourceText = Text.SourceText || (Text.SourceText = {}));
            var SourceText;
            (function (SourceText) {
                var StaticContainer = (function (_super) {
                    __extends(StaticContainer, _super);
                    function StaticContainer() {
                        _super.call(this);
                    }
                    StaticContainer.prototype.ctor_1615 = function (text) {
                        this.text = text;
                        return this;
                    };
                    Object.defineProperty(StaticContainer.prototype, "CurrentText", {
                        get: function () {
                            return this.text;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return StaticContainer;
                })(Text.SourceTextContainer);
                SourceText.StaticContainer = StaticContainer;
            })(SourceText = Text.SourceText || (Text.SourceText = {}));
        })(Text = CodeAnalysis.Text || (CodeAnalysis.Text = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Text;
        (function (Text) {
            var ChangedText = (function (_super) {
                __extends(ChangedText, _super);
                function ChangedText() {
                    _super.call(this);
                    this.changes = structDefault(System.Collections.Immutable.ImmutableArray);
                }
                ChangedText.prototype.ctor_1415 = function (oldText, changeRanges, segments) {
                    _super.prototype.ctor_1670.call(this, structDefault(System.Collections.Immutable.ImmutableArray), oldText.ChecksumAlgorithm, null);
                    System.Diagnostics.Debug.Assert(oldText != null);
                    System.Diagnostics.Debug.Assert(!changeRanges.IsDefault);
                    System.Diagnostics.Debug.Assert(!segments.IsDefault);
                    this.oldText = oldText;
                    this.newText = segments.IsEmpty ? new Text.StringText().ctor_3448("", oldText.Encoding, structDefault(System.Collections.Immutable.ImmutableArray), oldText.ChecksumAlgorithm) : new Text.CompositeText().ctor_1839(segments);
                    this.changes = changeRanges;
                    return this;
                };
                Object.defineProperty(ChangedText.prototype, "Encoding", {
                    get: function () {
                        return this.oldText.Encoding;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ChangedText.prototype, "OldText", {
                    get: function () {
                        return this.oldText;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ChangedText.prototype, "NewText", {
                    get: function () {
                        return this.newText;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ChangedText.prototype, "Changes", {
                    get: function () {
                        return this.changes;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ChangedText.prototype, "Length", {
                    get: function () {
                        return this.newText.Length;
                    },
                    enumerable: true,
                    configurable: true
                });
                ChangedText.prototype.$get$ = function (position) {
                    return this.newText.$get$(position);
                };
                ChangedText.prototype.ToString_4959 = function (span) {
                    return this.newText.ToString_4959(span);
                };
                ChangedText.prototype.GetSubText_1692 = function (span) {
                    return this.newText.GetSubText_1692(span);
                };
                ChangedText.prototype.CopyTo = function (sourceIndex, destination, destinationIndex, count) {
                    this.newText.CopyTo(sourceIndex, destination, destinationIndex, count);
                };
                ChangedText.prototype.GetChangeRanges = function (oldText) {
                    if (oldText == null) {
                        throw new System.ArgumentNullException("oldText");
                    }
                    if (ReferenceEquals(this.oldText, oldText)) {
                        return this.changes;
                    }
                    if (this.oldText.GetChangeRanges(oldText).Count == 0) {
                        return this.changes;
                    }
                    if (this == oldText) {
                        return Text.TextChangeRange.NoChanges;
                    }
                    return System.Collections.Immutable.ImmutableArray.Create(new Text.TextChangeRange().ctor_4786(new Text.TextSpan().ctor_1506(0, oldText.Length), this.newText.Length));
                };
                return ChangedText;
            })(Text.SourceText);
            Text.ChangedText = ChangedText;
        })(Text = CodeAnalysis.Text || (CodeAnalysis.Text = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Text;
        (function (Text) {
            var CompositeText = (function (_super) {
                __extends(CompositeText, _super);
                function CompositeText() {
                    _super.call(this);
                    this.texts = structDefault(System.Collections.Immutable.ImmutableArray);
                    this.length = 0;
                }
                CompositeText.prototype.ctor_1839 = function (texts) {
                    _super.prototype.ctor_1670.call(this, structDefault(System.Collections.Immutable.ImmutableArray), texts.$get$(0).ChecksumAlgorithm, null);
                    System.Diagnostics.Debug.Assert(!texts.IsDefaultOrEmpty);
                    this.texts = texts;
                    var len = 0;
                    var textEnumerator = texts.GetEnumerator();
                    try {
                        while (textEnumerator.MoveNext()) {
                            var text = textEnumerator.Current;
                            len += text.Length;
                        }
                    }
                    finally {
                        if (textEnumerator !== null)
                            textEnumerator.Dispose();
                    }
                    this.length = len;
                    return this;
                };
                Object.defineProperty(CompositeText.prototype, "Encoding", {
                    get: function () {
                        return this.texts.$get$(0).Encoding;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(CompositeText.prototype, "Length", {
                    get: function () {
                        return this.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                CompositeText.prototype.$get$ = function (position) {
                    var index = 0;
                    var offset = 0;
                    var index_ref0 = { refObj: index };
                    var offset_ref1 = { refObj: offset };
                    this.GetIndexAndOffset(position, index_ref0, offset_ref1);
                    index = index_ref0.refObj;
                    offset = offset_ref1.refObj;
                    ;
                    return this.texts.$get$(index).$get$(offset);
                };
                CompositeText.prototype.GetSubText_1692 = function (span) {
                    this.CheckSubSpan(span);
                    var sourceIndex = span.Start;
                    var count = span.Length;
                    var segIndex = 0;
                    var segOffset = 0;
                    var segIndex_ref0 = { refObj: segIndex };
                    var segOffset_ref1 = { refObj: segOffset };
                    this.GetIndexAndOffset(sourceIndex, segIndex_ref0, segOffset_ref1);
                    segIndex = segIndex_ref0.refObj;
                    segOffset = segOffset_ref1.refObj;
                    ;
                    var newTexts = CodeAnalysis.ArrayBuilder.GetInstance_1997();
                    while (segIndex < this.texts.Length && count > 0) {
                        var segment = this.texts.$get$(segIndex);
                        var copyLength = System.Math.Min(count, segment.Length - segOffset);
                        CompositeText.AddSegments(newTexts, segment.GetSubText_1692(new Text.TextSpan().ctor_1506(segOffset, copyLength)));
                        count -= copyLength;
                        segIndex++;
                        segOffset = 0;
                    }
                    if (newTexts.Count == 0) {
                        newTexts.Free();
                        return Text.SourceText.From_1429(System.String.Empty, this.Encoding, this.ChecksumAlgorithm);
                    }
                    else if (newTexts.Count == 1) {
                        var result = newTexts.$get$(0);
                        newTexts.Free();
                        return result;
                    }
                    else {
                        return new CompositeText().ctor_1839(newTexts.ToImmutableAndFree());
                    }
                };
                CompositeText.prototype.GetIndexAndOffset = function (position, index, offset) {
                    for (var i = 0; i < this.texts.Length; i++) {
                        var segment = this.texts.$get$(i);
                        if (position < segment.Length) {
                            index.refObj = i;
                            offset.refObj = position;
                            return;
                        }
                        else {
                            position -= segment.Length;
                        }
                    }
                    index.refObj = 0;
                    offset.refObj = 0;
                    throw new System.ArgumentException("position");
                };
                CompositeText.prototype.CheckCopyToArguments = function (sourceIndex, destination, destinationIndex, count) {
                    if (destination == null)
                        throw new System.ArgumentNullException("destination");
                    if (sourceIndex < 0)
                        throw new System.ArgumentOutOfRangeException("sourceIndex");
                    if (destinationIndex < 0)
                        throw new System.ArgumentOutOfRangeException("destinationIndex");
                    if (count < 0 || count > this.Length - sourceIndex || count > destination.length - destinationIndex)
                        throw new System.ArgumentOutOfRangeException("count");
                    return count > 0;
                };
                CompositeText.prototype.CopyTo = function (sourceIndex, destination, destinationIndex, count) {
                    if (!this.CheckCopyToArguments(sourceIndex, destination, destinationIndex, count))
                        return;
                    var segIndex = 0;
                    var segOffset = 0;
                    var segIndex_ref0 = { refObj: segIndex };
                    var segOffset_ref1 = { refObj: segOffset };
                    this.GetIndexAndOffset(sourceIndex, segIndex_ref0, segOffset_ref1);
                    segIndex = segIndex_ref0.refObj;
                    segOffset = segOffset_ref1.refObj;
                    ;
                    while (segIndex < this.texts.Length && count > 0) {
                        var segment = this.texts.$get$(segIndex);
                        var copyLength = System.Math.Min(count, segment.Length - segOffset);
                        segment.CopyTo(segOffset, destination, destinationIndex, copyLength);
                        count -= copyLength;
                        destinationIndex += copyLength;
                        segIndex++;
                        segOffset = 0;
                    }
                };
                CompositeText.AddSegments = function (builder, text) {
                    var composite = __as__(text, CompositeText);
                    if (composite == null) {
                        builder.Add(text);
                    }
                    else {
                        builder.AddRange_1909(composite.texts);
                    }
                };
                return CompositeText;
            })(Text.SourceText);
            Text.CompositeText = CompositeText;
        })(Text = CodeAnalysis.Text || (CodeAnalysis.Text = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Text;
        (function (Text) {
            var LinePosition = (function () {
                function LinePosition() {
                    this.line = 0;
                    this.character = 0;
                }
                LinePosition.prototype.ctor_1367 = function (line, character) {
                    if (line < 0) {
                        throw new System.ArgumentOutOfRangeException("line");
                    }
                    if (character < 0) {
                        throw new System.ArgumentOutOfRangeException("character");
                    }
                    this.line = line;
                    this.character = character;
                    return this;
                };
                LinePosition.prototype.ctor_9638 = function (character) {
                    if (character < 0) {
                        throw new System.ArgumentOutOfRangeException("character");
                    }
                    this.line = -1;
                    this.character = character;
                    return this;
                };
                Object.defineProperty(LinePosition.prototype, "Line", {
                    get: function () {
                        return this.line;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinePosition.prototype, "Character", {
                    get: function () {
                        return this.character;
                    },
                    enumerable: true,
                    configurable: true
                });
                LinePosition.prototype.op_Equality = function (right) {
                    var left = this;
                    return left.Equals_6178(right);
                };
                LinePosition.prototype.op_Inequality = function (right) {
                    var left = this;
                    return !left.Equals_6178(right);
                };
                LinePosition.prototype.Equals_6178 = function (other) {
                    return other.Line == this.Line && other.Character == this.Character;
                };
                LinePosition.prototype.Equals = function (obj) {
                    return obj instanceof LinePosition && this.Equals_6178(obj);
                };
                LinePosition.prototype.GetHashCode = function () {
                    return Roslyn.Utilities.Hash.Combine_1641(this.Line, this.Character);
                };
                LinePosition.prototype.ToString = function () {
                    return this.Line + "," + this.Character;
                };
                LinePosition.prototype.CompareTo = function (other) {
                    var result = this.line.CompareTo(other.line);
                    return (result != 0) ? result : this.character.CompareTo(other.Character);
                };
                LinePosition.prototype.op_GreaterThan = function (right) {
                    var left = this;
                    return left.CompareTo(right) > 0;
                };
                LinePosition.prototype.op_GreaterThanOrEqual = function (right) {
                    var left = this;
                    return left.CompareTo(right) >= 0;
                };
                LinePosition.prototype.op_LessThan = function (right) {
                    var left = this;
                    return left.CompareTo(right) < 0;
                };
                LinePosition.prototype.op_LessThanOrEqual = function (right) {
                    var left = this;
                    return left.CompareTo(right) <= 0;
                };
                LinePosition.Zero = new LinePosition().ctor_1367(0, 0);
                return LinePosition;
            })();
            Text.LinePosition = LinePosition;
        })(Text = CodeAnalysis.Text || (CodeAnalysis.Text = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Text;
        (function (Text) {
            var LinePositionSpan = (function () {
                function LinePositionSpan() {
                    this.start = structDefault(Text.LinePosition);
                    this.end = structDefault(Text.LinePosition);
                }
                LinePositionSpan.prototype.ctor_1348 = function (start, end) {
                    if (end.op_LessThan(start)) {
                        throw new System.ArgumentException("end", CodeAnalysis.CodeAnalysisResources.EndMustNotBeLessThanStart);
                    }
                    this.start = start;
                    this.end = end;
                    return this;
                };
                Object.defineProperty(LinePositionSpan.prototype, "Start", {
                    get: function () {
                        return this.start;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LinePositionSpan.prototype, "End", {
                    get: function () {
                        return this.end;
                    },
                    enumerable: true,
                    configurable: true
                });
                LinePositionSpan.prototype.Equals = function (obj) {
                    return obj instanceof LinePositionSpan && this.Equals_2915(obj);
                };
                LinePositionSpan.prototype.Equals_2915 = function (other) {
                    return this.start.Equals_6178(other.start) && this.end.Equals_6178(other.end);
                };
                LinePositionSpan.prototype.GetHashCode = function () {
                    return Roslyn.Utilities.Hash.Combine_1641(this.start.GetHashCode(), this.end.GetHashCode());
                };
                LinePositionSpan.prototype.op_Equality = function (right) {
                    var left = this;
                    return left.Equals_2915(right);
                };
                LinePositionSpan.prototype.op_Inequality = function (right) {
                    var left = this;
                    return !left.Equals_2915(right);
                };
                LinePositionSpan.prototype.ToString = function () {
                    return System.String.Format("({0})-({1})", this.start, this.end);
                };
                return LinePositionSpan;
            })();
            Text.LinePositionSpan = LinePositionSpan;
        })(Text = CodeAnalysis.Text || (CodeAnalysis.Text = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Text;
        (function (Text) {
            (function (SourceHashAlgorithm) {
                SourceHashAlgorithm[SourceHashAlgorithm["None"] = 0] = "None";
                SourceHashAlgorithm[SourceHashAlgorithm["Sha1"] = 1] = "Sha1";
                SourceHashAlgorithm[SourceHashAlgorithm["Sha256"] = 2] = "Sha256";
            })(Text.SourceHashAlgorithm || (Text.SourceHashAlgorithm = {}));
            var SourceHashAlgorithm = Text.SourceHashAlgorithm;
        })(Text = CodeAnalysis.Text || (CodeAnalysis.Text = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Text;
        (function (Text) {
            var StringBuilderText = (function (_super) {
                __extends(StringBuilderText, _super);
                function StringBuilderText() {
                    _super.call(this);
                }
                StringBuilderText.prototype.ctor_1446 = function (builder, encodingOpt, checksumAlgorithm) {
                    _super.prototype.ctor_1670.call(this, structDefault(System.Collections.Immutable.ImmutableArray), checksumAlgorithm, null);
                    System.Diagnostics.Debug.Assert(builder != null);
                    this.builder = builder;
                    this.encodingOpt = encodingOpt;
                    return this;
                };
                Object.defineProperty(StringBuilderText.prototype, "Encoding", {
                    get: function () {
                        return this.encodingOpt;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StringBuilderText.prototype, "Builder", {
                    get: function () {
                        return this.builder;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StringBuilderText.prototype, "Length", {
                    get: function () {
                        return this.builder.Length;
                    },
                    enumerable: true,
                    configurable: true
                });
                StringBuilderText.prototype.$get$ = function (position) {
                    if (position < 0 || position >= this.builder.Length) {
                        throw new System.ArgumentOutOfRangeException("position");
                    }
                    return this.builder.$get$(position);
                };
                StringBuilderText.prototype.ToString_4959 = function (span) {
                    if (span.End > this.builder.Length) {
                        throw new System.ArgumentOutOfRangeException("span");
                    }
                    return this.builder.ToString(span.Start, span.Length);
                };
                StringBuilderText.prototype.CopyTo = function (sourceIndex, destination, destinationIndex, count) {
                    this.builder.CopyTo(sourceIndex, destination, destinationIndex, count);
                };
                return StringBuilderText;
            })(Text.SourceText);
            Text.StringBuilderText = StringBuilderText;
        })(Text = CodeAnalysis.Text || (CodeAnalysis.Text = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Text;
        (function (Text) {
            var StringText = (function (_super) {
                __extends(StringText, _super);
                function StringText() {
                    _super.call(this);
                }
                StringText.prototype.ctor_3448 = function (source, encodingOpt, checksum, checksumAlgorithm) {
                    if (checksum === void 0) { checksum = structDefault(System.Collections.Immutable.ImmutableArray); }
                    if (checksumAlgorithm === void 0) { checksumAlgorithm = 1 /* Sha1 */; }
                    _super.prototype.ctor_1670.call(this, checksum, checksumAlgorithm);
                    System.Diagnostics.Debug.Assert(source != null);
                    this.source = source;
                    this.encodingOpt = encodingOpt;
                    return this;
                };
                Object.defineProperty(StringText.prototype, "Encoding", {
                    get: function () {
                        return this.encodingOpt;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StringText.prototype, "Source", {
                    get: function () {
                        return this.source;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(StringText.prototype, "Length", {
                    get: function () {
                        return this.Source.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                StringText.prototype.$get$ = function (position) {
                    return this.source[position];
                };
                StringText.prototype.ToString_4959 = function (span) {
                    if (span.End > this.Source.length) {
                        throw new System.ArgumentOutOfRangeException("span");
                    }
                    if (span.Start == 0 && span.Length == this.Length) {
                        return this.Source;
                    }
                    else {
                        return this.Source.substr(span.Start, span.Length);
                    }
                };
                StringText.prototype.CopyTo = function (sourceIndex, destination, destinationIndex, count) {
                    this.Source.CopyTo(sourceIndex, destination, destinationIndex, count);
                };
                StringText.prototype.Write_5564 = function (textWriter, span, cancellationToken) {
                    if (cancellationToken === void 0) { cancellationToken = structDefault(System.Threading.CancellationToken); }
                    if (span.Start == 0 && span.End == this.Length) {
                        textWriter.WriteString(this.Source);
                    }
                    else {
                        _super.prototype.Write_5564.call(this, textWriter, span, cancellationToken);
                    }
                };
                return StringText;
            })(Text.SourceText);
            Text.StringText = StringText;
        })(Text = CodeAnalysis.Text || (CodeAnalysis.Text = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Text;
        (function (Text) {
            var SubText = (function (_super) {
                __extends(SubText, _super);
                function SubText() {
                    _super.call(this);
                    this.span = structDefault(Text.TextSpan);
                }
                SubText.prototype.ctor_1484 = function (text, span) {
                    _super.prototype.ctor_1670.call(this, structDefault(System.Collections.Immutable.ImmutableArray), text.ChecksumAlgorithm, null);
                    if (text == null) {
                        throw new System.ArgumentNullException('text');
                    }
                    if (span.Start < 0 || span.Start >= text.Length || span.End < 0 || span.End > text.Length) {
                        throw new System.ArgumentException('span');
                    }
                    this.text = text;
                    this.span = span;
                    return this;
                };
                Object.defineProperty(SubText.prototype, "Encoding", {
                    get: function () {
                        return this.text.Encoding;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SubText.prototype, "UnderlyingText", {
                    get: function () {
                        return this.text;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SubText.prototype, "UnderlyingSpan", {
                    get: function () {
                        return this.span;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SubText.prototype, "Length", {
                    get: function () {
                        return this.span.Length;
                    },
                    enumerable: true,
                    configurable: true
                });
                SubText.prototype.$get$ = function (position) {
                    if (position < 0 || position > this.Length) {
                        throw new System.ArgumentOutOfRangeException("position");
                    }
                    return this.text.$get$(this.span.Start + position);
                };
                SubText.prototype.ToString_4959 = function (span) {
                    this.CheckSubSpan(span);
                    return this.text.ToString_4959(this.GetCompositeSpan(span.Start, span.Length));
                };
                SubText.prototype.GetSubText_1692 = function (span) {
                    this.CheckSubSpan(span);
                    return new SubText().ctor_1484(this.text, this.GetCompositeSpan(span.Start, span.Length));
                };
                SubText.prototype.CopyTo = function (sourceIndex, destination, destinationIndex, count) {
                    var span = this.GetCompositeSpan(sourceIndex, count);
                    this.text.CopyTo(span.Start, destination, destinationIndex, span.Length);
                };
                SubText.prototype.GetCompositeSpan = function (start, length) {
                    var compositeStart = System.Math.Min(this.text.Length, this.span.Start + start);
                    var compositeEnd = System.Math.Min(this.text.Length, compositeStart + length);
                    return new Text.TextSpan().ctor_1506(compositeStart, compositeEnd - compositeStart);
                };
                return SubText;
            })(Text.SourceText);
            Text.SubText = SubText;
        })(Text = CodeAnalysis.Text || (CodeAnalysis.Text = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Text;
        (function (Text) {
            var TextChange = (function () {
                function TextChange() {
                    this.Span = structDefault(Text.TextSpan);
                }
                TextChange.prototype.ctor_1791 = function (span, newText) {
                    if (newText == null) {
                        throw new System.ArgumentNullException("newText");
                    }
                    this.Span = span;
                    this.NewText = newText;
                    return this;
                };
                TextChange.prototype.ToString = function () {
                    return System.String.Format("{0}: {{ {1}, \"{2}\" }}", __classOf(this).name, this.Span, this.NewText);
                };
                TextChange.prototype.Equals = function (obj) {
                    return obj instanceof TextChange && this.Equals_8738(obj);
                };
                TextChange.prototype.Equals_8738 = function (other) {
                    return System.Collections.Generic.EqualityComparer.Default.Equals(this.Span, other.Span) && System.Collections.Generic.EqualityComparer.Default.Equals(this.NewText, other.NewText);
                };
                TextChange.prototype.GetHashCode = function () {
                    return Roslyn.Utilities.Hash.Combine_1641(this.Span.GetHashCode(), this.NewText.GetHashCode());
                };
                TextChange.prototype.op_Equality = function (right) {
                    var left = this;
                    return left.Equals_8738(right);
                };
                TextChange.prototype.op_Inequality = function (right) {
                    var left = this;
                    return !(left.op_Equality(right));
                };
                TextChange.op_Implicit_9951 = function (change) {
                    return new Text.TextChangeRange().ctor_4786(change.Span, change.NewText.length);
                };
                TextChange.NoChanges = Roslyn.Utilities.SpecializedCollections.EmptyReadOnlyList();
                return TextChange;
            })();
            Text.TextChange = TextChange;
        })(Text = CodeAnalysis.Text || (CodeAnalysis.Text = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Text;
        (function (Text) {
            var TextChangeEventArgs = (function (_super) {
                __extends(TextChangeEventArgs, _super);
                function TextChangeEventArgs() {
                    _super.call(this);
                }
                TextChangeEventArgs.prototype.ctor_1051 = function (oldText, newText, changes) {
                    if (changes == null || Roslyn.Utilities.EnumerableExtensions.IsEmpty_9700(changes)) {
                        throw new System.ArgumentException("changes");
                    }
                    this.OldText = oldText;
                    this.NewText = newText;
                    this.Changes = System.Collections.Immutable.ImmutableArray.ToImmutableArray(changes);
                    return this;
                };
                TextChangeEventArgs.prototype.ctor_1283 = function (oldText, newText) {
                    var changes = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        changes[_i - 2] = arguments[_i];
                    }
                    this.ctor_1051(oldText, newText, changes);
                    return this;
                };
                return TextChangeEventArgs;
            })(System.EventArgs);
            Text.TextChangeEventArgs = TextChangeEventArgs;
        })(Text = CodeAnalysis.Text || (CodeAnalysis.Text = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Text;
        (function (Text) {
            var TextChangeRange = (function () {
                function TextChangeRange() {
                    this.Span = structDefault(Text.TextSpan);
                    this.NewLength = 0;
                }
                TextChangeRange.prototype.ctor_4786 = function (span, newLength) {
                    if (newLength < 0) {
                        throw new System.ArgumentOutOfRangeException("newLength");
                    }
                    this.Span = span;
                    this.NewLength = newLength;
                    return this;
                };
                TextChangeRange.prototype.Equals_5196 = function (other) {
                    return other.Span.op_Equality(this.Span) && other.NewLength == this.NewLength;
                };
                TextChangeRange.prototype.Equals = function (obj) {
                    return obj instanceof TextChangeRange && this.Equals_5196(obj);
                };
                TextChangeRange.prototype.GetHashCode = function () {
                    return Roslyn.Utilities.Hash.Combine_1641(this.NewLength, this.Span.GetHashCode());
                };
                TextChangeRange.prototype.op_Equality = function (right) {
                    var left = this;
                    return left.Equals_5196(right);
                };
                TextChangeRange.prototype.op_Inequality = function (right) {
                    var left = this;
                    return !(left.op_Equality(right));
                };
                TextChangeRange.Collapse = function (changes) {
                    var diff = 0;
                    var start = Int32.MaxValue;
                    var end = 0;
                    var changeEnumerator = changes.GetEnumerator();
                    try {
                        while (changeEnumerator.MoveNext()) {
                            var change = changeEnumerator.Current;
                            diff += change.NewLength - change.Span.Length;
                            if (change.Span.Start < start) {
                                start = change.Span.Start;
                            }
                            if (change.Span.End > end) {
                                end = change.Span.End;
                            }
                        }
                    }
                    finally {
                        if (changeEnumerator !== null)
                            changeEnumerator.Dispose();
                    }
                    if (start > end) {
                        return structDefault(TextChangeRange);
                    }
                    var combined = Text.TextSpan.FromBounds(start, end);
                    var newLen = combined.Length + diff;
                    return new TextChangeRange().ctor_4786(combined, newLen);
                };
                TextChangeRange.NoChanges = Roslyn.Utilities.SpecializedCollections.EmptyReadOnlyList();
                return TextChangeRange;
            })();
            Text.TextChangeRange = TextChangeRange;
        })(Text = CodeAnalysis.Text || (CodeAnalysis.Text = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Text;
        (function (Text) {
            var TextLine = (function () {
                function TextLine() {
                    this.start = 0;
                    this.endIncludingBreaks = 0;
                }
                TextLine.prototype.ctor_9479 = function (text, start, endIncludingBreaks) {
                    this.text = text;
                    this.start = start;
                    this.endIncludingBreaks = endIncludingBreaks;
                    return this;
                };
                TextLine.FromSpan = function (text, span) {
                    if (text == null) {
                        throw new System.ArgumentNullException("text");
                    }
                    if (span.Start > text.Length || span.Start < 0 || span.End > text.Length) {
                        throw new System.ArgumentOutOfRangeException("span");
                    }
                    if (text.Length > 0) {
                        if (span.Start > 0 && !Text.TextUtilities.IsAnyLineBreakCharacter(text.$get$(span.Start - 1))) {
                            throw new System.ArgumentOutOfRangeException(CodeAnalysis.CodeAnalysisResources.SpanDoesNotIncludeStartOfLine);
                        }
                        var endIncludesLineBreak = false;
                        if (span.End > span.Start) {
                            endIncludesLineBreak = Text.TextUtilities.IsAnyLineBreakCharacter(text.$get$(span.End - 1));
                        }
                        if (!endIncludesLineBreak && span.End < text.Length) {
                            var lineBreakLen = Text.TextUtilities.GetLengthOfLineBreak(text, span.End);
                            if (lineBreakLen > 0) {
                                endIncludesLineBreak = true;
                                span = new Text.TextSpan().ctor_1506(span.Start, span.Length + lineBreakLen);
                            }
                        }
                        if (span.End < text.Length && !endIncludesLineBreak) {
                            throw new System.ArgumentOutOfRangeException(CodeAnalysis.CodeAnalysisResources.SpanDoesNotIncludeEndOfLine);
                        }
                        return new TextLine().ctor_9479(text, span.Start, span.End);
                    }
                    else {
                        return new TextLine().ctor_9479(text, 0, 0);
                    }
                };
                Object.defineProperty(TextLine.prototype, "Text", {
                    get: function () {
                        return this.text;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextLine.prototype, "LineNumber", {
                    get: function () {
                        if (this.text != null) {
                            return this.text.Lines.IndexOf(this.start);
                        }
                        else {
                            return 0;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextLine.prototype, "Start", {
                    get: function () {
                        return this.start;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextLine.prototype, "End", {
                    get: function () {
                        return this.endIncludingBreaks - this.LineBreakLength;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextLine.prototype, "LineBreakLength", {
                    get: function () {
                        if (this.text == null || this.text.Length == 0 || this.endIncludingBreaks == this.start) {
                            return 0;
                        }
                        else {
                            var startLineBreak = 0;
                            var lineBreakLength = 0;
                            var startLineBreak_ref0 = { refObj: startLineBreak };
                            var lineBreakLength_ref1 = { refObj: lineBreakLength };
                            Text.TextUtilities.GetStartAndLengthOfLineBreakEndingAt(this.text, this.endIncludingBreaks - 1, startLineBreak_ref0, lineBreakLength_ref1);
                            startLineBreak = startLineBreak_ref0.refObj;
                            lineBreakLength = lineBreakLength_ref1.refObj;
                            ;
                            return lineBreakLength;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextLine.prototype, "EndIncludingLineBreak", {
                    get: function () {
                        return this.endIncludingBreaks;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextLine.prototype, "Span", {
                    get: function () {
                        return Text.TextSpan.FromBounds(this.Start, this.End);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextLine.prototype, "SpanIncludingLineBreak", {
                    get: function () {
                        return Text.TextSpan.FromBounds(this.Start, this.EndIncludingLineBreak);
                    },
                    enumerable: true,
                    configurable: true
                });
                TextLine.prototype.ToString = function () {
                    if (this.text == null || this.text.Length == 0) {
                        return System.String.Empty;
                    }
                    else {
                        return this.text.ToString_4959(this.Span);
                    }
                };
                TextLine.prototype.op_Equality = function (right) {
                    var left = this;
                    return left.Equals_4451(right);
                };
                TextLine.prototype.op_Inequality = function (right) {
                    var left = this;
                    return !left.Equals_4451(right);
                };
                TextLine.prototype.Equals_4451 = function (other) {
                    return other.text == this.text && other.start == this.start && other.endIncludingBreaks == this.endIncludingBreaks;
                };
                TextLine.prototype.Equals = function (obj) {
                    if (obj instanceof TextLine) {
                        return this.Equals_4451(obj);
                    }
                    return false;
                };
                TextLine.prototype.GetHashCode = function () {
                    return Roslyn.Utilities.Hash.Combine_7656(this.text, Roslyn.Utilities.Hash.Combine_1641(this.start, this.endIncludingBreaks));
                };
                return TextLine;
            })();
            Text.TextLine = TextLine;
        })(Text = CodeAnalysis.Text || (CodeAnalysis.Text = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Text;
        (function (Text) {
            var TextSpan = (function () {
                function TextSpan() {
                    this.start = 0;
                    this.length = 0;
                }
                TextSpan.prototype.ctor_1506 = function (start, length) {
                    if (start < 0) {
                        throw new System.ArgumentOutOfRangeException("start");
                    }
                    if (start + length < start) {
                        throw new System.ArgumentOutOfRangeException("length");
                    }
                    this.start = start;
                    this.length = length;
                    return this;
                };
                Object.defineProperty(TextSpan.prototype, "Start", {
                    get: function () {
                        return this.start;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextSpan.prototype, "End", {
                    get: function () {
                        return this.start + this.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextSpan.prototype, "Length", {
                    get: function () {
                        return this.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TextSpan.prototype, "IsEmpty", {
                    get: function () {
                        return this.Length == 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                TextSpan.prototype.Contains_2103 = function (position) {
                    return (((position - this.start) >>> 0) < this.length);
                };
                TextSpan.prototype.Contains_1915 = function (span) {
                    return span.Start >= this.start && span.End <= this.End;
                };
                TextSpan.prototype.OverlapsWith = function (span) {
                    var overlapStart = System.Math.Max(this.start, span.Start);
                    var overlapEnd = System.Math.Min(this.End, span.End);
                    return overlapStart < overlapEnd;
                };
                TextSpan.prototype.Overlap = function (span) {
                    var overlapStart = System.Math.Max(this.start, span.Start);
                    var overlapEnd = System.Math.Min(this.End, span.End);
                    return overlapStart < overlapEnd ? TextSpan.FromBounds(overlapStart, overlapEnd) : null;
                };
                TextSpan.prototype.IntersectsWith_1989 = function (span) {
                    return span.Start <= this.End && span.End >= this.start;
                };
                TextSpan.prototype.IntersectsWith_1739 = function (position) {
                    return (((position - this.start) >>> 0) <= this.length);
                };
                TextSpan.prototype.Intersection = function (span) {
                    var intersectStart = System.Math.Max(this.start, span.Start);
                    var intersectEnd = System.Math.Min(this.End, span.End);
                    return intersectStart <= intersectEnd ? TextSpan.FromBounds(intersectStart, intersectEnd) : null;
                };
                TextSpan.FromBounds = function (start, end) {
                    if (start < 0) {
                        throw new System.ArgumentOutOfRangeException("start", CodeAnalysis.CodeAnalysisResources.StartMustNotBeNegative);
                    }
                    if (end < start) {
                        throw new System.ArgumentException("end", CodeAnalysis.CodeAnalysisResources.EndMustNotBeLessThanStart);
                    }
                    return new TextSpan().ctor_1506(start, end - start);
                };
                TextSpan.prototype.op_Equality = function (right) {
                    var left = this;
                    return left.Equals_9598(right);
                };
                TextSpan.prototype.op_Inequality = function (right) {
                    var left = this;
                    return !left.Equals_9598(right);
                };
                TextSpan.prototype.Equals_9598 = function (other) {
                    return this.start == other.start && this.length == other.length;
                };
                TextSpan.prototype.Equals = function (obj) {
                    return obj instanceof TextSpan && this.Equals_9598(obj);
                };
                TextSpan.prototype.GetHashCode = function () {
                    return Roslyn.Utilities.Hash.Combine_1641(this.start, this.length);
                };
                TextSpan.prototype.ToString = function () {
                    return System.String.Format("[{0}..{1})", this.Start, this.End);
                };
                TextSpan.prototype.CompareTo = function (other) {
                    var diff = this.start - other.start;
                    if (diff != 0) {
                        return diff;
                    }
                    return this.length - other.length;
                };
                return TextSpan;
            })();
            Text.TextSpan = TextSpan;
        })(Text = CodeAnalysis.Text || (CodeAnalysis.Text = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var Text;
        (function (Text) {
            var TextUtilities = (function () {
                function TextUtilities() {
                }
                TextUtilities.GetLengthOfLineBreak = function (text, index) {
                    var c = text.$get$(index);
                    var bias = '\r'.charCodeAt(0) + 1;
                    if ((c.charCodeAt(0) - bias) <= (127 - bias)) {
                        return 0;
                    }
                    return TextUtilities.GetLengthOfLineBreakSlow(text, index, c);
                };
                TextUtilities.GetLengthOfLineBreakSlow = function (text, index, c) {
                    if (c == '\r') {
                        var next = index + 1;
                        return (next < text.Length) && '\n' == text.$get$(next) ? 2 : 1;
                    }
                    else if (TextUtilities.IsAnyLineBreakCharacter(c)) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                };
                TextUtilities.GetStartAndLengthOfLineBreakEndingAt = function (text, index, startLinebreak, lengthLinebreak) {
                    var c = text.$get$(index);
                    if (c == '\n') {
                        if (index > 0 && text.$get$(index - 1) == '\r') {
                            startLinebreak.refObj = index - 1;
                            lengthLinebreak.refObj = 2;
                        }
                        else {
                            startLinebreak.refObj = index;
                            lengthLinebreak.refObj = 1;
                        }
                    }
                    else if (TextUtilities.IsAnyLineBreakCharacter(c)) {
                        startLinebreak.refObj = index;
                        lengthLinebreak.refObj = 1;
                    }
                    else {
                        startLinebreak.refObj = index + 1;
                        lengthLinebreak.refObj = 0;
                    }
                };
                TextUtilities.IsAnyLineBreakCharacter = function (c) {
                    return c == '\n' || c == '\r' || c == '\u0085' || c == '\u2028' || c == '\u2029';
                };
                return TextUtilities;
            })();
            Text.TextUtilities = TextUtilities;
        })(Text = CodeAnalysis.Text || (CodeAnalysis.Text = {}));
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var CodeAnalysis;
    (function (CodeAnalysis) {
        var XmlCharType = (function () {
            function XmlCharType() {
            }
            XmlCharType.charProperties = function (i) {
                var table = XmlCharType.s_charPropertiesIndex[i.CharCode() >> XmlCharType.innerSizeBits];
                return XmlCharType.s_charProperties[((table << XmlCharType.innerSizeBits) + (i.CharCode() & XmlCharType.innerSizeMask))];
            };
            XmlCharType.IsWhiteSpace = function (ch) {
                return (XmlCharType.charProperties(ch) & XmlCharType.fWhitespace) != 0;
            };
            XmlCharType.IsExtender = function (ch) {
                return (ch.charCodeAt(0) == 0xb7);
            };
            XmlCharType.IsNCNameSingleChar = function (ch) {
                return (XmlCharType.charProperties(ch) & XmlCharType.fNCNameSC) != 0;
            };
            XmlCharType.IsStartNCNameSingleChar = function (ch) {
                return (XmlCharType.charProperties(ch) & XmlCharType.fNCStartNameSC) != 0;
            };
            XmlCharType.IsNameSingleChar = function (ch) {
                return XmlCharType.IsNCNameSingleChar(ch) || ch == ':';
            };
            XmlCharType.IsStartNameSingleChar = function (ch) {
                return XmlCharType.IsStartNCNameSingleChar(ch) || ch == ':';
            };
            XmlCharType.IsCharData = function (ch) {
                return (XmlCharType.charProperties(ch) & XmlCharType.fCharData) != 0;
            };
            XmlCharType.IsPubidChar = function (ch) {
                if (ch.CharCode() < 0x80) {
                    return (XmlCharType.s_PublicIdBitmap[ch.CharCode() >> 4].charCodeAt(0) & (1 << (ch.CharCode() & 0xF))) != 0;
                }
                return false;
            };
            XmlCharType.IsTextChar = function (ch) {
                return (XmlCharType.charProperties(ch) & XmlCharType.fText) != 0;
            };
            XmlCharType.IsAttributeValueChar = function (ch) {
                return (XmlCharType.charProperties(ch) & XmlCharType.fAttrValue) != 0;
            };
            XmlCharType.IsLetter = function (ch) {
                return (XmlCharType.charProperties(ch) & XmlCharType.fLetter) != 0;
            };
            XmlCharType.IsNCNameCharXml4e = function (ch) {
                return (XmlCharType.charProperties(ch) & XmlCharType.fNCNameXml4e) != 0;
            };
            XmlCharType.IsStartNCNameCharXml4e = function (ch) {
                return XmlCharType.IsLetter(ch) || ch == '_';
            };
            XmlCharType.IsNameCharXml4e = function (ch) {
                return XmlCharType.IsNCNameCharXml4e(ch) || ch == ':';
            };
            XmlCharType.IsStartNameCharXml4e = function (ch) {
                return XmlCharType.IsStartNCNameCharXml4e(ch) || ch == ':';
            };
            XmlCharType.IsDigit = function (ch) {
                return XmlCharType.InRangePrivate(ch.charCodeAt(0), 0x30, 0x39);
            };
            XmlCharType.IsHexDigit = function (ch) {
                return XmlCharType.InRangePrivate(ch.charCodeAt(0), 0x30, 0x39) || XmlCharType.InRange(ch, 'a', 'f') || XmlCharType.InRange(ch, 'A', 'F');
            };
            XmlCharType.IsHighSurrogate = function (ch) {
                return XmlCharType.InRangePrivate(ch, XmlCharType.SurHighStart, XmlCharType.SurHighEnd);
            };
            XmlCharType.IsLowSurrogate = function (ch) {
                return XmlCharType.InRangePrivate(ch, XmlCharType.SurLowStart, XmlCharType.SurLowEnd);
            };
            XmlCharType.IsSurrogate = function (ch) {
                return XmlCharType.InRangePrivate(ch, XmlCharType.SurHighStart, XmlCharType.SurLowEnd);
            };
            XmlCharType.CombineSurrogateChar = function (lowChar, highChar) {
                return (lowChar - XmlCharType.SurLowStart) | ((highChar - XmlCharType.SurHighStart) << 10) + 0x10000;
            };
            XmlCharType.SplitSurrogateChar = function (combinedChar, lowChar, highChar) {
                var v = combinedChar - 0x10000;
                lowChar.refObj = String.fromCharCode(XmlCharType.SurLowStart + v % 1024);
                highChar.refObj = String.fromCharCode(XmlCharType.SurHighStart + (v / 1024 | 0));
            };
            XmlCharType.IsOnlyWhitespace = function (str) {
                return XmlCharType.IsOnlyWhitespaceWithPos(str) == -1;
            };
            XmlCharType.IsOnlyWhitespaceWithPos = function (str) {
                if (str != null) {
                    for (var i = 0; i < str.length; i++) {
                        if ((XmlCharType.charProperties(str[i]) & XmlCharType.fWhitespace) == 0) {
                            return i;
                        }
                    }
                }
                return -1;
            };
            XmlCharType.IsOnlyCharData = function (str) {
                if (str != null) {
                    for (var i = 0; i < str.length; i++) {
                        if ((XmlCharType.charProperties(str[i]) & XmlCharType.fCharData) == 0) {
                            if (i + 1 >= str.length || !(XmlCharType.IsHighSurrogate(str.charCodeAt(i)) && XmlCharType.IsLowSurrogate(str.charCodeAt(i + 1)))) {
                                return i;
                            }
                            else {
                                i++;
                            }
                        }
                    }
                }
                return -1;
            };
            XmlCharType.IsPublicId = function (str) {
                if (str != null) {
                    for (var i = 0; i < str.length; i++) {
                        if (!XmlCharType.IsPubidChar(str[i])) {
                            return i;
                        }
                    }
                }
                return -1;
            };
            XmlCharType.IsOnlyDigits = function (param0, param1, param2) {
                if (typeof param0 === 'string') {
                    return XmlCharType.IsOnlyDigits_overload1(param0, param1, param2);
                }
                if ((param0 instanceof Array || param0 === null)) {
                    return XmlCharType.IsOnlyDigits_overload0(param0, param1, param2);
                }
                throw new Error('overload failed');
            };
            XmlCharType.IsOnlyDigits_overload0 = function (chars, startPos, len) {
                System.Diagnostics.Debug.Assert(chars != null);
                System.Diagnostics.Debug.Assert(startPos + len <= chars.length);
                System.Diagnostics.Debug.Assert(startPos <= chars.length);
                for (var i = startPos; i < startPos + len; i++) {
                    if (!XmlCharType.IsDigit(chars[i])) {
                        return false;
                    }
                }
                return true;
            };
            XmlCharType.IsOnlyDigits_overload1 = function (str, startPos, len) {
                System.Diagnostics.Debug.Assert(str != null);
                System.Diagnostics.Debug.Assert(startPos + len <= str.length);
                System.Diagnostics.Debug.Assert(startPos <= str.length);
                for (var i = startPos; i < startPos + len; i++) {
                    if (!XmlCharType.IsDigit(str[i])) {
                        return false;
                    }
                }
                return true;
            };
            XmlCharType.InRange = function (value, start, end) {
                System.Diagnostics.Debug.Assert(start <= end);
                return (((value.charCodeAt(0) - start.charCodeAt(0)) >>> 0) <= ((end.charCodeAt(0) - start.charCodeAt(0)) >>> 0));
            };
            XmlCharType.InRangePrivate = function (value, start, end) {
                System.Diagnostics.Debug.Assert(start <= end);
                return (((value - start) >>> 0) <= ((end - start)) >>> 0);
            };
            XmlCharType.SurHighStart = 0xd800;
            XmlCharType.SurHighEnd = 0xdbff;
            XmlCharType.SurLowStart = 0xdc00;
            XmlCharType.SurLowEnd = 0xdfff;
            XmlCharType.SurMask = 0xfc00;
            XmlCharType.fWhitespace = 1;
            XmlCharType.fLetter = 2;
            XmlCharType.fNCStartNameSC = 4;
            XmlCharType.fNCNameSC = 8;
            XmlCharType.fCharData = 16;
            XmlCharType.fNCNameXml4e = 32;
            XmlCharType.fText = 64;
            XmlCharType.fAttrValue = 128;
            XmlCharType.s_PublicIdBitmap = "\u2400\u0000\uffbb\uafff\uffff\u87ff\ufffe\u07ff".split('');
            XmlCharType.CharPropertiesSize = TSChar.MaxValue.charCodeAt(0) + 1;
            XmlCharType.innerSizeBits = 8;
            XmlCharType.innerSize = 1 << XmlCharType.innerSizeBits;
            XmlCharType.innerSizeMask = XmlCharType.innerSize - 1;
            XmlCharType.s_charPropertiesIndex = new Array(0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f, 0x10, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x11, 0x12, 0x13, 0x14, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x15, 0x16, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x18, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x17, 0x19, 0x1a, 0x1a, 0x1a, 0x1a, 0x1a, 0x1a, 0x1a, 0x1a, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x1b);
            XmlCharType.s_charProperties = new Array(0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x11, 0x11, 0x00, 0x00, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xd1, 0xd0, 0x50, 0xd0, 0xd0, 0xd0, 0x10, 0x50, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0x10, 0xd0, 0x50, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0x90, 0xd0, 0xfc, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xf8, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xfe, 0xd0, 0xfe, 0xd0, 0xfe, 0xd0, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xfe, 0xfe, 0xd0, 0xd0, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xf8, 0xf8, 0xf8, 0xd0, 0xf8, 0xd0, 0xf8, 0xf8, 0xd0, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xfe, 0xfe, 0xf8, 0xf8, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xf8, 0xfe, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xf8, 0xf8, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xfe, 0xfe, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xf8, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xf8, 0xf8, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xf8, 0xf8, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xd0, 0xd0, 0xf8, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xf8, 0xfe, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xf8, 0xf8, 0xf8, 0xd0, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xfe, 0xfe, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xf8, 0xfe, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xd0, 0xfe, 0xd0, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xf8, 0xf8, 0xf8, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xf8, 0xf8, 0xf8, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xd0, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xf8, 0xfe, 0xfe, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xd0, 0xfe, 0xd0, 0xd0, 0xfe, 0xfe, 0xd0, 0xfe, 0xd0, 0xd0, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xd0, 0xfe, 0xd0, 0xd0, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xd0, 0xfe, 0xf8, 0xfe, 0xfe, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xf8, 0xf8, 0xfe, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xf8, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xd0, 0xf8, 0xd0, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xf8, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xd0, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xd0, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xd0, 0xfe, 0xd0, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xd0, 0xfe, 0xd0, 0xfe, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xd0, 0xfe, 0xd0, 0xfe, 0xd0, 0xfe, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xd0, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xd0, 0xd0, 0xfe, 0xd0, 0xd0, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xd0, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xd0, 0xfe, 0xd0, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xd0, 0xd0, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xd0, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xf8, 0xf8, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xf8, 0xf8, 0xd0, 0xd0, 0xf8, 0xf8, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xf8, 0xf8, 0xf8, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0xd0, 0x00, 0x00);
            return XmlCharType;
        })();
        CodeAnalysis.XmlCharType = XmlCharType;
    })(CodeAnalysis = Microsoft.CodeAnalysis || (Microsoft.CodeAnalysis = {}));
})(Microsoft || (Microsoft = {}));
//# sourceMappingURL=Roslyn.Core.Parser.js.map