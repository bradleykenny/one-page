const APIs = {
    pages: {
        getAll: "/page/all",
        getByUser: "/page/user/${userId}",
    },
    projects: {
        getAll: "",
        getByIds: "/project/byIds"
    },
};

export const apiVariables = {
    userId: "${userId}",
};

export default APIs;
