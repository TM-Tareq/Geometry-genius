// function calculateParallelogramArea() {
//     // const baseInput = document.getElementById('parallelogram-base');
//     // const baseText = baseInput.value;
//     // const base = parseFloat(baseText);
//     // console.log(base);

//     const base = getParallelogram();
//     console.log(base);
// }

// function getParallelogram() {
//     const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     return base;
// }

function calculateParallelogramArea() {
    const base = getInputValueId('parallelogram-base');
    const height = getInputValueId('parallelogram-height');

    const area = base * height;

    setInnerTextById('parallelogram-area', area);

}

function getInputValueId(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue;
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}