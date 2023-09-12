const button = document.querySelector('.btn');
const collapse = document.getElementById('collapseExample');

const card = `<div class="card card-body hidden">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
     </div>`;

button.addEventListener('click', () => {
  collapse.classList.toggle('show');
  collapse.classList.toggle('collapse');
  if (button.className === 'btn btn-primary') {
    collapse.insertAdjacentHTML('beforeend', card);
  }
  else {
    const text = document.querySelector('.card');
    text.remove();
  }
  button.classList.toggle('collapsed');
});
