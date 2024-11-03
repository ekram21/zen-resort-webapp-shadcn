import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function fixBangladeshPhoneNumbers(inputNumber: string){

    if (inputNumber){
        const newInput = [];
        for (const x of String(inputNumber)){
            if (isNumber(x)){
                newInput.push(x);
            }
        }

        inputNumber = newInput.join('');

        if ( String(inputNumber).length === 10 && isNumber(inputNumber)){
            inputNumber = `+880${inputNumber}`;
        }
        else if ( String(inputNumber).length === 11 && isNumber(inputNumber)){
            inputNumber = `+88${inputNumber}`;
        }
        else if ((String(inputNumber)).slice(0,3) === '880'){
            inputNumber = '+' + String(inputNumber);
        }
        return inputNumber
    }
    else{
        return inputNumber
    }
}


export function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}



export function encodeString(inputString: string) {

    if (!containsSpecialCharacters(inputString)){
        return inputString
    }
	
	if (!inputString){
		return ''
	}

    return encodeURIComponent(inputString)
    .replace(/!/g, "%21")
    .replace(/'/g, "%27")
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/\*/g, "%2A")
    .replace(/\./g, "%2E")
    .replace(/~/g, "%7E")
    .replace(/%/g, "%");
}

export function decodeString(inputString: string) {

	if (!inputString){
		return ''
	}

    try{
        return decodeURIComponent(inputString);
    }
    catch(e){
        console.log(`Failed to decodeString ${inputString} with error ${e}`);
        return inputString;
    }
}

export function containsSpecialCharacters(inputS: string){
	if(/^[a-zA-Z0-9-%]*$/.test(inputS) === false){
		return true
	}
	else{
		return false
	}
}
