interface User {
    id: number;
    name: string;
}

const users: User[] = [
    {
        id: 1,
        name: 'Jhon Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
];

export const getUserById = (id: number) => {
    const user = users.find(user => user.id === id);
    if (!user) {
        throw new Error(`USER with id ${id} not found`);
    }
    return user;
};