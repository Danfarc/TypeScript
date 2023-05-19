(()=>{

    ////    NUNCA USAR ANY
    let avenger: any =123;
    // let avenger: number;
    // let avenger: string;
    // const exists; // Toda constante debe de esta inicializada
    let exists;
    let power;

    avenger = 'Dr Strange';
    // console.log( avenger.charAt(0) );
    console.log( (avenger as string).charAt(0) );

    avenger = 150.234;
    // console.log(avenger.toFixed(2));
    console.log((<number>avenger).toFixed(2));

    console.log(exists);
    console.log(power);


})()