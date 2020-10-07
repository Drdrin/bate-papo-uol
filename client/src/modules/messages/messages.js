import moment from 'moment';
import { addMessage } from './addMessage';

export const messages = socket => {
  socket.on('login', user => {
    addMessage(`
      <li class="message">${moment().format('(HH:mm:ss)')}
        <span class="message-user">${user.username}</span>
        entrou na sala!
      </li>
    `);
  });

  socket.on('logout', user => {
    addMessage(`
      <li class="message">${moment().format('(HH:mm:ss)')}
        <span class="message-user">${user.username}</span>
        saiu da sala!
      </li>
    `);
  });

  socket.on('message', ({ date, from, type, to, content}) => {
    addMessage(`
      <li class="message">${moment(date).format('(HH:mm:ss)')}
        <span class="message-user">${from}</span>
        ${type} ${to}: ${content}
      </li>
    `);
  });
};