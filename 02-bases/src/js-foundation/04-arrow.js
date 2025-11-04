const users = [
    {
        id: 1,
        name: 'Jhon Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
];

const getUserById = (id) => {
    const user = users.find(user => user.id === id);
    if (!user) {
        throw new Error(`USER with id ${id} not found`);
    }
    return user;
};

module.exports = {
    getUserById
};