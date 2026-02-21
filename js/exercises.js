/* ════════════════════════════════════════════════════════════════════
   exercises.js — Render and check all exercise types
   ════════════════════════════════════════════════════════════════════ */

/* ══════════════════ MULTIPLE CHOICE ════════════════════════════════ */
function renderMC() {
  const container = document.getElementById('mc-items');
  container.innerHTML = MC_DATA.map((item, i) => `
    <div class="exercise-item" id="mc-item-${i}" role="group" aria-labelledby="mc-q-${i}">
      <div class="item-prompt" id="mc-q-${i}">
        <span class="item-num">${i + 1}</span>${item.q}
      </div>
      <div class="mc-options" role="radiogroup" aria-label="Options for question ${i + 1}">
        ${item.options.map((opt, j) => `
          <label class="mc-option">
            <input type="radio" name="mc-${i}" value="${j}" aria-label="${opt}" />
            <span>${opt}</span>
          </label>
        `).join('')}
      </div>
      <div class="item-feedback" id="mc-fb-${i}" aria-live="polite"></div>
    </div>
  `).join('');
}

function checkMC() {
  let score = 0;
  MC_DATA.forEach((item, i) => {
    const selected = document.querySelector(`input[name="mc-${i}"]:checked`);
    const el = document.getElementById(`mc-item-${i}`);
    const fb = document.getElementById(`mc-fb-${i}`);
    el.classList.remove('correct', 'incorrect');
    if (!selected) {
      fb.className = 'item-feedback show fb-incorrect';
      fb.innerHTML = '⚠️ Please select an answer.';
      return;
    }
    const val = parseInt(selected.value);
    if (val === item.answer) {
      score++;
      el.classList.add('correct');
      fb.className = 'item-feedback show fb-correct';
      fb.innerHTML = `✅ Correct! ${item.explanation}`;
    } else {
      el.classList.add('incorrect');
      fb.className = 'item-feedback show fb-incorrect';
      fb.innerHTML = `❌ Incorrect. ${item.explanation}`;
    }
  });
  const scoreEl = document.getElementById('mc-score');
  scoreEl.textContent = `Score: ${score} / ${MC_DATA.length}`;
  updateProgress('mc', score, MC_DATA.length);
  announce(`Multiple Choice results: ${score} out of ${MC_DATA.length} correct.`);
}

function resetMC() {
  renderMC();
  document.getElementById('mc-score').textContent = '';
  updateProgress('mc', null, null);
}

/* ══════════════════ GAP FILL ════════════════════════════════════════ */
function renderGF() {
  const container = document.getElementById('gf-items');
  container.innerHTML = GF_DATA.map((item, i) => `
    <div class="exercise-item" id="gf-item-${i}">
      <div class="item-prompt">
        <span class="item-num">${i + 1}</span>
        ${item.sentence}
      </div>
      <div class="mc-options" role="radiogroup" aria-label="Options for question ${i + 1}">
        ${item.options.map((opt, j) => `
          <label class="mc-option">
            <input type="radio" name="gf-${i}" value="${j}" aria-label="${opt}" />
            <span>${opt}</span>
          </label>
        `).join('')}
      </div>
      <div class="item-feedback" id="gf-fb-${i}" aria-live="polite"></div>
    </div>
  `).join('');
}

function checkGF() {
  let score = 0;
  GF_DATA.forEach((item, i) => {
    const selected = document.querySelector(`input[name="gf-${i}"]:checked`);
    const el = document.getElementById(`gf-item-${i}`);
    const fb = document.getElementById(`gf-fb-${i}`);
    el.classList.remove('correct', 'incorrect');
    if (!selected) {
      fb.className = 'item-feedback show fb-incorrect';
      fb.innerHTML = '⚠️ Please select an answer.';
      return;
    }
    const val = parseInt(selected.value);
    if (val === item.answer) {
      score++;
      el.classList.add('correct');
      fb.className = 'item-feedback show fb-correct';
      fb.innerHTML = `✅ Correct! ${item.explanation}`;
    } else {
      el.classList.add('incorrect');
      fb.className = 'item-feedback show fb-incorrect';
      fb.innerHTML = `❌ Incorrect. ${item.explanation}`;
    }
  });
  document.getElementById('gf-score').textContent = `Score: ${score} / ${GF_DATA.length}`;
  updateProgress('gf', score, GF_DATA.length);
  announce(`Gap-Fill results: ${score} out of ${GF_DATA.length} correct.`);
}

function resetGF() {
  renderGF();
  document.getElementById('gf-score').textContent = '';
  updateProgress('gf', null, null);
}

