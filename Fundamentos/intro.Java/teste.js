const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
}

const position = (object, index) => Object.values(object)[index];
console.log(position(school, 0));


const students = (object) => {
  let count = 0;
  for (let index = 0; index < object.lessons.length; index += 1) {
    count += object.lessons[index].students;
  }
  return count;
}
console.log(students(school));


const verify = (obj, key) => {
  for (let index = 0; index < obj.lessons.length; index += 1) {
    if (obj.lessons[index][key] === undefined) {
      return false;
    }
  }
  return true;
}
console.log(verify(school, 'nota')); 



const changeshift = (object, course, value) => {
  let findCourse;
  for (let index = 0; index < object.lessons.length; index += 1) {
    let element = object.lessons[index];
    if (element.course === course) {
      findCourse = element;
      break;
    }
  }


  if (findCourse !== undefined) {
    findCourse.shift = value;
    return findCourse;
  } else {
    return 'Curso não encontrado.';
  }
};

console.log(changeshift(school, 'Python', 'Noite'));