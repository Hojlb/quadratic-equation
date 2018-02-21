module.exports = function solveEquation(equation) {
    let arr = equation.split(' '); //["-20", "*", "x^2", "-", "108797540", "*", "x", "-", "130011773690520"]
    let number = []; //["-20", "-", "108797540", "-", "130011773690520"]
    let a = 0, b = 0, c = 0;
    let D;
    let x = [];

    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== '*' && arr[i] !== 'x^2' && arr[i] !== 'x' && arr[i] !== 'x' ){
            number.push( arr[i] );
        }
    }

    a = +number[0];

    if( number[1] == '-' ) {
        b = -number[2];
    } else {
        b = number[2];
    }

    if( number[3] == '-' ) {
        c = -number[4];
    } else {
        c = number[4];
    }

    D = b * b - 4 * a * c;

    x.push( ((-b + Math.sqrt(D))/(2*a)).toFixed(0) );
    x.push( ((-b - Math.sqrt(D))/(2*a)).toFixed(0) );

    return x.sort( (a, b) => a - b );
}
