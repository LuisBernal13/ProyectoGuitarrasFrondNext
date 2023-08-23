import Layout from "../components/layout"
import Image from "next/image"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={'nosotros'}
      description="Sobre nosotros"
    >
      <main className="contenedor">
        <h1 className="heading">NOSOTROS</h1>
        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" alt="imagen nosotros" width={1000} height={800}></Image>

          <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus mi, malesuada quis est et, tempor consequat est. Proin consequat metus eget nunc porta pharetra ac nec lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam massa justo, tempor nec porttitor quis, varius eget tortor. Vivamus pharetra dictum molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam luctus rutrum pretium. Proin quis iaculis eros, eget fermentum mauris.</p>

            <p>Quisque ut mauris vitae neque molestie faucibus a a lorem. Nunc mollis quam eget varius laoreet. Morbi id sem vehicula, lacinia elit id, ultrices orci. Aenean non ipsum auctor, egestas risus non, congue urna. Praesent quis velit nisl. Quisque ut ipsum urna. Nunc diam sapien, sollicitudin eget ornare accumsan, blandit vel ante. Nulla ut sapien molestie, elementum ante in, scelerisque massa.</p>
            
          </div>
        </div>
      </main>

    </Layout>
  )
}
