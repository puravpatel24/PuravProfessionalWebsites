/* =============================================
   VIT MESS PORTAL — script.js
   ============================================= */

/* ---- MENU DATA ---- */
const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

const vegMenu = [
  { day:'Mon', breakfast:'Idli + Sambar + Coconut Chutney',         lunch:'Dal Tadka + Jeera Rice + Roti + Sabzi + Curd',        dinner:'Roti + Paneer Butter Masala + Dal + Rice' },
  { day:'Tue', breakfast:'Poha + Chutney + Tea',                     lunch:'Rajma + Rice + Roti + Raita + Salad',                  dinner:'Roti + Aloo Matar + Dal Fry + Rice' },
  { day:'Wed', breakfast:'Upma + Juice',                             lunch:'Chole + Bhatura + Rice + Dal + Sabzi',                 dinner:'Fried Rice + Veg Gravy + Roti + Dal' },
  { day:'Thu', breakfast:'Bread Butter + Jam + Cornflakes + Milk',   lunch:'Mixed Veg Curry + Rice + Roti + Curd + Papad',         dinner:'Dosa + Sambar + Chutney + Rice + Dal' },
  { day:'Fri', breakfast:'Puri + Aloo Bhaji + Tea',                  lunch:'Biryani (Veg) + Raita + Salad + Roti + Dal',           dinner:'Roti + Butter Paneer + Rice + Dal Makhani' },
  { day:'Sat', breakfast:'Paratha + Curd + Pickle',                  lunch:'Lemon Rice + Rasam + Papad + Sabzi + Roti',            dinner:'Noodles (Veg) + Soup + Roti + Dal' },
  { day:'Sun', breakfast:'Aloo Puri + Halwa + Tea + Fruits',         lunch:'Pulao + Raita + Sabzi + Roti + Sweet (Kheer)',         dinner:'Roti + Matar Mushroom + Dal + Rice + Papad' },
];

const nonvegMenu = [
  { day:'Mon', breakfast:'Idli + Sambar + Boiled Egg',               lunch:'Dal Tadka + Rice + Roti + Sabzi + Curd',               dinner:'Roti + Paneer/Egg Curry + Dal + Rice' },
  { day:'Tue', breakfast:'Poha + Bread Omelette + Tea',              lunch:'Chicken Curry + Rice + Roti + Raita + Salad',           dinner:'Roti + Egg Bhurji + Dal Fry + Rice' },
  { day:'Wed', breakfast:'Upma + Boiled Egg + Juice',                lunch:'Chole + Rice + Roti + Dal + Sabzi',                    dinner:'Fried Rice + Chicken Gravy + Roti' },
  { day:'Thu', breakfast:'Bread Omelette + Cornflakes + Milk',       lunch:'Fish Curry + Rice + Roti + Curd + Papad',              dinner:'Dosa + Sambar + Egg Curry + Rice' },
  { day:'Fri', breakfast:'Puri + Aloo Bhaji + Tea',                  lunch:'Chicken Biryani + Raita + Salad + Roti',               dinner:'Roti + Chicken Butter Masala + Rice' },
  { day:'Sat', breakfast:'Paratha + Egg + Curd + Pickle',            lunch:'Egg Rice + Rasam + Papad + Chicken Gravy',             dinner:'Noodles (Egg) + Soup + Roti + Dal' },
  { day:'Sun', breakfast:'Aloo Puri + Omelette + Fruits + Tea',      lunch:'Mutton/Chicken Pulao + Raita + Roti + Sweet',          dinner:'Roti + Chicken Matar + Dal + Rice + Papad' },
];

