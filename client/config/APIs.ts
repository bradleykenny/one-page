const APIs = {
    pages: {
        getAll: "",
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
