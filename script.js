const botaoTema = document.querySelector('.theme');
const iconeTema = document.querySelector('.theme-icon');

const temaSalvo = localStorage.getItem('tema');

if (temaSalvo) {
  ativarTema(temaSalvo);
} else {
  const sistemaDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (sistemaDark) {
    ativarTema('dark', false);
  } else {
    ativarTema('light', false);
  }
}

botaoTema.addEventListener('click', function () {
  const temaAtual = document.documentElement.dataset.theme;

  if (temaAtual === 'dark') {
    ativarTema('light');
  } else {
    ativarTema('dark');
  }
});

function ativarTema(tema, salvar = true) {
  document.documentElement.dataset.theme = tema;

  if (tema === 'dark') {
    iconeTema.src = './assets/icons/lightmode.svg';

    botaoTema.setAttribute('aria-label', 'Ativar tema claro');
    botaoTema.setAttribute('title', 'Ativar tema claro');
  } else {
    iconeTema.src = './assets/icons/dark_mode.svg';

    botaoTema.setAttribute('aria-label', 'Ativar tema escuro');
    botaoTema.setAttribute('title', 'Ativar tema escuro');
  }

  if (salvar) {
    localStorage.setItem('tema', tema);
  }
}
