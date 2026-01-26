// Application logic - NO EXTERNAL REQUESTS
// No analytics, no tracking, no data collection. All data stays in localStorage.

let campaign = null;
let currentId = null;

function loadCampaign() {
  const params = new URLSearchParams(window.location.search);
  currentId = params.get('id');

  renderCampaignList();

  if (!currentId) {
    document.getElementById('main').innerHTML = '<div class="notice notice-warning">Select a case from the sidebar.</div>';
    return;
  }

  campaign = allCampaigns[currentId];
  if (!campaign) {
    document.getElementById('main').innerHTML = '<div class="notice notice-warning">Case not found.</div>';
    return;
  }

  document.title = `${campaign.title} - FOIA Generator`;
  document.getElementById('mobile-title').textContent = campaign.title;
  document.getElementById('toc-section').style.display = 'block';

  renderTOC();
  renderMain();
  initScrollSync();
}

function renderCampaignList() {
  const list = Object.values(allCampaigns).sort((a, b) => new Date(b.date) - new Date(a.date));
  document.getElementById('campaign-list').innerHTML = list.map(c => `
    <a href="campaign.html?id=${c.id}" class="campaign-item ${c.id === currentId ? 'active' : ''}">
      <span class="campaign-item-dot"></span>
      ${c.title}
    </a>
  `).join('');
}

function renderTOC() {
  let html = `
    <li class="toc-group">
      <div class="toc-group-label">Setup</div>
      <ul class="toc-items">
        <li class="toc-item" data-section="info"><a href="#info">Your Information</a></li>
      </ul>
    </li>
  `;

  if (campaign.agencies && Object.keys(campaign.agencies).length) {
    html += `
      <li class="toc-group">
        <div class="toc-group-label">FOIA Requests</div>
        <ul class="toc-items">
          ${Object.entries(campaign.agencies).map(([id, a]) =>
            `<li class="toc-item" data-section="${id}"><a href="#${id}">${a.name}</a></li>`
          ).join('')}
        </ul>
      </li>
    `;
  }

  if (campaign.complaints && Object.keys(campaign.complaints).length) {
    html += `
      <li class="toc-group">
        <div class="toc-group-label">IG Complaints</div>
        <ul class="toc-items">
          ${Object.entries(campaign.complaints).map(([id, c]) =>
            `<li class="toc-item" data-section="${id}"><a href="#${id}">${c.name}</a></li>`
          ).join('')}
        </ul>
      </li>
    `;
  }

  if (campaign.congress) {
    html += `
      <li class="toc-group">
        <div class="toc-group-label">Congressional</div>
        <ul class="toc-items">
          <li class="toc-item" data-section="congress"><a href="#congress">Letter</a></li>
        </ul>
      </li>
    `;
  }

  document.getElementById('toc').innerHTML = html;
}

