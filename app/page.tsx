import { getUsers } from "./api/users/route"
import CreateButton from './components/Button/CreateButton';
import List from "./components/List/List"
import UsersRecord from "./components/Record/UsersRecord";

export default async function Home() {
  const users = await getUsers()
  console.log(users)
  return (
    <div>
      <List label='Users'>
        <CreateButton label='Create new user'/>
        {users.map(user => (
          <UsersRecord key={user.id} {...user}/>
        ))}
      </List>
    </div>
  )
}
