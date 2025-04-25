

//Get the id of button 'No'
const btnNo = document.getElementById('BtnNo');

//Get the id of button 'No
const btnYes = document.getElementById('BtnYes');

btnNo.addEventListener('touchstart', function () {
    
    //Get the position and size of my button 'Yes'
    const btnYesRect = btnYes.getBoundingClientRect();
    
    //Set variables for their width and height
    let X, Y;
    
    //Get the size of my button 'Yes'
    const btnWidth = btnNo.offsetWidth;
    const btnHeight = btnNo.offsetHeight;

    // Try generate a pisition that doesn't overlap
    do {
        X = Math.random() * (window.innerWidth - btnWidth);
        Y = Math.random() * (window.innerHeight - btnHeight);
    } while (
        X < btnYesRect.right &&
        X + btnWidth > btnYesRect.left &&
        Y < btnYesRect.bottom &&
        Y + btnHeight > btnYesRect.top
    );

    btnNo.style.position = 'absolute';
    btnNo.style.left = X + 'px';
    btnNo.style.top = Y + 'px';
});

// Event for button 'Yes'
btnYes.addEventListener('click', function () {
    window.location.href = 'BtnYes.html';
});