function renderMain() {
  let html = `
    <section id="info">
      <div class="sticky-case-name">
        <h1>${campaign.title}</h1>
        ${campaign.status === 'active' ? '<span class="status-badge">Active</span>' : ''}
      </div>
      <div class="info-form">
        <div class="info-form-inner">
          <input type="text" id="fullName" class="input-name" placeholder="Full Name *" required>
          <input type="email" id="email" class="input-email" placeholder="Email *" required>
          <input type="text" id="street" class="input-street" placeholder="Address (optional)">
          <input type="text" id="city" class="input-city" placeholder="City">
          <input type="text" id="state" class="input-state" placeholder="ST" maxlength="2">
          <input type="text" id="zip" class="input-zip" placeholder="ZIP">
          <label class="checkbox-inline">
            <input type="checkbox" id="isMedia">
            Media
          </label>
          <span class="privacy-badge">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
            100% Private
          </span>
        </div>
        <div class="form-hint">* Required. Address optional. <strong>Nothing sent — copy/paste only.</strong></div>
      </div>

      <div class="section-eyebrow">About This Case</div>
      <div class="case-intro">
        ${campaign.image ? `<img src="${campaign.image}" alt="${campaign.title}" class="case-image">` : ''}
        <p class="description">${campaign.summary}</p>
      </div>
      ${campaign.sources ? `
      <div class="sources">
        <div class="sources-label">News Coverage</div>
        <div class="sources-grid">
          ${campaign.sources.map(s => {
            const initials = s.name.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
            return `<a href="${s.url}" target="_blank" class="source-card">
              <div class="source-card-icon">${initials}</div>
              <span class="source-card-name">${s.name}</span>
              <span class="source-card-arrow">↗</span>
            </a>`;
          }).join('')}
        </div>
      </div>
      ` : ''}
    </section>
  `;

  // FOIA sections
  for (const [id, agency] of Object.entries(campaign.agencies || {})) {
    html += `
      <section id="${id}">
        <div class="section-header">
          <label class="section-check">
            <input type="checkbox" onchange="toggleCompleted('${id}', this.checked)">
          </label>
          <div class="section-header-content">
            <div class="section-eyebrow">FOIA Request</div>
            <h2>${agency.fullName} ${agency.email ? '<span class="submit-badge submit-email">Email</span>' : '<span class="submit-badge submit-portal">Portal</span>'}</h2>
            <p class="description">${agency.description}</p>
          </div>
        </div>
        <div class="card">
          <div class="template-content" id="${id}-template"></div>
          <div class="card-footer">
            <button class="btn btn-expand" onclick="toggleExpand('${id}-template', this)">Expand</button>
            <button class="btn btn-primary" onclick="copyTemplate('${id}-template', this)">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
              Copy
            </button>
            ${agency.email ? `<a class="btn btn-secondary" id="${id}-mailto" href="#" target="_blank">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              Email
            </a>` : ''}
            <span class="fee-badge" title="This is the max fee YOU agree to pay. You can change this amount.">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Your fee limit: $25
            </span>
            <span class="link"><a href="${agency.portal}" target="_blank">${new URL(agency.portal).hostname.replace('www.', '')}</a></span>
          </div>
        </div>
      </section>
    `;
  }

  // Complaints
  for (const [id, complaint] of Object.entries(campaign.complaints || {})) {
    html += `
      <section id="${id}">
        <div class="section-header">
          <label class="section-check">
            <input type="checkbox" onchange="toggleCompleted('${id}', this.checked)">
          </label>
          <div class="section-header-content">
            <div class="section-eyebrow">IG Complaint</div>
            <h2>${complaint.name}</h2>
            <p class="description">${complaint.description}</p>
          </div>
        </div>
        <div class="card">
          <div class="template-content" id="${id}-template"></div>
          <div class="card-footer">
            <button class="btn btn-expand" onclick="toggleExpand('${id}-template', this)">Expand</button>
            <button class="btn btn-primary" onclick="copyTemplate('${id}-template', this)">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
              Copy
            </button>
            <a class="btn btn-secondary" id="${id}-mailto" href="#" target="_blank">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              Email
            </a>
            <span class="link"><a href="${complaint.portal}" target="_blank">${new URL(complaint.portal).hostname.replace('www.', '')}</a></span>
          </div>
        </div>
      </section>
    `;
  }

  // Congress
  if (campaign.congress) {
    html += `
      <section id="congress">
        <div class="section-header">
          <label class="section-check">
            <input type="checkbox" onchange="toggleCompleted('congress', this.checked)">
          </label>
          <div class="section-header-content">
            <div class="section-eyebrow">Congressional</div>
            <h2>Letter to Congress</h2>
            <p class="description">Request oversight from your representatives. <a href="https://www.congress.gov/members/find-your-member" target="_blank">Find yours →</a></p>
          </div>
        </div>
        <div class="card">
          <div class="template-content" id="congress-template"></div>
          <div class="card-footer">
            <button class="btn btn-expand" onclick="toggleExpand('congress-template', this)">Expand</button>
            <button class="btn btn-primary" onclick="copyTemplate('congress-template', this)">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
              Copy
            </button>
            <span class="link"><a href="https://www.congress.gov/members/find-your-member" target="_blank">congress.gov</a></span>
          </div>
        </div>
      </section>
    `;
  }

  // Count total actions for certificate
  const totalActions = Object.keys(campaign.agencies || {}).length + Object.keys(campaign.complaints || {}).length + (campaign.congress ? 1 : 0);

  html += `
    <div class="certificate" id="certificate">
      <div class="certificate-icon">✓</div>
      <h2>Thank You</h2>
      <div class="subtitle">You completed all actions for this case</div>
      <p class="message">
        Every FOIA request, every IG complaint, every congressional letter creates a federal record that persists across administrations. You just made government accountability a little bit stronger.
      </p>
      <div class="record-count">${totalActions} permanent records created</div>
      <div class="fine-print">Records persist even if ignored. The next administration can act on them.</div>
      <div class="fine-print" style="margin-top: 12px;"><strong>Re-submit periodically:</strong> No limit on FOIA requests. Re-submit when investigations close, new info emerges, or exemptions expire. Quarterly re-requests capture new records created.</div>
    </div>
  `;

  html += `<footer>
    <div style="margin-bottom: 8px;">Civic engagement tool · Not legal advice · <a href="https://www.foia.gov/" target="_blank">Learn about FOIA</a></div>
    <div style="font-size: 10px; color: var(--text-muted);">
      Created by <strong>Jung Hoon Son, M.D.</strong> ·
      <a href="https://www.linkedin.com/in/jung-hoon-son/" target="_blank">LinkedIn</a> ·
      <a href="https://www.threads.com/@drjunghoon" target="_blank">Threads</a>
    </div>
  </footer>`;

  document.getElementById('main').innerHTML = html;

  // Load saved form data from localStorage
  const formFields = ['fullName', 'street', 'city', 'state', 'zip', 'email'];
  formFields.forEach(f => {
    const el = document.getElementById(f);
    const saved = localStorage.getItem('foia_' + f);
    if (el && saved) el.value = saved;
  });
  const savedMedia = localStorage.getItem('foia_isMedia');
  if (savedMedia === 'true') document.getElementById('isMedia').checked = true;

  // Add event listeners to save to localStorage and update templates
  formFields.forEach(f => {
    const el = document.getElementById(f);
    if (el) {
      el.addEventListener('input', () => {
        localStorage.setItem('foia_' + f, el.value);
        updateTemplates();
      });
    }
  });
  document.getElementById('isMedia')?.addEventListener('change', (e) => {
    localStorage.setItem('foia_isMedia', e.target.checked);
    updateTemplates();
  });

  updateTemplates();
  restoreCompletedState();
}

