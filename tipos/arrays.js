"use strict";
(() => {
    // const numbers: (string | number | boolean )[] = [1,2,3,4,5,'6',7,8,9,10];
    const numbers = [1, 2, 3, 4, 5, 7, 8, 9, 10];
    // numbers.push('once');
    const villians = [
        'Omega rojo',
        'Dormammu',
        'Duende verde',
    ];
    villians.forEach(v => console.log(v.toUpperCase()));
    console.log(numbers);
})();
