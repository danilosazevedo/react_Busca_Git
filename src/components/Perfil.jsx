import styles from './Perfil.module.css'

const Perfil = ({username}) => {
    const usuario = {
        usuario: username,
        avatar: `https://www.github.com/${username}.png`,
    }

    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={usuario.avatar} alt="" />
            <h1>{usuario.usuario}</h1>
        </header>
    )
}

export default Perfil

