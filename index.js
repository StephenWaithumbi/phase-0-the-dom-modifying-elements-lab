// Write your code here!
let noMain = document.querySelector('main');
noMain.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = "Steven is the champion"
document.body.append(newHeader);

