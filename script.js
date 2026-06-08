let PORTFOLIO_DATA = null;

const WINS = {
  about: {
    title: () => `About Me — ${PORTFOLIO_DATA.user.name}`,
    icon: '👤', w: 520, h: 420,
    content: () => {
      const u = PORTFOLIO_DATA.user;
      return `
      <div class="about-content">
        <div class="about-header">
          <div class="avatar">${u.avatar}</div>
          <div>
            <div class="about-name">${u.name}</div>
            <div class="about-role">💻 ${u.role}</div>
            <div class="about-location">📍 ${u.location}</div>
          </div>
        </div>
        <div class="about-bio">${u.bio}</div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          ${u.degree ? `<div class="info-row"><span class="info-label">🎓 Degree</span> ${u.degree}</div>` : ''}
          ${u.email ? `<div class="info-row"><span class="info-label">📧 Email</span> ${u.email}</div>` : ''}
          ${u.phone ? `<div class="info-row"><span class="info-label">📞 Phone</span> ${u.phone}</div>` : ''}
          ${u.website ? `<div class="info-row"><span class="info-label">🌐 Website</span> <span style="color:#3a7bd5;">${u.website}</span></div>` : ''}
          ${u.languages && u.languages.length ? `<div class="info-row"><span class="info-label">🗣️ Languages</span>${u.languages.map(l => `<span class="chip">${l}</span>`).join('')}</div>` : ''}
        </div>
        <div>
          <div style="font-size:11px;font-weight:700;color:#666;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Domains & Interests</div>
          <div>
            ${(u.interests || []).map(i => `<span class="chip">${i}</span>`).join('')}
          </div>
        </div>
      </div>`;
    }
  },
  skills: {
    title: () => `Skills — ${PORTFOLIO_DATA.user.name.split(' ')[0].toLowerCase()}_skills.exe`,
    icon: '⚡', w: 480, h: 460,
    content: () => `
      <div class="skills-content">
        ${PORTFOLIO_DATA.skills.map(g => `
          <div class="skill-group">
            <div class="skill-group-title">${g.groupTitle}</div>
            ${g.items.map(s => skillBar(s.name, s.pct)).join('')}
          </div>
        `).join('')}
      </div>
      <script>
        setTimeout(() => {
          document.querySelectorAll('.skill-fill[data-pct]').forEach(el => {
            el.style.width = el.dataset.pct + '%';
          });
        }, 100);
      <\/script>`
  },
  projects: {
    title: () => 'Projects & Achievements',
    icon: '📁', w: 540, h: 470,
    content: () => `
      <div class="projects-content">
        ${PORTFOLIO_DATA.projects.map(p => `
          <div class="project-card">
            <div class="project-top"><span class="project-icon">${p.icon}</span><div><div class="project-name">${p.name}</div><div class="project-tech">${p.tech}</div></div></div>
            <div class="project-desc">${p.desc}</div>
            <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
          </div>
        `).join('')}
      </div>`
  },
  experience: {
    title: () => 'Experience — Career Timeline',
    icon: '💼', w: 520, h: 440,
    content: () => `
      <div class="exp-content">
        ${PORTFOLIO_DATA.experience.map(e => `
          <div class="exp-item" ${e.color ? `style="border-left-color:${e.color};"` : ''}>
            <div class="exp-info">
              <div class="exp-role" ${e.roleColor ? `style="color:${e.roleColor};"` : ''}>${e.role}</div>
              <div class="exp-company">${e.company}</div>
              <div class="exp-period">${e.period}</div>
              <div class="exp-points">
                ${e.points.map(pt => `<div class="exp-point">${pt}</div>`).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>`
  },
  contact: {
    title: () => 'Contact — Get in Touch',
    icon: '📬', w: 420, h: 360,
    content: () => {
      const u = PORTFOLIO_DATA.user;
      return `
      <div class="contact-content">
        <div style="font-size:13px;color:#555;margin-bottom:4px;">Reach out — I'm always open to new opportunities!</div>
        ${u.email ? `
        <div class="contact-row" onclick="alert('Email: ${u.email}')">
          <span class="contact-ico">📧</span>
          <div><div class="contact-label">Email</div><div class="contact-val">${u.email}</div></div>
        </div>` : ''}
        ${u.phone ? `
        <div class="contact-row" onclick="alert('Phone: ${u.phone}')">
          <span class="contact-ico">📞</span>
          <div><div class="contact-label">Phone</div><div class="contact-val">${u.phone}</div></div>
        </div>` : ''}
        ${u.linkedin ? `
        <div class="contact-row" onclick="alert('LinkedIn: ${u.linkedin}')">
          <span class="contact-ico">💼</span>
          <div><div class="contact-label">LinkedIn</div><div class="contact-val">${u.linkedinHandle}</div></div>
        </div>` : ''}
        ${u.twitter ? `
        <div class="contact-row" onclick="alert('Twitter: ${u.twitter}')">
          <span class="contact-ico">🐦</span>
          <div><div class="contact-label">Twitter / X</div><div class="contact-val">${u.twitter}</div></div>
        </div>` : ''}
        ${u.website ? `
        <div class="contact-row" onclick="alert('Website: ${u.website}')">
          <span class="contact-ico">🌐</span>
          <div><div class="contact-label">Website</div><div class="contact-val">${u.website}</div></div>
        </div>` : ''}
        <div class="contact-row">
          <span class="contact-ico">📍</span>
          <div><div class="contact-label">Location</div><div class="contact-val">${u.location}</div></div>
        </div>
      </div>`
    }
  },
  terminal: {
    title: () => 'Terminal — cmd.exe',
    icon: '💻', w: 560, h: 360,
    content: () => `
      <div class="terminal-body" id="term-output">
        <div class="term-line"><span class="term-yellow">${PORTFOLIO_DATA.terminal.header}</span></div>
        <div class="term-line"><span class="term-out">Type 'help' to see available commands.</span></div>
        <div class="term-line">&nbsp;</div>
      </div>
      <div class="terminal-body" style="padding-top:4px;padding-bottom:4px;border-top:1px solid #333;min-height:unset;">
        <div class="term-input-row">
          <span class="term-prompt">${PORTFOLIO_DATA.terminal.prompt}:~$ </span>
          <input class="term-input" id="term-input" type="text" autofocus autocomplete="off" spellcheck="false"
            onkeydown="handleTermInput(event)" placeholder="">
        </div>
      </div>`
  }
};

function skillBar(name, pct) {
  return `<div class="skill-bar-row">
    <span class="skill-name">${name}</span>
    <div class="skill-track"><div class="skill-fill" data-pct="${pct}" style="width:0%"></div></div>
    <span class="skill-pct">${pct}%</span>
  </div>`;
}

let zTop = 10;
const openWindows = {};

function openWin(id) {
  if (openWindows[id]) {
    focusWin(id); return;
  }
  const cfg = WINS[id];
  const desk = document.getElementById('desktop');
  const dw = desk.clientWidth, dh = desk.clientHeight;
  const w = Math.min(cfg.w || 480, dw - 10);
  const h = Math.min(cfg.h || 380, dh - 30);
  let x, y;
  if (dw < 600) {
    x = (dw - w) / 2;
    y = Math.max(5, (dh - h) / 2 - 10);
  } else {
    x = Math.max(20, Math.min(dw - w - 20, 60 + Object.keys(openWindows).length * 30));
    y = Math.max(20, Math.min(dh - h - 20, 40 + Object.keys(openWindows).length * 24));
  }

  const titleText = typeof cfg.title === 'function' ? cfg.title() : cfg.title;

  const win = document.createElement('div');
  win.className = 'win active';
  win.id = 'win-' + id;
  win.style.cssText = `left:${x}px;top:${y}px;width:${w}px;height:${h}px;z-index:${++zTop};`;
  win.innerHTML = `
    <div class="win-titlebar" onmousedown="startDrag(event, '${id}')" ontouchstart="startDrag(event, '${id}')">
      <span class="win-title-icon">${cfg.icon}</span>
      <span class="win-title-text">${titleText}</span>
      <div class="win-controls">
        <div class="win-btn min" onclick="minimizeWin('${id}')">─</div>
        <div class="win-btn max" onclick="toggleMax('${id}')">□</div>
        <div class="win-btn close" onclick="closeWin('${id}')">✕</div>
      </div>
    </div>
    <div class="win-menubar">
      <span class="win-menu-item">File</span>
      <span class="win-menu-item">View</span>
      <span class="win-menu-item">Help</span>
    </div>
    <div class="win-body">${cfg.content()}</div>`;

  document.getElementById('windows-container').appendChild(win);
  openWindows[id] = { el: win, minimized: false, maxed: false, prevRect: null };
  win.addEventListener('mousedown', () => focusWin(id));
  addTaskbarTask(id, cfg.icon, titleText.split('—')[0].trim());

  // animate skill bars
  if (id === 'skills') {
    setTimeout(() => {
      win.querySelectorAll('.skill-fill[data-pct]').forEach(el => {
        el.style.width = el.dataset.pct + '%';
      });
    }, 150);
  }
}

function focusWin(id) {
  const w = openWindows[id];
  if (!w) return;
  document.querySelectorAll('.win').forEach(el => el.classList.remove('active'));
  w.el.style.zIndex = ++zTop;
  w.el.classList.add('active');
  document.querySelectorAll('.taskbar-task').forEach(t => t.classList.remove('active'));
  const tt = document.getElementById('tt-' + id);
  if (tt) tt.classList.add('active');
}

function closeWin(id) {
  const w = openWindows[id];
  if (!w) return;
  w.el.remove();
  delete openWindows[id];
  const tt = document.getElementById('tt-' + id);
  if (tt) tt.remove();
}

function minimizeWin(id) {
  const w = openWindows[id];
  if (!w) return;
  w.el.style.display = 'none';
  w.minimized = true;
  const tt = document.getElementById('tt-' + id);
  if (tt) tt.classList.remove('active');
}

function toggleMax(id) {
  const w = openWindows[id];
  if (!w) return;
  const desk = document.getElementById('desktop');
  if (!w.maxed) {
    w.prevRect = { left: w.el.style.left, top: w.el.style.top, width: w.el.style.width, height: w.el.style.height };
    w.el.style.left = '0'; w.el.style.top = '0';
    w.el.style.width = desk.clientWidth + 'px';
    w.el.style.height = desk.clientHeight + 'px';
    w.maxed = true;
  } else {
    const r = w.prevRect;
    w.el.style.left = r.left; w.el.style.top = r.top;
    w.el.style.width = r.width; w.el.style.height = r.height;
    w.maxed = false;
  }
}

function addTaskbarTask(id, icon, label) {
  const tt = document.createElement('div');
  tt.className = 'taskbar-task active';
  tt.id = 'tt-' + id;
  tt.innerHTML = icon + ' ' + label;
  tt.onclick = () => {
    const w = openWindows[id];
    if (!w) return;
    if (w.minimized) {
      w.el.style.display = ''; w.minimized = false; focusWin(id);
    } else if (w.el.classList.contains('active')) {
      minimizeWin(id);
    } else { focusWin(id); }
  };
  document.getElementById('taskbar-tasks').appendChild(tt);
}

// DRAG
let drag = null;
function getClientX(e) { return e.touches && e.touches.length > 0 ? e.touches[0].clientX : e.clientX; }
function getClientY(e) { return e.touches && e.touches.length > 0 ? e.touches[0].clientY : e.clientY; }

function startDrag(e, id) {
  if (e.target.closest('.win-controls')) return;
  const w = openWindows[id].el;
  focusWin(id);
  drag = { id, startX: getClientX(e) - w.offsetLeft, startY: getClientY(e) - w.offsetTop };
  if (e.type === 'touchstart') {
    document.ontouchmove = doDrag;
    document.ontouchend = stopDrag;
    document.ontouchcancel = stopDrag;
  } else {
    document.onmousemove = doDrag;
    document.onmouseup = stopDrag;
    e.preventDefault();
  }
}
function doDrag(e) {
  if (!drag) return;
  const w = openWindows[drag.id].el;
  const desk = document.getElementById('desktop');
  let nx = getClientX(e) - drag.startX;
  let ny = getClientY(e) - drag.startY;
  nx = Math.max(-w.clientWidth + 60, Math.min(desk.clientWidth - 20, nx));
  ny = Math.max(0, Math.min(desk.clientHeight - 30, ny));
  w.style.left = nx + 'px'; w.style.top = ny + 'px';
  if(e.type === 'touchmove' && e.cancelable) e.preventDefault();
}
function stopDrag() {
  drag = null;
  document.onmousemove = null; document.onmouseup = null;
  document.ontouchmove = null; document.ontouchend = null; document.ontouchcancel = null;
}

// START MENU
function toggleStart() {
  document.getElementById('start-menu').classList.toggle('open');
}
function closeStart() {
  document.getElementById('start-menu').classList.remove('open');
}
document.addEventListener('click', e => {
  if (!e.target.closest('#start-menu') && !e.target.closest('#start-btn')) closeStart();
});

// CLOCK
function updateClock() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const timeStr = hh + ':' + mm + ':' + ss;
  const dateStr = days[now.getDay()] + ', ' + months[now.getMonth()] + ' ' + now.getDate();
  document.getElementById('desktop-clock').textContent = timeStr;
  document.getElementById('desktop-date-label').textContent = dateStr;
  document.getElementById('tb-time').textContent = hh + ':' + mm;
  document.getElementById('tb-date').textContent = now.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
}

// TERMINAL COMMANDS
function getTermCmds() {
  const term = PORTFOLIO_DATA.terminal;
  return {
    help: `<div class="term-line term-yellow">Available commands:</div>
      <div class="term-line term-out">&nbsp; whoami &nbsp;&nbsp;&nbsp;— About ${PORTFOLIO_DATA.user.name.split(' ')[0]}</div>
      <div class="term-line term-out">&nbsp; skills &nbsp;&nbsp;— Tech stack</div>
      <div class="term-line term-out">&nbsp; projects — View projects</div>
      <div class="term-line term-out">&nbsp; contact &nbsp;— Get in touch</div>
      <div class="term-line term-out">&nbsp; experience— Career history</div>
      <div class="term-line term-out">&nbsp; clear &nbsp;&nbsp;&nbsp;— Clear terminal</div>
      <div class="term-line term-out">&nbsp; ls &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— List files</div>
      <div class="term-line term-out">&nbsp; date &nbsp;&nbsp;&nbsp;&nbsp;— Current date/time</div>`,
    whoami: term.whoami.join('\\n'),
    skills: term.skills.join('\\n'),
    projects: term.projects.join('\\n'),
    contact: term.contact.join('\\n'),
    experience: term.experience.join('\\n'),
    ls: term.ls,
    date: () => `<div class="term-line term-out">${new Date().toString()}</div>`,
  };
}

function handleTermInput(e) {
  if (e.key !== 'Enter') return;
  const input = document.getElementById('term-input');
  const cmd = input.value.trim().toLowerCase();
  const out = document.getElementById('term-output');
  input.value = '';
  if (!cmd) return;
  const echoLine = document.createElement('div');
  echoLine.className = 'term-line';
  echoLine.innerHTML = `<span class="term-prompt">${PORTFOLIO_DATA.terminal.prompt}:~$ </span><span class="term-cmd">${cmd}</span>`;
  out.appendChild(echoLine);
  if (cmd === 'clear') { out.innerHTML = ''; return; }
  
  const cmds = getTermCmds();
  const res = cmds[cmd];
  const resultDiv = document.createElement('div');
  if (res) {
    resultDiv.innerHTML = typeof res === 'function' ? res() : res;
  } else {
    resultDiv.innerHTML = `<div class="term-line term-err">bash: ${cmd}: command not found. Type 'help' for commands.</div>`;
  }
  out.appendChild(resultDiv);
  out.scrollTop = out.scrollHeight;
}

function showShutdown() {
  closeStart();
  if (confirm(`Are you sure you want to close ${PORTFOLIO_DATA.user.name.split(' ')[0]}'s Portfolio?\n\nThank you for visiting! 👋`)) {
    document.body.innerHTML = `<div style="width:100vw;height:100vh;background:#000;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;">
      <div style="color:white;font-size:20px;font-family:Segoe UI,sans-serif;">👋 Thanks for visiting ${PORTFOLIO_DATA.user.name}'s Portfolio!</div>
      <div style="color:#aaa;font-size:14px;font-family:Segoe UI,sans-serif;">It is now safe to close this window.</div>
    </div>`;
  }
}

async function initPortfolio() {
  const urlParams = new URLSearchParams(window.location.search);
  let user = urlParams.get('user');
  if (!user) {
    const host = window.location.hostname;
    if (host.includes('shivam')) user = 'shivam';
    else user = 'pranjal'; // default fallback
  }

  try {
    const res = await fetch(`${user}.json`);
    PORTFOLIO_DATA = await res.json();
  } catch (e) {
    console.error("Failed to load portfolio data", e);
    document.body.innerHTML = '<h1 style="color:white;text-align:center;margin-top:20%">Error loading portfolio data. Make sure you are running a local server.</h1>';
    return;
  }

  // Update DOM elements
  document.getElementById('page-title').textContent = `${PORTFOLIO_DATA.user.name} — Portfolio`;
  document.getElementById('start-avatar').textContent = PORTFOLIO_DATA.user.avatar;
  document.getElementById('start-name').textContent = PORTFOLIO_DATA.user.name;
  document.getElementById('start-title').textContent = PORTFOLIO_DATA.user.title;

  // Initialize UI
  updateClock();
  setInterval(updateClock, 1000);
  setTimeout(() => openWin('about'), 300);
}

// Start the app
initPortfolio();