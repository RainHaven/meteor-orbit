// Orbit Name Space
Orbit = {};

Orbit.views = [];


Orbit.transitionEnd = function(selector, cb) {
  $(selector).one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
    function() {
     cb();
  });
};

Orbit.dismissActionSheet = function () {
  Session.set('actionSheetId', '');
};

Orbit.helpers = {
  isIronRouter: function () {
    return (typeof Iron !== 'undefined' && _.isObject(Iron));
  }
}

_.each(Orbit.helpers, function (helper, key) {
  Template.registerHelper(key, helper);
});

Meteor.startup(function () {
  _.extend(Blaze.TemplateInstance.prototype, {
    logInstance: function () {
      console.log("logging instance: ", this);
    }
  })
});