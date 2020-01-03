import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers() {
  return get('users');
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request)
    .then(onSuccess)
    .catch(onError);
}

function get(url) {
  return fetch(baseUrl + url)
    .then(onSuccess)
    .catch(onError);
}

function onSuccess(response) {
  return response.json(response);
}

function onError(error) {
  // eslint-disable-next-line no-console
  console.error(error)
  throw error;
}
