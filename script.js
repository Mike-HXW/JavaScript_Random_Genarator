function generate() {
    const name = document.getElementById('nameInput').value.trim();
    if (!name) {
        document.getElementById('output').innerText = 'Please enter your name.';
        return;
    }

    const fortunes = [
        'You will have a nice day!',
        'You will meet someone you miss a lot!',
        'You will be lucky for all days long!',
        'You will overcome any difficulties you meet!',
        'You will meet the uncertainty that can change your days!',
        'You will get your efforts paid back pretty soon!'
    ];

    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    document.getElementById('output').innerText = `${name}, your fortune is: ${randomFortune}`;
    restyle();
}

function restyle() {
    const output = document.getElementById('output');
    const colors = ['blue', 'orange', 'purple', 'light-green', 'brown'];
    const fonts = ['20px', '25px', '30px', '35px', '40px'];
    const fontStyles = ['italic', 'normal', 'oblique', 'bold', 'lighter'];

    output.style.color = colors[Math.floor(Math.random() * colors.length)];
    output.style.fontSize = fonts[Math.floor(Math.random() * fonts.length)];
    output.style.fontStyle = fontStyles[Math.floor(Math.random() * fontStyles.length)];
}
