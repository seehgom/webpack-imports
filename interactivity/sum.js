import {isEmpty, isNil, reduce} from "lodash-es"

const sum = (inputString) => {
	if (isNil(inputString) && isEmpty(inputString)) return 0;
	const numberToSum = inputString.split(' ');
	return reduce(numberToSum, (sum, current) => sum + +current, 0);
}
export const onkeyup = (resultsElement) => (inputEvent) => {
	resultsElement.innerText = sum(inputEvent.target.value);
}
