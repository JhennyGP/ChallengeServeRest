# ChallengeServeRest

Este projeto implementa testes automatizados de **API** e **UI** utilizando [Cypress](https://www.cypress.io/) em conjunto com [Cucumber (BDD)](https://cucumber.io/).  
Foram aplicadas boas práticas como **Page Object Model** para interações de interface e **Service Object Pattern** para chamadas de API.

O objetivo é validar os fluxos principais do [ServeRest](https://serverest.dev/), contemplando:

* Cadastro de usuários  
* Login e autenticação  
* Fluxos de UI (cadastro, login, logout)  
* Validação de contratos de API com **JSON Schema**  

---

## 📂 Estrutura do projeto

```
cypress/
├─ e2e/
│ ├─ spec/ # Cenários em Gherkin (.feature)
│ │ ├─ api/ # Cenários BDD para API
│ │ └─ ui/ # Cenários BDD para UI
│
├─ fixtures/ # Massa de dados e JSON Schemas
│
├─ services/ # Service Objects (camada de API/HTTP)
│
├─ support/
│ ├─ pages/ # Page Objects (camada de UI)
│ ├─ step_definitions/ # Implementação dos steps (Cucumber)
│ │ ├─ api/ # Steps relacionados à API
│ │ └─ ui/ # Steps relacionados à UI
│ ├─ commands.js # Custom commands do Cypress
│ ├─ e2e.js # Setup global do Cypress
│ └─ reporter.js # Configuração de relatórios
│
├─ screenshots/ # Evidências automáticas de falha
│
├─ cypress.config.js # Configuração principal (Cypress + Cucumber)
├─ package.json # Dependências e scripts do projeto
└─ README.md # Documentação do projeto
```

---

## 🚀 Pré-requisitos

* Node.js **>=18**
* npm **>=9**

---

## 🔧 Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/JhennyGP/ChallengeServeRest.git
cd ChallengeServeRest
npm install
```

---

## ▶️ Executando os testes

### Modo interativo

```bash
npx cypress open
```

### Modo headless

```bash
npx cypress run
```

### Gerar relatório em HTML
```bash
node report.js
```

---

## 📑 Relatórios

A configuração para relatórios com **multiple-cucumber-html-reporter** está preparada,  
mas **ainda não foi implementada** neste projeto.

> Próximos passos: adicionar integração após a execução dos testes e gerar os arquivos HTML.


---

## ✨ Autor

Projeto desenvolvido por **Jennifer G. Pinto**
