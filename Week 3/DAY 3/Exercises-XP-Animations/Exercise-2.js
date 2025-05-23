function myMove() {
    const animate = document.getElementById('animate');
    const container = document.getElementById('container');
    const containerWidth = container.offsetWidth;
    const boxWidth = animate.offsetWidth;
    
    // position
    let pos = 0;
    
    // move box
    const id = setInterval(frame, 1);
    
    function frame() {
        // stop at container end
        if (pos >= containerWidth - boxWidth) {
            clearInterval(id);
        } else {
            // move 1px right
            pos++;
            animate.style.left = `${pos}px`;
        }
    }
}
