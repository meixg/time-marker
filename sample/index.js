const {TimeMarker} = require('../dist/index');

const marker = new TimeMarker(['a', 'b', 'c'], data => {
    console.log(data);
});


marker.mark('a');

setTimeout(() => {
    marker.mark('b');
}, 500);
setTimeout(() => {
    marker.mark('c');
}, 1000);

setTimeout(() => {
    marker.mark('c');
}, 2000);
