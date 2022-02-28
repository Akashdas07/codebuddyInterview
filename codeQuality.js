// level {1/2/3}
const getUsers = async (users) => {
    return users.map((user, index)=> {
        return{
            ...user,
            id: index
        }
    });
  }