module.exports = function toReadable(number) {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    function readableTens(number) {
        if (number < 10) return ones[number];
        else if (number >= 10 && number < 20) return teens[number - 10];
        else {
            return tens[Math.floor(number / 10)] + (number % 10 === 0 ? "" : " ") + ones[number % 10];
        }
    }

    function readableHundreds(number) {
        if (number > 99) {
            return ones[Math.floor(number / 100)] + " hundred" + (number % 100 === 0 ? "" : " ") + readableTens(number % 100);
        } else {
            return readableTens(number);
        }
    }

    function readableThousands(number) {
        if (number >= 1000) {
            return readableHundreds(Math.floor(number / 1000)) + " thousand" + (number % 1000 === 0 ? "" : " ") + readableHundreds(number % 1000);
        } else {
            return readableHundreds(number);
        }
    }

    function convert(number) {
        if (number == 0) return "zero";
        else return readableThousands(number);
    }

    return convert(number);
}
