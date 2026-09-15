const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

    const toast = (msg) => {
      const el = $("#toast");
      el.textContent = msg;
      el.classList.add("show");
      clearTimeout(toast._t);
      toast._t = setTimeout(() => el.classList.remove("show"), 2400);
    };

    const scrollToId = (id) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    $("#scrollDown").addEventListener("click", () => scrollToId("searchSection"));
    $("#heroCta").addEventListener("click", () => scrollToId("vitrine"));
    $("#goSearch").addEventListener("click", () => {
      scrollToId("searchSection");
      setTimeout(() => $("#searchInput").focus(), 400);
    });

    window.addEventListener("scroll", () => {
      $("#header").classList.toggle("scrolled", window.scrollY > 12);
    });

    const scrollCarousel = (id) => {
      const track = document.getElementById(id);
      if (!track) return;
      const amount = Math.max(track.clientWidth * 0.72, 240);
      const max = track.scrollWidth - track.clientWidth - 8;
      if (track.scrollLeft >= max) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: amount, behavior: "smooth" });
      }
    };

    $$(".nav-arrow").forEach((btn) => {
      btn.addEventListener("click", () => scrollCarousel(btn.dataset.target));
    });

    let cart = 0;
    $$(".add-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        cart += 1;
        $("#cartCount").textContent = cart;
        toast(`${btn.dataset.product} adicionado ao carrinho`);
      });
    });

    $("#cartBtn").addEventListener("click", () => {
      toast(cart ? `Você tem ${cart} ${cart === 1 ? "item" : "itens"} no carrinho` : "Seu carrinho ainda está vazio");
    });

    const applyFilters = () => {
      const q = $("#searchInput").value.trim().toLowerCase();
      const active = $(".filter-pill.active")?.dataset.filter || "todos";
      const cards = $$(".product-card");
      let visible = 0;

      cards.forEach((card) => {
        const name = card.dataset.name || "";
        const cat = card.dataset.cat || "";
        const matchQ = !q || name.includes(q);
        const matchF = active === "todos" || active === "servicos" || cat.split(" ").includes(active);
        const show = matchQ && matchF && active !== "servicos";
        card.classList.toggle("hidden", !show);
        if (show) visible += 1;
      });

      const empty = $("#emptyState");
      if (active === "servicos") {
        empty.style.display = "block";
        empty.textContent = "Serviços ficam na seção Cuidados. Role para agendar banho, tosa, vet e hotel.";
        scrollToId("cuidados");
      } else {
        empty.style.display = visible ? "none" : "block";
        empty.textContent = "Nenhum produto encontrado para essa busca. Tente outra palavra ou filtro.";
      }
    };

    $$(".filter-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        $$(".filter-pill").forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        applyFilters();
        if (pill.dataset.filter !== "servicos") scrollToId("vitrine");
      });
    });

    $("#searchForm").addEventListener("submit", (e) => {
      e.preventDefault();
      applyFilters();
      scrollToId("vitrine");
    });

    $("#searchInput").addEventListener("input", applyFilters);

    $$(".circle-item[data-filter-set]").forEach((item) => {
      item.addEventListener("click", () => {
        const filter = item.dataset.filterSet;
        $$(".filter-pill").forEach((p) => p.classList.toggle("active", p.dataset.filter === filter));
        applyFilters();
        scrollToId("vitrine");
      });
    });

    $$(".circle-item[data-service]").forEach((item) => {
      item.addEventListener("click", () => {
        toast(`Horários de ${item.dataset.service} em breve no WhatsApp da loja`);
      });
    });

    $$(".banner-card").forEach((card) => {
      card.addEventListener("click", () => scrollToId(card.dataset.goto));
    });

    const articles = [
      {
        title: "Como escolher a ração ideal",
        meta: "Nutrição · 6 min de leitura",
        img: "https://images.pexels.com/photos/34952074/pexels-photo-34952074.jpeg?auto=compress&cs=tinysrgb&w=900",
        text: "Comece pelo momento de vida: filhote, adulto ou sênior. Depois, ajuste proteína e calorias ao porte e ao nível de atividade. Se houver alergia ou doença, peça indicação veterinária antes de qualquer troca brusca."
      },
      {
        title: "Sinais de que é hora do vet",
        meta: "Saúde · 5 min de leitura",
        img: "https://images.pexels.com/photos/7469222/pexels-photo-7469222.jpeg?auto=compress&cs=tinysrgb&w=900",
        text: "Vômito persistente, apatia, claudicação, sede excessiva ou mudanças súbitas de humor merecem avaliação. Melhor uma consulta cedo do que um pronto-socorro tarde da noite."
      },
      {
        title: "Banho em casa vs. pet shop",
        meta: "Cuidados · 4 min de leitura",
        img: "https://images.pexels.com/photos/19145888/pexels-photo-19145888.jpeg?auto=compress&cs=tinysrgb&w=900",
        text: "Banhos em casa funcionam em pelagens curtas e pets colaborativos. Tosa, nós, ouvidos e pele sensível rendem mais com profissional — e produtos certos evitam ressecamento."
      },
      {
        title: "Enriquecimento para gatos",
        meta: "Comportamento · 7 min de leitura",
        img: "https://images.pexels.com/photos/26158841/pexels-photo-26158841.jpeg?auto=compress&cs=tinysrgb&w=900",
        text: "Gatos precisam caçar, subir e se esconder. Três sessões curtas de brinquedo, uma torre e um arranhador bem posicionado reduzem miados e arranhões no sofá."
      },
      {
        title: "Passeios que cansam de verdade",
        meta: "Rotina · 5 min de leitura",
        img: "https://images.pexels.com/photos/29058500/pexels-photo-29058500.jpeg?auto=compress&cs=tinysrgb&w=900",
        text: "Deixe o cão farejar. Alterne ritmo, treine comandos e evite só correr em linha reta. Cansaço mental vale tanto quanto quilometragem."
      }
    ];

    const modal = $("#articleModal");
    $$(".article-card").forEach((card) => {
      card.addEventListener("click", () => {
        const a = articles[Number(card.dataset.article)];
        $("#modalImg").src = a.img;
        $("#modalImg").alt = a.title;
        $("#modalMeta").textContent = a.meta;
        $("#modalTitle").textContent = a.title;
        $("#modalText").textContent = a.text;
        modal.classList.add("open");
      });
    });
    $("#closeModal").addEventListener("click", () => modal.classList.remove("open"));
    modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("open"); });

    const drawer = $("#drawer");
    $("#menuBtn").addEventListener("click", () => drawer.classList.add("open"));
    drawer.addEventListener("click", (e) => { if (e.target === drawer) drawer.classList.remove("open"); });
    $$("#drawer a").forEach((a) => a.addEventListener("click", () => drawer.classList.remove("open")));

    $("#newsForm").addEventListener("submit", (e) => {
      e.preventDefault();
      toast("Inscrição feita! Bem-vindo à Nuvem Pet.");
      e.target.reset();
    });
