import { Outlet } from "react-router-dom"
import style from './layout.module.scss';
import { Footer, Header } from "../../../widgets"

export const Layout = () => {
  return (
    <div className={style.layout__container}>
      <Header />
      <main className={style.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
