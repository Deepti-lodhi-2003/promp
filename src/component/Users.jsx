import React from 'react'

const Users = (props) => {
  const {users, setUsers} = props;
  

  const deleteHandler = (id) => {
    const copyusers = [...users];
    const filteredUsers = copyusers.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  }

  const userlist = users.map((user) => {
  return (
  
    <li 
    key ={user.id}
     className=' flex item-center justify-between bg-gray-700 text-white shadow-lg rounded p-2 font-thin mb-3'>
        <p>
        <span className='block text-xl mb-1'>{user.name}</span>
        <small className='text-sm'>{user.email}</small>
        </p>
        <span
        onClick={() => deleteHandler(user.id)}
         className='hover:cursor-pointer font-normal text-red-500'>Delete</span>
       </li>

  )
})

  
  return(
  <ul className='w-[30%]'>
  {users.length != 0 ? 
    userlist 
    : (
    <h1 className='text-center text-2xl font-semibold'>No users found</h1>
  )}
  </ul>
  )
}
export default Users