import veiculos from './entidades/Veiculos.mjs'



document.getElementById('redirecionarCarro').addEventListener('click', function() {
    document.getElementById('veiculos').scrollIntoView({ behavior: 'smooth' })
})
document.getElementById('redirecionarMoto').addEventListener('click', function() {
    const offset = 1700; 
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
});

const container = document.getElementById('veiculos')

veiculos.forEach(veiculo => {
    const cardVeiculo = document.createElement('div')
    cardVeiculo.className = "card-veiculo"

    const imagem = document.createElement('img')
    imagem.src = veiculo.imagem[0] 
    imagem.alt = veiculo.modelo

    const detalhes = document.createElement('div')
    detalhes.className = "detalhes"

    const modelo = document.createElement('h2')
    modelo.textContent = veiculo.modelo

    const quilometragem = document.createElement('p')
    quilometragem.textContent = veiculo.quilometragem

    const preco = document.createElement('p')
    preco.textContent = veiculo.preco

    const categoria = document.createElement('p') 
    categoria.textContent = veiculo.categoria

    detalhes.appendChild(modelo)
    detalhes.appendChild(preco)
    detalhes.appendChild(categoria)
    detalhes.appendChild(quilometragem)

    cardVeiculo.appendChild(imagem)
    cardVeiculo.appendChild(detalhes)

    cardVeiculo.addEventListener('click', () => {
        window.location.href = `Veiculo_Detalhes.html?id=${veiculo.id}`
    })

    container.appendChild(cardVeiculo)
})