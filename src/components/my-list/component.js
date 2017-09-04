module.exports = {
  onInput(input) {
    this.addHandler = input.addHandler;
    this.inputHandler = input.inputHandler;
    this.deleteHandler = input.deleteHandler;
    this.toggleDoneHandler = input.toggleDoneHandler;
  }
}
