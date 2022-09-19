const URL_REGIOES = 'https://servicodados.ibge.gov.br/api/v1/localidades/regioes';
const URL_ESTADOS = (ID) => `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${ID}/estados`
const URL_CIDADES = (UF) => `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`

fetch(URL_REGIOES)
    .then(response => response.json())
    .then(data => {
        data.map(cadaResult => {
            regiao.innerHTML += `<option value="${cadaResult.id}">${cadaResult.nome}</option>`;
        });

    });

regiao.addEventListener('change', () => {
    estado.innerHTML = "<option> -- Selecione -- </opition>";
    cidade.innerHTML = "<option> -- Selecione -- </opition>";
    fetch(URL_ESTADOS(regiao.value))
        .then(response => response.json())
        .then(dados => {
            dados.map(est => {
                estado.innerHTML += `<option value="${est.id}">${est.nome}</option>`;
            });
            });
});

estado.addEventListener ('change', () =>{
    cidade.innerHTML = "<option> -- Selecione -- </opition>";
    fetch(URL_CIDADES(estado.value))
        .then(response => response.json())
        .then(cid => {
            cid.map(mun => {
                cidade.innerHTML += `<option value="${mun.id}">${mun.nome}</option>`;
            });
            });
});