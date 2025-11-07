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

export function getUserById(id: number, callback: (err?: string, user?: User) => void) {
    const user = users.find(function(user) {
        return user.id === id;
    });

    if (!user) {
        return callback(`USER with id ${id} not found`);
    }

    return callback(undefined, user);
}