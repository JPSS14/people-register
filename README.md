This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tecnologias

- React
- Next
- React Hook Forms
- Axios
- Typescript
- Sass
- Jest

# Principais funcionalidades

- Buscar dados de uma API externa, e alimentar o projeto com eles;

- Adicionar um novo registro junto com os dados que chegaram via consumo da API;

- Validação de obrigatoriedade e padronização dos campos do formulário;

- Página com a exibição de todos os itens cadastrados;

- Edição de qualquer item cadastrado;

- Aplicação de um mapper responsável por formatar dados e exibir em tela;

- Exclusão de item cadastrado;

- Reset para o estado original do projeto;

![people-register](https://github.com/JPSS14/people-register/assets/40327303/f355926f-3d0e-437b-9aab-500fa7ecb877)

![people-register-validation](https://github.com/JPSS14/people-register/assets/40327303/7068c121-a6b4-421f-bc32-c93146f60388)

![people-register-list](https://github.com/JPSS14/people-register/assets/40327303/1d59d97e-906f-4256-b9aa-33f72cc6c0c6)

![people-register-edit](https://github.com/JPSS14/people-register/assets/40327303/01edffb5-2659-4acd-8278-e3215165786a)

![people-register-delete](https://github.com/JPSS14/people-register/assets/40327303/9fc42670-ec30-40e5-a298-fe7ea3819ca5)

# Cobertura de testes

Cobertura de 73% das linhas de código.

```bash
npm run test:coverage
```

# Componente MainForm

O componente MainForm é o principal componente da aplicação, ele é resposável pelo cadastro, e também é reutilizado na listagem de pessoas cadastradas, ele possui uma série de recursos condicionais pra permitir a reutilização. Ainda existem pontos de melhorias nele, por ter muitas funcionalidades e condições seria interessante quebrar ele em componentes menores, facilitando a manutenção e compreensão, assim como delegar algumas funções para o contexto.
