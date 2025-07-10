let dados_post = JSON.parse(localStorage.getItem('posts')) || [];
const botao_post = document.getElementById('postar');
const input = document.getElementById('input');

botao_post.addEventListener('click', async () => {
    const post = input.value.trim();
    const dataseparada = separadata();
    const fotogato = await carregafotogatinho();

    dados_post.unshift({
        nome_usuario: 'nome de usuario',
        avatar: "Imagens/imagen-usuario.png",
        data: dataseparada,
        texto: post,
        foto_post: fotogato,
        likes: 0,
    });

    input.value = ""
    renderizar();
});

function darlike(indice) {
    dados_post[indice].likes++;
    renderizar();
}

async function carregafotogatinho() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    return data[0].url;
}

function separadata() {
    const newdate = new Date();
    const dia = newdate.getDate();
    const mes = newdate.getMonth() + 1; // Meses são de 0 a 11, então adicionamos 1
    const ano = newdate.getFullYear();
    const fulldate = `${dia}/${mes}/${ano}`;
    return fulldate;
}

function renderizar() {
    const divboxes = document.getElementById('boxes');
    divboxes.innerHTML = '';

    dados_post.forEach((dado, indice) => {
        const box = document.createElement('li');
        box.classList.add('box');

        box.innerHTML = `
        <div class="perfil">
            <img src="${dado.avatar}" alt="Img Usuario" id="img-box1" class="img-avatar">  
            <p id="nome-usuario">${dado.nome_usuario}</p>
            <p id="data">${dado.data}</p>
        </div>
        <div class="postagem">
            <p id="texto-post">${dado.texto}</p>
            <img src="${dado.foto_post}" alt="foto-gatinho" id="gatinho">
            <button id="like" onclick="darlike(${indice})">
                <svg width="30" height="30" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span id="numero_like">${dado.likes}</span>
            </button>
        </div>
        `;

        divboxes.appendChild(box);
    });
    localStorage.setItem('posts',JSON.stringify(dados_post))
}



addEventListener('DOMContentLoaded', renderizar())