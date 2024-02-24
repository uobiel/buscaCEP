const buttonShearch = document.querySelector("#search");

buttonShearch.addEventListener('click', async function(){
    const cep = document.querySelector("#cep").value;
    const campoResultado = document.querySelector('#result');
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        campoResultado.innerHTML = 
           `<p>CEP: <strong>${data.cep}</strong></p>
            <p>Rua: <strong>${data.logradouro}</strong></p>
            <p>Bairro: <strong>${data.bairro}</strong></p>
            <p>Cidade: <strong>${data.localidade}</strong></p>
            <p>Estado: <strong>${data.uf}</strong></p>
            <p>DDD: <strong>${data.ddd}</strong></p>`;

        campoResultado.style.display = 'flex';

    } catch (error) {
        campoResultado.innerHTML = `CEP não encontrado!`;
    }
})