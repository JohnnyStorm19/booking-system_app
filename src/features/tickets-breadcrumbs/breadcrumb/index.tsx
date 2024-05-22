import { useLocation } from "react-router-dom";
import style from "./breadcrumb.module.scss";
import clsx from "clsx";

export const BreadCrumb = ({
  text,
  order,
  path,
}: {
  text: string;
  order: number;
  path: string;
}) => {
  const location = useLocation();
  const breadcrumbStyle = clsx(
    style.breadcrumb,
    path === location.pathname && style.active
  );

  return (
    <li className={breadcrumbStyle}>
      <span className={style.order}>{order}</span>
      <p>{text}</p>
    </li>
  );
};
