
// creating validInfo middleware for checking correct field inputs

module.exports = (req,res,next) => {

  //destructure req.body

  const {first_name,last_name, email, password, institution, role, employee_id} = req.body;
  
  function validEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

  if(req.path === "/register-lender") {
    if(![first_name,last_name, email, password, institution, role, employee_id].every(Boolean)) {
      return res.status(401).json("Missing Credentials");
    } else if(!validEmail(email)) {
      return res.status(401).json("Invalid Email");
    }
  }

  else if(req.path === "/login-lender") {
    if(![password, institution, role, employee_id].every(Boolean)) {
      return res.status(401).json("Missing Credentials");
    }  
}
next()
};