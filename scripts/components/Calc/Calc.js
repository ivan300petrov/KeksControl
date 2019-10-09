import { Component } from '../Component/Component.js';
export class Calc {
  constructor({ element }) {
  	
  	this._el = element;
   this._render();
  }
  _render() {
  	this._el.innerHTML = `
  	 <input type="text" class="datepicker">
`
let options = {};

    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
  
  	}
  }