const specialMenu = [
  { day:'Mon', breakfast:'Masala Dosa + Filter Coffee + Fruit Bowl',          lunch:'Paneer Tikka Masala + Naan + Dal Bukhara + Rice + Raita', dinner:'Butter Chicken (Veg Ver.) + Naan + Jeera Rice + Soup' },
  { day:'Tue', breakfast:'Stuffed Paratha + Curd + Pickle + Juice',           lunch:'Chicken Curry (or Paneer) + Rice + Roti + Raita + Salad', dinner:'Shahi Paneer + Roti + Dal + Rice + Papad' },
  { day:'Wed', breakfast:'Poha Deluxe + Coconut Chutney + Coffee',            lunch:'Chole Bhature + Dal + Rice + Sabzi + Curd',               dinner:'Veg Biryani + Raita + Curry + Papad' },
  { day:'Thu', breakfast:'Oats Porridge + Bread Toast + Eggs + Juice',        lunch:'Matar Paneer + Naan + Dal Makhani + Rice + Salad',         dinner:'Dosa + Sambar + Chutney + Special Curry + Rice' },
  { day:'Fri', breakfast:'Pesarattu + Ginger Tea + Fruits',                   lunch:'Special Biryani + Raita + Shorba + Dessert (Friday)',      dinner:'Kadai Paneer + Butter Naan + Dal + Rice' },
  { day:'Sat', breakfast:'Puri Halwa + Fruit Custard + Juice',                lunch:'Rajma Rice + Sabzi + Roti + Curd + Pickle + Papad',        dinner:'Fried Rice + Manchurian + Soup + Roti' },
  { day:'Sun', breakfast:'Full Breakfast Platter (Puri+Halwa+Egg+Fruits+Tea)',lunch:'Special Sunday Thali (Paneer+Dal+Sabzi+Rice+Roti+Sweet)', dinner:'Lachha Paratha + Dal Makhani + Sabzi + Kheer' },
];

const paidMenuData = [
  {
    category:'Breakfast', time:'7:00 AM – 10:00 AM', color:'#92400e',
    items:[
      {name:'Masala Dosa',type:'veg',price:'Rs. 40'},
      {name:'Poori Bhaji (2 pcs)',type:'veg',price:'Rs. 35'},
      {name:'Bread Omelette',type:'nonveg',price:'Rs. 50'},
      {name:'Upma + Chutney',type:'veg',price:'Rs. 30'},
      {name:'Egg Bhurji + Bread',type:'nonveg',price:'Rs. 55'},
      {name:'Tea / Coffee',type:'veg',price:'Rs. 15'},
      {name:'Breakfast Combo (Any Main + Beverage)',type:'both',price:'Rs. 80'},
    ]
  },
  {
    category:'Lunch', time:'12:00 PM – 3:00 PM', color:'#0f2c5e',
    items:[
      {name:'Veg Thali (Full)',type:'veg',price:'Rs. 100'},
      {name:'Chicken Curry + Rice',type:'nonveg',price:'Rs. 130'},
      {name:'Paneer Butter Masala + Roti (3)',type:'veg',price:'Rs. 110'},
      {name:'Egg Curry + Rice',type:'nonveg',price:'Rs. 90'},
      {name:'Dal Fry + Rice + Roti',type:'veg',price:'Rs. 75'},
      {name:'Veg Biryani',type:'veg',price:'Rs. 95'},
      {name:'Chicken Biryani',type:'nonveg',price:'Rs. 140'},
    ]
  },
  {
    category:'Dinner', time:'7:00 PM – 10:30 PM', color:'#166534',
    items:[
      {name:'Roti (2) + Sabzi',type:'veg',price:'Rs. 60'},
      {name:'Butter Naan (2) + Dal Makhani',type:'veg',price:'Rs. 90'},
      {name:'Chicken Tikka + Naan',type:'nonveg',price:'Rs. 160'},
      {name:'Veg Fried Rice',type:'veg',price:'Rs. 70'},
      {name:'Egg Noodles',type:'nonveg',price:'Rs. 80'},
      {name:'Paneer Tikka (starter)',type:'veg',price:'Rs. 120'},
      {name:'Dinner Combo',type:'veg',price:'Rs. 100'},
    ]
  },
  {
    category:'Snacks and Beverages', time:'All Day', color:'#6b21a8',
    items:[
      {name:'Samosa (2 pcs)',type:'veg',price:'Rs. 20'},
      {name:'Veg Puff',type:'veg',price:'Rs. 25'},
      {name:'Chicken Roll',type:'nonveg',price:'Rs. 60'},
      {name:'Cold Coffee',type:'veg',price:'Rs. 45'},
      {name:'Fresh Lime Soda',type:'veg',price:'Rs. 30'},
      {name:'Ice Cream (Scoop)',type:'veg',price:'Rs. 40'},
      {name:'Maggi Noodles',type:'veg',price:'Rs. 35'},
    ]
  }
];

