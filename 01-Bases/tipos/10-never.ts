(()=>{

    // Funcion que termina con un error

    const error = ( message:string ):never=>{
        throw new Error(message)
    }

    error('Auxilio');

})()