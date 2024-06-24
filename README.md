# Projeto MFE Jest Playwright

Este é um projeto que contém dois micro frontends (MFEs) chamados `home` e `contact`, desenvolvidos React para praticar desenvolvimento com microfrontends, jest e playwright.
O projeto vai ser atualizado para manter a prática dessas tecnologias


## Iniciar os Projetos

Para iniciar os projetos `home` e `contact`, você pode usar o comando `npm start`. Este comando irá iniciar ambos os projetos simultaneamente.

```sh
npm start
```

Este comando é equivalente a:

```sh
npm run start:home & npm run start:contact
```

### Iniciar Projeto Home

Para iniciar apenas o projeto `home`, você pode usar o seguinte comando:

```sh
npm run start:home
```

Este comando irá navegar até o diretório `home` e iniciar o projeto `home-app`.

### Iniciar Projeto Contact

Para iniciar apenas o projeto `contact`, você pode usar o seguinte comando:

```sh
npm run start:contact
```

Este comando irá navegar até o diretório `contact` e iniciar o projeto `contact-app`.

## Testes

Os testes estão separados em e2e e unitátios, entre em cada projeto separadamente e use os comandos:

Para testes unitários
```sh
npm run test:unit
```

Para testes e2e
```sh
npm run test:e2e
```
