(()=>{

    const batman:string = 'Batman';
    const linternaVerde:string = "linterna's Verde";
    const volcanNegro:string = `linterna's Verde`;

    const abc = 123;

    console.log(`i'm ${batman}, ${abc.toString()}`);
    console.log( batman.toUpperCase() );
    // console.log(batman[10].toUpperCase()); // Error
    console.log(batman[10]?.toUpperCase() || 'No esta presente'); 


})()