  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');

  fetch('projects.json')
    .then(res => res.json())
    .then(projects => {
      const project = projects.find(p => p.slug === slug);
      if (!project) return;

      const lang = localStorage.getItem('jklanguage') || 'eng';
      const row = document.getElementById('project-row');

      let mediaHTML = '';

      project.media.forEach(item => {
        const filePath = `${project.slug}/${item.file}`;
        let mediaBlock = '';

        if (item.type === 'video') {
          mediaBlock = `
            <div class="card bg-dark shadow-sm">
              <video class="img-fluid bg-dark" autoplay="" loop="">
                <source src="${filePath}" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
          `;
        } else if (item.type === 'image') {
          mediaBlock = `
            <div class="card bg-dark shadow-sm mb-0">
              <img src="${filePath}" class="img-fluid card-img-top bg-dark" alt="">
            </div>
          `;
        }

        mediaBlock += `
        
          <div class="card-body bg-dark eng mb-0" style="padding-top:0">
            <p class="card-text text-white">${item.description.en}</p>
          </div>
          <div class="card-body bg-dark fin mb-0" style="padding-top:0">
            <p class="card-text text-white">${item.description.fi}</p>
          </div>
          
        `;

        //mediaHTML += `<div class="media-entry ">${mediaBlock}</div>`;
        mediaHTML += `<div class="media-entry mb-1 bg-dark ">${mediaBlock}</div>`;
      });

      row.innerHTML = `
        <div class="modal-dialog modal-lg " role="document"> 
          <div class="projectCard">
            <div class="card mb-0 shadow-sm">
              ${mediaHTML} 
            </div>
            
          </div>
         
        </div>
      `;

      applyLanguageVisibility();
        // Set title
    document.getElementById('project-tab-en').textContent = project.title.en;
    document.getElementById('project-tab-fi').textContent = project.title.fi;
    document.getElementById('project-title-en').textContent = project.title.en;
    document.getElementById('project-title-fi').textContent = project.title.fi;
    });
/*
  function applyLanguageVisibility() {
    const lang = localStorage.getItem('jklanguage') || 'eng';
    document.querySelectorAll('.eng').forEach(el => {
      el.style.display = lang === 'eng' ? '' : 'none';
    });
    document.querySelectorAll('.fin').forEach(el => {
      el.style.display = lang === 'fin' ? '' : 'none';
    });
  }

  function setLanguage(lang) {
    localStorage.setItem('jklanguage', lang);
    applyLanguageVisibility();
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyLanguageVisibility();
  });
  */

  // Set language and update visibility
function setLanguage(lang) {
  localStorage.setItem('jklanguage', lang);
  applyLanguageVisibility();
}

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