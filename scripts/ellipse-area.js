function calculateEllipseArea() {
    const majorRadius = getInputValueId('ellipse-major-radius');
    const minorRadius = getInputValueId('ellipse-minor-radius');
    const area = 3.14 * minorRadius * majorRadius;
    setInnerTextById('ellipse-area', area);
}