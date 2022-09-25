import UserList from "../components/UserList";
const Users = () => {
    const DUMMY_USERS = [
        {
            id : 'u1',
            name : "jang seok won"
        },
        {
            id: 'u2',
            name : "jang seok jun"
        }

    ]
    return (
        <UserList items={DUMMY_USERS} />
    );
}

export default Users