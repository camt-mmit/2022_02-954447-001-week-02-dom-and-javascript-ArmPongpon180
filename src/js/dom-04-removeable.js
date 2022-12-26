function calculateTotle(container, resultComponent) {
    const inputs = [...container.querySelectorAll('input[type="number"]')];
    const total = inputs.reduce((carry, em) => carry + em.valueAsNumber, 0);

    resultComponent.value = total;
}

function add(container, resultComponent, template) {
    const fragment = template.content.cloneNode(true);
    const title = fragment.querySelector('.cmp-input-title');
    const input = fragment.querySelector('input[type="number"]');

    container.append(fragment);

    const nextN = container.querySelectorAll('input[type="number"]').length;
    title.innerText = `Number ${nextN}`;

    calculateTotle(container, resultComponent);

    input.addEventListener('change', () => {
        calculateTotle(container, resultComponent);
    });
}

function remove (container, resultComponent, inputContainer) {
    inputContainer.remove();

    calculateTotle(container, resultComponent);
}

function assign (container, inputemplate) {
    const inputContainer = container.querySelector('.cmp-inputs-container');
    const resultComponent = container.querySelector('.cmp-result');

    container.addEventListener('click', (ev) => {
        if(ev.target.matches('input[type="number"]')) {
            
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const inputsContainer = document.querySelector('.cmp-inputs-container');
    const resultComponent = document.querySelector('output.cmp-result');
    const template = document.querySelector('template#tmp-input');

    document.querySelector('.cmd-add-input').addEventListener('click', () => {
        add(inputsContainer, resultComponent, template);
    });
    
    add(inputsContainer, resultComponent, template);
});