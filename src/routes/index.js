import messages from '../utils/messages';
import response from '../utils/response';
import dobRoute from './api/dob';

const routes = (router) => {
  router
    .route('/')
    .get((req, res) => response(res, 200, 'success', {
      message: messages.welcome,
    }));

  // user routes
  dobRoute(router);
};

export default routes;
