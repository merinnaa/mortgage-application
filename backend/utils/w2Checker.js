
function w2Checker (user, from_irs_user_data) {

  if(from_irs_user_data.rows.length === 0 ) {
    return false
  } else if (
   ( user.first_name.toLowerCase() === from_irs_user_data.rows[0].first_name.toLowerCase())
     && 
    (user.last_name.toLowerCase() === from_irs_user_data.rows[0].last_name.toLowerCase())
    
    ) {
         return true;
    } else {
         return false;
    }
}

module.exports = w2Checker