function getFormData() {
  return {
    name: document.getElementById('fullName')?.value || '[YOUR NAME]',
    street: document.getElementById('street')?.value || '',
    city: document.getElementById('city')?.value || '',
    state: document.getElementById('state')?.value || '',
    zip: document.getElementById('zip')?.value || '',
    email: document.getElementById('email')?.value || '[EMAIL]',
    isMedia: document.getElementById('isMedia')?.checked || false
  };
}

function getSenderBlock(d) {
  let lines = [d.name];
  if (d.street) lines.push(d.street);
  if (d.city || d.state || d.zip) {
    lines.push([d.city, d.state].filter(Boolean).join(', ') + (d.zip ? ' ' + d.zip : ''));
  }
  lines.push(d.email);
  return lines.filter(l => l && l.trim()).join('\n');
}

function getDate() {
  return new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function generateFOIA(agency) {
  const d = getFormData();
  const feeCategory = d.isMedia
    ? 'I am a representative of the news media as defined in 5 U.S.C. § 552(a)(4)(A)(ii)(II). I am gathering information on a matter of current public interest for publication.'
    : 'I am making this request as an individual and not for commercial use.';

  return `${getSenderBlock(d)}

${getDate()}

FOIA Officer
${agency.address}

Re: Freedom of Information Act Request

Dear FOIA Officer:

Pursuant to the Freedom of Information Act (FOIA), 5 U.S.C. § 552, I respectfully request copies of the following records:

${agency.requests.map((r, i) => `${i + 1}. ${r}`).join('\n\n')}

REQUEST FOR EXPEDITED PROCESSING

I request expedited processing pursuant to 5 U.S.C. § 552(a)(6)(E). There is a compelling need for these records because this matter involves questions about the government's integrity and is of widespread and exceptional media interest. Delay would compromise significant recognized interests.

FORMAT OF RECORDS

I request that responsive records be provided in electronic format (PDF preferred). If records exist in multiple formats, please provide the most complete version.

FEE CATEGORY AND WAIVER REQUEST

${feeCategory}

I request a waiver of all fees pursuant to 5 U.S.C. § 552(a)(4)(A)(iii). Disclosure of the requested information is in the public interest because it is likely to contribute significantly to public understanding of the operations or activities of the government and is not primarily in my commercial interest.

If my fee waiver request is denied, I am willing to pay fees up to $25.00. Please contact me before incurring costs beyond this amount.

RECORD PRESERVATION AND FUTURE RELEASE

This request concerns a death involving federal agents. I hereby formally request:

1. All responsive records be preserved indefinitely pursuant to your agency's record retention obligations and the Federal Records Act (44 U.S.C. Chapter 31).

2. For any redacted material: please note that I intend to submit subsequent requests as exemptions expire (e.g., when investigations close, when privacy interests diminish, or under future administration policies). Redactions made today are not permanent.

3. This FOIA request itself constitutes a federal record documenting that these records were formally requested as of the date above.

EXPEDITED RESPONSE

Given the request for expedited processing above, I expect a response within 10 business days as required by 5 U.S.C. § 552(a)(6)(E)(ii). If expedited processing is denied, I expect a response within the standard 20 business days per 5 U.S.C. § 552(a)(6)(A)(i). If you deny any part of this request, please cite each specific exemption and explain how it applies. Please also inform me of appeal procedures available under the law.

Thank you for your prompt attention to this request.

Sincerely,

${d.name}`;
}

function generateComplaint(complaint) {
  const d = getFormData();
  return `${getSenderBlock(d)}

${getDate()}

Office of Inspector General
${complaint.address}

Re: ${complaint.subject}

Dear Inspector General:

I am writing to file a formal complaint pursuant to the Inspector General Act of 1978, as amended (5 U.S.C. App.). I respectfully request that your office investigate the matters described below, which involve potential violations of federal law, regulations, and agency policy.

SUMMARY OF ALLEGATIONS

${complaint.allegations.map((a, i) => `${i + 1}. ${a}`).join('\n\n')}

LEGAL BASIS FOR COMPLAINT

These allegations implicate potential violations of:
- 18 U.S.C. § 242 (Deprivation of Rights Under Color of Law)
- 18 U.S.C. § 1001 (False Statements)
- 18 U.S.C. § 1512 (Tampering with a Witness, Victim, or Informant)
- 18 U.S.C. § 1519 (Destruction, Alteration, or Falsification of Records)
- Agency policies governing use of force and conduct of personnel

IMPORTANT: NO STATUTE OF LIMITATIONS

This complaint involves a death in federal custody or at the hands of federal agents. Please note:
- There is NO statute of limitations for murder under federal law (18 U.S.C. § 1111)
- There is NO statute of limitations for civil rights violations resulting in death (18 U.S.C. § 242)
- Any decision to decline prosecution or close this investigation is NOT final and may be revisited by future administrations
- I request that all records be preserved indefinitely to enable future review

REQUESTED INVESTIGATIVE ACTIONS

I respectfully request that the Office of Inspector General:

${complaint.actions.map((a, i) => `${i + 1}. ${a}`).join('\n')}

COMPLAINANT DECLARATION

I declare under penalty of perjury that the foregoing is true and correct to the best of my knowledge and belief. I understand that filing a false complaint may subject me to criminal penalties.

REQUEST FOR CONFIRMATION

I request written confirmation of receipt of this complaint within 10 business days, including any case or tracking number assigned. I also request notification of any determination made regarding this complaint.

I am available to provide additional information if needed.

Respectfully submitted,

${d.name}`;
}

function generateCongress() {
  const d = getFormData();
  const c = campaign.congress;
  return `${getSenderBlock(d)}

${getDate()}

The Honorable [REPRESENTATIVE/SENATOR NAME]
[OFFICE ADDRESS]
Washington, D.C. [ZIP CODE]

Re: ${c.subject}

Dear [Representative/Senator] [LAST NAME]:

As your constituent, I am writing to request congressional oversight regarding a matter of significant public concern. I urge you to use your authority to investigate and take action on the following:

FACTUAL BACKGROUND

${c.background.map(b => `• ${b}`).join('\n\n')}

MATTERS REQUIRING CONGRESSIONAL ATTENTION

${c.concerns.map((b, i) => `${i + 1}. ${b}`).join('\n\n')}

REQUESTED CONGRESSIONAL ACTIONS

I respectfully request that you:

${c.actions.map((a, i) => `${i + 1}. ${a}`).join('\n')}

PRESERVATION FOR FUTURE ACCOUNTABILITY

This matter involves the death of a person at the hands of federal agents. I respectfully request:
- Enter this matter into the Congressional Record to create a permanent government record
- There is NO statute of limitations for murder (18 U.S.C. § 1111) or civil rights violations resulting in death (18 U.S.C. § 242)
- Any executive branch decision to decline investigation is NOT final and may be revisited by future administrations
- Preserve all records and correspondence for future congressional review

CONSTITUENT REQUEST

As one of your constituents, I ask that your office acknowledge receipt of this letter and provide updates on any actions taken. I am available to provide additional information or testimony if requested.

This matter affects public trust in federal law enforcement and government accountability. Congressional oversight is essential to ensure that these cases remain open for future accountability, regardless of current administration decisions.

Thank you for your service and attention to this matter.

Respectfully,

${d.name}${d.city || d.state ? `\nConstituent, ${[d.city, d.state].filter(Boolean).join(', ')}` : ''}`;
}

function updateTemplates() {
  for (const [id, agency] of Object.entries(campaign.agencies || {})) {
    const el = document.getElementById(`${id}-template`);
    if (el) el.textContent = generateFOIA(agency);
    const mailto = document.getElementById(`${id}-mailto`);
    if (mailto && agency.email) {
      mailto.href = `mailto:${agency.email}?subject=${encodeURIComponent('FOIA Request - ' + campaign.title)}&body=${encodeURIComponent(generateFOIA(agency))}`;
    }
  }

  for (const [id, complaint] of Object.entries(campaign.complaints || {})) {
    const el = document.getElementById(`${id}-template`);
    if (el) el.textContent = generateComplaint(complaint);
    const mailto = document.getElementById(`${id}-mailto`);
    if (mailto && complaint.email) {
      mailto.href = `mailto:${complaint.email}?subject=${encodeURIComponent(complaint.subject)}&body=${encodeURIComponent(generateComplaint(complaint))}`;
    }
  }

  if (campaign.congress) {
    const el = document.getElementById('congress-template');
    if (el) el.textContent = generateCongress();
  }
}

function toggleExpand(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('expanded');
  btn.textContent = el.classList.contains('expanded') ? 'Collapse' : 'Expand';
}

function toggleCompleted(sectionId, isChecked) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  // Update section
  if (isChecked) {
    section.classList.add('completed');
    localStorage.setItem(`foia_completed_${currentId}_${sectionId}`, 'true');
  } else {
    section.classList.remove('completed');
    localStorage.removeItem(`foia_completed_${currentId}_${sectionId}`);
  }

  // Sync TOC
  const tocItem = document.querySelector(`.toc-item[data-section="${sectionId}"]`);
  if (tocItem) {
    if (isChecked) {
      tocItem.classList.add('completed');
    } else {
      tocItem.classList.remove('completed');
    }
  }

  // Check if all complete
  checkAllComplete();
}

