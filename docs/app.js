const WEEK = {
  1:{label:'Lunes',am:'Fuerza A · 20–25 min',pm:'Carrera suave · 25–30 min',key:'fuerzaA',pmKey:'run',pmTitle:'Carrera suave',pmSummary:'25–30 min · ritmo conversacional'},
  2:{label:'Martes',am:'Core + movilidad · 15–20 min',pm:'Cuerda · 15–20 min',key:'core',pmKey:'rope',pmTitle:'Cuerda',pmSummary:'15–20 min · bloques controlados'},
  3:{label:'Miércoles',am:'Fuerza B · 20–25 min',pm:'Intervalos · 20–25 min',key:'fuerzaB',pmKey:'intervals',pmTitle:'Intervalos',pmSummary:'6 × (1 min rápido + 2 min suave)'},
  4:{label:'Jueves',am:'Rutina ligera · 10–15 min',pm:'Descanso',key:'ligera',pmKey:'rest',pmTitle:'Descanso',pmSummary:'Recupera · hidrátate · duerme bien'},
  5:{label:'Viernes',am:'Fuerza A · 20–25 min',pm:'Carrera suave · 25–35 min',key:'fuerzaA',pmKey:'run',pmTitle:'Carrera suave',pmSummary:'25–35 min · sin perseguir velocidad'},
  6:{label:'Sábado',am:'Fuerza B · opcional',pm:'Saco o cuerda · 15–20 min',key:'fuerzaB',pmKey:'boxing',pmTitle:'Saco o cuerda',pmSummary:'15–20 min · técnica antes que potencia'},
  0:{label:'Domingo',am:'Descanso',pm:'Descanso',key:'descanso',pmKey:'rest',pmTitle:'Descanso',pmSummary:'Recuperación completa'}
};

