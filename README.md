# Criando com Fé / Cantinho Bíblico 💛

Projeto recriado com fidelidade visual e funcional absoluta (1:1) baseado no portal [criando-com-fe.lovable.app](https://criando-com-fe.lovable.app/).

---

## 🌟 Destaques do Projeto

- **Fidelidade Visual 100%**: Cores, tipografia (`Baloo 2` e `Nunito`), sombras, efeito de brilho suave e borda gradiente rotativa animada (*rainbow-border*).
- **Animações e Micro-interações**:
  - Gire de ângulo cônico animado no card principal do Almanaque.
  - Efeito *shine* (feixe de luz correndo) e *pulse-soft* no botão de ação principal.
  - Flutuação leve de partículas no fundo (estrelas amarelas, corações vermelhos e bolinhas coloridas).
  - Animação *bob* na capa do Almanaque Bíblico.
  - Resposta tátil ao clique/toque (*pop active scale*).
- **Rastreamento UTM Inteligente**: O arquivo [js/main.js](file:///c:/Users/eusou/PROJETOS/CANTINHO%20BIBLICO/js/main.js) preserva e repassa automaticamente parâmetros de tráfego pago (ex: `utm_source`, `utm_medium`, `utm_campaign`, etc.) aos botões de checkout.
- **Zero Dependências Pesadas**: Carregamento instantâneo, compatível com qualquer hospedagem ou visualização direta no navegador.

---

## 📁 Estrutura de Arquivos

```
CANTINHO BIBLICO/
├── index.html          # Estrutura principal da página (1:1 com o original)
├── assets/             # Imagens e ícones originais em alta definição
│   ├── logo.webp       # Logo de Jesus com as crianças sobre a Bíblia
│   ├── almanaque.webp  # Capa do Almanaque Bíblico (500 Atividades)
│   ├── pack.webp       # Capa do Pack com 3 Jogos Bíblicos
│   ├── favicon.png     # Ícone do site
│   └── og.jpg          # Imagem de compartilhamento em redes sociais
├── css/
│   └── styles.css      # Folha de estilos completa com todas as animações e temas
├── js/
│   └── main.js         # Configurações de links, redes sociais e repasse de UTMs
├── server.js           # Servidor local leve em Node.js (sem dependências)
└── README.md           # Guia de uso e personalização
```

---

## 🚀 Como Executar Localmente

### Opção 1: Usando o servidor local incluso
Abra o terminal na pasta do projeto e execute:
```bash
node server.js
```
Em seguida, abra o link exibido no seu navegador (normalmente `http://localhost:3000` ou `http://localhost:3002`).

### Opção 2: Abertura direta
Você também pode simplesmente dar um **duplo clique** no arquivo `index.html` para abri-lo diretamente em qualquer navegador moderno.

---

## ⚙️ Como Personalizar Links e Produtos

Para trocar os links de checkout (Kiwify, Hotmart, Eduzz, etc.) ou redes sociais, abra o arquivo [js/main.js](file:///c:/Users/eusou/PROJETOS/CANTINHO%20BIBLICO/js/main.js):

```javascript
const CONFIG = {
  products: {
    almanaque: {
      url: "SEU_LINK_DE_CHECKOUT_ALMANAQUE_AQUI",
    },
    packJogos: {
      url: "SEU_LINK_DE_CHECKOUT_JOGOS_AQUI",
    }
  },
  social: {
    instagram: "https://www.instagram.com/seu_usuario",
    youtube: "https://www.youtube.com/@seu_canal",
    tiktok: "https://www.tiktok.com/@seu_usuario",
    facebook: "https://www.facebook.com/sua_pagina"
  },
  preserveUtms: true // Mantém tags de anúncios da URL de entrada
};
```

---

## 🌐 Publicação / Deploy

O projeto é 100% estático e pode ser publicado gratuitamente em segundos em:
- **Vercel**: Arraste a pasta para o dashboard da Vercel ou use `vercel`.
- **Netlify**: Basta arrastar a pasta `CANTINHO BIBLICO` no painel do Netlify Drop.
- **GitHub Pages**: Suba o repositório e ative o Pages na branch `main`.
- **Hospedagem Tradicional (cPanel / Hostinger / etc.)**: Suba os arquivos diretamente na pasta `public_html`.
