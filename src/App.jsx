import React, { useState } from 'react';
import Signin from './component/Signin';
import Register from './component/Register';
import Users from './component/Users';
import { Toaster } from 'react-hot-toast';


const App = () => {
  const [toggler, setToggler] = useState(false); 
  const [users, setUsers] = useState([])

  return (
    <main className=' flex w-screen h-screen overflow-y-auto text-black p-10 bg-gray-100'>

      <Toaster position="top-right" reverseOrder={false} /> 
      
      <div className='w-[70%]'>
      {toggler ? (
        <Signin users={users} setUsers={setUsers} toggler={toggler} setToggler={setToggler}/>
        ) : (
          <Register users={users} setUsers={setUsers} toggler={toggler} setToggler={setToggler}/>
          )}
      </div>
      <Users users={users} setUsers={setUsers} />
    </main>
  );
};

export default App;