function checkAllComplete() {
  const sections = document.querySelectorAll('section[id]');
  const checkableSections = Array.from(sections).filter(s => s.id !== 'info');
  const allComplete = checkableSections.every(s => s.classList.contains('completed'));

  const cert = document.getElementById('certificate');
  if (cert) {
    if (allComplete && checkableSections.length > 0) {
      cert.classList.add('visible');
      cert.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      cert.classList.remove('visible');
    }
  }
}

function restoreCompletedState() {
  document.querySelectorAll('section[id]').forEach(section => {
    const sectionId = section.id;
    if (sectionId === 'info') return;
    const isCompleted = localStorage.getItem(`foia_completed_${currentId}_${sectionId}`) === 'true';
    if (isCompleted) {
      section.classList.add('completed');
      const checkbox = section.querySelector('.section-check input');
      if (checkbox) checkbox.checked = true;
      // Sync TOC
      const tocItem = document.querySelector(`.toc-item[data-section="${sectionId}"]`);
      if (tocItem) tocItem.classList.add('completed');
    }
  });
  // Show certificate if all already complete
  checkAllComplete();
}

async function copyTemplate(id, btn) {
  const text = document.getElementById(id)?.textContent;
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    const orig = btn.innerHTML;
    btn.innerHTML = '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Copied';
    btn.classList.add('copied');
    setTimeout(() => { btn.innerHTML = orig; btn.classList.remove('copied'); }, 1500);
  } catch (e) {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }
}

