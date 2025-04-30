function calculateRhombusArea() {
    const rhombusd1 = getInputValueId('rhombus-d1');
    const rhombusd2 = getInputValueId('rhombus-d2');
    const area = 0.5 * rhombusd2 * rhombusd1;
    setInnerTextById('rhombus-area', area);
}