const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Software Engineer',
};

const addProperty = (object, key, value) => {
  if (typeof object[key] === "undefined") {
    object[key] = value;
  }
};

addProperty (customer, 'email', 'robertinhoengineer.com');
addProperty (customer, 'fone', '9483s7493');
addProperty (customer, 'userGithub', 'robertohub');
addProperty (customer, 'linkedIn', 'Roberto The Engineer');

console.log(customer)

