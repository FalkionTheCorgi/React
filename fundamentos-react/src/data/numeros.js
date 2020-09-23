function sortear(){

    let array = [];

    var aux = 0;
        while(aux < 6){
            var number = parseInt(Math.random() * (100 - 1) + 1);
            if(!array.includes(number)){
                array.push( number );
                aux++;
            }
        }

    array.sort();
    return array;
}

export default sortear();