/* ---- FEEDBACK DATA ---- */
const sampleFeedbacks = [
  { name:'Rohan M.', block:'Block B', mess:'Non-Veg', overall:8, text:'Food quality has improved significantly this month. Sunday biryani is excellent. Portion sizes are adequate.', date:'Apr 2025' },
  { name:'Ananya S.', block:'Block C', mess:'Special', overall:9, text:'Special mess is well worth the extra cost. Variety is great and hygiene standards are noticeably better than last year.', date:'Apr 2025' },
  { name:'Karthik R.', block:'Block A', mess:'Veg', overall:7, text:'Average quality overall. Dal and sabzi are decent but the breakfast variety could be improved. Timings are followed well.', date:'Mar 2025' },
  { name:'Divya P.', block:'Block D', mess:'Special', overall:9, text:'Very satisfied with the Special Mess. Friday biryani and Sunday thali are highlights. Staff behaviour is also courteous.', date:'Mar 2025' },
  { name:'Anonymous', block:'Block E', mess:'Non-Veg', overall:7, text:'Non-veg days are good but veg days feel repetitive. Would appreciate more variety in weekday dinner menus.', date:'Mar 2025' },
];

const blockRatings = [
  { block:'Block A', mess:'Veg',     food:7.6, hygiene:8.0, value:7.4, overall:7.6, count:148 },
  { block:'Block A', mess:'Non-Veg', food:8.2, hygiene:7.8, value:7.6, overall:8.0, count:92  },
  { block:'Block B', mess:'Veg',     food:7.8, hygiene:8.4, value:7.8, overall:8.0, count:162 },
  { block:'Block B', mess:'Non-Veg', food:8.6, hygiene:8.2, value:8.0, overall:8.4, count:118 },
  { block:'Block C', mess:'Veg',     food:7.4, hygiene:8.6, value:7.2, overall:7.6, count:195 },
  { block:'Block C', mess:'Special', food:9.2, hygiene:9.4, value:8.4, overall:9.0, count:87  },
  { block:'Block D', mess:'Veg',     food:8.0, hygiene:8.8, value:7.6, overall:8.2, count:134 },
  { block:'Block D', mess:'Special', food:9.4, hygiene:9.6, value:8.6, overall:9.2, count:62  },
  { block:'Block E', mess:'Veg',     food:7.2, hygiene:7.6, value:7.4, overall:7.4, count:105 },
  { block:'Block E', mess:'Non-Veg', food:8.4, hygiene:7.8, value:8.0, overall:8.2, count:76  },
];

const blockMessOptions = {
  A: ['Vegetarian Mess','Non-Vegetarian Mess'],
  B: ['Vegetarian Mess','Non-Vegetarian Mess','Paid Mess'],
  C: ['Vegetarian Mess','Special Mess'],
  D: ['Vegetarian Mess','Special Mess','Paid Mess'],
  E: ['Vegetarian Mess','Non-Vegetarian Mess'],
};

/* ---- HELPERS ---- */
function getTodayShort() {
  return new Date().toLocaleDateString('en-US',{weekday:'short'}).slice(0,3);
}

function ratingScore(val) {
  return `<span style="font-weight:700;color:#0f2c5e;font-size:.95rem">${val.toFixed(1)}</span>`;
}

