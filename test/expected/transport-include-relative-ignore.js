define("a/1.0.0/src/index", ["b","c"], function(require, exports, module){
require('b');
require("a/1.0.0/a");

});
define("a/1.0.0/a", [], function(require, exports, module){
console.log('a');

});