function initScrollSync() {
  const sections = document.querySelectorAll('section[id]');
  const items = document.querySelectorAll('.toc-item');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        // Update TOC
        items.forEach(i => i.classList.remove('active'));
        const active = document.querySelector(`.toc-item[data-section="${e.target.id}"]`);
        if (active) active.classList.add('active');
        // Update section highlight
        sections.forEach(s => s.classList.remove('active-section'));
        e.target.classList.add('active-section');
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach(s => obs.observe(s));
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.querySelector('.overlay').classList.toggle('open');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.querySelector('.overlay').classList.remove('open');
}

document.addEventListener('click', e => {
  if (e.target.closest('.toc-item a')) closeSidebar();
});

// Search functionality
document.getElementById('search').addEventListener('input', e => {
  const q = e.target.value.toLowerCase().trim();
  const list = Object.values(allCampaigns);
  if (!q) {
    renderCampaignList();
    return;
  }
  const filtered = list.filter(c => {
    const searchable = [c.title, c.summary, ...(c.keywords || [])].join(' ').toLowerCase();
    return searchable.includes(q);
  });
  const container = document.getElementById('campaign-list');
  if (filtered.length === 0) {
    container.innerHTML = '<div style="padding: 12px; color: var(--text-muted); font-size: 12px;">No cases found.</div>';
    return;
  }
  container.innerHTML = filtered.map(c => `
    <a href="campaign.html?id=${c.id}" class="campaign-item ${c.id === currentId ? 'active' : ''}">
      <span class="campaign-item-dot"></span>
      ${c.title}
    </a>
  `).join('');
});

// Initialize on load
loadCampaign();
