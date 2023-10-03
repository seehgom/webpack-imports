const inputElement = document.getElementById('sum_input');
const resultsElement = document.getElementById('results');

inputElement.onfocus = async () => {
	const {onkeyup} = await import('./interactivity/sum');
	inputElement.onkeyup = onkeyup(resultsElement);
}