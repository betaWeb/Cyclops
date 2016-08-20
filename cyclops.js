'use strict'

class Cyclops{

    constructor(options = {}) {
        let params = {
            html: '.cyclops',
        }

        this.options = this.setOptions(params, options);
    }

    notification(title, message, type='default') {
        $(this.options.html).append('<div class="notif '+ type+'">\
            <h2>'+ title +'</h2>\
            <p>'+ message +'</p>\
        ');
    }

    success(title, message){
        this.notification(title, message)
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