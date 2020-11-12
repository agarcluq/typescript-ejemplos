// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

//enum color{red=4,green,blue};
//enum color{red=4,green=4,blue};
enum color{red,green=2,blue};
console.log(color)