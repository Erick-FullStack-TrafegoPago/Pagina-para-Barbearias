# ⚡ Tráfego Rápido — Site da Agência

Site profissional da agência **Tráfego Rápido**, construído com **Vite + React**.

---

## 🚀 Como rodar o projeto

### 1. Pré-requisitos
- Node.js instalado (v18 ou superior)
- VS Code (recomendado)

### 2. Instalar dependências
Abra o terminal na pasta do projeto e rode:

```bash
npm install
```

### 3. Rodar em modo desenvolvimento
```bash
npm run dev
```

Acesse: **http://localhost:5173**

### 4. Gerar versão para publicar (build)
```bash
npm run build
```

Os arquivos finais ficam na pasta `/dist` — você pode hospedar em qualquer servidor (Vercel, Netlify, etc.)

---

## 📁 Estrutura do Projeto

```
trafego-rapido/
├── index.html              # HTML raiz
├── vite.config.js          # Configuração do Vite
├── package.json            # Dependências
└── src/
    ├── App.jsx             # Componente raiz
    ├── main.jsx            # Entry point
    ├── index.css           # CSS global + variáveis
    └── components/
        ├── Navbar.jsx/.css     # Menu de navegação
        ├── Hero.jsx/.css       # Seção principal (hero)
        ├── Services.jsx/.css   # Serviços oferecidos
        ├── Results.jsx/.css    # Métricas e resultados
        ├── About.jsx/.css      # Sobre a agência
        ├── Testimonials.jsx/.css  # Depoimentos
        ├── Pricing.jsx/.css    # Planos e preços
        ├── Contact.jsx/.css    # Formulário de contato
        ├── Footer.jsx/.css     # Rodapé
        └── WhatsApp.jsx/.css   # Botão flutuante WA
```

---

## ✏️ Como personalizar

### Trocar número do WhatsApp
Busque por `wa.me/5500000000000` e substitua pelo seu número (com código do país, sem símbolos).

### Trocar e-mail
Busque por `contato@trafegorapido.online` e substitua.

### Trocar preços
Edite o arquivo `src/components/Pricing.jsx` — array `plans`.

### Trocar depoimentos
Edite `src/components/Testimonials.jsx` — array `testimonials`.

### Cores
Todas as cores estão em `src/index.css` nas variáveis CSS (`:root`).
- `--green: #00E85A` → cor principal verde
- `--bg: #080808` → fundo principal

---

## 🌐 Deploy gratuito com Vercel

1. Crie conta em vercel.com
2. Importe o projeto do GitHub (ou arraste a pasta `/dist`)
3. Pronto — site no ar com HTTPS grátis!

---

Feito com ⚡ para a **Tráfego Rápido**
