import _ from 'lodash';
import myName from 'myName';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    
    element.innerHTML = myName('Peter');
  
    return element;
  }
  
  document.body.appendChild(component());