const SVG = {
  pushup:`<svg viewBox="0 0 120 90" aria-hidden="true"><g><circle cx="92" cy="37" r="8"/><path d="M84 43 62 51 40 57 18 62M62 51l10 19M40 57 30 76M18 62h-8M72 70h16M30 76h16"/><path d="M10 82h98" opacity=".3"/></g></svg>`,
  pullup:`<svg viewBox="0 0 120 100" aria-hidden="true"><g><path d="M15 15h90"/><circle cx="60" cy="38" r="8"/><path d="M60 46v22M60 50 40 28M60 50 80 28M60 68 45 88M60 68 75 88"/></g></svg>`,
  squat:`<svg viewBox="0 0 120 100" aria-hidden="true"><g><circle cx="58" cy="22" r="8"/><path d="M58 30 55 55 78 64M55 55 38 68M78 64 91 85M38 68 22 84M56 38 37 45M56 38 75 47"/></g></svg>`,
  pike:`<svg viewBox="0 0 120 90" aria-hidden="true"><g><circle cx="26" cy="64" r="7"/><path d="M32 60 54 46 73 25 96 59M54 46 40 72M96 59l12 13"/><path d="M10 80h102" opacity=".3"/></g></svg>`,
  knee:`<svg viewBox="0 0 120 100" aria-hidden="true"><g><path d="M15 14h90"/><circle cx="60" cy="37" r="8"/><path d="M60 45v19M60 49 40 28M60 49 80 28M60 64 48 75 60 85M60 64 72 75 62 86"/></g></svg>`,
  plank:`<svg viewBox="0 0 120 90" aria-hidden="true"><g><circle cx="88" cy="45" r="7"/><path d="M81 49 61 54 38 58 17 65M61 54 53 72M17 65l-6 11"/><path d="M8 80h98" opacity=".3"/></g></svg>`,
  lunge:`<svg viewBox="0 0 120 100" aria-hidden="true"><g><circle cx="58" cy="20" r="8"/><path d="M58 28v26M58 37 39 47M98 37 76 48M58 54 35 68 18 87M98 54 82 66 97 83"/></g></svg>`,
  rope:`<svg viewBox="0 0 120 100" aria-hidden="true"><g><circle cx="60" cy="23" r="8"/><path d="M60 31v26M60 39 40 49M60 39 80 49M60 57 48 83M60 57 72 83M40 48C18 35 14 79 40 89M80 48c22-13 26 31 0 41"/></g></svg>`,
  boxing:`<svg viewBox="0 0 120 100" aria-hidden="true"><g><circle cx="42" cy="24" r="8"/><path d="M42 32v25M42 40 65 34M42 40 28 50M42 57 30 84M42 57 58 82"/><rect x="79" y="20" width="25" height="62" rx="11"/></g></svg>`,
  stretch:`<svg viewBox="0 0 120 100" aria-hidden="true"><g><circle cx="58" cy="22" r="8"/><path d="M58 30v27M58 40 36 27M58 40 80 27M58 57 42 84M58 57 74 84"/></g></svg>`,
  check:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>`
};

const EXERCISES = {
  pushups:{name:'Flexiones',category:'fuerza',svg:SVG.pushup,sets:'4 × 8–15',subtitle:'Pecho · tríceps · core',tip:'Mantén el cuerpo como una tabla y deja 1–2 repeticiones en reserva.',steps:['Manos apenas más abiertas que los hombros.','Aprieta abdomen y glúteos para no hundir la cadera.','Baja con control hasta acercar el pecho al suelo.','Empuja sin despegar la cadera ni encoger hombros.'],video:'https://www.youtube.com/results?search_query=proper+push+up+form+beginner'},
  pullups:{name:'Dominadas',category:'fuerza',svg:SVG.pullup,sets:'4 × 3–10',subtitle:'Espalda · bíceps',tip:'Si no salen completas, usa negativas lentas de 4–5 segundos.',steps:['Agarra la barra un poco más ancho que hombros.','Inicia bajando los hombros, no tirando con el cuello.','Lleva el pecho hacia la barra con control.','Desciende hasta extender los brazos sin soltarte.'],video:'https://www.youtube.com/results?search_query=pull+up+proper+form+beginner'},
  squats:{name:'Sentadillas',category:'fuerza',svg:SVG.squat,sets:'4 × 15–20',subtitle:'Piernas · glúteos',tip:'Cuando 20 sean fáciles, pausa abajo o añade una mochila.',steps:['Pies aproximadamente al ancho de hombros.','Baja cadera entre las piernas manteniendo el pecho estable.','Rodillas siguen la dirección de los pies.','Empuja el suelo para subir y termina erguido.'],video:'https://www.youtube.com/results?search_query=bodyweight+squat+proper+form'},
  pike:{name:'Pike push-ups',category:'fuerza',svg:SVG.pike,sets:'3 × 6–12',subtitle:'Hombros · tríceps',tip:'Piensa en bajar la coronilla hacia el suelo, no el pecho.',steps:['Forma una V invertida con cadera alta.','Manos firmes, ligeramente más abiertas que hombros.','Flexiona codos y lleva la cabeza hacia delante y abajo.','Empuja fuerte para volver sin perder la cadera alta.'],video:'https://www.youtube.com/results?search_query=pike+push+up+proper+form'},
  knee:{name:'Rodillas en barra',category:'core',svg:SVG.knee,sets:'3 × 8–15',subtitle:'Abdomen · agarre',tip:'Evita balancearte; mueve las piernas desde el abdomen.',steps:['Cuelga estable con hombros activos.','Aprieta abdomen antes de mover las piernas.','Sube rodillas hacia el pecho sin impulso.','Baja lentamente hasta quedar estable otra vez.'],video:'https://www.youtube.com/results?search_query=hanging+knee+raise+proper+form'},
  plank:{name:'Plancha',category:'core',svg:SVG.plank,sets:'3 × 30–45 s',subtitle:'Core · estabilidad',tip:'Aprieta glúteos y abdomen; no aguantes con la espalda baja.',steps:['Apoya antebrazos con codos bajo hombros.','Mantén cabeza, tronco y piernas alineados.','Contrae abdomen y glúteos.','Respira normalmente mientras mantienes la posición.'],video:'https://www.youtube.com/results?search_query=plank+proper+form+beginner'},
  lunges:{name:'Zancada atrás',category:'fuerza',svg:SVG.lunge,sets:'3 × 10–12 / pierna',subtitle:'Piernas · glúteos',tip:'La zancada hacia atrás suele ser más fácil de controlar que hacia delante.',steps:['Empieza de pie con el torso erguido.','Lleva una pierna hacia atrás y baja ambas rodillas.','Mantén el pie delantero totalmente apoyado.','Empuja con la pierna delantera para volver.'],video:'https://www.youtube.com/results?search_query=reverse+lunge+proper+form'},
  rope:{name:'Cuerda',category:'cardio',svg:SVG.rope,sets:'5–8 × 2 min',subtitle:'Cardio · coordinación',tip:'Saltos pequeños y relajados. Gira la cuerda con muñecas, no con hombros.',steps:['Codos cerca del cuerpo y manos bajas.','Salta solo lo necesario para pasar la cuerda.','Aterriza suave sobre la parte delantera del pie.','Empieza por bloques cortos y mejora el ritmo.'],video:'https://www.youtube.com/results?search_query=jump+rope+beginner+proper+form'},
  boxing:{name:'Saco de boxeo',category:'cardio',svg:SVG.boxing,sets:'6 × 2 min',subtitle:'Cardio · técnica',tip:'Usa vendas y guantes. No golpees al 100 % al empezar.',steps:['Mantén guardia y barbilla ligeramente baja.','Golpea con muñeca alineada y vuelve a guardia.','Muévete alrededor del saco; no te quedes clavado.','Prioriza jab, cross y técnica antes que potencia.'],video:'https://www.youtube.com/results?search_query=heavy+bag+boxing+beginner+technique'},
  mobility:{name:'Movilidad',category:'core',svg:SVG.stretch,sets:'8–12 min',subtitle:'Cadera · hombros · columna',tip:'Debe sentirse como preparación o recuperación, no como otra sesión dura.',steps:['Haz círculos suaves de hombros y cadera.','Moviliza tobillos y columna torácica.','Mantén cada movimiento controlado y sin dolor.','Termina sintiéndote mejor que al comenzar.'],video:'https://www.youtube.com/results?search_query=full+body+mobility+routine+beginner'}
};

const ROUTINES = {
  fuerzaA:['pushups','pullups','squats','pike','knee','plank'],
  fuerzaB:['pushups','pullups','lunges','pike','knee','plank'],
  core:['mobility','knee','plank','rope'],
  ligera:['pushups','squats','plank','mobility'],
  descanso:[]
};

const ROUTINE_NAMES={fuerzaA:'Fuerza A',fuerzaB:'Fuerza B',core:'Core + movilidad',ligera:'Rutina ligera',descanso:'Descanso'};
const ROUTINE_SUMMARIES={fuerzaA:'Pecho · espalda · piernas · core',fuerzaB:'Espalda · hombros · piernas · core',core:'Movilidad · abdomen · cuerda',ligera:'Activación · técnica · movilidad',descanso:'Recuperación completa'};

const defaultState={completed:{},history:[],sessions:0,reminders:{morning:'07:00',night:'19:30'}};
const state=Object.assign({},defaultState,JSON.parse(localStorage.getItem('evolucion-fit-state')||localStorage.getItem('fitflow-state')||'{}'));
state.completed=state.completed||{};state.history=state.history||[];state.sessions=state.sessions||0;state.reminders=state.reminders||{morning:'07:00',night:'19:30'};
let guided={ids:[],index:0};

const $=s=>document.querySelector(s); const $$=s=>[...document.querySelectorAll(s)];
function save(){localStorage.setItem('evolucion-fit-state',JSON.stringify(state));}
function dateKey(d=new Date()){const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');return `${y}-${m}-${day}`}
function prettyDate(d=new Date()){return new Intl.DateTimeFormat('es-EC',{weekday:'long',day:'numeric',month:'long'}).format(d)}
function greeting(){const h=new Date().getHours();return h<12?'Buenos días':h<19?'Buenas tardes':'Buenas noches'}
function toast(msg){const el=document.createElement('div');el.className='toast';el.textContent=msg;$('#toastRegion').appendChild(el);setTimeout(()=>el.remove(),2300)}
function dayRecord(){const key=dateKey();state.completed[key]=state.completed[key]||{};return state.completed[key]}

function renderHeader(){ $('#greeting').textContent=greeting(); $('#todayLabel').textContent=prettyDate(); }

function getToday(){return WEEK[new Date().getDay()]}
function getTodayIds(){return ROUTINES[getToday().key]}
function completedCount(){const rec=dayRecord();return getTodayIds().filter(id=>rec[id]).length}
function updateProgressRing(){const ids=getTodayIds(),done=completedCount();const pct=ids.length?Math.round(done/ids.length*100):100;const circumference=2*Math.PI*49;$('#progressRing').style.strokeDasharray=circumference;$('#progressRing').style.strokeDashoffset=circumference*(1-pct/100);$('#todayPercent').textContent=pct+'%';}

function renderToday(){
  const day=getToday(), ids=ROUTINES[day.key], rec=dayRecord();
  $('#todayPlanTitle').textContent=day.am;
  $('#morningTitle').textContent=ROUTINE_NAMES[day.key];
  $('#morningSummary').textContent=ROUTINE_SUMMARIES[day.key];
  $('#morningDuration').textContent=(day.am.match(/\d+[^·]*min/)||['Hoy'])[0];
  $('#eveningTitle').textContent=day.pmTitle;$('#eveningSummary').textContent=day.pmSummary;
  $('#eveningIcon').textContent=day.pmKey==='run'?'RUN':day.pmKey==='intervals'?'INT':day.pmKey==='rope'?'JUMP':day.pmKey==='boxing'?'BAG':'REST';
  $('#eveningDone').classList.toggle('done',!!rec.evening);$('#eveningDone').disabled=day.pmKey==='rest';
  $('#morningPreview').innerHTML=ids.slice(0,4).map(id=>`<span class="mini-badge">${EXERCISES[id].svg}</span>`).join('')+(ids.length>4?`<span class="mini-badge mini-more">+${ids.length-4}</span>`:'');
  const wrap=$('#todayWorkout');wrap.innerHTML='';
  if(!ids.length){wrap.innerHTML='<article class="glass-card" style="padding:18px;border-radius:22px"><h3 style="margin:0 0 5px">Día de descanso</h3><p class="muted" style="margin:0;font-size:13px">Recupera, hidrátate y duerme bien. Mañana seguimos.</p></article>';}
  ids.forEach(id=>{
    const ex=EXERCISES[id],checked=!!rec[id];const row=document.createElement('article');row.className='workout-item'+(checked?' completed':'');
    row.innerHTML=`<button class="mini-fig" data-open="${id}" aria-label="Ver técnica de ${ex.name}">${ex.svg}</button><div><h3>${ex.name}</h3><p>${ex.sets} · ${ex.subtitle}</p></div><button class="exercise-check ${checked?'checked':''}" data-check="${id}" aria-label="Marcar ${ex.name}">${SVG.check}</button>`;wrap.appendChild(row);
  });
  bindExerciseButtons();
  $$('[data-check]').forEach(btn=>btn.onclick=()=>toggleExercise(btn.dataset.check));
  updateProgressRing();renderStats();
}

function toggleExercise(id){const rec=dayRecord();rec[id]=!rec[id];const ids=getTodayIds();if(ids.length&&ids.every(x=>rec[x])&&!rec.sessionCounted){state.sessions++;rec.sessionCounted=true;toast('Rutina de mañana completada ✓')} if(!ids.every(x=>rec[x])&&rec.sessionCounted){state.sessions=Math.max(0,state.sessions-1);rec.sessionCounted=false}save();renderToday();}

function renderWeek(){const today=new Date().getDay();$('#weekGrid').innerHTML=[1,2,3,4,5,6,0].map(d=>{const x=WEEK[d];return `<article class="day-card ${d===today?'today':''}"><div class="day-top"><h3>${x.label}</h3>${d===today?'<span class="today-chip">HOY</span>':''}</div><div class="day-sessions"><div class="day-session"><span>MAÑANA</span><strong>${x.am}</strong></div><div class="day-session"><span>NOCHE</span><strong>${x.pm}</strong></div></div></article>`}).join('')}

function renderLibrary(filter='all'){const entries=Object.entries(EXERCISES).filter(([,ex])=>filter==='all'||ex.category===filter);$('#exerciseLibrary').innerHTML=entries.map(([id,ex])=>`<button class="exercise-card" data-open="${id}"><div class="exercise-visual">${ex.svg}</div><h3>${ex.name}</h3><p>${ex.sets}</p></button>`).join('');bindExerciseButtons()}
function bindExerciseButtons(){$$('[data-open]').forEach(b=>b.onclick=()=>openExercise(b.dataset.open))}
function openExercise(id){const ex=EXERCISES[id];$('#dialogContent').innerHTML=`<p class="eyebrow">TÉCNICA</p><h2>${ex.name}</h2><div class="modal-visual">${ex.svg}</div><div class="modal-set"><span class="muted">Objetivo</span><strong>${ex.sets}</strong></div><ol class="steps">${ex.steps.map(s=>`<li>${s}</li>`).join('')}</ol><p class="tiny muted"><strong style="color:var(--text)">Clave:</strong> ${ex.tip}</p><a class="video-link" href="${ex.video}" target="_blank" rel="noopener">Ver video de referencia ↗</a>`;$('#exerciseDialog').showModal()}

function calcStreak(){let n=0;for(let i=0;i<120;i++){const d=new Date();d.setDate(d.getDate()-i);const rec=state.completed[dateKey(d)];if(rec?.sessionCounted)n++;else if(i>0)break;}return n}
function renderStats(){const last=state.history.at(-1);const weight=last?.weight||82;$('#weightStat').textContent=weight.toFixed(1);$('#streakStat').textContent=calcStreak();$('#sessionStat').textContent=state.sessions;$('#chartWeight').textContent=weight.toFixed(1)+' kg';renderHistory();renderChart()}
function renderHistory(){const h=$('#history');h.innerHTML=state.history.length?state.history.slice().reverse().slice(0,8).map(x=>`<div class="history-row"><span>${x.date}</span><strong>${x.weight.toFixed(1)} kg${x.waist?` · ${x.waist.toFixed(1)} cm`:''}</strong></div>`).join(''):'<p class="muted" style="font-size:13px">Todavía no hay mediciones. Registra una para empezar tu gráfica.</p>'}
function renderChart(){const data=state.history.slice(-8);const svg=$('#weightChart');const demo=data.length?data:[{weight:82},{weight:82}];const vals=demo.map(x=>x.weight);let min=Math.min(...vals),max=Math.max(...vals);if(max-min<1){min-=.5;max+=.5}const W=320,H=140,pad=12;const pts=demo.map((x,i)=>({x:pad+(W-pad*2)*(demo.length===1?.5:i/(demo.length-1)),y:pad+(H-pad*2)*(1-(x.weight-min)/(max-min))}));const path=pts.map((p,i)=>(i?'L':'M')+p.x.toFixed(1)+' '+p.y.toFixed(1)).join(' ');const area=`${path} L ${pts.at(-1).x} ${H-pad} L ${pts[0].x} ${H-pad} Z`;svg.innerHTML=`<defs><linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#b9ff64" stop-opacity=".20"/><stop offset="100%" stop-color="#b9ff64" stop-opacity="0"/></linearGradient></defs><path class="chart-grid" d="M0 30H320M0 70H320M0 110H320"/><path class="chart-area" d="${area}"/><path class="chart-line" d="${path}"/>${pts.map(p=>`<circle class="chart-dot" cx="${p.x}" cy="${p.y}" r="4"/>`).join('')}`;const trend=$('#weightTrend');if(data.length<2){trend.className='trend-chip neutral';trend.textContent='Sin tendencia'}else{const delta=data.at(-1).weight-data[0].weight;trend.className='trend-chip '+(delta<-.1?'down':delta>.1?'up':'neutral');trend.textContent=(delta>0?'+':'')+delta.toFixed(1)+' kg'}}

function openGuided(){guided.ids=getTodayIds();guided.index=0;if(!guided.ids.length){toast('Hoy toca descanso');return}renderGuided();$('#workoutDialog').showModal()}
function renderGuided(){const id=guided.ids[guided.index],ex=EXERCISES[id];$('#guidedCounter').textContent=`${guided.index+1} de ${guided.ids.length}`;$('#guidedProgress').style.width=((guided.index)/guided.ids.length*100)+'%';$('#guidedContent').innerHTML=`<div class="guided-visual">${ex.svg}</div><p class="eyebrow">${ex.subtitle.toUpperCase()}</p><h2>${ex.name}</h2><p class="guided-sets">${ex.sets}</p><p class="guided-tip">${ex.tip}</p>`;$('#prevExercise').disabled=guided.index===0;$('#completeExercise').textContent=guided.index===guided.ids.length-1?'Terminar rutina':'Completar ejercicio'}
function guidedNext(mark=true){const id=guided.ids[guided.index];if(mark){const rec=dayRecord();rec[id]=true;save()}if(guided.index>=guided.ids.length-1){const rec=dayRecord();if(guided.ids.every(x=>rec[x])&&!rec.sessionCounted){state.sessions++;rec.sessionCounted=true;save()}$('#guidedProgress').style.width='100%';setTimeout(()=>{$('#workoutDialog').close();renderToday();toast('Entrenamiento completado ✓')},180);return}guided.index++;renderGuided()}

function checkReminder(){const now=new Date(),hm=now.toTimeString().slice(0,5),rec=dayRecord();[['morning',state.reminders.morning,'Entrenamiento de mañana','Tu sesión de fuerza está lista.'],['night',state.reminders.night,'Cardio de la noche','Completa tu sesión nocturna.']].forEach(([type,time,title,body])=>{if(hm>=time&&!rec['reminded-'+type]){rec['reminded-'+type]=true;save();if('Notification'in window&&Notification.permission==='granted')navigator.serviceWorker?.ready.then(reg=>reg.showNotification(title,{body,icon:'icons/icon-192.png',badge:'icons/icon-192.png'}))}})}

$$('.nav-item').forEach(btn=>btn.onclick=()=>{$$('.nav-item').forEach(x=>x.classList.remove('active'));$$('.panel').forEach(x=>x.classList.remove('active'));btn.classList.add('active');$('#'+btn.dataset.target).classList.add('active');window.scrollTo({top:0,behavior:'smooth'})});
$$('.filter-chip').forEach(btn=>btn.onclick=()=>{$$('.filter-chip').forEach(x=>x.classList.remove('active'));btn.classList.add('active');renderLibrary(btn.dataset.filter)});
$('#closeDialog').onclick=()=>$('#exerciseDialog').close();$('#settingsButton').onclick=()=>$('#settingsDialog').showModal();$('#closeSettings').onclick=()=>$('#settingsDialog').close();
$('#startToday').onclick=openGuided;$('#closeWorkout').onclick=()=>$('#workoutDialog').close();$('#skipWorkout').onclick=()=>guidedNext(false);$('#prevExercise').onclick=()=>{if(guided.index>0){guided.index--;renderGuided()}};$('#completeExercise').onclick=()=>guidedNext(true);
$('#eveningDone').onclick=()=>{const rec=dayRecord();rec.evening=!rec.evening;save();renderToday();toast(rec.evening?'Cardio marcado ✓':'Cardio desmarcado')};
$('#morningTime').value=state.reminders.morning;$('#nightTime').value=state.reminders.night;
$('#saveReminders').onclick=()=>{state.reminders={morning:$('#morningTime').value,night:$('#nightTime').value};save();toast('Horarios guardados')};
$('#enableNotifications').onclick=async()=>{if(!('Notification'in window)){toast('Este navegador no ofrece notificaciones');return}const p=await Notification.requestPermission();toast(p==='granted'?'Notificaciones activadas':'Permiso no concedido')};
$('#progressForm').addEventListener('submit',e=>{e.preventDefault();const weight=Number($('#weightInput').value),waist=Number($('#waistInput').value)||null;if(!weight)return;state.history.push({date:new Intl.DateTimeFormat('es-EC',{day:'2-digit',month:'short',year:'numeric'}).format(new Date()),weight,waist});save();renderStats();toast('Medición guardada ✓')});

renderHeader();renderToday();renderWeek();renderLibrary();renderStats();checkReminder();setInterval(checkReminder,60000);
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
