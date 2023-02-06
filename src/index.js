import { renderContent } from './js/render';
import Notiflix, { Notify } from 'notiflix';
import { refs } from './js/refs';
import { getPhoto } from './js/grtPhoto';

const { form, gallery, showMoreBtn } = refs;

let photo = null;
const perPage = 80;
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
  const { value } = e.target.searchQuery;
  inputValue = value.toLowerCase().trim();

  getPhoto(inputValue, perPage, page);
}

export const load = data => {
  const { total } = data;
  if (total > 0) {
    Notify.success(`наайденно ${total} фото`);
    renderContent(data);
    maxPage = Math.ceil(total / perPage);
    console.log(maxPage);
  }
  if (total === 0) {
    Notify.failure('ничего не наайдено!');
  }

  if (total > perPage) {
    showMoreBtn.classList.remove('is-hidden');
  }
  if (maxPage === page) {
    showMoreBtn.classList.add('is-hidden');
    console.log('sfdf');
  }
};
const onBtnClick = () => {
  page++;
  console.log(inputValue);
  getPhoto(inputValue, perPage, page);
};
showMoreBtn.addEventListener('click', onBtnClick);

form.addEventListener('submit', onSubmit.bind(this));
console.log('fsdf');
