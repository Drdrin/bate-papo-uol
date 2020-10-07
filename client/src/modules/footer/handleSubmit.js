import { getElement } from '../utils';

export const handleSubmit = socket => () => {
  const messageInput = getElement('#message-content');

  const from = getElement('#username').value;
  const to = getElement('#message-to').value;
  const content = messageInput.value;
  const type = getElement('#message-type').value;
  const date = Date.now();

  if (content) {
    const message = {
      from,
      to,
      content,
      type,
      date
    };

    socket.emit('message', message);
    messageInput.value = '';
    messageInput.focus();
  }
};