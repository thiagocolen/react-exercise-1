# Exercício com React #1

Este é um exercício com [ReactJs](https://reactjs.org/).

## Instalação

Use o gerenciador de pacotes [npm](https://www.npmjs.com/) para instalar esse exercício.

```bash
npm install
```

## Executar

```bash
npm start
```

## Testes

```bash
npm test
```

## Bibliotecas

Bibliotecas usadas no exercício:
- [ReactJS](https://reactjs.org/) - Biblioteca para desenvolvimento front-end
- [React-Redux](https://react-redux.js.org/) - Biblioteca para gerenciamento de estado
- [Redux Toolkit](https://redux-toolkit.js.org/) - Ferramentas para Redux
- [Testing Library](https://testing-library.com/) - Ferramentas para testes unitários
- [Material-UI](https://material-ui.com/) - Biblioteca de interfaces para React
- [MomentJS](https://momentjs.com/) -  Biblioteca para manipulação de datas

## Observações

Existe um problema de `"CORS"` ocorrendo com a chamada para a API de imagens do BING. Essa API não permite chamadas do `"http://localhost:3000"`, o que impede o carregamento da imagem de fundo, quando é aplicação é executada localmente.

Para contornar esse problema foi desenvolvido uma lógica que, quando ocorrer o erro, uma imagem de dentro da aplicação é carregada no lugar a imagem dinâmica que viria da API do BING.

Outra maneira de contornar o problema é a instalação de uma extensão do browser Chrome ([Allow CORS: Access-Control-Allow-Origin]([htt](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf))) que permite que a chamada seja feita sem erro e a imagem dinâmica seja carregada.

Conteúdo relacionado a segurança de aplicações React: [10 React security best practices](https://snyk.io/blog/10-react-security-best-practices/)



