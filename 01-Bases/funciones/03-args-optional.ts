(()=>{

    // ? es un argumento opcional

    const fullName = (firstName:string, lastName?:string): String =>{
        return ` ${firstName} ${ lastName ||  'no lastname'} `;
    }

    const name = fullName ('Tony');

    console.log({name});

})()