const arrayOne = [1, 2, 3]
const arrayTwo = [2, 3, 4]

import { differenceFinder } from "./utilities/difference"


const result = document.querySelector('#Result')

result.textContent = differenceFinder(arrayOne, arrayTwo)