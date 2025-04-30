
function dLChecker (user, from_DMV_user_data) {

  if(from_DMV_user_data.rows.length === 0 ) {
    return false
  } else if (
   ( user.first_name.toLowerCase() === from_DMV_user_data.rows[0].first_name.toLowerCase())
     && 
    (user.last_name.toLowerCase() === from_DMV_user_data.rows[0].last_name.toLowerCase())
    &&
    (user.dob.toISOString === from_DMV_user_data.rows[0].dob.toISOString)
    ) {
         return true;
    } else {
         return false;
    }
}

module.exports = dLChecker