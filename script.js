const WINS = {
  about: {
    title: 'About Me — Pranjal Sharma',
    icon: '👤', w: 520, h: 420,
    content: () => `
      <div class="about-content">
        <div class="about-header">
          <div class="avatar">PS</div>
          <div>
            <div class="about-name">Pranjal Sharma</div>
            <div class="about-role">💻 QA Automation Engineer</div>
            <div class="about-location">📍 Indore, Madhya Pradesh</div>
          </div>
        </div>
        <div class="about-bio">
          Results-driven QA Automation Engineer with 4+ years of experience in Manual and Automation Testing across Web, Mobile (Android & iOS), and Banking/FinTech domains. Proficient in Playwright, Selenium, and Robot Framework. Passionate about ensuring quality and performance.
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <div class="info-row"><span class="info-label">🎓 Degree</span> MCA - BIT Mesra</div>
          <div class="info-row"><span class="info-label">📧 Email</span> sharmapranjal0111@gmail.com</div>
          <div class="info-row"><span class="info-label">📞 Phone</span> +91-9770247401</div>
          <div class="info-row"><span class="info-label">🗣️ Languages</span>
            <span class="chip">English</span><span class="chip">Hindi</span>
          </div>
        </div>
        <div>
          <div style="font-size:11px;font-weight:700;color:#666;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Domains & Interests</div>
          <div>
            <span class="chip">🏦 FinTech</span>
            <span class="chip">🤖 Automation</span>
            <span class="chip">🚀 CI/CD</span>
            <span class="chip">📱 Mobile Testing</span>
            <span class="chip">📊 Agile/Scrum</span>
          </div>
        </div>
      </div>`
  },
  skills: {
    title: 'Skills — pranjal_skills.exe',
    icon: '⚡', w: 480, h: 460,
    content: () => `
      <div class="skills-content">
        <div class="skill-group">
          <div class="skill-group-title">🤖 Automation Testing</div>
          ${skillBar('Playwright (JS)', 90)}
          ${skillBar('Selenium WebDriver', 85)}
          ${skillBar('Robot Framework', 80)}
        </div>
        <div class="skill-group">
          <div class="skill-group-title">🛠️ Manual & API Testing</div>
          ${skillBar('Functional & Regression', 95)}
          ${skillBar('Postman & REST API', 88)}
          ${skillBar('SQL & Database Testing', 85)}
        </div>
        <div class="skill-group">
          <div class="skill-group-title">⚙️ Frameworks & Tools</div>
          ${skillBar('TestNG, Maven, BDD', 85)}
          ${skillBar('Jenkins & Git', 80)}
          ${skillBar('JIRA & Agile/Scrum', 90)}
        </div>
        <div class="skill-group">
          <div class="skill-group-title">🧠 AI Tools</div>
          ${skillBar('ChatGPT & GitHub Copilot', 85)}
          ${skillBar('Gemini', 80)}
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
    title: 'Projects & Achievements',
    icon: '📁', w: 540, h: 470,
    content: () => `
      <div class="projects-content">
        <div class="project-card">
          <div class="project-top"><span class="project-icon">🚀</span><div><div class="project-name">Playwright Automation Framework</div><div class="project-tech">Playwright · JavaScript · CI/CD</div></div></div>
          <div class="project-desc">Designed and implemented an automation framework from scratch at Bandhan Life Insurance, reducing manual regression testing effort by over 60%.</div>
          <div class="project-tags"><span class="tag">Automation</span><span class="tag">Framework Design</span></div>
        </div>
        <div class="project-card">
          <div class="project-top"><span class="project-icon">🏦</span><div><div class="project-name">Core Banking Validation</div><div class="project-tech">Manual Testing · SQL · Postman</div></div></div>
          <div class="project-desc">Validated critical core banking transactions including NEFT, RTGS, SWIFT payments, and GL reconciliation workflows ensuring 100% compliance.</div>
          <div class="project-tags"><span class="tag">FinTech</span><span class="tag">Banking</span><span class="tag">API</span></div>
        </div>
        <div class="project-card">
          <div class="project-top"><span class="project-icon">🏆</span><div><div class="project-name">Tech Excellence Award 2024–25</div><div class="project-tech">Bandhan Life Insurance Ltd</div></div></div>
          <div class="project-desc">Recognized for outstanding contribution to quality assurance, process improvements, and successful delivery of automation suites.</div>
          <div class="project-tags"><span class="tag">Award</span><span class="tag">Achievement</span></div>
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
            <div class="exp-role">QA Automation Engineer</div>
            <div class="exp-company">Bandhan Life Insurance Ltd, Mumbai</div>
            <div class="exp-period">Dec 2022 — Present</div>
            <div class="exp-points">
              <div class="exp-point">Designed automation frameworks using Playwright, Selenium, and Robot Framework, reducing regression effort by 60%+</div>
              <div class="exp-point">Executed end-to-end testing for web and mobile (Android/iOS) banking applications</div>
              <div class="exp-point">Validated core banking workflows (NEFT/RTGS/SWIFT) and GL reconciliation</div>
              <div class="exp-point">Integrated automated test suites with Jenkins CI/CD pipelines</div>
              <div class="exp-point">Performed REST API testing with Postman and backend database validation via SQL</div>
            </div>
          </div>
        </div>
        <div class="exp-item">
          <div class="exp-info">
            <div class="exp-role">Education & Certification</div>
            <div class="exp-company">BIT Mesra / ISTQB</div>
            <div class="exp-period">2022</div>
            <div class="exp-points">
              <div class="exp-point">Master of Computer Applications (MCA) — CGPA: 8.21</div>
              <div class="exp-point">ISTQB Foundation Level Certified</div>
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
        <div style="font-size:13px;color:#555;margin-bottom:4px;">Reach out — I'm always open to new opportunities!</div>
        <div class="contact-row" onclick="alert('Email: sharmapranjal0111@gmail.com')">
          <span class="contact-ico">📧</span>
          <div><div class="contact-label">Email</div><div class="contact-val">sharmapranjal0111@gmail.com</div></div>
        </div>
        <div class="contact-row" onclick="alert('Phone: +91-9770247401')">
          <span class="contact-ico">📞</span>
          <div><div class="contact-label">Phone</div><div class="contact-val">+91-9770247401</div></div>
        </div>
        <div class="contact-row" onclick="alert('LinkedIn: linkedin.com/in/pranjal-sharma-b294071aa')">
          <span class="contact-ico">💼</span>
          <div><div class="contact-label">LinkedIn</div><div class="contact-val">pranjal-sharma-b294071aa</div></div>
        </div>
        <div class="contact-row">
          <span class="contact-ico">📍</span>
          <div><div class="contact-label">Location</div><div class="contact-val">Indore, Madhya Pradesh</div></div>
        </div>
      </div>`
  },
  terminal: {
    title: 'Terminal — cmd.exe',
    icon: '💻', w: 560, h: 360,
    content: () => `
      <div class="terminal-body" id="term-output">
        <div class="term-line"><span class="term-yellow">Pranjal Sharma's Portfolio Terminal v1.0.0</span></div>
        <div class="term-line"><span class="term-out">Type 'help' to see available commands.</span></div>
        <div class="term-line">&nbsp;</div>
      </div>
      <div class="terminal-body" style="padding-top:4px;padding-bottom:4px;border-top:1px solid #333;min-height:unset;">
        <div class="term-input-row">
          <span class="term-prompt">pranjal@portfolio</span><span style="color:#fff;">:</span><span style="color:#90d0a0;">~</span><span style="color:#fff;">$ </span>
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
    <div class="term-line term-out">&nbsp; whoami &nbsp;&nbsp;&nbsp;— About Pranjal</div>
    <div class="term-line term-out">&nbsp; skills &nbsp;&nbsp;— Tech stack</div>
    <div class="term-line term-out">&nbsp; projects — View projects</div>
    <div class="term-line term-out">&nbsp; contact &nbsp;— Get in touch</div>
    <div class="term-line term-out">&nbsp; experience— Career history</div>
    <div class="term-line term-out">&nbsp; clear &nbsp;&nbsp;&nbsp;— Clear terminal</div>
    <div class="term-line term-out">&nbsp; ls &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— List files</div>
    <div class="term-line term-out">&nbsp; date &nbsp;&nbsp;&nbsp;&nbsp;— Current date/time</div>`,
  whoami: `<div class="term-line term-out">Pranjal Sharma — QA Automation Engineer</div>
    <div class="term-line" style="color:#bbb;">ISTQB Certified | Playwright & Selenium Expert | India</div>
    <div class="term-line" style="color:#bbb;">4+ years experience in Manual & Automation Testing</div>`,
  skills: `<div class="term-line term-yellow">[ Tech Stack ]</div>
    <div class="term-line" style="color:#adf">Automation&nbsp;: Playwright, Selenium, Robot Framework</div>
    <div class="term-line" style="color:#adf">Manual&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Functional, Regression, API, DB Testing</div>
    <div class="term-line" style="color:#adf">Tools&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Postman, Jenkins, JIRA, TestNG, Maven</div>
    <div class="term-line" style="color:#adf">AI Tools&nbsp;&nbsp;&nbsp;: ChatGPT, GitHub Copilot, Gemini</div>`,
  projects: `<div class="term-line term-yellow">[ Projects & Achievements ]</div>
    <div class="term-line term-out">🚀 Playwright Automation Framework (60%+ effort reduced)</div>
    <div class="term-line term-out">🏦 Core Banking & GL Reconciliation Testing</div>
    <div class="term-line term-out">🏆 Tech Excellence Award 2024–25</div>`,
  contact: `<div class="term-line term-yellow">[ Contact Info ]</div>
    <div class="term-line" style="color:#8df">📧 sharmapranjal0111@gmail.com</div>
    <div class="term-line" style="color:#8df">📞 +91-9770247401</div>
    <div class="term-line" style="color:#8df">💼 linkedin.com/in/pranjal-sharma-b294071aa</div>`,
  experience: `<div class="term-line term-yellow">[ Career Timeline ]</div>
    <div class="term-line term-out">2022–Present : QA Automation Engineer @ Bandhan Life Insurance</div>
    <div class="term-line term-out">2022&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: MCA @ BIT Mesra (CGPA: 8.21)</div>`,
  ls: `<div class="term-line" style="color:#9be">about.txt &nbsp;&nbsp; skills.json &nbsp;&nbsp; achievements/ &nbsp;&nbsp; resume.pdf &nbsp;&nbsp; contact.vcf</div>`,
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
  echoLine.innerHTML = `<span class="term-prompt">pranjal@portfolio</span><span style="color:#fff;">:~$ </span><span class="term-cmd">${cmd}</span>`;
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
  if (confirm('Are you sure you want to close Pranjal\'s Portfolio?\n\nThank you for visiting! 👋')) {
    document.body.innerHTML = `<div style="width:100vw;height:100vh;background:#000;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;">
      <div style="color:white;font-size:20px;font-family:Segoe UI,sans-serif;">👋 Thanks for visiting Pranjal's Portfolio!</div>
      <div style="color:#aaa;font-size:14px;font-family:Segoe UI,sans-serif;">It is now safe to close this window.</div>
    </div>`;
  }
}

// Auto-open About on load
setTimeout(() => openWin('about'), 300);