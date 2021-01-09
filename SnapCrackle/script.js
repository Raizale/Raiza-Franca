function snapCrackle(maxValue) {
    let status = ""

    for (index = 1; index <= maxValue; index++) {


        if (index % 2 != 0) {
            status = status + "Snap";

        }
        if (index % 5 == 0) {
            status = status + "Crackle";

        }

        if (index % 2 == 0 && index % 5 != 0) {
            status += index
        }

        if (index < maxValue) {
            status = status + ", "
        }

    }
    console.log(status);
}
snapCrackle(12)





function isPrime(number) {
    for (var index = 2; index < number; index++)
    if (number % index === 0) return false;
    return number !== 1

    
} 

function SnapCracklePrime(maxValue) {
    let status = ""

    for (index = 1; index <= maxValue; index++) {


        if (index % 2 != 0) {
            status = status + "Snap";

        }
        if (index % 5 == 0) {
            status = status + "Crackle";

        }
        if (isPrime(index)) {
            status = status + "Prime";
            
        }

        if (index % 2 == 0 && index % 5 != 0 && !isPrime(index)) {
            status += index;
        }

        if (index < maxValue) {
            status = status + ", ";
        }

    }
    console.log(status);
}
SnapCracklePrime(15)


//snapCrackle(12) deve mostrar a string Snap, 2, Snap, 4, SnapCrackle, 6, Snap, 8, Snap, Crackle, Snap, 12.
//Snap,Prime, SnapPrime, 4, SnapCracklePrime, 6, SnapPrime, 8, Snap, Crackle, SnapPrime, 12, SnapPrime, 14, SnapCrackle.