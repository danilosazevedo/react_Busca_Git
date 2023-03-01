import { useState, useEffect } from "react"
import styles from './Repos.module.css'

const Repos = ({ username }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setRepos(resJson)
                    setEstaCarregando(false)
                }, 3000)
            })
    }, [username]);

    return (
        <>
            <div className={styles.container}>
                {estaCarregando ? (
                    <h1>Carregando...</h1>
                ) : (
                    <ul className={styles.list}>
                        {repos.map(repositorio => (
                            <li className={styles.listItem} key={repositorio.id}>
                                <b>Nome: </b> {repositorio.name}<br />
                                <b>Linguagem: </b> {repositorio.language}<br />
                                <a className={styles.link} href={repositorio.html_url}>Ver no GitHub</a><br />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )

}

export default Repos