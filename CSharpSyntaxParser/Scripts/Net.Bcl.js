function StructArray(typeStruct, length) {
    var arr = new Array(length);
    InitArray(typeStruct, arr);
    return arr;
}
function InitArray(typeStruct, arr) {
    var defaultValue;
    if (typeStruct === Boolean) {
        defaultValue = false;
    }
    else if (typeStruct === Number) {
        defaultValue = 0;
    }
    else if (typeStruct === TSChar) {
        defaultValue = '';
    }
    else {
        for (var i = 0; i < arr.length; i++) {
            arr[i] = structDefault(typeStruct);
        }
        return;
    }
    for (var i = 0; i < arr.length; i++) {
        arr[i] = defaultValue;
    }
}
Array.prototype.CopyTo = function (arr, index) {
    TSArray.Copy_1(this, 0, arr, index, this.length);
};
Array.prototype.GetHashCode = function () {
    if (this.myHash === void 0) {
        this.myHash = Gb.NextHashCode();
    }
    return this.myHash;
};
Array.prototype.GetEnumerator = function () {
    return new ArrayEnumerator(this);
};
Array.prototype.$get$ = function (index) {
    return this[index];
};
Array.prototype.$set$ = function (index, value) {
    return this[index] = value;
};
Array.prototype.IndexOf = function (item) {
    if (Gb.HasEqualsOperator(item)) {
        for (var i = 0; i < this.length; i++) {
            if (Gb.Equals(this[i], item)) {
                return i;
            }
        }
        return -1;
    }
    for (var i = 0; i < this.length; i++) {
        if (this[i] == item) {
            return i;
        }
    }
    return -1;
};
Object.defineProperty(Array.prototype, "Count", {
    get: function () {
        return this.length;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(Array.prototype, "Length", {
    get: function () {
        return this.length;
    },
    enumerable: true,
    configurable: true
});
var ArrayEnumerator = (function () {
    function ArrayEnumerator(array) {
        this.array = array;
        this.position = -1;
    }
    Object.defineProperty(ArrayEnumerator.prototype, "Current", {
        get: function () {
            return this.array[this.position];
        },
        enumerable: true,
        configurable: true
    });
    ArrayEnumerator.prototype.MoveNext = function () {
        this.position++;
        return this.position < this.array.length;
    };
    ArrayEnumerator.prototype.Reset = function () {
        this.position = -1;
    };
    ArrayEnumerator.prototype.Dispose = function () {
        this.array = null;
    };
    return ArrayEnumerator;
})();
var __extends = function (d, b) {
    for (var p in b) {
        var descriptor = Object.getOwnPropertyDescriptor(b, p);
        if (descriptor === void 0)
            continue;
        if (descriptor.value !== void 0) {
            d[p] = b[p];
        }
    }
    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
function __init(obj, option) {
    for (var o in option) {
        obj[o] = option[o];
    }
    return obj;
}
function __ToString(obj) {
    if (obj.ToString !== void 0) {
        return obj.ToString();
    }
    return obj.toString();
}
function _foreach(source, func) {
    var enumerator = source.GetEnumerator();
    try {
        while (enumerator.MoveNext()) {
            var current = enumerator.Current;
            func(current);
        }
    }
    finally {
        enumerator.Dispose();
    }
}
function __unWrapArray(arr) {
    if (arr.length == 1 && arr[0] instanceof Array) {
        return __unWrapArray(arr[0]);
    }
    return arr;
}
function ReferenceEquals(ar1, ar2) {
    return ar1 === ar2;
}
function structDefault(typeStruct) {
    return new typeStruct();
}
function __classOf(value) {
    return value.constructor;
}
function __classProOf(value) {
    return value.constructor;
}
function __classOfType(value, type) {
    return value.constructor === type;
}
function __className(value) {
    return __classOf(value).name;
}
function __as__(value, clss) {
    if (value instanceof clss) {
        return value;
    }
    return null;
}
function __charCode(str) {
    return str.charCodeAt(0);
}
function __byte(value) {
    return value & 0xff;
}
var UnknownType = (function () {
    function UnknownType() {
    }
    return UnknownType;
})();
var GbString = String;
var GbMath = Math;
function ArrayBufferToString(buffer) {
    return String.fromCharCode.apply(null, new Uint16Array(buffer));
}
function StringToArrayBuffer(str) {
    var buf = new ArrayBuffer(str.length * 2);
    var bufView = new Uint16Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}
function IsInt(n) {
    return n % 1 === 0;
}
var TSEvent = (function () {
    function TSEvent() {
        this.events = new Array();
    }
    TSEvent.prototype.Add = function (event) {
        this.events.push(event);
    };
    TSEvent.prototype.Remove = function (event) {
        var idx = this.events.indexOf(event);
        if (idx >= 0) {
            this.events.splice(idx, 1);
        }
    };
    Object.defineProperty(TSEvent.prototype, "Raise", {
        get: function () {
            return this.FuncRaise;
        },
        enumerable: true,
        configurable: true
    });
    TSEvent.prototype.FuncRaise = function (arg1, arg2, arg3, arg4) {
        for (var i = 0; i < this.events.length; i++) {
            this.events[i](arg1, arg2, arg3, arg4);
        }
    };
    return TSEvent;
})();
Boolean.prototype.GetHashCode = function () {
    return this ? 1 : 0;
};
Number.prototype.GetHashCode = function () {
    return this;
};
Number.prototype.CompareTo = function (value) {
    if (this > value)
        return 1;
    else if (this < value)
        return -1;
    return 0;
};
Number.prototype.ToString = function (format) {
    if (format === void 0) {
        return this.toString();
    }
    if (format instanceof System.Globalization.CultureInfo) {
        return this.toString();
    }
    if (isAll(format, '0')) {
        var result = this.toString();
        for (var i = result.length; i < format.length; i++) {
            result = "0" + result;
        }
        return result;
    }
    if (format.StartsWith("x")) {
        var length = parseInt(format.substr(1));
        var hexStr = this.toString(16);
        for (var i = hexStr.length; i < length; i++) {
            hexStr = "0" + hexStr;
        }
        return hexStr;
    }
    if (format.StartsWith("R")) {
        return this.toString();
    }
    throw new Error("not support");
};
function isAll(str, char) {
    var arr = str.split('');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != char) {
            return false;
        }
    }
    return true;
}
String.prototype.GetEnumerator = function () {
    var str = this;
    return str.split('').GetEnumerator();
};
String.prototype.StartsWith = function (value, comparison) {
    if (typeof comparison == 'undefined') {
        comparison = 0 /* CurrentCulture */;
    }
    var thisStr = this;
    var argStr = value;
    if (comparison == 1 /* CurrentCultureIgnoreCase */ || comparison == 3 /* InvariantCultureIgnoreCase */ || comparison == 5 /* OrdinalIgnoreCase */) {
        thisStr = System.String.ToLower(this);
        argStr = System.String.ToLower(value);
    }
    return thisStr.indexOf(argStr) == 0;
};
String.prototype.EndsWith = function (value, comparison) {
    if (typeof comparison == 'undefined') {
        comparison = 0 /* CurrentCulture */;
    }
    var thisStr = this;
    var argStr = value;
    if (comparison == 1 /* CurrentCultureIgnoreCase */ || comparison == 3 /* InvariantCultureIgnoreCase */ || comparison == 5 /* OrdinalIgnoreCase */) {
        thisStr = System.String.ToLower(this);
        argStr = System.String.ToLower(value);
    }
    var position = thisStr.length;
    position -= argStr.length;
    var lastIndex = thisStr.lastIndexOf(argStr);
    return lastIndex != -1 && lastIndex == position;
};
String.prototype.GetHashCode = function () {
    var hash = 0, i, chr, len;
    if (this.length == 0)
        return hash;
    for (i = 0, len = this.length; i < len; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0;
    }
    return hash;
};
String.prototype.CharCode = function () {
    return this.charCodeAt(0);
};
String.prototype.CopyTo = function (sourceIndex, destination, destinationIndex, count) {
    if (destination == null)
        throw new System.ArgumentNullException("destination");
    if (count < 0)
        throw new System.ArgumentOutOfRangeException("count", System.Environment.GetResourceString("ArgumentOutOfRange_NegativeCount"));
    if (sourceIndex < 0)
        throw new System.ArgumentOutOfRangeException("sourceIndex", System.Environment.GetResourceString("ArgumentOutOfRange_Index"));
    if (count > this.length - sourceIndex)
        throw new System.ArgumentOutOfRangeException("sourceIndex", System.Environment.GetResourceString("ArgumentOutOfRange_IndexCount"));
    if (destinationIndex > destination.length - count || destinationIndex < 0)
        throw new System.ArgumentOutOfRangeException("destinationIndex", System.Environment.GetResourceString("ArgumentOutOfRange_IndexCount"));
    var strThis = this;
    for (var i = 0; i < count; i++) {
        destination[i + destinationIndex] = strThis.charAt(i + sourceIndex);
    }
};
String.prototype.toString = function () {
    return this;
};
String.prototype.Equals = function (str2, comparison) {
    if (typeof comparison == 'undefined') {
        comparison = 0 /* CurrentCulture */;
    }
    var thisStr = this;
    var argStr = str2;
    if (comparison == 1 /* CurrentCultureIgnoreCase */ || comparison == 3 /* InvariantCultureIgnoreCase */ || comparison == 5 /* OrdinalIgnoreCase */) {
        thisStr = System.String.ToLower(this);
        argStr = System.String.ToLower(str2);
    }
    return thisStr == argStr;
};
var int = (function () {
    function int() {
    }
    int.MaxValue = 2147483647;
    int.MinValue = -2147483647;
    return int;
})();
var Int32 = (function () {
    function Int32() {
    }
    Int32.MaxValue = 2147483647;
    Int32.MinValue = -2147483647;
    return Int32;
})();
var UInt32 = (function () {
    function UInt32() {
    }
    UInt32.MaxValue = 4294967295;
    UInt32.MinValue = 0;
    return UInt32;
})();
var Int64 = (function () {
    function Int64() {
    }
    Int64.MaxValue = 9223372036854775807;
    Int64.MinValue = -9223372036854775808;
    return Int64;
})();
var Byte = (function () {
    function Byte() {
    }
    Byte.MaxValue = 0xFF;
    Byte.MinValue = 0;
    return Byte;
})();
var ushort = (function () {
    function ushort() {
    }
    ushort.MaxValue = 65535;
    ushort.MinValue = 0;
    return ushort;
})();
var uint = (function () {
    function uint() {
    }
    uint.MaxValue = 4294967295;
    uint.MinValue = 0;
    return uint;
})();
var TSChar = (function () {
    function TSChar() {
    }
    TSChar.MaxValue = String.fromCharCode(65535);
    return TSChar;
})();
var GenericStatic_Static = (function () {
    function GenericStatic_Static() {
        this.obj = new Object();
    }
    GenericStatic_Static.prototype.Get = function (clss) {
        var result = this.obj[clss];
        if (result == undefined) {
            return null;
        }
        return result;
    };
    GenericStatic_Static.prototype.RegisterOrGet = function (clss) {
        var result = this.obj[clss];
        if (result === void 0) {
            result = this.NewFunc();
            this.obj[clss] = result;
        }
        return result;
    };
    return GenericStatic_Static;
})();
var Gb = (function () {
    function Gb() {
    }
    Gb.GetEnumMembers = function (enumType) {
        var arr = new Array();
        for (var enumMember in enumType) {
            if (typeof enumMember === 'string') {
                arr.push({ key: enumMember, value: enumType[enumMember] });
            }
        }
        return arr;
    };
    Object.defineProperty(Gb, "HashCode", {
        get: function () {
            return Gb.InnerHashCode;
        },
        enumerable: true,
        configurable: true
    });
    Gb.NextHashCode = function () {
        return ++Gb.InnerHashCode;
    };
    Gb.HasEqualsOperator = function (val1) {
        return val1.hasOwnProperty('OperatorEquals');
    };
    Gb.Equals = function (val1, val2) {
        return val1.OperatorEquals(val2);
    };
    Gb.NotEqual = function (val1, val2) {
        return val1.OperatorNotEqual(val2);
    };
    Gb.StringFromChar = function (c, count) {
        var arr = new Array();
        for (var i = 0; i < count; i++) {
            arr.push(c);
        }
        return arr.join('');
    };
    Gb.StringFromCharArray = function (arr, start, length) {
        if (length > arr.length - start) {
            length = arr.length - start;
        }
        var newArr = new Array(length);
        for (var i = start; i < start + length; i++) {
            newArr[i - start] = arr[i];
        }
        return newArr.join('');
    };
    Gb.AssemblyName = 'RoslynTypeScript';
    Gb.Id = 0;
    Gb.InnerHashCode = 10;
    return Gb;
})();
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var System;
(function (System) {
    var Exception = (function (_super) {
        __extends(Exception, _super);
        function Exception(message) {
            _super.call(this, message);
            this.message = message;
            this.name = 'Exception';
            if (typeof message == 'undefined') {
                message = 'Exception';
            }
            this.message = message;
            this.stack = (new Error()).stack;
        }
        Exception.prototype.ToString = function () {
            return this.name + ': ' + this.message;
        };
        return Exception;
    })(Error);
    System.Exception = Exception;
})(System || (System = {}));
var System;
(function (System) {
    var SystemException = (function (_super) {
        __extends(SystemException, _super);
        function SystemException(message, param) {
            _super.call(this, message);
            this.message = message;
        }
        return SystemException;
    })(System.Exception);
    System.SystemException = SystemException;
})(System || (System = {}));
var System;
(function (System) {
    var ArgumentException = (function (_super) {
        __extends(ArgumentException, _super);
        function ArgumentException(message, param) {
            _super.call(this, message, param);
            this.message = message;
        }
        return ArgumentException;
    })(System.SystemException);
    System.ArgumentException = ArgumentException;
})(System || (System = {}));
var System;
(function (System) {
    var ArgumentNullException = (function (_super) {
        __extends(ArgumentNullException, _super);
        function ArgumentNullException(message, param) {
            _super.call(this, message, param);
            this.message = message;
        }
        return ArgumentNullException;
    })(System.ArgumentException);
    System.ArgumentNullException = ArgumentNullException;
})(System || (System = {}));
var System;
(function (System) {
    var ArgumentOutOfRangeException = (function (_super) {
        __extends(ArgumentOutOfRangeException, _super);
        function ArgumentOutOfRangeException(message, param) {
            _super.call(this, message, param);
            this.message = message;
        }
        return ArgumentOutOfRangeException;
    })(System.SystemException);
    System.ArgumentOutOfRangeException = ArgumentOutOfRangeException;
})(System || (System = {}));
var System;
(function (System) {
    var Assembly = (function () {
        function Assembly() {
        }
        Assembly.StaticConstructor = function () {
            Assembly.Default.Name = Gb.AssemblyName;
            return 1;
        };
        Object.defineProperty(Assembly.prototype, "FullName", {
            get: function () {
                return this.Name;
            },
            enumerable: true,
            configurable: true
        });
        Assembly.Default = new Assembly();
        Assembly.CallStaticConstructor = Assembly.StaticConstructor();
        return Assembly;
    })();
    System.Assembly = Assembly;
})(System || (System = {}));
var System;
(function (System) {
    var BitConverter = (function () {
        function BitConverter() {
        }
        Object.defineProperty(BitConverter, "IsLittleEndian", {
            get: function () {
                return true;
            },
            enumerable: true,
            configurable: true
        });
        return BitConverter;
    })();
    System.BitConverter = BitConverter;
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Comparer = (function () {
            function Comparer() {
            }
            Comparer.prototype.Compare = function (x, y) {
                if (x == y)
                    return 0;
                if (x == null)
                    return -1;
                if (y == null)
                    return 1;
                if (typeof x == 'number' && typeof y == 'number') {
                    var xNumber = x;
                    var yNumber = y;
                    if (xNumber == yNumber)
                        return 0;
                    if (xNumber > yNumber)
                        return 1;
                    else
                        return -1;
                }
                if (typeof x == 'string' && typeof y == 'string') {
                    var xString = x;
                    var yString = y;
                    return xString.localeCompare(yString);
                }
                if (typeof x["CompareTo"] != 'undefined') {
                    var ia = x;
                    return ia.CompareTo(y);
                }
                if (typeof y["CompareTo"] != 'undefined') {
                    var ib = y;
                    return -ib.CompareTo(x);
                }
            };
            Comparer.Default = new Comparer();
            return Comparer;
        })();
        Collections.Comparer = Comparer;
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Generic;
        (function (Generic) {
            var Dictionary = (function () {
                function Dictionary(dic) {
                    this.obj = new Object();
                    if (typeof dic == 'undefined') {
                        return;
                    }
                    for (var key in dic.obj) {
                        this.obj[key] = dic.obj[key];
                    }
                }
                Dictionary.prototype.Clone = function () {
                    return new Dictionary(this);
                };
                Object.defineProperty(Dictionary.prototype, "Count", {
                    get: function () {
                        return this.Keys.Count;
                    },
                    enumerable: true,
                    configurable: true
                });
                Dictionary.prototype.Clear = function () {
                    this.obj = new Object();
                };
                Dictionary.prototype.$get$ = function (key) {
                    if (typeof key === 'number' || typeof key == 'string') {
                        if (this.ContainsKey(key)) {
                            return this.obj[key];
                        }
                        throw new System.Error("don't have this key");
                    }
                    throw new System.Error("don't have this key");
                };
                Dictionary.prototype.$set$ = function (key, value) {
                    if (typeof key == 'string' || typeof key == 'number') {
                        this.obj[key] = value;
                        return;
                    }
                    throw new System.Error('not support');
                };
                Object.defineProperty(Dictionary.prototype, "Keys", {
                    get: function () {
                        var keys = new Generic.List();
                        for (var key in this.obj) {
                            keys.Add(key);
                        }
                        return keys;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dictionary.prototype, "Values", {
                    get: function () {
                        var values = new Generic.List();
                        for (var key in this.obj) {
                            values.Add(this.obj[key]);
                        }
                        return values;
                    },
                    enumerable: true,
                    configurable: true
                });
                Dictionary.prototype.ContainsKey = function (key) {
                    return typeof this.obj[key] != 'undefined';
                };
                Dictionary.prototype.Add = function (key, value) {
                    if (this.ContainsKey(key)) {
                        throw new System.Error("Already have this key");
                    }
                    this.$set$(key, value);
                };
                Dictionary.prototype.Remove = function (key) {
                    if (this.ContainsKey(key)) {
                        delete this.obj[key];
                        return true;
                    }
                };
                Dictionary.prototype.TryGetValue = function (key, value) {
                    if (this.ContainsKey(key)) {
                        value.refObj = this.$get$(key);
                        return true;
                    }
                    return false;
                };
                Dictionary.prototype.GetEnumerator = function () {
                    var values = new Generic.List();
                    for (var key in this.obj) {
                        values.Add(new Generic.KeyValuePair(key, this.obj[key]));
                    }
                    return new Dictionary.Enumerator(values);
                };
                return Dictionary;
            })();
            Generic.Dictionary = Dictionary;
            var Dictionary;
            (function (Dictionary) {
                var Enumerator = (function () {
                    function Enumerator(list) {
                        this.list = null;
                        this.index = 0;
                        this.version = 0;
                        this.current = null;
                        this.list = list;
                        this.index = 0;
                        this.version = list._version;
                        this.current = null;
                    }
                    Enumerator.prototype.Dispose = function () {
                    };
                    Enumerator.prototype.MoveNext = function () {
                        var localList = this.list;
                        if (this.version == localList._version && (this.index < localList._size)) {
                            this.current = localList._items[this.index];
                            this.index++;
                            return true;
                        }
                        return this.MoveNextRare();
                    };
                    Enumerator.prototype.MoveNextRare = function () {
                        if (this.version != this.list._version) {
                            System.ThrowHelper.ThrowInvalidOperationException(20 /* InvalidOperation_EnumFailedVersion */);
                        }
                        this.index = this.list._size + 1;
                        this.current = null;
                        return false;
                    };
                    Object.defineProperty(Enumerator.prototype, "Current", {
                        get: function () {
                            return this.current;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Enumerator.prototype.Reset = function () {
                        if (this.version != this.list._version) {
                            System.ThrowHelper.ThrowInvalidOperationException(20 /* InvalidOperation_EnumFailedVersion */);
                        }
                        this.index = 0;
                        this.current = null;
                    };
                    return Enumerator;
                })();
                Dictionary.Enumerator = Enumerator;
            })(Dictionary = Generic.Dictionary || (Generic.Dictionary = {}));
        })(Generic = Collections.Generic || (Collections.Generic = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Diagnostics;
    (function (Diagnostics) {
        var Contracts;
        (function (Contracts) {
            var Contract = (function () {
                function Contract() {
                }
                Contract.EndContractBlock = function () {
                };
                Contract.Requires = function (condition) {
                    if (!condition) {
                        throw new System.Error("condition not met");
                    }
                };
                Contract.Assert = function (condition, message) {
                    if (!condition) {
                        throw new System.Error(message);
                    }
                };
                return Contract;
            })();
            Contracts.Contract = Contract;
        })(Contracts = Diagnostics.Contracts || (Diagnostics.Contracts = {}));
    })(Diagnostics = System.Diagnostics || (System.Diagnostics = {}));
})(System || (System = {}));
var System;
(function (System) {
    var ThrowHelper = (function () {
        function ThrowHelper() {
        }
        ThrowHelper.ThrowWrongValueTypeArgumentException = function (value, targetType) {
            throw new System.ArgumentException("wrong value type");
        };
        ThrowHelper.ThrowKeyNotFoundException = function () {
            throw new System.KeyNotFoundException("");
        };
        ThrowHelper.ThrowArgumentException = function (resource) {
            throw new System.ArgumentException("");
        };
        ThrowHelper.ThrowArgumentNullException = function (argument) {
            throw new System.ArgumentNullException("");
        };
        ThrowHelper.ThrowInvalidOperationException = function (resource) {
            throw new System.InvalidOperationException("");
        };
        ThrowHelper.ThrowSerializationException = function (resource) {
            throw new System.Error("");
        };
        ThrowHelper.ThrowNotSupportedException = function (resource) {
            throw new System.NotSupportedException("");
        };
        ThrowHelper.IfNullAndNullsAreIllegalThenThrow = function (value, argName) {
            if (value == null)
                ThrowHelper.ThrowArgumentNullException(argName);
        };
        ThrowHelper.GetArgumentName = function (argument) {
            var argumentName = null;
            switch (argument) {
                case 2 /* array */:
                    argumentName = "array";
                    break;
                case 15 /* arrayIndex */:
                    argumentName = "arrayIndex";
                    break;
                case 10 /* capacity */:
                    argumentName = "capacity";
                    break;
                case 5 /* collection */:
                    argumentName = "collection";
                    break;
                case 7 /* converter */:
                    argumentName = "converter";
                    break;
                case 14 /* count */:
                    argumentName = "count";
                    break;
                case 1 /* dictionary */:
                    argumentName = "dictionary";
                    break;
                case 11 /* index */:
                    argumentName = "index";
                    break;
                case 3 /* info */:
                    argumentName = "info";
                    break;
                case 4 /* key */:
                    argumentName = "key";
                    break;
                case 6 /* match */:
                    argumentName = "match";
                    break;
                case 0 /* obj */:
                    argumentName = "obj";
                    break;
                case 8 /* queue */:
                    argumentName = "queue";
                    break;
                case 9 /* stack */:
                    argumentName = "stack";
                    break;
                case 12 /* startIndex */:
                    argumentName = "startIndex";
                    break;
                case 13 /* value */:
                    argumentName = "value";
                    break;
                case 16 /* item */:
                    argumentName = "item";
                    break;
                default:
                    System.Diagnostics.Debug.Assert(false, "The enum value is not defined, please checked ExceptionArgumentName Enum.");
                    return "";
            }
            return argumentName;
        };
        ThrowHelper.GetResourceName = function (resource) {
            var resourceName = null;
            switch (resource) {
                case 0 /* Argument_ImplementIComparable */:
                    resourceName = "Argument_ImplementIComparable";
                    break;
                case 4 /* Argument_AddingDuplicate */:
                    resourceName = "Argument_AddingDuplicate";
                    break;
                case 13 /* ArgumentOutOfRange_Index */:
                    resourceName = "ArgumentOutOfRange_Index";
                    break;
                case 1 /* ArgumentOutOfRange_NeedNonNegNum */:
                    resourceName = "ArgumentOutOfRange_NeedNonNegNum";
                    break;
                case 2 /* ArgumentOutOfRange_NeedNonNegNumRequired */:
                    resourceName = "ArgumentOutOfRange_NeedNonNegNumRequired";
                    break;
                case 12 /* ArgumentOutOfRange_SmallCapacity */:
                    resourceName = "ArgumentOutOfRange_SmallCapacity";
                    break;
                case 3 /* Arg_ArrayPlusOffTooSmall */:
                    resourceName = "Arg_ArrayPlusOffTooSmall";
                    break;
                case 8 /* Arg_RankMultiDimNotSupported */:
                    resourceName = "Arg_MultiRank";
                    break;
                case 9 /* Arg_NonZeroLowerBound */:
                    resourceName = "Arg_NonZeroLowerBound";
                    break;
                case 10 /* Argument_InvalidArrayType */:
                    resourceName = "Invalid_Array_Type";
                    break;
                case 14 /* Argument_InvalidOffLen */:
                    resourceName = "Argument_InvalidOffLen";
                    break;
                case 16 /* InvalidOperation_CannotRemoveFromStackOrQueue */:
                    resourceName = "InvalidOperation_CannotRemoveFromStackOrQueue";
                    break;
                case 17 /* InvalidOperation_EmptyCollection */:
                    resourceName = "InvalidOperation_EmptyCollection";
                    break;
                case 18 /* InvalidOperation_EmptyQueue */:
                    resourceName = "InvalidOperation_EmptyQueue";
                    break;
                case 19 /* InvalidOperation_EnumOpCantHappen */:
                    resourceName = "InvalidOperation_EnumOpCantHappen";
                    break;
                case 20 /* InvalidOperation_EnumFailedVersion */:
                    resourceName = "InvalidOperation_EnumFailedVersion";
                    break;
                case 21 /* InvalidOperation_EmptyStack */:
                    resourceName = "InvalidOperation_EmptyStack";
                    break;
                case 22 /* InvalidOperation_EnumNotStarted */:
                    resourceName = "InvalidOperation_EnumNotStarted";
                    break;
                case 23 /* InvalidOperation_EnumEnded */:
                    resourceName = "InvalidOperation_EnumEnded";
                    break;
                case 11 /* NotSupported_KeyCollectionSet */:
                    resourceName = "NotSupported_KeyCollectionSet";
                    break;
                case 24 /* NotSupported_SortedListNestedWrite */:
                    resourceName = "NotSupported_SortedListNestedWrite";
                    break;
                case 5 /* Serialization_InvalidOnDeser */:
                    resourceName = "Serialization_InvalidOnDeser";
                    break;
                case 7 /* Serialization_MissingValues */:
                    resourceName = "Serialization_MissingValues";
                    break;
                case 6 /* Serialization_MismatchedCount */:
                    resourceName = "Serialization_MismatchedCount";
                    break;
                case 25 /* NotSupported_ValueCollectionSet */:
                    resourceName = "NotSupported_ValueCollectionSet";
                    break;
                default:
                    System.Diagnostics.Debug.Assert(false, "The enum value is not defined, please checked ExceptionArgumentName Enum.");
                    return "";
            }
            return resourceName;
        };
        ThrowHelper.ThrowArgumentOutOfRangeException = function (argument, resource) {
            if (typeof argument == 'undefined') {
                throw new System.Error("argument out or range");
            }
            if (argument && resource) {
                return this.ThrowArgumentOutOfRangeException_overload0(argument, resource);
            }
            if (argument && !resource) {
                return this.ThrowArgumentOutOfRangeException_overload1(argument);
            }
        };
        ThrowHelper.ThrowArgumentOutOfRangeException_overload0 = function (argument, resource) {
            throw new System.Error(ThrowHelper.GetArgumentName(argument) + ThrowHelper.GetResourceName(resource));
        };
        ThrowHelper.ThrowArgumentOutOfRangeException_overload1 = function (argument) {
            throw new System.Error(ThrowHelper.GetArgumentName(argument));
        };
        return ThrowHelper;
    })();
    System.ThrowHelper = ThrowHelper;
    (function (ExceptionArgument) {
        ExceptionArgument[ExceptionArgument["obj"] = 0] = "obj";
        ExceptionArgument[ExceptionArgument["dictionary"] = 1] = "dictionary";
        ExceptionArgument[ExceptionArgument["array"] = 2] = "array";
        ExceptionArgument[ExceptionArgument["info"] = 3] = "info";
        ExceptionArgument[ExceptionArgument["key"] = 4] = "key";
        ExceptionArgument[ExceptionArgument["collection"] = 5] = "collection";
        ExceptionArgument[ExceptionArgument["match"] = 6] = "match";
        ExceptionArgument[ExceptionArgument["converter"] = 7] = "converter";
        ExceptionArgument[ExceptionArgument["queue"] = 8] = "queue";
        ExceptionArgument[ExceptionArgument["stack"] = 9] = "stack";
        ExceptionArgument[ExceptionArgument["capacity"] = 10] = "capacity";
        ExceptionArgument[ExceptionArgument["index"] = 11] = "index";
        ExceptionArgument[ExceptionArgument["startIndex"] = 12] = "startIndex";
        ExceptionArgument[ExceptionArgument["value"] = 13] = "value";
        ExceptionArgument[ExceptionArgument["count"] = 14] = "count";
        ExceptionArgument[ExceptionArgument["arrayIndex"] = 15] = "arrayIndex";
        ExceptionArgument[ExceptionArgument["item"] = 16] = "item";
    })(System.ExceptionArgument || (System.ExceptionArgument = {}));
    var ExceptionArgument = System.ExceptionArgument;
    (function (ExceptionResource) {
        ExceptionResource[ExceptionResource["Argument_ImplementIComparable"] = 0] = "Argument_ImplementIComparable";
        ExceptionResource[ExceptionResource["ArgumentOutOfRange_NeedNonNegNum"] = 1] = "ArgumentOutOfRange_NeedNonNegNum";
        ExceptionResource[ExceptionResource["ArgumentOutOfRange_NeedNonNegNumRequired"] = 2] = "ArgumentOutOfRange_NeedNonNegNumRequired";
        ExceptionResource[ExceptionResource["Arg_ArrayPlusOffTooSmall"] = 3] = "Arg_ArrayPlusOffTooSmall";
        ExceptionResource[ExceptionResource["Argument_AddingDuplicate"] = 4] = "Argument_AddingDuplicate";
        ExceptionResource[ExceptionResource["Serialization_InvalidOnDeser"] = 5] = "Serialization_InvalidOnDeser";
        ExceptionResource[ExceptionResource["Serialization_MismatchedCount"] = 6] = "Serialization_MismatchedCount";
        ExceptionResource[ExceptionResource["Serialization_MissingValues"] = 7] = "Serialization_MissingValues";
        ExceptionResource[ExceptionResource["Arg_RankMultiDimNotSupported"] = 8] = "Arg_RankMultiDimNotSupported";
        ExceptionResource[ExceptionResource["Arg_NonZeroLowerBound"] = 9] = "Arg_NonZeroLowerBound";
        ExceptionResource[ExceptionResource["Argument_InvalidArrayType"] = 10] = "Argument_InvalidArrayType";
        ExceptionResource[ExceptionResource["NotSupported_KeyCollectionSet"] = 11] = "NotSupported_KeyCollectionSet";
        ExceptionResource[ExceptionResource["ArgumentOutOfRange_SmallCapacity"] = 12] = "ArgumentOutOfRange_SmallCapacity";
        ExceptionResource[ExceptionResource["ArgumentOutOfRange_Index"] = 13] = "ArgumentOutOfRange_Index";
        ExceptionResource[ExceptionResource["Argument_InvalidOffLen"] = 14] = "Argument_InvalidOffLen";
        ExceptionResource[ExceptionResource["NotSupported_ReadOnlyCollection"] = 15] = "NotSupported_ReadOnlyCollection";
        ExceptionResource[ExceptionResource["InvalidOperation_CannotRemoveFromStackOrQueue"] = 16] = "InvalidOperation_CannotRemoveFromStackOrQueue";
        ExceptionResource[ExceptionResource["InvalidOperation_EmptyCollection"] = 17] = "InvalidOperation_EmptyCollection";
        ExceptionResource[ExceptionResource["InvalidOperation_EmptyQueue"] = 18] = "InvalidOperation_EmptyQueue";
        ExceptionResource[ExceptionResource["InvalidOperation_EnumOpCantHappen"] = 19] = "InvalidOperation_EnumOpCantHappen";
        ExceptionResource[ExceptionResource["InvalidOperation_EnumFailedVersion"] = 20] = "InvalidOperation_EnumFailedVersion";
        ExceptionResource[ExceptionResource["InvalidOperation_EmptyStack"] = 21] = "InvalidOperation_EmptyStack";
        ExceptionResource[ExceptionResource["InvalidOperation_EnumNotStarted"] = 22] = "InvalidOperation_EnumNotStarted";
        ExceptionResource[ExceptionResource["InvalidOperation_EnumEnded"] = 23] = "InvalidOperation_EnumEnded";
        ExceptionResource[ExceptionResource["NotSupported_SortedListNestedWrite"] = 24] = "NotSupported_SortedListNestedWrite";
        ExceptionResource[ExceptionResource["NotSupported_ValueCollectionSet"] = 25] = "NotSupported_ValueCollectionSet";
        ExceptionResource[ExceptionResource["ArgumentOutOfRange_BiggerThanCollection"] = 26] = "ArgumentOutOfRange_BiggerThanCollection";
        ExceptionResource[ExceptionResource["ArgumentOutOfRange_ListInsert"] = 27] = "ArgumentOutOfRange_ListInsert";
        ExceptionResource[ExceptionResource["ArgumentOutOfRange_Count"] = 28] = "ArgumentOutOfRange_Count";
    })(System.ExceptionResource || (System.ExceptionResource = {}));
    var ExceptionResource = System.ExceptionResource;
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Generic;
        (function (Generic) {
            var List = (function () {
                function List(param0) {
                    this._items = null;
                    this._size = 0;
                    this._version = 0;
                    this._syncRoot = null;
                    if (typeof param0 == 'number') {
                        this.constructor_List_overload0(param0);
                        return;
                    }
                    if (typeof param0 != 'undefined') {
                        this.constructor_List_overload1(param0);
                        return;
                    }
                    if (typeof param0 == 'undefined') {
                        this.constructor_List_overload2();
                        return;
                    }
                    throw new System.Error('overload failed');
                }
                Object.defineProperty(List.prototype, "Capacity", {
                    get: function () {
                        return this._items.length;
                    },
                    set: function (value) {
                        if (value < this._size) {
                            System.ThrowHelper.ThrowArgumentOutOfRangeException(13 /* value */, 12 /* ArgumentOutOfRange_SmallCapacity */);
                        }
                        System.Diagnostics.Contracts.Contract.EndContractBlock();
                        if (value != this._items.length) {
                            if (value > 0) {
                                var newItems = new Array(value);
                                if (this._size > 0) {
                                    TSArray.Copy(this._items, 0, newItems, 0, this._size);
                                }
                                this._items = newItems;
                            }
                            else {
                                this._items = List._emptyArray;
                            }
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(List.prototype, "Count", {
                    get: function () {
                        return this._size;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(List.prototype, "IsFixedSize", {
                    get: function () {
                        return false;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(List.prototype, "IsReadOnly", {
                    get: function () {
                        return false;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(List.prototype, "IsSynchronized", {
                    get: function () {
                        return false;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(List.prototype, "SyncRoot", {
                    get: function () {
                        return this._syncRoot;
                    },
                    enumerable: true,
                    configurable: true
                });
                List.prototype.$get$ = function (index) {
                    if (index >= this._size) {
                        System.ThrowHelper.ThrowArgumentOutOfRangeException();
                    }
                    System.Diagnostics.Contracts.Contract.EndContractBlock();
                    return this._items[index];
                };
                List.prototype.$set$ = function (index, value) {
                    if (index >= this._size) {
                        System.ThrowHelper.ThrowArgumentOutOfRangeException();
                    }
                    System.Diagnostics.Contracts.Contract.EndContractBlock();
                    this._items[index] = value;
                    this._version++;
                };
                List.prototype.AddRange = function (collection) {
                    this.InsertRange(this._size, collection);
                };
                List.prototype.Clear = function () {
                    if (this._size > 0) {
                        TSArray.Clear(this._items, 0, this._size);
                        this._size = 0;
                    }
                    this._version++;
                };
                List.prototype.EnsureCapacity = function (min) {
                    if (this._items.length < min) {
                        var newCapacity = this._items.length == 0 ? List._defaultCapacity : this._items.length * 2;
                        if (newCapacity > 100000000)
                            newCapacity = 100000000;
                        if (newCapacity < min)
                            newCapacity = min;
                        this.Capacity = newCapacity;
                    }
                };
                List.prototype.ForEach = function (action) {
                    if (action == null) {
                        System.ThrowHelper.ThrowArgumentNullException(6 /* match */);
                    }
                    System.Diagnostics.Contracts.Contract.EndContractBlock();
                    var version = this._version;
                    for (var i = 0; i < this._size; i++) {
                        action(this._items[i]);
                    }
                };
                List.prototype.GetRange = function (index, count) {
                    if (index < 0) {
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(11 /* index */, 1 /* ArgumentOutOfRange_NeedNonNegNum */);
                    }
                    if (count < 0) {
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(14 /* count */, 1 /* ArgumentOutOfRange_NeedNonNegNum */);
                    }
                    if (this._size - index < count) {
                        System.ThrowHelper.ThrowArgumentException(14 /* Argument_InvalidOffLen */);
                    }
                    var list = new List(count);
                    TSArray.Copy(this._items, index, list._items, 0, count);
                    list._size = count;
                    return list;
                };
                List.prototype.InsertRange = function (index, collection) {
                    if (collection == null) {
                        System.ThrowHelper.ThrowArgumentNullException(5 /* collection */);
                    }
                    if (index > this._size) {
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(11 /* index */, 13 /* ArgumentOutOfRange_Index */);
                    }
                    System.Diagnostics.Contracts.Contract.EndContractBlock();
                    if (typeof collection["Count"] != 'undefined' && typeof collection['CopyTo'] != 'undefined') {
                        var c = collection;
                        var count = c.Count;
                        if (count > 0) {
                            this.EnsureCapacity(this._size + count);
                            if (index < this._size) {
                                TSArray.Copy(this._items, index, this._items, index + count, this._size - index);
                            }
                            if (this == c) {
                                TSArray.Copy(this._items, 0, this._items, index, index);
                                TSArray.Copy(this._items, index + count, this._items, index * 2, this._size - index);
                            }
                            else {
                                var itemsToInsert = new Array(count);
                                c.CopyTo(itemsToInsert, 0);
                                TSArray.Copy(itemsToInsert, 0, this._items, index, itemsToInsert.length);
                            }
                            this._size += count;
                        }
                    }
                    else {
                        var en = collection.GetEnumerator();
                        try {
                            while (en.MoveNext()) {
                                this.Insert(index++, en.Current);
                            }
                        }
                        finally {
                            if (en != null)
                                en.Dispose();
                        }
                    }
                    this._version++;
                };
                List.prototype.RemoveAll = function (match) {
                    if (match == null) {
                        System.ThrowHelper.ThrowArgumentNullException(6 /* match */);
                    }
                    var freeIndex = 0;
                    while (freeIndex < this._size && !match(this._items[freeIndex]))
                        freeIndex++;
                    if (freeIndex >= this._size)
                        return 0;
                    var current = freeIndex + 1;
                    while (current < this._size) {
                        while (current < this._size && match(this._items[current]))
                            current++;
                        if (current < this._size) {
                            this._items[freeIndex++] = this._items[current++];
                        }
                    }
                    TSArray.Clear(this._items, freeIndex, this._size - freeIndex);
                    var result = this._size - freeIndex;
                    this._size = freeIndex;
                    this._version++;
                    return result;
                };
                List.prototype.RemoveAt = function (index) {
                    if (index >= this._size) {
                        System.ThrowHelper.ThrowArgumentOutOfRangeException();
                    }
                    System.Diagnostics.Contracts.Contract.EndContractBlock();
                    this._size--;
                    if (index < this._size) {
                        TSArray.Copy(this._items, index + 1, this._items, index, this._size - index);
                    }
                    this._items[this._size] = null;
                    this._version++;
                };
                List.prototype.RemoveRange = function (index, count) {
                    if (index < 0) {
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(11 /* index */, 1 /* ArgumentOutOfRange_NeedNonNegNum */);
                    }
                    if (count < 0) {
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(14 /* count */, 1 /* ArgumentOutOfRange_NeedNonNegNum */);
                    }
                    if (this._size - index < count)
                        System.ThrowHelper.ThrowArgumentException(14 /* Argument_InvalidOffLen */);
                    System.Diagnostics.Contracts.Contract.EndContractBlock();
                    if (count > 0) {
                        var i = this._size;
                        this._size -= count;
                        if (index < this._size) {
                            TSArray.Copy(this._items, index + count, this._items, index, this._size - index);
                        }
                        TSArray.Clear(this._items, this._size, count);
                        this._version++;
                    }
                };
                List.prototype.ToArray = function () {
                    var array = new Array(this._size);
                    TSArray.Copy(this._items, 0, array, 0, this._size);
                    return array;
                };
                List.prototype.TrimExcess = function () {
                    var threshold = (this._items.length * 0.9);
                    if (this._size < threshold) {
                        this.Capacity = this._size;
                    }
                };
                List.prototype.constructor_List_overload0 = function (capacity) {
                    if (capacity < 0)
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(10 /* capacity */, 1 /* ArgumentOutOfRange_NeedNonNegNum */);
                    System.Diagnostics.Contracts.Contract.EndContractBlock();
                    if (capacity == 0)
                        this._items = List._emptyArray;
                    else
                        this._items = new Array(capacity);
                };
                List.prototype.constructor_List_overload1 = function (collection) {
                    if (collection == null)
                        System.ThrowHelper.ThrowArgumentNullException(5 /* collection */);
                    System.Diagnostics.Contracts.Contract.EndContractBlock();
                    if (typeof collection["Count"] != 'undefined' && typeof collection['CopyTo'] != 'undefined') {
                        var c = collection;
                        var count = c.Count;
                        if (count == 0) {
                            this._items = List._emptyArray;
                        }
                        else {
                            this._items = new Array(count);
                            c.CopyTo(this._items, 0);
                            this._size = count;
                        }
                    }
                    else {
                        this._size = 0;
                        this._items = List._emptyArray;
                        var en = collection.GetEnumerator();
                        try {
                            while (en.MoveNext()) {
                                this.Add(en.Current);
                            }
                        }
                        finally {
                            if (en != null)
                                en.Dispose();
                        }
                    }
                };
                List.prototype.constructor_List_overload2 = function () {
                    this._items = List._emptyArray;
                };
                List.prototype.Add = function (param0) {
                    return this.Add_overload1(param0);
                };
                List.prototype.Add_overload1 = function (item) {
                    if (this._size == this._items.length)
                        this.EnsureCapacity(this._size + 1);
                    this._items[this._size++] = item;
                    this._version++;
                    return this.Count - 1;
                };
                List.prototype.BinarySearch = function (param0, param1, param2, param3) {
                    if (typeof param0 == 'number' && typeof param1 == 'number' && typeof param2 != 'undefined' && typeof param3 != 'undefined') {
                        return this.BinarySearch_overload2(param0, param1, param2, param3);
                    }
                    if (typeof param0 != 'undefined' && typeof param1 == 'undefined' && typeof param2 == 'undefined' && typeof param3 == 'undefined') {
                        return this.BinarySearch_overload0(param0);
                    }
                    if (typeof param0 != 'undefined' && typeof param1 != 'undefined' && typeof param2 == 'undefined' && typeof param3 == 'undefined') {
                        return this.BinarySearch_overload1(param0, param1);
                    }
                    throw new System.Error('overload failed');
                };
                List.prototype.BinarySearch_overload0 = function (item) {
                    return this.BinarySearch(0, this.Count, item, null);
                };
                List.prototype.BinarySearch_overload1 = function (item, comparer) {
                    return this.BinarySearch(0, this.Count, item, comparer);
                };
                List.prototype.BinarySearch_overload2 = function (index, count, item, comparer) {
                    if (index < 0)
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(11 /* index */, 1 /* ArgumentOutOfRange_NeedNonNegNum */);
                    if (count < 0)
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(14 /* count */, 1 /* ArgumentOutOfRange_NeedNonNegNum */);
                    if (this._size - index < count)
                        System.ThrowHelper.ThrowArgumentException(14 /* Argument_InvalidOffLen */);
                    return TSArray.BinarySearch(this._items, index, count, item, comparer);
                };
                List.prototype.Contains = function (param0) {
                    if (typeof param0 != 'undefined') {
                        return this.Contains_overload1(param0);
                    }
                    if (param0 instanceof Object) {
                        return this.Contains_overload0(param0);
                    }
                    throw new System.Error('overload failed');
                };
                List.prototype.Contains_overload0 = function (item) {
                    return this.Contains(item);
                };
                List.prototype.Contains_overload1 = function (item) {
                    if (item == null) {
                        for (var i = 0; i < this._size; i++)
                            if (this._items[i] == null)
                                return true;
                        return false;
                    }
                    else {
                        var c = Generic.EqualityComparer.Default;
                        for (var i = 0; i < this._size; i++) {
                            if (c.Equals(this._items[i], item))
                                return true;
                        }
                        return false;
                    }
                };
                List.prototype.CopyTo = function (param0, param1, param2, param3) {
                    if (typeof param0 == 'number' && param1 instanceof Array && typeof param2 == 'number' && typeof param3 == 'number') {
                        return this.CopyTo_overload1(param0, param1, param2, param3);
                    }
                    if (param0 instanceof Array && typeof param1 == 'number' && typeof param2 == 'undefined' && typeof param3 == 'undefined') {
                        return this.CopyTo_overload0(param0, param1);
                    }
                    if (param0 instanceof Array && typeof param1 == 'number' && typeof param2 == 'undefined' && typeof param3 == 'undefined') {
                        return this.CopyTo_overload2(param0, param1);
                    }
                    if (param0 instanceof Array && typeof param1 == 'undefined' && typeof param2 == 'undefined' && typeof param3 == 'undefined') {
                        return this.CopyTo_overload3(param0);
                    }
                    throw new System.Error('overload failed');
                };
                List.prototype.CopyTo_overload0 = function (array, arrayIndex) {
                    System.Diagnostics.Contracts.Contract.EndContractBlock();
                    try {
                        TSArray.Copy(this._items, 0, array, arrayIndex, this._size);
                    }
                    catch (err) {
                        System.ThrowHelper.ThrowArgumentException(10 /* Argument_InvalidArrayType */);
                    }
                };
                List.prototype.CopyTo_overload1 = function (index, array, arrayIndex, count) {
                    if (this._size - index < count) {
                        System.ThrowHelper.ThrowArgumentException(14 /* Argument_InvalidOffLen */);
                    }
                    System.Diagnostics.Contracts.Contract.EndContractBlock();
                    TSArray.Copy(this._items, index, array, arrayIndex, count);
                };
                List.prototype.CopyTo_overload2 = function (array, arrayIndex) {
                    TSArray.Copy(this._items, 0, array, arrayIndex, this._size);
                };
                List.prototype.CopyTo_overload3 = function (array) {
                    this.CopyTo(array, 0);
                };
                List.prototype.GetEnumerator = function () {
                    return this.GetEnumerator_overload0();
                };
                List.prototype.GetEnumerator_overload0 = function () {
                    return new List.Enumerator(this);
                };
                List.prototype.IndexOf = function (param0, param1, param2) {
                    if (typeof param0 != 'undefined' && typeof param1 == 'number' && typeof param2 == 'number') {
                        return this.IndexOf_overload2(param0, param1, param2);
                    }
                    if (typeof param0 != 'undefined' && typeof param1 == 'number' && typeof param2 == 'undefined') {
                        return this.IndexOf_overload1(param0, param1);
                    }
                    if (typeof param0 != 'undefined' && typeof param1 == 'undefined' && typeof param2 == 'undefined') {
                        return this.IndexOf_overload3(param0);
                    }
                    if (param0 instanceof Object && typeof param1 == 'undefined' && typeof param2 == 'undefined') {
                        return this.IndexOf_overload0(param0);
                    }
                    throw new System.Error('overload failed');
                };
                List.prototype.IndexOf_overload0 = function (item) {
                    return this.IndexOf(item);
                };
                List.prototype.IndexOf_overload1 = function (item, index) {
                    if (index > this._size)
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(11 /* index */, 13 /* ArgumentOutOfRange_Index */);
                    System.Diagnostics.Contracts.Contract.EndContractBlock();
                    return TSArray.IndexOf(this._items, item, index, this._size - index);
                };
                List.prototype.IndexOf_overload2 = function (item, index, count) {
                    if (index > this._size)
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(11 /* index */, 13 /* ArgumentOutOfRange_Index */);
                    if (count < 0 || index > this._size - count)
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(14 /* count */, 28 /* ArgumentOutOfRange_Count */);
                    System.Diagnostics.Contracts.Contract.EndContractBlock();
                    return TSArray.IndexOf(this._items, item, index, count);
                };
                List.prototype.IndexOf_overload3 = function (item) {
                    return TSArray.IndexOf(this._items, item, 0, this._size);
                };
                List.prototype.Insert = function (param0, param1) {
                    if (typeof param0 == 'number' && typeof param1 != 'undefined') {
                        return this.Insert_overload1(param0, param1);
                    }
                    if (typeof param0 == 'number' && param1 instanceof Object) {
                        return this.Insert_overload0(param0, param1);
                    }
                    throw new System.Error('overload failed');
                };
                List.prototype.Insert_overload0 = function (index, item) {
                    System.ThrowHelper.IfNullAndNullsAreIllegalThenThrow(item, 16 /* item */);
                    try {
                        this.Insert(index, item);
                    }
                    catch (err) {
                        System.ThrowHelper.ThrowWrongValueTypeArgumentException(item, "TypeList");
                    }
                };
                List.prototype.Insert_overload1 = function (index, item) {
                    if (index > this._size) {
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(11 /* index */, 27 /* ArgumentOutOfRange_ListInsert */);
                    }
                    System.Diagnostics.Contracts.Contract.EndContractBlock();
                    if (this._size == this._items.length)
                        this.EnsureCapacity(this._size + 1);
                    if (index < this._size) {
                        TSArray.Copy(this._items, index, this._items, index + 1, this._size - index);
                    }
                    this._items[index] = item;
                    this._size++;
                    this._version++;
                };
                List.prototype.LastIndexOf = function (param0, param1, param2) {
                    if (typeof param0 != 'undefined' && typeof param1 == 'number' && typeof param2 == 'number') {
                        return this.LastIndexOf_overload1(param0, param1, param2);
                    }
                    if (typeof param0 != 'undefined' && typeof param1 == 'number' && typeof param2 == 'undefined') {
                        return this.LastIndexOf_overload0(param0, param1);
                    }
                    if (typeof param0 != 'undefined' && typeof param1 == 'undefined' && typeof param2 == 'undefined') {
                        return this.LastIndexOf_overload2(param0);
                    }
                    throw new System.Error('overload failed');
                };
                List.prototype.LastIndexOf_overload0 = function (item, index) {
                    if (index >= this._size)
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(11 /* index */, 13 /* ArgumentOutOfRange_Index */);
                    System.Diagnostics.Contracts.Contract.EndContractBlock();
                    return this.LastIndexOf(item, index, index + 1);
                };
                List.prototype.LastIndexOf_overload1 = function (item, index, count) {
                    if ((this.Count != 0) && (index < 0)) {
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(11 /* index */, 1 /* ArgumentOutOfRange_NeedNonNegNum */);
                    }
                    if ((this.Count != 0) && (count < 0)) {
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(14 /* count */, 1 /* ArgumentOutOfRange_NeedNonNegNum */);
                    }
                    System.Diagnostics.Contracts.Contract.EndContractBlock();
                    if (this._size == 0) {
                        return -1;
                    }
                    if (index >= this._size) {
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(11 /* index */, 26 /* ArgumentOutOfRange_BiggerThanCollection */);
                    }
                    if (count > index + 1) {
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(14 /* count */, 26 /* ArgumentOutOfRange_BiggerThanCollection */);
                    }
                    return TSArray.LastIndexOf(this._items, item, index, count);
                };
                List.prototype.LastIndexOf_overload2 = function (item) {
                    if (this._size == 0) {
                        return -1;
                    }
                    else {
                        return this.LastIndexOf(item, this._size - 1, this._size);
                    }
                };
                List.prototype.Remove = function (param0) {
                    if (typeof param0 != 'undefined') {
                        return this.Remove_overload1(param0);
                    }
                    if (param0 instanceof Object) {
                        return this.Remove_overload0(param0);
                    }
                    throw new System.Error('overload failed');
                };
                List.prototype.Remove_overload0 = function (item) {
                    this.Remove(item);
                };
                List.prototype.Remove_overload1 = function (item) {
                    var index = this.IndexOf(item);
                    if (index >= 0) {
                        this.RemoveAt(index);
                        return true;
                    }
                    return false;
                };
                List.prototype.Reverse = function (param0, param1) {
                    if (typeof param0 == 'number' && typeof param1 == 'number') {
                        return this.Reverse_overload0(param0, param1);
                    }
                    if (typeof param0 == 'undefined' && typeof param1 == 'undefined') {
                        return this.Reverse_overload1();
                    }
                    throw new System.Error('overload failed');
                };
                List.prototype.Reverse_overload0 = function (index, count) {
                    if (index < 0) {
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(11 /* index */, 1 /* ArgumentOutOfRange_NeedNonNegNum */);
                    }
                    if (count < 0) {
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(14 /* count */, 1 /* ArgumentOutOfRange_NeedNonNegNum */);
                    }
                    if (this._size - index < count)
                        System.ThrowHelper.ThrowArgumentException(14 /* Argument_InvalidOffLen */);
                    System.Diagnostics.Contracts.Contract.EndContractBlock();
                    TSArray.Reverse(this._items, index, count);
                    this._version++;
                };
                List.prototype.Reverse_overload1 = function () {
                    this.Reverse(0, this.Count);
                };
                List.prototype.Sort = function (param0, param1, param2) {
                    if (typeof param0 == 'number' && typeof param1 == 'number' && typeof param2 != 'undefined') {
                        return this.Sort_overload1(param0, param1, param2);
                    }
                    if (typeof param0 == 'function' && typeof param1 == 'undefined' && typeof param2 == 'undefined') {
                        return this.Sort_overload2(param0);
                    }
                    if (typeof param0 != 'undefined' && typeof param1 == 'undefined' && typeof param2 == 'undefined') {
                        return this.Sort_overload0(param0);
                    }
                    if (typeof param0 == 'undefined' && typeof param1 == 'undefined' && typeof param2 == 'undefined') {
                        return this.Sort_overload3();
                    }
                    throw new System.Error('overload failed');
                };
                List.prototype.Sort_overload0 = function (comparer) {
                    this.Sort(0, this.Count, comparer);
                };
                List.prototype.Sort_overload1 = function (index, count, comparer) {
                    if (index < 0) {
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(11 /* index */, 1 /* ArgumentOutOfRange_NeedNonNegNum */);
                    }
                    if (count < 0) {
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(14 /* count */, 1 /* ArgumentOutOfRange_NeedNonNegNum */);
                    }
                    if (this._size - index < count)
                        System.ThrowHelper.ThrowArgumentException(14 /* Argument_InvalidOffLen */);
                    System.Diagnostics.Contracts.Contract.EndContractBlock();
                    TSArray.Sort(this._items, index, count, comparer);
                    this._version++;
                };
                List.prototype.Sort_overload2 = function (comparison) {
                    if (comparison == null) {
                        System.ThrowHelper.ThrowArgumentNullException(6 /* match */);
                    }
                    System.Diagnostics.Contracts.Contract.EndContractBlock();
                    if (this._size > 0) {
                        var comparer = new TSArray.FunctorComparer(comparison);
                        TSArray.Sort(this._items, 0, this._size, comparer);
                    }
                };
                List.prototype.Sort_overload3 = function () {
                    this.Sort(0, this.Count, null);
                };
                List._defaultCapacity = 4;
                List._emptyArray = new Array(0);
                return List;
            })();
            Generic.List = List;
            var List;
            (function (List) {
                var Enumerator = (function () {
                    function Enumerator(list) {
                        this.list = null;
                        this.index = 0;
                        this.version = 0;
                        this.current = null;
                        this.list = list;
                        this.index = 0;
                        this.version = list._version;
                        this.current = null;
                    }
                    Enumerator.prototype.Dispose = function () {
                    };
                    Enumerator.prototype.MoveNext = function () {
                        var localList = this.list;
                        if (this.version == localList._version && (this.index < localList._size)) {
                            this.current = localList._items[this.index];
                            this.index++;
                            return true;
                        }
                        return this.MoveNextRare();
                    };
                    Enumerator.prototype.MoveNextRare = function () {
                        if (this.version != this.list._version) {
                            System.ThrowHelper.ThrowInvalidOperationException(20 /* InvalidOperation_EnumFailedVersion */);
                        }
                        this.index = this.list._size + 1;
                        this.current = null;
                        return false;
                    };
                    Object.defineProperty(Enumerator.prototype, "Current", {
                        get: function () {
                            return this.current;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Enumerator.prototype.Reset = function () {
                        if (this.version != this.list._version) {
                            System.ThrowHelper.ThrowInvalidOperationException(20 /* InvalidOperation_EnumFailedVersion */);
                        }
                        this.index = 0;
                        this.current = null;
                    };
                    return Enumerator;
                })();
                List.Enumerator = Enumerator;
            })(List = Generic.List || (Generic.List = {}));
        })(Generic = Collections.Generic || (Collections.Generic = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Generic;
        (function (Generic) {
            var KeyValuePair = (function () {
                function KeyValuePair(key, value) {
                    this.key = key;
                    this.value = value;
                }
                Object.defineProperty(KeyValuePair.prototype, "Key", {
                    get: function () {
                        return this.key;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(KeyValuePair.prototype, "Value", {
                    get: function () {
                        return this.value;
                    },
                    enumerable: true,
                    configurable: true
                });
                KeyValuePair.prototype.ToString = function () {
                    return this.key + "" + this.value;
                };
                return KeyValuePair;
            })();
            Generic.KeyValuePair = KeyValuePair;
        })(Generic = Collections.Generic || (Collections.Generic = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Generic;
        (function (Generic) {
            var ObjectDictionary = (function (_super) {
                __extends(ObjectDictionary, _super);
                function ObjectDictionary(param) {
                    _super.call(this);
                    if (typeof param === 'undefined') {
                        this.list = new Generic.List();
                        return;
                    }
                    if (typeof param === 'number') {
                        this.list = new Generic.List(param);
                        return;
                    }
                    this.list = new Generic.List();
                    for (var i = 0; i < param.list.Count; i++) {
                        this.list.Add(param.list.$get$(i));
                    }
                }
                ObjectDictionary.prototype.Clone = function () {
                    return new ObjectDictionary(this);
                };
                ObjectDictionary.prototype.Find = function (key) {
                    for (var i = 0; i < this.list.Count; i++) {
                        var pair = this.list.$get$(i);
                        if (Generic.EqualityComparer.Default.Equals(pair.Key, key)) {
                            return pair;
                        }
                    }
                    return null;
                };
                ObjectDictionary.prototype.Clear = function () {
                    this.list.Clear();
                };
                Object.defineProperty(ObjectDictionary.prototype, "Count", {
                    get: function () {
                        return this.list.Count;
                    },
                    enumerable: true,
                    configurable: true
                });
                ObjectDictionary.prototype.$get$ = function (key) {
                    var found = this.Find(key);
                    if (found != null) {
                        return found.Value;
                    }
                    throw new System.Error("don't have this key");
                };
                ObjectDictionary.prototype.$set$ = function (key, value) {
                    var found = this.Find(key);
                    if (found != null) {
                        found.Value = value;
                    }
                    else {
                        this.list.Add(new Generic.KeyValuePair(key, value));
                    }
                };
                Object.defineProperty(ObjectDictionary.prototype, "Keys", {
                    get: function () {
                        var keys = new Generic.List();
                        for (var i = 0; i < this.list.Count; i++) {
                            var pair = this.list.$get$(i);
                            keys.Add(pair.Key);
                        }
                        return keys;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ObjectDictionary.prototype, "Values", {
                    get: function () {
                        var values = new Generic.List();
                        for (var i = 0; i < this.list.Count; i++) {
                            var pair = this.list.$get$(i);
                            values.Add(pair.Value);
                        }
                        return values;
                    },
                    enumerable: true,
                    configurable: true
                });
                ObjectDictionary.prototype.ContainsKey = function (key) {
                    var found = this.Find(key);
                    return found != null;
                };
                ObjectDictionary.prototype.Add = function (key, value) {
                    if (this.ContainsKey(key)) {
                        throw new System.Error("Already have this key");
                    }
                    this.$set$(key, value);
                };
                ObjectDictionary.prototype.Remove = function (key) {
                    var found = this.Find(key);
                    if (found != null) {
                        this.list.Remove(found);
                        return true;
                    }
                    return false;
                };
                ObjectDictionary.prototype.TryGetValue = function (key, value) {
                    if (this.ContainsKey(key)) {
                        value.refObj = this.$get$(key);
                        return true;
                    }
                    return false;
                };
                ObjectDictionary.prototype.GetEnumerator = function () {
                    return new Generic.Dictionary.Enumerator(this.list);
                };
                return ObjectDictionary;
            })(Generic.Dictionary);
            Generic.ObjectDictionary = ObjectDictionary;
        })(Generic = Collections.Generic || (Collections.Generic = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Concurrent;
        (function (Concurrent) {
            var ConcurrentDictionary = (function (_super) {
                __extends(ConcurrentDictionary, _super);
                function ConcurrentDictionary() {
                    _super.apply(this, arguments);
                }
                ConcurrentDictionary.prototype.TryAdd = function (key, value) {
                    if (!this.ContainsKey(key)) {
                        this.Add(key, value);
                    }
                };
                return ConcurrentDictionary;
            })(Collections.Generic.ObjectDictionary);
            Concurrent.ConcurrentDictionary = ConcurrentDictionary;
        })(Concurrent = Collections.Concurrent || (Collections.Concurrent = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Generic;
        (function (Generic) {
            var Queue = (function () {
                function Queue(capacity) {
                    this._head = 0;
                    this._tail = 0;
                    this._size = 0;
                    this._version = 0;
                    this._MinimumGrow = 4;
                    this._ShrinkThreshold = 32;
                    this._GrowFactor = 200;
                    this._DefaultCapacity = 4;
                    this._emptyArray = new Array(0);
                    if ((typeof capacity === "number")) {
                        this.constructor_Queue_overload0(capacity);
                        return;
                    }
                    if ((typeof capacity != 'undefined')) {
                        this.constructor_Queue_overload1(capacity);
                        return;
                    }
                    if (!capacity) {
                        this.constructor_Queue_overload2();
                        return;
                    }
                }
                Object.defineProperty(Queue.prototype, "Count", {
                    get: function () {
                        return this._size;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Queue.prototype, "IsSynchronized", {
                    get: function () {
                        return false;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Queue.prototype, "SyncRoot", {
                    get: function () {
                        return this._syncRoot;
                    },
                    enumerable: true,
                    configurable: true
                });
                Queue.prototype.Clear = function () {
                    if (this._head < this._tail)
                        TSArray.Clear(this._array, this._head, this._size);
                    else {
                        TSArray.Clear(this._array, this._head, this._array.length - this._head);
                        TSArray.Clear(this._array, 0, this._tail);
                    }
                    this._head = 0;
                    this._tail = 0;
                    this._size = 0;
                    this._version++;
                };
                Queue.prototype.Enqueue = function (item) {
                    if (this._size == this._array.length) {
                        var newcapacity = (this._array.length * (this._GrowFactor / 100 | 0));
                        if (newcapacity < this._array.length + this._MinimumGrow) {
                            newcapacity = this._array.length + this._MinimumGrow;
                        }
                        this.SetCapacity(newcapacity);
                    }
                    this._array[this._tail] = item;
                    this._tail = (this._tail + 1) % this._array.length;
                    this._size++;
                    this._version++;
                };
                Queue.prototype.Dequeue = function () {
                    if (this._size == 0)
                        System.ThrowHelper.ThrowInvalidOperationException(18 /* InvalidOperation_EmptyQueue */);
                    var removed = this._array[this._head];
                    this._array[this._head] = null;
                    this._head = (this._head + 1) % this._array.length;
                    this._size--;
                    this._version++;
                    return removed;
                };
                Queue.prototype.Peek = function () {
                    if (this._size == 0)
                        System.ThrowHelper.ThrowInvalidOperationException(18 /* InvalidOperation_EmptyQueue */);
                    return this._array[this._head];
                };
                Queue.prototype.Contains = function (item) {
                    var index = this._head;
                    var count = this._size;
                    while (count-- > 0) {
                        if (item == null) {
                            if (this._array[index] == null)
                                return true;
                        }
                        else if (this._array[index] != null && this._array[index] == item) {
                            return true;
                        }
                        index = (index + 1) % this._array.length;
                    }
                    return false;
                };
                Queue.prototype.GetElement = function (i) {
                    return this._array[(this._head + i) % this._array.length];
                };
                Queue.prototype.ToArray = function () {
                    var arr = new Array(this._size);
                    if (this._size == 0)
                        return arr;
                    if (this._head < this._tail) {
                        TSArray.Copy(this._array, this._head, arr, 0, this._size);
                    }
                    else {
                        TSArray.Copy(this._array, this._head, arr, 0, this._array.length - this._head);
                        TSArray.Copy(this._array, 0, arr, this._array.length - this._head, this._tail);
                    }
                    return arr;
                };
                Queue.prototype.SetCapacity = function (capacity) {
                    var newarray = new Array(capacity);
                    if (this._size > 0) {
                        if (this._head < this._tail) {
                            TSArray.Copy(this._array, this._head, newarray, 0, this._size);
                        }
                        else {
                            TSArray.Copy(this._array, this._head, newarray, 0, this._array.length - this._head);
                            TSArray.Copy(this._array, 0, newarray, this._array.length - this._head, this._tail);
                        }
                    }
                    this._array = newarray;
                    this._head = 0;
                    this._tail = (this._size == capacity) ? 0 : this._size;
                    this._version++;
                };
                Queue.prototype.TrimExcess = function () {
                    var threshold = (this._array.length * 0.9);
                    if (this._size < threshold) {
                        this.SetCapacity(this._size);
                    }
                };
                Queue.prototype.constructor_Queue_overload0 = function (capacity) {
                    if (capacity < 0)
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(10 /* capacity */, 2 /* ArgumentOutOfRange_NeedNonNegNumRequired */);
                    this._array = new Array(capacity);
                    this._head = 0;
                    this._tail = 0;
                    this._size = 0;
                };
                Queue.prototype.constructor_Queue_overload1 = function (collection) {
                    if (collection == null)
                        System.ThrowHelper.ThrowArgumentNullException(5 /* collection */);
                    this._array = new Array(this._DefaultCapacity);
                    this._size = 0;
                    this._version = 0;
                    var en = collection.GetEnumerator();
                    try {
                        while (en.MoveNext()) {
                            this.Enqueue(en.Current);
                        }
                    }
                    finally {
                        if (en != null)
                            en.Dispose();
                    }
                };
                Queue.prototype.constructor_Queue_overload2 = function () {
                    this._array = this._emptyArray;
                };
                Queue.prototype.CopyTo = function (array, index) {
                    if ((array && array instanceof Array) && index) {
                        return this.CopyTo_overload0(array, index);
                    }
                };
                Queue.prototype.CopyTo_overload0 = function (array, index) {
                    if (array == null) {
                        System.ThrowHelper.ThrowArgumentNullException(2 /* array */);
                    }
                    var arrayLen = array.length;
                    if (index < 0 || index > arrayLen) {
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(11 /* index */, 13 /* ArgumentOutOfRange_Index */);
                    }
                    if (arrayLen - index < this._size) {
                        System.ThrowHelper.ThrowArgumentException(14 /* Argument_InvalidOffLen */);
                    }
                    var numToCopy = (arrayLen - index < this._size) ? arrayLen - index : this._size;
                    if (numToCopy == 0)
                        return;
                    try {
                        var firstPart = (this._array.length - this._head < numToCopy) ? this._array.length - this._head : numToCopy;
                        TSArray.Copy(this._array, this._head, array, index, firstPart);
                        numToCopy -= firstPart;
                        if (numToCopy > 0) {
                            TSArray.Copy(this._array, 0, array, index + this._array.length - this._head, numToCopy);
                        }
                    }
                    catch (err) {
                        System.ThrowHelper.ThrowArgumentException(10 /* Argument_InvalidArrayType */);
                    }
                };
                Queue.prototype.GetEnumerator = function () {
                    return this.GetEnumerator_overload0();
                };
                Queue.prototype.GetEnumerator_overload0 = function () {
                    return new Queue.Enumerator(this);
                };
                return Queue;
            })();
            Generic.Queue = Queue;
            var Queue;
            (function (Queue) {
                var Enumerator = (function () {
                    function Enumerator(q) {
                        this._index = 0;
                        this._version = 0;
                        this._q = q;
                        this._version = this._q._version;
                        this._index = -1;
                        this._currentElement = null;
                    }
                    Enumerator.prototype.Dispose = function () {
                        this._index = -2;
                        this._currentElement = null;
                    };
                    Enumerator.prototype.MoveNext = function () {
                        if (this._version != this._q._version)
                            System.ThrowHelper.ThrowInvalidOperationException(20 /* InvalidOperation_EnumFailedVersion */);
                        if (this._index == -2)
                            return false;
                        this._index++;
                        if (this._index == this._q._size) {
                            this._index = -2;
                            this._currentElement = null;
                            return false;
                        }
                        this._currentElement = this._q.GetElement(this._index);
                        return true;
                    };
                    Object.defineProperty(Enumerator.prototype, "Current", {
                        get: function () {
                            if (this._index < 0) {
                                if (this._index == -1)
                                    System.ThrowHelper.ThrowInvalidOperationException(22 /* InvalidOperation_EnumNotStarted */);
                                else
                                    System.ThrowHelper.ThrowInvalidOperationException(23 /* InvalidOperation_EnumEnded */);
                            }
                            return this._currentElement;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Enumerator.prototype.Reset = function () {
                        if (this._version != this._q._version)
                            System.ThrowHelper.ThrowInvalidOperationException(20 /* InvalidOperation_EnumFailedVersion */);
                        this._index = -1;
                        this._currentElement = null;
                    };
                    return Enumerator;
                })();
                Queue.Enumerator = Enumerator;
            })(Queue = Generic.Queue || (Generic.Queue = {}));
        })(Generic = Collections.Generic || (Collections.Generic = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Concurrent;
        (function (Concurrent) {
            var ConcurrentQueue = (function (_super) {
                __extends(ConcurrentQueue, _super);
                function ConcurrentQueue() {
                    _super.apply(this, arguments);
                }
                Object.defineProperty(ConcurrentQueue.prototype, "IsEmpty", {
                    get: function () {
                        return this.Count == 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                return ConcurrentQueue;
            })(System.Collections.Generic.Queue);
            Concurrent.ConcurrentQueue = ConcurrentQueue;
        })(Concurrent = Collections.Concurrent || (Collections.Concurrent = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var DictionaryEntry = (function () {
            function DictionaryEntry(key, value) {
                this._key = key;
                this._value = value;
            }
            Object.defineProperty(DictionaryEntry.prototype, "Key", {
                get: function () {
                    return this._key;
                },
                set: function (value) {
                    this._key = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DictionaryEntry.prototype, "Value", {
                get: function () {
                    return this._value;
                },
                set: function (value) {
                    this._value = value;
                },
                enumerable: true,
                configurable: true
            });
            return DictionaryEntry;
        })();
        Collections.DictionaryEntry = DictionaryEntry;
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Generic;
        (function (Generic) {
            var Comparer = (function () {
                function Comparer() {
                }
                Object.defineProperty(Comparer, "Default", {
                    get: function () {
                        var comparer = Comparer.defaultComparer;
                        if (comparer == null) {
                            comparer = Comparer.CreateComparer();
                            Comparer.defaultComparer = comparer;
                        }
                        return comparer;
                    },
                    enumerable: true,
                    configurable: true
                });
                Comparer.Create = function (comparison) {
                    return new ComparisonComparer(comparison);
                };
                Comparer.CreateComparer = function () {
                    return new ObjectComparer();
                };
                Comparer.prototype.Compare = function (x, y) {
                    throw new System.NotSupportedException();
                };
                Comparer.defaultComparer = null;
                return Comparer;
            })();
            Generic.Comparer = Comparer;
            var ObjectComparer = (function (_super) {
                __extends(ObjectComparer, _super);
                function ObjectComparer() {
                    _super.apply(this, arguments);
                }
                ObjectComparer.prototype.Compare = function (x, y) {
                    if (x == null)
                        return y == null ? 0 : -1;
                    if (y == null)
                        return 1;
                    return System.Collections.Comparer.Default.Compare(x, y);
                };
                return ObjectComparer;
            })(Comparer);
            Generic.ObjectComparer = ObjectComparer;
            var ComparisonComparer = (function (_super) {
                __extends(ComparisonComparer, _super);
                function ComparisonComparer(comparison) {
                    _super.call(this);
                    this._comparison = null;
                    this._comparison = comparison;
                }
                ComparisonComparer.prototype.Compare = function (x, y) {
                    if (x == null)
                        return y == null ? 0 : -1;
                    if (y == null)
                        return 1;
                    return this._comparison(x, y);
                };
                return ComparisonComparer;
            })(Comparer);
            Generic.ComparisonComparer = ComparisonComparer;
        })(Generic = Collections.Generic || (Collections.Generic = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Generic;
        (function (Generic) {
            var EqualityComparer = (function () {
                function EqualityComparer() {
                }
                EqualityComparer.prototype.Equals = function (x, y) {
                    if (typeof x["OperatorEquals"] != 'undefined') {
                        return x.OperatorEquals(y);
                    }
                    return x == y;
                };
                EqualityComparer.prototype.GetHashCode = function (obj) {
                    return 0;
                };
                EqualityComparer.Default = new EqualityComparer();
                return EqualityComparer;
            })();
            Generic.EqualityComparer = EqualityComparer;
        })(Generic = Collections.Generic || (Collections.Generic = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Generic;
        (function (Generic) {
            var HashSet = (function () {
                function HashSet(items) {
                    this.list = new Generic.List();
                    if (items === void 0) {
                        return;
                    }
                    this.list.AddRange(items);
                }
                Object.defineProperty(HashSet.prototype, "Count", {
                    get: function () {
                        return this.list.Count;
                    },
                    enumerable: true,
                    configurable: true
                });
                HashSet.prototype.Add = function (item) {
                    if (this.Contains(item)) {
                        return false;
                    }
                    this.list.Add(item);
                };
                HashSet.prototype.Contains = function (item) {
                    return this.list.Contains(item);
                };
                HashSet.prototype.Clear = function () {
                    this.list.Clear();
                };
                HashSet.prototype.GetEnumerator = function () {
                    return this.list.GetEnumerator();
                };
                HashSet.prototype.SetEquals = function (another) {
                    var elementEnumerator = another.GetEnumerator();
                    try {
                        while (elementEnumerator.MoveNext()) {
                            var element = elementEnumerator.Current;
                            if (!this.Contains(element)) {
                                return false;
                            }
                        }
                    }
                    finally {
                        if (elementEnumerator !== null)
                            elementEnumerator.Dispose();
                    }
                    var arr = System.Linq.Enumerable.ToList(another);
                    var elementEnumerator = this.list.GetEnumerator();
                    try {
                        while (elementEnumerator.MoveNext()) {
                            var element = elementEnumerator.Current;
                            if (!arr.Contains(element)) {
                                return false;
                            }
                        }
                    }
                    finally {
                        if (elementEnumerator !== null)
                            elementEnumerator.Dispose();
                    }
                    return true;
                };
                return HashSet;
            })();
            Generic.HashSet = HashSet;
        })(Generic = Collections.Generic || (Collections.Generic = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Generic;
        (function (Generic) {
            var Stack = (function () {
                function Stack(capacity) {
                    this._size = 0;
                    this._version = 0;
                    this._defaultCapacity = 4;
                    this._emptyArray = new Array(0);
                    if ((capacity && typeof capacity === "number")) {
                        this.constructor_Stack_overload0(capacity);
                        return;
                    }
                    if ((typeof capacity != 'undefined')) {
                        this.constructor_Stack_overload1(capacity);
                        return;
                    }
                    if (!capacity) {
                        this.constructor_Stack_overload2();
                        return;
                    }
                }
                Object.defineProperty(Stack.prototype, "Count", {
                    get: function () {
                        return this._size;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Stack.prototype, "IsSynchronized", {
                    get: function () {
                        return false;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Stack.prototype, "SyncRoot", {
                    get: function () {
                        return this._syncRoot;
                    },
                    enumerable: true,
                    configurable: true
                });
                Stack.prototype.Clear = function () {
                    TSArray.Clear(this._array, 0, this._size);
                    this._size = 0;
                    this._version++;
                };
                Stack.prototype.Contains = function (item) {
                    var count = this._size;
                    while (count-- > 0) {
                        if (item == null) {
                            if (this._array[count] == null)
                                return true;
                        }
                        else if (this._array[count] != null && this._array[count] == item) {
                            return true;
                        }
                    }
                    return false;
                };
                Stack.prototype.TrimExcess = function () {
                    var threshold = (this._array.length * 0.9);
                    if (this._size < threshold) {
                        var newarray = new Array(this._size);
                        TSArray.Copy(this._array, 0, newarray, 0, this._size);
                        this._array = newarray;
                        this._version++;
                    }
                };
                Stack.prototype.Peek = function () {
                    if (this._size == 0)
                        System.ThrowHelper.ThrowInvalidOperationException(21 /* InvalidOperation_EmptyStack */);
                    return this._array[this._size - 1];
                };
                Stack.prototype.Pop = function () {
                    if (this._size == 0)
                        System.ThrowHelper.ThrowInvalidOperationException(21 /* InvalidOperation_EmptyStack */);
                    this._version++;
                    var item = this._array[--this._size];
                    this._array[this._size] = null;
                    return item;
                };
                Stack.prototype.Push = function (item) {
                    if (this._size == this._array.length) {
                        var newArray = new Array((this._array.length == 0) ? this._defaultCapacity : 2 * this._array.length);
                        TSArray.Copy(this._array, 0, newArray, 0, this._size);
                        this._array = newArray;
                    }
                    this._array[this._size++] = item;
                    this._version++;
                };
                Stack.prototype.ToArray = function () {
                    var objArray = new Array(this._size);
                    var i = 0;
                    while (i < this._size) {
                        objArray[i] = this._array[this._size - i - 1];
                        i++;
                    }
                    return objArray;
                };
                Stack.prototype.constructor_Stack_overload0 = function (capacity) {
                    if (capacity < 0)
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(10 /* capacity */, 2 /* ArgumentOutOfRange_NeedNonNegNumRequired */);
                    this._array = new Array(capacity);
                    this._size = 0;
                    this._version = 0;
                };
                Stack.prototype.constructor_Stack_overload1 = function (collection) {
                    if (collection == null)
                        System.ThrowHelper.ThrowArgumentNullException(5 /* collection */);
                    if (typeof collection.CopyTo != "undefined") {
                        var c = collection;
                        var count = c.Count;
                        this._array = new Array(count);
                        c.CopyTo(this._array, 0);
                        this._size = count;
                    }
                    else {
                        this._size = 0;
                        this._array = new Array(this._defaultCapacity);
                        var en = collection.GetEnumerator();
                        try {
                            while (en.MoveNext()) {
                                this.Push(en.Current);
                            }
                        }
                        finally {
                            if (en != null)
                                en.Dispose();
                        }
                    }
                };
                Stack.prototype.constructor_Stack_overload2 = function () {
                    this._array = this._emptyArray;
                    this._size = 0;
                    this._version = 0;
                };
                Stack.prototype.CopyTo = function (array, arrayIndex) {
                    if ((array && array instanceof Array) && arrayIndex) {
                        return this.CopyTo_overload0(array, arrayIndex);
                    }
                };
                Stack.prototype.CopyTo_overload0 = function (array, arrayIndex) {
                    if (array == null) {
                        System.ThrowHelper.ThrowArgumentNullException(2 /* array */);
                    }
                    if (arrayIndex < 0 || arrayIndex > array.length) {
                        System.ThrowHelper.ThrowArgumentOutOfRangeException(15 /* arrayIndex */, 1 /* ArgumentOutOfRange_NeedNonNegNum */);
                    }
                    if (array.length - arrayIndex < this._size) {
                        System.ThrowHelper.ThrowArgumentException(14 /* Argument_InvalidOffLen */);
                    }
                    try {
                        TSArray.Copy(this._array, 0, array, arrayIndex, this._size);
                        TSArray.Reverse(array, arrayIndex, this._size);
                    }
                    catch (err) {
                        System.ThrowHelper.ThrowArgumentException(10 /* Argument_InvalidArrayType */);
                    }
                };
                Stack.prototype.GetEnumerator = function () {
                    return this.GetEnumerator_overload0();
                };
                Stack.prototype.GetEnumerator_overload0 = function () {
                    return new Stack.Enumerator(this);
                };
                return Stack;
            })();
            Generic.Stack = Stack;
            var Stack;
            (function (Stack) {
                var Enumerator = (function () {
                    function Enumerator(stack) {
                        this._index = 0;
                        this._version = 0;
                        this._stack = stack;
                        this._version = this._stack._version;
                        this._index = -2;
                        this.currentElement = null;
                    }
                    Enumerator.prototype.Dispose = function () {
                        this._index = -1;
                    };
                    Enumerator.prototype.MoveNext = function () {
                        var retval;
                        if (this._version != this._stack._version)
                            System.ThrowHelper.ThrowInvalidOperationException(20 /* InvalidOperation_EnumFailedVersion */);
                        if (this._index == -2) {
                            this._index = this._stack._size - 1;
                            retval = (this._index >= 0);
                            if (retval)
                                this.currentElement = this._stack._array[this._index];
                            return retval;
                        }
                        if (this._index == -1) {
                            return false;
                        }
                        retval = (--this._index >= 0);
                        if (retval)
                            this.currentElement = this._stack._array[this._index];
                        else
                            this.currentElement = null;
                        return retval;
                    };
                    Object.defineProperty(Enumerator.prototype, "Current", {
                        get: function () {
                            if (this._index == -2)
                                System.ThrowHelper.ThrowInvalidOperationException(22 /* InvalidOperation_EnumNotStarted */);
                            if (this._index == -1)
                                System.ThrowHelper.ThrowInvalidOperationException(23 /* InvalidOperation_EnumEnded */);
                            return this.currentElement;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Enumerator.prototype.Reset = function () {
                        if (this._version != this._stack._version)
                            System.ThrowHelper.ThrowInvalidOperationException(20 /* InvalidOperation_EnumFailedVersion */);
                        this._index = -2;
                        this.currentElement = null;
                    };
                    return Enumerator;
                })();
                Stack.Enumerator = Enumerator;
            })(Stack = Generic.Stack || (Generic.Stack = {}));
        })(Generic = Collections.Generic || (Collections.Generic = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Immutable;
        (function (Immutable) {
            var AllocFreeConcurrentStack = (function () {
                function AllocFreeConcurrentStack() {
                }
                AllocFreeConcurrentStack.TryAdd = function (item) {
                    var localStack = AllocFreeConcurrentStack.t_stack;
                    if (localStack == null) {
                        AllocFreeConcurrentStack.t_stack = localStack = new System.Collections.Generic.Stack(AllocFreeConcurrentStack.MaxSize);
                    }
                    if (localStack.Count < AllocFreeConcurrentStack.MaxSize) {
                        localStack.Push(item);
                    }
                };
                AllocFreeConcurrentStack.TryTake = function (item) {
                    var localStack = AllocFreeConcurrentStack.t_stack;
                    if (localStack != null && localStack.Count > 0) {
                        item.refObj = localStack.Pop().Value;
                        return true;
                    }
                    item.refObj = null;
                    return false;
                };
                AllocFreeConcurrentStack.MaxSize = 35;
                AllocFreeConcurrentStack.t_stack = null;
                return AllocFreeConcurrentStack;
            })();
            Immutable.AllocFreeConcurrentStack = AllocFreeConcurrentStack;
        })(Immutable = Collections.Immutable || (Collections.Immutable = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Immutable;
        (function (Immutable) {
            var DictionaryEnumerator = (function () {
                function DictionaryEnumerator(inner) {
                    this._inner = null;
                    this._inner = inner;
                }
                Object.defineProperty(DictionaryEnumerator.prototype, "Entry", {
                    get: function () {
                        return new Collections.DictionaryEntry(this._inner.Current.Key, this._inner.Current.Value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DictionaryEnumerator.prototype, "Key", {
                    get: function () {
                        return this._inner.Current.Key;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DictionaryEnumerator.prototype, "Value", {
                    get: function () {
                        return this._inner.Current.Value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DictionaryEnumerator.prototype, "Current", {
                    get: function () {
                        return this.Entry;
                    },
                    enumerable: true,
                    configurable: true
                });
                DictionaryEnumerator.prototype.MoveNext = function () {
                    return this._inner.MoveNext();
                };
                DictionaryEnumerator.prototype.Reset = function () {
                    this._inner.Reset();
                };
                return DictionaryEnumerator;
            })();
            Immutable.DictionaryEnumerator = DictionaryEnumerator;
        })(Immutable = Collections.Immutable || (Collections.Immutable = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Immutable;
        (function (Immutable) {
            var DisposableEnumeratorAdapter = (function () {
                function DisposableEnumeratorAdapter(enumerator, obj) {
                    this._enumeratorObject = null;
                    this._enumeratorStruct = null;
                    if ((enumerator && obj)) {
                        this.constructor_DisposableEnumeratorAdapter_overload0(enumerator);
                    }
                    if (enumerator) {
                        this.constructor_DisposableEnumeratorAdapter_overload1(enumerator);
                    }
                }
                Object.defineProperty(DisposableEnumeratorAdapter.prototype, "Current", {
                    get: function () {
                        return this._enumeratorObject != null ? this._enumeratorObject.Current : this._enumeratorStruct.Current;
                    },
                    enumerable: true,
                    configurable: true
                });
                DisposableEnumeratorAdapter.prototype.MoveNext = function () {
                    return this._enumeratorObject != null ? this._enumeratorObject.MoveNext() : this._enumeratorStruct.MoveNext();
                };
                DisposableEnumeratorAdapter.prototype.Dispose = function () {
                    if (this._enumeratorObject != null) {
                        this._enumeratorObject.Dispose();
                    }
                    else {
                        this._enumeratorStruct.Dispose();
                    }
                };
                DisposableEnumeratorAdapter.prototype.GetEnumerator = function () {
                    return this;
                };
                DisposableEnumeratorAdapter.prototype.constructor_DisposableEnumeratorAdapter_overload0 = function (enumerator) {
                    this._enumeratorStruct = null;
                    this._enumeratorObject = enumerator;
                };
                DisposableEnumeratorAdapter.prototype.constructor_DisposableEnumeratorAdapter_overload1 = function (enumerator) {
                    this._enumeratorStruct = enumerator;
                    this._enumeratorObject = null;
                };
                return DisposableEnumeratorAdapter;
            })();
            Immutable.DisposableEnumeratorAdapter = DisposableEnumeratorAdapter;
        })(Immutable = Collections.Immutable || (Collections.Immutable = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Immutable;
        (function (Immutable) {
            var EnumeratorAdapter = (function () {
                function EnumeratorAdapter(enumerator, obj) {
                    this._enumeratorObject = null;
                    this._enumeratorStruct = null;
                    if ((enumerator && obj)) {
                        this.constructor_EnumeratorAdapter_overload0(enumerator);
                    }
                    if (enumerator) {
                        this.constructor_EnumeratorAdapter_overload1(enumerator);
                    }
                }
                Object.defineProperty(EnumeratorAdapter.prototype, "Current", {
                    get: function () {
                        return this._enumeratorObject != null ? this._enumeratorObject.Current : this._enumeratorStruct.Current;
                    },
                    enumerable: true,
                    configurable: true
                });
                EnumeratorAdapter.prototype.MoveNext = function () {
                    return this._enumeratorObject != null ? this._enumeratorObject.MoveNext() : this._enumeratorStruct.MoveNext();
                };
                EnumeratorAdapter.prototype.GetEnumerator = function () {
                    return this;
                };
                EnumeratorAdapter.prototype.constructor_EnumeratorAdapter_overload0 = function (enumerator) {
                    this._enumeratorStruct = null;
                    this._enumeratorObject = enumerator;
                };
                EnumeratorAdapter.prototype.constructor_EnumeratorAdapter_overload1 = function (enumerator) {
                    this._enumeratorStruct = enumerator;
                    this._enumeratorObject = null;
                };
                return EnumeratorAdapter;
            })();
            Immutable.EnumeratorAdapter = EnumeratorAdapter;
        })(Immutable = Collections.Immutable || (Collections.Immutable = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Immutable;
        (function (Immutable) {
            var ImmutableArray = (function () {
                function ImmutableArray(param0) {
                    this.array = null;
                    if (typeof param0 == 'undefined') {
                        this.constructor_ImmutableArray_overload1();
                        return;
                    }
                    if (param0 instanceof Array) {
                        this.constructor_ImmutableArray_overload0(param0);
                        return;
                    }
                    throw new System.Error('overload failed');
                }
                Object.defineProperty(ImmutableArray.prototype, "IsDefault", {
                    get: function () {
                        return this.array == null;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImmutableArray.prototype, "Length", {
                    get: function () {
                        return this.array.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                ImmutableArray.prototype.$get$ = function (index) {
                    return this.array[index];
                };
                Object.defineProperty(ImmutableArray.prototype, "IsEmpty", {
                    get: function () {
                        return this.Length == 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                ImmutableArray.prototype.Contains = function (item) {
                    return this.IndexOf(item) >= 0;
                };
                Object.defineProperty(ImmutableArray.prototype, "IsDefaultOrEmpty", {
                    get: function () {
                        var self = this;
                        return self.array == null || self.array.length == 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ImmutableArray.prototype, "Count", {
                    get: function () {
                        return this.array.length;
                    },
                    enumerable: true,
                    configurable: true
                });
                ImmutableArray.prototype.ToBuilder = function () {
                    var self = this;
                    if (self.Length == 0) {
                        return new ImmutableArray.Builder();
                    }
                    var builder = new ImmutableArray.Builder(self.Length);
                    builder.AddRange(self);
                    return builder;
                };
                ImmutableArray.prototype.constructor_ImmutableArray_overload0 = function (items) {
                    this.array = items;
                };
                ImmutableArray.prototype.constructor_ImmutableArray_overload1 = function () {
                };
                ImmutableArray.prototype.GetEnumerator = function () {
                    return this.GetEnumerator_overload0();
                    return this.GetEnumerator_overload1();
                };
                ImmutableArray.prototype.GetEnumerator_overload0 = function () {
                    var self = this;
                    return ImmutableArray.EnumeratorObject.Create(self.array);
                };
                ImmutableArray.prototype.GetEnumerator_overload1 = function () {
                    var self = this;
                    return ImmutableArray.EnumeratorObject.Create(self.array);
                };
                ImmutableArray.prototype.IndexOf = function (param0, param1, param2, param3) {
                    if (typeof param0 != 'undefined' && typeof param1 == 'number' && typeof param2 == 'number' && typeof param3 != 'undefined') {
                        return this.IndexOf_overload0(param0, param1, param2, param3);
                    }
                    if (typeof param0 != 'undefined' && typeof param1 == 'undefined' && typeof param2 == 'undefined' && typeof param3 == 'undefined') {
                        return this.IndexOf_overload1(param0);
                    }
                    throw new System.Error('overload failed');
                };
                ImmutableArray.prototype.IndexOf_overload0 = function (item, startIndex, count, equalityComparer) {
                    var self = this;
                    if (count == 0 && startIndex == 0) {
                        return -1;
                    }
                    if (equalityComparer == System.Collections.Generic.EqualityComparer.Default) {
                        return TSArray.IndexOf(self.array, item, startIndex, count);
                    }
                    else {
                        for (var i = startIndex; i < startIndex + count; i++) {
                            if (equalityComparer.Equals(self.array[i], item)) {
                                return i;
                            }
                        }
                        return -1;
                    }
                };
                ImmutableArray.prototype.IndexOf_overload1 = function (item) {
                    var self = this;
                    return self.IndexOf(item, 0, self.Length, System.Collections.Generic.EqualityComparer.Default);
                };
                ImmutableArray.CreateBuilder = function (size) {
                    return ImmutableArray.Create().ToBuilder();
                };
                ImmutableArray.CreateRange = function (items) {
                    if (items instanceof ImmutableArray) {
                        var immutableArray = items;
                        var existingImmutableArray = immutableArray.array;
                        if (existingImmutableArray != null) {
                            return new ImmutableArray(existingImmutableArray);
                        }
                    }
                    var count = 0;
                    if ((function () {
                        var count_ref0 = { refObj: count };
                        var ret_val_ = System.Linq.ImmutableExtensions.TryGetCount(items, count_ref0);
                        count = count_ref0.refObj;
                        return ret_val_;
                    })()) {
                        if (count == 0) {
                            return ImmutableArray.Create();
                        }
                        else {
                            return new ImmutableArray(System.Linq.ImmutableExtensions.ToArray(items, count));
                        }
                    }
                    else {
                        return new ImmutableArray(System.Linq.Enumerable.ToArray(items));
                    }
                };
                ImmutableArray.ToImmutableArray = function (items) {
                    if (items instanceof ImmutableArray) {
                        return items;
                    }
                    return ImmutableArray.CreateRange(items);
                };
                ImmutableArray.CreateDefensiveCopy = function (items) {
                    if (items == null) {
                        return ImmutableArray.Empty;
                    }
                    if (items.length == 0) {
                        return ImmutableArray.Empty;
                    }
                    var tmp = new Array(items.length);
                    TSArray.Copy(items, tmp, items.length);
                    return new ImmutableArray(tmp);
                };
                ImmutableArray.BinarySearch = function (array, value) {
                    return TSArray.BinarySearch(array.array, value);
                };
                ImmutableArray.Create = function (param0, param1, param2, param3) {
                    if (param0 instanceof Array) {
                        return this.Create_overload6(param0);
                    }
                    if (param0 instanceof ImmutableArray) {
                        return this.Create_overload4(param0);
                    }
                    if (typeof param0 != 'undefined' && typeof param1 == 'undefined' && typeof param2 == 'undefined' && typeof param3 == 'undefined') {
                        return this.Create_overload0(param0);
                    }
                    if (typeof param0 != 'undefined' && typeof param1 != 'undefined' && typeof param2 == 'undefined' && typeof param3 == 'undefined') {
                        return this.Create_overload1(param0, param1);
                    }
                    if (typeof param0 != 'undefined' && typeof param1 != 'undefined' && typeof param2 != 'undefined' && typeof param3 == 'undefined') {
                        return this.Create_overload2(param0, param1, param2);
                    }
                    if (typeof param0 != 'undefined' && typeof param1 != 'undefined' && typeof param2 != 'undefined' && typeof param3 != 'undefined') {
                        return this.Create_overload3(param0, param1, param2, param3);
                    }
                    if (typeof param0 == 'undefined' && typeof param1 == 'undefined' && typeof param2 == 'undefined' && typeof param3 == 'undefined') {
                        return this.Create_overload5();
                    }
                    throw new System.Error('overload failed');
                };
                ImmutableArray.Create_overload0 = function (item) {
                    var array = new Array(item);
                    return new ImmutableArray(array);
                };
                ImmutableArray.Create_overload1 = function (item1, item2) {
                    var array = new Array(item1, item2);
                    return new ImmutableArray(array);
                };
                ImmutableArray.Create_overload2 = function (item1, item2, item3) {
                    var array = new Array(item1, item2, item3);
                    return new ImmutableArray(array);
                };
                ImmutableArray.Create_overload3 = function (item1, item2, item3, item4) {
                    var array = new Array(item1, item2, item3, item4);
                    return new ImmutableArray(array);
                };
                ImmutableArray.Create_overload4 = function (items) {
                    return new ImmutableArray(items.array);
                };
                ImmutableArray.Create_overload5 = function () {
                    return ImmutableArray.Empty;
                };
                ImmutableArray.Create_overload6 = function (items) {
                    if (items == null) {
                        return ImmutableArray.Create();
                    }
                    return ImmutableArray.CreateDefensiveCopy(items);
                };
                ImmutableArray.Empty = new ImmutableArray(new Array(0));
                return ImmutableArray;
            })();
            Immutable.ImmutableArray = ImmutableArray;
            var ImmutableArray;
            (function (ImmutableArray) {
                var Builder = (function () {
                    function Builder(param0) {
                        this._elements = null;
                        this._count = 0;
                        if (typeof param0 == 'number') {
                            this.constructor_Builder_overload1(param0);
                            return;
                        }
                        if (typeof param0 == 'undefined') {
                            this.constructor_Builder_overload1(8);
                            this.constructor_Builder_overload0();
                            return;
                        }
                    }
                    Object.defineProperty(Builder.prototype, "Count", {
                        get: function () {
                            return this._count;
                        },
                        set: function (value) {
                            if (value < this._count) {
                                var e = this._elements;
                                if (this._count - value > 64) {
                                    TSArray.Clear(this._elements, value, this._count - value);
                                }
                                else {
                                    for (var i = value; i < this.Count; i++) {
                                        this._elements[i] = null;
                                    }
                                }
                            }
                            else if (value > this._count) {
                                this.EnsureCapacity(value);
                            }
                            this._count = value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Builder.prototype.$get$ = function (index) {
                        return this._elements[index];
                    };
                    Builder.prototype.$set$ = function (index, value) {
                        this._elements[index] = value;
                    };
                    Builder.prototype.Add = function (item) {
                        this.EnsureCapacity(this.Count + 1);
                        this._elements[this._count++] = item;
                    };
                    Builder.prototype.Insert = function (index, item) {
                        this.EnsureCapacity(this.Count + 1);
                        if (index < this.Count) {
                            TSArray.Copy(this._elements, index, this._elements, index + 1, this.Count - index);
                        }
                        this._count++;
                        this._elements[index] = item;
                    };
                    Builder.prototype.ToImmutable = function () {
                        if (this.Count == 0) {
                            return ImmutableArray.Empty;
                        }
                        return new ImmutableArray(this.ToArray());
                    };
                    Builder.prototype.Clear = function () {
                        this.Count = 0;
                    };
                    Builder.prototype.Remove = function (element) {
                        var index = this.IndexOf(element);
                        if (index >= 0) {
                            this.RemoveAt(index);
                            return true;
                        }
                        return false;
                    };
                    Builder.prototype.RemoveAt = function (index) {
                        if (index < this.Count - 1) {
                            TSArray.Copy(this._elements, index + 1, this._elements, index, this.Count - index - 1);
                        }
                        this.Count--;
                    };
                    Builder.prototype.EnsureCapacity = function (capacity) {
                        if (this._elements.length < capacity) {
                            var newCapacity = System.Math.Max(this._elements.length * 2, capacity);
                            var newArray = new Array(newCapacity);
                            TSArray.Copy(this._elements, 0, newArray, 0, this._elements.length);
                            this._elements = newArray;
                        }
                    };
                    Builder.prototype.Contains = function (item) {
                        return this.IndexOf(item) >= 0;
                    };
                    Builder.prototype.ToArray = function () {
                        var tmp = new Array(this.Count);
                        var elements = this._elements;
                        for (var i = 0; i < tmp.length; i++) {
                            tmp[i] = elements[i];
                        }
                        return tmp;
                    };
                    Builder.prototype.constructor_Builder_overload0 = function () {
                    };
                    Builder.prototype.constructor_Builder_overload1 = function (capacity) {
                        this._elements = new Array(capacity);
                        this.Count = 0;
                    };
                    Builder.prototype.IndexOf = function (param0, param1, param2, param3) {
                        if (typeof param0 != 'undefined' && typeof param1 == 'number' && typeof param2 == 'number' && typeof param3 != 'undefined') {
                            return this.IndexOf_overload0(param0, param1, param2, param3);
                        }
                        if (typeof param0 != 'undefined' && typeof param1 == 'undefined' && typeof param2 == 'undefined' && typeof param3 == 'undefined') {
                            return this.IndexOf_overload1(param0);
                        }
                        throw new System.Error('overload failed');
                    };
                    Builder.prototype.IndexOf_overload0 = function (item, startIndex, count, equalityComparer) {
                        if (count == 0 && startIndex == 0) {
                            return -1;
                        }
                        if (equalityComparer == System.Collections.Generic.EqualityComparer.Default) {
                            return TSArray.IndexOf(this._elements, item, startIndex, count);
                        }
                        else {
                            for (var i = startIndex; i < startIndex + count; i++) {
                                if (equalityComparer.Equals(this._elements[i], item)) {
                                    return i;
                                }
                            }
                            return -1;
                        }
                    };
                    Builder.prototype.IndexOf_overload1 = function (item) {
                        return this.IndexOf(item, 0, this._count, System.Collections.Generic.EqualityComparer.Default);
                    };
                    Builder.prototype.AddRange = function (param0, param1) {
                        if (param0 instanceof Array && typeof param1 == 'number') {
                            return this.AddRange_overload1(param0, param1);
                        }
                        if (param0 instanceof ImmutableArray && typeof param1 == 'number') {
                            return this.AddRange_overload0(param0, param1);
                        }
                        if (typeof param0 != 'undefined' && typeof param1 == 'undefined') {
                            return this.AddRange_overload2(param0);
                        }
                        throw new System.Error('overload failed');
                    };
                    Builder.prototype.AddRange_overload0 = function (items, length) {
                        if (items.array != null) {
                            this.AddRange(items.array, length);
                        }
                    };
                    Builder.prototype.AddRange_overload1 = function (items, length) {
                        var offset = this.Count;
                        this.Count += length;
                        var nodes = this._elements;
                        for (var i = 0; i < length; i++) {
                            nodes[offset + i] = items[i];
                        }
                    };
                    Builder.prototype.AddRange_overload2 = function (items) {
                        var count = 0;
                        if ((function () {
                            var count_ref0 = { refObj: count };
                            var ret_val_ = System.Linq.ImmutableExtensions.TryGetCount(items, count_ref0);
                            count = count_ref0.refObj;
                            return ret_val_;
                        })()) {
                            this.EnsureCapacity(this.Count + count);
                        }
                        var itemEnumerator = items.GetEnumerator();
                        try {
                            while (itemEnumerator.MoveNext()) {
                                var item = itemEnumerator.Current;
                                this.Add(item);
                            }
                        }
                        finally {
                            if (typeof itemEnumerator['Dispose'] != 'undefined')
                                itemEnumerator.Dispose();
                        }
                    };
                    return Builder;
                })();
                ImmutableArray.Builder = Builder;
            })(ImmutableArray = Immutable.ImmutableArray || (Immutable.ImmutableArray = {}));
            var ImmutableArray;
            (function (ImmutableArray) {
                var Enumerator = (function () {
                    function Enumerator(array) {
                        this._array = null;
                        this._index = 0;
                        this._array = array;
                        this._index = -1;
                    }
                    Object.defineProperty(Enumerator.prototype, "Current", {
                        get: function () {
                            return this._array[this._index];
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Enumerator.prototype.MoveNext = function () {
                        return ++this._index < this._array.length;
                    };
                    return Enumerator;
                })();
                ImmutableArray.Enumerator = Enumerator;
            })(ImmutableArray = Immutable.ImmutableArray || (Immutable.ImmutableArray = {}));
            var ImmutableArray;
            (function (ImmutableArray) {
                var EnumeratorObject = (function () {
                    function EnumeratorObject(array) {
                        this._array = null;
                        this._index = 0;
                        this._index = -1;
                        this._array = array;
                    }
                    Object.defineProperty(EnumeratorObject.prototype, "Current", {
                        get: function () {
                            if (this._index < this._array.length) {
                                return this._array[this._index];
                            }
                            throw new System.InvalidOperationException("");
                        },
                        enumerable: true,
                        configurable: true
                    });
                    EnumeratorObject.prototype.MoveNext = function () {
                        var newIndex = this._index + 1;
                        var length = this._array.length;
                        if (newIndex <= length) {
                            this._index = newIndex;
                            return newIndex < length;
                        }
                        return false;
                    };
                    EnumeratorObject.prototype.Reset = function () {
                        this._index = -1;
                    };
                    EnumeratorObject.prototype.Dispose = function () {
                    };
                    EnumeratorObject.Create = function (array) {
                        if (array.length != 0) {
                            return new EnumeratorObject(array);
                        }
                        else {
                            return EnumeratorObject.s_EmptyEnumerator;
                        }
                    };
                    EnumeratorObject.s_EmptyEnumerator = new EnumeratorObject(ImmutableArray.Empty.array);
                    return EnumeratorObject;
                })();
                ImmutableArray.EnumeratorObject = EnumeratorObject;
            })(ImmutableArray = Immutable.ImmutableArray || (Immutable.ImmutableArray = {}));
        })(Immutable = Collections.Immutable || (Collections.Immutable = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Immutable;
        (function (Immutable) {
            var ImmutableDictionary = (function () {
                function ImmutableDictionary(isNumberOrStrKey) {
                    this.innerDic = null;
                    if (isNumberOrStrKey !== void 0) {
                        isNumberOrStrKey = false;
                    }
                    this.innerDic = isNumberOrStrKey ? new System.Collections.Generic.Dictionary() : new System.Collections.Generic.ObjectDictionary();
                }
                ImmutableDictionary.prototype.SetItem = function (key, value) {
                    var cloned = this.Clone();
                    cloned.$set$(key, value);
                    var newDic = new ImmutableDictionary();
                    newDic.innerDic = cloned;
                    return newDic;
                };
                ImmutableDictionary.prototype.TryGetValue = function (key, value) {
                    var value_ref0 = { refObj: value.refObj };
                    var ret_val_ = this.innerDic.TryGetValue(key, value);
                    value.refObj = value_ref0.refObj;
                    return ret_val_;
                };
                ImmutableDictionary.prototype.Clone = function () {
                    return this.innerDic.Clone();
                };
                ImmutableDictionary.Create = function () {
                    return ImmutableDictionary.Empty;
                };
                ImmutableDictionary.ToImmutableDictionary = function (dic) {
                    var result = new ImmutableDictionary();
                    result.innerDic = dic.Clone();
                    return result;
                };
                ImmutableDictionary.Empty = new ImmutableDictionary();
                return ImmutableDictionary;
            })();
            Immutable.ImmutableDictionary = ImmutableDictionary;
        })(Immutable = Collections.Immutable || (Collections.Immutable = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Immutable;
        (function (Immutable) {
            var ImmutableInterlocked = (function () {
                function ImmutableInterlocked() {
                }
                ImmutableInterlocked.InterlockedInitialize = function (localtion, value) {
                    localtion.refObj = value;
                };
                ImmutableInterlocked.InterlockedCompareExchange = function (lazyHash, immutableArray1, immutableArray2) {
                    var original = lazyHash.refObj.array;
                    if (lazyHash.refObj.array == immutableArray2.array) {
                        lazyHash.refObj.array = immutableArray1.array;
                    }
                    return new Immutable.ImmutableArray(original);
                };
                return ImmutableInterlocked;
            })();
            Immutable.ImmutableInterlocked = ImmutableInterlocked;
        })(Immutable = Collections.Immutable || (Collections.Immutable = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Immutable;
        (function (Immutable) {
            var ImmutableStack = (function () {
                function ImmutableStack(param0, param1) {
                    this._head = null;
                    this._tail = null;
                    if (typeof param0 == 'undefined' && typeof param1 == 'undefined') {
                        this.constructor_ImmutableStack_overload1();
                        return;
                    }
                    if (typeof param0 != 'undefined' && param1 instanceof ImmutableStack) {
                        this.constructor_ImmutableStack_overload0(param0, param1);
                        return;
                    }
                    throw new System.Error('overload failed');
                }
                ImmutableStack.prototype.Push = function (value) {
                    return new ImmutableStack(value, this);
                };
                ImmutableStack.prototype.Peek = function () {
                    return this._head;
                };
                Object.defineProperty(ImmutableStack.prototype, "IsEmpty", {
                    get: function () {
                        return this._tail == null;
                    },
                    enumerable: true,
                    configurable: true
                });
                ImmutableStack.prototype.Pop = function () {
                    return this._tail;
                };
                Object.defineProperty(ImmutableStack, "Empty", {
                    get: function () {
                        return ImmutableStack.s_EmptyField;
                    },
                    enumerable: true,
                    configurable: true
                });
                ImmutableStack.prototype.constructor_ImmutableStack_overload0 = function (head, tail) {
                    this._head = head;
                    this._tail = tail;
                };
                ImmutableStack.prototype.constructor_ImmutableStack_overload1 = function () {
                };
                ImmutableStack.Create = function () {
                    return ImmutableStack.Empty;
                };
                ImmutableStack.s_EmptyField = new ImmutableStack();
                return ImmutableStack;
            })();
            Immutable.ImmutableStack = ImmutableStack;
        })(Immutable = Collections.Immutable || (Collections.Immutable = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Immutable;
        (function (Immutable) {
            var RefAsValueType = (function () {
                function RefAsValueType(value) {
                    this.Value = value;
                }
                return RefAsValueType;
            })();
            Immutable.RefAsValueType = RefAsValueType;
        })(Immutable = Collections.Immutable || (Collections.Immutable = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Collections;
    (function (Collections) {
        var Immutable;
        (function (Immutable) {
            var SecureObjectPoolBase = (function () {
                function SecureObjectPoolBase() {
                }
                SecureObjectPoolBase.NewId = function () {
                    var result = 0;
                    do {
                        SecureObjectPoolBase.s_poolUserIdCounter++;
                        result = SecureObjectPoolBase.s_poolUserIdCounter;
                    } while (result == SecureObjectPoolBase.UnassignedId);
                    return result;
                };
                SecureObjectPoolBase.s_poolUserIdCounter = 0;
                SecureObjectPoolBase.UnassignedId = -1;
                return SecureObjectPoolBase;
            })();
            Immutable.SecureObjectPoolBase = SecureObjectPoolBase;
            var SecureObjectPool = (function () {
                function SecureObjectPool() {
                }
                SecureObjectPool.prototype.TryAdd = function (caller, item) {
                    if (caller.PoolUserId == item.Owner) {
                        item.Owner = SecureObjectPoolBase.UnassignedId;
                        Immutable.AllocFreeConcurrentStack.TryAdd(item);
                    }
                };
                SecureObjectPool.prototype.TryTake = function (caller, item) {
                    if (caller.PoolUserId != SecureObjectPoolBase.UnassignedId && (function () {
                        var item_ref = { refObj: item.refObj };
                        var ret_val_ = Immutable.AllocFreeConcurrentStack.TryTake(item_ref);
                        item.refObj = item_ref.refObj;
                        return ret_val_;
                    })()) {
                        item.refObj.Owner = caller.PoolUserId;
                        return true;
                    }
                    else {
                        item.refObj = null;
                        return false;
                    }
                };
                SecureObjectPool.prototype.PrepNew = function (caller, newValue) {
                    var pooledObject = new SecurePooledObject(newValue);
                    pooledObject.Owner = caller.PoolUserId;
                    return pooledObject;
                };
                return SecureObjectPool;
            })();
            Immutable.SecureObjectPool = SecureObjectPool;
            var SecurePooledObject = (function () {
                function SecurePooledObject(newValue) {
                    this._value = null;
                    this._owner = 0;
                    this._value = newValue;
                }
                Object.defineProperty(SecurePooledObject.prototype, "Owner", {
                    get: function () {
                        return this._owner;
                    },
                    set: function (value) {
                        this._owner = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                SecurePooledObject.prototype.Use = function (caller) {
                    return this._value;
                };
                SecurePooledObject.prototype.TryUse = function (caller, value) {
                    if (this.IsOwned(caller)) {
                        value.refObj = this._value;
                        return true;
                    }
                    else {
                        value.refObj = null;
                        return false;
                    }
                };
                SecurePooledObject.prototype.IsOwned = function (caller) {
                    return caller.PoolUserId == this._owner;
                };
                return SecurePooledObject;
            })();
            Immutable.SecurePooledObject = SecurePooledObject;
        })(Immutable = Collections.Immutable || (Collections.Immutable = {}));
    })(Collections = System.Collections || (System.Collections = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Convert = (function () {
        function Convert() {
        }
        Convert.ToString = function (object, format) {
            if (object.ToString !== void 0) {
                return object.ToString();
            }
            return object.toString();
        };
        return Convert;
    })();
    System.Convert = Convert;
})(System || (System = {}));
var System;
(function (System) {
    var Diagnostics;
    (function (Diagnostics) {
        var Debug = (function () {
            function Debug() {
            }
            Object.defineProperty(Debug.prototype, "AutoFlush", {
                get: function () {
                    return false;
                },
                set: function (value) {
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Debug.prototype, "IndentLevel", {
                get: function () {
                    return 0;
                },
                set: function (value) {
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Debug.prototype, "IndentSize", {
                get: function () {
                    return 0;
                },
                set: function (value) {
                },
                enumerable: true,
                configurable: true
            });
            Debug.Flush = function () {
            };
            Debug.Close = function () {
            };
            Debug.Indent = function () {
            };
            Debug.Unindent = function () {
            };
            Debug.Assert = function (condition, message, detailMessage, args) {
                if (condition && message && !detailMessage && !args) {
                    return this.Assert_overload0(condition, message);
                }
                if (condition && message && detailMessage && !args) {
                    return this.Assert_overload1(condition, message, detailMessage);
                }
                if (condition && message && detailMessage && args) {
                    return this.Assert_overload2(condition, message, detailMessage, args);
                }
                if (condition && !message && !detailMessage && !args) {
                    return this.Assert_overload3(condition);
                }
            };
            Debug.Assert_overload0 = function (condition, message) {
            };
            Debug.Assert_overload1 = function (condition, message, detailMessage) {
            };
            Debug.Assert_overload2 = function (condition, message, detailMessageFormat) {
                var args = [];
                for (var _i = 3; _i < arguments.length; _i++) {
                    args[_i - 3] = arguments[_i];
                }
            };
            Debug.Assert_overload3 = function (condition) {
            };
            Debug.Fail = function (message, detailMessage) {
                if (message && detailMessage) {
                    return this.Fail_overload0(message, detailMessage);
                }
                if (message && !detailMessage) {
                    return this.Fail_overload1(message);
                }
            };
            Debug.Fail_overload0 = function (message, detailMessage) {
            };
            Debug.Fail_overload1 = function (message) {
            };
            Debug.Print = function (format, args) {
                if (format && args) {
                    return this.Print_overload0(format, args);
                }
                if (format && !args) {
                    return this.Print_overload1(format);
                }
            };
            Debug.Print_overload0 = function (format) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
            };
            Debug.Print_overload1 = function (message) {
            };
            Debug.Write = function (value, category) {
                if ((value && value instanceof Object) && !category) {
                    return this.Write_overload0(value);
                }
                if ((value && typeof value === "string") && category) {
                    return this.Write_overload1(value, category);
                }
                if ((value && value instanceof Object) && category) {
                    return this.Write_overload2(value, category);
                }
                if ((value && typeof value === "string") && !category) {
                    return this.Write_overload3(value);
                }
            };
            Debug.Write_overload0 = function (value) {
            };
            Debug.Write_overload1 = function (message, category) {
            };
            Debug.Write_overload2 = function (value, category) {
            };
            Debug.Write_overload3 = function (message) {
            };
            Debug.WriteLine = function (value, category) {
                if ((value && value instanceof Object) && !category) {
                    return this.WriteLine_overload0(value);
                }
                if ((value && typeof value === "string") && (category && typeof category === "string")) {
                    return this.WriteLine_overload1(value, category);
                }
                if ((value && value instanceof Object) && (category && typeof category === "string")) {
                    return this.WriteLine_overload2(value, category);
                }
                if ((value && typeof value === "string") && (category && category instanceof Array)) {
                    return this.WriteLine_overload3(value, category);
                }
                if ((value && typeof value === "string") && !category) {
                    return this.WriteLine_overload4(value);
                }
            };
            Debug.WriteLine_overload0 = function (value) {
            };
            Debug.WriteLine_overload1 = function (message, category) {
            };
            Debug.WriteLine_overload2 = function (value, category) {
            };
            Debug.WriteLine_overload3 = function (format) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
            };
            Debug.WriteLine_overload4 = function (message) {
            };
            Debug.WriteIf = function (condition, value, category) {
                if (condition && (value && value instanceof Object) && !category) {
                    return this.WriteIf_overload0(condition, value);
                }
                if (condition && (value && typeof value === "string") && category) {
                    return this.WriteIf_overload1(condition, value, category);
                }
                if (condition && (value && value instanceof Object) && category) {
                    return this.WriteIf_overload2(condition, value, category);
                }
                if (condition && (value && typeof value === "string") && !category) {
                    return this.WriteIf_overload3(condition, value);
                }
            };
            Debug.WriteIf_overload0 = function (condition, value) {
            };
            Debug.WriteIf_overload1 = function (condition, message, category) {
            };
            Debug.WriteIf_overload2 = function (condition, value, category) {
            };
            Debug.WriteIf_overload3 = function (condition, message) {
            };
            Debug.WriteLineIf = function (condition, value, category) {
                if (condition && (value && value instanceof Object) && !category) {
                    return this.WriteLineIf_overload0(condition, value);
                }
                if (condition && (value && typeof value === "string") && category) {
                    return this.WriteLineIf_overload1(condition, value, category);
                }
                if (condition && (value && value instanceof Object) && category) {
                    return this.WriteLineIf_overload2(condition, value, category);
                }
                if (condition && (value && typeof value === "string") && !category) {
                    return this.WriteLineIf_overload3(condition, value);
                }
            };
            Debug.WriteLineIf_overload0 = function (condition, value) {
            };
            Debug.WriteLineIf_overload1 = function (condition, message, category) {
            };
            Debug.WriteLineIf_overload2 = function (condition, value, category) {
            };
            Debug.WriteLineIf_overload3 = function (condition, message) {
            };
            return Debug;
        })();
        Diagnostics.Debug = Debug;
    })(Diagnostics = System.Diagnostics || (System.Diagnostics = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Diagnostics;
    (function (Diagnostics) {
        var Tracing;
        (function (Tracing) {
            (function (EventCommand) {
                EventCommand[EventCommand["Update"] = 0] = "Update";
                EventCommand[EventCommand["SendManifest"] = -1] = "SendManifest";
                EventCommand[EventCommand["Enable"] = -2] = "Enable";
                EventCommand[EventCommand["Disable"] = -3] = "Disable";
            })(Tracing.EventCommand || (Tracing.EventCommand = {}));
            var EventCommand = Tracing.EventCommand;
            ;
        })(Tracing = Diagnostics.Tracing || (Diagnostics.Tracing = {}));
    })(Diagnostics = System.Diagnostics || (System.Diagnostics = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Diagnostics;
    (function (Diagnostics) {
        var Tracing;
        (function (Tracing) {
            var EventCommandEventArgs = (function () {
                function EventCommandEventArgs() {
                }
                return EventCommandEventArgs;
            })();
            Tracing.EventCommandEventArgs = EventCommandEventArgs;
        })(Tracing = Diagnostics.Tracing || (Diagnostics.Tracing = {}));
    })(Diagnostics = System.Diagnostics || (System.Diagnostics = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Diagnostics;
    (function (Diagnostics) {
        var Tracing;
        (function (Tracing) {
            (function (EventKeywords) {
                EventKeywords[EventKeywords["None"] = 0x0] = "None";
                EventKeywords[EventKeywords["WdiContext"] = 0x02000000000000] = "WdiContext";
                EventKeywords[EventKeywords["WdiDiagnostic"] = 0x04000000000000] = "WdiDiagnostic";
                EventKeywords[EventKeywords["Sqm"] = 0x08000000000000] = "Sqm";
                EventKeywords[EventKeywords["AuditFailure"] = 0x10000000000000] = "AuditFailure";
                EventKeywords[EventKeywords["AuditSuccess"] = 0x20000000000000] = "AuditSuccess";
                EventKeywords[EventKeywords["CorrelationHint"] = 0x10000000000000] = "CorrelationHint";
                EventKeywords[EventKeywords["EventLogClassic"] = 0x80000000000000] = "EventLogClassic";
            })(Tracing.EventKeywords || (Tracing.EventKeywords = {}));
            var EventKeywords = Tracing.EventKeywords;
        })(Tracing = Diagnostics.Tracing || (Diagnostics.Tracing = {}));
    })(Diagnostics = System.Diagnostics || (System.Diagnostics = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Diagnostics;
    (function (Diagnostics) {
        var Tracing;
        (function (Tracing) {
            (function (EventLevel) {
                EventLevel[EventLevel["LogAlways"] = 0] = "LogAlways";
                EventLevel[EventLevel["Critical"] = 1] = "Critical";
                EventLevel[EventLevel["Error"] = 2] = "Error";
                EventLevel[EventLevel["Warning"] = 3] = "Warning";
                EventLevel[EventLevel["Informational"] = 4] = "Informational";
                EventLevel[EventLevel["Verbose"] = 5] = "Verbose";
            })(Tracing.EventLevel || (Tracing.EventLevel = {}));
            var EventLevel = Tracing.EventLevel;
        })(Tracing = Diagnostics.Tracing || (Diagnostics.Tracing = {}));
    })(Diagnostics = System.Diagnostics || (System.Diagnostics = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Diagnostics;
    (function (Diagnostics) {
        var Tracing;
        (function (Tracing) {
            var EventSource = (function () {
                function EventSource() {
                }
                EventSource.prototype.WriteEvent = function (code, arg1, arg2, arg3) {
                };
                EventSource.prototype.OnEventCommand = function (command) {
                };
                EventSource.prototype.IsEnabled = function (level, keyword) {
                    return false;
                };
                return EventSource;
            })();
            Tracing.EventSource = EventSource;
        })(Tracing = Diagnostics.Tracing || (Diagnostics.Tracing = {}));
    })(Diagnostics = System.Diagnostics || (System.Diagnostics = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Environment = (function () {
        function Environment() {
        }
        Environment.GetResourceString = function (str, object, obj2) {
            return str;
        };
        Object.defineProperty(Environment, "TickCount", {
            get: function () {
                var d = new Date();
                var n = d.getTime() - 1424000000000;
                return n;
            },
            enumerable: true,
            configurable: true
        });
        Environment.ProcessorCount = 4;
        Environment.NewLine = '\r\n';
        return Environment;
    })();
    System.Environment = Environment;
})(System || (System = {}));
var System;
(function (System) {
    var EventArgs = (function () {
        function EventArgs() {
        }
        EventArgs.Empty = new EventArgs();
        return EventArgs;
    })();
    System.EventArgs = EventArgs;
})(System || (System = {}));
var System;
(function (System) {
    var Globalization;
    (function (Globalization) {
        var CharUnicodeInfo = (function () {
            function CharUnicodeInfo() {
            }
            CharUnicodeInfo.GetUnicodeCategory = function (ch) {
                if (unicode.Lu.test(ch))
                    return 0 /* UppercaseLetter */;
                if (unicode.Ll.test(ch))
                    return 1 /* LowercaseLetter */;
                if (unicode.Lt.test(ch))
                    return 2 /* TitlecaseLetter */;
                if (unicode.Lm.test(ch))
                    return 3 /* ModifierLetter */;
                if (unicode.Lo.test(ch))
                    return 4 /* OtherLetter */;
                if (unicode.Nl.test(ch))
                    return 9 /* LetterNumber */;
                if (unicode.Mn.test(ch))
                    return 5 /* NonSpacingMark */;
                if (unicode.Mc.test(ch))
                    return 6 /* SpacingCombiningMark */;
                if (unicode.Nd.test(ch))
                    return 8 /* DecimalDigitNumber */;
                if (unicode.Pc.test(ch))
                    return 18 /* ConnectorPunctuation */;
                return 28 /* OtherSymbol */;
                throw new System.NotImplementedException("not support");
            };
            return CharUnicodeInfo;
        })();
        Globalization.CharUnicodeInfo = CharUnicodeInfo;
    })(Globalization = System.Globalization || (System.Globalization = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Globalization;
    (function (Globalization) {
        var CultureInfo = (function () {
            function CultureInfo() {
            }
            CultureInfo.prototype.GetFormat = function (formatType) {
                return null;
            };
            CultureInfo.CurrentUICulture = new CultureInfo();
            CultureInfo.InvariantCulture = new CultureInfo();
            return CultureInfo;
        })();
        Globalization.CultureInfo = CultureInfo;
    })(Globalization = System.Globalization || (System.Globalization = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Globalization;
    (function (Globalization) {
        (function (NumberStyles) {
            NumberStyles[NumberStyles["None"] = 0x00000000] = "None";
            NumberStyles[NumberStyles["AllowLeadingWhite"] = 0x00000001] = "AllowLeadingWhite";
            NumberStyles[NumberStyles["AllowTrailingWhite"] = 0x00000002] = "AllowTrailingWhite";
            NumberStyles[NumberStyles["AllowLeadingSign"] = 0x00000004] = "AllowLeadingSign";
            NumberStyles[NumberStyles["AllowTrailingSign"] = 0x00000008] = "AllowTrailingSign";
            NumberStyles[NumberStyles["AllowParentheses"] = 0x00000010] = "AllowParentheses";
            NumberStyles[NumberStyles["AllowDecimalPoint"] = 0x00000020] = "AllowDecimalPoint";
            NumberStyles[NumberStyles["AllowThousands"] = 0x00000040] = "AllowThousands";
            NumberStyles[NumberStyles["AllowExponent"] = 0x00000080] = "AllowExponent";
            NumberStyles[NumberStyles["AllowCurrencySymbol"] = 0x00000100] = "AllowCurrencySymbol";
            NumberStyles[NumberStyles["AllowHexSpecifier"] = 0x00000200] = "AllowHexSpecifier";
            NumberStyles[NumberStyles["Integer"] = NumberStyles.AllowLeadingWhite | NumberStyles.AllowTrailingWhite | NumberStyles.AllowLeadingSign] = "Integer";
            NumberStyles[NumberStyles["HexNumber"] = NumberStyles.AllowLeadingWhite | NumberStyles.AllowTrailingWhite | NumberStyles.AllowHexSpecifier] = "HexNumber";
            NumberStyles[NumberStyles["Number"] = NumberStyles.AllowLeadingWhite | NumberStyles.AllowTrailingWhite | NumberStyles.AllowLeadingSign | NumberStyles.AllowTrailingSign | NumberStyles.AllowDecimalPoint | NumberStyles.AllowThousands] = "Number";
            NumberStyles[NumberStyles["Float"] = NumberStyles.AllowLeadingWhite | NumberStyles.AllowTrailingWhite | NumberStyles.AllowLeadingSign | NumberStyles.AllowDecimalPoint | NumberStyles.AllowExponent] = "Float";
            NumberStyles[NumberStyles["Currency"] = NumberStyles.AllowLeadingWhite | NumberStyles.AllowTrailingWhite | NumberStyles.AllowLeadingSign | NumberStyles.AllowTrailingSign | NumberStyles.AllowParentheses | NumberStyles.AllowDecimalPoint | NumberStyles.AllowThousands | NumberStyles.AllowCurrencySymbol] = "Currency";
            NumberStyles[NumberStyles["Any"] = NumberStyles.AllowLeadingWhite | NumberStyles.AllowTrailingWhite | NumberStyles.AllowLeadingSign | NumberStyles.AllowTrailingSign | NumberStyles.AllowParentheses | NumberStyles.AllowDecimalPoint | NumberStyles.AllowThousands | NumberStyles.AllowCurrencySymbol | NumberStyles.AllowExponent] = "Any";
        })(Globalization.NumberStyles || (Globalization.NumberStyles = {}));
        var NumberStyles = Globalization.NumberStyles;
    })(Globalization = System.Globalization || (System.Globalization = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Globalization;
    (function (Globalization) {
        (function (UnicodeCategory) {
            UnicodeCategory[UnicodeCategory["UppercaseLetter"] = 0] = "UppercaseLetter";
            UnicodeCategory[UnicodeCategory["LowercaseLetter"] = 1] = "LowercaseLetter";
            UnicodeCategory[UnicodeCategory["TitlecaseLetter"] = 2] = "TitlecaseLetter";
            UnicodeCategory[UnicodeCategory["ModifierLetter"] = 3] = "ModifierLetter";
            UnicodeCategory[UnicodeCategory["OtherLetter"] = 4] = "OtherLetter";
            UnicodeCategory[UnicodeCategory["NonSpacingMark"] = 5] = "NonSpacingMark";
            UnicodeCategory[UnicodeCategory["SpacingCombiningMark"] = 6] = "SpacingCombiningMark";
            UnicodeCategory[UnicodeCategory["EnclosingMark"] = 7] = "EnclosingMark";
            UnicodeCategory[UnicodeCategory["DecimalDigitNumber"] = 8] = "DecimalDigitNumber";
            UnicodeCategory[UnicodeCategory["LetterNumber"] = 9] = "LetterNumber";
            UnicodeCategory[UnicodeCategory["OtherNumber"] = 10] = "OtherNumber";
            UnicodeCategory[UnicodeCategory["SpaceSeparator"] = 11] = "SpaceSeparator";
            UnicodeCategory[UnicodeCategory["LineSeparator"] = 12] = "LineSeparator";
            UnicodeCategory[UnicodeCategory["ParagraphSeparator"] = 13] = "ParagraphSeparator";
            UnicodeCategory[UnicodeCategory["Control"] = 14] = "Control";
            UnicodeCategory[UnicodeCategory["Format"] = 15] = "Format";
            UnicodeCategory[UnicodeCategory["Surrogate"] = 16] = "Surrogate";
            UnicodeCategory[UnicodeCategory["PrivateUse"] = 17] = "PrivateUse";
            UnicodeCategory[UnicodeCategory["ConnectorPunctuation"] = 18] = "ConnectorPunctuation";
            UnicodeCategory[UnicodeCategory["DashPunctuation"] = 19] = "DashPunctuation";
            UnicodeCategory[UnicodeCategory["OpenPunctuation"] = 20] = "OpenPunctuation";
            UnicodeCategory[UnicodeCategory["ClosePunctuation"] = 21] = "ClosePunctuation";
            UnicodeCategory[UnicodeCategory["InitialQuotePunctuation"] = 22] = "InitialQuotePunctuation";
            UnicodeCategory[UnicodeCategory["FinalQuotePunctuation"] = 23] = "FinalQuotePunctuation";
            UnicodeCategory[UnicodeCategory["OtherPunctuation"] = 24] = "OtherPunctuation";
            UnicodeCategory[UnicodeCategory["MathSymbol"] = 25] = "MathSymbol";
            UnicodeCategory[UnicodeCategory["CurrencySymbol"] = 26] = "CurrencySymbol";
            UnicodeCategory[UnicodeCategory["ModifierSymbol"] = 27] = "ModifierSymbol";
            UnicodeCategory[UnicodeCategory["OtherSymbol"] = 28] = "OtherSymbol";
            UnicodeCategory[UnicodeCategory["OtherNotAssigned"] = 29] = "OtherNotAssigned";
        })(Globalization.UnicodeCategory || (Globalization.UnicodeCategory = {}));
        var UnicodeCategory = Globalization.UnicodeCategory;
    })(Globalization = System.Globalization || (System.Globalization = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Guid = (function () {
        function Guid() {
            this.guidStr = null;
        }
        Guid.TryParse = function (str, guid) {
            if (/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(str)) {
                var newGuid = new Guid();
                newGuid.guidStr = str;
                guid.refObj = newGuid;
                return true;
            }
            return false;
        };
        Guid.NewGuid = function () {
            var guid = new Guid();
            var d = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + GbMath.random() * 16) % 16 | 0;
                d = GbMath.floor(d / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            guid.guidStr = uuid;
            return guid;
        };
        Guid.Default = new Guid();
        return Guid;
    })();
    System.Guid = Guid;
})(System || (System = {}));
var System;
(function (System) {
    var IndexOutOfRangeException = (function (_super) {
        __extends(IndexOutOfRangeException, _super);
        function IndexOutOfRangeException(message, param) {
            _super.call(this, message, param);
            this.message = message;
        }
        return IndexOutOfRangeException;
    })(System.SystemException);
    System.IndexOutOfRangeException = IndexOutOfRangeException;
})(System || (System = {}));
var System;
(function (System) {
    var InvalidOperationException = (function (_super) {
        __extends(InvalidOperationException, _super);
        function InvalidOperationException(message, param) {
            _super.call(this, message, param);
            this.message = message;
        }
        return InvalidOperationException;
    })(System.SystemException);
    System.InvalidOperationException = InvalidOperationException;
})(System || (System = {}));
var System;
(function (System) {
    var IO;
    (function (IO) {
        var __Error = (function () {
            function __Error() {
            }
            __Error.EndOfFile = function () {
                throw new IO.EndOfStreamException(System.Environment.GetResourceString("IO.EOF_ReadBeyondEOF"));
            };
            __Error.FileNotOpen = function () {
                throw new System.ObjectDisposedException(null, System.Environment.GetResourceString("ObjectDisposed_FileClosed"));
            };
            __Error.StreamIsClosed = function () {
                throw new System.ObjectDisposedException(null, System.Environment.GetResourceString("ObjectDisposed_StreamClosed"));
            };
            __Error.MemoryStreamNotExpandable = function () {
                throw new System.NotSupportedException(System.Environment.GetResourceString("NotSupported_MemStreamNotExpandable"));
            };
            __Error.ReaderClosed = function () {
                throw new System.ObjectDisposedException(null, System.Environment.GetResourceString("ObjectDisposed_ReaderClosed"));
            };
            __Error.ReadNotSupported = function () {
                throw new System.NotSupportedException(System.Environment.GetResourceString("NotSupported_UnreadableStream"));
            };
            __Error.SeekNotSupported = function () {
                throw new System.NotSupportedException(System.Environment.GetResourceString("NotSupported_UnseekableStream"));
            };
            __Error.WrongAsyncResult = function () {
                throw new System.ArgumentException(System.Environment.GetResourceString("Arg_WrongAsyncResult"));
            };
            __Error.EndReadCalledTwice = function () {
                throw new System.ArgumentException(System.Environment.GetResourceString("InvalidOperation_EndReadCalledMultiple"));
            };
            __Error.EndWriteCalledTwice = function () {
                throw new System.ArgumentException(System.Environment.GetResourceString("InvalidOperation_EndWriteCalledMultiple"));
            };
            __Error.WriteNotSupported = function () {
                throw new System.NotSupportedException(System.Environment.GetResourceString("NotSupported_UnwritableStream"));
            };
            __Error.WriterClosed = function () {
                throw new System.ObjectDisposedException(null, System.Environment.GetResourceString("ObjectDisposed_WriterClosed"));
            };
            return __Error;
        })();
        IO.__Error = __Error;
    })(IO = System.IO || (System.IO = {}));
})(System || (System = {}));
var System;
(function (System) {
    var IO;
    (function (IO) {
        var BinaryReader = (function () {
            function BinaryReader(stream, encoding) {
                stream.Read;
                this.stream = stream;
                this.buffer = new Int8Array(8);
                this.dataView = new DataView(this.buffer.buffer);
            }
            BinaryReader.prototype.ReadChar = function () {
                var code = this.ReadUInt16();
                return GbString.fromCharCode(code);
            };
            BinaryReader.prototype.ReadString = function () {
                var length = this.ReadUInt32();
                var buffer = new Int8Array(length);
                this.stream.Read(buffer, 0, length);
                return ArrayBufferToString(buffer.buffer);
            };
            BinaryReader.prototype.ReadBoolean = function () {
                this.stream.Read(this.buffer, 0, 1);
                var result = this.dataView.getUint8(0);
                return result > 0 ? true : false;
            };
            BinaryReader.prototype.ReadSByte = function () {
                this.stream.Read(this.buffer, 0, 1);
                var result = this.dataView.getInt8(0);
                return result;
            };
            BinaryReader.prototype.ReadByte = function () {
                this.stream.Read(this.buffer, 0, 1);
                var result = this.dataView.getUint8(0);
                return result;
            };
            BinaryReader.prototype.ReadInt16 = function () {
                this.stream.Read(this.buffer, 0, 2);
                var result = this.dataView.getInt16(0);
                return result;
            };
            BinaryReader.prototype.ReadInt32 = function () {
                this.stream.Read(this.buffer, 0, 4);
                var result = this.dataView.getInt32(0);
                return result;
            };
            BinaryReader.prototype.ReadUInt16 = function () {
                this.stream.Read(this.buffer, 0, 2);
                var result = this.dataView.getUint16(0);
                return result;
            };
            BinaryReader.prototype.ReadUInt32 = function () {
                this.stream.Read(this.buffer, 0, 4);
                var result = this.dataView.getUint32(0);
                return result;
            };
            BinaryReader.prototype.ReadDecimal = function () {
                this.stream.Read(this.buffer, 0, 8);
                var result = this.dataView.getFloat64(0);
                return result;
            };
            BinaryReader.prototype.ReadDouble = function () {
                this.stream.Read(this.buffer, 0, 8);
                var result = this.dataView.getFloat64(0);
                return result;
            };
            BinaryReader.prototype.ReadSingle = function () {
                this.stream.Read(this.buffer, 0, 8);
                var result = this.dataView.getFloat64(0);
                return result;
            };
            BinaryReader.prototype.Read = function (buffer, index, count) {
                return this.stream.Read(buffer, index, count);
            };
            BinaryReader.prototype.ReadInt64 = function () {
                this.stream.Read(this.buffer, 0, 8);
                var result = this.dataView.getFloat64(0);
                return result;
            };
            return BinaryReader;
        })();
        IO.BinaryReader = BinaryReader;
    })(IO = System.IO || (System.IO = {}));
})(System || (System = {}));
var System;
(function (System) {
    var IO;
    (function (IO) {
        var BinaryWriter = (function () {
            function BinaryWriter(stream, encoding) {
                this.stream = stream;
                this.buffer = new Int8Array(8);
                this.dataView = new DataView(this.buffer.buffer);
            }
            BinaryWriter.prototype.WriteChar = function (c) {
                var code = c.charCodeAt(0);
                this.WriteUInt16(code);
            };
            BinaryWriter.prototype.WriteString = function (str) {
                var arrayBuffer = StringToArrayBuffer(str);
                this.WriteUInt32(arrayBuffer.byteLength);
                this.stream.Write(new Int8Array(arrayBuffer), 0, arrayBuffer.byteLength);
            };
            BinaryWriter.prototype.WriteBoolean = function (value) {
                this.dataView.setUint8(0, Number(value));
                this.stream.Write(this.buffer, 0, 1);
            };
            BinaryWriter.prototype.WriteByte = function (value) {
                this.dataView.setUint8(0, value);
                this.stream.Write(this.buffer, 0, 1);
            };
            BinaryWriter.prototype.WriteDecimal = function (value) {
                this.dataView.setFloat64(0, value);
                this.stream.Write(this.buffer, 0, 8);
            };
            BinaryWriter.prototype.WriteDouble = function (value) {
                this.dataView.setFloat64(0, value);
                this.stream.Write(this.buffer, 0, 8);
            };
            BinaryWriter.prototype.WriteSingle = function (value) {
                this.dataView.setFloat64(0, value);
                this.stream.Write(this.buffer, 0, 8);
            };
            BinaryWriter.prototype.WriteSByte = function (value) {
                this.dataView.setInt8(0, value);
                this.stream.Write(this.buffer, 0, 1);
            };
            BinaryWriter.prototype.WriteInt16 = function (value) {
                this.dataView.setInt16(0, value);
                this.stream.Write(this.buffer, 0, 2);
            };
            BinaryWriter.prototype.WriteInt32 = function (value) {
                this.dataView.setInt32(0, value);
                this.stream.Write(this.buffer, 0, 4);
            };
            BinaryWriter.prototype.WriteUInt16 = function (value) {
                this.dataView.setUint16(0, value);
                this.stream.Write(this.buffer, 0, 2);
            };
            BinaryWriter.prototype.WriteUShort = function (value) {
                this.dataView.setUint16(0, value);
                this.stream.Write(this.buffer, 0, 2);
            };
            BinaryWriter.prototype.WriteUInt32 = function (value) {
                this.dataView.setUint32(0, value);
                this.stream.Write(this.buffer, 0, 4);
            };
            BinaryWriter.prototype.WriteInt64 = function (value) {
                this.dataView.setFloat64(0, value);
                this.stream.Write(this.buffer, 0, 8);
            };
            return BinaryWriter;
        })();
        IO.BinaryWriter = BinaryWriter;
    })(IO = System.IO || (System.IO = {}));
})(System || (System = {}));
var System;
(function (System) {
    var IO;
    (function (IO) {
        var IOException = (function (_super) {
            __extends(IOException, _super);
            function IOException(message, param) {
                _super.call(this, message, param);
                this.message = message;
            }
            return IOException;
        })(System.SystemException);
        IO.IOException = IOException;
    })(IO = System.IO || (System.IO = {}));
})(System || (System = {}));
var System;
(function (System) {
    var IO;
    (function (IO) {
        var EndOfStreamException = (function (_super) {
            __extends(EndOfStreamException, _super);
            function EndOfStreamException(message, param) {
                _super.call(this, message, param);
                this.message = message;
            }
            return EndOfStreamException;
        })(IO.IOException);
        IO.EndOfStreamException = EndOfStreamException;
    })(IO = System.IO || (System.IO = {}));
})(System || (System = {}));
var System;
(function (System) {
    function TrimZero(text) {
        if (text == null || text == '')
            return text;
        if (text.StartsWith("-")) {
            text = text.replace(/^-0+/, '-');
        }
        else {
            text = text.replace(/^0+/, '');
        }
        return text == '' ? '0' : text;
    }
    function isNumber(text, radix) {
        if (radix == 10) {
            return /^\d+$/.test(text);
        }
        return /^[\dABCDEFabcdef]+$/.test(text);
    }
    var Int32 = (function () {
        function Int32() {
        }
        Int32.TryParse = function (text, numberStyle, cultureInfo, result) {
            text = TrimZero(text);
            var radix = (numberStyle & 512 /* AllowHexSpecifier */) != 0 ? 16 : 10;
            if (!isNumber(text, radix)) {
                return false;
            }
            var parsedResult = parseInt(text, radix);
            if (!isNaN(parsedResult)) {
                result.refObj = parsedResult;
                return true;
            }
            return false;
        };
        Int32.MaxValue = 2147483647;
        Int32.MinValue = -2147483647;
        return Int32;
    })();
    System.Int32 = Int32;
    var UInt32 = (function () {
        function UInt32() {
        }
        UInt32.TryParse = function (text, numberStyle, cultureInfo, result) {
            text = TrimZero(text);
            var radix = (numberStyle & 512 /* AllowHexSpecifier */) != 0 ? 16 : 10;
            if (!isNumber(text, radix)) {
                return false;
            }
            var parsedResult = parseInt(text, radix);
            if (parsedResult < 0) {
                return false;
            }
            if (!isNaN(parsedResult)) {
                result.refObj = parsedResult;
                return true;
            }
            return false;
        };
        UInt32.MaxValue = 4294967295;
        UInt32.MinValue = 0;
        return UInt32;
    })();
    System.UInt32 = UInt32;
    var Int64 = (function () {
        function Int64() {
        }
        Int64.TryParse = function (text, numberStyle, cultureInfo, result) {
            text = TrimZero(text);
            var radix = (numberStyle & 512 /* AllowHexSpecifier */) != 0 ? 16 : 10;
            if (!isNumber(text, radix)) {
                return false;
            }
            var parsedResult = parseInt(text, radix);
            if (!isNaN(parsedResult)) {
                result.refObj = parsedResult;
                return true;
            }
            return false;
        };
        Int64.MaxValue = 9223372036854775807;
        Int64.MinValue = -9223372036854775808;
        return Int64;
    })();
    System.Int64 = Int64;
    var UInt64 = (function () {
        function UInt64() {
        }
        UInt64.TryParse = function (text, numberStyle, cultureInfo, result) {
            text = TrimZero(text);
            var radix = (numberStyle & 512 /* AllowHexSpecifier */) != 0 ? 16 : 10;
            if (!isNumber(text, radix)) {
                return false;
            }
            var parsedResult = parseInt(text, radix);
            if (parsedResult < 0) {
                return false;
            }
            if (!isNaN(parsedResult)) {
                result.refObj = parsedResult;
                return true;
            }
            return false;
        };
        UInt64.MaxValue = 18446744073709551615;
        UInt64.MinValue = -9223372036854775808;
        return UInt64;
    })();
    System.UInt64 = UInt64;
    var Double = (function () {
        function Double() {
        }
        Double.TryParse = function (text, numberStyle, cultureInfo, result) {
            text = TrimZero(text);
            var parsedResult = parseFloat(text);
            var reversedText = parsedResult.toString();
            if (text == reversedText) {
                result.refObj = parsedResult;
                return true;
            }
            return false;
        };
        return Double;
    })();
    System.Double = Double;
    var Single = (function () {
        function Single() {
        }
        Single.TryParse = function (text, numberStyle, cultureInfo, result) {
            text = TrimZero(text);
            var parsedResult = parseFloat(text);
            var reversedText = parsedResult.toString();
            if (text == reversedText) {
                result.refObj = parsedResult;
                return true;
            }
            return false;
        };
        return Single;
    })();
    System.Single = Single;
    var Decimal = (function () {
        function Decimal() {
        }
        Decimal.TryParse = function (text, numberStyle, cultureInfo, result) {
            text = TrimZero(text);
            var parsedResult = parseFloat(text);
            var reversedText = parsedResult.toString();
            if (text == reversedText) {
                result.refObj = parsedResult;
                return true;
            }
            return false;
        };
        return Decimal;
    })();
    System.Decimal = Decimal;
    var Boolean = (function () {
        function Boolean() {
        }
        Boolean.TryParse = function (text, result) {
            text = text.trim().toUpperCase();
            if (text === "TRUE") {
                result.refObj = true;
                return true;
            }
            if (text === "FALSE") {
                result.refObj = false;
                return true;
            }
            return false;
        };
        return Boolean;
    })();
    System.Boolean = Boolean;
})(System || (System = {}));
var System;
(function (System) {
    var IO;
    (function (IO) {
        var MemoryStream = (function () {
            function MemoryStream(buffer, param1, param2, param3, param4) {
                this._buffer = null;
                this._origin = 0;
                this._position = 0;
                this._length = 0;
                this._capacity = 0;
                this._expandable = false;
                this._writable = false;
                this._exposable = false;
                this._isOpen = false;
                if ((buffer instanceof Int8Array || buffer === null) && typeof param1 == 'number' && typeof param2 == 'number' && typeof param3 == 'boolean' && typeof param4 == 'boolean') {
                    this.constructor_MemoryStream_overload5(buffer, param1, param2, param3, param4);
                    return;
                }
                if ((buffer instanceof Int8Array || buffer === null) && typeof param1 == 'number' && typeof param2 == 'number' && typeof param3 == 'boolean' && typeof param4 == 'undefined') {
                    this.constructor_MemoryStream_overload5(buffer, param1, param2, param3, false);
                    this.constructor_MemoryStream_overload4(buffer, param1, param2, param3);
                    return;
                }
                if ((buffer instanceof Int8Array || buffer === null) && typeof param1 === 'number' && typeof param2 == 'number' && typeof param3 == 'undefined' && typeof param4 == 'undefined') {
                    this.constructor_MemoryStream_overload5(buffer, param1, param2, true, false);
                    this.constructor_MemoryStream_overload3(buffer, param1, param2);
                    return;
                }
                if ((buffer instanceof Int8Array || buffer === null) && typeof param1 === 'boolean' && typeof param2 === 'undefined' && typeof param3 === 'undefined' && typeof param4 === 'undefined') {
                    this.constructor_MemoryStream_overload2(buffer, param1);
                    return;
                }
                if (typeof buffer === 'number' && typeof param1 === 'undefined' && typeof param2 === 'undefined' && typeof param3 === 'undefined' && typeof param4 === 'undefined') {
                    this.constructor_MemoryStream_overload0(buffer);
                    return;
                }
                if ((buffer instanceof Int8Array || buffer === null) && typeof param1 === 'undefined' && typeof param2 === 'undefined' && typeof param3 === 'undefined' && typeof param4 === 'undefined') {
                    this.constructor_MemoryStream_overload2(buffer, true);
                    this.constructor_MemoryStream_overload1(buffer);
                    return;
                }
                if (typeof buffer === 'undefined' && typeof param1 === 'undefined' && typeof param2 === 'undefined' && typeof param3 === 'undefined' && typeof param4 === 'undefined') {
                    this.constructor_MemoryStream_overload0(0);
                    this.constructor_MemoryStream_overload6();
                    return;
                }
            }
            Object.defineProperty(MemoryStream.prototype, "CanRead", {
                get: function () {
                    return this._isOpen;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MemoryStream.prototype, "CanSeek", {
                get: function () {
                    return this._isOpen;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MemoryStream.prototype, "CanWrite", {
                get: function () {
                    return this._writable;
                },
                enumerable: true,
                configurable: true
            });
            MemoryStream.prototype.EnsureWriteable = function () {
                if (!this.CanWrite)
                    IO.__Error.WriteNotSupported();
            };
            MemoryStream.prototype.Dispose = function (disposing) {
                if (typeof disposing == 'undefined') {
                    disposing = true;
                }
                try {
                    if (disposing) {
                        this._isOpen = false;
                        this._writable = false;
                        this._expandable = false;
                    }
                }
                finally {
                }
            };
            MemoryStream.prototype.EnsureCapacity = function (value) {
                if (value < 0)
                    throw new IO.IOException(System.Environment.GetResourceString("IO.IO_StreamTooLong"));
                if (value > this._capacity) {
                    var newCapacity = value;
                    if (newCapacity < 256)
                        newCapacity = 256;
                    if (newCapacity < this._capacity * 2)
                        newCapacity = this._capacity * 2;
                    this.Capacity = newCapacity;
                    return true;
                }
                return false;
            };
            MemoryStream.prototype.Flush = function () {
            };
            MemoryStream.prototype.GetBuffer = function () {
                if (!this._exposable)
                    throw new System.UnauthorizedAccessException(System.Environment.GetResourceString("UnauthorizedAccess_MemStreamBuffer"));
                return this._buffer;
            };
            MemoryStream.prototype.InternalGetBuffer = function () {
                return this._buffer;
            };
            MemoryStream.prototype.InternalGetOriginAndLength = function (origin, length) {
                if (!this._isOpen)
                    IO.__Error.StreamIsClosed();
                origin.refObj = this._origin;
                length.refObj = this._length;
            };
            MemoryStream.prototype.InternalGetPosition = function () {
                if (!this._isOpen)
                    IO.__Error.StreamIsClosed();
                return this._position;
            };
            MemoryStream.prototype.InternalReadInt32 = function () {
                if (!this._isOpen)
                    IO.__Error.StreamIsClosed();
                var pos = (this._position += 4);
                if (pos > this._length) {
                    this._position = this._length;
                    IO.__Error.EndOfFile();
                }
                return (this._buffer[pos - 4] | this._buffer[pos - 3] << 8 | this._buffer[pos - 2] << 16 | this._buffer[pos - 1] << 24);
            };
            MemoryStream.prototype.InternalEmulateRead = function (count) {
                if (!this._isOpen)
                    IO.__Error.StreamIsClosed();
                var n = this._length - this._position;
                if (n > count)
                    n = count;
                if (n < 0)
                    n = 0;
                this._position += n;
                return n;
            };
            Object.defineProperty(MemoryStream.prototype, "Capacity", {
                get: function () {
                    if (!this._isOpen)
                        IO.__Error.StreamIsClosed();
                    return this._capacity - this._origin;
                },
                set: function (value) {
                    if (value < this.Length)
                        throw new System.ArgumentOutOfRangeException("value", System.Environment.GetResourceString("ArgumentOutOfRange_SmallCapacity"));
                    if (!this._isOpen)
                        IO.__Error.StreamIsClosed();
                    if (!this._expandable && (value != this.Capacity))
                        IO.__Error.MemoryStreamNotExpandable();
                    if (this._expandable && value != this._capacity) {
                        if (value > 0) {
                            var newBuffer = new Int8Array(value);
                            if (this._length > 0) {
                                TSArrayBuffer.Copy_1(this._buffer, 0, newBuffer, 0, this._length);
                            }
                            this._buffer = newBuffer;
                        }
                        else {
                            this._buffer = null;
                        }
                        this._capacity = value;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MemoryStream.prototype, "Length", {
                get: function () {
                    if (!this._isOpen)
                        IO.__Error.StreamIsClosed();
                    return this._length - this._origin;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MemoryStream.prototype, "Position", {
                get: function () {
                    if (!this._isOpen)
                        IO.__Error.StreamIsClosed();
                    return this._position - this._origin;
                },
                set: function (value) {
                    if (value < 0)
                        throw new System.ArgumentOutOfRangeException("value", System.Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                    if (!this._isOpen)
                        IO.__Error.StreamIsClosed();
                    if (value > MemoryStream.MemStreamMaxLength)
                        throw new System.ArgumentOutOfRangeException("value", System.Environment.GetResourceString("ArgumentOutOfRange_StreamLength"));
                    this._position = this._origin + value;
                },
                enumerable: true,
                configurable: true
            });
            MemoryStream.prototype.Read = function (buffer, offset, count) {
                if (buffer == null)
                    throw new System.ArgumentNullException("buffer", System.Environment.GetResourceString("ArgumentNull_Buffer"));
                if (offset < 0)
                    throw new System.ArgumentOutOfRangeException("offset", System.Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                if (count < 0)
                    throw new System.ArgumentOutOfRangeException("count", System.Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                if (buffer.length - offset < count)
                    throw new System.ArgumentException(System.Environment.GetResourceString("Argument_InvalidOffLen"));
                if (!this._isOpen)
                    IO.__Error.StreamIsClosed();
                var n = this._length - this._position;
                if (n > count)
                    n = count;
                if (n <= 0)
                    return 0;
                if (n <= 8) {
                    var byteCount = n;
                    while (--byteCount >= 0)
                        buffer[offset + byteCount] = this._buffer[this._position + byteCount];
                }
                else
                    TSArrayBuffer.Copy_1(this._buffer, this._position, buffer, offset, n);
                this._position += n;
                return n;
            };
            MemoryStream.prototype.ReadByte = function () {
                if (!this._isOpen)
                    IO.__Error.StreamIsClosed();
                if (this._position >= this._length)
                    return -1;
                return this._buffer[this._position++];
            };
            MemoryStream.prototype.Seek = function (offset, loc) {
                if (!this._isOpen)
                    IO.__Error.StreamIsClosed();
                if (offset > MemoryStream.MemStreamMaxLength)
                    throw new System.ArgumentOutOfRangeException("offset", System.Environment.GetResourceString("ArgumentOutOfRange_StreamLength"));
                switch (loc) {
                    case 0 /* Begin */:
                        {
                            var tempPosition = (this._origin + offset);
                            if (offset < 0 || tempPosition < this._origin)
                                throw new IO.IOException(System.Environment.GetResourceString("IO.IO_SeekBeforeBegin"));
                            this._position = tempPosition;
                            break;
                        }
                    case 1 /* Current */:
                        {
                            var tempPosition = (this._position + offset);
                            if ((this._position + offset) < this._origin || tempPosition < this._origin)
                                throw new IO.IOException(System.Environment.GetResourceString("IO.IO_SeekBeforeBegin"));
                            this._position = tempPosition;
                            break;
                        }
                    case 2 /* End */:
                        {
                            var tempPosition = (this._length + offset);
                            if ((this._length + offset) < this._origin || tempPosition < this._origin)
                                throw new IO.IOException(System.Environment.GetResourceString("IO.IO_SeekBeforeBegin"));
                            this._position = tempPosition;
                            break;
                        }
                    default:
                        throw new System.ArgumentException(System.Environment.GetResourceString("Argument_InvalidSeekOrigin"));
                }
                return this._position;
            };
            MemoryStream.prototype.SetLength = function (value) {
                if (value < 0 || value > System.Int32.MaxValue) {
                    throw new System.ArgumentOutOfRangeException("value", System.Environment.GetResourceString("ArgumentOutOfRange_StreamLength"));
                }
                this.EnsureWriteable();
                if (value > (System.Int32.MaxValue - this._origin)) {
                    throw new System.ArgumentOutOfRangeException("value", System.Environment.GetResourceString("ArgumentOutOfRange_StreamLength"));
                }
                var newLength = this._origin + value;
                var allocatedNewArray = this.EnsureCapacity(newLength);
                if (!allocatedNewArray && newLength > this._length)
                    TSArrayBuffer.Clear(this._buffer, this._length, newLength - this._length);
                this._length = newLength;
                if (this._position > newLength)
                    this._position = newLength;
            };
            MemoryStream.prototype.ToArray = function () {
                var copy = new Int8Array(this._length - this._origin);
                TSArrayBuffer.Copy_1(this._buffer, this._origin, copy, 0, this._length - this._origin);
                return copy;
            };
            MemoryStream.prototype.Write = function (buffer, offset, count) {
                if (buffer == null)
                    throw new System.ArgumentNullException("buffer", System.Environment.GetResourceString("ArgumentNull_Buffer"));
                if (offset < 0)
                    throw new System.ArgumentOutOfRangeException("offset", System.Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                if (count < 0)
                    throw new System.ArgumentOutOfRangeException("count", System.Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                if (buffer.length - offset < count)
                    throw new System.ArgumentException(System.Environment.GetResourceString("Argument_InvalidOffLen"));
                if (!this._isOpen)
                    IO.__Error.StreamIsClosed();
                this.EnsureWriteable();
                var i = this._position + count;
                if (i < 0)
                    throw new IO.IOException(System.Environment.GetResourceString("IO.IO_StreamTooLong"));
                if (i > this._length) {
                    var mustZero = this._position > this._length;
                    if (i > this._capacity) {
                        var allocatedNewArray = this.EnsureCapacity(i);
                        if (allocatedNewArray)
                            mustZero = false;
                    }
                    if (mustZero)
                        TSArrayBuffer.Clear(this._buffer, this._length, i - this._length);
                    this._length = i;
                }
                if ((count <= 8) && (buffer != this._buffer)) {
                    var byteCount = count;
                    while (--byteCount >= 0)
                        this._buffer[this._position + byteCount] = buffer[offset + byteCount];
                }
                else
                    TSArrayBuffer.Copy_1(buffer, offset, this._buffer, this._position, count);
                this._position = i;
            };
            MemoryStream.prototype.WriteByte = function (value) {
                if (!this._isOpen)
                    IO.__Error.StreamIsClosed();
                this.EnsureWriteable();
                if (this._position >= this._length) {
                    var newLength = this._position + 1;
                    var mustZero = this._position > this._length;
                    if (newLength >= this._capacity) {
                        var allocatedNewArray = this.EnsureCapacity(newLength);
                        if (allocatedNewArray)
                            mustZero = false;
                    }
                    if (mustZero)
                        TSArrayBuffer.Clear(this._buffer, this._length, this._position - this._length);
                    this._length = newLength;
                }
                this._buffer[this._position++] = value;
            };
            MemoryStream.prototype.WriteTo = function (stream) {
                if (stream == null)
                    throw new System.ArgumentNullException("stream", System.Environment.GetResourceString("ArgumentNull_Stream"));
                if (!this._isOpen)
                    IO.__Error.StreamIsClosed();
                stream.Write(this._buffer, this._origin, this._length - this._origin);
            };
            MemoryStream.prototype.constructor_MemoryStream_overload0 = function (capacity) {
                if (capacity < 0) {
                    throw new System.ArgumentOutOfRangeException("capacity", System.Environment.GetResourceString("ArgumentOutOfRange_NegativeCapacity"));
                }
                this._buffer = new Int8Array(capacity);
                this._capacity = capacity;
                this._expandable = true;
                this._writable = true;
                this._exposable = true;
                this._origin = 0;
                this._isOpen = true;
            };
            MemoryStream.prototype.constructor_MemoryStream_overload1 = function (buffer) {
            };
            MemoryStream.prototype.constructor_MemoryStream_overload2 = function (buffer, writable) {
                if (buffer == null)
                    throw new System.ArgumentNullException("buffer", System.Environment.GetResourceString("ArgumentNull_Buffer"));
                this._buffer = buffer;
                this._length = this._capacity = buffer.length;
                this._writable = writable;
                this._exposable = false;
                this._origin = 0;
                this._isOpen = true;
            };
            MemoryStream.prototype.constructor_MemoryStream_overload3 = function (buffer, index, count) {
            };
            MemoryStream.prototype.constructor_MemoryStream_overload4 = function (buffer, index, count, writable) {
            };
            MemoryStream.prototype.constructor_MemoryStream_overload5 = function (buffer, index, count, writable, publiclyVisible) {
                if (buffer == null)
                    throw new System.ArgumentNullException("buffer", System.Environment.GetResourceString("ArgumentNull_Buffer"));
                if (index < 0)
                    throw new System.ArgumentOutOfRangeException("index", System.Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                if (count < 0)
                    throw new System.ArgumentOutOfRangeException("count", System.Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                if (buffer.length - index < count)
                    throw new System.ArgumentException(System.Environment.GetResourceString("Argument_InvalidOffLen"));
                this._buffer = buffer;
                this._origin = this._position = index;
                this._length = this._capacity = index + count;
                this._writable = writable;
                this._exposable = publiclyVisible;
                this._expandable = false;
                this._isOpen = true;
            };
            MemoryStream.prototype.constructor_MemoryStream_overload6 = function () {
            };
            MemoryStream.MemStreamMaxLength = System.Int32.MaxValue;
            return MemoryStream;
        })();
        IO.MemoryStream = MemoryStream;
    })(IO = System.IO || (System.IO = {}));
})(System || (System = {}));
var System;
(function (System) {
    var IO;
    (function (IO) {
        (function (SeekOrigin) {
            SeekOrigin[SeekOrigin["Begin"] = 0] = "Begin";
            SeekOrigin[SeekOrigin["Current"] = 1] = "Current";
            SeekOrigin[SeekOrigin["End"] = 2] = "End";
        })(IO.SeekOrigin || (IO.SeekOrigin = {}));
        var SeekOrigin = IO.SeekOrigin;
    })(IO = System.IO || (System.IO = {}));
})(System || (System = {}));
var System;
(function (System) {
    var IO;
    (function (IO) {
        var TextWriter = (function () {
            function TextWriter(stream, encoding) {
                if (stream === void 0) {
                    return;
                }
                this.stream = stream;
                this.buffer = new Int8Array(8);
                this.dataView = new DataView(this.buffer.buffer);
            }
            TextWriter.prototype.WriteCharArray = function (buffer, index, count) {
                if (buffer == null)
                    throw new System.ArgumentNullException("buffer", System.Environment.GetResourceString("ArgumentNull_Buffer"));
                if (index < 0)
                    throw new System.ArgumentOutOfRangeException("index", System.Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                if (count < 0)
                    throw new System.ArgumentOutOfRangeException("count", System.Environment.GetResourceString("ArgumentOutOfRange_NeedNonNegNum"));
                if (buffer.length - index < count)
                    throw new System.ArgumentException(System.Environment.GetResourceString("Argument_InvalidOffLen"));
                for (var i = 0; i < count; i++)
                    this.WriteChar(buffer[index + i]);
            };
            TextWriter.prototype.WriteString = function (str) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                if (args.length > 0) {
                    str = System.String.Format(str, args);
                }
                for (var i = 0; i < str.length; i++)
                    this.WriteChar(str.charAt(i));
            };
            TextWriter.prototype.WriteLine = function (str) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                if (args.length > 0) {
                    str = System.String.Format(str, args);
                }
                for (var i = 0; i < str.length; i++)
                    this.WriteChar(str.charAt(i));
                this.WriteChar('\r');
                this.WriteChar('\n');
            };
            TextWriter.prototype.WriteChar = function (c) {
                var code = c.charCodeAt(0);
                this.dataView.setUint16(0, code);
                this.stream.Write(this.buffer, 0, 2);
            };
            return TextWriter;
        })();
        IO.TextWriter = TextWriter;
    })(IO = System.IO || (System.IO = {}));
})(System || (System = {}));
var System;
(function (System) {
    var IO;
    (function (IO) {
        var StringWriter = (function (_super) {
            __extends(StringWriter, _super);
            function StringWriter(builder, formatProvider) {
                _super.call(this);
                if (builder === void 0) {
                    builder = new System.Text.StringBuilder();
                }
                if (builder instanceof System.Text.StringBuilder) {
                    this.builder = builder;
                }
            }
            StringWriter.prototype.WriteString = function (str) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                if (args.length > 0) {
                    str = System.String.Format(str, args);
                }
                this.builder.Append(str);
            };
            StringWriter.prototype.WriteLine = function (str) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                if (args.length > 0) {
                    str = System.String.Format(str, args);
                }
                this.builder.Append(str);
                this.WriteChar('\r');
                this.WriteChar('\n');
            };
            StringWriter.prototype.WriteChar = function (c) {
                this.builder.Append(c);
            };
            StringWriter.prototype.Flush = function () {
            };
            StringWriter.prototype.ToString = function () {
                return this.builder.ToString();
            };
            return StringWriter;
        })(IO.TextWriter);
        IO.StringWriter = StringWriter;
    })(IO = System.IO || (System.IO = {}));
})(System || (System = {}));
var System;
(function (System) {
    var KeyNotFoundException = (function (_super) {
        __extends(KeyNotFoundException, _super);
        function KeyNotFoundException(message, param) {
            _super.call(this, message, param);
            this.message = message;
        }
        return KeyNotFoundException;
    })(System.SystemException);
    System.KeyNotFoundException = KeyNotFoundException;
})(System || (System = {}));
var System;
(function (System) {
    var Lazy = (function () {
        function Lazy(func) {
            this.func = func;
        }
        Object.defineProperty(Lazy.prototype, "Value", {
            get: function () {
                if (this.value === void 0) {
                    this.value = this.func();
                }
                return this.value;
            },
            enumerable: true,
            configurable: true
        });
        return Lazy;
    })();
    System.Lazy = Lazy;
})(System || (System = {}));
var System;
(function (System) {
    var Linq;
    (function (Linq) {
        var Enumerable = (function () {
            function Enumerable() {
            }
            Enumerable.All = function (source, predicate) {
                if (source == null)
                    throw new System.ArgumentNullException("source");
                var e = source.GetEnumerator();
                try {
                    if (e.MoveNext())
                        if (!predicate(e.Current))
                            return false;
                }
                finally {
                    if (e != null)
                        e.Dispose();
                }
                return true;
            };
            Enumerable.Any = function (source, predicate) {
                if (source == null)
                    throw new System.ArgumentNullException("source");
                if (predicate === void 0 && typeof source["Count"] != 'undefined') {
                    return source.Count > 0;
                }
                if (predicate === void 0) {
                    predicate = function (_) { return true; };
                }
                var e = source.GetEnumerator();
                try {
                    if (e.MoveNext())
                        if (predicate(e.Current))
                            return true;
                }
                finally {
                    if (e != null)
                        e.Dispose();
                }
                return false;
            };
            Enumerable.ToArray = function (source) {
                var items = [];
                var count = 0;
                var collection = source;
                if (collection.CopyTo !== void 0 && typeof collection.Count !== 'undefined' && collection.Contains !== void 0 && collection.Clear !== void 0) {
                    count = collection.Count;
                    if (count > 0) {
                        items = new Array(count);
                        collection.CopyTo(items, 0);
                    }
                    else {
                        items = new Array();
                    }
                }
                else {
                    var itemEnumerator = source.GetEnumerator();
                    try {
                        while (itemEnumerator.MoveNext()) {
                            var item = itemEnumerator.Current;
                            if (items == null) {
                                items = new Array(4);
                            }
                            else if (items.length == count) {
                                var newItems = new Array((count * 2));
                                TSArray.Copy(items, 0, newItems, 0, count);
                                items = newItems;
                            }
                            items[count] = item;
                            count++;
                        }
                    }
                    finally {
                        if (typeof itemEnumerator['Dispose'] != 'undefined')
                            itemEnumerator.Dispose();
                    }
                    var result = new Array(count);
                    TSArray.Copy_2(items, result, count);
                    items = result;
                }
                return items;
            };
            Enumerable.SequenceEqual = function (param0, param1, param2) {
                if (typeof param2 !== 'undefined') {
                    return Enumerable.SequenceEqual_overload0(param0, param1, param2);
                }
                if (typeof param2 === 'undefined') {
                    return Enumerable.SequenceEqual_overload1(param0, param1);
                }
            };
            Enumerable.SequenceEqual_overload0 = function (first, second, comparer) {
                if (comparer == null)
                    comparer = System.Collections.Generic.EqualityComparer.Default;
                if (first == null)
                    throw new System.ArgumentNullException("first");
                if (second == null)
                    throw new System.ArgumentNullException("first");
                var e1 = first.GetEnumerator();
                var e2 = second.GetEnumerator();
                try {
                    while (e1.MoveNext()) {
                        if (!(e2.MoveNext() && comparer.Equals(e1.Current, e2.Current)))
                            return false;
                    }
                    if (e2.MoveNext())
                        return false;
                }
                finally {
                    if (e2 != null)
                        e2.Dispose();
                    if (e1 != null)
                        e1.Dispose();
                }
                return true;
            };
            Enumerable.SequenceEqual_overload1 = function (first, second) {
                return Enumerable.SequenceEqual(first, second, null);
            };
            Enumerable.Select = function (source, selector) {
                var list = new System.Collections.Generic.List();
                var itemEnumerator = source.GetEnumerator();
                try {
                    while (itemEnumerator.MoveNext()) {
                        var item = itemEnumerator.Current;
                        list.Add(selector(item));
                    }
                }
                finally {
                    itemEnumerator.Dispose();
                }
                return list;
            };
            Enumerable.Where = function (source, predicate) {
                var list = new System.Collections.Generic.List();
                var itemEnumerator = source.GetEnumerator();
                try {
                    while (itemEnumerator.MoveNext()) {
                        var item = itemEnumerator.Current;
                        if (predicate(item)) {
                            list.Add(item);
                        }
                    }
                }
                finally {
                    itemEnumerator.Dispose();
                }
                return list;
            };
            Enumerable.Contains = function (param0, param1, param2) {
                if (typeof param2 !== 'undefined') {
                    return Enumerable.Contains_overload0(param0, param1, param2);
                }
                if (typeof param2 === 'undefined') {
                    return Enumerable.Contains_overload1(param0, param1);
                }
            };
            Enumerable.Contains_overload0 = function (source, value, comparer) {
                if (comparer == null)
                    comparer = System.Collections.Generic.EqualityComparer.Default;
                if (source == null)
                    throw new System.ArgumentNullException("source");
                var elementEnumerator = source.GetEnumerator();
                try {
                    while (elementEnumerator.MoveNext()) {
                        var element = elementEnumerator.Current;
                        if (comparer.Equals(element, value))
                            return true;
                    }
                }
                finally {
                    elementEnumerator.Dispose();
                }
                return false;
            };
            Enumerable.Contains_overload1 = function (source, value) {
                var collection = source;
                if (typeof collection["Contains"] !== 'undefined')
                    return collection.Contains(value);
                return Enumerable.Contains(source, value, null);
            };
            Enumerable.ToList = function (source) {
                if (source instanceof System.Collections.Generic.List) {
                    return source;
                }
                var list = new System.Collections.Generic.List();
                var itemEnumerator = source.GetEnumerator();
                try {
                    while (itemEnumerator.MoveNext()) {
                        var item = itemEnumerator.Current;
                        list.Add(item);
                    }
                }
                finally {
                    itemEnumerator.Dispose();
                }
                return list;
            };
            Enumerable.Concat = function (first, second) {
                var list = new System.Collections.Generic.List(first);
                list.AddRange(second);
                return list;
            };
            Enumerable.LastOrDefault = function (param0, param1, param2) {
                if ((param0 !== void 0) && typeof param1 === 'function') {
                    return Enumerable.LastOrDefault_overload0(param0, param1, param2);
                }
                if ((param0 !== void 0)) {
                    return Enumerable.LastOrDefault_overload1(param0, param1);
                }
            };
            Enumerable.LastOrDefault_overload0 = function (source, predicate, defaultVal) {
                if (defaultVal === void 0) { defaultVal = null; }
                if (source == null)
                    throw new System.ArgumentException("source");
                if (predicate == null)
                    throw new System.ArgumentException("predicate");
                var result = defaultVal;
                var elementEnumerator = source.GetEnumerator();
                try {
                    while (elementEnumerator.MoveNext()) {
                        var element = elementEnumerator.Current;
                        if (predicate(element)) {
                            result = element;
                        }
                    }
                }
                finally {
                    if (elementEnumerator.Dispose !== void 0)
                        elementEnumerator.Dispose();
                }
                return result;
            };
            Enumerable.LastOrDefault_overload1 = function (source, defaultVal) {
                if (defaultVal === void 0) { defaultVal = null; }
                if (source == null)
                    throw new System.ArgumentException("source");
                var list = source;
                if (list.Count === void 0 || list.$get$ === void 0) {
                    list = null;
                }
                if (list != null) {
                    var count = list.Count;
                    if (count > 0)
                        return list.$get$(count - 1);
                }
                else {
                    var e = source.GetEnumerator();
                    try {
                        if (e.MoveNext()) {
                            var result = null;
                            do {
                                result = e.Current;
                            } while (e.MoveNext());
                            return result;
                        }
                    }
                    finally {
                        if (e != null)
                            e.Dispose();
                    }
                }
                return defaultVal;
            };
            Enumerable.OfType = function (source, clssType) {
                var list = new System.Collections.Generic.List();
                if (source == null)
                    throw new System.ArgumentException("source");
                var e = source.GetEnumerator();
                try {
                    while (e.MoveNext()) {
                        if (e.Current instanceof clssType) {
                            list.Add(e.Current);
                        }
                    }
                }
                finally {
                    if (e != null && e.Dispose !== void 0)
                        e.Dispose();
                }
                return list;
            };
            Enumerable.SingleOrDefault = function (param0, param1, param2) {
                if (typeof param1 === 'function' && (param2 === void 0)) {
                    return Enumerable.SingleOrDefault_overload1(param0, param1);
                }
                if (typeof param1 === 'function' && (param2 !== void 0)) {
                    return Enumerable.SingleOrDefault_overload2(param0, param1, param2);
                }
                if ((param1 !== void 0) && (param2 === void 0)) {
                    return Enumerable.SingleOrDefault_overload0(param0, param1);
                }
                if ((param1 === void 0) && (param2 === void 0)) {
                    return Enumerable.SingleOrDefault_overload3(param0);
                }
            };
            Enumerable.SingleOrDefault_overload0 = function (source, defaultVal) {
                if (source == null)
                    throw System.SystemError.ArgumentNull("source");
                var list = source;
                if (list.Count === void 0 || list.$get$ === void 0) {
                    list = null;
                }
                if (list != null) {
                    switch (list.Count) {
                        case 0:
                            return defaultVal;
                        case 1:
                            return list.$get$(0);
                    }
                }
                else {
                    var e = source.GetEnumerator();
                    try {
                        if (!e.MoveNext())
                            return defaultVal;
                        var result = e.Current;
                        if (!e.MoveNext())
                            return result;
                    }
                    finally {
                        if (e != null)
                            e.Dispose();
                    }
                }
                throw System.SystemError.MoreThanOneElement();
            };
            Enumerable.SingleOrDefault_overload1 = function (source, predicate) {
                return Enumerable.SingleOrDefault_overload2(source, predicate, null);
            };
            Enumerable.SingleOrDefault_overload2 = function (source, predicate, defaultVal) {
                if (source == null)
                    throw System.SystemError.ArgumentNull("source");
                if (predicate == null)
                    throw System.SystemError.ArgumentNull("predicate");
                var result = defaultVal;
                var count = 0;
                var elementEnumerator = source.GetEnumerator();
                try {
                    while (elementEnumerator.MoveNext()) {
                        var element = elementEnumerator.Current;
                        if (predicate(element)) {
                            result = element;
                            count++;
                        }
                    }
                }
                finally {
                    if (elementEnumerator.Dispose !== void 0)
                        elementEnumerator.Dispose();
                }
                switch (count) {
                    case 0:
                        return defaultVal;
                    case 1:
                        return result;
                }
                throw System.SystemError.MoreThanOneMatch();
            };
            Enumerable.SingleOrDefault_overload3 = function (source) {
                return Enumerable.SingleOrDefault_overload0(source, null);
            };
            Enumerable.Count = function (param0, param1) {
                if (typeof param1 === 'function') {
                    return Enumerable.Count_overload0(param0, param1);
                }
                if ((param1 === void 0)) {
                    return Enumerable.Count_overload1(param0);
                }
            };
            Enumerable.Count_overload0 = function (source, predicate) {
                if (source == null)
                    throw System.SystemError.ArgumentNull("source");
                if (predicate == null)
                    throw System.SystemError.ArgumentNull("predicate");
                var count = 0;
                var elementEnumerator = source.GetEnumerator();
                try {
                    while (elementEnumerator.MoveNext()) {
                        var element = elementEnumerator.Current;
                        if (predicate(element))
                            count++;
                    }
                }
                finally {
                    elementEnumerator.Dispose();
                }
                return count;
            };
            Enumerable.Count_overload1 = function (source) {
                if (source == null)
                    throw System.SystemError.ArgumentNull("source");
                var asCount = source;
                if (asCount.Count !== void 0) {
                    return asCount.Count;
                }
                var count = 0;
                var e = source.GetEnumerator();
                try {
                    while (e.MoveNext())
                        count++;
                }
                finally {
                    if (e != null)
                        e.Dispose();
                }
                return count;
            };
            Enumerable.FirstOrDefault = function (param0, param1, param2) {
                if (typeof param1 === 'function' && (param2 !== void 0)) {
                    return Enumerable.FirstOrDefault_overload1(param0, param1, param2);
                }
                if (typeof param1 === 'function' && (param2 === void 0)) {
                    return Enumerable.FirstOrDefault_overload2(param0, param1);
                }
                if ((param1 !== void 0) && (param2 === void 0)) {
                    return Enumerable.FirstOrDefault_overload3(param0, param1);
                }
                if ((param1 === void 0) && (param2 === void 0)) {
                    return Enumerable.FirstOrDefault_overload0(param0);
                }
                throw new System.Error('overload failed');
            };
            Enumerable.FirstOrDefault_overload0 = function (source) {
                return Enumerable.FirstOrDefault(source, null);
            };
            Enumerable.FirstOrDefault_overload1 = function (source, predicate, defaultVal) {
                if (source == null)
                    throw System.SystemError.ArgumentNull("source");
                if (predicate == null)
                    throw System.SystemError.ArgumentNull("predicate");
                var elementEnumerator = source.GetEnumerator();
                try {
                    while (elementEnumerator.MoveNext()) {
                        var element = elementEnumerator.Current;
                        if (predicate(element))
                            return element;
                    }
                }
                finally {
                    if (elementEnumerator !== null)
                        elementEnumerator.Dispose();
                }
                return defaultVal;
            };
            Enumerable.FirstOrDefault_overload2 = function (source, predicate) {
                return Enumerable.FirstOrDefault(source, predicate, null);
            };
            Enumerable.FirstOrDefault_overload3 = function (source, defaultVal) {
                if (source == null)
                    throw System.SystemError.ArgumentNull("source");
                var list = source;
                if (list.Count === void 0 || list.$get$ === void 0) {
                    list = null;
                }
                if (list != null) {
                    if (list.Count > 0)
                        return list.$get$(0);
                }
                else {
                    var e = source.GetEnumerator();
                    try {
                        if (e.MoveNext())
                            return e.Current;
                    }
                    finally {
                        if (e != null)
                            e.Dispose();
                    }
                }
                return defaultVal;
            };
            Enumerable.First = function (source, predicate) {
                if (typeof predicate === 'function') {
                    return Enumerable.First_overload1(source, predicate);
                }
                return Enumerable.First_overload3(source);
                throw new System.Error('overload failed');
            };
            Enumerable.First_overload1 = function (source, predicate) {
                if (source == null)
                    throw System.SystemError.ArgumentNull("source");
                if (predicate == null)
                    throw System.SystemError.ArgumentNull("predicate");
                var elementEnumerator = source.GetEnumerator();
                try {
                    while (elementEnumerator.MoveNext()) {
                        var element = elementEnumerator.Current;
                        if (predicate(element))
                            return element;
                    }
                }
                finally {
                    if (elementEnumerator !== null)
                        elementEnumerator.Dispose();
                }
                throw new System.KeyNotFoundException("");
            };
            Enumerable.First_overload3 = function (source) {
                if (source == null)
                    throw System.SystemError.ArgumentNull("source");
                var list = source;
                if (list.Count === void 0 || list.$get$ === void 0) {
                    list = null;
                }
                if (list != null) {
                    if (list.Count > 0)
                        return list.$get$(0);
                }
                else {
                    var e = source.GetEnumerator();
                    try {
                        if (e.MoveNext())
                            return e.Current;
                    }
                    finally {
                        if (e != null)
                            e.Dispose();
                    }
                }
                throw new System.KeyNotFoundException("");
            };
            Enumerable.Cast = function (source, type) {
                if (type === void 0) { type = null; }
                if (type === null) {
                    return source;
                }
                var arr = new Array();
                var e = source.GetEnumerator();
                try {
                    if (e.MoveNext()) {
                        if (type !== null) {
                            if (!(e.Current instanceof type)) {
                                throw new System.SystemException("can not cast");
                            }
                        }
                        arr.push(e.Current);
                    }
                }
                finally {
                    if (e != null && e.Dispose !== void 0)
                        e.Dispose();
                }
                return arr;
            };
            return Enumerable;
        })();
        Linq.Enumerable = Enumerable;
    })(Linq = System.Linq || (System.Linq = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Linq;
    (function (Linq) {
        var ImmutableArrayExtensions = (function () {
            function ImmutableArrayExtensions() {
            }
            ImmutableArrayExtensions.SequenceEqual = function (immutableArray, items, comparer) {
                if (comparer === void 0) { comparer = null; }
                if (immutableArray == null) {
                    throw new System.ArgumentNullException();
                }
                if (items == null) {
                    throw new System.ArgumentNullException();
                }
                if (ReferenceEquals(immutableArray.array, items.array)) {
                    return true;
                }
                if (immutableArray.Length != items.Length) {
                    return false;
                }
                if (comparer == null) {
                    comparer = System.Collections.Generic.EqualityComparer.Default;
                }
                for (var i = 0; i < immutableArray.Length; i++) {
                    if (!comparer.Equals(immutableArray.array[i], items.array[i])) {
                        return false;
                    }
                }
                return true;
            };
            return ImmutableArrayExtensions;
        })();
        Linq.ImmutableArrayExtensions = ImmutableArrayExtensions;
    })(Linq = System.Linq || (System.Linq = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Linq;
    (function (Linq) {
        var ImmutableExtensions = (function () {
            function ImmutableExtensions() {
            }
            ImmutableExtensions.ToArray = function (sequence, count) {
                var array = new Array(count);
                var i = 0;
                var itemEnumerator = sequence.GetEnumerator();
                try {
                    while (itemEnumerator.MoveNext()) {
                        var item = itemEnumerator.Current;
                        array[i++] = item;
                    }
                }
                finally {
                    if (typeof itemEnumerator['Dispose'] != 'undefined')
                        itemEnumerator.Dispose();
                }
                return array;
            };
            ImmutableExtensions.TryGetCount = function (param0, param1) {
                return this.TryGetCount_overload0(param0, param1);
            };
            ImmutableExtensions.TryGetCount_overload0 = function (sequence, count) {
                if (typeof sequence["Count"] != 'undefined') {
                    count.refObj = sequence["Count"];
                    return true;
                }
                count.refObj = 0;
                return false;
            };
            return ImmutableExtensions;
        })();
        Linq.ImmutableExtensions = ImmutableExtensions;
    })(Linq = System.Linq || (System.Linq = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Math = (function () {
        function Math() {
        }
        Math.Max = function (val1, val2) {
            return val1 > val2 ? val1 : val2;
        };
        Math.Min = function (val1, val2) {
            return val1 < val2 ? val1 : val2;
        };
        Math.Abs = function (value) {
            return value >= 0 ? value : -value;
        };
        return Math;
    })();
    System.Math = Math;
})(System || (System = {}));
var System;
(function (System) {
    var NotImplementedException = (function (_super) {
        __extends(NotImplementedException, _super);
        function NotImplementedException(message, param) {
            _super.call(this, message, param);
            this.message = message;
        }
        return NotImplementedException;
    })(System.SystemException);
    System.NotImplementedException = NotImplementedException;
})(System || (System = {}));
var System;
(function (System) {
    var NotSupportedException = (function (_super) {
        __extends(NotSupportedException, _super);
        function NotSupportedException(message, param) {
            _super.call(this, message, param);
            this.message = message;
        }
        return NotSupportedException;
    })(System.SystemException);
    System.NotSupportedException = NotSupportedException;
    var FunctionRequiredException = (function (_super) {
        __extends(FunctionRequiredException, _super);
        function FunctionRequiredException(message, param) {
            _super.call(this, message, param);
            this.message = message;
        }
        return FunctionRequiredException;
    })(System.SystemException);
    System.FunctionRequiredException = FunctionRequiredException;
})(System || (System = {}));
var System;
(function (System) {
    var ObjectDisposedException = (function (_super) {
        __extends(ObjectDisposedException, _super);
        function ObjectDisposedException(message, param) {
            _super.call(this, message, param);
            this.message = message;
        }
        return ObjectDisposedException;
    })(System.InvalidOperationException);
    System.ObjectDisposedException = ObjectDisposedException;
})(System || (System = {}));
var System;
(function (System) {
    var OperationCanceledException = (function (_super) {
        __extends(OperationCanceledException, _super);
        function OperationCanceledException(message, param) {
            _super.call(this, message, param);
            this.message = message;
        }
        return OperationCanceledException;
    })(System.SystemException);
    System.OperationCanceledException = OperationCanceledException;
})(System || (System = {}));
var System;
(function (System) {
    var Random = (function () {
        function Random(param0) {
            this.inext = 0;
            this.inextp = 0;
            this.SeedArray = new Array(56);
            if (typeof param0 == 'number') {
                this.constructor_Random_overload0(param0);
                return;
            }
            if (typeof param0 == 'undefined') {
                this.constructor_Random_overload0(System.Environment.TickCount);
                this.constructor_Random_overload1();
                return;
            }
            throw new System.Error('overload failed');
        }
        Random.prototype.Sample = function () {
            return (this.InternalSample() * (1.0 / Random.MBIG));
        };
        Random.prototype.InternalSample = function () {
            var retVal = 0;
            var locINext = this.inext;
            var locINextp = this.inextp;
            if (++locINext >= 56)
                locINext = 1;
            if (++locINextp >= 56)
                locINextp = 1;
            retVal = this.SeedArray[locINext] - this.SeedArray[locINextp];
            if (retVal == Random.MBIG)
                retVal--;
            if (retVal < 0)
                retVal += Random.MBIG;
            this.SeedArray[locINext] = retVal;
            this.inext = locINext;
            this.inextp = locINextp;
            return retVal;
        };
        Random.prototype.GetSampleForLargeRange = function () {
            var result = this.InternalSample();
            var negative = (this.InternalSample() % 2 == 0) ? true : false;
            if (negative) {
                result = -result;
            }
            var d = result;
            d += (System.Int32.MaxValue - 1);
            d /= 2 * System.Int32.MaxValue - 1;
            return d;
        };
        Random.prototype.NextDouble = function () {
            return this.Sample();
        };
        Random.prototype.NextBytes = function (buffer) {
            if (buffer == null)
                throw new System.ArgumentNullException("buffer");
            System.Diagnostics.Contracts.Contract.EndContractBlock();
            for (var i = 0; i < buffer.length; i++) {
                buffer[i] = (this.InternalSample() % (Byte.MaxValue + 1));
            }
        };
        Random.prototype.constructor_Random_overload0 = function (Seed) {
            var ii = 0;
            var mj = 0, mk = 0;
            var subtraction = (Seed == System.Int32.MinValue) ? System.Int32.MaxValue : System.Math.Abs(Seed);
            mj = Random.MSEED - subtraction;
            this.SeedArray[55] = mj;
            mk = 1;
            for (var i = 1; i < 55; i++) {
                ii = (21 * i) % 55;
                this.SeedArray[ii] = mk;
                mk = mj - mk;
                if (mk < 0)
                    mk += Random.MBIG;
                mj = this.SeedArray[ii];
            }
            for (var k = 1; k < 5; k++) {
                for (var i = 1; i < 56; i++) {
                    this.SeedArray[i] -= this.SeedArray[1 + (i + 30) % 55];
                    if (this.SeedArray[i] < 0)
                        this.SeedArray[i] += Random.MBIG;
                }
            }
            this.inext = 0;
            this.inextp = 21;
            Seed = 1;
        };
        Random.prototype.constructor_Random_overload1 = function () {
        };
        Random.prototype.Next = function (param0, param1) {
            if (typeof param0 == 'number' && typeof param1 == 'number') {
                return this.Next_overload0(param0, param1);
            }
            if (typeof param0 == 'number' && typeof param1 == 'undefined') {
                return this.Next_overload1(param0);
            }
            if (typeof param0 == 'undefined' && typeof param1 == 'undefined') {
                return this.Next_overload2();
            }
        };
        Random.prototype.Next_overload0 = function (minValue, maxValue) {
            if (minValue > maxValue) {
                throw new System.ArgumentOutOfRangeException("minValue", System.Environment.GetResourceString("Argument_MinMaxValue", "minValue", "maxValue"));
            }
            System.Diagnostics.Contracts.Contract.EndContractBlock();
            var range = maxValue - minValue;
            if (range <= System.Int32.MaxValue) {
                return (((this.Sample() * range) | 0) + minValue);
            }
            else {
                return (((this.GetSampleForLargeRange() * range) | 0) + minValue);
            }
        };
        Random.prototype.Next_overload1 = function (maxValue) {
            if (maxValue < 0) {
                throw new System.ArgumentOutOfRangeException("maxValue", System.Environment.GetResourceString("ArgumentOutOfRange_MustBePositive", "maxValue"));
            }
            System.Diagnostics.Contracts.Contract.EndContractBlock();
            return ((this.Sample() * maxValue) | 0);
        };
        Random.prototype.Next_overload2 = function () {
            return this.InternalSample();
        };
        Random.MBIG = System.Int32.MaxValue;
        Random.MSEED = 161803398;
        Random.MZ = 0;
        return Random;
    })();
    System.Random = Random;
})(System || (System = {}));
var System;
(function (System) {
    var Resources;
    (function (Resources) {
        var ResourceManager = (function () {
            function ResourceManager(name, resourceObj) {
                this.resourceObj = resourceObj;
            }
            ResourceManager.prototype.GetString = function (code, format) {
                var resource = this.resourceObj[code];
                if (resource === void 0) {
                    throw new System.SystemException('resource not found');
                }
                return resource;
            };
            return ResourceManager;
        })();
        Resources.ResourceManager = ResourceManager;
    })(Resources = System.Resources || (System.Resources = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Runtime;
    (function (Runtime) {
        var CompilerServices;
        (function (CompilerServices) {
            var ConditionalWeakTable = (function () {
                function ConditionalWeakTable() {
                    this.dictionary = new System.Collections.Generic.ObjectDictionary();
                }
                ConditionalWeakTable.prototype.TryGetValue = function (key, value) {
                    return this.dictionary.TryGetValue(key, value);
                };
                ConditionalWeakTable.prototype.Add = function (key, value) {
                    this.dictionary.Add(key, value);
                };
                ConditionalWeakTable.prototype.GetValue = function (key, callBack) {
                    var refValue = { refObj: null };
                    if (this.TryGetValue(key, refValue)) {
                        return refValue.refObj;
                    }
                    var newValue = callBack(key);
                    this.Add(key, newValue);
                    return newValue;
                };
                return ConditionalWeakTable;
            })();
            CompilerServices.ConditionalWeakTable = ConditionalWeakTable;
        })(CompilerServices = Runtime.CompilerServices || (Runtime.CompilerServices = {}));
    })(Runtime = System.Runtime || (System.Runtime = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Runtime;
    (function (Runtime) {
        var CompilerServices;
        (function (CompilerServices) {
            var RuntimeHelpers = (function () {
                function RuntimeHelpers() {
                }
                RuntimeHelpers.GetHashCode = function (obj) {
                    if (typeof obj == 'string') {
                        return obj.GetHashCode();
                    }
                    if (typeof obj == 'number') {
                        return obj.GetHashCode();
                    }
                    if (typeof obj["GetHashCode"] !== 'undefined') {
                        return obj.GetHashCode();
                    }
                    throw new System.NotSupportedException('Get hash code');
                };
                RuntimeHelpers.GetStringHashCode = function (obj) {
                    return obj.GetHashCode();
                };
                return RuntimeHelpers;
            })();
            CompilerServices.RuntimeHelpers = RuntimeHelpers;
        })(CompilerServices = Runtime.CompilerServices || (Runtime.CompilerServices = {}));
    })(Runtime = System.Runtime || (System.Runtime = {}));
})(System || (System = {}));
var System;
(function (System) {
    var String = (function () {
        function String() {
        }
        String.Format = function (param1, param2, param3) {
            var s;
            var args = [];
            var index = 0;
            if (typeof param1 == 'string') {
                s = param1;
                index = 1;
            }
            else {
                s = param2;
                index = 2;
            }
            for (var _i = index; _i < arguments.length; _i++) {
                args[_i - index] = arguments[_i];
            }
            args = __unWrapArray(args);
            for (var i = 0; i < args.length; i++) {
                var find = "{" + i + "}";
                var regex = new RegExp(this.escapeRegExp(find), "g");
                s = s.replace(regex, args[i].toString());
            }
            return s.replace(/{{/g, "{").replace(/}}/g, "}");
        };
        String.Equals = function (str1, str2, comparison) {
            if (typeof comparison == 'undefined') {
                comparison = 0 /* CurrentCulture */;
            }
            if (comparison == 1 /* CurrentCultureIgnoreCase */ || comparison == 3 /* InvariantCultureIgnoreCase */ || comparison == 5 /* OrdinalIgnoreCase */) {
                str1 = System.String.ToLower(str1);
                str2 = System.String.ToLower(str2);
            }
            return str1 == str2;
        };
        String.IsUpper = function (value) {
            return value === value.toUpperCase();
        };
        String.IsLower = function (value) {
            return value === value.toLowerCase();
        };
        String.ToUpper = function (value) {
            return value.toUpperCase();
        };
        String.ToLower = function (value) {
            return value.toLowerCase();
        };
        String.IsNullOrEmpty = function (value) {
            return value == null || value == '';
        };
        String.IsNullOrWhiteSpace = function (value) {
            if (value == null) {
                return true;
            }
            return /^\s*$/.test(value);
        };
        String.Join = function (separator, source) {
            var list = new Array();
            var itemEnumerator = source.GetEnumerator();
            try {
                while (itemEnumerator.MoveNext()) {
                    var item = itemEnumerator.Current;
                    list.push(item);
                }
            }
            finally {
                if (typeof itemEnumerator['Dispose'] != 'undefined')
                    itemEnumerator.Dispose();
            }
            return list.join(separator);
        };
        String.CompareOrdinal = function (str1, str2) {
            return String.Compare(str1, str2, 4 /* Ordinal */);
        };
        String.Compare = function (str1, str2, comparison) {
            if (typeof comparison === 'boolean') {
                comparison = comparison ? 5 /* OrdinalIgnoreCase */ : 2 /* InvariantCulture */;
            }
            if (comparison === void 0) {
                comparison = 2 /* InvariantCulture */;
            }
            if (comparison == 1 /* CurrentCultureIgnoreCase */ || comparison == 3 /* InvariantCultureIgnoreCase */ || comparison == 5 /* OrdinalIgnoreCase */) {
                str1 = System.String.ToLower(str1);
                str2 = System.String.ToLower(str2);
            }
            return str1.localeCompare(str2);
        };
        String.Concat = function () {
            var strs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                strs[_i - 0] = arguments[_i];
            }
            return strs.join();
        };
        String.escapeRegExp = function (str) {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        };
        String.Empty = '';
        return String;
    })();
    System.String = String;
})(System || (System = {}));
var System;
(function (System) {
    var StringComparer = (function () {
        function StringComparer() {
        }
        Object.defineProperty(StringComparer, "Ordinal", {
            get: function () {
                return StringComparer._ordinal;
            },
            enumerable: true,
            configurable: true
        });
        StringComparer.prototype.Compare = function (param0, param1) {
            if (typeof param0 === 'string' && typeof param1 === 'string') {
                return this.Compare_String(param0, param1);
            }
            if ((param0 instanceof Object || param0 === null) && (param1 instanceof Object || param1 === null)) {
                return this.Compare_overload1(param0, param1);
            }
        };
        StringComparer.prototype.Compare_String = function (x, y) {
            throw new System.NotSupportedException();
        };
        StringComparer.prototype.Compare_overload1 = function (x, y) {
            if (x == y)
                return 0;
            if (x == null)
                return -1;
            if (y == null)
                return 1;
            if (typeof x["CompareTo"] != 'undefined') {
                return x.CompareTo(y);
            }
            throw new System.ArgumentException(System.Environment.GetResourceString("Argument_ImplementIComparable"));
        };
        StringComparer.prototype.Equals = function (param0, param1) {
            if (typeof param0 === 'String' && typeof param1 === 'String') {
                return this.Equals_String(param0, param1);
            }
            if ((param0 instanceof Object || param0 === null) && (param1 instanceof Object || param1 === null)) {
                return this.Equals_overload1(param0, param1);
            }
        };
        StringComparer.prototype.Equals_String = function (x, y) {
            throw new System.NotSupportedException();
        };
        StringComparer.prototype.Equals_overload1 = function (x, y) {
            if (x == y)
                return true;
            if (x == null || y == null)
                return false;
            return x == y;
        };
        StringComparer.prototype.GetHashCode = function (param0) {
            if (typeof param0 === 'string') {
                return this.GetHashCode_String(param0);
            }
            if ((param0 instanceof Object || param0 === null)) {
                return this.GetHashCode_overload1(param0);
            }
        };
        StringComparer.prototype.GetHashCode_String = function (obj) {
            throw new System.NotSupportedException();
        };
        StringComparer.prototype.GetHashCode_overload1 = function (obj) {
            if (obj == null) {
                throw new System.ArgumentNullException("obj");
            }
            if (typeof obj["GetHashCode"] == 'undefined') {
                throw new System.FunctionRequiredException();
            }
            return obj.GetHashCode();
        };
        return StringComparer;
    })();
    System.StringComparer = StringComparer;
    var OrdinalComparer = (function (_super) {
        __extends(OrdinalComparer, _super);
        function OrdinalComparer(ignoreCase) {
            _super.call(this);
            this._ignoreCase = false;
            if (ignoreCase === void 0) {
                ignoreCase = false;
            }
            this._ignoreCase = ignoreCase;
        }
        OrdinalComparer.prototype.Compare = function (x, y) {
            if (x === y)
                return 0;
            if (x == null)
                return -1;
            if (y == null)
                return 1;
            if (this._ignoreCase) {
                return System.String.Compare(x, y, 5 /* OrdinalIgnoreCase */);
            }
            return System.String.CompareOrdinal(x, y);
        };
        OrdinalComparer.prototype.Equals = function (param0, param1) {
            if (typeof param0 === 'string' && typeof param1 === 'string') {
                return this.Equals_overload11(param0, param1);
            }
            if ((param0 !== void 0) && (param1 === void 0)) {
                return this.Equals_overload00(param0);
            }
            throw new System.Error('overload failed');
        };
        OrdinalComparer.prototype.Equals_overload00 = function (obj) {
            var comparer = __as__(obj, OrdinalComparer);
            if (comparer == null) {
                return false;
            }
            return (this._ignoreCase == comparer._ignoreCase);
        };
        OrdinalComparer.prototype.Equals_overload11 = function (x, y) {
            if (x === y)
                return true;
            if (x == null || y == null)
                return false;
            if (this._ignoreCase) {
                if (x.length != y.length) {
                    return false;
                }
                return (System.String.Compare(x, y, 5 /* OrdinalIgnoreCase */) == 0);
            }
            return x == y;
        };
        OrdinalComparer.prototype.GetHashCode = function (param0) {
            if (typeof param0 === 'string') {
                return this.GetHashCode_overload11(param0);
            }
            if ((param0 === void 0)) {
                return this.GetHashCode_overload00();
            }
            throw new System.Error('overload failed');
        };
        OrdinalComparer.prototype.GetHashCode_overload00 = function () {
            var name = "OrdinalComparer";
            var hashCode = name.GetHashCode();
            return this._ignoreCase ? (~hashCode) : hashCode;
        };
        OrdinalComparer.prototype.GetHashCode_overload11 = function (obj) {
            if (obj == null) {
                throw new System.ArgumentNullException("obj");
            }
            return obj.GetHashCode();
        };
        return OrdinalComparer;
    })(StringComparer);
    System.OrdinalComparer = OrdinalComparer;
    System.StringComparer._ordinal = new OrdinalComparer();
})(System || (System = {}));
var System;
(function (System) {
    (function (StringComparison) {
        StringComparison[StringComparison["CurrentCulture"] = 0] = "CurrentCulture";
        StringComparison[StringComparison["CurrentCultureIgnoreCase"] = 1] = "CurrentCultureIgnoreCase";
        StringComparison[StringComparison["InvariantCulture"] = 2] = "InvariantCulture";
        StringComparison[StringComparison["InvariantCultureIgnoreCase"] = 3] = "InvariantCultureIgnoreCase";
        StringComparison[StringComparison["Ordinal"] = 4] = "Ordinal";
        StringComparison[StringComparison["OrdinalIgnoreCase"] = 5] = "OrdinalIgnoreCase";
    })(System.StringComparison || (System.StringComparison = {}));
    var StringComparison = System.StringComparison;
})(System || (System = {}));
var System;
(function (System) {
    var SystemError = (function () {
        function SystemError() {
        }
        SystemError.ArgumentNull = function (message) {
            throw new System.ArgumentNullException(message);
        };
        SystemError.MoreThanOneElement = function () {
            throw new System.SystemException("More than one element");
        };
        SystemError.MoreThanOneMatch = function () {
            throw new System.SystemException("More than one matched element");
        };
        return SystemError;
    })();
    System.SystemError = SystemError;
})(System || (System = {}));
var System;
(function (System) {
    var Text;
    (function (Text) {
        var Encoding = (function () {
            function Encoding() {
            }
            Encoding.UTF8 = new Encoding();
            return Encoding;
        })();
        Text.Encoding = Encoding;
    })(Text = System.Text || (System.Text = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Text;
    (function (Text) {
        var StringBuilder = (function () {
            function StringBuilder(stringValueOrLength) {
                this._list = new Array();
                if (stringValueOrLength === void 0) {
                    return;
                }
                var stringValue;
                var length;
                if (typeof stringValueOrLength === 'number') {
                    length = stringValueOrLength;
                }
                if (typeof stringValueOrLength === 'string') {
                    stringValue = stringValueOrLength;
                }
                if (stringValue !== void 0 && stringValue !== "") {
                    this._list.push(stringValue);
                }
            }
            StringBuilder.prototype.$get$ = function (index) {
                var count = 0;
                for (var i = 0; i < this._list.length; i++) {
                    var str = this._list[i];
                    var length = str.length;
                    if (index >= count && index < count + length) {
                        return str[index - count];
                    }
                    count += length;
                }
                throw new System.ArgumentOutOfRangeException("index");
            };
            StringBuilder.prototype.Insert = function (index, str) {
                if (index === 0) {
                    this._list.Insert(0, str);
                    return this;
                }
                var count = 0;
                for (var i = 0; i < this._list.length; i++) {
                    var str = this._list[i];
                    var length = str.length;
                    if (index == count) {
                        this._list.Insert(i, str);
                        return this;
                    }
                    if (index > count && index < count + length) {
                        var localIndex = index - count;
                        var str1 = str.substr(0, localIndex);
                        var str2 = str.substr(localIndex);
                        this._list[i] = str1 + str + str2;
                        return this;
                    }
                    count += length;
                }
                if (index == count) {
                    this._list.push(str);
                    return this;
                }
                return this;
            };
            Object.defineProperty(StringBuilder.prototype, "Length", {
                get: function () {
                    var count = 0;
                    for (var i = 0; i < this._list.length; i++) {
                        count += this._list[i].length;
                    }
                    return count;
                },
                set: function (value) {
                    if (value == 0) {
                        this._list.length = 0;
                        return;
                    }
                    throw new System.Error('not support');
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(StringBuilder.prototype, "Capacity", {
                get: function () {
                    return this.Length;
                },
                enumerable: true,
                configurable: true
            });
            StringBuilder.prototype.Clear = function () {
                this._list.length = 0;
            };
            StringBuilder.prototype.Remove = function (startIndex, length) {
                var start = 0;
                var end = 0;
                var endIndex = startIndex + length;
                var indexToRemove = new Array();
                ;
                for (var i = 0; i < this._list.length; i++) {
                    var current = this._list[i];
                    end += current.length;
                    var localStartIndex = -1;
                    var localEndIndex = -1;
                    if (startIndex >= start && startIndex < end) {
                        localStartIndex = startIndex - start;
                    }
                    if (endIndex >= start && endIndex < end) {
                        localEndIndex = endIndex - start;
                    }
                    if (localStartIndex >= 0 && localEndIndex >= 0) {
                        this._list[i] = current.substr(0, localStartIndex) + current.substr(localEndIndex);
                        return;
                    }
                    else if (localStartIndex >= 0) {
                        if (localStartIndex == 0) {
                            indexToRemove.push(i);
                        }
                        else {
                            this._list[i] = current.substr(0, localStartIndex);
                        }
                    }
                    else if (localEndIndex >= 0) {
                        this._list[i] = current.substr(localEndIndex);
                    }
                    else if (start >= startIndex && end <= endIndex) {
                        indexToRemove.push(i);
                    }
                    start += current.length;
                }
                if (indexToRemove.length > 0) {
                    this._list.splice(indexToRemove[0], indexToRemove.length);
                }
            };
            StringBuilder.prototype.AppendLine = function (value) {
                this.Append(value + System.Environment.NewLine);
                return this;
            };
            StringBuilder.prototype.Append = function (value, repeatCount, charCount) {
                if (typeof charCount === 'number') {
                    if (typeof value === "string") {
                        value = value.split('');
                    }
                    var arr = value;
                    var startIndex = repeatCount;
                    if (startIndex != 0 || charCount != arr.length) {
                        arr = arr.slice(startIndex, charCount);
                    }
                    this._list.push(arr.join(''));
                    return this;
                }
                if (typeof value !== 'string') {
                    value = value.toString();
                }
                if (typeof repeatCount === 'undefined')
                    repeatCount = 1;
                for (var i = 0; i < repeatCount; i++) {
                    this._list.push(value);
                }
                return this;
            };
            StringBuilder.prototype.AppendFormat = function (value) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                for (var i = 0; i < args.length; i++) {
                    var find = "{" + i + "}";
                    var regex = new RegExp(this.escapeRegExp(find), "g");
                    value = value.replace(regex, args[i]);
                }
                return this.Append(value);
            };
            StringBuilder.prototype.ToString = function (startIndex, length) {
                if (typeof startIndex != 'undefined' && typeof length != 'undefined') {
                    return this._list.join('').substr(startIndex, length);
                }
                return this._list.join('');
            };
            StringBuilder.prototype.escapeRegExp = function (str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            };
            StringBuilder.prototype.CopyTo = function (sourceIndex, destination, destinationIndex, count) {
                if (destination == null)
                    throw new System.ArgumentNullException("destination");
                if (count < 0)
                    throw new System.ArgumentOutOfRangeException("count", System.Environment.GetResourceString("ArgumentOutOfRange_NegativeCount"));
                if (sourceIndex < 0)
                    throw new System.ArgumentOutOfRangeException("sourceIndex", System.Environment.GetResourceString("ArgumentOutOfRange_Index"));
                if (count > this.Length - sourceIndex)
                    throw new System.ArgumentOutOfRangeException("sourceIndex", System.Environment.GetResourceString("ArgumentOutOfRange_IndexCount"));
                if (destinationIndex > destination.length - count || destinationIndex < 0)
                    throw new System.ArgumentOutOfRangeException("destinationIndex", System.Environment.GetResourceString("ArgumentOutOfRange_IndexCount"));
                for (var i = 0; i < count; i++) {
                    destination[i + destinationIndex] = this.$get$(i + sourceIndex);
                }
            };
            return StringBuilder;
        })();
        Text.StringBuilder = StringBuilder;
    })(Text = System.Text || (System.Text = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Threading;
    (function (Threading) {
        var CancellationToken = (function () {
            function CancellationToken() {
                this.isCancelled = false;
            }
            Object.defineProperty(CancellationToken.prototype, "IsCancellationRequested", {
                get: function () {
                    return this.isCancelled;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(CancellationToken.prototype, "CanBeCanceled", {
                get: function () {
                    return false;
                },
                enumerable: true,
                configurable: true
            });
            CancellationToken.prototype.ThrowIfCancellationRequested = function () {
                if (this.isCancelled) {
                    throw new System.OperationCanceledException('cancelled');
                }
            };
            CancellationToken.Default = new CancellationToken();
            CancellationToken.None = new CancellationToken();
            return CancellationToken;
        })();
        Threading.CancellationToken = CancellationToken;
    })(Threading = System.Threading || (System.Threading = {}));
})(System || (System = {}));
var System;
(function (System) {
    var Threading;
    (function (Threading) {
        var Volatile = (function () {
            function Volatile() {
            }
            Volatile.Write = function (location, value) {
                location.refObj = value;
            };
            return Volatile;
        })();
        Threading.Volatile = Volatile;
    })(Threading = System.Threading || (System.Threading = {}));
})(System || (System = {}));
var System;
(function (System) {
    var UnauthorizedAccessException = (function (_super) {
        __extends(UnauthorizedAccessException, _super);
        function UnauthorizedAccessException(message, param) {
            _super.call(this, message, param);
            this.message = message;
        }
        return UnauthorizedAccessException;
    })(System.SystemException);
    System.UnauthorizedAccessException = UnauthorizedAccessException;
})(System || (System = {}));
var System;
(function (System) {
    var WeakReference = (function () {
        function WeakReference(target) {
            this.target = target;
        }
        WeakReference.prototype.TryGetTarget = function (target) {
            target.refObj = this.target;
            return this.target != null;
        };
        return WeakReference;
    })();
    System.WeakReference = WeakReference;
})(System || (System = {}));
var TSArrayBuffer = (function () {
    function TSArrayBuffer() {
    }
    TSArrayBuffer.Clear = function (arr, index, length) {
        for (var i = index; i < length; i++) {
            arr[i] = 0;
        }
    };
    TSArrayBuffer.Copy = function (param1, param2, param3, param4, param5) {
        if (typeof param5 == 'undefined')
            TSArray.Copy_2(param1, param2, param3);
        if (param5)
            TSArray.Copy_1(param1, param2, param3, param4, param5);
    };
    TSArrayBuffer.Copy_1 = function (sourceArray, sourceIndex, destinationArray, destinationIndex, length) {
        for (var i = 0; i < length; i++) {
            destinationArray[i + destinationIndex] = sourceArray[i + sourceIndex];
        }
    };
    TSArrayBuffer.Copy_2 = function (sourceArray, destinationArray, length) {
        TSArrayBuffer.Copy_1(sourceArray, 0, destinationArray, 0, length);
    };
    return TSArrayBuffer;
})();
var TSArray = (function () {
    function TSArray() {
    }
    TSArray.Resize = function (array, length) {
        array.refObj.length = length;
    };
    TSArray.IndexOf = function (array, value, startIndex, count) {
        var lb = 0;
        var endIndex = startIndex + count;
        if (value == null) {
            for (var i = startIndex; i < endIndex; i++) {
                if (array[i] == null)
                    return i;
            }
        }
        else {
            var isUseEquals = false;
            if (array.length > 0 && Gb.HasEqualsOperator(array[0])) {
                isUseEquals = true;
            }
            for (var i = startIndex; i < endIndex; i++) {
                var obj = array[i];
                if (isUseEquals) {
                    if (obj != null && Gb.Equals(obj, value))
                        return i;
                }
                else {
                    if (obj != null && obj == value)
                        return i;
                }
            }
        }
        return lb - 1;
    };
    TSArray.Clear = function (arr, index, length, clearType) {
        if (clearType !== void 0) {
            for (var i = index; i < length; i++) {
                arr[i] = structDefault(clearType);
            }
            return;
        }
        var clearValue = null;
        if (arr.length > 0) {
            var firstValue = arr[0];
            if (typeof firstValue == 'number') {
                clearValue = 0;
            }
            else if (typeof firstValue == 'boolean') {
                clearValue = false;
            }
            else {
                clearValue = null;
            }
        }
        for (var i = index; i < length; i++) {
            arr[i] = clearValue;
        }
    };
    TSArray.Copy = function (param1, param2, param3, param4, param5) {
        if (typeof param5 == 'undefined')
            TSArray.Copy_2(param1, param2, param3);
        if (param5)
            TSArray.Copy_1(param1, param2, param3, param4, param5);
    };
    TSArray.Copy_1 = function (sourceArray, sourceIndex, destinationArray, destinationIndex, length) {
        for (var i = 0; i < length; i++) {
            destinationArray[i + destinationIndex] = sourceArray[i + sourceIndex];
        }
    };
    TSArray.Copy_2 = function (sourceArray, destinationArray, length) {
        TSArray.Copy_1(sourceArray, 0, destinationArray, 0, length);
    };
    TSArray.Reverse = function (array, index, length) {
        var i = index;
        var j = index + length - 1;
        while (i < j) {
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
            j--;
        }
    };
    TSArray.GetMedian = function (low, hi) {
        System.Diagnostics.Contracts.Contract.Requires(low <= hi);
        System.Diagnostics.Contracts.Contract.Assert(hi - low >= 0, "Length overflow!");
        return low + ((hi - low) >> 1);
    };
    TSArray.BinarySearch = function (param0, param1, param2, param3, param4) {
        if (param0 instanceof Array && typeof param1 == 'number' && typeof param2 == 'number' && typeof param3 != 'undefined' && typeof param4 == 'undefined') {
            return this.BinarySearch_overload5(param0, param1, param2, param3);
        }
        if (param0 instanceof Array && typeof param1 == 'number' && typeof param2 == 'number' && typeof param3 != 'undefined' && typeof param4 != 'undefined') {
            return this.BinarySearch_overload6(param0, param1, param2, param3, param4);
        }
        if (param0 instanceof Array && typeof param1 == 'number' && typeof param2 == 'number' && param3 instanceof Object && typeof param4 == 'undefined') {
            return this.BinarySearch_overload0(param0, param1, param2, param3);
        }
        if (param0 instanceof Array && typeof param1 == 'number' && typeof param2 == 'number' && param3 instanceof Object && typeof param4 != 'undefined') {
            return this.BinarySearch_overload2(param0, param1, param2, param3, param4);
        }
        if (param0 instanceof Array && typeof param1 != 'undefined' && typeof param2 == 'undefined' && typeof param3 == 'undefined' && typeof param4 == 'undefined') {
            return this.BinarySearch_overload3(param0, param1);
        }
        if (param0 instanceof Array && typeof param1 != 'undefined' && typeof param2 != 'undefined' && typeof param3 == 'undefined' && typeof param4 == 'undefined') {
            return this.BinarySearch_overload4(param0, param1, param2);
        }
        if (param0 instanceof Array && param1 instanceof Object && typeof param2 != 'undefined' && typeof param3 == 'undefined' && typeof param4 == 'undefined') {
            return this.BinarySearch_overload1(param0, param1, param2);
        }
        if (param0 instanceof Array && param1 instanceof Object && typeof param2 == 'undefined' && typeof param3 == 'undefined' && typeof param4 == 'undefined') {
            return this.BinarySearch_overload7(param0, param1);
        }
    };
    TSArray.BinarySearch_overload0 = function (array, index, length, value) {
        return TSArray.BinarySearch(array, index, length, value, null);
    };
    TSArray.BinarySearch_overload1 = function (array, value, comparer) {
        var lb = 0;
        return TSArray.BinarySearch(array, lb, array.length, value, comparer);
    };
    TSArray.BinarySearch_overload2 = function (array, index, length, value, comparer) {
        var lb = 0;
        if (comparer == null)
            comparer = System.Collections.Comparer.Default;
        var lo = index;
        var hi = index + length - 1;
        var objArray = array;
        while (lo <= hi) {
            var i = TSArray.GetMedian(lo, hi);
            var c = 0;
            try {
                c = comparer.Compare(objArray[i], value);
            }
            catch (e) {
                throw new System.InvalidOperationException(System.Environment.GetResourceString("InvalidOperation_IComparerFailed"), e);
            }
            if (c == 0)
                return i;
            if (c < 0) {
                lo = i + 1;
            }
            else {
                hi = i - 1;
            }
        }
        return ~lo;
    };
    TSArray.BinarySearch_overload3 = function (array, value) {
        return TSArray.BinarySearch(array, 0, array.length, value, null);
    };
    TSArray.BinarySearch_overload4 = function (array, value, comparer) {
        return TSArray.BinarySearch(array, 0, array.length, value, comparer);
    };
    TSArray.BinarySearch_overload5 = function (array, index, length, value) {
        return TSArray.BinarySearch(array, index, length, value, null);
    };
    TSArray.BinarySearch_overload6 = function (array, index, length, value, comparer) {
        throw new System.NotSupportedException("");
    };
    TSArray.BinarySearch_overload7 = function (array, value) {
        if (array == null)
            throw new System.ArgumentNullException("array");
        var lb = 0;
        return TSArray.BinarySearch(array, lb, array.length, value, null);
    };
    TSArray.LastIndexOf = function (param0, param1, param2, param3) {
        if (param0 instanceof Array && param1 instanceof Object && typeof param2 == 'number' && typeof param3 == 'number') {
            return this.LastIndexOf_overload1(param0, param1, param2, param3);
        }
        if (param0 instanceof Array && param1 instanceof Object && typeof param2 == 'number' && typeof param3 == 'undefined') {
            return this.LastIndexOf_overload2(param0, param1, param2);
        }
        if (param0 instanceof Array && param1 instanceof Object && typeof param2 == 'undefined' && typeof param3 == 'undefined') {
            return this.LastIndexOf_overload0(param0, param1);
        }
    };
    TSArray.LastIndexOf_overload0 = function (array, value) {
        if (array == null)
            throw new System.ArgumentNullException("array");
        var lb = 0;
        return TSArray.LastIndexOf(array, value, array.length - 1 + lb, array.length);
    };
    TSArray.LastIndexOf_overload1 = function (array, value, startIndex, count) {
        if (array == null)
            throw new System.ArgumentNullException("array");
        var lb = 0;
        if (array.length == 0) {
            return lb - 1;
        }
        if (startIndex < lb || startIndex >= array.length + lb)
            throw new System.ArgumentOutOfRangeException("startIndex", System.Environment.GetResourceString("ArgumentOutOfRange_Index"));
        if (count < 0)
            throw new System.ArgumentOutOfRangeException("count", System.Environment.GetResourceString("ArgumentOutOfRange_Count"));
        if (count > startIndex - lb + 1)
            throw new System.ArgumentOutOfRangeException("endIndex", System.Environment.GetResourceString("ArgumentOutOfRange_EndIndexStartIndex"));
        var endIndex = startIndex - count + 1;
        if (value == null) {
            for (var i = startIndex; i >= endIndex; i--) {
                if (array[i] == null)
                    return i;
            }
        }
        else {
            var isUseEquals = false;
            if (array.length > 0 && Gb.HasEqualsOperator(array[0])) {
                isUseEquals = true;
            }
            for (var i = startIndex; i >= endIndex; i--) {
                var obj = array[i];
                if (isUseEquals) {
                    if (obj != null && Gb.Equals(obj, value))
                        return i;
                }
                else {
                    if (obj != null && obj == value)
                        return i;
                }
            }
        }
        return lb - 1;
    };
    TSArray.LastIndexOf_overload2 = function (array, value, startIndex) {
        if (array == null)
            throw new System.ArgumentNullException("array");
        var lb = 0;
        return TSArray.LastIndexOf(array, value, startIndex, startIndex + 1 - lb);
    };
    TSArray.Sort = function (param0, param1, param2, param3, param4) {
        if (param0 instanceof Array && typeof param1 == 'number' && typeof param2 == 'number' && typeof param3 == 'undefined' && typeof param4 == 'undefined') {
            return this.Sort_overload0(param0, param1, param2);
        }
        if (param0 instanceof Array && (param1 instanceof Array || param1 === null) && typeof param2 === 'number' && typeof param3 === 'number' && typeof param4 === 'undefined') {
            return this.Sort_overload1(param0, param1, param2, param3);
        }
        if (param0 instanceof Array && (param1 instanceof Array || param1 === null) && typeof param2 === 'number' && typeof param3 === 'number' && typeof param4 !== 'undefined') {
            return this.Sort_overload5(param0, param1, param2, param3, param4);
        }
        if (param0 instanceof Array && typeof param1 == 'number' && typeof param2 == 'number' && typeof param3 != 'undefined' && typeof param4 == 'undefined') {
            return this.Sort_overload4(param0, param1, param2, param3);
        }
        if (param0 instanceof Array && (param1 instanceof Array || param1 === null) && typeof param2 === 'undefined' && typeof param3 === 'undefined' && typeof param4 === 'undefined') {
            return this.Sort_overload6(param0, param1);
        }
        if (param0 instanceof Array && (param1 instanceof Array || param1 === null) && typeof param2 !== 'undefined' && typeof param3 === 'undefined' && typeof param4 === 'undefined') {
            return this.Sort_overload3(param0, param1, param2);
        }
        if (param0 instanceof Array && typeof param1 !== 'undefined' && typeof param2 == 'undefined' && typeof param3 === 'undefined' && typeof param4 === 'undefined') {
            return this.Sort_overload2(param0, param1);
        }
    };
    TSArray.Sort_overload0 = function (array, index, length) {
        TSArray.Sort_overload5(array, null, index, length, null);
    };
    TSArray.Sort_overload1 = function (keys, items, index, length) {
        TSArray.Sort_overload5(keys, items, index, length, null);
    };
    TSArray.Sort_overload2 = function (array, comparer) {
        if (array == null)
            throw new System.ArgumentNullException("array");
        TSArray.Sort_overload5(array, null, 0, array.length, comparer);
    };
    TSArray.Sort_overload3 = function (keys, items, comparer) {
        if (keys == null)
            throw new System.ArgumentNullException("keys");
        TSArray.Sort_overload5(keys, items, 0, keys.length, comparer);
    };
    TSArray.Sort_overload4 = function (array, index, length, comparer) {
        TSArray.Sort_overload5(array, null, index, length, comparer);
    };
    TSArray.Sort_overload5 = function (keys, items, index, length, comparer) {
        if (length > 1) {
            var sorter = new TSArray.SorterObjectArray(keys, items, comparer);
            sorter.Sort(index, length);
        }
    };
    TSArray.Sort_overload6 = function (keys, items) {
        if (keys == null)
            throw new System.ArgumentNullException("keys");
        TSArray.Sort(keys, items, 0, keys.length, null);
    };
    return TSArray;
})();
var TSArray;
(function (TSArray) {
    var SorterObjectArray = (function () {
        function SorterObjectArray(keys, items, comparer) {
            this.keys = null;
            this.items = null;
            this.comparer = null;
            if (comparer == null)
                comparer = System.Collections.Comparer.Default;
            this.keys = keys;
            this.items = items;
            this.comparer = comparer;
        }
        SorterObjectArray.prototype.SwapIfGreaterWithItems = function (a, b) {
            if (a != b) {
                if (this.comparer.Compare(this.keys[a], this.keys[b]) > 0) {
                    var temp = this.keys[a];
                    this.keys[a] = this.keys[b];
                    this.keys[b] = temp;
                    if (this.items != null) {
                        var item = this.items[a];
                        this.items[a] = this.items[b];
                        this.items[b] = item;
                    }
                }
            }
        };
        SorterObjectArray.prototype.Swap = function (i, j) {
            var t = this.keys[i];
            this.keys[i] = this.keys[j];
            this.keys[j] = t;
            if (this.items != null) {
                var item = this.items[i];
                this.items[i] = this.items[j];
                this.items[j] = item;
            }
        };
        SorterObjectArray.prototype.Sort = function (left, length) {
            this.IntrospectiveSort(left, length);
        };
        SorterObjectArray.prototype.DepthLimitedQuickSort = function (left, right, depthLimit) {
            do {
                if (depthLimit == 0) {
                    try {
                        this.Heapsort(left, right);
                        return;
                    }
                    catch (__ex__) {
                        if (__ex__ instanceof System.IndexOutOfRangeException) {
                            throw new System.ArgumentException(System.Environment.GetResourceString("Arg_BogusIComparer", this.comparer));
                        }
                        var e = __ex__;
                        if (e instanceof System.Exception) {
                            throw new System.InvalidOperationException(System.Environment.GetResourceString("InvalidOperation_IComparerFailed"), e);
                        }
                    }
                }
                var i = left;
                var j = right;
                var middle = TSArray.GetMedian(i, j);
                try {
                    this.SwapIfGreaterWithItems(i, middle);
                    this.SwapIfGreaterWithItems(i, j);
                    this.SwapIfGreaterWithItems(middle, j);
                }
                catch (e) {
                    throw new System.InvalidOperationException(System.Environment.GetResourceString("InvalidOperation_IComparerFailed"), e);
                }
                var x = this.keys[middle];
                do {
                    try {
                        while (this.comparer.Compare(this.keys[i], x) < 0)
                            i++;
                        while (this.comparer.Compare(x, this.keys[j]) < 0)
                            j--;
                    }
                    catch (__ex__) {
                        if (__ex__ instanceof System.IndexOutOfRangeException) {
                            throw new System.ArgumentException(System.Environment.GetResourceString("Arg_BogusIComparer", this.comparer));
                        }
                        var e = __ex__;
                        if (e instanceof System.Exception) {
                            throw new System.InvalidOperationException(System.Environment.GetResourceString("InvalidOperation_IComparerFailed"), e);
                        }
                    }
                    if (i > j)
                        break;
                    if (i < j) {
                        var key = this.keys[i];
                        this.keys[i] = this.keys[j];
                        this.keys[j] = key;
                        if (this.items != null) {
                            var item = this.items[i];
                            this.items[i] = this.items[j];
                            this.items[j] = item;
                        }
                    }
                    i++;
                    j--;
                } while (i <= j);
                depthLimit--;
                if (j - left <= right - i) {
                    if (left < j)
                        this.DepthLimitedQuickSort(left, j, depthLimit);
                    left = i;
                }
                else {
                    if (i < right)
                        this.DepthLimitedQuickSort(i, right, depthLimit);
                    right = j;
                }
            } while (left < right);
        };
        SorterObjectArray.prototype.IntrospectiveSort = function (left, length) {
            if (length < 2)
                return;
            try {
                this.IntroSort(left, length + left - 1, 2 * IntrospectiveSortUtilities.FloorLog2(this.keys.length));
            }
            catch (__ex__) {
                if (__ex__ instanceof System.IndexOutOfRangeException) {
                    IntrospectiveSortUtilities.ThrowOrIgnoreBadComparer(this.comparer);
                }
                var e = __ex__;
                if (e instanceof System.Exception) {
                    throw new System.InvalidOperationException(System.Environment.GetResourceString("InvalidOperation_IComparerFailed"), e);
                }
            }
        };
        SorterObjectArray.prototype.IntroSort = function (lo, hi, depthLimit) {
            while (hi > lo) {
                var partitionSize = hi - lo + 1;
                if (partitionSize <= IntrospectiveSortUtilities.IntrosortSizeThreshold) {
                    if (partitionSize == 1) {
                        return;
                    }
                    if (partitionSize == 2) {
                        this.SwapIfGreaterWithItems(lo, hi);
                        return;
                    }
                    if (partitionSize == 3) {
                        this.SwapIfGreaterWithItems(lo, hi - 1);
                        this.SwapIfGreaterWithItems(lo, hi);
                        this.SwapIfGreaterWithItems(hi - 1, hi);
                        return;
                    }
                    this.InsertionSort(lo, hi);
                    return;
                }
                if (depthLimit == 0) {
                    this.Heapsort(lo, hi);
                    return;
                }
                depthLimit--;
                var p = this.PickPivotAndPartition(lo, hi);
                this.IntroSort(p + 1, hi, depthLimit);
                hi = p - 1;
            }
        };
        SorterObjectArray.prototype.PickPivotAndPartition = function (lo, hi) {
            var mid = lo + ((hi - lo) / 2 | 0);
            this.SwapIfGreaterWithItems(lo, mid);
            this.SwapIfGreaterWithItems(lo, hi);
            this.SwapIfGreaterWithItems(mid, hi);
            var pivot = this.keys[mid];
            this.Swap(mid, hi - 1);
            var left = lo, right = hi - 1;
            while (left < right) {
                while (this.comparer.Compare(this.keys[++left], pivot) < 0)
                    ;
                while (this.comparer.Compare(pivot, this.keys[--right]) < 0)
                    ;
                if (left >= right)
                    break;
                this.Swap(left, right);
            }
            this.Swap(left, (hi - 1));
            return left;
        };
        SorterObjectArray.prototype.Heapsort = function (lo, hi) {
            var n = hi - lo + 1;
            for (var i = (n / 2 | 0); i >= 1; i = i - 1) {
                this.DownHeap(i, n, lo);
            }
            for (var i = n; i > 1; i = i - 1) {
                this.Swap(lo, lo + i - 1);
                this.DownHeap(1, i - 1, lo);
            }
        };
        SorterObjectArray.prototype.DownHeap = function (i, n, lo) {
            var d = this.keys[lo + i - 1];
            var dt = (this.items != null) ? this.items[lo + i - 1] : null;
            var child = 0;
            while (i <= (n / 2 | 0)) {
                child = 2 * i;
                if (child < n && this.comparer.Compare(this.keys[lo + child - 1], this.keys[lo + child]) < 0) {
                    child++;
                }
                if (!(this.comparer.Compare(d, this.keys[lo + child - 1]) < 0))
                    break;
                this.keys[lo + i - 1] = this.keys[lo + child - 1];
                if (this.items != null)
                    this.items[lo + i - 1] = this.items[lo + child - 1];
                i = child;
            }
            this.keys[lo + i - 1] = d;
            if (this.items != null)
                this.items[lo + i - 1] = dt;
        };
        SorterObjectArray.prototype.InsertionSort = function (lo, hi) {
            var i = 0, j = 0;
            var t = null, ti = null;
            for (; i < hi; i++) {
                j = i;
                t = this.keys[i + 1];
                ti = (this.items != null) ? this.items[i + 1] : null;
                while (j >= lo && this.comparer.Compare(t, this.keys[j]) < 0) {
                    this.keys[j + 1] = this.keys[j];
                    if (this.items != null)
                        this.items[j + 1] = this.items[j];
                    j--;
                }
                this.keys[j + 1] = t;
                if (this.items != null)
                    this.items[j + 1] = ti;
            }
        };
        return SorterObjectArray;
    })();
    TSArray.SorterObjectArray = SorterObjectArray;
    var IntrospectiveSortUtilities = (function () {
        function IntrospectiveSortUtilities() {
        }
        IntrospectiveSortUtilities.FloorLog2 = function (n) {
            var result = 0;
            while (n >= 1) {
                result++;
                n = (n / 2 | 0);
            }
            return result;
        };
        IntrospectiveSortUtilities.ThrowOrIgnoreBadComparer = function (comparer) {
            throw new System.ArgumentException(System.Environment.GetResourceString("Arg_BogusIComparer", comparer));
        };
        IntrospectiveSortUtilities.IntrosortSizeThreshold = 16;
        IntrospectiveSortUtilities.QuickSortDepthThreshold = 32;
        return IntrospectiveSortUtilities;
    })();
    TSArray.IntrospectiveSortUtilities = IntrospectiveSortUtilities;
    var FunctorComparer = (function () {
        function FunctorComparer(comparison) {
            this.comparison = null;
            this.comparison = comparison;
        }
        FunctorComparer.prototype.Compare = function (x, y) {
            return this.comparison(x, y);
        };
        return FunctorComparer;
    })();
    TSArray.FunctorComparer = FunctorComparer;
})(TSArray || (TSArray = {}));
//# sourceMappingURL=Net.Bcl.js.map