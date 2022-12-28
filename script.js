//your code here
let text = document.getElementById('evaluatedText');
let letterCount = document.getElementById('letterCount');

text.addEventListener('keyup',(e) => {
    if(e.key !== "Escape"){
        
    }
    let str = text.value;
    letterCount.innerHTML = str.length;
    console.log(str.length);
})

