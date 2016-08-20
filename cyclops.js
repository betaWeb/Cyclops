"use strict"

class Cyclops{

    constructor(options = {}){
        let params = {
            color: 'dark',
            html: 'notif'
            sound: true,
            delay: 1000
        }

        this.options = this.setOptions(params, options);
    }

    setOptions(params, properties) {
      for (let property in properties)
        if (properties.hasOwnProperty(property))
          params[property] = properties[property]

      return params;
    }

}