import React, { useEffect, useState } from 'react'
import styles from 'styles/app.module.scss'

interface User {
  id: number
  name: string,
  address: {
    street: string,
    suite: string
  }
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await response.json();

      setUsers(json);
    };

    getUsers();
  }, []);


  return (
    <div className={styles.app}>
      {users && users.map(user => (
        <p key={user.id}>
          {user.name} - {user.address.street}
        </p>))}
    </div>
  )
}

export default App;
