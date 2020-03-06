module.exports = function toReadable(number) {
    const readableNumber = {
        '0': ['zero'],
        '1': ['one'],
        '2': ['two', 'twenty'],
        '3': ['three', 'thirty'],
        '4': ['four', 'forty'],
        '5': ['five', 'fifty'],
        '6': ['six', 'sixty'],
        '7': ['seven', 'seventy'],
        '8': ['eight', 'eighty'],
        '9': ['nine', 'ninety'],
        '10': ['ten'],
        '11': ['eleven'],
        '12': ['twelve'],
        '13': ['thirteen'],
        '14': ['fourteen'],
        '15': ['fifteen'],
        '16': ['sixteen'],
        '17': ['seventeen'],
        '18': ['eighteen'],
        '19': ['nineteen']
    }

    let strNumber = String(number)
    let str = ''

    if (number < 1000 && number >= 100) {
        str = readableNumber[strNumber.slice(0,1)][0] + ' hundred '
        if (strNumber.slice(1,2) !== '0') {
            str += (readableNumber[strNumber.slice(1)] ? readableNumber[strNumber.slice(1)][0] : (readableNumber[strNumber.slice(1,2)][1] + (
                readableNumber[strNumber.slice(2)][0] === 'zero' ? '' : ' ' + readableNumber[strNumber.slice(2)][0]
            )))
        } else if (strNumber.slice(2) !== '0') {
            str += readableNumber[strNumber.slice(2,3)][0]
        }
    } else if (number < 100 && number > 19) {
        str += (readableNumber[strNumber] ? readableNumber[strNumber][0] : (readableNumber[strNumber.slice(0,1)][1] + (
            readableNumber[strNumber.slice(1)][0] === 'zero' ? '' : ' ' + readableNumber[strNumber.slice(1)][0]
        )))
    } else {
        str += readableNumber[strNumber][0]
    }

    return str.trim()

}
