//import { Component } from '../Component/Component.js';
export class AddingPerson {
/*/*
	constructor({element}){
		//super();
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
    */
/*
this._el.addEventListener('click', e => {
      e.preventDefault();

      if (e.target.closest('[data-action=cancel]')) this.close();
})
	}
*/
close() {
    this._el.querySelector('.modal').classList.remove('open');
  }
  
  /*
	_render(){
		this._el.innerHTML = `
<div id='modal' class='modal open'>
<div class="modal-content">
<h4>Добавить лентяя :</h4>
<div class="input-field col s4">
                      <input id="name" type="text">
                      <label for="name">Имя</label>
                      <input id="fam" type="text">
                      <label for="fam">Фамилия</label>
                      <a href="#!" data-action="add" class="modal-close waves-effect waves-teal btn-flat">Добавить</a>
                      <a href="#!" data-action="cancel" class="modal-close waves-effect waves-teal btn-flat">Отмена</a>
                  </div>
</div>
</div>
		`;
	}
	*/
}