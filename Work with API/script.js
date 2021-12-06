'use strict';
fetch ('https://reqres.in/api/users?per_page=12')
    .then(response => response.json())
    .then(body => {
        console.log('-----------');
        console.log('Пункт №1:')
        console.log('-----------');
        body.data.forEach((item) => console.log(item?.last_name))
        return body;
    })
    .then(body => {
        console.log('-----------');
        console.log('Пункт №2:')
        console.log('-----------');
        // let surnames = [];
        // body.data.forEach(item => surnames.push(item?.last_name));
        // surnames.filter(item => item[0] === 'F').forEach(item => console.log(item));
        body.data.forEach(item => {
            if (item.last_name[0] === 'F') {
                console.log(item);
            }
        })
        return body;
    })
    .then(body => {
        console.log('-----------');
        console.log('Пункт №3:')
        console.log('-----------');
        // let initialValue = '';
       const names = body.data.reduce((accumulator, item) => {
            return accumulator + `${item.first_name} ${item.last_name}, `;
        }, '');
        console.log('Наша база содержит данные следующих пользователей: ' + names.slice(0, -2) + '.');
        return body;
    })
    .then (body => {
        console.log('-----------');
        console.log('Пункт №4:')
        console.log('-----------');
        Object.keys(body.data[0]).forEach(item => console.log(item));
    })

