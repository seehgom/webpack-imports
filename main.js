import {onkeyup} from "./interactivity/sum";

const inputElement = document.getElementById('sum_input');
const resultsElement = document.getElementById('results');

inputElement.onkeyup = onkeyup(resultsElement);
