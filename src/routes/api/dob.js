import dobController from '../../controllers/dobController';

const { calculateAge } = dobController;

const dobRoute = (router) => {
  router.route('/howold')
    .get(calculateAge);
};
export default dobRoute;
