import { Tabel } from '../Tabel/Tabel.js';
import { List } from '../List/List.js';

export class App  {
  constructor({ element }) {
    
  	this._el = element;
   
   this._render();
   let listButton = document.querySelector('#list_slackers');
  this._el.addEventListener('click', e => {
      e.preventDefault();

      if (e.target.closest('[data-action=tabel]')) {
        this._initTabel();
      }
  
      
 if (e.target.closest('[data-action=list_slackers]')) {
        this._initList();
      }


//кастомное событие
/*
      if (e.target.closest('[data-action=tabel]')) {
        let buyEvent = new CustomEvent('buy', {
          detail: {
            item: this._currentItem,
            amount: +this._el.querySelector('#amount').value,
          }
        })
        this._el.dispatchEvent(buyEvent);
        this.close();
      }*/
    })
    
  }

 
  
_initTabel() {
    this._table = new Tabel({
      //data: this._data,
      element: this._el.querySelector('[data-element=tabel]'),
    });
  }
/*
_initCalc() {
    this._table = new Tabel({
      //data: this._data,
      element: this._el.querySelector('[data-element=tabel]'),
    });
  }
*/

_initList() {
    this._list = new List({
      data: this._data,
      element: this._el.querySelector('[data-element=tabel]'),
    });
}
  _render() {
    this._el.innerHTML = `
    <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
    <a href="#!" data-action="tabel" class="modal-close waves-effect waves-teal btn-flat">табель</a>
   <a href="#!" data-action="list_slackers" class="modal-close waves-effect waves-teal btn-flat">список</a>
    <a href="#!" data-action="calc" class="modal-close waves-effect waves-teal btn-flat">калькулятор</a>
    <div  data-element="tabel"></div>
      <div  data-element="list"></div>
      
      <div id="modal1" class="modal">
    <div class="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div> 
    
    `;
     document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });
  }
}