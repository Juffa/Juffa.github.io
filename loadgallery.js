  fetch('projects.json')
  .then(res => res.json())
  .then(projects => {
    const lang = localStorage.getItem('jklanguage') || 'eng';
    const container = document.getElementById('project-grid');

    projects.forEach(project => {
      const thumb = project.thumb;
      const thumbimage = `${project.slug}/${thumb}`;
      const col = document.createElement('div');
      col.className = 'col-md-4 projectCard';
      col.id = project.slug;
      col.onclick = () => window.location.href = `project.html?slug=${project.slug}`;

      col.innerHTML = `

          <div class="card mb-1 shadow-sm link">
          <img class="card-img-top bg-dark" src="${thumbimage}">
          </div>
          <div class="card-body bg-dark" style="padding-top:0">
            <a class="lead text-white eng">${project.title.en}</a>
            <a class="lead text-white fin">${project.title.fi}</a>
          </div>
        </div>
        <div class="mb-4"></div>
            `;

      container.appendChild(col);
    });

    // After content is created, apply language visibility
    applyLanguageVisibility();
  });

// Set language and update visibility
function setLanguage(lang) {
  localStorage.setItem('jklanguage', lang);
  applyLanguageVisibility();
}

// Hide/show based on saved language
function applyLanguageVisibility() {
  const lang = localStorage.getItem('jklanguage') || 'eng';
  const engEls = document.querySelectorAll('.eng');
  const finEls = document.querySelectorAll('.fin');

  if (lang === 'fin') {
    engEls.forEach(el => el.style.display = 'none');
    finEls.forEach(el => el.style.display = '');
  } else {
    engEls.forEach(el => el.style.display = '');
    finEls.forEach(el => el.style.display = 'none');
  }
}



// Optional: if your buttons have onClick handlers like <button onclick="setLanguage('fin')">