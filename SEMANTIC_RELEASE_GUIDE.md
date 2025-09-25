# Como usar o semantic-release

Este projeto está configurado com semantic-release para automatizar releases baseados nas mensagens de commit.

## Formato das mensagens de commit

Use o padrão [Angular Commit Message Conventions](https://github.com/angular/angular/blob/main/contributing-docs/commit-message-guidelines.md):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Tipos de commit suportados:

- `feat`: Nova funcionalidade (gera release MINOR)
- `fix`: Correção de bug (gera release PATCH)
- `perf`: Melhoria de performance (gera release PATCH)
- `docs`: Documentação
- `style`: Formatação/estilo (não afeta o código)
- `refactor`: Refatoração sem bug fixes ou novas features
- `test`: Testes
- `chore`: Tarefas de manutenção

### Exemplos:

**Release PATCH (1.0.1)**
```
fix: correct calculation error in price function
```

**Release MINOR (1.1.0)**
```
feat: add user authentication system
```

**Release MAJOR (2.0.0)**
```
feat: redesign API structure

BREAKING CHANGE: API endpoints have been restructured
```

### Como será publicado:

1. Faça push para a branch `main`
2. O GitHub Actions executará automaticamente
3. O semantic-release analisará os commits desde o último release
4. Se encontrar commits relevantes, criará uma nova release
5. A release será publicada no GitHub com:
   - Tag da versão
   - Release notes geradas automaticamente
   - Assets (se configurados)

## Próximos passos:

Para que funcione completamente, você precisa:

1. **Configurar token com permissões de workflow** no GitHub
2. **Fazer commits seguindo as convenções** mostradas acima
3. **O primeiro commit com `feat:` ou `fix:` gerará a versão 1.0.0**

## Status atual:

- ✅ semantic-release instalado e configurado
- ✅ GitHub Actions workflow criado
- ✅ Configuração para releases apenas no GitHub (sem npm)
- ⏳ Aguardando permissões de workflow para funcionar automaticamente