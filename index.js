const { questionInt } = require('readline-sync');

const arrScripts = [
  { id: 1, name: 'Criptografar', src: './src/encrypt.js' },
  { id: 2, name: 'Descriptografar', src: './src/decrypt.js' },
];

function getScript(scriptId) {
  const [selectedScript] = arrScripts.filter(({ id }) => id === scriptId);
  return selectedScript;
}

function showList() {
  return arrScripts.map(({ id, name }) => console.log(`${id} - ${name}`));
}

function handleScripts() {
  showList();

  const scriptId = questionInt(
    'Qual script deve ser executado? Escolha pelo número da lista ou aperte "0" para cancelar '
  );

  if (scriptId === 0) return;

  const { src } = getScript(scriptId);
  require(src);
}

handleScripts();
