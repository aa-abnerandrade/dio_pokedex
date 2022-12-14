const bttFilter = document.getElementById('discovery__filter__icon');
const divTypes = document.getElementById('discovery__types');
console.log(bttFilter);
console.log(divTypes);
let showTypes = false;


bttFilter.addEventListener('click', function(e) {
    if(!showTypes) {
        divTypes.classList.remove("escondeTypes");
        divTypes.classList.add("animate__flipInX");
        showTypes = true;
    }else {
        divTypes.classList.remove("animate__flipInX");
        divTypes.classList.add("escondeTypes");
        showTypes = false;
    }
})