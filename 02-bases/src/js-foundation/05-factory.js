const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            getAge: getAge(birthdate)
        };
    };
}

module.exports = {
    buildMakePerson
};