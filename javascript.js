let sectionPromocoes = document.querySelector('section.promocoes');
let sectionHigiene = document.querySelector('section.higiene');
let sectionLimpeza = document.querySelector('section.limpeza');
let sectionAutomotivo = document.querySelector('section.automotivo');

let sectionTelas = [sectionPromocoes,sectionHigiene,sectionLimpeza,sectionAutomotivo];

function showTelas(tela){ //Exibir a tela clicada no menu
    sectionTelas.forEach(sectiontela => {
        sectiontela.style.display = 'none';
    });
    let sectionTela = document.querySelector('section.'+tela);
    sectionTela.style.display = 'block';
}