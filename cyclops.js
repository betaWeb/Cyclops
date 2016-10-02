'use strict'

class Cyclops{

    constructor(options = {}) {
        let params = {
            selector: '.cyclops',
        }

        this.options = this.setOptions(params, options);
    }

    notification(title, message, type='default') {
        $(this.options.selector).append('<div class="notif '+ type+'">\
            <h2>'+ title +'</h2>\
            <p>'+ message +'</p>\
        ');
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