/* ══════════════════ WORD FORMATION ═════════════════════════════════ */
function renderWF() {
  const container = document.getElementById('wf-items');
  container.innerHTML = WF_DATA.map((item, i) => `
    <div class="exercise-item" id="wf-item-${i}">
      <label class="item-prompt" for="wf-input-${i}">
        <span class="item-num">${i + 1}</span>${item.sentence}
      </label>
      <div style="display:flex;gap:.5rem;align-items:center;flex-wrap:wrap;margin-top:.4rem;">
        <input
          type="text"
          id="wf-input-${i}"
          class="wf-input"
          placeholder="Type the correct form…"
          aria-label="Answer for item ${i + 1}"
          style="max-width:280px"
        />
        <span style="font-size:.8rem;color:var(--ink-muted)">Hint: ${item.hint}</span>
      </div>
      <div class="item-feedback" id="wf-fb-${i}" aria-live="polite"></div>
    </div>
  `).join('');
}

function checkWF() {
  let score = 0;
  WF_DATA.forEach((item, i) => {
    const input = document.getElementById(`wf-input-${i}`);
    const el = document.getElementById(`wf-item-${i}`);
    const fb = document.getElementById(`wf-fb-${i}`);
    const userVal = input.value.trim().toLowerCase();
    el.classList.remove('correct', 'incorrect');
    input.classList.remove('correct-field', 'incorrect-field');
    if (!userVal) {
      fb.className = 'item-feedback show fb-incorrect';
      fb.innerHTML = '⚠️ Please type an answer.';
      return;
    }
    if (userVal === item.answer.toLowerCase()) {
      score++;
      el.classList.add('correct');
      input.classList.add('correct-field');
      fb.className = 'item-feedback show fb-correct';
      fb.innerHTML = `✅ Correct! ${item.explanation}`;
    } else {
      el.classList.add('incorrect');
      input.classList.add('incorrect-field');
      fb.className = 'item-feedback show fb-incorrect';
      fb.innerHTML = `❌ Incorrect. The answer is <strong>${item.answer}</strong>. ${item.explanation}`;
    }
  });
  document.getElementById('wf-score').textContent = `Score: ${score} / ${WF_DATA.length}`;
  updateProgress('wf', score, WF_DATA.length);
  announce(`Word Formation results: ${score} out of ${WF_DATA.length} correct.`);
}

function resetWF() {
  renderWF();
  document.getElementById('wf-score').textContent = '';
  updateProgress('wf', null, null);
}

/* ══════════════════ READING ═════════════════════════════════════════ */
function renderReading() {
  document.getElementById('passage-body').innerHTML = PASSAGE_HTML;
  const container = document.getElementById('reading-items');
  container.innerHTML = READING_DATA.map((item, i) => `
    <div class="exercise-item" id="reading-item-${i}">
      <div class="reading-q-type">${item.type}</div>
      <div class="item-prompt">
        <span class="item-num">${i + 1}</span>${item.q}
      </div>
      <div class="mc-options" role="radiogroup" aria-label="Options for reading question ${i + 1}">
        ${item.options.map((opt, j) => `
          <label class="mc-option">
            <input type="radio" name="reading-${i}" value="${j}" aria-label="${opt}" />
            <span>${opt}</span>
          </label>
        `).join('')}
      </div>
      <div class="item-feedback" id="reading-fb-${i}" aria-live="polite"></div>
    </div>
  `).join('');
}

function checkReading() {
  let score = 0;
  READING_DATA.forEach((item, i) => {
    const selected = document.querySelector(`input[name="reading-${i}"]:checked`);
    const el = document.getElementById(`reading-item-${i}`);
    const fb = document.getElementById(`reading-fb-${i}`);
    el.classList.remove('correct', 'incorrect');
    if (!selected) {
      fb.className = 'item-feedback show fb-incorrect';
      fb.innerHTML = '⚠️ Please select an answer.';
      return;
    }
    const val = parseInt(selected.value);
    if (val === item.answer) {
      score++;
      el.classList.add('correct');
      fb.className = 'item-feedback show fb-correct';
      fb.innerHTML = `✅ Correct! ${item.explanation}`;
    } else {
      el.classList.add('incorrect');
      fb.className = 'item-feedback show fb-incorrect';
      fb.innerHTML = `❌ Incorrect. ${item.explanation}`;
    }
  });
  document.getElementById('reading-score').textContent = `Score: ${score} / ${READING_DATA.length}`;
  updateProgress('reading', score, READING_DATA.length);
  announce(`Reading results: ${score} out of ${READING_DATA.length} correct.`);
}

