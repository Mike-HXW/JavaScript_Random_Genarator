let name = document.getElementById("nameInput");
let button = document.getElementById("button");
let output = document.getElementById("output");
let fortunes = [
        'You will have a nice day!',
        'You will be happy an entire day!',
        'You will meet someone you miss a lot!',
        'You will be lucky for all days long!',
        'You will overcome any difficulties you meet!',
        'You will meet the uncertainty that can change your days!',
        'You will get your efforts paid back pretty soon!'
    ];

button.addEventListener("click",function(){
    let current_input = name.value;
    generate(current_input);
    restyle();
});

function generate(incUserInput) {
    var rand_index = Math.floor(Math.random() * fortunes.length)
    console.log(rand_index);
    var fortune_select = fortunes[rand_index];
    output.innerText = incUserInput + ", your fortune is: " + fortune_select;
}

function restyle() {
    const colors = ['blue', 'orange', 'purple', 'green', 'brown'];
    const fonts = ['20px', '25px', '30px', '35px', '40px'];
    const fontstyle = ['normal','italic'];

    output.style.color = colors[Math.floor(Math.random() * colors.length)];
    output.style.fontSize = fonts[Math.floor(Math.random() * fonts.length)];
    output.style.fontStyle = fontstyle[Math.floor(Math.random() * fontstyle.length)];
}

