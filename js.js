const container = document.querySelector('.container');

const para = document.createElement('p');
para.classList.add('para-red');
para.textContent = "Hey I’m red!";
para.style.cssText = 'color: red; text-align: center;';

const head3 = document.createElement('h3');
head3.classList.add('h3-blue');
head3.textContent = "I'm a blue h3!";
head3.style.cssText = 'color: blue; text-align: center;';

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'Text content generated trough JS';
content.style.cssText = 'color: blue; text-align: center;';

const div = document.createElement('div');
div.classList.add('divPink');
div.style.cssText = 'background: pink; border: black 1px solid; text-align: center;'

const h1InDiv = document.createElement('h1');
h1InDiv.textContent = "I'm in a div";
div.appendChild(h1InDiv);

const paraInDiv = document.createElement('p');
paraInDiv.textContent = 'ME TOO!';
div.appendChild(paraInDiv);

// appending multiple childs
container.append(content, para, head3, div);

const btn = document.querySelector('#btn');
btn.onclick = () => { alert('Hello, world!'); };

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', (e) => {
    alert('Hello, world!');
    console.log(e.target); //"<button id="btn2">Click me too 2!</button>"
    console.log(e); // it will display info about the element
});

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        alert(btn.id);
    })
})

