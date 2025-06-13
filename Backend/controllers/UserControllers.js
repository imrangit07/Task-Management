const UserModel = require("../models/UserModels")
const taskModel = require("../models/TaskModels")
const UserLogin = async (req, res) => {
  console.log(req.body);
  const { userEmail, password } = req.body;
  const UserData = await UserModel.findOne({ userEmail: userEmail });
  console.log(UserData);

  try {
    if (!UserData) {
      res.status(401).send({ msg: "Invalid User Name!" })
    }
    if (UserData.password != password) {
      res.status(401).send({ msg: "Invalid Password!" })
    }
    res.status(200).send({ msg: "Login Successfully", UserData: { userId: UserData._id, userName: UserData.userName } })

  } catch (error) {
    console.log(error);

  }
}
const getAllUserTasks = async (req,res) => {
  const { id } = req.query;
  
  try {
    const allTasks = await taskModel.find({userId:id} )
    res.status(200).send(allTasks);
  } catch (error) {
    res.status(500).send({ msg: error });
  }
}
module.exports = {
    UserLogin,
    getAllUserTasks
}