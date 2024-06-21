import veiculos from './entidades/Veiculos.mjs'




function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&')
    const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`)
    const results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

const id = getParameterByName('id')
const veiculo = veiculos.find(v => v.id == id)

if (veiculo) {

    const container = document.getElementById('detalhes-interesse')
    const imagem = document.createElement('img')
    imagem.className = 'imagemInteresse'
    imagem.src = veiculo.imagem[0]
    imagem.alt = veiculo.modelo
    
    container.appendChild(imagem)

} else {
    document.getElementById('detalhes-veiculo').textContent = 'Veículo não encontrado'
}