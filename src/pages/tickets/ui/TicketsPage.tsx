import style from './TicketsPage.module.scss';

import { Outlet } from "react-router-dom"
import { TicketForm } from '../../../widgets';
import { TicketsBreadcrumbs } from '../../../features';

export const TicketsPage = () => {
  return (
    <div className={style.tickets_page}>
      <section className={style.header}>
        <TicketForm />
        <TicketsBreadcrumbs />
      </section>

      <section className={style.main}>
        <Outlet />
      </section>

    </div>
  )
}
