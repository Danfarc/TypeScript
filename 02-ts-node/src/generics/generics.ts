export const printObject = (argument:any)=>{
    console.log(argument);
}

export function genericFuntion<T>(argument:T):T {
    return argument;
}

export const genericFunctionArrow = <T>(argument: T):T => {
    return argument;
}

export const  genericFuntionArrowShort = <T>(argument: T) => argument;