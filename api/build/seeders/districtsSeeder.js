"use strict";

/** @type {import('sequelize-cli').Migration} */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return queryInterface.bulkInsert("Districts", [{
              name: 'Chưa có thông tin',
              citiesId: '1'
            }, {
              name: 'Quận Cẩm Lệ',
              citiesId: '2'
            }, {
              name: 'Quận Hải Châu',
              citiesId: '2'
            }, {
              name: 'Quận Liên Chiểu',
              citiesId: '2'
            }, {
              name: 'Quận Ngũ Hành Sơn',
              citiesId: '2'
            }, {
              name: 'Quận Sơn Trà',
              citiesId: '2'
            }, {
              name: 'Quận Thanh Khê',
              citiesId: '2'
            }, {
              name: 'Huyện Hòa Vang',
              citiesId: '2'
            }, {
              name: 'Huyện Hoàng Sa',
              citiesId: '2'
            }, {
              name: 'Quận Ba Đình',
              citiesId: '3'
            }, {
              name: 'Quận Bắc Từ Liêm',
              citiesId: '3'
            }, {
              name: 'Quận Cầu Giấy',
              citiesId: '3'
            }, {
              name: 'Quận Đống Đa',
              citiesId: '3'
            }, {
              name: 'Quận Hà Đông',
              citiesId: '3'
            }, {
              name: 'Quận Hai Bà Trưng',
              citiesId: '3'
            }, {
              name: 'Quận Hoàn Kiếm',
              citiesId: '3'
            }, {
              name: 'Quận Hoàng Mai',
              citiesId: '3'
            }, {
              name: 'Quận Long Biên',
              citiesId: '3'
            }, {
              name: 'Quận Nam Từ Liêm',
              citiesId: '3'
            }, {
              name: 'Quận Tây Hồ',
              citiesId: '3'
            }, {
              name: 'Quận Thanh Xuân',
              citiesId: '3'
            }, {
              name: 'Thị xã Sơn Tây',
              citiesId: '3'
            }, {
              name: 'Huyện Ba Vì',
              citiesId: '3'
            }, {
              name: 'Huyện Chương Mỹ',
              citiesId: '3'
            }, {
              name: 'Huyện Đan Phượng',
              citiesId: '3'
            }, {
              name: 'Huyện Đông Anh',
              citiesId: '3'
            }, {
              name: 'Huyện Gia Lâm',
              citiesId: '3'
            }, {
              name: 'Huyện Hoài Đức',
              citiesId: '3'
            }, {
              name: 'Huyện Mê Linh',
              citiesId: '3'
            }, {
              name: 'Huyện Mỹ Đức',
              citiesId: '3'
            }, {
              name: 'Huyện Phú Xuyên',
              citiesId: '3'
            }, {
              name: 'Huyện Phúc Thọ',
              citiesId: '3'
            }, {
              name: 'Huyện Quốc Oai',
              citiesId: '3'
            }, {
              name: 'Huyện Sóc Sơn',
              citiesId: '3'
            }, {
              name: 'Huyện Thạch Thất',
              citiesId: '3'
            }, {
              name: 'Huyện Thanh Oai',
              citiesId: '3'
            }, {
              name: 'Huyện Thanh Trì',
              citiesId: '3'
            }, {
              name: 'Huyện Thường Tín',
              citiesId: '3'
            }, {
              name: 'Huyện Ứng Hòa',
              citiesId: '3'
            }, {
              name: 'Thành phố Thủ Đức',
              citiesId: '4'
            }, {
              name: 'Quận 1',
              citiesId: '4'
            }, {
              name: 'Quận 3',
              citiesId: '4'
            }, {
              name: 'Quận 4',
              citiesId: '4'
            }, {
              name: 'Quận 5',
              citiesId: '4'
            }, {
              name: 'Quận 6',
              citiesId: '4'
            }, {
              name: 'Quận 7',
              citiesId: '4'
            }, {
              name: 'Quận 8',
              citiesId: '4'
            }, {
              name: 'Quận 10',
              citiesId: '4'
            }, {
              name: 'Quận 11',
              citiesId: '4'
            }, {
              name: 'Quận 12',
              citiesId: '4'
            }, {
              name: 'Quận Bình Tân',
              citiesId: '4'
            }, {
              name: 'Quận Bình Thạnh',
              citiesId: '4'
            }, {
              name: 'Quận Gò Vấp',
              citiesId: '4'
            }, {
              name: 'Quận Phú Nhuận',
              citiesId: '4'
            }, {
              name: 'Quận Tân Bình',
              citiesId: '4'
            }, {
              name: 'Quận Tân Phú',
              citiesId: '4'
            }, {
              name: 'Huyện Bình Chánh',
              citiesId: '4'
            }, {
              name: 'Huyện Cần Giờ',
              citiesId: '4'
            }, {
              name: 'Huyện Củ Chi',
              citiesId: '4'
            }, {
              name: 'Huyện Hóc Môn',
              citiesId: '4'
            }, {
              name: 'Huyện Nhà Bè',
              citiesId: '4'
            }, {
              name: 'Quận Bình Thủy',
              citiesId: '5'
            }, {
              name: 'Quận Cái Răng',
              citiesId: '5'
            }, {
              name: 'Quận Ninh Kiều',
              citiesId: '5'
            }, {
              name: 'Quận Ô Môn',
              citiesId: '5'
            }, {
              name: 'Quận Thốt Nốt',
              citiesId: '5'
            }, {
              name: 'Huyện Cờ Đỏ',
              citiesId: '5'
            }, {
              name: 'Huyện Phong Điền',
              citiesId: '5'
            }, {
              name: 'Huyện Thới Lai',
              citiesId: '5'
            }, {
              name: 'Huyện Vĩnh Thạnh',
              citiesId: '5'
            }, {
              name: 'Quận Đồ Sơn',
              citiesId: '6'
            }, {
              name: 'Quận Dương Kinh',
              citiesId: '6'
            }, {
              name: 'Quận Hải An',
              citiesId: '6'
            }, {
              name: 'Quận Hồng Bàng',
              citiesId: '6'
            }, {
              name: 'Quận Kiến An',
              citiesId: '6'
            }, {
              name: 'Quận Lê Chân',
              citiesId: '6'
            }, {
              name: 'Quận Ngô Quyền',
              citiesId: '6'
            }, {
              name: 'Huyện An Dương',
              citiesId: '6'
            }, {
              name: 'Huyện An Lão',
              citiesId: '6'
            }, {
              name: 'Huyện Bạch Long Vĩ',
              citiesId: '6'
            }, {
              name: 'Huyện Cát Hải',
              citiesId: '6'
            }, {
              name: 'Huyện Kiến Thụy',
              citiesId: '6'
            }, {
              name: 'Huyện Thủy Nguyên',
              citiesId: '6'
            }, {
              name: 'Huyện Tiên Lãng',
              citiesId: '6'
            }, {
              name: 'Huyện Vĩnh Bảo',
              citiesId: '6'
            }, {
              name: 'Thành phố Long Xuyên (tỉnh lỵ)',
              citiesId: '7'
            }, {
              name: 'Thành phố Châu Đốc',
              citiesId: '7'
            }, {
              name: 'Thị xã Tân Châu',
              citiesId: '7'
            }, {
              name: 'Huyện An Phú',
              citiesId: '7'
            }, {
              name: 'Huyện Châu Phú',
              citiesId: '7'
            }, {
              name: 'Huyện Châu Thành',
              citiesId: '7'
            }, {
              name: 'Huyện Chợ Mới',
              citiesId: '7'
            }, {
              name: 'Huyện Phú Tân',
              citiesId: '7'
            }, {
              name: 'Huyện Thoại Sơn',
              citiesId: '7'
            }, {
              name: 'Huyện Tịnh Biên',
              citiesId: '7'
            }, {
              name: 'Huyện Tri Tôn',
              citiesId: '7'
            }, {
              name: 'Thành phố Bà Rịa (tỉnh lỵ)',
              citiesId: '8'
            }, {
              name: 'Thành phố Vũng Tàu',
              citiesId: '8'
            }, {
              name: 'Thị xã Phú Mỹ',
              citiesId: '8'
            }, {
              name: 'Huyện Châu Đức',
              citiesId: '8'
            }, {
              name: 'Huyện Côn Đảo',
              citiesId: '8'
            }, {
              name: 'Huyện Đất Đỏ',
              citiesId: '8'
            }, {
              name: 'Huyện Long Điền',
              citiesId: '8'
            }, {
              name: 'Huyện Xuyên Mộc',
              citiesId: '8'
            }, {
              name: 'Thành phố Bắc Giang (tỉnh lỵ)',
              citiesId: '9'
            }, {
              name: 'Huyện Hiệp Hòa',
              citiesId: '9'
            }, {
              name: 'Huyện Lạng Giang',
              citiesId: '9'
            }, {
              name: 'Huyện Lục Nam',
              citiesId: '9'
            }, {
              name: 'Huyện Lục Ngạn',
              citiesId: '9'
            }, {
              name: 'Huyện Sơn Động',
              citiesId: '9'
            }, {
              name: 'Huyện Tân Yên',
              citiesId: '9'
            }, {
              name: 'Huyện Việt Yên',
              citiesId: '9'
            }, {
              name: 'Huyện Yên Dũng',
              citiesId: '9'
            }, {
              name: 'Huyện Yên Thế',
              citiesId: '9'
            }, {
              name: 'Thành phố Bắc Kạn (tỉnh lỵ)',
              citiesId: '10'
            }, {
              name: 'Huyện Ba Bể',
              citiesId: '10'
            }, {
              name: 'Huyện Bạch Thông',
              citiesId: '10'
            }, {
              name: 'Huyện Chợ Đồn',
              citiesId: '10'
            }, {
              name: 'Huyện Chợ Mới',
              citiesId: '10'
            }, {
              name: 'Huyện Na Rì',
              citiesId: '10'
            }, {
              name: 'Huyện Ngân Sơn',
              citiesId: '10'
            }, {
              name: 'Huyện Pác Nặm',
              citiesId: '10'
            }, {
              name: 'Thành phố Bạc Liêu (tỉnh lỵ)',
              citiesId: '11'
            }, {
              name: 'Thị xã Giá Rai',
              citiesId: '11'
            }, {
              name: 'Huyện Đông Hải',
              citiesId: '11'
            }, {
              name: 'Huyện Hòa Bình',
              citiesId: '11'
            }, {
              name: 'Huyện Hồng Dân',
              citiesId: '11'
            }, {
              name: 'Huyện Phước Long',
              citiesId: '11'
            }, {
              name: 'Huyện Vĩnh Lợi',
              citiesId: '11'
            }, {
              name: 'Thành phố Bắc Ninh (tỉnh lỵ)',
              citiesId: '12'
            }, {
              name: 'Thị xã Từ Sơn',
              citiesId: '12'
            }, {
              name: 'Huyện Gia Bình',
              citiesId: '12'
            }, {
              name: 'Huyện Lương Tài',
              citiesId: '12'
            }, {
              name: 'Huyện Quế Võ',
              citiesId: '12'
            }, {
              name: 'Huyện Thuận Thành',
              citiesId: '12'
            }, {
              name: 'Huyện Tiên Du',
              citiesId: '12'
            }, {
              name: 'Huyện Yên Phong',
              citiesId: '12'
            }, {
              name: 'Thành phố Bến Tre (tỉnh lỵ)',
              citiesId: '13'
            }, {
              name: 'Huyện Ba Tri',
              citiesId: '13'
            }, {
              name: 'Huyện Bình Đại',
              citiesId: '13'
            }, {
              name: 'Huyện Châu Thành',
              citiesId: '13'
            }, {
              name: 'Huyện Chợ Lách',
              citiesId: '13'
            }, {
              name: 'Huyện Giồng Trôm',
              citiesId: '13'
            }, {
              name: 'Huyện Mỏ Cày Bắc',
              citiesId: '13'
            }, {
              name: 'Huyện Mỏ Cày Nam',
              citiesId: '13'
            }, {
              name: 'Huyện Thạnh Phú',
              citiesId: '13'
            }, {
              name: 'Thành phố Quy Nhơn (tỉnh lỵ)',
              citiesId: '14'
            }, {
              name: 'Thị xã An Nhơn',
              citiesId: '14'
            }, {
              name: 'Thị xã Hoài Nhơn',
              citiesId: '14'
            }, {
              name: 'Huyện An Lão',
              citiesId: '14'
            }, {
              name: 'Huyện Hoài Ân',
              citiesId: '14'
            }, {
              name: 'Huyện Phù Cát',
              citiesId: '14'
            }, {
              name: 'Huyện Phù Mỹ',
              citiesId: '14'
            }, {
              name: 'Huyện Tây Sơn',
              citiesId: '14'
            }, {
              name: 'Huyện Tuy Phước',
              citiesId: '14'
            }, {
              name: 'Huyện Vân Canh',
              citiesId: '14'
            }, {
              name: 'Huyện Vĩnh Thạnh',
              citiesId: '14'
            }, {
              name: 'Thành phố Thủ Dầu Một (tỉnh lỵ)',
              citiesId: '15'
            }, {
              name: 'Thành phố Dĩ An',
              citiesId: '15'
            }, {
              name: 'Thành phố Thuận An',
              citiesId: '15'
            }, {
              name: 'Thị xã Bến Cát',
              citiesId: '15'
            }, {
              name: 'Thị xã Tân Uyên',
              citiesId: '15'
            }, {
              name: 'Huyện Bắc Tân Uyên',
              citiesId: '15'
            }, {
              name: 'Huyện Bàu Bàng',
              citiesId: '15'
            }, {
              name: 'Huyện Dầu Tiếng',
              citiesId: '15'
            }, {
              name: 'Huyện Phú Giáo',
              citiesId: '15'
            }, {
              name: 'Thành phố Đồng Xoài (tỉnh lỵ)',
              citiesId: '16'
            }, {
              name: 'Thị xã Bình Long',
              citiesId: '16'
            }, {
              name: 'Thị xã Phước Long',
              citiesId: '16'
            }, {
              name: 'Huyện Bù Đăng',
              citiesId: '16'
            }, {
              name: 'Huyện Bù Đốp',
              citiesId: '16'
            }, {
              name: 'Huyện Bù Gia Mập',
              citiesId: '16'
            }, {
              name: 'Huyện Chơn Thành',
              citiesId: '16'
            }, {
              name: 'Huyện Đồng Phú',
              citiesId: '16'
            }, {
              name: 'Huyện Hớn Quản',
              citiesId: '16'
            }, {
              name: 'Huyện Lộc Ninh',
              citiesId: '16'
            }, {
              name: 'Huyện Phú Riềng',
              citiesId: '16'
            }, {
              name: 'Thành phố Phan Thiết (tỉnh lỵ)',
              citiesId: '17'
            }, {
              name: 'Thị xã La Gi',
              citiesId: '17'
            }, {
              name: 'Huyện Bắc Bình',
              citiesId: '17'
            }, {
              name: 'Huyện Đức Linh',
              citiesId: '17'
            }, {
              name: 'Huyện Hàm Tân',
              citiesId: '17'
            }, {
              name: 'Huyện Hàm Thuận Bắc',
              citiesId: '17'
            }, {
              name: 'Huyện Hàm Thuận Nam',
              citiesId: '17'
            }, {
              name: 'Huyện Phú Quý',
              citiesId: '17'
            }, {
              name: 'Huyện Tánh Linh',
              citiesId: '17'
            }, {
              name: 'Huyện Tuy Phong',
              citiesId: '17'
            }, {
              name: 'Thành phố Cà Mau (tỉnh lỵ)',
              citiesId: '18'
            }, {
              name: 'Huyện Cái Nước',
              citiesId: '18'
            }, {
              name: 'Huyện Đầm Dơi',
              citiesId: '18'
            }, {
              name: 'Huyện Năm Căn',
              citiesId: '18'
            }, {
              name: 'Huyện Ngọc Hiển',
              citiesId: '18'
            }, {
              name: 'Huyện Phú Tân',
              citiesId: '18'
            }, {
              name: 'Huyện Thới Bình',
              citiesId: '18'
            }, {
              name: 'Huyện Trần Văn Thời',
              citiesId: '18'
            }, {
              name: 'Huyện U Minh',
              citiesId: '18'
            }, {
              name: 'Thành phố Cao Bằng (tỉnh lỵ)',
              citiesId: '19'
            }, {
              name: 'Huyện Bảo Lạc',
              citiesId: '19'
            }, {
              name: 'Huyện Bảo Lâm',
              citiesId: '19'
            }, {
              name: 'Huyện Hạ Lang',
              citiesId: '19'
            }, {
              name: 'Huyện Hà Quảng',
              citiesId: '19'
            }, {
              name: 'Huyện Hòa An',
              citiesId: '19'
            }, {
              name: 'Huyện Nguyên Bình',
              citiesId: '19'
            }, {
              name: 'Huyện Quảng Hòa',
              citiesId: '19'
            }, {
              name: 'Huyện Thạch An',
              citiesId: '19'
            }, {
              name: 'Huyện Trùng Khánh',
              citiesId: '19'
            }, {
              name: 'Thành phố Buôn Ma Thuột (tỉnh lỵ)',
              citiesId: '20'
            }, {
              name: 'Thị xã Buôn Hồ',
              citiesId: '20'
            }, {
              name: 'Huyện Buôn Đôn',
              citiesId: '20'
            }, {
              name: 'Huyện Cư Kuin',
              citiesId: '20'
            }, {
              name: 'Huyện Cư Mxxgar',
              citiesId: '20'
            }, {
              name: 'Huyện Ea Hxxleo',
              citiesId: '20'
            }, {
              name: 'Huyện Ea Kar',
              citiesId: '20'
            }, {
              name: 'Huyện Ea Súp',
              citiesId: '20'
            }, {
              name: 'Huyện Krông Ana',
              citiesId: '20'
            }, {
              name: 'Huyện Krông Bông',
              citiesId: '20'
            }, {
              name: 'Huyện Krông Búk',
              citiesId: '20'
            }, {
              name: 'Huyện Krông Năng',
              citiesId: '20'
            }, {
              name: 'Huyện Krông Pắk',
              citiesId: '20'
            }, {
              name: 'Huyện Lắk',
              citiesId: '20'
            }, {
              name: 'Huyện MxxDrắk',
              citiesId: '20'
            }, {
              name: 'Thành phố Gia Nghĩa (tỉnh lỵ)',
              citiesId: '21'
            }, {
              name: 'Huyện Cư Jút',
              citiesId: '21'
            }, {
              name: 'Huyện Đắk Glong',
              citiesId: '21'
            }, {
              name: 'Huyện Đắk Mil',
              citiesId: '21'
            }, {
              name: 'Huyện Đắk Rxxlấp',
              citiesId: '21'
            }, {
              name: 'Huyện Đắk Song',
              citiesId: '21'
            }, {
              name: 'Huyện Krông Nô',
              citiesId: '21'
            }, {
              name: 'Huyện Tuy Đức',
              citiesId: '21'
            }, {
              name: 'Thành phố Điện Biên Phủ (tỉnh lỵ)',
              citiesId: '22'
            }, {
              name: 'Thị xã Mường Lay',
              citiesId: '22'
            }, {
              name: 'Huyện Điện Biên',
              citiesId: '22'
            }, {
              name: 'Huyện Điện Biên Đông',
              citiesId: '22'
            }, {
              name: 'Huyện Mường Ảng',
              citiesId: '22'
            }, {
              name: 'Huyện Mường Chà',
              citiesId: '22'
            }, {
              name: 'Huyện Mường Nhé',
              citiesId: '22'
            }, {
              name: 'Huyện Nậm Pồ',
              citiesId: '22'
            }, {
              name: 'Huyện Tủa Chùa',
              citiesId: '22'
            }, {
              name: 'Huyện Tuần Giáo',
              citiesId: '22'
            }, {
              name: 'Thành phố Biên Hòa (tỉnh lỵ)',
              citiesId: '23'
            }, {
              name: 'Thành phố Long Khánh',
              citiesId: '23'
            }, {
              name: 'Huyện Cẩm Mỹ',
              citiesId: '23'
            }, {
              name: 'Huyện Định Quán',
              citiesId: '23'
            }, {
              name: 'Huyện Long Thành',
              citiesId: '23'
            }, {
              name: 'Huyện Nhơn Trạch',
              citiesId: '23'
            }, {
              name: 'Huyện Tân Phú',
              citiesId: '23'
            }, {
              name: 'Huyện Thống Nhất',
              citiesId: '23'
            }, {
              name: 'Huyện Trảng Bom',
              citiesId: '23'
            }, {
              name: 'Huyện Vĩnh Cửu',
              citiesId: '23'
            }, {
              name: 'Huyện Xuân Lộc',
              citiesId: '23'
            }, {
              name: 'Thành phố Cao Lãnh (tỉnh lỵ)',
              citiesId: '24'
            }, {
              name: 'Thành phố Hồng Ngự',
              citiesId: '24'
            }, {
              name: 'Thành phố Sa Đéc',
              citiesId: '24'
            }, {
              name: 'Huyện Cao Lãnh',
              citiesId: '24'
            }, {
              name: 'Huyện Châu Thành',
              citiesId: '24'
            }, {
              name: 'Huyện Hồng Ngự',
              citiesId: '24'
            }, {
              name: 'Huyện Lai Vung',
              citiesId: '24'
            }, {
              name: 'Huyện Lấp Vò',
              citiesId: '24'
            }, {
              name: 'Huyện Tam Nông',
              citiesId: '24'
            }, {
              name: 'Huyện Tân Hồng',
              citiesId: '24'
            }, {
              name: 'Huyện Thanh Bình',
              citiesId: '24'
            }, {
              name: 'Huyện Tháp Mười',
              citiesId: '24'
            }, {
              name: 'Thành phố Pleiku (tỉnh lỵ)',
              citiesId: '25'
            }, {
              name: 'Thị xã An Khê',
              citiesId: '25'
            }, {
              name: 'Thị xã Ayun Pa',
              citiesId: '25'
            }, {
              name: 'Huyện Chư Păh',
              citiesId: '25'
            }, {
              name: 'Huyện Chư Prông',
              citiesId: '25'
            }, {
              name: 'Huyện Chư Pưh',
              citiesId: '25'
            }, {
              name: 'Huyện Chư Sê',
              citiesId: '25'
            }, {
              name: 'Huyện Đak Đoa',
              citiesId: '25'
            }, {
              name: 'Huyện Đak Pơ',
              citiesId: '25'
            }, {
              name: 'Huyện Đức Cơ',
              citiesId: '25'
            }, {
              name: 'Huyện Ia Grai',
              citiesId: '25'
            }, {
              name: 'Huyện Ia Pa',
              citiesId: '25'
            }, {
              name: 'Huyện Kbang',
              citiesId: '25'
            }, {
              name: 'Huyện Kông Chro',
              citiesId: '25'
            }, {
              name: 'Huyện Krông Pa',
              citiesId: '25'
            }, {
              name: 'Huyện Mang Yang',
              citiesId: '25'
            }, {
              name: 'Huyện Phú Thiện',
              citiesId: '25'
            }, {
              name: 'Thành phố Hà Giang (tỉnh lỵ)',
              citiesId: '26'
            }, {
              name: 'Huyện Bắc Mê',
              citiesId: '26'
            }, {
              name: 'Huyện Bắc Quang',
              citiesId: '26'
            }, {
              name: 'Huyện Đồng Văn',
              citiesId: '26'
            }, {
              name: 'Huyện Hoàng Su Phì',
              citiesId: '26'
            }, {
              name: 'Huyện Mèo Vạc',
              citiesId: '26'
            }, {
              name: 'Huyện Quản Bạ',
              citiesId: '26'
            }, {
              name: 'Huyện Quang Bình',
              citiesId: '26'
            }, {
              name: 'Huyện Vị Xuyên',
              citiesId: '26'
            }, {
              name: 'Huyện Xín Mần',
              citiesId: '26'
            }, {
              name: 'Huyện Yên Minh',
              citiesId: '26'
            }, {
              name: 'Thành phố Phủ Lý (tỉnh lỵ)',
              citiesId: '27'
            }, {
              name: 'Thị xã Duy Tiên',
              citiesId: '27'
            }, {
              name: 'Huyện Bình Lục',
              citiesId: '27'
            }, {
              name: 'Huyện Kim Bảng',
              citiesId: '27'
            }, {
              name: 'Huyện Lý Nhân',
              citiesId: '27'
            }, {
              name: 'Huyện Thanh Liêm',
              citiesId: '27'
            }, {
              name: 'Thành phố Hà Tĩnh (tỉnh lỵ)',
              citiesId: '28'
            }, {
              name: 'Thị xã Hồng Lĩnh',
              citiesId: '28'
            }, {
              name: 'Thị xã Kỳ Anh',
              citiesId: '28'
            }, {
              name: 'Huyện Cẩm Xuyên',
              citiesId: '28'
            }, {
              name: 'Huyện Can Lộc',
              citiesId: '28'
            }, {
              name: 'Huyện Đức Thọ',
              citiesId: '28'
            }, {
              name: 'Huyện Hương Khê',
              citiesId: '28'
            }, {
              name: 'Huyện Hương Sơn',
              citiesId: '28'
            }, {
              name: 'Huyện Kỳ Anh',
              citiesId: '28'
            }, {
              name: 'Huyện Lộc Hà',
              citiesId: '28'
            }, {
              name: 'Huyện Nghi Xuân',
              citiesId: '28'
            }, {
              name: 'Huyện Thạch Hà',
              citiesId: '28'
            }, {
              name: 'Huyện Vũ Quang',
              citiesId: '28'
            }, {
              name: 'Thành phố Hải Dương (tỉnh lỵ)',
              citiesId: '29'
            }, {
              name: 'Thành phố Chí Linh',
              citiesId: '29'
            }, {
              name: 'Thị xã Kinh Môn',
              citiesId: '29'
            }, {
              name: 'Huyện Bình Giang',
              citiesId: '29'
            }, {
              name: 'Huyện Cẩm Giàng',
              citiesId: '29'
            }, {
              name: 'Huyện Gia Lộc',
              citiesId: '29'
            }, {
              name: 'Huyện Kim Thành',
              citiesId: '29'
            }, {
              name: 'Huyện Nam Sách',
              citiesId: '29'
            }, {
              name: 'Huyện Ninh Giang',
              citiesId: '29'
            }, {
              name: 'Huyện Thanh Hà',
              citiesId: '29'
            }, {
              name: 'Huyện Thanh Miện',
              citiesId: '29'
            }, {
              name: 'Huyện Tứ Kỳ',
              citiesId: '29'
            }, {
              name: 'Thành phố Vị Thanh (tỉnh lỵ)',
              citiesId: '30'
            }, {
              name: 'Thành phố Ngã Bảy',
              citiesId: '30'
            }, {
              name: 'Thị xã Long Mỹ',
              citiesId: '30'
            }, {
              name: 'Huyện Châu Thành',
              citiesId: '30'
            }, {
              name: 'Huyện Châu Thành A',
              citiesId: '30'
            }, {
              name: 'Huyện Long Mỹ',
              citiesId: '30'
            }, {
              name: 'Huyện Phụng Hiệp',
              citiesId: '30'
            }, {
              name: 'Huyện Vị Thủy',
              citiesId: '30'
            }, {
              name: 'Thành phố Hòa Bình (tỉnh lỵ)',
              citiesId: '31'
            }, {
              name: 'Huyện Cao Phong',
              citiesId: '31'
            }, {
              name: 'Huyện Đà Bắc',
              citiesId: '31'
            }, {
              name: 'Huyện Kim Bôi',
              citiesId: '31'
            }, {
              name: 'Huyện Lạc Sơn',
              citiesId: '31'
            }, {
              name: 'Huyện Lạc Thủy',
              citiesId: '31'
            }, {
              name: 'Huyện Lương Sơn',
              citiesId: '31'
            }, {
              name: 'Huyện Mai Châu',
              citiesId: '31'
            }, {
              name: 'Huyện Tân Lạc',
              citiesId: '31'
            }, {
              name: 'Huyện Yên Thủy',
              citiesId: '31'
            }, {
              name: 'Thành phố Hưng Yên (tỉnh lỵ)',
              citiesId: '32'
            }, {
              name: 'Thị xã Mỹ Hào',
              citiesId: '32'
            }, {
              name: 'Huyện Ân Thi',
              citiesId: '32'
            }, {
              name: 'Huyện Khoái Châu',
              citiesId: '32'
            }, {
              name: 'Huyện Kim Động',
              citiesId: '32'
            }, {
              name: 'Huyện Phù Cừ',
              citiesId: '32'
            }, {
              name: 'Huyện Tiên Lữ',
              citiesId: '32'
            }, {
              name: 'Huyện Văn Giang',
              citiesId: '32'
            }, {
              name: 'Huyện Văn Lâm',
              citiesId: '32'
            }, {
              name: 'Huyện Yên Mỹ',
              citiesId: '32'
            }, {
              name: 'Thành phố Nha Trang (tỉnh lỵ)',
              citiesId: '33'
            }, {
              name: 'Thành phố Cam Ranh',
              citiesId: '33'
            }, {
              name: 'Thị xã Ninh Hòa',
              citiesId: '33'
            }, {
              name: 'Huyện Cam Lâm',
              citiesId: '33'
            }, {
              name: 'Huyện Diên Khánh',
              citiesId: '33'
            }, {
              name: 'Huyện Khánh Sơn',
              citiesId: '33'
            }, {
              name: 'Huyện Khánh Vĩnh',
              citiesId: '33'
            }, {
              name: 'Huyện Trường Sa',
              citiesId: '33'
            }, {
              name: 'Huyện Vạn Ninh',
              citiesId: '33'
            }, {
              name: 'Thành phố Rạch Giá (tỉnh lỵ)',
              citiesId: '34'
            }, {
              name: 'Thành phố Hà Tiên',
              citiesId: '34'
            }, {
              name: 'Thành phố Phú Quốc',
              citiesId: '34'
            }, {
              name: 'Huyện An Biên',
              citiesId: '34'
            }, {
              name: 'Huyện An Minh',
              citiesId: '34'
            }, {
              name: 'Huyện Châu Thành',
              citiesId: '34'
            }, {
              name: 'Huyện Giang Thành',
              citiesId: '34'
            }, {
              name: 'Huyện Giồng Riềng',
              citiesId: '34'
            }, {
              name: 'Huyện Gò Quao',
              citiesId: '34'
            }, {
              name: 'Huyện Hòn Đất',
              citiesId: '34'
            }, {
              name: 'Huyện Kiên Hải',
              citiesId: '34'
            }, {
              name: 'Huyện Kiên Lương',
              citiesId: '34'
            }, {
              name: 'Huyện Tân Hiệp',
              citiesId: '34'
            }, {
              name: 'Huyện U Minh Thượng',
              citiesId: '34'
            }, {
              name: 'Huyện Vĩnh Thuận',
              citiesId: '34'
            }, {
              name: 'Thành phố Kon Tum (tỉnh lỵ)',
              citiesId: '35'
            }, {
              name: 'Huyện Đăk Glei',
              citiesId: '35'
            }, {
              name: 'Huyện Đăk Hà',
              citiesId: '35'
            }, {
              name: 'Huyện Đăk Tô',
              citiesId: '35'
            }, {
              name: 'Huyện Ia HxxDrai',
              citiesId: '35'
            }, {
              name: 'Huyện Kon Plông',
              citiesId: '35'
            }, {
              name: 'Huyện Kon Rẫy',
              citiesId: '35'
            }, {
              name: 'Huyện Ngọc Hồi',
              citiesId: '35'
            }, {
              name: 'Huyện Sa Thầy',
              citiesId: '35'
            }, {
              name: 'Huyện Tu Mơ Rông',
              citiesId: '35'
            }, {
              name: 'Thành phố Lai Châu (tỉnh lỵ)',
              citiesId: '36'
            }, {
              name: 'Huyện Mường Tè',
              citiesId: '36'
            }, {
              name: 'Huyện Nậm Nhùn',
              citiesId: '36'
            }, {
              name: 'Huyện Phong Thổ',
              citiesId: '36'
            }, {
              name: 'Huyện Sìn Hồ',
              citiesId: '36'
            }, {
              name: 'Huyện Tam Đường',
              citiesId: '36'
            }, {
              name: 'Huyện Tân Uyên',
              citiesId: '36'
            }, {
              name: 'Huyện Than Uyên',
              citiesId: '36'
            }, {
              name: 'Thành phố Đà Lạt (tỉnh lỵ)',
              citiesId: '37'
            }, {
              name: 'Thành phố Bảo Lộc',
              citiesId: '37'
            }, {
              name: 'Huyện Bảo Lâm',
              citiesId: '37'
            }, {
              name: 'Huyện Cát Tiên',
              citiesId: '37'
            }, {
              name: 'Huyện Đạ Huoai',
              citiesId: '37'
            }, {
              name: 'Huyện Đạ Tẻh',
              citiesId: '37'
            }, {
              name: 'Huyện Đam Rông',
              citiesId: '37'
            }, {
              name: 'Huyện Di Linh',
              citiesId: '37'
            }, {
              name: 'Huyện Đơn Dương',
              citiesId: '37'
            }, {
              name: 'Huyện Đức Trọng',
              citiesId: '37'
            }, {
              name: 'Huyện Lạc Dương',
              citiesId: '37'
            }, {
              name: 'Huyện Lâm Hà',
              citiesId: '37'
            }, {
              name: 'Thành phố Lạng Sơn (tỉnh lỵ)',
              citiesId: '38'
            }, {
              name: 'Huyện Bắc Sơn',
              citiesId: '38'
            }, {
              name: 'Huyện Bình Gia',
              citiesId: '38'
            }, {
              name: 'Huyện Cao Lộc',
              citiesId: '38'
            }, {
              name: 'Huyện Chi Lăng',
              citiesId: '38'
            }, {
              name: 'Huyện Đình Lập',
              citiesId: '38'
            }, {
              name: 'Huyện Hữu Lũng',
              citiesId: '38'
            }, {
              name: 'Huyện Lộc Bình',
              citiesId: '38'
            }, {
              name: 'Huyện Tràng Định',
              citiesId: '38'
            }, {
              name: 'Huyện Văn Lãng',
              citiesId: '38'
            }, {
              name: 'Huyện Văn Quan',
              citiesId: '38'
            }, {
              name: 'Thành phố Lào Cai (tỉnh lỵ)',
              citiesId: '39'
            }, {
              name: 'Thị xã Sa Pa',
              citiesId: '39'
            }, {
              name: 'Huyện Bắc Hà',
              citiesId: '39'
            }, {
              name: 'Huyện Bảo Thắng',
              citiesId: '39'
            }, {
              name: 'Huyện Bảo Yên',
              citiesId: '39'
            }, {
              name: 'Huyện Bát Xát',
              citiesId: '39'
            }, {
              name: 'Huyện Mường Khương',
              citiesId: '39'
            }, {
              name: 'Huyện Si Ma Cai',
              citiesId: '39'
            }, {
              name: 'Huyện Văn Bàn',
              citiesId: '39'
            }, {
              name: 'Thành phố Tân An (tỉnh lỵ)',
              citiesId: '40'
            }, {
              name: 'Thị xã Kiến Tường',
              citiesId: '40'
            }, {
              name: 'Huyện Bến Lức',
              citiesId: '40'
            }, {
              name: 'Huyện Cần Đước',
              citiesId: '40'
            }, {
              name: 'Huyện Cần Giuộc',
              citiesId: '40'
            }, {
              name: 'Huyện Châu Thành',
              citiesId: '40'
            }, {
              name: 'Huyện Đức Hòa',
              citiesId: '40'
            }, {
              name: 'Huyện Đức Huệ',
              citiesId: '40'
            }, {
              name: 'Huyện Mộc Hóa',
              citiesId: '40'
            }, {
              name: 'Huyện Tân Hưng',
              citiesId: '40'
            }, {
              name: 'Huyện Tân Thạnh',
              citiesId: '40'
            }, {
              name: 'Huyện Tân Trụ',
              citiesId: '40'
            }, {
              name: 'Huyện Thạnh Hóa',
              citiesId: '40'
            }, {
              name: 'Huyện Thủ Thừa',
              citiesId: '40'
            }, {
              name: 'Huyện Vĩnh Hưng',
              citiesId: '40'
            }, {
              name: 'Thành phố Nam Định (tỉnh lỵ)',
              citiesId: '41'
            }, {
              name: 'Huyện Giao Thủy',
              citiesId: '41'
            }, {
              name: 'Huyện Hải Hậu',
              citiesId: '41'
            }, {
              name: 'Huyện Mỹ Lộc',
              citiesId: '41'
            }, {
              name: 'Huyện Nam Trực',
              citiesId: '41'
            }, {
              name: 'Huyện Nghĩa Hưng',
              citiesId: '41'
            }, {
              name: 'Huyện Trực Ninh',
              citiesId: '41'
            }, {
              name: 'Huyện Vụ Bản',
              citiesId: '41'
            }, {
              name: 'Huyện Xuân Trường',
              citiesId: '41'
            }, {
              name: 'Huyện Ý Yên',
              citiesId: '41'
            }, {
              name: 'Thành phố Vinh (tỉnh lỵ)',
              citiesId: '42'
            }, {
              name: 'Thị xã Cửa Lò',
              citiesId: '42'
            }, {
              name: 'Thị xã Hoàng Mai',
              citiesId: '42'
            }, {
              name: 'Thị xã Thái Hòa',
              citiesId: '42'
            }, {
              name: 'Huyện Anh Sơn',
              citiesId: '42'
            }, {
              name: 'Huyện Con Cuông',
              citiesId: '42'
            }, {
              name: 'Huyện Diễn Châu',
              citiesId: '42'
            }, {
              name: 'Huyện Đô Lương',
              citiesId: '42'
            }, {
              name: 'Huyện Hưng Nguyên',
              citiesId: '42'
            }, {
              name: 'Huyện Kỳ Sơn',
              citiesId: '42'
            }, {
              name: 'Huyện Nam Đàn',
              citiesId: '42'
            }, {
              name: 'Huyện Nghi Lộc',
              citiesId: '42'
            }, {
              name: 'Huyện Nghĩa Đàn',
              citiesId: '42'
            }, {
              name: 'Huyện Quế Phong',
              citiesId: '42'
            }, {
              name: 'Huyện Quỳ Châu',
              citiesId: '42'
            }, {
              name: 'Huyện Quỳ Hợp',
              citiesId: '42'
            }, {
              name: 'Huyện Quỳnh Lưu',
              citiesId: '42'
            }, {
              name: 'Huyện Tân Kỳ',
              citiesId: '42'
            }, {
              name: 'Huyện Thanh Chương',
              citiesId: '42'
            }, {
              name: 'Huyện Tương Dương',
              citiesId: '42'
            }, {
              name: 'Huyện Yên Thành',
              citiesId: '42'
            }, {
              name: 'Thành phố Ninh Bình (tỉnh lỵ)',
              citiesId: '43'
            }, {
              name: 'Thành phố Tam Điệp',
              citiesId: '43'
            }, {
              name: 'Huyện Gia Viễn',
              citiesId: '43'
            }, {
              name: 'Huyện Hoa Lư',
              citiesId: '43'
            }, {
              name: 'Huyện Kim Sơn',
              citiesId: '43'
            }, {
              name: 'Huyện Nho Quan',
              citiesId: '43'
            }, {
              name: 'Huyện Yên Khánh',
              citiesId: '43'
            }, {
              name: 'Huyện Yên Mô',
              citiesId: '43'
            }, {
              name: 'Thành phố Phan Rang - Tháp Chàm (tỉnh lỵ)',
              citiesId: '44'
            }, {
              name: 'Huyện Bác Ái',
              citiesId: '44'
            }, {
              name: 'Huyện Ninh Hải',
              citiesId: '44'
            }, {
              name: 'Huyện Ninh Phước',
              citiesId: '44'
            }, {
              name: 'Huyện Ninh Sơn',
              citiesId: '44'
            }, {
              name: 'Huyện Thuận Bắc',
              citiesId: '44'
            }, {
              name: 'Huyện Thuận Nam',
              citiesId: '44'
            }, {
              name: 'Thành phố Việt Trì (tỉnh lỵ)',
              citiesId: '45'
            }, {
              name: 'Thị xã Phú Thọ',
              citiesId: '45'
            }, {
              name: 'Huyện Cẩm Khê',
              citiesId: '45'
            }, {
              name: 'Huyện Đoan Hùng',
              citiesId: '45'
            }, {
              name: 'Huyện Hạ Hòa',
              citiesId: '45'
            }, {
              name: 'Huyện Lâm Thao',
              citiesId: '45'
            }, {
              name: 'Huyện Phù Ninh',
              citiesId: '45'
            }, {
              name: 'Huyện Tam Nông',
              citiesId: '45'
            }, {
              name: 'Huyện Tân Sơn',
              citiesId: '45'
            }, {
              name: 'Huyện Thanh Ba',
              citiesId: '45'
            }, {
              name: 'Huyện Thanh Sơn',
              citiesId: '45'
            }, {
              name: 'Huyện Thanh Thủy',
              citiesId: '45'
            }, {
              name: 'Huyện Yên Lập',
              citiesId: '45'
            }, {
              name: 'Thành phố Tuy Hòa (tỉnh lỵ)',
              citiesId: '46'
            }, {
              name: 'Thị xã Đông Hòa',
              citiesId: '46'
            }, {
              name: 'Thị xã Sông Cầu',
              citiesId: '46'
            }, {
              name: 'Huyện Đồng Xuân',
              citiesId: '46'
            }, {
              name: 'Huyện Phú Hòa',
              citiesId: '46'
            }, {
              name: 'Huyện Sơn Hòa',
              citiesId: '46'
            }, {
              name: 'Huyện Sông Hinh',
              citiesId: '46'
            }, {
              name: 'Huyện Tây Hòa',
              citiesId: '46'
            }, {
              name: 'Huyện Tuy An',
              citiesId: '46'
            }, {
              name: 'Thành phố Đồng Hới (tỉnh lỵ)',
              citiesId: '47'
            }, {
              name: 'Thị xã Ba Đồn',
              citiesId: '47'
            }, {
              name: 'Huyện Bố Trạch',
              citiesId: '47'
            }, {
              name: 'Huyện Lệ Thủy',
              citiesId: '47'
            }, {
              name: 'Huyện Minh Hóa',
              citiesId: '47'
            }, {
              name: 'Huyện Quảng Ninh',
              citiesId: '47'
            }, {
              name: 'Huyện Quảng Trạch',
              citiesId: '47'
            }, {
              name: 'Huyện Tuyên Hóa',
              citiesId: '47'
            }, {
              name: 'Thành phố Tam Kỳ (tỉnh lỵ)',
              citiesId: '48'
            }, {
              name: 'Thành phố Hội An',
              citiesId: '48'
            }, {
              name: 'Thị xã Điện Bàn',
              citiesId: '48'
            }, {
              name: 'Huyện Bắc Trà My',
              citiesId: '48'
            }, {
              name: 'Huyện Đại Lộc',
              citiesId: '48'
            }, {
              name: 'Huyện Đông Giang',
              citiesId: '48'
            }, {
              name: 'Huyện Duy Xuyên',
              citiesId: '48'
            }, {
              name: 'Huyện Hiệp Đức',
              citiesId: '48'
            }, {
              name: 'Huyện Nam Giang',
              citiesId: '48'
            }, {
              name: 'Huyện Nam Trà My',
              citiesId: '48'
            }, {
              name: 'Huyện Nông Sơn',
              citiesId: '48'
            }, {
              name: 'Huyện Núi Thành',
              citiesId: '48'
            }, {
              name: 'Huyện Phú Ninh',
              citiesId: '48'
            }, {
              name: 'Huyện Phước Sơn',
              citiesId: '48'
            }, {
              name: 'Huyện Quế Sơn',
              citiesId: '48'
            }, {
              name: 'Huyện Tây Giang',
              citiesId: '48'
            }, {
              name: 'Huyện Thăng Bình',
              citiesId: '48'
            }, {
              name: 'Huyện Tiên Phước',
              citiesId: '48'
            }, {
              name: 'Thành phố Quảng Ngãi (tỉnh lỵ)',
              citiesId: '49'
            }, {
              name: 'Thị xã Đức Phổ',
              citiesId: '49'
            }, {
              name: 'Huyện Ba Tơ',
              citiesId: '49'
            }, {
              name: 'Huyện Bình Sơn',
              citiesId: '49'
            }, {
              name: 'Huyện Lý Sơn',
              citiesId: '49'
            }, {
              name: 'Huyện Minh Long',
              citiesId: '49'
            }, {
              name: 'Huyện Mộ Đức',
              citiesId: '49'
            }, {
              name: 'Huyện Nghĩa Hành',
              citiesId: '49'
            }, {
              name: 'Huyện Sơn Hà',
              citiesId: '49'
            }, {
              name: 'Huyện Sơn Tây',
              citiesId: '49'
            }, {
              name: 'Huyện Sơn Tịnh',
              citiesId: '49'
            }, {
              name: 'Huyện Trà Bồng',
              citiesId: '49'
            }, {
              name: 'Huyện Tư Nghĩa',
              citiesId: '49'
            }, {
              name: 'Thành phố Hạ Long (tỉnh lỵ)',
              citiesId: '50'
            }, {
              name: 'Thành phố Cẩm Phả',
              citiesId: '50'
            }, {
              name: 'Thành phố Móng Cái',
              citiesId: '50'
            }, {
              name: 'Thành phố Uông Bí',
              citiesId: '50'
            }, {
              name: 'Thị xã Đông Triều',
              citiesId: '50'
            }, {
              name: 'Thị xã Quảng Yên',
              citiesId: '50'
            }, {
              name: 'Huyện Ba Chẽ',
              citiesId: '50'
            }, {
              name: 'Huyện Bình Liêu',
              citiesId: '50'
            }, {
              name: 'Huyện Cô Tô',
              citiesId: '50'
            }, {
              name: 'Huyện Đầm Hà',
              citiesId: '50'
            }, {
              name: 'Huyện Hải Hà',
              citiesId: '50'
            }, {
              name: 'Huyện Tiên Yên',
              citiesId: '50'
            }, {
              name: 'Huyện Vân Đồn',
              citiesId: '50'
            }, {
              name: 'Thành phố Đông Hà (tỉnh lỵ)',
              citiesId: '51'
            }, {
              name: 'Thị xã Quảng Trị',
              citiesId: '51'
            }, {
              name: 'Huyện Cam Lộ',
              citiesId: '51'
            }, {
              name: 'Huyện Cồn Cỏ',
              citiesId: '51'
            }, {
              name: 'Huyện Đakrông',
              citiesId: '51'
            }, {
              name: 'Huyện Gio Linh',
              citiesId: '51'
            }, {
              name: 'Huyện Hải Lăng',
              citiesId: '51'
            }, {
              name: 'Huyện Hướng Hóa',
              citiesId: '51'
            }, {
              name: 'Huyện Triệu Phong',
              citiesId: '51'
            }, {
              name: 'Huyện Vĩnh Linh',
              citiesId: '51'
            }, {
              name: 'Thành phố Sóc Trăng (tỉnh lỵ)',
              citiesId: '52'
            }, {
              name: 'Thị xã Ngã Năm',
              citiesId: '52'
            }, {
              name: 'Thị xã Vĩnh Châu',
              citiesId: '52'
            }, {
              name: 'Huyện Châu Thành',
              citiesId: '52'
            }, {
              name: 'Huyện Cù Lao Dung',
              citiesId: '52'
            }, {
              name: 'Huyện Kế Sách',
              citiesId: '52'
            }, {
              name: 'Huyện Long Phú',
              citiesId: '52'
            }, {
              name: 'Huyện Mỹ Tú',
              citiesId: '52'
            }, {
              name: 'Huyện Mỹ Xuyên',
              citiesId: '52'
            }, {
              name: 'Huyện Thạnh Trị',
              citiesId: '52'
            }, {
              name: 'Huyện Trần Đề',
              citiesId: '52'
            }, {
              name: 'Thành phố Sơn La (tỉnh lỵ)',
              citiesId: '53'
            }, {
              name: 'Huyện Bắc Yên',
              citiesId: '53'
            }, {
              name: 'Huyện Mai Sơn',
              citiesId: '53'
            }, {
              name: 'Huyện Mộc Châu',
              citiesId: '53'
            }, {
              name: 'Huyện Mường La',
              citiesId: '53'
            }, {
              name: 'Huyện Phù Yên',
              citiesId: '53'
            }, {
              name: 'Huyện Quỳnh Nhai',
              citiesId: '53'
            }, {
              name: 'Huyện Sông Mã',
              citiesId: '53'
            }, {
              name: 'Huyện Sốp Cộp',
              citiesId: '53'
            }, {
              name: 'Huyện Thuận Châu',
              citiesId: '53'
            }, {
              name: 'Huyện Vân Hồ',
              citiesId: '53'
            }, {
              name: 'Huyện Yên Châu',
              citiesId: '53'
            }, {
              name: 'Thành phố Tây Ninh (tỉnh lỵ)',
              citiesId: '54'
            }, {
              name: 'Thị xã Hòa Thành',
              citiesId: '54'
            }, {
              name: 'Thị xã Trảng Bàng',
              citiesId: '54'
            }, {
              name: 'Huyện Bến Cầu',
              citiesId: '54'
            }, {
              name: 'Huyện Châu Thành',
              citiesId: '54'
            }, {
              name: 'Huyện Dương Minh Châu',
              citiesId: '54'
            }, {
              name: 'Huyện Gò Dầu',
              citiesId: '54'
            }, {
              name: 'Huyện Tân Biên',
              citiesId: '54'
            }, {
              name: 'Huyện Tân Châu',
              citiesId: '54'
            }, {
              name: 'Thành phố Thái Bình (tỉnh lỵ)',
              citiesId: '55'
            }, {
              name: 'Huyện Đông Hưng',
              citiesId: '55'
            }, {
              name: 'Huyện Hưng Hà',
              citiesId: '55'
            }, {
              name: 'Huyện Kiến Xương',
              citiesId: '55'
            }, {
              name: 'Huyện Quỳnh Phụ',
              citiesId: '55'
            }, {
              name: 'Huyện Thái Thụy',
              citiesId: '55'
            }, {
              name: 'Huyện Tiền Hải',
              citiesId: '55'
            }, {
              name: 'Huyện Vũ Thư',
              citiesId: '55'
            }, {
              name: 'Thành phố Thái Nguyên (tỉnh lỵ)',
              citiesId: '56'
            }, {
              name: 'Thành phố Sông Công',
              citiesId: '56'
            }, {
              name: 'Thị xã Phổ Yên',
              citiesId: '56'
            }, {
              name: 'Huyện Đại Từ',
              citiesId: '56'
            }, {
              name: 'Huyện Định Hóa',
              citiesId: '56'
            }, {
              name: 'Huyện Đồng Hỷ',
              citiesId: '56'
            }, {
              name: 'Huyện Phú Bình',
              citiesId: '56'
            }, {
              name: 'Huyện Phú Lương',
              citiesId: '56'
            }, {
              name: 'Huyện Võ Nhai',
              citiesId: '56'
            }, {
              name: 'Thành phố Thanh Hóa (tỉnh lỵ)',
              citiesId: '57'
            }, {
              name: 'Thành phố Sầm Sơn',
              citiesId: '57'
            }, {
              name: 'Thị xã Bỉm Sơn',
              citiesId: '57'
            }, {
              name: 'Thị xã Nghi Sơn',
              citiesId: '57'
            }, {
              name: 'Huyện Bá Thước',
              citiesId: '57'
            }, {
              name: 'Huyện Cẩm Thủy',
              citiesId: '57'
            }, {
              name: 'Huyện Đông Sơn',
              citiesId: '57'
            }, {
              name: 'Huyện Hà Trung',
              citiesId: '57'
            }, {
              name: 'Huyện Hậu Lộc',
              citiesId: '57'
            }, {
              name: 'Huyện Hoằng Hóa',
              citiesId: '57'
            }, {
              name: 'Huyện Lang Chánh',
              citiesId: '57'
            }, {
              name: 'Huyện Mường Lát',
              citiesId: '57'
            }, {
              name: 'Huyện Nga Sơn',
              citiesId: '57'
            }, {
              name: 'Huyện Ngọc Lặc',
              citiesId: '57'
            }, {
              name: 'Huyện Như Thanh',
              citiesId: '57'
            }, {
              name: 'Huyện Như Xuân',
              citiesId: '57'
            }, {
              name: 'Huyện Nông Cống',
              citiesId: '57'
            }, {
              name: 'Huyện Quan Hóa',
              citiesId: '57'
            }, {
              name: 'Huyện Quan Sơn',
              citiesId: '57'
            }, {
              name: 'Huyện Quảng Xương',
              citiesId: '57'
            }, {
              name: 'Huyện Thạch Thành',
              citiesId: '57'
            }, {
              name: 'Huyện Thiệu Hóa',
              citiesId: '57'
            }, {
              name: 'Huyện Thọ Xuân',
              citiesId: '57'
            }, {
              name: 'Huyện Thường Xuân',
              citiesId: '57'
            }, {
              name: 'Huyện Triệu Sơn',
              citiesId: '57'
            }, {
              name: 'Huyện Vĩnh Lộc',
              citiesId: '57'
            }, {
              name: 'Huyện Yên Định',
              citiesId: '57'
            }, {
              name: 'Thành phố Huế (tỉnh lỵ)',
              citiesId: '58'
            }, {
              name: 'Thị xã Hương Thủy',
              citiesId: '58'
            }, {
              name: 'Thị xã Hương Trà',
              citiesId: '58'
            }, {
              name: 'Huyện A Lưới',
              citiesId: '58'
            }, {
              name: 'Huyện Nam Đông',
              citiesId: '58'
            }, {
              name: 'Huyện Phong Điền',
              citiesId: '58'
            }, {
              name: 'Huyện Phú Lộc',
              citiesId: '58'
            }, {
              name: 'Huyện Phú Vang',
              citiesId: '58'
            }, {
              name: 'Huyện Quảng Điền',
              citiesId: '58'
            }, {
              name: 'Thành phố Mỹ Tho (tỉnh lỵ)',
              citiesId: '59'
            }, {
              name: 'Thị xã Cai Lậy',
              citiesId: '59'
            }, {
              name: 'Thị xã Gò Công',
              citiesId: '59'
            }, {
              name: 'Huyện Cái Bè',
              citiesId: '59'
            }, {
              name: 'Huyện Cai Lậy',
              citiesId: '59'
            }, {
              name: 'Huyện Châu Thành',
              citiesId: '59'
            }, {
              name: 'Huyện Chợ Gạo',
              citiesId: '59'
            }, {
              name: 'Huyện Gò Công Đông',
              citiesId: '59'
            }, {
              name: 'Huyện Gò Công Tây',
              citiesId: '59'
            }, {
              name: 'Huyện Tân Phú Đông',
              citiesId: '59'
            }, {
              name: 'Huyện Tân Phước',
              citiesId: '59'
            }, {
              name: 'Thành phố Trà Vinh (tỉnh lỵ)',
              citiesId: '60'
            }, {
              name: 'Thị xã Duyên Hải',
              citiesId: '60'
            }, {
              name: 'Huyện Càng Long',
              citiesId: '60'
            }, {
              name: 'Huyện Cầu Kè',
              citiesId: '60'
            }, {
              name: 'Huyện Cầu Ngang',
              citiesId: '60'
            }, {
              name: 'Huyện Châu Thành',
              citiesId: '60'
            }, {
              name: 'Huyện Duyên Hải',
              citiesId: '60'
            }, {
              name: 'Huyện Tiểu Cần',
              citiesId: '60'
            }, {
              name: 'Huyện Trà Cú',
              citiesId: '60'
            }, {
              name: 'Thành phố Tuyên Quang (tỉnh lỵ)',
              citiesId: '61'
            }, {
              name: 'Huyện Chiêm Hóa',
              citiesId: '61'
            }, {
              name: 'Huyện Hàm Yên',
              citiesId: '61'
            }, {
              name: 'Huyện Lâm Bình',
              citiesId: '61'
            }, {
              name: 'Huyện Na Hang',
              citiesId: '61'
            }, {
              name: 'Huyện Sơn Dương',
              citiesId: '61'
            }, {
              name: 'Huyện Yên Sơn',
              citiesId: '61'
            }, {
              name: 'Thành phố Vĩnh Long (tỉnh lỵ)',
              citiesId: '62'
            }, {
              name: 'Thị xã Bình Minh',
              citiesId: '62'
            }, {
              name: 'Huyện Bình Tân',
              citiesId: '62'
            }, {
              name: 'Huyện Long Hồ',
              citiesId: '62'
            }, {
              name: 'Huyện Mang Thít',
              citiesId: '62'
            }, {
              name: 'Huyện Tam Bình',
              citiesId: '62'
            }, {
              name: 'Huyện Trà Ôn',
              citiesId: '62'
            }, {
              name: 'Huyện Vũng Liêm',
              citiesId: '62'
            }, {
              name: 'Thành phố Vĩnh Yên (tỉnh lỵ)',
              citiesId: '63'
            }, {
              name: 'Thành phố Phúc Yên',
              citiesId: '63'
            }, {
              name: 'Huyện Bình Xuyên',
              citiesId: '63'
            }, {
              name: 'Huyện Lập Thạch',
              citiesId: '63'
            }, {
              name: 'Huyện Sông Lô',
              citiesId: '63'
            }, {
              name: 'Huyện Tam Đảo',
              citiesId: '63'
            }, {
              name: 'Huyện Tam Dương',
              citiesId: '63'
            }, {
              name: 'Huyện Vĩnh Tường',
              citiesId: '63'
            }, {
              name: 'Huyện Yên Lạc',
              citiesId: '63'
            }, {
              name: 'Thành phố Yên Bái (tỉnh lỵ)',
              citiesId: '64'
            }, {
              name: 'Thị xã Nghĩa Lộ',
              citiesId: '64'
            }, {
              name: 'Huyện Lục Yên',
              citiesId: '64'
            }, {
              name: 'Huyện Mù Cang Chải',
              citiesId: '64'
            }, {
              name: 'Huyện Trạm Tấu',
              citiesId: '64'
            }, {
              name: 'Huyện Trấn Yên',
              citiesId: '64'
            }, {
              name: 'Huyện Văn Chấn',
              citiesId: '64'
            }, {
              name: 'Huyện Văn Yên',
              citiesId: '64'
            }, {
              name: 'Huyện Yên Bình',
              citiesId: '64'
            }], {});
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  down: function down(queryInterface, Sequelize) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  } /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
};