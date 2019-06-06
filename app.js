const addForm = document.querySelector('.add');
const ul = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateItem = item => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="item pointer">${item}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    ul.innerHTML += html;
};

addForm.addEventListener('submit', e  => {
    e.preventDefault();
    const item = addForm.add.value.trim();
    if(item.length){
        generateItem(item);
    };
    addForm.reset();
});

ul.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }else if(e.target.classList.contains('item')){
        e.target.classList.toggle('done'); 
    }
});

const filterTodos = (term) => {
    Array.from(ul.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(ul.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
}

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});



