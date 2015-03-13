var EVENTS = 'webkitTransitionEnd oTransitionEnd transitionEnd msTransitionEnd transitionend';

Session.setDefault('_isDetailRouteActive', false);
Session.setDefault('_isOffScreenRight', true);

var currentRoute = function () {
  return Router.current().options.route.getName();
}

Template.SplitView.helpers({
  isActiveDetailPanel: function () {
    return (Session.get('_isDetailRouteActive')) ? 'orbit-is-active' : '';
  },
  isOffScreenRight: function () {
    return (Session.get('_isOffScreenRight')) ? 'off-screen-right' : '';
  },
});

Template.SplitView.rendered = function () {
  var self = this;

  this.autorun(function() {
    if (self.data && typeof self.data.detailRoute !== 'undefined' && currentRoute() === self.data.detailRoute) {
      Session.set('_isDetailRouteActive', true);
      Session.set('_isOffScreenRight', false);
    } else {
      $('.orbit-detail-view').removeClass('.slide-in')
        Session.set('_isOffScreenRight', true);
        Meteor.setTimeout(function () {
          Session.set('_isDetailRouteActive', false);
        }, 200);
    }
  });
};