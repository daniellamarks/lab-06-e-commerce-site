import { denimStyles } from '../denimStyles.js';
import { createDenimStyleLi } from '../utils.js';

console.log(denimStyles);

const ul = document.querySelector('.denims-list');

for (let denimStyle of denimStyles) {
    const li = createDenimStyleLi(denimStyle);

    ul.append(li);
}

