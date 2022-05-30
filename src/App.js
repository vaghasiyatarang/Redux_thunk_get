import './App.css';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from './redux/actions/userAction';
import User from './User';

function App() {

  const dispatch = useDispatch();

  const userList = useSelector(state => state.userList)
  console.log(userList);

  const { loading, users, error } = userList

  useEffect(() => {

    dispatch(userAction())

  },[dispatch])
  return (
    <div className="App">
      <h1> Redux Thunk project</h1>

      {loading ? <h2>Loading ....</h2> : error ? <h3>{error}</h3> :

      

        <User users={users} />
      }

      <h3>This is  for github test...........................!</h3> 
      <h3>This is  for github test...........................!</h3> 
      <h3>This is  for github test...........................!</h3> 
      




    </div>
  )
}

export default App;
