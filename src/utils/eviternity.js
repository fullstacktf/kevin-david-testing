function eviternity(a, b) {
    for (let index = a; index <= b; index++) {
        if (checkNumber(index)) {
            console.log(index);
        }
    }
}

function checkNumber(num) {
    let numstr = num.toString();

    if (numstr.match("^((?!([0-2,4,6-7,9])).)*$")) {
        const numbers = numstr.split("");
        let q3 = 0;
        let q5 = 0;
        let q8 = 0;
        numbers.forEach((element) => {
            switch (element) {
                case "3":
                    q3++;
                    break;
                case "5":
                    q5++;
                    break;
                case "8":
                    q8++;
                    break;

                default:
                    break;
            }
        });

        if (q8 >= q5 && q5 >= q3) {
            return true;
        } else {
            return false;
        }
    }
}


eviternity(0, 1000);

module.exports = eviternity;