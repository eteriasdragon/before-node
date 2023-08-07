const apiKey = `ff43b538d2564d1480254844f271447e`;
const newsWrapper = document.querySelector('.news-section__news-wrapper');

function createNewsPost({urlToImage, url, title, description, author, publishedAt}) {
  const post = document.createElement('div');
  const shorteredTitle = title.slice(0, 60);
  const shorteredDescr = description.slice(0, 130);
  post.classList.add('news-post');
  post.insertAdjacentHTML('beforeend', `
<img src="${urlToImage}" alt="people" class="news-post__img">
<p class="news-post__title">${shorteredTitle}</p><p class="news-post__descr">${shorteredDescr}...</p>
<p class="news-post__cred"><span class="news-post__author">${author}</span> / <span class="news-post__date">${dateFormatter(publishedAt)}</span></p>
<a target="_blank" href="${url}" class="news-post__action-btn button">CONTINUE READING....</a>`);
  return post;
}

function dateFormatter(date) {
  const formattedDate = new Date(date);
  const year = formattedDate.getFullYear();
  const month = formattedDate.getMonth() + 1;
  const day = formattedDate.getDate();
  return `${year}-${addLeadingZero(month)}-${addLeadingZero(day)}`;
}

function addLeadingZero(num) {
  return num < 10 ? `0${num}` : num;
}

fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apiKey}`)
  .then(res => res.json())
  .then(data => {
    const newsFrag = document.createDocumentFragment();
    const latestPost = data.articles.slice(0, 4);
    latestPost.forEach(postData => {
      newsFrag.append(createNewsPost(postData));
    })
    newsWrapper.append(newsFrag);
  });