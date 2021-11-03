const botonAgregarValor = document.querySelector('#agregarvalor');
const botonGenerarCombo = document.querySelector('#generarcombo');
const itemList = [];

botonAgregarValor.addEventListener('click', ()=> {
    agregarValorALaLista();
});

botonGenerarCombo.addEventListener('click', ()=> {
    generarCombo();
});

function agregarValorALaLista() {
    const value = document.querySelector('#nuevopais').value;
    const text = value.toUpperCase();
    itemList.push({ text, value });
    document.querySelector('#nuevopais').value = '';
    console.log("Valor agregado");
    console.table({ text, value });
}

function generarCombo(){
    const paises = document.querySelector('#paises');
    for( item of itemList){
        const pais = document.createElement('option');
        pais.value = item.value;
        pais.textContent = item.text;
        paises.appendChild(pais);
    }
}