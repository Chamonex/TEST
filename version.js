const fs = require('fs');
const path = require('path');

// Função para ler a versão atual do projeto
function getVersion() {
  try {
    // Opção 1: Ler do arquivo VERSION
    const versionFile = path.join(__dirname, 'VERSION');
    const version = fs.readFileSync(versionFile, 'utf8').trim();
    return version;
  } catch (error) {
    // Opção 2: Ler do package.json
    const packageJson = require('./package.json');
    return packageJson.version;
  }
}

// Exemplo de uso
console.log(`Versão atual do projeto: ${getVersion()}`);

module.exports = { getVersion };