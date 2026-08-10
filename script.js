const botaoTema = document.querySelector('.theme');
const iconeTema = document.querySelector('.theme-icon');

const preferenciaSistema = window.matchMedia('(prefers-color-scheme: dark)');

const temaSalvo = localStorage.getItem('tema');

/*
  Se o usuário já escolheu um tema manualmente,
  usamos essa preferência.

  Caso contrário, usamos o tema do dispositivo.
*/
if (temaSalvo === 'dark' || temaSalvo === 'light') {
  ativarTema(temaSalvo, false);
} else {
  ativarTema(preferenciaSistema.matches ? 'dark' : 'light', false);
}

/*
  Troca manual de tema.
*/
botaoTema.addEventListener('click', function () {
  const temaAtual = document.documentElement.dataset.theme;

  if (temaAtual === 'dark') {
    ativarTema('light');
  } else {
    ativarTema('dark');
  }
});

/*
  Detecta mudanças no tema do dispositivo.

  Só altera automaticamente se o usuário ainda
  não tiver escolhido um tema manualmente.
*/
preferenciaSistema.addEventListener('change', function (event) {
  const temaEscolhido = localStorage.getItem('tema');

  if (!temaEscolhido) {
    ativarTema(event.matches ? 'dark' : 'light', false);
  }
});

/*
  Ativa o tema.
*/
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
