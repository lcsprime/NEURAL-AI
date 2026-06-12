function toggleNav(forceOpen){
  const nav=document.getElementById('nav');
  const toggle=nav.querySelector('.nav-toggle');
  const shouldOpen=typeof forceOpen==='boolean'?forceOpen:!nav.classList.contains('open');
  nav.classList.toggle('open',shouldOpen);
  toggle.setAttribute('aria-expanded',shouldOpen?'true':'false');
  toggle.textContent=shouldOpen?'×':'☰';
}

function go(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  document.getElementById('n-'+name).classList.add('active');
  toggleNav(false);
  window.scrollTo(0,0);
}

window.addEventListener('scroll',()=>{
  document.getElementById('nav').classList.toggle('scrolled',scrollY>40);
  document.getElementById('totop').classList.toggle('show',scrollY>400);
});

window.addEventListener('resize',()=>{
  if(window.innerWidth>820){
    toggleNav(false);
  }
});

function scrollStrip(dir){
  document.getElementById('strip').scrollBy({left:dir*360,behavior:'smooth'});
}

let indIdx=0;
function moveInd(dir){
  const track=document.getElementById('ind-track');
  const max=6-4;
  indIdx=Math.max(0,Math.min(indIdx+dir,max));
  const w=track.children[0].offsetWidth+20;
  track.style.transform=`translateX(-${indIdx*w}px)`;
  document.querySelectorAll('#ind-dots .c-dot').forEach((d,i)=>{
    d.classList.toggle('on',i===Math.min(indIdx,2));
  });
}

function sub(btn){
  const fn=document.getElementById('fn').value.trim();
  const ln=document.getElementById('ln').value.trim();
  const em=document.getElementById('em').value.trim();
  const co=document.getElementById('co').value.trim();
  const sv=document.getElementById('sv').value;
  const msg=document.getElementById('msg').value.trim();
  const emailOk=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em);
  if(!fn||!em||!msg||!emailOk){
    btn.textContent=emailOk?'Please fill required fields':'Enter a valid email';
    btn.style.background='#c0392b';
    setTimeout(()=>{btn.textContent='Send message →';btn.style.background='';},2500);
    return;
  }

  const fullName=[fn,ln].filter(Boolean).join(' ');
  const subject=sv?`Website inquiry: ${sv}`:'Website inquiry';
  const body=[
    `Name: ${fullName}`,
    `Email: ${em}`,
    `Company: ${co||'Not provided'}`,
    `Service Area: ${sv||'Not specified'}`,
    '',
    'Message:',
    msg
  ].join('\n');

  const mailto=`mailto:admin@neuralaicomputing.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById('cform').style.display='none';
  document.getElementById('smsg').style.display='block';
  setTimeout(()=>{ window.open(mailto,'_blank','noopener'); },60);
}

