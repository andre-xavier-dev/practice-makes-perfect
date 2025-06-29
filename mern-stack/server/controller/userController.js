import User from "../model/userModel.js"

export const create = async (req, res) => {
  try {
    const newUser = new User(req.body)
    const { email } = newUser

    const userExist = await User.findOne({ email })
    if (userExist) {
      return res.status(409).json({ message: "User already exists." })
    }
    const savedData = await newUser.save()
    res.status(200).json(savedData)
  } catch (error) {
    res.status(500).json({ errorMessage: error.message })
  }
}
