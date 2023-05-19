(()=>{

    let avangers : number =10;
    console.log(avangers);

    const villians: number = 20;

    if(avangers < villians){
        console.log('Estamos en problemas');
    }else{
        console.log('Nos salvamos');
    }

    avangers = 123;
    avangers = Number('123');
    console.log({avangers});

})()