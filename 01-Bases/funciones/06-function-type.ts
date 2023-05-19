(()=>{

    // const addNumber = ( a:number, b:number): number =>{
    //     return a + b ;
    // }
    const addNumbers = ( a:number, b:number):number => a + b ;

    const greet = (name:string): string => `Hola ${name}`;

    const saveTheWorld = ():string => `El mundo esta salvado`;

    // let myFunction;
    // let myFunction: Function;
    // let myFunction: (x:number,y:number) => number;
    // let myFunction: (x:string) => string;
    let myFunction: () => string;

    // myFunction = 10;
    // console.log({myFunction});

    // myFunction = addNumbers;
    // console.log(myFunction(1,2));

    // myFunction = greet;
    // console.log(myFunction('Fernando'));

    myFunction = saveTheWorld;
    console.log(myFunction());

})()