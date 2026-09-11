(()=>{
const assets=[
 {src:'assets/one-piece/box-op17.png',label:'Box OP17',kind:'product'},
 {src:'assets/one-piece/booster.png',label:'Booster OP17',kind:'product'},
 {src:'assets/one-piece/carte-manga.png',label:'Carte manga',kind:'card'},
 {src:'assets/one-piece/luffy.png',label:'Luffy',kind:'card'},
 {src:'assets/one-piece/5000.png',label:'Franky',kind:'card'}
];
Object.assign(states.contest,{image:assets[1].src,title:'GIVE ABONNÉ',subtitle:'100% GRATUIT',backgroundPreset:'speed'});
Object.assign(states.live,{image:assets[0].src,title:'OP17 BOXBREAK',subtitle:'1€ PDD',badge:'',showBadge:false,backgroundPreset:'speed'});
Object.assign(states.card,{image:assets[2].src,bottom:'ONE PIECE CARD GAME',frontCloudX:58,frontCloudY:57,frontCloudSize:54});
Object.assign(states.vote,{imageA:assets[3].src,imageB:assets[4].src,title:'QUELLE CARTE TU PRÉFÈRES ?',teamA:'',teamB:'',cta:'VOTE EN COMMENTAIRE'});
states.contest.formats=['reel','post'];
states.live.formats=['reel','post'];
['contest','live','card','vote'].forEach(k=>Object.assign(defaults[k],structuredClone(states[k])));

const sidebar=document.querySelector('.sidebar');
sidebar.insertAdjacentHTML('afterbegin','<div class="side-brand"><img src="assets/brand/pirate-king-logo.png" alt="Pirate King TCG"><b>PIRATE KING</b><small>VISUAL STUDIO</small></div>');
document.querySelector('#atelierNav').insertAdjacentHTML('afterend',`<div class="resource-list"><div class="eyebrow">RESSOURCES</div><button class="resource-btn"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m3 15 5-5 4 4 3-3 6 6"/></svg>Mes visuels</button><button class="resource-btn"><svg viewBox="0 0 24 24"><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/></svg>Logos / éléments</button></div>`);

const premiumCloudAssets=['nuage-4.png','nuage-5.png','nuage-6.png','nuage-7.png','nuage-9.png'];
const randomBetween=(min,max)=>Math.random()*(max-min)+min;
const cloudEdges=['top','right','bottom','left'];
function cloudMarkup(i,front=false){
 const edge=cloudEdges[i%cloudEdges.length],horizontal=edge==='top'||edge==='bottom';
 const left=front?(i%2?randomBetween(47,69):randomBetween(-10,14)):(horizontal?randomBetween(-20,75):(edge==='left'?randomBetween(-31,-16):randomBetween(72,87)));
 const top=front?randomBetween(34,68):(horizontal?(edge==='top'?randomBetween(-19,-7):randomBetween(78,91)):randomBetween(-5,86));
 const width=front?randomBetween(28,39):randomBetween(31,53);
 const opacity=front?randomBetween(.28,.52):randomBetween(.42,.84);
 const duration=randomBetween(13,24);
 const delay=-randomBetween(0,duration);
 const dx=randomBetween(18,40)*(Math.random()>.5?1:-1);
 const dy=randomBetween(8,20)*(Math.random()>.5?1:-1);
 const rotate=randomBetween(-1.8,1.8);
 const flip=Math.random()>.5?-1:1;
 const asset=premiumCloudAssets[Math.floor(Math.random()*premiumCloudAssets.length)];
 return `<img class="premium-cloud" src="assets/backgrounds/clouds/${asset}" alt="" style="left:${left}%;top:${top}%;width:${width}%;opacity:${opacity};--duration:${duration}s;--delay:${delay}s;--dx:${dx}px;--dy:${dy}px;--rotate:${rotate}deg;--flip:${flip}">`;
}
const premiumCloudsBack=document.createElement('div');
premiumCloudsBack.className='premium-clouds premium-clouds-back';
premiumCloudsBack.setAttribute('aria-hidden','true');
premiumCloudsBack.innerHTML=Array.from({length:14},(_,i)=>cloudMarkup(i)).join('');
const premiumCloudsFront=document.createElement('div');
premiumCloudsFront.className='premium-clouds premium-clouds-front';
premiumCloudsFront.setAttribute('aria-hidden','true');
premiumCloudsFront.innerHTML=Array.from({length:4},(_,i)=>cloudMarkup(i,true)).join('');
premiumCloudsFront.insertAdjacentHTML('beforeend','<img class="hero-cloud" src="assets/backgrounds/clouds/nuage-4.png" alt="">');
const goldDust=document.createElement('div');
goldDust.className='gold-dust';
goldDust.setAttribute('aria-hidden','true');
goldDust.innerHTML=Array.from({length:42},()=>`<i style="left:${randomBetween(2,98)}%;top:${randomBetween(2,98)}%;--size:${randomBetween(1,3.4)}px;--duration:${randomBetween(4,11)}s;--delay:${-randomBetween(0,10)}s;--travel:${randomBetween(10,35)}px"></i>`).join('');
art.querySelector('.visual-bg').insertAdjacentElement('afterend',premiumCloudsBack);
premiumCloudsBack.insertAdjacentElement('afterend',goldDust);
art.querySelector('.media').insertAdjacentElement('afterend',premiumCloudsFront);
const sakuraPetals=document.createElement('div');
sakuraPetals.className='sakura-petals sakura-petals-front';
sakuraPetals.setAttribute('aria-hidden','true');
sakuraPetals.innerHTML=Array.from({length:18},()=>`<i style="--x:${randomBetween(-12,90)}%;--travel:${randomBetween(70,155)}px;--size:${randomBetween(16,32)}px;--duration:${randomBetween(6.5,11.5)}s;--delay:${-randomBetween(0,14)}s;--spin:${randomBetween(220,760)}deg"></i>`).join('');
art.querySelector('.media').insertAdjacentElement('afterend',sakuraPetals);
const waterReflection=document.createElement('div');
waterReflection.className='water-reflection';
waterReflection.setAttribute('aria-hidden','true');
waterReflection.innerHTML='<img alt=""><i></i><i></i><i></i>';
sakuraPetals.insertAdjacentElement('beforebegin',waterReflection);
const sakuraPetalsBack=document.createElement('div');
sakuraPetalsBack.className='sakura-petals sakura-petals-back';
sakuraPetalsBack.setAttribute('aria-hidden','true');
sakuraPetalsBack.innerHTML=Array.from({length:38},()=>`<i style="--x:${randomBetween(-14,94)}%;--travel:${randomBetween(52,128)}px;--size:${randomBetween(6,15)}px;--duration:${randomBetween(8,14)}s;--delay:${-randomBetween(0,16)}s;--spin:${randomBetween(180,680)}deg"></i>`).join('');
art.querySelector('.media').insertAdjacentElement('beforebegin',sakuraPetalsBack);
const fireEffects=document.createElement('div');
fireEffects.className='fire-effects';
fireEffects.setAttribute('aria-hidden','true');
fireEffects.innerHTML=`<div class="flame-images"><img class="flame-left" src="assets/backgrounds/flame-left.png" alt=""><img class="flame-right" src="assets/backgrounds/flame-right.png" alt=""></div><div class="embers">${Array.from({length:62},()=>`<i style="left:${randomBetween(2,98)}%;bottom:${randomBetween(-5,78)}%;--size:${randomBetween(2.5,8)}px;--drift:${randomBetween(-65,65)}px;--rise:${-randomBetween(90,390)}px;--duration:${randomBetween(3.5,9)}s;--delay:${-randomBetween(0,9)}s"></i>`).join('')}</div>`;
sakuraPetals.insertAdjacentElement('afterend',fireEffects);
const liveEffects=document.createElement('div');
liveEffects.className='live-effects';
liveEffects.setAttribute('aria-hidden','true');
liveEffects.innerHTML='<img src="assets/backgrounds/live-lightning-overlay.png" alt="">';
art.querySelector('.visual-bg').insertAdjacentElement('afterend',liveEffects);
const voteHat=document.createElement('img');
voteHat.className='vote-hat';
voteHat.src='assets/brand/straw-hat.png';
voteHat.alt='';
voteHat.setAttribute('aria-hidden','true');
art.querySelector('.headline').insertAdjacentElement('beforebegin',voteHat);

const cloudSelection=document.createElement('div');
cloudSelection.className='cloud-selection hidden';
cloudSelection.innerHTML='<i title="Redimensionner"></i>';
art.appendChild(cloudSelection);
const editableClouds=()=>[...art.querySelectorAll('.premium-cloud,.hero-cloud')];
const cloudLayoutKey='pirate-king-premium-cloud-layout-v2';
function saveCloudLayout(){
 const layout=editableClouds().map(cloud=>({src:cloud.getAttribute('src'),left:cloud.style.left,top:cloud.style.top,width:cloud.style.width}));
 try{localStorage.setItem(cloudLayoutKey,JSON.stringify(layout))}catch(e){}
 syncCloudLayoutUrl(layout);
}
function syncCloudLayoutUrl(layout){
 const compact=layout.map(item=>{const file=item.src.split('/').pop(),asset=Math.max(0,premiumCloudAssets.indexOf(file));return [asset,parseFloat(item.left)||0,parseFloat(item.top)||0,parseFloat(item.width)||0].map((value,index)=>index?Math.round(value*10)/10:value).join('~')}).join('_');
 history.replaceState(null,'',location.pathname+location.search+'#clouds='+compact);
}
function restoreCloudLayout(){
 try{
  const layout=JSON.parse(localStorage.getItem(cloudLayoutKey)||'null');
  if(!Array.isArray(layout))return;
  editableClouds().forEach((cloud,i)=>{if(layout[i]){if(layout[i].src)cloud.setAttribute('src',layout[i].src);Object.assign(cloud.style,{left:layout[i].left,top:layout[i].top,width:layout[i].width})}});
  syncCloudLayoutUrl(layout);
 }catch(e){}
}
function selectCloud(cloud){
 editableClouds().forEach(item=>item.classList.toggle('cloud-selected',item===cloud));
 cloudSelection.classList.remove('hidden');
 const sync=()=>{cloudSelection.style.left=cloud.offsetLeft+'px';cloudSelection.style.top=cloud.offsetTop+'px';cloudSelection.style.width=cloud.offsetWidth+'px';cloudSelection.style.height=cloud.offsetHeight+'px'};
 sync();
 return sync;
}
function enableCloudEditing(){
 restoreCloudLayout();
 editableClouds().forEach(cloud=>{
  cloud.draggable=false;
  cloud.addEventListener('pointerdown',event=>{
   if(active!=='card'||states.card.ambience!=='dark')return;
   event.preventDefault();cloud.setPointerCapture(event.pointerId);
   const sync=selectCloud(cloud),startX=event.clientX,startY=event.clientY,startLeft=cloud.offsetLeft,startTop=cloud.offsetTop;
   const move=e=>{const rect=art.getBoundingClientRect();cloud.style.left=((startLeft+e.clientX-startX)/rect.width*100)+'%';cloud.style.top=((startTop+e.clientY-startY)/rect.height*100)+'%';sync()};
   const stop=()=>{cloud.removeEventListener('pointermove',move);cloud.removeEventListener('pointerup',stop);saveCloudLayout()};
   cloud.addEventListener('pointermove',move);cloud.addEventListener('pointerup',stop);
  });
 });
 cloudSelection.querySelector('i').addEventListener('pointerdown',event=>{
  const cloud=art.querySelector('.cloud-selected');if(!cloud)return;
  event.preventDefault();event.stopPropagation();const handle=event.currentTarget;handle.setPointerCapture(event.pointerId);
  const sync=selectCloud(cloud),startX=event.clientX,startWidth=cloud.offsetWidth;
  const move=e=>{const rect=art.getBoundingClientRect();cloud.style.width=(Math.max(42,startWidth+e.clientX-startX)/rect.width*100)+'%';sync()};
  const stop=()=>{handle.removeEventListener('pointermove',move);handle.removeEventListener('pointerup',stop);saveCloudLayout()};
  handle.addEventListener('pointermove',move);handle.addEventListener('pointerup',stop);
 });
}
const finalCloudLayout=[
 [0,71,-17.8,31.6],[0,59,35.7,49.7],[4,22,90.5,45.7],[1,-20.1,25.8,43.2],
 [0,-15,-7.5,49.7],[0,74.9,11.5,51.5],[3,56,88.3,43.8],[4,-17.2,61.8,43.1],
 [2,65,-4.8,45.6],[1,72.5,10.8,34],[2,70.9,86.6,37],[1,-40.7,73.2,75.5],
 [0,69,-7.2,35.3],[3,84.9,64.4,37.4],[4,-0.9,59.9,29.7],[1,58.5,65.4,33.3],
 [4,4.7,24.9,33.4],[0,-15.7,17.6,35.2],[0,70,65.9,54]
];
editableClouds().forEach((cloud,index)=>{
 const item=finalCloudLayout[index];if(!item)return;
 cloud.src='assets/backgrounds/clouds/'+premiumCloudAssets[item[0]];
 const enterX=item[1]<18?-150:item[1]>58?150:0;
 const enterY=enterX?0:(item[2]<45?-130:130);
 Object.assign(cloud.style,{left:item[1]+'%',top:item[2]+'%',width:item[3]+'%',opacity:index===1?'.7':'1','--enter-x':enterX+'px','--enter-y':enterY+'px','--intro-delay':Math.min(index,8)*.035+'s'});
});

function enhanceFormats(){document.querySelectorAll('.format').forEach(b=>{if(!b.querySelector('.ratio-icon'))b.insertAdjacentHTML('afterbegin','<i class="ratio-icon"></i>')})}
function useAsset(asset){const s=states[active];if(active==='vote'){if(!s.imageA)s.imageA=asset.src;else if(!s.imageB)s.imageB=asset.src;else s.imageA=asset.src}else s.image=asset.src;renderPreview();renderAll()}
function bankHTML(){return `<div class="asset-bank"><div class="asset-bank-title">BANQUE ONE PIECE</div><div class="asset-grid">${assets.map((a,i)=>`<button class="asset" data-asset="${i}" title="${a.label}" draggable="true"><img src="${a.src}" alt="${a.label}" draggable="false"></button>`).join('')}</div><small class="asset-drag-note">Cliquez ou glissez une carte sur l’aperçu</small></div>`}
function previewFor(drop,key){const src=states[active][key];if(!src)return;drop.insertAdjacentHTML('afterend',`<div class="upload-preview"><img src="${src}" alt=""><span>Image ajoutée<br>Cliquer sur la zone pour remplacer</span><button class="upload-delete" data-delete-image="${key}" title="Supprimer">×</button></div>`)}
function enhanceSettings(){
 if(active==='contest'||active==='live'){
  const firstSection=document.querySelector('#dynamicSettings .section');
  const selected=states[active].backgroundPreset;
  firstSection.insertAdjacentHTML('afterend',`<div class="section background-preset"><div class="section-name">FOND</div><div class="background-grid"><button class="background-card ${selected==='clouds'?'active':''}" data-background="clouds"><img src="assets/backgrounds/concours-clouds.png" alt="Fond nuages"><span>Nuages manga</span><b>✓</b></button><button class="background-card ${selected==='cloudsAnimated'?'active':''}" data-background="cloudsAnimated"><img src="assets/backgrounds/clouds-manga-animated.png" alt="Fond nuages animés"><span>Nuages manga animés</span><b>✓</b></button><button class="background-card ${selected==='speed'?'active':''}" data-background="speed"><img src="assets/backgrounds/live-speed-lines.png" alt="Fond vitesse"><span>Lignes de vitesse</span><b>✓</b></button>${active==='live'?`<button class="background-card ${selected==='lightning'?'active':''}" data-background="lightning"><img src="assets/backgrounds/live-lightning-overlay.png" alt="Fond éclairs"><span>Éclairs animés</span><b>✓</b></button>`:''}</div></div>`);
 }
 [...document.querySelectorAll('.field')].find(f=>f.querySelector('label')?.textContent==='Date et heure')?.remove();
 if(active==='vote')document.querySelectorAll('.field').forEach(field=>{const label=field.querySelector('label')?.textContent;if(label==='Nom A'||label==='Nom B')field.remove()});
 document.querySelectorAll('.dropzone').forEach((d,i)=>{if(!d.previousElementSibling?.classList.contains('inline-section-title'))d.insertAdjacentHTML('beforebegin',`<div class="inline-section-title">${active==='vote'?'CARTE '+(i?'B':'A'):active==='live'?'IMAGE / PRODUIT':'IMAGE / CARTE'}</div>`)});
 const first=document.querySelector('.dropzone');if(first&&!document.querySelector('.asset-bank'))first.closest('.section').insertAdjacentHTML('beforeend',bankHTML());
 document.querySelectorAll('.asset').forEach(b=>{
  b.onclick=()=>useAsset(assets[+b.dataset.asset]);
  b.ondragstart=event=>{event.dataTransfer.effectAllowed='copy';event.dataTransfer.setData('application/x-pirate-asset',b.dataset.asset)};
 });
 document.querySelectorAll('[data-background]').forEach(b=>b.onclick=()=>{states[active].backgroundPreset=b.dataset.background;renderAll()});
 const drops=[...document.querySelectorAll('.dropzone')];if(active==='vote'){if(drops[0])previewFor(drops[0],'imageA');if(drops[1])previewFor(drops[1],'imageB')}else if(drops[0])previewFor(drops[0],'image');
 document.querySelectorAll('[data-delete-image]').forEach(b=>b.onclick=()=>{states[active][b.dataset.deleteImage]=null;renderAll()});
 const names=['Titre','Secondaire','Accent','Fond'];document.querySelectorAll('.swatch').forEach((s,i)=>{if(!s.querySelector('span'))s.insertAdjacentHTML('beforeend',`<span>${names[i]}</span>`)});
 if(!document.querySelector('.palette-reset'))document.querySelector('.swatches').insertAdjacentHTML('afterend','<button class="btn palette-reset">Couleurs Pirate King</button>');
 document.querySelector('.palette-reset').onclick=()=>{Object.assign(states[active],{titleColor:active==='card'?'#ffffff':'#e21b23',secondaryColor:'#233f79',accentColor:'#f4c430',bgColor:active==='vote'?'#fff4e6':active==='card'?'#17191d':'#f8fafc'});renderAll()};
 const gen=document.querySelector('#generate');gen.textContent='Générer le visuel';
 if(active==='card'){
  const topPullToggle=[...document.querySelectorAll('.toggle-row')].find(row=>row.textContent.includes('TOP PULL'));
  if(topPullToggle)topPullToggle.firstChild.textContent='Afficher / masquer TOP PULL';
 }
}
art.addEventListener('dragover',event=>{if(active!=='card')return;event.preventDefault();event.dataTransfer.dropEffect='copy';art.classList.add('card-drop-ready')});
art.addEventListener('dragleave',event=>{if(!art.contains(event.relatedTarget))art.classList.remove('card-drop-ready')});
art.addEventListener('drop',event=>{
 if(active!=='card')return;
 event.preventDefault();art.classList.remove('card-drop-ready');
 const assetIndex=event.dataTransfer.getData('application/x-pirate-asset');
 if(assetIndex!==''){useAsset(assets[+assetIndex]);return}
 const file=[...event.dataTransfer.files].find(item=>item.type.startsWith('image/'));
 if(file)loadFile(file,'image');
});
formatNames.thumb='Miniature horizontale';
const baseSettings=settings,baseFormats=formatTabs,baseRenderPreview=renderPreview;
let levitationTimer=null,levitationAnimation=null;
function restartProductLevitation(){
 clearTimeout(levitationTimer);
 if(levitationAnimation)levitationAnimation.cancel();
 levitationAnimation=null;
 const product=document.querySelector('#media');
 product.style.translate='-50% -50%';
 product.style.willChange='translate';
 if(product.classList.contains('hidden')||active==='vote'||(active==='live'&&format==='post'))return;
 levitationTimer=setTimeout(()=>{
  levitationAnimation=product.animate([
   {translate:'-50% -50%',offset:0},
   {translate:'-50% calc(-50% - 4px)',offset:.25},
   {translate:'-50% calc(-50% - 8px)',offset:.5},
   {translate:'-50% calc(-50% - 4px)',offset:.75},
   {translate:'-50% -50%',offset:1}
  ],{duration:3600,iterations:Infinity,easing:'linear'});
 },650);
}
settings=function(){baseSettings();enhanceSettings()};
formatTabs=function(){baseFormats();enhanceFormats()};
renderPreview=function(){
 baseRenderPreview();
 art.dataset.scene=states[active].backgroundPreset||'';
 cloudSelection.classList.add('hidden');
 const reflection=waterReflection.querySelector('img');
 reflection.src=states.card.image||'';
 waterReflection.classList.toggle('empty',!states.card.image);
 restartProductLevitation();
 if(active==='card'&&format==='reel'&&states.card.topPull){
  const words=(states.card.topPullText||'TOP PULL').trim().split(/\s+/);
  const small=document.createElement('span'),large=document.createElement('strong');
  small.textContent=words.shift()||'TOP';large.textContent=words.join(' ')||'PULL';
  document.querySelector('#topPull').replaceChildren(small,large);
 }
 if(active==='vote')document.querySelector('#vTitle').innerHTML='QUELLE CARTE<br><span>TU PRÉFÈRES ?</span>';
};
renderAll();
})();
