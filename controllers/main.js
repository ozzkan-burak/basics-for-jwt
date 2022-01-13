const CustomAPIError =require('../errors/custom-api-error');


const login = async (req, res) => {
  const {username, password} = req.body;

  if(!username || !password) {
    throw new CustomAPIError(400, 'Username and password are required');
  }

  console.log(username, password);
  res.send('Fake Login/Register/Signup Route');
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({msg: `Hello Burak`, secret:`Here is your authorized data, your lucky number is ${luckyNumber}`});
};

module.exports ={
  login,
  dashboard
}