const { User } = require("../../model")

const findUser = async (props) => {
    let user = await User.findOne(props);
    return user ? user._doc : false
}

module.exports = findUser