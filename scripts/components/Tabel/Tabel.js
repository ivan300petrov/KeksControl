import { Component } from '../Component/Component.js';
export class Tabel {
  constructor({ element }) {
  	 this._month = {"Январь": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]};
  	this._el = element;
   this._persons = JSON.parse(localStorage.getItem('persons'));   
   this._render();
  }
  _render() {

this._persons =(JSON.parse(localStorage.getItem('persons')));
   
this.person = [];
   let i=0;
   let keis = Object.keys(this._persons);

//console.log('i=', i);

//console.log('this._persons=', this._persons);
//console.log('keis=', keis);
   for (let key in keis) {

//console.log('this._persons{key=', this._persons[+(key)]);

//console.log('i=', i);
   	this.person[i] = this._persons[i+1];

console.log('this._persons{key=', this._persons[i]);

   	i++; 

  };
//console.log(this.person[0]);

  //alert('efw232323ef');
    this._el.innerHTML = `
    <div class="modal-header">

            <input type="text" class="datepicker">
     </div>
    <div id="modal2" class="modal-open">
    <div class="modal-content">
    <h1>табель</h1>
      <table class="data-table highlight"> 
        <thead>

          <tr>
              <th>№</th>
              <th>Name</th>
              
              <th>Rank</th>
              <th>Price</th>
               ${
              this._month["Январь"].map(day => `
             
              
                <td>${day}</td>
               
              
            `).join('')
}
          </tr>
        </thead>
        <tbody>
        
${this.person.map(person => `
         <tr data-id="ew">
                <td>${person.firstName + person.lastName}</td>

              </tr>
          `).join('')
}
        </tbody>
      </table>
      </div>
      <div class="modal-footer">
            <a href="#!" data-action="buy" class="modal-close waves-effect waves-teal btn-flat">Buy</a>
            <a href="#!" data-action="close" class="modal-close waves-effect waves-teal btn-flat">Cancel</a>
          </div>
      </div>

    `;
/*
 let elems = document.querySelectorAll('.modal');
    let instances = M.Modal.init(elems);
*/

  }
}