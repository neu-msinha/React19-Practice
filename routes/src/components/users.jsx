import { Outlet } from "react-router"; 

const Users = () => {
  return (
    <>
     <div className="container">
      <h1 className="text-center">Users</h1>
      <p className="text-center">This is the users page.</p>
    </div>

    <Outlet />
    </>
   
  );
}

export default Users;