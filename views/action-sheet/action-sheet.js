Session.setDefault('actionSheetId', '');
Template.ActionSheet.events({
  'click .action-sheet-button': function (e) {
    if ( Session.equals('actionSheetId', this._id) )
      Session.set('actionSheetId', '');
    else
      Session.set('actionSheetId', this._id);
  },
});
Template.registerHelper('isActionSheetVisible', function () {
  return Session.equals('actionSheetId', this._id);
})
Template.ActionSheet.helpers({
  getParentData: function () {
    return Template.parentData(2);
  },
  actionSheetData: function () {
    var parent = Template.parentData(1);
    var id;
    if (! this.userId)
      id = Random.id();
    else
      id = (typeof parent._id !== 'undefined') ? parent._id : Random.id();
    return _.extend(this, {
      _id: id
    });
  },
  getActionSheetData: function () {
    return _.extend(Template.parentData(2), {
      _id: this._id
    });
  },
  isActive: function () {
    return Session.equals('actionSheetId', this._id) ? 'is-active' : '';
  },
  // isActionSheet: function () {
  //   return Session.equals('actionSheetId', this._id);
  // },
})