const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
// const h1 = document.querySelectorAll('h1')
// const h2 = document.querySelectorAll('h2')

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        const color = e.target.id;

        switch (color) {
            case 'grey':
                body.style.backgroundColor = 'grey';
                break;
            case 'white':
                body.style.backgroundColor = 'white';
                body.style.color = 'black';
                // h2.style.color = 'black' ;
                break;
            case 'blue':
                body.style.backgroundColor = 'blue';
                body.style.color = 'black';
                // h2.style.color = 'black';
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow';
                body.style.color = 'black';
                // h2.style.color = 'black';
                break;
            default:
                body.style.backgroundColor = 'inherit'; // Reset to default
                body.style.color = 'inherit';
        }
    });
});