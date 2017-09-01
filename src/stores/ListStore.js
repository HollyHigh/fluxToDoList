var alt = require('../../alt');
var ListActions = require('../actions/ListActions');

function ListStore() {
  this.state = {
    items: [],
    inputVal: ''
  };
  this.bindListeners({
    handleAddItem: ListActions.addNewItem,
    handleInputChange: ListActions.changeInput
  })
}

ListStore.prototype.handleAddItem = function () {
  this.state.items = [...this.state.items, this.state.inputVal];
}
ListStore.prototype.handleInputChange = function (inputVal) {
  this.state.inputVal = inputVal;
}

module.exports = alt.createStore(ListStore, 'ListStore');
