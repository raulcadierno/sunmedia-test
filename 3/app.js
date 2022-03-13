"use strict";

const fakeResponses = [
    { ad: 1, title: 'The first ad' },
    { ad: 2, title: 'The second ad' },
    { ad: 3, title: 'The third ad' },
    { ad: 4, title: 'The forth ad' },
    { ad: 5, title: 'The last ad' },
];

Promise.allSettled(fakeResponses).then(values => 
        setTimeout(() => {
            values.map(value => console.log(value.title))
        }, 2000)) 
    .catch((error) => 
        console.log('Failed to load the ad ' + error.ad))
    .finally(() => 
        console.log('Done!'));