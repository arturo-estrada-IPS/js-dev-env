import './index.css';
import { getUsers, deleteUser } from './api/userApi';

getUsers().then(result => {
  let usersBody = '';
  let deleteLinks = null;

  result.forEach(user => {
    usersBody += `<tr>
      <td><a href='#' data-id='${user.id}' class='delete-user'>DELETE</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
    </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;
  deleteLinks = global.document.getElementsByClassName('delete-user');

  Array.from(deleteLinks, link => {
    link.onclick = (event) => {
      event.preventDefault();
      const elem = event.target;
      deleteUser(elem.attributes['data-id'].value)
        .then(() => {
          const row = elem.parentNode.parentNode;
          row.parentNode.removeChild(row);
        });
    }
  });
});
