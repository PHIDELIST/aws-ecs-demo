import { createServer } from 'node:http';


const server = createServer(app);

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});