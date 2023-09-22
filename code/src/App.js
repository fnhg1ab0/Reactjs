import React from 'react';
import AddUser from "./components/AddUser/AddUser";
import ListUser from "./components/ListUser/ListUser";
import Wrapper from "./components/Wrapper/Wrapper";

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
    <Wrapper>
        <AddUser onAddUser={addUserHandler}/>
        {usersList.length > 0 && <ListUser onShowUser={usersList}/>}
    </Wrapper>
    );
}

export default App;
