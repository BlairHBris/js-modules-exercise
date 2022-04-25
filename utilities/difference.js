import difference from "lodash"

const _ = require("lodash")

export function differenceFinder (array1, array2) {
    const result = _.difference(array1, array2)
    const result1 = _.difference(array2, array1)
    return ('The difference betweeen ' + array1 + ' and ' + array2 + ' is ' + result + ',' + result1)
}