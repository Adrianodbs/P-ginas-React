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
  },
  {
    nome: 'Controle de finanças',
    descricao:
      '(Aplicação para calcular recebimento e despesas ao longo de um determindo período.)',
    link: 'https://controle-de-finan-as-react.vercel.app/',
    img: './img/controle-financas.png'
  },
  {
    nome: 'Dicionário de inglês',
    descricao:
      '(Aplicação onde você cadastra uma palavra, sua tradução e uma aplicação em frase.)',
    link: 'https://ingles-react.vercel.app/',
    img: './img/ingles.png'
  },
  {
    nome: 'Mini Blog',
    descricao: '(Aplicação utilizando ReactJs e Firebase.)',
    link: 'https://miniblog-kohl.vercel.app/',
    img: './img/miniblog.png'
  },
  {
    nome: 'Palavra Secreta',
    descricao: '(Adivinhe a palavra secreta.)',
    link: 'https://palavra-secreta-react.vercel.app/',
    img: './img/palavra-secreta.png'
  },
  {
    nome: 'Trato Tech',
    descricao: '(Aplicação utilizando React Redux.)',
    link: 'https://react-gerenciamento-de-estados-globais-com-redux-z3e9.vercel.app/',
    img: './img/trato-tech.png'
  },
  {
    nome: 'Villa dos bolos',
    descricao: '(Projeto pessoal.)',
    link: 'https://villa-dos-bolos.vercel.app/',
    img: './img/vila-dos-bolos.png'
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
