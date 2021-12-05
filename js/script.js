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

function personInfo(phone, email) {
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

const ivan = {
  name: 'Ivan',
  lastName: 'Ivanov',
  age: 20,
};

const elon = {
  name: 'Elon',
  lastName: 'Musk',
  age: 50,
};

bindEmul(personInfo, yurii, '380-99-999-99-99', 'example@mail.com')();
bindEmul(personInfo, ivan, '380-88-888-88-88')('example@vanya.com');
bindEmul(personInfo, elon)('380-12-345-67-89', 'example@musk.com');

const yuriiInfo = bindEmul(personInfo, yurii, '380-99-999-99-99', 'example@mail.com');
yuriiInfo();
