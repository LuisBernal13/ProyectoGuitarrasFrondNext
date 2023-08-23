import styles from '../styles/curso.module.css'
import Image from 'next/image'


export default function Curso({curso}) {

    const {contenido, titulo} = curso?.attributes

  return (
    <section className={`${styles.curso} curso`}>
        <style jsx>
          {`
            .curso {
              background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${process.env.IMG_URL})
             }
          `}
        </style>
        <div className={`contenedor ${styles.grid}`}>
            <div className={styles.contenido}>
                <h2 className='heading'>{titulo}</h2>
                <p>{contenido}</p>
            </div>
        </div>
      </section>
    )
}
