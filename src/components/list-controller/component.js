const ListStore = require('../../stores/ListStore');
const ListActions = require('../../actions/ListActions');

module.exports = {
  onCreate() {
    this.state = ListStore.getState()
  },
  onMount() {
    ListStore.listen(state => {
      this.state = state;
    })
  },
  addHandler() {
    ListActions.addNewItem();
  },
  inputHandler(event, el) {
    ListActions.changeInput(el.value);
  },
  deleteHandler(event, el) {
    var index = Number.parseInt(el.parentNode.getAttribute("index"));
    ListActions.deleteItem(index);
  },
  toggleDoneHandler(event, el) {
    var index = Number.parseInt(el.parentNode.getAttribute("index"));
    ListActions.toggleDone(index);
    console.log(index);
  }
}
