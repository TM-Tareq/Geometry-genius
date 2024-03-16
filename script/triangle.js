function calculateTriangleArea(){
    // Get triangle base value
    const triangleBaseInput = document.getElementById(triangle-base);
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);

    // Get triangle height
    const triangleHeightInput = document.getElementById(triangle-height);
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);

    // Calculate triangle
    const area = 0.5 * base * height;

    // Display triangle area
    const triangleAreaSpan = document.getElementById(triangle-area);
    triangleAreaSpan.innerText = area;
}