const User = require("../model/UserModel");
const UserModel = {
  Query: {
    async GetAllUsers() {
      const users = await User.find();
      return users;
    },
    async GetUserById(_, { ID }) {
      const user = await User.findById(ID);
      return user;
    },
  },

  Mutation: {
    async InsertUser(_, { UserData: { UserName, Email, Password, Profile } }) {
      let UserINfo = new User({
        UserName,
        Email,
        Password,
        Profile,
      });
      UserINfo.ID = UserINfo._id;
      await UserINfo.save();

      return {
        ID: UserINfo._id,
        ...UserINfo._doc,
      };
    },
    async UpdateUser(
      _,
      { ID, UserEditInput: { UserName, Email, Password, Profile } }
    ) {
      const user = await User.findByIdAndUpdate(ID, {
        UserName,
        Email,
        Password,
        Profile,
      });
    
      return {
        ID: user._id,
        ...user._doc,
      };
    },

    async DeleteUser(_, { ID }) {
      const user = await User.findByIdAndDelete(ID);
    
      return {
        ...user._doc,
      };
    },
  },
};
module.exports = UserModel;
