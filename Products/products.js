import { denimStyles } from '../denimStyles.js';
import { createDenimStyleLi } from '../utils.js';

const ul = document.querySelector('.denims-list');

for (let denimStyle of denimStyles) {
    const li = createDenimStyleLi(denimStyle);

    ul.append(li);
}

