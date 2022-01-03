import UserService from "../../../services/UserService.js";
export default {
  async getUsers(context) {
    // console.log("action: test/getUsers");
    const response = await UserService.getUsers();

    // console.log(response.data.users);
    const usersList = response.data.users;
    console.log(usersList);
    const users = [];
    for (const userData of usersList) {
      const { id, firstName, lastName } = userData;
      const user = {
        id,
        firstName,
        lastName,
      };
      users.push(user);
    }

    context.commit("setUsers", users);
  },
};
