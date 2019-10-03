import { Component } from '../Component/Component.js';
export class Tabel {
  constructor({ element }) {
  	
  	this._el = element;
   this._render();
  }
  _render() {
    this._el.innerHTML = `
    <div id="modal2" class="modal open">
    <div class="modal-content">
    <h1>табель</h1>
      <table class="data-table highlight"> 
        <thead>
          <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Rank</th>
              <th>Price</th>
          </tr>
        </thead>
        <tbody>

         <tr data-id="ew">
                <td>вася</td>
                <td>петя</td>
                <td>саша</td>
                <td>даша</td>
              </tr>
          

        </tbody>
      </table>
      </div>
      <div class="modal-footer">
            <a href="#!" data-action="buy" class="modal-close waves-effect waves-teal btn-flat">Buy</a>
            <a href="#!" data-action="close" class="modal-close waves-effect waves-teal btn-flat">Cancel</a>
          </div>
      </div>

    `;
 let elems = this._el.querySelectorAll('.modal');
    M.modal.init(elems);
  }
}