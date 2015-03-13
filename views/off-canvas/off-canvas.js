Template.OffCanvasReveal.events({
  'click .reveal-off-canvas': function (e) {
    Session.set('isOffCanvas', !Session.get('isOffCanvas'));
  },
});

Template.OffCanvasDismiss.events({
  'click .dismiss-off-canvas': function (e) {
    Session.set('isOffCanvas', false);
  },
});

Template.OffCanvas.helpers({
  revealOffCanvasClass: function () {
    return (Session.get('isOffCanvas')) ?  'left is-active' : '';
  }
})