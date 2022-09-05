import express from 'express';
import cors from 'cors';
import messages from './utils/messages';
import response from './utils/response';
import routes from './routes';
import debug from 'debug';

// Instance of express app
const app = express();

const infoLog = debug('http:info');
const router = express.Router();


// Pass router to routes
routes(router);


// Allow cross origin access
app.use(cors());

// Parse application/json
app.use(express.json());

// Parse application/xwww-
app.use(express.urlencoded({ extended: false }));

//import and use routes
app.use('/', router);

app.use('*', (req, res) => response(res, 404, 'error', {
  message: messages.notFound,
}));

const server = app.listen(3003,
  () => infoLog(`Listening on port ${server.address().port}`)
);

export default app;