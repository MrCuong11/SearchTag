var content = document.querySelector('.content');
var input = document.querySelector('.content input');
var btnRemoveAll = document.querySelector('.removeAll');

var tags = ['javascript', 'nodeJs'];

function render() {
    content.innerHTML= '';
    var i=0;
    tags.forEach(element => {
        content.innerHTML += `<li>
                ${element}
                <i class="fa-solid fa-xmark" onclick="removeTag(${i})"></i>
            </li>`
        i++;
    });
    content.appendChild(input);
    input.focus();
}
function removeTag(index) {
    tags.splice(index, 1);
    render();
}

render();

input.addEventListener('keydown',(e)=>{
    if(e.key == 'Enter'){
        tags.push(e.target.value.trim());
        render();
        input.value = '';
    }
})

btnRemoveAll.addEventListener('click', ()=>{
    tags = [];
    render();
})

