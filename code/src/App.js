import React from 'react';
import AddUser from "./components/AddUser/AddUser";
import ListUser from "./components/ListUser/ListUser";

function App() {
    const [usersList, setUsersList] = React.useState([]);
    console.log(usersList);

    const addUserHandler = (uInfo) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                {
                    name: uInfo.name,
                    age: uInfo.age,
                    id: usersList.length + 1
                }];
        });
    }
    return (
    <>
        <AddUser onAddUser={addUserHandler}/>
        {usersList.length > 0 && <ListUser onShowUser={usersList}/>}
    </>
    );
}

export default App;
