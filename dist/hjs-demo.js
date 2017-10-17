(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.HjsDemo = factory());
}(this, (function () { 'use strict';

var HjsDemo={
    word: "Hola Mundo",
    say: function(){
        console.log(this.word);
        console.log("despues de hola mundo");
    }
};

return HjsDemo;

})));
//# sourceMappingURL=hjs-demo.js.map