function resetReading() {
  renderReading();
  document.getElementById('reading-score').textContent = '';
  updateProgress('reading', null, null);
}

/* ══════════════════ LISTENING QUESTIONS ════════════════════════════ */
function renderListening() {
  // Script
  const scriptEl = document.getElementById('script-body');
  scriptEl.innerHTML = LISTENING_SCRIPT.map(line => {
    // Highlight suffix words in script
    let text = line.text
      .replace(/(qualification|development|encouragement|hopeless|adaptability|effectiveness|improvement|significant|motivation|willingness|perseverance|achievement|collaboration|continuously|continuous|creative|creativity|measurable|professional|specialisation|certification|conversation|successful|traditional|presentation|employment|organisation|independently)/gi,
        '<mark class="sfx">$1</mark>');
    return `<div class="script-line"><span class="script-speaker">${line.speaker}:</span> ${text}</div>`;
  }).join('');

  // Questions
  const container = document.getElementById('listening-items');
  container.innerHTML = LISTENING_DATA.map((item, i) => `
    <div class="exercise-item" id="listening-item-${i}">
      <div class="reading-q-type">${item.type}</div>
      <div class="item-prompt">
        <span class="item-num">${i + 1}</span>${item.q}
      </div>
      <div class="mc-options" role="radiogroup" aria-label="Options for listening question ${i + 1}">
        ${item.options.map((opt, j) => `
          <label class="mc-option">
            <input type="radio" name="listening-${i}" value="${j}" aria-label="${opt}" />
            <span>${opt}</span>
          </label>
        `).join('')}
      </div>
      <div class="item-feedback" id="listening-fb-${i}" aria-live="polite"></div>
    </div>
  `).join('');
}

function checkListening() {
  let score = 0;
  LISTENING_DATA.forEach((item, i) => {
    const selected = document.querySelector(`input[name="listening-${i}"]:checked`);
    const el = document.getElementById(`listening-item-${i}`);
    const fb = document.getElementById(`listening-fb-${i}`);
    el.classList.remove('correct', 'incorrect');
    if (!selected) {
      fb.className = 'item-feedback show fb-incorrect';
      fb.innerHTML = '⚠️ Please select an answer.';
      return;
    }
    const val = parseInt(selected.value);
    if (val === item.answer) {
      score++;
      el.classList.add('correct');
      fb.className = 'item-feedback show fb-correct';
      fb.innerHTML = `✅ Correct! ${item.explanation}`;
    } else {
      el.classList.add('incorrect');
      fb.className = 'item-feedback show fb-incorrect';
      fb.innerHTML = `❌ Incorrect. ${item.explanation}`;
    }
  });
  document.getElementById('listening-score').textContent = `Score: ${score} / ${LISTENING_DATA.length}`;
  updateProgress('listening', score, LISTENING_DATA.length);
  announce(`Listening results: ${score} out of ${LISTENING_DATA.length} correct.`);
}

function resetListening() {
  renderListening();
  document.getElementById('listening-score').textContent = '';
  updateProgress('listening', null, null);
}

/* ══════════════════ PROGRESS TRACKING ══════════════════════════════ */
const progressScores = { mc: null, gf: null, wf: null, reading: null, listening: null };
const progressMax    = { mc: 10, gf: 10, wf: 10, reading: 6, listening: 8 };

function updateProgress(section, score, max) {
  progressScores[section] = score;
  recalcProgress();
}

function recalcProgress() {
  const totalMax = Object.values(progressMax).reduce((a, b) => a + b, 0); // 44
  const totalScored = Object.entries(progressScores)
    .filter(([k, v]) => v !== null)
    .reduce((acc, [k, v]) => acc + v, 0);
  const totalAttempted = Object.entries(progressScores)
    .filter(([k, v]) => v !== null)
    .reduce((acc, [k, v]) => acc + progressMax[k], 0);
  const pct = totalAttempted === 0 ? 0 : Math.round((totalScored / totalMax) * 100);

  document.getElementById('main-progress-fill').style.width = pct + '%';
  document.getElementById('main-progress-pct').textContent = pct + '%';
  document.getElementById('nav-progress-text').textContent = pct + '%';
  const track = document.getElementById('main-progress-track');
  track.setAttribute('aria-valuenow', pct);
}

/* ══════════════════ ACCESSIBILITY ANNOUNCE ══════════════════════════ */
function announce(msg) {
  const el = document.getElementById('sr-announce');
  el.textContent = '';
  setTimeout(() => { el.textContent = msg; }, 50);
}
