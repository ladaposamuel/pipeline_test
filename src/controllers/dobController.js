import moment from 'moment';
import response from '../utils/response';
import messages from '../utils/messages';

const calculateAge = async (req, res) => {
  try {
    const { dob } = req.query;
    let resp = '';
    if (dob) {
      const userDate = moment().diff(moment(dob, 'YYYYMMDD'), 'years');
      const ageMsg = messages.tellAge;
      resp = `${ageMsg} ${userDate}`;
    } else {
      return response(res, 400, 'error', { errors: messages.badTimeStamp });
    }
    return response(res, 200, 'success', { message: resp });
  } catch (error) {
    return response(res, 500, 'error', { errors: error.message });
  }
};

export default {
  calculateAge
};
