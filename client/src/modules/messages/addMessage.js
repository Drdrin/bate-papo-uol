import { getElement } from '../utils';

export const addMessage = message => {
  const messageList = getElement('#messages-list');

  messageList.innerHTML = messageList.innerHTML + message;
}