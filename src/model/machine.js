'use strict'
var load = require('./fixtures.js');
var _ = require('lodash');

var Machine = (function() {
function Machine() {}

Machine.prototype.discountPrice = function(bestGroups) {
    var loadPromotion = load.loadPromotions();
    var discountPrice = 0;

    _.forEach(bestGroups, function(valOne) {
        _.forEach(loadPromotion, function(valTwo) {
            if(valTwo.amount === valOne.length) {
                discountPrice += valTwo.price * valOne.length;
            }
        })
    })
    return discountPrice;
};
    return Machine;
})();

module.exports = Machine;
