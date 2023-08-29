// 1 *** Altere a cor de fundo do header para rgb(0, 176, 105);

const headColor = document.getElementById ('header-container');
headColor.style.background = 'rgb(0, 176, 105)';

// 2 *** Altere a cor de fundo da div das tarefas que são Urgentes e Importantes para rgb(255, 159, 132);

const urgentAndImportant = document.getElementsByClassName('emergency-tasks')[0];
urgentAndImportant.style.background = 'rgb(255, 159, 132)';

// 3 *** Altere a cor de fundo do título das tarefas que são Urgentes e Importantes para rgb(165, 0, 243);

const urgentAndNotImportant = document.querySelectorAll('.emergency-tasks h3');
for (index = 0; index < urgentAndNotImportant.length; index +=1) {
    urgentAndNotImportant[index].style.backgroundColor = 'rgb(165, 0, 243)';
}

// 4 *** Altere a cor de fundo da div das tarefas que não são Urgentes e Importantes para rgb(249, 219, 94);

const notUrgentAndImportant = document.querySelector('.no-emergency-tasks');
notUrgentAndImportant.style.backgroundColor = 'rgb(249, 219, 94)';

// 5 *** Altere a cor de fundo do título das tarefas que não são Urgentes e Importantes para rgb(35, 37, 37);

const notUrgent = document.querySelectorAll('.no-emergency-tasks h3');
for (index = 0; index < notUrgent.length; index +=1) {
    notUrgent[index].style.background = 'rgb(35, 37, 37)';
}

// 6 *** Altere a cor de fundo do footer para rgb(0, 53, 51).

const baseboard = document.querySelector('#footer-container');
baseboard.style.background = 'rgb(0, 53, 51)';
