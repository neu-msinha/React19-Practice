import Users from "./components/Users";

const App = () => {

  const users = [
    {id:1, name:"Mayukh", age: 21},
    {id:2, name:"John", age: 22},
    {id:3, name:"Doe", age: 23},
  ]

  return (
    
    <>
      <Users users={users} />
    </>
  )
}

export default App;