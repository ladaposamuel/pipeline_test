import response from '../utils/response';
import messages from '../utils/messages';


const calculateAge = async (req, res) => {
    try {
        const { dob } = req.query;
        console.log("🚀 ~ file: dobController.js ~ line 8 ~ calculateAge ~ dob", dob)

      return response(res, 200, 'success', {'good' : 'good'});

    } catch (error) {
      return response(res, 500, 'error', { errors: error.message });
    }
  };
  

  export default {
    calculateAge
  };