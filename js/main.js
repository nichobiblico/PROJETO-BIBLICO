/**
 * Criando com Fé / Cantinho Bíblico - Main Application Logic
 * 
 * Customize your links and information below:
 */
const CONFIG = {
  // URLs dos Produtos / Checkout (ex: Kiwify, Hotmart, Eduzz, etc)
  products: {
    almanaque: {
      url: "https://alma-landing-pages.lovable.app/", // Troque pelo seu link de checkout / página
    },
    packJogos: {
      url: "https://pixel-perfect-display-8331.lovable.app/", // Troque pelo seu link de checkout / página
    }
  },

  // Preservar parâmetros de rastreamento UTM nos botões
  preserveUtms: true
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Preservar UTMs e parâmetros da URL nos botões de compra
  const currentParams = window.location.search;
  
  const almanaqueBtn = document.getElementById("btn-almanaque");
  const packBtn = document.getElementById("btn-pack");

  function buildUrlWithParams(baseUrl, params) {
    if (!params || !CONFIG.preserveUtms) return baseUrl;
    try {
      const url = new URL(baseUrl, window.location.origin);
      const searchParams = new URLSearchParams(params);
      searchParams.forEach((value, key) => {
        url.searchParams.set(key, value);
      });
      return url.toString();
    } catch (e) {
      return baseUrl;
    }
  }

  if (almanaqueBtn && CONFIG.products.almanaque.url) {
    almanaqueBtn.href = buildUrlWithParams(CONFIG.products.almanaque.url, currentParams);
  }

  if (packBtn && CONFIG.products.packJogos.url) {
    packBtn.href = buildUrlWithParams(CONFIG.products.packJogos.url, currentParams);
  }

  // 2. Efeito suave de clique / micro-interação
  document.querySelectorAll(".pop").forEach((button) => {
    button.addEventListener("touchstart", () => {
      button.style.transform = "scale(0.97)";
    }, { passive: true });

    button.addEventListener("touchend", () => {
      button.style.transform = "";
    }, { passive: true });
  });
});
