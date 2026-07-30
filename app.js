/**
 * Merender seluruh konten dari PROFILE (data.js) ke dalam HTML.
 * Tidak perlu diedit untuk update konten — cukup ubah data.js.
 */
(function () {
  const $ = (id) => document.getElementById(id);

  // ---------- HERO ----------
  $("brandInitials").textContent = PROFILE.initials || "";
  $("heroLocation").textContent = `— berbasis di ${PROFILE.location}`;
  $("heroName").textContent = PROFILE.name;
  $("heroAboutShort").textContent = PROFILE.about.split(". ")[0] + ".";
  $("idCardName").textContent = PROFILE.name;
  $("idCardRole").textContent = PROFILE.roles[0] || "";
  $("footerName").textContent = `© ${new Date().getFullYear()} ${PROFILE.name}`;

  const heroPhoto = $("heroPhoto");
  heroPhoto.src = PROFILE.photo;
  heroPhoto.alt = `Foto ${PROFILE.name}`;

  const cvBtn = $("cvDownload");
  if (PROFILE.cvFile) {
    cvBtn.href = PROFILE.cvFile;
  } else {
    cvBtn.style.display = "none";
  }

  // Rotating role text
  const roleEl = $("roleCycle");
  let roleIndex = 0;
  function showRole() {
    roleEl.style.opacity = 0;
    setTimeout(() => {
      roleEl.textContent = PROFILE.roles[roleIndex % PROFILE.roles.length];
      roleEl.style.opacity = 1;
      roleIndex++;
    }, 250);
  }
  roleEl.style.transition = "opacity 0.25s ease";
  showRole();
  setInterval(showRole, 2800);

  // ---------- ABOUT ----------
  $("aboutFull").textContent = PROFILE.about;

  // ---------- EXPERIENCE (ledger) ----------
  const ledger = $("experienceLedger");
  PROFILE.experience.forEach((job) => {
    const entry = document.createElement("div");
    entry.className = "ledger-entry reveal";
    entry.innerHTML = `
      <div class="ledger-period">${job.period}</div>
      <div>
        <p class="ledger-role">${job.role}</p>
        <p class="ledger-company">${job.company}</p>
        <ul class="ledger-points">
          ${job.points.map((p) => `<li>${p}</li>`).join("")}
        </ul>
      </div>
    `;
    ledger.appendChild(entry);
  });

  // ---------- EDUCATION ----------
  const eduList = $("educationList");
  PROFILE.education.forEach((edu) => {
    const item = document.createElement("div");
    item.className = "edu-item reveal";
    item.innerHTML = `
      <div>
        <p class="edu-degree">${edu.degree}</p>
        <p class="edu-school">${edu.school}</p>
      </div>
      <span class="edu-period">${edu.period}</span>
    `;
    eduList.appendChild(item);
  });

  // ---------- SKILLS ----------
  const skillTags = $("skillTags");
  PROFILE.skills.forEach((skill) => {
    const tag = document.createElement("span");
    tag.className = "skill-tag";
    tag.textContent = skill;
    skillTags.appendChild(tag);
  });

  // ---------- LANGUAGES ----------
  const langList = $("langList");
  PROFILE.languages.forEach((lang) => {
    const row = document.createElement("div");
    row.className = "lang-row reveal";
    row.innerHTML = `
      <span class="lang-name">${lang.name}</span>
      <span class="lang-bar-track"><span class="lang-bar-fill" data-value="${lang.value}"></span></span>
      <span class="lang-level">${lang.level}</span>
    `;
    langList.appendChild(row);
  });

  // ---------- CERTIFICATIONS (seals) ----------
  const sealGrid = $("sealGrid");
  PROFILE.certifications.forEach((cert) => {
    const card = document.createElement("div");
    card.className = "seal-card reveal";
    const initials = cert.issuer
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 3)
      .toUpperCase();
    card.innerHTML = `
      <div class="seal-badge">${initials}</div>
      <p class="seal-title">${cert.title}</p>
      <p class="seal-issuer">${cert.issuer}${cert.year ? " · " + cert.year : ""}</p>
    `;
    sealGrid.appendChild(card);
  });

  // ---------- PORTFOLIO ----------
  const folioGrid = $("portfolioGrid");
  PROFILE.portfolio.forEach((item) => {
    const card = document.createElement("div");
    card.className = "folio-card reveal";
    const linkHtml = item.link
      ? `<a class="folio-link" href="${item.link}" target="_blank" rel="noopener">Lihat detail →</a>`
      : "";
    card.innerHTML = `
      <div class="folio-image"><img src="${item.image}" alt="${item.title}" loading="lazy" /></div>
      <div class="folio-body">
        <p class="folio-title">${item.title}</p>
        <p class="folio-desc">${item.description}</p>
        <div class="folio-tags">${item.tags.map((t) => `<span class="folio-tag">${t}</span>`).join("")}</div>
        ${linkHtml}
      </div>
    `;
    folioGrid.appendChild(card);
  });

  // ---------- KONTAK ----------
  $("kontakEmailValue").textContent = PROFILE.email;
  $("kontakEmail").href = `mailto:${PROFILE.email}`;
  $("kontakPhoneValue").textContent = PROFILE.phone;
  $("kontakWA").href = `https://wa.me/${PROFILE.whatsapp}`;
  $("kontakLocationValue").textContent = PROFILE.location;

  // ---------- NAV TOGGLE (mobile) ----------
  const navToggle = $("navToggle");
  const mainNav = $("mainNav");
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
  mainNav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );

  // ---------- SCROLL REVEAL ----------
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));

    // Animate language bars when visible
    const langBars = document.querySelectorAll(".lang-bar-fill");
    const langIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.value + "%";
            langIo.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    langBars.forEach((el) => langIo.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }
})();
