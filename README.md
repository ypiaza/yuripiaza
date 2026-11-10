# Yuri Piaza — Portfólio Pessoal

Portfólio minimalista e moderno desenvolvido com **React 19**, **Vite** e **Tailwind CSS v4**. Projetado com foco em alta performance, acessibilidade, responsividade e estética dark minimalista.

---

## ⚡ Tecnologias Utilizadas

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Linguagem:** JavaScript (ESNext)
- **Qualidade de Código:** [ESLint](https://eslint.org/)

---

## 🧭 Estrutura do Projeto

```text
yuripiaza/
├── public/
│   └── favicon.svg          # Favicon vetorial personalizado
├── src/
│   ├── components/
│   │   ├── Contact.jsx      # Seção de contato com e-mail direto, redes e cópia rápida
│   │   ├── Experience.jsx   # Linha do tempo de trajetória e formação
│   │   ├── Footer.jsx       # Rodapé com links rápidos e botão voltar ao topo
│   │   ├── Hero.jsx         # Seção de apresentação principal e stack
│   │   ├── Icons.jsx        # Componentes SVG customizados
│   │   ├── Navbar.jsx       # Barra de navegação minimalista e responsiva
│   │   ├── Projects.jsx     # Projetos em destaque, filtros e modal de arquitetura
│   │   └── Skills.jsx       # Tecnologias categorizadas em 4 pilares
│   ├── App.jsx              # Composição principal da aplicação
│   ├── index.css            # Estilos globais e Tailwind CSS
│   └── main.jsx             # Ponto de entrada do React
├── index.html               # Estrutura HTML com metatags de SEO e Open Graph
├── package.json             # Dependências e scripts
└── vite.config.js           # Configuração do Vite
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- Gerenciador de pacotes (npm, pnpm ou yarn)

### Passos

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/ypiaza/yuripiaza.git
   cd yuripiaza
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Abra no navegador:**
   Acesse `http://localhost:5173`

---

## 📦 Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor de desenvolvimento com Hot Module Replacement (HMR). |
| `npm run build` | Compila os arquivos para produção na pasta `dist/`. |
| `npm run preview` | Pré-visualiza localmente o build de produção. |
| `npm run lint` | Executa o linter ESLint para validar boas práticas e sintaxe. |

---

## 🌐 Deploy

Este projeto pode ser publicado com um clique em plataformas como **Vercel**, **Netlify** ou **GitHub Pages**:

- **Vercel / Netlify:** Importe o repositório diretamente; as configurações do Vite são detectadas automaticamente (`Build command: npm run build`, `Output directory: dist`).

---

## 👤 Autor

**Yuri Piaza**  
- **GitHub:** [@ypiaza](https://github.com/ypiaza)  
- **LinkedIn:** [in/yuripiaza](https://linkedin.com/in/yuripiaza)  
- **E-mail:** [yuripiaza@gmail.com](mailto:yuripiaza@gmail.com)

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

