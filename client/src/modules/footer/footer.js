import { getElement } from '../utils';
import { handleLogin } from './handleLogin';
import { handleUsersUpdate } from './handleUsersUpdate';
import { handleSubmit } from './handleSubmit';

export const footer = socket => {
  const loginButton = getElement('#login');
  const submitButton = getElement('#message-submit');
  
  loginButton.addEventListener('click', handleLogin(socket));
  submitButton.addEventListener('click', handleSubmit(socket));

  socket.on('users update', handleUsersUpdate);
}