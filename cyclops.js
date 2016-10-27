'use strict'

class Cyclops{

    constructor(options = {}) {
        let params = {
            selector: '.cyclops',
        }

        this.options = this.setOptions(params, options);
    }

    notification(title, message, type='default') {
        // Without jQuery dependency (perhaps require polyfills for querySelectorAll and classList)
        let _elms = document.querySelectorAll(this.options.selector);
        
        Array.prototype.forEach.call(_elms, (_elm) => {
            let _notif = document.createElement('div');
            let _title = document.createElement('h2');
            let _message = document.createElement('p');
            
            _title.textContent = title;
            _message.textContent = message;
            
            _notif.classList.add('notif', type);
            _notif.appendChild(_title);
            _notif.appendChild(_message);
            
            _elm.appendChild(_notif);
        });
    }

    info(title, message){
        this.notification(title, message, 'info')
    }

    success(title, message){
        this.notification(title, message, 'success')
    }

    warning(title, message){
        this.notification(title, message, 'warning')
    }

    error(title, message){
        this.notification(title, message, 'error')
    }

    setOptions(params, properties) {
      for (let property in properties)
        if (properties.hasOwnProperty(property))
          params[property] = properties[property]

      return params;
    }
}
