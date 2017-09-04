var alt = require('../../alt');
var ListActions = require('../actions/ListActions');

function ListStore() {
  this.state = {
    items: [],
    inputVal: ''
  };
  this.bindListeners({
    handleAddItem: ListActions.addNewItem,
    handleInputChange: ListActions.changeInput,
    handleDelete: ListActions.deleteItem,
    handleDone: ListActions.toggleDone
  })
}

ListStore.prototype.handleAddItem = function () {
  var item = {
    content: this.state.inputVal,
    done: false
  }
  this.state.items = [...this.state.items, item];
}
ListStore.prototype.handleInputChange = function (inputVal) {
  this.state.inputVal = inputVal;
}
ListStore.prototype.handleDelete = function (deleteIndex) {
  this.state.items = this.state.items.filter((item,index,array) => index !== deleteIndex);
}
ListStore.prototype.handleDone = function (doneIndex) {
  this.state.items = this.state.items.map(
    (item,index,array) => index !== doneIndex ? item : {
      content: item.content,
      done: !item.done
    }
  )
}

module.exports = alt.createStore(ListStore, 'ListStore');
