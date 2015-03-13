var _modalView;

Orbit.modal = {
  create: function (data, parentData) {
    var data = data || {};

    if (parentData)
      data = _.extend(data, { parentData: parentData });

    console.log("data: ", data);

    blazeView = Blaze.renderWithData(Template._Modal, data, document.body);

    // If Orbit.ModalView has been created
    if (_.isObject(_modalView))
      _modalView._blazeView = blazeView;
  },
}

Orbit.ModalView = function (options) {
  options = options || {};
  this._blazeView = options._blazeViewiew || null;
  this.selector = options.selector || '.modal-view';
  this.transitionClass = options.transitionClass || 'slide-up';
}
Orbit.ModalView.prototype = new Orbit.View();

_.extend(Orbit.ModalView.prototype, {
  slideUp: function () {
    console.log('transition up:', this);
  }
});

Template._Modal.events({
  'click .modal': function (e) {
    e.stopPropagation();
  },
  'click .modal-overlay': function (e) {
    Template.instance()._modalView.dismissModal();
  },
})
Template._Modal.helpers({
  getParentData: function () {
    if (this.parentData)
      return this.parentData;
  },
});

Template._Modal.created = function () {
  _modalView = new Orbit.ModalView();
  if (this.data && this.data.handle)
    Orbit[this.data.handle] = _modalView;
  _.extend(this.__proto__, {
    _modalView: _modalView
  });
}

Template.Modal.events({
  'click .reveal-modal': function (e) {
    var self = this;
    if (this.modal && ! Orbit._modal)
      Orbit.modal.create(self, Template.parentData());
  },
});
Template.DismissModal.events({
  'click .dismiss-modal': function (e) {
    Template.instance()._modalView.dismissModal();
  },
});


Template._Modal.rendered = function () {
  var self = this;
  $(self.find('.modal-overlay')).removeClass('hidden');
};