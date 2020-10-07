import { getElement } from '../utils';

export const handleLogin = socket => () => {
  const inputValue = getElement('#username').value;
  const messageInput = getElement('#message-content');
  const messageSubmitButton = getElement('#message-submit');
  const footerUserDiv = getElement('.footer-user');
  const loginButton = getElement('#login');

  const isLogin = loginButton.innerText === 'Entrar';

  if(inputValue && isLogin) {
    socket.emit('login', { username: inputValue });

    loginButton.innerText = 'Sair';
    messageInput.disabled = false;
    messageSubmitButton.disabled = false;

    footerUserDiv.innerHTML = `
        <input id="username" type="hidden" value="${inputValue}" />
        <span>${inputValue}</span>
    `;
  } else if (!isLogin) {
    socket.emit('logout', { username: inputValue });

    loginButton.innerText = 'Entrar';
    messageInput.disabled = true;
    messageSubmitButton.disabled = true;

    footerUserDiv.innerHTML = `
      <label for="username">Nome</label>
      <input id="username">
    `;
  }
}