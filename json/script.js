const botonGenerarCombo = document.querySelector('#generarcombo');
let itemList = [];

botonGenerarCombo.addEventListener('click', ()=> {
    generarCombo();
});

fetch('paises.json')
    .then(async paises => itemList = await paises.json());

function generarCombo(){
    const paises = document.querySelector('#paises');
    for( item of itemList){
        const pais = document.createElement('option');
        pais.value = item.value;
        pais.textContent = item.text;
        paises.appendChild(pais);
    }
}