function calculatePentagonArea() {
    const perimeter = getInputValueId('pentagon-perimeter');
    console.log(perimeter);
    const apothem = getInputValueId('pentagon-apothe');
    console.log(apothem)

    const area = 0.5 * perimeter * apothem;

    setInnerTextId('pentagon-area', area);
}


function getInputValueId(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextId(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}