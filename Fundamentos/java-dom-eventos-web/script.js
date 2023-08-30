const dad = document.getElementById('pai');
const father = document.createElement('section')
father.id = 'irmaos'
dad.appendChild(father);

const whereAreYou = document.getElementById('elementoOndeVoceEsta');
const where = document.createElement('section');
where.id = 'filho1'
whereAreYou.appendChild(where);

const firstChild = document.getElementById('primeiroFilhoDoFilho');
const first = document.createElement('section');
first.id = 'primeirofilho1'
firstChild.appendChild(first);

const paiFilho1 = first.parentElement;
const elementoOndeVoceEsta = paiFilho1.parentElement;
console.log(elementoOndeVoceEsta.nextElementSibling);