(() => {

    //Interface

    type Avengers = {
        nick: string;
        iroman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }
    // Objeto
    const avengers: Avengers = {
        nick: 'Samuel L. Jacson',
        iroman: 'Rober Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.163546
    }

    // const {poder, vision} = avengers ;
    // console.log(poder.toFixed(2) , vision.toUpperCase() );

    //const printAvenger = (avengers: Avengers) => {
    const printAvenger = ({iroman, ...resto}: Avengers) => {
        //console.log(avengers.vision);
        console.log(iroman, resto);
    }

    // printAvenger(avengers);

    const avengersArr: string[] = ['Cap. Americo','Iroman', 'Hulk' ];

    //const iroman = avengersArr[1];
    const [ capitan , iroman ,] = avengersArr;
    console.log({iroman, capitan});

})()
