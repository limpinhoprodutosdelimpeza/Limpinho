/*-----------------------------------------------------------------------------------------------*/
//Referência de todas as telas
let sectionPromocoes = document.querySelector('section.promocoes');
let sectionHigiene = document.querySelector('section.higiene');
let sectionLimpeza = document.querySelector('section.limpeza');
let sectionAutomotivo = document.querySelector('section.automotivo');

let sectionTelas = [sectionPromocoes,sectionHigiene,sectionLimpeza,sectionAutomotivo];
/*-----------------------------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------------------------*/
//Leitura de dados e preenchimento de telas exibidas
let url = 'dadosprodutos.xml'; //Arquivo a ser lido.

function showTelas(classeElemento,idElemento,tela){ //Exibir a tela clicada no menu
    
    /*-----------------------------------------------------------------------------------------------*/
    //Animação do menu
    let classe_elemento = document.querySelectorAll('span.'+classeElemento);
    let id_elemento = document.querySelector('span#'+idElemento);
    let id_elementoStyle = getComputedStyle(id_elemento);
    let corFonte = id_elementoStyle.color;
    let corFundo = id_elementoStyle.backgroundColor;
    
    classe_elemento.forEach(element => {
        element.style.color = corFonte;
        element.style.backgroundColor = corFundo;
    });

    id_elemento.style.color = corFundo;
    id_elemento.style.backgroundColor = corFonte;
    /*-----------------------------------------------------------------------------------------------*/

    sectionTelas.forEach(sectiontela => {
        sectiontela.style.display = 'none'; //Tira a visibilidade de todas as telas
    });
    let sectionTela = document.querySelector('section.'+tela); //Pega a referência da tela selecionada
    sectionTela.style.display = 'block'; //Torna a tela selecionada visível

    $.ajax(url) //Realiza a leitura do arquivo da variável url
    .done(function(xml){ //Se a leitura for realizada, executa a função passando o xml lido como parâmetro
        switch (tela) {
            case 'higiene':
                if (document.querySelector('div#folhetohigiene').innerHTML == '') { //Verifica se a div está vazia
                    $(xml).find('produto').each(function(){ //Localiza a tag produto no xml e executa a função para cada item encontrado
                        if (`${$(this).find("grupo").text()}` == 'higiene') { //Verifica se a tag grupo do item produto contém 'higiene'
                            $('#folhetohigiene').append(`<div class="produto">
                                                    <img src="${$(this).find("foto").text()}" class="imagemproduto">
                                                    <p class="descricao">${$(this).find("descricao").text()}</p>
                                                    <p class="preco">${$(this).find("preco").text()}</p>
                                                </div>`); //Pega a referência do elemento com id #folhetohigiene e adiciona o conteúdo da função append()
                        }
                    });
                }
                break;
            case 'limpeza':
                if (document.querySelector('div#folhetolimpeza').innerHTML == '') {
                    $(xml).find('produto').each(function(){
                        if (`${$(this).find("grupo").text()}` == 'limpeza') {
                            $('#folhetolimpeza').append(`<div class="produto">
                                                    <img src="${$(this).find("foto").text()}" class="imagemproduto">
                                                    <p class="descricao">${$(this).find("descricao").text()}</p>
                                                    <p class="preco">${$(this).find("preco").text()}</p>
                                                </div>`);
                        }
                    });
                }
                break;
            case 'automotivo':
                if (document.querySelector('div#folhetoautomotivo').innerHTML == '') {
                    $(xml).find('produto').each(function(){
                        if (`${$(this).find("grupo").text()}` == 'automotivo') {
                            $('#folhetoautomotivo').append(`<div class="produto">
                                                    <img src="${$(this).find("foto").text()}" class="imagemproduto">
                                                    <p class="descricao">${$(this).find("descricao").text()}</p>
                                                    <p class="preco">${$(this).find("preco").text()}</p>
                                                </div>`);
                        }
                    });
                }
                break;
            default:
                if (document.querySelector('div#folhetopromocoes').innerHTML == '') {
                    $(xml).find('produto').each(function(){
                        if (`${$(this).find("promocao").text()}`) {
                            $('#folhetopromocoes').append(`<div class="produto">
                                                    <img src="${$(this).find("foto").text()}" class="imagemproduto">
                                                    <p class="descricao">${$(this).find("descricao").text()}</p>
                                                    <p class="preco">${$(this).find("preco").text()}</p>
                                                </div>`);
                        }
                    });
                };
                break;
        }
    })
    .fail(function(){ //Exibe um alerta se a leitura do arquivo falhar
        alert = 'Ocorreu um erro na leitura do arquivo de dados.';
    })
}
/*-----------------------------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------------------------*/
//Garante o preenchimento da tela de promoções quando o site é aberto
window.onload = function() {
    showTelas('menutelas','spantelapromocoes','promocoes');
};
/*-----------------------------------------------------------------------------------------------*/