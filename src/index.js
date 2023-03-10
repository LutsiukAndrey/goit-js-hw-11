import { renderContent } from './js/render';
import Notiflix, { Notify } from 'notiflix';
import { refs } from './js/refs';
import { getPhoto } from './js/grtPhoto';

const { form, gallery, showMoreBtn } = refs;

const perPage = 40;
let page = 1;
let inputValue = '';
let maxPage = 0;
const clear = () => {
  page = 1;
  gallery.innerHTML = '';
};
function onSubmit(e) {
  e.preventDefault();
  clear();
  const { value } = e.target.elements.searchQuery;
  inputValue = value.toLowerCase().trim();
  if (inputValue === '') {
    return;
  }

  getPhoto(inputValue, perPage, page).then(load);
}
const load = data => {
  const { total } = data;
  if (total > 0) {
    Notify.success(`наайденно ${total} фото`);
    renderContent(data);
    maxPage = Math.ceil(total / perPage);
  }
  if (total === 0) {
    showMoreBtn.classList.add('is-hidden');
    Notify.failure('ничего не наайдено!');
    clear();
  }

  if (total > perPage) {
    showMoreBtn.classList.remove('is-hidden');
  }
  if (maxPage === page) {
    showMoreBtn.classList.add('is-hidden');
  }
};
const onBtnClick = () => {
  page++;
  console.log(inputValue);
  getPhoto(inputValue, perPage, page).then(load);
};
showMoreBtn.addEventListener('click', onBtnClick);

form.addEventListener('submit', onSubmit.bind(this));
