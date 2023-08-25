const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (fullOrder) => {
  const delivery = fullOrder.order.delivery.deliveryPerson;
  const costumer = fullOrder.name;
  const phoneNumber = fullOrder.phoneNumber;
  const street = fullOrder.address.street;
  const streetnumber = fullOrder.address.number;
  const apnumber = fullOrder.address.apartment;

  return `Olá ${delivery}, entrega para ${costumer}, Telefone: ${phoneNumber}, ${street}, ${streetnumber}, AP:${apnumber}.`

}

console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
  fullOrder.name = 'Luiz Silva';
  fullOrder.payment.toral = 50;

  const pedido = Object.keys(fullOrder.order.pizza).join(', ');

  return `Olá ${fullOrder.name}, o valor total de seu pedido de ${pedido} e ${fullOrder.order.drinks.coke.type} é R$${fullOrder.payment.total},00`;
}

console.log(orderModifier(order));
