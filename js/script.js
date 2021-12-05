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
  console.log(`First Name: ${this.name}`);
  console.log(`Last Name: ${this.lastName}`);
  console.log(`Age: ${this.age}`);
  console.log(`Tel: ${phone}`);
  console.log(`E-mail: ${email}`);
  console.log('');
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
