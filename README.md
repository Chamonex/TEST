# TEST - Semantic Release

[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

Este é um projeto de teste para implementação da biblioteca **semantic-release**.

## O que é semantic-release?

O semantic-release automatiza todo o fluxo de lançamento de versões incluindo:

- ✅ Determinação automática do próximo número de versão
- ✅ Geração de notas de lançamento
- ✅ Publicação do release no GitHub
- ✅ Seguimento rigoroso do [Semantic Versioning](https://semver.org/)

## Como funciona?

O semantic-release analiza as mensagens de commit para determinar o tipo de release:

| Tipo de Commit | Tipo de Release |
|---|---|
| `fix(pencil): stop graphite breaking when too much pressure applied` | **Patch** - Correção |
| `feat(pencil): add 'graphiteWidth' option` | **Minor** - Nova funcionalidade |
| `perf(pencil): remove graphiteWidth option BREAKING CHANGE: ...` | **Major** - Breaking change |

## Configuração

- ⚙️ Configurado via `.releaserc.json`
- 🔄 Executado automaticamente via GitHub Actions
- 📝 Usa [Angular Commit Message Conventions](https://github.com/angular/angular/blob/main/contributing-docs/commit-message-guidelines.md)