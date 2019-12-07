var TextUtils = require("TextUtils")

module.exports = function(testArg){
    return "Drupi test and " + TextUtils(testArg).setHoverText("test hover text").create();
}
