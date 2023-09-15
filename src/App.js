import React, {useState} from 'react';
import UserInput from './Components/UserInput';
import ListOfUsers from './Components/ListOfUsers';


function App() {
  
  const [userList, setUserList] = useState([])
  
  const addUserHandler = (name, age) => {
    setUserList((prevList) => {
      return [
        ...prevList,
        {
          name,
          age,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div>
      <UserInput onFormSubmit={addUserHandler} />
      {userList.length > 0 && <ListOfUsers users={userList} />}
    </div>
  );
}

export default App;
