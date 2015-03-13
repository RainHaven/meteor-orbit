Template.View.created = function () {
  var selector = (this.data.selector) ? '.' + this.data.selector : '';
  _view = new Orbit.View({ selector: selector });

  if (this.data && this.data.handle)
    Orbit[this.data.handle] = _view;

  _.extend(this.__proto__, {
    _view: _view
  });

}

Template.View.rendered = function () {

}