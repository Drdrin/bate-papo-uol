import { getElement } from '../utils';

export const handleUsersUpdate = users => {
  const userSelect = getElement('#message-to');
  const talkingWith = userSelect.value;

  const hasUser = users.find(({ username }) => username === talkingWith);

  const options = users.map(
    ({ username }) => `<option value="${username}">${username}</option>`
  ).concat('<option value="todos">Todos</option>');

  userSelect.innerHTML = options;

  if(hasUser) {
    userSelect.value = talkingWith;
  }
}