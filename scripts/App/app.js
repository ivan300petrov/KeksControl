

export class App {
  constructor({ element }) {
   
  }

 
  

  _render() {
    this._el.innerHTML = `
    <input type="button" name="add_slackers", value="добавить">
    <input type="button" name="list_slackers", value="список">
    `;
  }
}