// Animations — transitions, transforms
_.extend(Orbit.View.prototype, {


  transition: function (cb) {
    var selector = this.selector;
    var transition = this.transitionClass;
    var transitions = this.transitionClass + ' transit-transform transitioning';
    var view = $(selector);

    if (view.hasClass(transition))
      view.removeClass(transition).addClass('transitioning');
    else
      view.addClass(transitions);

    this.transitionEnd(selector, function() {
      view.removeClass('transitioning');
      if (_.isFunction(cb)) {
        cb();
      }
    });
  },

  animate: function (options, params) {
    var options = options || {};
    var params = params || {};
    this.view().velocity(options, params);
  },

  transitionEnd: function(selector, cb) {
    $(selector).one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
      function() {
       cb();
    });
  },

  revealModal: function () {
    $('.modal').addClass('reveal');
  },

  dismissModal: function (cb) {
    var self = this;
    var cb = cb;
    $('.modal-overlay').addClass('hidden');
    this.transitionEnd('.modal-overlay', function () {
      Blaze.remove(self._blazeView);
      if (_.isFunction(cb))
        cb();
    });
  },

  openSideMenu: function () {
    var container = $('#container');
    container.addClass('menu-open open');
  },

  closeSideMenu: function () {
    var container = $('#container');
    container.removeClass('menu-open');
    Orbit.transitionEnd('#container', function () {
      container.removeClass('open');
    })
  },

  toggleSideMenu: function () {
    var container = $('#container');
    if (! container.hasClass('menu-open'))
      this.openSideMenu();
    else
      this.closeSideMenu();
  },

})