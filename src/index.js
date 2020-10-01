module.exports = function toReadable(number) {
    if (number === 0) return "zero";
    let strNum = number.toString();
    let arrNum = strNum.split("");
    let humanReadable = "";

    if (arrNum.length === 3) {
        switch (arrNum[0]) {
            case "1":
                humanReadable += "one";
                break;
            case "2":
                humanReadable += "two";
                break;
            case "3":
                humanReadable += "three";
                break;
            case "4":
                humanReadable += "four";
                break;
            case "5":
                humanReadable += "five";
                break;
            case "6":
                humanReadable += "six";
                break;
            case "7":
                humanReadable += "seven";
                break;
            case "8":
                humanReadable += "eight";
                break;
            case "9":
                humanReadable += "nine";
                break;
            default:
                break;
        }
        if (arrNum.length === 3) humanReadable += " hundred ";
        arrNum.shift();
    }

    if (arrNum.length === 2) {
        switch (arrNum[0]) {
            case "0":
                humanReadable = humanReadable.slice(0, -1);
                break;
            case "1":
                switch (arrNum[1]) {
                    case "0":
                        humanReadable += "ten";
                        break;
                    case "1":
                        humanReadable += "eleven";
                        break;
                    case "2":
                        humanReadable += "twelve";
                        break;
                    case "3":
                        humanReadable += "thirteen";
                        break;
                    case "4":
                        humanReadable += "fourteen";
                        break;
                    case "5":
                        humanReadable += "fifteen";
                        break;
                    case "6":
                        humanReadable += "sixteen";
                        break;
                    case "7":
                        humanReadable += "seventeen";
                        break;
                    case "8":
                        humanReadable += "eighteen";
                        break;
                    case "9":
                        humanReadable += "nineteen";
                }
                return humanReadable;
            case "2":
                humanReadable += "twenty";
                break;
            case "3":
                humanReadable += "thirty";
                break;
            case "4":
                humanReadable += "forty";
                break;
            case "5":
                humanReadable += "fifty";
                break;
            case "6":
                humanReadable += "sixty";
                break;
            case "7":
                humanReadable += "seventy";
                break;
            case "8":
                humanReadable += "eighty";
                break;
            case "9":
                humanReadable += "ninety";
                break;
            default:
                break;
        }
        if (arrNum[1] === "0") {
            return humanReadable;
        } else {
            humanReadable += " ";
            arrNum.shift();
        }
    }

    switch (arrNum[0]) {
        case "0":
            humanReadable.slice(0, -1);
            break;
        case "1":
            humanReadable += "one";
            break;
        case "2":
            humanReadable += "two";
            break;
        case "3":
            humanReadable += "three";
            break;
        case "4":
            humanReadable += "four";
            break;
        case "5":
            humanReadable += "five";
            break;
        case "6":
            humanReadable += "six";
            break;
        case "7":
            humanReadable += "seven";
            break;
        case "8":
            humanReadable += "eight";
            break;
        case "9":
            humanReadable += "nine";
            break;
        default:
            break;
    }

    return humanReadable;
};
