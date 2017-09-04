var alt = require('../../alt');

const ListActions = alt.generateActions('addNewItem','changeInput','deleteItem','toggleDone');

module.exports = alt.createActions(ListActions);
