

export const calculateBmi=(height: number,weight:number):string=>{
    // if(process.argv.length<4){
    //     throw new Error('need more arguments, this calculator only need 2 number!')
    // }else if(process.argv.length>4){
    //     throw new Error('there is too many argument, this calculator only need 2 number!')
    // }else if(isNaN(height) || isNaN(weight)){
    //     throw new Error('height and weight needs to be number')
    // }
    if(isNaN(height) || isNaN(weight)){
        throw new Error('height and weight needs to be number');
    }
    const meterHeight=height/100;
    const ibm=weight/Math.pow(meterHeight,2);
    if(ibm<18.5){
        return 'Underweight';
    }else if(ibm>=18.5 && ibm<=25){
        return 'Normal (healthy weight)';
    }else if(ibm>25 && ibm<=30){
        return 'Overweight';
    }else{
        return 'Obese';
    }
};

// try{
//     console.log(calculateBmi(Number(process.argv[2]),Number(process.argv[3])));
// }catch(err){
    
//     console.log('An error has occured: ',err.message);
// }
