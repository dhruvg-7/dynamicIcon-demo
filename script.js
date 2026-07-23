const items=[['Announcements','icons/announcement.svg'],['Approvals','icons/approval.svg'],['Documents','icons/document.svg'],['Asset Management','icons/asset.svg'],['FAQs','icons/faq.svg']];
const cards=document.getElementById('cards');
alert("Script is working!");
items.forEach(async i=>{const t=await fetch(i[1]).then(r=>r.text());const d=document.createElement('div');d.className='card';d.innerHTML='<div class="icon">'+t+'</div><div><b>'+i[0]+'</b></div>';cards.appendChild(d);});
function apply(c){document.documentElement.style.setProperty('--primary',c);document.querySelectorAll('.icon').forEach(x=>x.style.color=c);}
picker.oninput=()=>{hex.value=picker.value;apply(picker.value)};hex.oninput=()=>{apply(hex.value);if(/^#[0-9A-Fa-f]{6}$/.test(hex.value))picker.value=hex.value};apply('#1976D2');