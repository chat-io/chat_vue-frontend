import UserService from "../../../services/UserService.js";
export default {
  async getUsers(context) {
    const response = await UserService.getUsers();

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
