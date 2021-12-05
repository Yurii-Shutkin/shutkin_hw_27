'use strict';
const bindEmul = function (func, obj, ...rest) {
  return function (...args) {
    const bindEmulKey = 'bindEmul';
    obj.bindEmulKey = func;
    const result = obj.bindEmulKey(...rest.concat(args));
    delete obj.bindEmulKey;
    return result;
  };
};

function hello(phone, email) {
  console.log(`First Name: ${this.name},
               Last Name: ${this.lastName}, 
               Age: ${this.age},
               Tel: ${phone},
               E-mail: ${email}`);
}

const yurii = {
  name: 'Yurii',
  lastName: 'Shutkin',
  age: 25,
};

bindEmul(hello, yurii, '380-99-999-99-99', 'example@mail.com')();
bindEmul(hello, yurii, '380-99-999-99-99')('example@gmail.com');
bindEmul(hello, yurii)('380-99-999-99-99', 'example@gmail.com');

const hiYurii = bindEmul(hello, yurii, '380-99-999-99-99', 'example@mail.com');
hiYurii();
