const stages=[['Object-image retrieval',90.59,88.56],['Object picked',82.35,38.56],['Goal-image retrieval',74.12,30.39],['Robot close to goal',72.35,23.53],['Full task',71.76,21.90]];
const stageLabels=[['Retrieve object','key frame'],['Pick object'],['Retrieve goal','key frame'],['Approach goal'],['Complete','transfer']];
const chartX=i=>110+i*180;
const chartY=value=>60+(100-value)*2.4;
function staircase(column){return stages.map((stage,i)=>`${i?'H'+chartX(i)+' V':'M'+chartX(i)+' '}${chartY(stage[column])}`).join(' ');}
const chartDescription=stages.map(([name,a,b])=>`${name}: AIDA-OWMM ${a}%, OWMM-VLM-38B ${b}%.`).join(' ');
document.querySelector('#stages').innerHTML=`<svg class="progression-chart" viewBox="0 0 940 390" role="img" aria-labelledby="progression-title progression-desc"><title id="progression-title">Sequential task completion rates</title><desc id="progression-desc">Percentage of all episodes reaching each successive milestone. ${chartDescription}</desc>
${[0,25,50,75,100].map(v=>`<line x1="70" x2="885" y1="${chartY(v)}" y2="${chartY(v)}" class="progression-grid"/><text x="52" y="${chartY(v)+5}" text-anchor="end" class="axis-label">${v}%</text>`).join('')}
<path d="${staircase(2)}" class="progression-baseline"/><path d="${staircase(1)}" class="progression-outline"/><path d="${staircase(1)}" class="progression-ours"/>
${stages.map(([name,a,b],i)=>`<circle cx="${chartX(i)}" cy="${chartY(a)}" r="6" class="point-ours"/><circle cx="${chartX(i)}" cy="${chartY(b)}" r="5" class="point-baseline"/><text x="${chartX(i)}" y="${chartY(i?stages[i-1][1]:a)-19}" text-anchor="middle" class="rate-ours">${a.toFixed(2)}%</text><text x="${chartX(i)}" y="${chartY(b)+27}" text-anchor="middle" class="rate-baseline">${b.toFixed(2)}%</text><text x="${chartX(i)}" y="330" text-anchor="middle" class="milestone-number">0${i+1}</text><text x="${chartX(i)}" y="350" text-anchor="middle" class="milestone-label">${stageLabels[i].map((line,j)=>`<tspan x="${chartX(i)}" dy="${j?18:0}">${line}</tspan>`).join('')}</text>${i<4?`<text x="${chartX(i)+90}" y="352" text-anchor="middle" class="milestone-arrow">→</text>`:''}`).join('')}</svg>`;
const teacherRow=(name,rate,baseline=false)=>`<div class="teacher-row"><div><span>${name}</span><b>${rate.toFixed(1)}%</b></div><div class="bar-track"><div class="bar ${baseline?'baseline':''}" style="width:${rate}%" role="img" aria-label="${name}: ${rate}% success"></div></div></div>`;
document.querySelector('#teachers').innerHTML=`<div class="teacher-source source-baseline"><div class="source-heading"><strong>TRAJECTORY-DERIVED</strong><span>152,478 examples</span></div>${teacherRow('OWMM chunks · relabeled',38.8,true)}</div><div class="teacher-source source-aida"><div class="source-heading"><strong>AIDA COLLECTION</strong><span>28,480 examples each</span></div>${[['Distance-greedy',46.3],['Visibility-aware',65.5],['Target recovery',69.6]].map(([name,rate])=>teacherRow(name,rate)).join('')}</div>`;

const menuButton = document.querySelector('.menu-toggle');
const sectionMenu = document.querySelector('#section-menu');
function setMenu(open, returnFocus = false) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  sectionMenu.hidden = !open;
  if (returnFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
sectionMenu.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !sectionMenu.hidden) setMenu(false, true); });
document.addEventListener('click', event => { if (!sectionMenu.hidden && !event.target.closest('.site-header')) setMenu(false); });
