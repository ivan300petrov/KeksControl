
import { Component } from '../Component/Component.js';
export class AddingPerson extends Component{
  
	constructor({element}){
		super();
		this._el = element;


     this._render();
    /*
    this._el.addEventListener('keydown', e => {
      if (!(e.target.closest('#name') || e.target.closest('#fam'))) return;

      const { key } = e;
      //if (!isNumeric(key) && key !== 'Backspace' && key !== '.') {
     //   e.preventDefault();
     // }

    });
    
this._el.addEventListener('click', e => {
      e.preventDefault();

      if (e.target.closest('[data-action=cancel]')) this.close();
})
*/
	}

close() {
    this._el.querySelector('.modal').classList.remove('open');
  }
  _add(){
    for(let key in localStorage) {
  if (!localStorage.hasOwnProperty(key)) {
    continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
  }
  alert(`${key}: ${localStorage.getItem(key)}`);
}

sessionStorage.user = JSON.stringify({name: "John"});

// немного позже
let user = JSON.parse( sessionStorage.user );
alert( user.name ); // John


//Также возможно привести к строке весь объект хранилища, например для отладки:

 // для JSON.stringify добавлены параметры форматирования, чтобы объект выглядел лучше
alert( JSON.stringify(localStorage, null, 2) );
  }
  
	_render(){
		this._el.innerHTML =`
  
<div id='modal5' class='modal'>
<div class="modal-content">
<h4>Добавить лентяя :</h4>
 <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
</div>
</div>
		`;
    
    let elems = this._el.querySelectorAll('.modal');
    M.modal.init(elems);
	}
	/*
<div class="input-field col s4">
                      <input id="name" type="text">
                      <label for="name">Имя</label>
                      <input id="fam" type="text">
                      <label for="fam">Фамилия</label>
                      <a href="#!" data-action="add" class="modal-close waves-effect waves-teal btn-flat">Добавить</a>
                      <a href="#!" data-action="cancel" class="modal-close waves-effect waves-teal btn-flat">Отмена</a>
                  </div>
  */


}