import { Component } from '../Component/Component.js';
import { AddingPerson } from '../AddingPerson/AddingPerson.js';
export class List  extends Component{
  constructor({ element }) {
  	super();
  	this._el = element;
    let activeTeal;
    //localStorage.person = JSON.stringify({name: "John"});
  // if (localStorage.person) this._person = JSON.parse(localStorage.person);
 if (!localStorage.getItem('persons')) {
localStorage.setItem('persons', JSON.stringify({}))
}
 this.persons = {};

 this._render();
  // ;
this._el.addEventListener('click', e => {
      e.preventDefault();
      
 if (e.target.closest('[data-action=add]')) {
   
        this._initAddingPerson();
      }
      
 if (e.target.closest('[data-action=clear]')) {
   
        this._clearList();
      }
 if (e.target.closest('[data-action=clear_item]')) {
   
console.log('this.activeId=', this.activeId);
        this._deleteItem(this.activeId);
      }
      if (e.target.closest('[data-action=u]')) {
       
     //   alert('uiuiu');

 this.close();

      }
        const target = e.target.closest('tbody tr');
    if (!target) return;

    if (activeTeal) {activeTeal.classList.remove('teal')};
    this.activeId = target.dataset.id;
    console.log('this.activeIdEvent=', this.activeId);
      target.classList.add('teal');
      activeTeal = target;
  
})
  }
_deleteItem(id){
   this.newpersons = {};
  this.persons = JSON.parse(localStorage.getItem('persons'));
  delete this.persons[id];
  let keys = Object.keys(this.persons);
  //let  personsLength = Object.keys(this.persons).length;
  let i = 1;
    for(let key of keys) {

    this.newpersons[i] = this.persons[key];
    i++;
}
//delete this.persons[Object.keys(this.persons).length];
//console.log('ключ=', this.persons);

  localStorage.setItem('persons', JSON.stringify(this.newpersons));
  this._render();
}
  _initAddingPerson() {

this.persons = JSON.parse(localStorage.getItem('persons'));
  let firstName = this._el.querySelector('#first_name').value;
  let  lastName = this._el.querySelector('#last_name').value;
   let password = this._el.querySelector('#password').value;
     let email =  this._el.querySelector('#email').value;
this.persons[Object.keys(this.persons).length + 1] = {
      firstName: firstName,
      lastName: lastName,
      password: password,
      email: email}
  localStorage.setItem(`persons`, JSON.stringify(this.persons));
    //console.log(localStorage);
      //console.log(localStorage[password]);

this._render()
    
   // this.close();
}
  _clearList(){
localStorage.setItem('persons', JSON.stringify({}))
this._render()
  }
  close() {
    this._el.querySelector('.modal').classList.remove('open');
  }
  _render() {
    let persons = {};
    let keis = Object.keys(localStorage);
     //console.log('keys', keis);

  //Object.assign(persons, localStorage.getItem(key));

   // console.dir('localStorage=', localStorage.getItem('persons'));
     persons = JSON.parse(localStorage.getItem('persons'));
     //console.log('ключ=', key);
     //console.dir('инфа=', (localStorage.getItem(key)));

    //alert(person);

   // console.dir('инфа=', localStorage);
   // console.log('persons=', persons);
    keis = Object.keys(persons);
    for(let key of keis) {

     //console.log('инфа_persons=', (persons[key]));
}
//${(JSON.parse(item)).firstName}
//
  //

    this._el.innerHTML = `
 
    <h1>Шайшен</h1>

      <table class="data-table highlight"> 
        <thead>
          <tr>
           <th> data-id</th>
              <th>firstName</th>
              <th>lastName</th>
              <th>password</th>
              <th>email</th>
          </tr>
        </thead>
        <tbody>
               
 
                       
                       ${keis.map(item => `
                          <tr data-id="${item}">
                            <td>${item}</td>
                            <td>${persons[item].firstName}</td>
                            <td>${persons[item].lastName}</td>
                            <td>${persons[item].password}</td>
                            <td>${persons[item].email}</td>

                          </tr>
                        `).join('')
                     }
                       
                </tbody>
      </table>
      
    <a class="waves-effect waves-light btn modal-trigger" href="#modal2">Добавить</a>
     <a href="#!" data-action="clear" class="modal-close waves-effect waves-green btn">Очистить</a>

     <a href="#!" data-action="clear_item" class="modal-close waves-effect waves-green btn">Удалить его</a>
        <div id="modal" data-element="adding"></div>  
    <div id="modal2" class="modal">
    <div class="modal-content">
      <h4>добавление</h4>
      <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" class="validate">
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate">
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate">
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          This is an inline input field:
          <div class="input-field inline">
            <input id="email_inline" type="email" class="validate">
            <label for="email_inline">Email</label>
            <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
          </div>
        </div>
      </div>
    </form>
  </div>
    </div>
    <div class="modal-footer">
      <a href="#!" data-action="add" class="modal-close waves-effect waves-green btn">Добавить</a>

    </div>
</div>
    `;

   let elems = document.querySelectorAll('.modal');
    let instances = M.Modal.init(elems);

  }

/*

<tbody>

                  ${
                    localStorage.person.length === 0
                      ? ''
                      : `
                        ${localStorage.person.map(item => `
                          <tr data-id="${item.id}">
                              <td>${item.firstName}</td>
                              <td>${item.lastName}</td>
                              <td>${item.password}</td>
                              <td>${item.email}</td>
                          </tr>
                        `).join('')}
                      `
                  }
                </tbody>

*/

}