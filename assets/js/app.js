function showApp(which){
  document.getElementById('store').classList.toggle('active', which==='store');
  document.getElementById('admin').classList.toggle('active', which==='admin');
  document.getElementById('btn-store').classList.toggle('active', which==='store');
  document.getElementById('btn-admin').classList.toggle('active', which==='admin');
}
function showAdminPage(id, el){
  document.querySelectorAll('.adm-page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  document.querySelectorAll('.adm-nav-item').forEach(n=>n.classList.remove('active'));
  el.classList.add('active');
}
function openModal(id){ document.getElementById(id).classList.add('open'); }
function closeModal(id){ document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-overlay').forEach(ov=>{
  ov.addEventListener('click', e=>{ if(e.target===ov) ov.classList.remove('open'); });
});
