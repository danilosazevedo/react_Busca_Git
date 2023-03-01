import { useState } from 'react';
import styles from './components/Perfil.module.css'
import Perfil from './components/Perfil'
import Repos from './components/Repos.jsx'

function App() {

  const [username, setUsername] = useState('');

  return (
    <>
      <div className={styles.input} >
      <input className={styles.inputItem} onBlur={(e) => setUsername(e.target.value)} placeholder='username' type="text" />
      </div>
      {username.length > 4 && (
        <>
        <Perfil username = {username} />
        <Repos username = {username} />
        </>
      )}
    </>
  )
}

export default App
