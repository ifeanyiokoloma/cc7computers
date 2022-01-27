import React from 'react'
import styles from "./notFound.module.css"

const NotFound = () => {
    return (
        <div className={styles.container}>
            <h1>404 Page not found</h1>
            <p>you went to a wrong page</p>
            <div className={styles.btns}>
            <button>come home</button>
            <button>get what you want</button>
            </div>
        </div>
    )
}

export default NotFound
