# tmarker

mark sequence time easily.

## quick start

```javascript
import {TimeMarker} from 'tmarker';

const marker = new TimeMarker(['a', 'b', 'c'], data => {
    console.log(data);
});

marker.mark('a');
setTimeout(() => {
    marker.mark('b');
}, 500);
setTimeout(() => {
    marker.mark('c'); // callback get { b: 507, c: 1003 }
}, 1000);
```
