import style from './breadcrumbs.module.scss';
import { BreadCrumb } from "./breadcrumb";

const items = [
    {
        text: 'Билеты',
        path: '/tickets'
    },
    {
        text: 'Пассажиры',
        path: '/tickets/passengers'
    },
    {
        text: 'Оплата',
        path: '/tickets/payment'
    },
    {
        text: 'Проверка',
        path: '/tickets/checkout'
    },
]

export const TicketsBreadcrumbs = () => {
  return (
    <ul className={style.breadcrumbs}>
      {items.map((item, index) => (
        <BreadCrumb key={item.text} order={index + 1} text={item.text} path={item.path} />
      ))}
    </ul>
  );
};