/* ---- MENU TABLES ---- */
function buildMenuTable(tbodyId, menuData) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;
  const today = getTodayShort();
  tbody.innerHTML = menuData.map((row,i) => {
    const isToday = row.day === today;
    return `<tr class="${isToday ? 'today-row' : (i%2===0?'':'table-light')}">
      <td class="fw-semibold">${row.day}${isToday ? '<span class="today-badge">Today</span>' : ''}</td>
      <td>${row.breakfast}</td>
      <td>${row.lunch}</td>
      <td>${row.dinner}</td>
    </tr>`;
  }).join('');
}

/* ---- PAID MENU CARDS ---- */
function buildPaidMenuCards() {
  const cont = document.getElementById('paidMenuCards');
  if (!cont) return;
  cont.innerHTML = paidMenuData.map(cat => `
    <div class="col-lg-6">
      <div class="paid-menu-card">
        <div class="pmc-header" style="background:${cat.color}">${cat.category} &nbsp; (${cat.time})</div>
        <table class="table mb-0 pmc-table">
          <thead><tr><th>Item</th><th>Type</th><th>Price</th></tr></thead>
          <tbody>
            ${cat.items.map(it => `<tr>
              <td>${it.name}</td>
              <td>${it.type==='veg' ? '<span class="veg-dot"></span> Veg' : it.type==='nonveg' ? '<span class="nonveg-dot"></span> Non-Veg' : 'Veg / Non-Veg'}</td>
              <td>${it.price}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>`).join('');
}

/* ---- MESS TABS (menu.html) ---- */
function showMessTab(id, btn) {
  document.querySelectorAll('.menu-section').forEach(s => s.classList.add('d-none'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) { target.classList.remove('d-none'); }
  btn.classList.add('active');
  // scroll to section if linked via hash
  if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
}

/* ---- FORM TABS (forms.html) ---- */
function showFormTab(id, btn) {
  document.querySelectorAll('.form-section').forEach(s => s.classList.add('d-none'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.remove('d-none');
  btn.classList.add('active');
}

/* ---- GALLERY FILTER ---- */
function filterGallery(cat, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.gal-item').forEach(item => {
    if (cat === 'all' || item.dataset.cat === cat) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}

/* ---- REG FEE DISPLAY ---- */
function updateMessFee() {
  const sel = document.getElementById('regMessType');
  const disp = document.getElementById('regFeeDisplay');
  if (!sel || !disp) return;
  const val = sel.value;
  if (!val) { disp.value = 'Select mess type'; return; }
  if (val === '0') { disp.value = 'Pay per meal (no fixed fee)'; return; }
  disp.value = 'Rs. ' + parseInt(val).toLocaleString('en-IN') + ' per month';
}

/* ---- FEEDBACK MESS OPTIONS ---- */
function updateFeedbackMessOptions() {
  const block = document.getElementById('fbBlock')?.value;
  const messSel = document.getElementById('fbMess');
  if (!messSel) return;
  if (!block) { messSel.innerHTML = '<option value="">Select block first</option>'; return; }
  const opts = blockMessOptions[block] || [];
  messSel.innerHTML = '<option value="">Select mess type</option>' +
    opts.map(o => `<option>${o}</option>`).join('');
}

/* ---- FORM SUBMIT ---- */
function submitForm(e, formId, successId, errorId) {
  e.preventDefault();
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll('[required]');
  let valid = true;
  inputs.forEach(inp => { if (!inp.value.trim()) valid = false; });
  const errEl = document.getElementById(errorId);
  const okEl  = document.getElementById(successId);
  if (!valid) {
    errEl.textContent = 'Please fill in all required fields before submitting.';
    errEl.classList.remove('d-none');
    okEl.classList.add('d-none');
    return;
  }
  errEl.classList.add('d-none');
  okEl.classList.remove('d-none');
  form.reset();
  okEl.scrollIntoView({behavior:'smooth', block:'nearest'});
  setTimeout(() => okEl.classList.add('d-none'), 6000);
}

/* ---- FEEDBACK SUBMIT ---- */
function submitFeedback(e) {
  e.preventDefault();
  const block = document.getElementById('fbBlock')?.value;
  const mess  = document.getElementById('fbMess')?.value;
  const errEl = document.getElementById('feedbackError');
  const okEl  = document.getElementById('feedbackSuccess');
  if (!block || !mess) {
    errEl.textContent = 'Please select your hostel block and mess type.';
    errEl.classList.remove('d-none');
    okEl.classList.add('d-none');
    return;
  }
  errEl.classList.add('d-none');
  okEl.classList.remove('d-none');
  e.target.reset();
  document.getElementById('fbMess').innerHTML = '<option value="">Select block first</option>';
  setTimeout(() => okEl.classList.add('d-none'), 6000);
}

/* ---- FEEDBACK DISPLAY ---- */
function buildFeedbackList() {
  const cont = document.getElementById('feedbackList');
  if (!cont) return;
  cont.innerHTML = sampleFeedbacks.map(fb => `
    <div class="fb-review">
      <div class="d-flex justify-content-between align-items-center mb-1">
        <span class="fb-reviewer">${fb.name}</span>
        <span class="fb-stars">${fb.overall}/10</span>
      </div>
      <div class="fb-meta">${fb.block} — ${fb.mess} &nbsp;|&nbsp; ${fb.date}</div>
      <div class="fb-text">${fb.text}</div>
    </div>`).join('');
}

/* ---- RATINGS TABLE ---- */
function buildRatingsTable() {
  const tbody = document.getElementById('ratingsTable');
  if (!tbody) return;
  tbody.innerHTML = blockRatings.map((r,i) => `
    <tr class="${i%2===0?'':'table-light'}">
      <td class="fw-bold">${r.block}</td>
      <td>${r.mess}</td>
      <td>${ratingScore(r.food)}</td>
      <td>${ratingScore(r.hygiene)}</td>
      <td>${ratingScore(r.value)}</td>
      <td>${ratingScore(r.overall)}</td>
      <td class="text-muted small">${r.count}</td>
    </tr>`).join('');
}

/* ---- SCROLL REVEAL ---- */
function initScrollReveal() {
  const els = document.querySelectorAll('.mess-card, .action-card, .timing-card, .overview-card, .info-feature-card');
  els.forEach(el => el.classList.add('reveal'));
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ---- HASH NAVIGATION ---- */
function handleHash() {
  const hash = window.location.hash.replace('#','');
  if (!hash) return;
  // menu.html tabs
  const tabMap = { veg:'veg', nonveg:'nonveg', special:'special', paid:'paid' };
  if (tabMap[hash]) {
    const btn = document.querySelector(`.tab-btn[onclick*="'${hash}'"]`);
    if (btn) showMessTab(hash, btn);
  }
  // forms.html tabs
  const formMap = { register:'register', switch:'switch', leave:'leave', grievance:'grievance' };
  if (formMap[hash]) {
    const btn = document.querySelector(`.tab-btn[onclick*="'${hash}'"]`);
    if (btn) showFormTab(hash, btn);
  }
  // scroll
  setTimeout(() => {
    const target = document.getElementById(hash);
    if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
  }, 100);
}

/* ---- INIT ---- */
document.addEventListener('DOMContentLoaded', () => {
  buildMenuTable('vegMenuBody',     vegMenu);
  buildMenuTable('nonvegMenuBody',  nonvegMenu);
  buildMenuTable('specialMenuBody', specialMenu);
  buildPaidMenuCards();
  buildFeedbackList();
  buildRatingsTable();
  initScrollReveal();
  handleHash();

  // smooth scroll for anchor links
  document.querySelectorAll('a[href*="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) { e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
      }
    });
  });
});
