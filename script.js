const botaoTema = document.querySelector('.theme');
const iconeTema = document.querySelector('.theme-icon');

/*
  Procura um tema salvo anteriormente no navegador.

  Caso nenhum tema tenha sido salvo, o site começa
  no tema claro.
*/
const temaSalvo = localStorage.getItem('tema');

if (temaSalvo === 'dark') {
  ativarTema('dark');
} else {
  ativarTema('light');
}

/*
  Quando o botão for clicado, verificamos qual tema
  está ativo e trocamos para o outro.
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
  Esta função é responsável por:

  1. Alterar o tema do HTML;
  2. Trocar o ícone;
  3. Atualizar o texto acessível do botão;
  4. Salvar a escolha no navegador.
*/
function ativarTema(tema) {
  document.documentElement.dataset.theme = tema;

  if (tema === 'dark') {
    iconeTema.src = './assets/icons/light_mode.svg';

    botaoTema.setAttribute('aria-label', 'Ativar tema claro');
    botaoTema.setAttribute('title', 'Ativar tema claro');
  } else {
    iconeTema.src = './assets/icons/dark_mode.svg';

    botaoTema.setAttribute('aria-label', 'Ativar tema escuro');
    botaoTema.setAttribute('title', 'Ativar tema escuro');
  }

  localStorage.setItem('tema', tema);
}
