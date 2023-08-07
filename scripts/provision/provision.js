import {getPosts} from "./helpers/getPosts.js";
import {createSmallLoader} from "./helpers/smallLoader.js";


const servicesList = document.querySelector(".service-section__service-list");
const provisionList = document.querySelector(".service-section__provisions-list");
let isLoadingPostContent = false;

function createPostHTML(title, description, imageUrl) {
  const postWrapper = document.createElement("div");
  postWrapper.classList.add("service-section__provision-item");
  postWrapper.classList.add("provision-item");
  postWrapper.innerHTML = `
  <img class="provision-item__img" alt="icon" src="${imageUrl}">
  <div class="provision-item__info">
    <p class="provision-item__title">${title}</p>
    <p class="provision-item__descr">${description}</p>
  </div>
`;
  return postWrapper;
}

async function getLastPosts() {
  provisionList.append(createSmallLoader());
  isLoadingPostContent = true;
  const allCategoryBtn = document.querySelector('.service-section__service-list-item');
  if (!allCategoryBtn.classList.contains('active')) allCategoryBtn.classList.add('active');

  try {
    const allPosts = await getPosts();
    const postFrag = document.createDocumentFragment();

    allPosts.reduce((acc, item) => {
      if (acc.length < 3 && !acc.some((obj) => obj.category === item.category)) {
        acc.push(item);
        postFrag.append(createPostHTML(item.title, item.description, item.imageUrl));
      }
      return acc;
    }, []);

    provisionList.querySelector('.small-loader-wrapper').remove();
    provisionList.append(postFrag);
    isLoadingPostContent = false;
    return true;
  } catch (error) {
    console.error('Error processing data:', error);
  }

}

getLastPosts();

async function filterPosts(event) {
  if (!event.target.classList.contains('service-section__service-list-item')
    || isLoadingPostContent) return;

  const category = event.target.dataset.category;
  const activeBtn = servicesList.querySelector('.active');

  provisionList.innerHTML = "";

  if ((event.target.classList.contains("active") && !(category === "all")) || (category === "all")) {
    activeBtn.classList.remove('active');
    getLastPosts();
    return;
  }

  activeBtn.classList.remove('active');

  event.target.classList.add('active');

  provisionList.append(createSmallLoader());
  isLoadingPostContent = true;
  let postFrag = document.createDocumentFragment();

  try {
    const allPosts = await getPosts(category);
    allPosts.forEach(postData => {
      postFrag.append(createPostHTML(postData.title, postData.description, postData.imageUrl));
    })
    provisionList.querySelector('.small-loader-wrapper').remove();
    provisionList.append(postFrag);
    isLoadingPostContent = false;
  } catch (error) {
    console.error('Error processing data:', error);
  }
}

servicesList.addEventListener('click', filterPosts)