// Creating HTML Tags using javascript

// const heading=document.createElement('h1');
// heading.innerHTML='Hello World, Namaste Javascript';
// const divElement=document.getElementById('container');
// divElement.appendChild(heading);

// Hello world in React
// const heading=React.createElement('h1', {id:'title'}, 'Hello World, Namaste React');   
// const divElement=ReactDOM.createRoot(document.getElementById('container'));
// divElement.render(heading);

// creating the nested div structure
const parent=React.createElement('div', {id:'parent'},[
React.createElement('div',{id:'child'},[
React.createElement('h1', {id:'heading1'},'Heading 1'),
React.createElement('h2', {id:'heading2'},'Heading 2'),
]),
React.createElement('div',{id:'child2'},[
React.createElement('h1', {id:'heading1'},'Heading 1'),
React.createElement('h2', {id:'heading2'},'Heading 2'),
]),
]); 
container=ReactDOM.createRoot(document.getElementById('container'))
container.render(parent);