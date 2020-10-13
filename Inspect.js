'use strict'

function inspect(obj) {

    for (let key in obj) 
    {
       console.log(key + ": " + obj[key])

       if(typeof obj[key] == 'function')
       {
        const objAux = obj
        objAux.GetNumberOfArguments = function() { return arguments.length }

        if(objAux.GetNumberOfArguments() == 0){
            console.log(obj[key]())
        }
       }
  	}
}
