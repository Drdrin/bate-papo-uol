import io from 'socket.io-client';

import { footer } from '../footer';
import { messages } from '../messages';

export const app = () => {
  const socket = io('http://localhost:8080');

  footer(socket);
  messages(socket);
}