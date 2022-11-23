const listaProjetos = [
  {
    nome: 'Sistema de Chamados',
    descricao:
      '(Sistema integrado com o Firebase, que permite cadastrar usuários, criar e editar chamados.)',
    link: 'https://sistema-de-chamados-six.vercel.app/dashboard',
    img: './img/sistema-de-chamados.png'
  },
  {
    nome: 'Prime-Flix',
    descricao: '(Uso de API em React.)',
    link: 'https://prime-flix-three.vercel.app/',
    img: './img/prime_flix.png'
  },
  {
    nome: 'Portifólio',
    descricao: '(Exemplo de um portifólio utilizando o React.)',
    link: 'https://portifolio-react-gray.vercel.app/',
    img: './img/portifolio.png'
  }
]

const projetos = document.querySelector('.projetos')

listaProjetos.forEach(item => {
  projetos.innerHTML += `
  <div class="projetos">
  <div class="projeto__card">
    <a
      href="${item.link}"
      class="card"
    >
      <p>
        ${item.nome}
        <span>${item.descricao}</span>
      </p>
      <img
        src="${item.img}"
        alt="${item.nome}"
        class="card-200px"
      />
    </a>
  </div>
  `
})
