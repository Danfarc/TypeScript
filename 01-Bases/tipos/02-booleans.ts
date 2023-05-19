const index = (()=>{

    let isSuperman: boolean = true;
    let isBatman: boolean   = false;
    // isSuperman = undefined;
    // console.log(isBatman);
    console.log({isBatman});

    isSuperman = true && false;

    // isSuperman = (isBatman) ? 'ABC' : 'XYZ';
    isSuperman = (isBatman) ? true : false;

    console.log({isSuperman});

})()


