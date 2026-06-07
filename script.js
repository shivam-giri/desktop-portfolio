const WINS = {
  about: {
    title: 'About Me — Shivam Giri',
    icon: '👤', w: 520, h: 400,
    content: () => `
      <div class="about-content">
        <div class="about-header">
          <div class="avatar">SG</div>
          <div>
            <div class="about-name">Shivam Giri</div>
            <div class="about-role">💻 Software Engineer</div>
            <div class="about-location">📍 India</div>
          </div>
        </div>
        <div class="about-bio">
          Passionate software engineer with expertise in building scalable web applications and robust backend systems.
          I love turning complex problems into elegant, efficient solutions — one commit at a time.
          Enthusiast of open-source, clean architecture, and continuous learning.
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <div class="info-row"><span class="info-label">🎓 Degree</span> B.Tech in Computer Science</div>
          <div class="info-row"><span class="info-label">📧 Email</span> shivam.giri@example.com</div>
          <div class="info-row"><span class="info-label">🌐 Website</span> <span style="color:#3a7bd5;">shivamgiri.dev</span></div>
          <div class="info-row"><span class="info-label">🗣️ Languages</span>
            <span class="chip">English</span><span class="chip">Hindi</span>
          </div>
        </div>
        <div>
          <div style="font-size:11px;font-weight:700;color:#666;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Interests</div>
          <div>
            <span class="chip">☁️ Cloud</span>
            <span class="chip">🤖 AI/ML</span>
            <span class="chip">🔐 Security</span>
            <span class="chip">🎮 Game Dev</span>
            <span class="chip">📖 Tech Blogging</span>
            <span class="chip">🎸 Music</span>
          </div>
        </div>
      </div>`
  },
  skills: {
    title: 'Skills — shivam_skills.exe',
    icon: '⚡', w: 480, h: 460,
    content: () => `
      <div class="skills-content">
        <div class="skill-group">
          <div class="skill-group-title">🖥️ Frontend</div>
          ${skillBar('React / Next.js', 90)}
          ${skillBar('TypeScript', 85)}
          ${skillBar('HTML & CSS', 92)}
          ${skillBar('Vue.js', 70)}
        </div>
        <div class="skill-group">
          <div class="skill-group-title">⚙️ Backend</div>
          ${skillBar('Node.js / Express', 88)}
          ${skillBar('Python / Django', 80)}
          ${skillBar('Go', 65)}
          ${skillBar('REST & GraphQL', 85)}
        </div>
        <div class="skill-group">
          <div class="skill-group-title">🗄️ Database & Cloud</div>
          ${skillBar('PostgreSQL / MySQL', 82)}
          ${skillBar('MongoDB', 78)}
          ${skillBar('AWS / GCP', 72)}
          ${skillBar('Docker / K8s', 75)}
        </div>
        <div class="skill-group">
          <div class="skill-group-title">🛠️ Tools</div>
          ${skillBar('Git / GitHub', 95)}
          ${skillBar('Linux / Bash', 80)}
          ${skillBar('CI/CD Pipelines', 73)}
        </div>
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
    title: 'Projects — My Work',
    icon: '📁', w: 540, h: 470,
    content: () => `
      <div class="projects-content">
        <div class="project-card">
          <div class="project-top"><span class="project-icon">🛒</span><div><div class="project-name">ShopStream</div><div class="project-tech">React · Node.js · MongoDB · Stripe</div></div></div>
          <div class="project-desc">A full-stack e-commerce platform with real-time inventory, cart management, payment gateway integration, and an admin dashboard for analytics.</div>
          <div class="project-tags"><span class="tag">Full-Stack</span><span class="tag">REST API</span><span class="tag">Auth</span><span class="tag">Payments</span></div>
        </div>
        <div class="project-card">
          <div class="project-top"><span class="project-icon">🤖</span><div><div class="project-name">ChatMatrix</div><div class="project-tech">Python · FastAPI · OpenAI · WebSockets</div></div></div>
          <div class="project-desc">Real-time AI chat application with multi-model support, conversation memory, and streaming responses. Deployed on AWS with Docker.</div>
          <div class="project-tags"><span class="tag">AI/ML</span><span class="tag">WebSockets</span><span class="tag">Docker</span><span class="tag">AWS</span></div>
        </div>
        <div class="project-card">
          <div class="project-top"><span class="project-icon">📊</span><div><div class="project-name">DataPulse</div><div class="project-tech">Next.js · D3.js · PostgreSQL · GraphQL</div></div></div>
          <div class="project-desc">Interactive data visualization dashboard for business KPIs with customizable widgets, scheduled reports, and real-time alerts.</div>
          <div class="project-tags"><span class="tag">Data Viz</span><span class="tag">GraphQL</span><span class="tag">Dashboard</span></div>
        </div>
        <div class="project-card">
          <div class="project-top"><span class="project-icon">🔒</span><div><div class="project-name">VaultPass</div><div class="project-tech">Go · AES-256 · React Native</div></div></div>
          <div class="project-desc">End-to-end encrypted password manager with zero-knowledge architecture, biometric auth, and cross-device sync via secure cloud storage.</div>
          <div class="project-tags"><span class="tag">Security</span><span class="tag">Encryption</span><span class="tag">Mobile</span></div>
        </div>
      </div>`
  },
  experience: {
    title: 'Experience — Career Timeline',
    icon: '💼', w: 520, h: 440,
    content: () => `
      <div class="exp-content">
        <div class="exp-item">
          <div class="exp-info">
            <div class="exp-role">Senior Software Engineer</div>
            <div class="exp-company">TechCorp Solutions Pvt. Ltd.</div>
            <div class="exp-period">Jan 2023 — Present · Full-time</div>
            <div class="exp-points">
              <div class="exp-point">Led development of microservices architecture serving 500K+ daily active users</div>
              <div class="exp-point">Reduced API response time by 40% through caching and query optimization</div>
              <div class="exp-point">Mentored 4 junior engineers and conducted weekly code reviews</div>
            </div>
          </div>
        </div>
        <div class="exp-item">
          <div class="exp-info">
            <div class="exp-role">Software Engineer II</div>
            <div class="exp-company">Nexus Digital Labs</div>
            <div class="exp-period">Jul 2021 — Dec 2022 · Full-time</div>
            <div class="exp-points">
              <div class="exp-point">Built and shipped 3 major product features used by 200K+ users monthly</div>
              <div class="exp-point">Migrated legacy PHP monolith to Node.js microservices</div>
              <div class="exp-point">Implemented CI/CD pipelines reducing deployment time by 60%</div>
            </div>
          </div>
        </div>
        <div class="exp-item">
          <div class="exp-info">
            <div class="exp-role">Junior Frontend Developer</div>
            <div class="exp-company">Pixel Forge Studios</div>
            <div class="exp-period">Jun 2020 — Jun 2021 · Full-time</div>
            <div class="exp-points">
              <div class="exp-point">Developed React components for SaaS products with 99.9% uptime</div>
              <div class="exp-point">Improved page load performance by 35% through code splitting</div>
            </div>
          </div>
        </div>
        <div class="exp-item" style="border-left-color:#90d0a0;">
          <div class="exp-info">
            <div class="exp-role" style="color:#2a8a4a;">Software Intern</div>
            <div class="exp-company">StartupNest</div>
            <div class="exp-period">Dec 2019 — May 2020 · Internship</div>
            <div class="exp-points">
              <div class="exp-point">Contributed to open-source tools and developed internal dashboards</div>
            </div>
          </div>
        </div>
      </div>`
  },
  contact: {
    title: 'Contact — Get in Touch',
    icon: '📬', w: 420, h: 360,
    content: () => `
      <div class="contact-content">
        <div style="font-size:13px;color:#555;margin-bottom:4px;">Reach out — I'm always open to new opportunities and collaborations!</div>
        <div class="contact-row" onclick="alert('Email: shivam.giri@example.com')">
          <span class="contact-ico">📧</span>
          <div><div class="contact-label">Email</div><div class="contact-val">shivam.giri@example.com</div></div>
        </div>
        <div class="contact-row" onclick="alert('GitHub: github.com/shivamgiri')">
          <span class="contact-ico">🐙</span>
          <div><div class="contact-label">GitHub</div><div class="contact-val">github.com/shivamgiri</div></div>
        </div>
        <div class="contact-row" onclick="alert('LinkedIn: linkedin.com/in/shivamgiri')">
          <span class="contact-ico">💼</span>
          <div><div class="contact-label">LinkedIn</div><div class="contact-val">linkedin.com/in/shivamgiri</div></div>
        </div>
        <div class="contact-row" onclick="alert('Twitter: @shivamgiri_dev')">
          <span class="contact-ico">🐦</span>
          <div><div class="contact-label">Twitter / X</div><div class="contact-val">@shivamgiri_dev</div></div>
        </div>
        <div class="contact-row" onclick="alert('Portfolio: shivamgiri.dev')">
          <span class="contact-ico">🌐</span>
          <div><div class="contact-label">Website</div><div class="contact-val">shivamgiri.dev</div></div>
        </div>
      </div>`
  },
  terminal: {
    title: 'Terminal — cmd.exe',
    icon: '💻', w: 560, h: 360,
    content: () => `
      <div class="terminal-body" id="term-output">
        <div class="term-line"><span class="term-yellow">Shivam Giri's Portfolio Terminal v1.0.0</span></div>
        <div class="term-line"><span class="term-out">Type 'help' to see available commands.</span></div>
        <div class="term-line">&nbsp;</div>
      </div>
      <div class="terminal-body" style="padding-top:4px;padding-bottom:4px;border-top:1px solid #333;min-height:unset;">
        <div class="term-input-row">
          <span class="term-prompt">shivam@portfolio</span><span style="color:#fff;">:</span><span style="color:#90d0a0;">~</span><span style="color:#fff;">$ </span>
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

  const win = document.createElement('div');
  win.className = 'win active';
  win.id = 'win-' + id;
  win.style.cssText = `left:${x}px;top:${y}px;width:${w}px;height:${h}px;z-index:${++zTop};`;
  win.innerHTML = `
    <div class="win-titlebar" onmousedown="startDrag(event, '${id}')" ontouchstart="startDrag(event, '${id}')">
      <span class="win-title-icon">${cfg.icon}</span>
      <span class="win-title-text">${cfg.title}</span>
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
  addTaskbarTask(id, cfg.icon, cfg.title.split('—')[0].trim());

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
updateClock();
setInterval(updateClock, 1000);

// TERMINAL COMMANDS
const termCmds = {
  help: `<div class="term-line term-yellow">Available commands:</div>
    <div class="term-line term-out">&nbsp; whoami &nbsp;&nbsp;&nbsp;— About Shivam</div>
    <div class="term-line term-out">&nbsp; skills &nbsp;&nbsp;— Tech stack</div>
    <div class="term-line term-out">&nbsp; projects — View projects</div>
    <div class="term-line term-out">&nbsp; contact &nbsp;— Get in touch</div>
    <div class="term-line term-out">&nbsp; experience— Career history</div>
    <div class="term-line term-out">&nbsp; clear &nbsp;&nbsp;&nbsp;— Clear terminal</div>
    <div class="term-line term-out">&nbsp; ls &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— List files</div>
    <div class="term-line term-out">&nbsp; date &nbsp;&nbsp;&nbsp;&nbsp;— Current date/time</div>`,
  whoami: `<div class="term-line term-out">Shivam Giri — Software Engineer</div>
    <div class="term-line" style="color:#bbb;">Full-stack developer | Open source enthusiast | India</div>
    <div class="term-line" style="color:#bbb;">3+ years experience building scalable web apps</div>`,
  skills: `<div class="term-line term-yellow">[ Tech Stack ]</div>
    <div class="term-line" style="color:#adf">Frontend&nbsp;&nbsp;: React, Next.js, TypeScript, Vue.js</div>
    <div class="term-line" style="color:#adf">Backend&nbsp;&nbsp;: Node.js, Python, Go, FastAPI</div>
    <div class="term-line" style="color:#adf">Database : PostgreSQL, MongoDB, Redis</div>
    <div class="term-line" style="color:#adf">Cloud&nbsp;&nbsp;&nbsp;&nbsp;: AWS, GCP, Docker, Kubernetes</div>`,
  projects: `<div class="term-line term-yellow">[ Projects — 4 found ]</div>
    <div class="term-line term-out">📁 ShopStream &nbsp;&nbsp;— Full-stack e-commerce platform</div>
    <div class="term-line term-out">🤖 ChatMatrix &nbsp;&nbsp;— Real-time AI chat app</div>
    <div class="term-line term-out">📊 DataPulse &nbsp;&nbsp;&nbsp;— Analytics dashboard</div>
    <div class="term-line term-out">🔒 VaultPass &nbsp;&nbsp;&nbsp;— Encrypted password manager</div>`,
  contact: `<div class="term-line term-yellow">[ Contact Info ]</div>
    <div class="term-line" style="color:#8df">📧 shivam.giri@example.com</div>
    <div class="term-line" style="color:#8df">🐙 github.com/shivamgiri</div>
    <div class="term-line" style="color:#8df">💼 linkedin.com/in/shivamgiri</div>`,
  experience: `<div class="term-line term-yellow">[ Career Timeline ]</div>
    <div class="term-line term-out">2023–Present : Senior SWE @ TechCorp Solutions</div>
    <div class="term-line term-out">2021–2022&nbsp;&nbsp;&nbsp;: SWE II @ Nexus Digital Labs</div>
    <div class="term-line term-out">2020–2021&nbsp;&nbsp;&nbsp;: Junior Dev @ Pixel Forge Studios</div>
    <div class="term-line term-out">2019–2020&nbsp;&nbsp;&nbsp;: Intern @ StartupNest</div>`,
  ls: `<div class="term-line" style="color:#9be">about.txt &nbsp;&nbsp; skills.json &nbsp;&nbsp; projects/ &nbsp;&nbsp; resume.pdf &nbsp;&nbsp; contact.vcf</div>`,
  date: () => `<div class="term-line term-out">${new Date().toString()}</div>`,
};

function handleTermInput(e) {
  if (e.key !== 'Enter') return;
  const input = document.getElementById('term-input');
  const cmd = input.value.trim().toLowerCase();
  const out = document.getElementById('term-output');
  input.value = '';
  if (!cmd) return;
  const echoLine = document.createElement('div');
  echoLine.className = 'term-line';
  echoLine.innerHTML = `<span class="term-prompt">shivam@portfolio</span><span style="color:#fff;">:~$ </span><span class="term-cmd">${cmd}</span>`;
  out.appendChild(echoLine);
  if (cmd === 'clear') { out.innerHTML = ''; return; }
  const res = termCmds[cmd];
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
  if (confirm('Are you sure you want to close Shivam\'s Portfolio?\n\nThank you for visiting! 👋')) {
    document.body.innerHTML = `<div style="width:100vw;height:100vh;background:#000;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;">
      <div style="color:white;font-size:20px;font-family:Segoe UI,sans-serif;">👋 Thanks for visiting Shivam's Portfolio!</div>
      <div style="color:#aaa;font-size:14px;font-family:Segoe UI,sans-serif;">It is now safe to close this window.</div>
    </div>`;
  }
}

// Auto-open About on load
setTimeout(() => openWin('about'), 300);