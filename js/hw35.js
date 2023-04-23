const API_BASE_URL = 'https://gorest.co.in/public/v1';
const appElement = document.getElementById('app');

function getUsers() {
  return fetch(`${API_BASE_URL}/users`)
    .then(response => response.json())
    .then(data => data.data);
}

function getUserPosts(userId) {
  return fetch(`${API_BASE_URL}/users/${userId}/posts`)
    .then(response => response.json())
    .then(data => data.data);
}

function getPostComments(postId) {
  return fetch(`${API_BASE_URL}/posts/${postId}/comments`)
    .then(response => response.json())
    .then(data => data.data);
}

function renderUserList(users) {
  if (users.length === 0) {
    appElement.innerHTML = 'Користувачі незнайдені';
    return;
  }

  const userListElement = document.createElement('ul');

  users.forEach(user => {
    const userListItem = document.createElement('li');
    const userLink = document.createElement('a');

    userLink.href = '#';
    userLink.textContent = user.name;
    userLink.onclick = () => renderUserPosts(user.id);

    userListItem.appendChild(userLink);
    userListElement.appendChild(userListItem);
  });

  appElement.innerHTML = '';
  appElement.appendChild(userListElement);
}

function renderUserPosts(userId) {
  getUserPosts(userId)
    .then(posts => {
      if (posts.length === 0) {
        appElement.innerHTML = 'У даного користувача відсутні пости';

        const backButton = document.createElement('button');
        backButton.textContent = 'Назад';
        backButton.onclick = () => getUsers().then(renderUserList);

        appElement.appendChild(backButton);
        return;
      }

      const postListElement = document.createElement('ul');

      posts.forEach(post => {
        const postListItem = document.createElement('li');
        const postLink = document.createElement('a');

        postLink.href = '#';
        postLink.textContent = post.title;
        postLink.onclick = () => renderPostDetails(post.id);

        postListItem.appendChild(postLink);
        postListElement.appendChild(postListItem);
      });

      appElement.innerHTML = '';
      appElement.appendChild(postListElement);
    })
    .catch(error => {
      console.error(error);
      appElement.innerHTML = 'Не вдалося завантажити пости користувача';
    });
}

function renderPostDetails(postId) {
  Promise.all([
    fetch(`${API_BASE_URL}/posts/${postId}`).then(res => res.json()),
    getPostComments(postId),
  ])
    .then(([postResponse, comments]) => {
      const post = postResponse.data;
      const postElement = document.createElement('div');
      const postTitle = document.createElement('h2');
      const postBody = document.createElement('p');

      postTitle.textContent = post.title;
      postBody.textContent = post.body;

      postElement.appendChild(postTitle);
      postElement.appendChild(postBody);

      appElement.innerHTML = '';
      appElement.appendChild(postElement);

      const backButton = document.createElement('button');
      backButton.textContent = 'Назад';
      backButton.onclick = () => renderUserPosts(post.user_id);

      appElement.appendChild(backButton);

      const commentsTitle = document.createElement('h3');
      commentsTitle.textContent = 'Коментарі';

      appElement.appendChild(commentsTitle);

      if (comments.length === 0) {
        const noCommentsText = document.createElement('p');
        noCommentsText.textContent = 'Коментарі відсутні';
        appElement.appendChild(noCommentsText);
      } else {
        const commentsList = document.createElement('ul');

        comments.forEach(comment => {
          const commentListItem = document.createElement('li');
          const commentAuthor = document.createElement('strong');
          const commentBody = document.createElement('p');

          commentAuthor.textContent = comment.name;
          commentBody.textContent = comment.body;

          commentListItem.appendChild(commentAuthor);
          commentListItem.appendChild(commentBody);
          commentsList.appendChild(commentListItem);
        });

        appElement.appendChild(commentsList);
      }
    })
    .catch(error => {
      console.error(error);
      appElement.innerHTML = 'Не вдалося завантажити деталі посту';
    });
}

getUsers()
  .then(renderUserList)
  .catch(error => {
    console.error(error);
    appElement.innerHTML = 'Користувачі незнайдені';
  });
