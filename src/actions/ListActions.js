var alt = require('../../alt');

const ListActions = alt.generateActions('addNewItem','changeInput');

module.exports = alt.createActions(ListActions);
