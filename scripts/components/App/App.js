

export class App  {
  constructor({ element }) {
    
  	this._el = element;
   this._render();
  }

 
  

  _render() {
    this._el.innerHTML = `
    <input type="button" name="tabel", value="табель">
    <input type="button" name="list_slackers", value="список">
    `;
  }
}