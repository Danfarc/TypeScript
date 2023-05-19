function printToConsole( construtor: Function ){
console.log(construtor);
}

const printToConsoleCOnditional = ( print:boolean = false):Function => {
    if(print){
        return printToConsole;
    }else{
        return () => {};
    }  
}

const bloquearPrototipo = function( construtor: Function){
    Object.seal( construtor )
    Object.seal( construtor.prototype )
}

function CheckValidPokemonId(){
    return function( target:any, propertyKey:string, descriptor: PropertyDescriptor ){
        // descriptor.value = ()=>console.log('Hola mundo');
        // console.log({target, propertyKey, descriptor})
        const originalMethod = descriptor.value;
        descriptor.value = (id:number)=> {
            console.log(`ID: ${id}`)
            if (id < 1 || id > 850){
                return console.error('El id del pokemon debe de estar entre 1 y 850');
            }else{
                return originalMethod(id);
            }
        }

    }
}

// Los Decoradores devuelven una funcion
function readonly( isWriteble: boolean = true):Function{
    return  function(target:any, propertyKey:string){ 
        //console.log({target, propertyKey});

        const descriptor: PropertyDescriptor = {
            get(){
                //console.log(this)
                return 'Daniel'
            },
            set(this,val){
                //console.log(this,val);
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWriteble,
                    //enumerable:false
                })
            }
        }
        return descriptor;
    
    }
}


@bloquearPrototipo
@printToConsoleCOnditional( false )
export class Pokemon {

    @readonly(false)
    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name: string
    ){}

    @CheckValidPokemonId()
    savePokemonToDB(id:number){
        console.log(`Pokemon guardo en DB ${id}`);
    }
}

