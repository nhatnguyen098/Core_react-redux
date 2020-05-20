import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.scss";
interface IBreadcrumbs {
  url: string;
}
const slitPathUrl = (url: string) => {
  let arr: string[] = [];
  url && url.split("/").forEach((item: string) => arr.push(item));
  return arr;
};
const Index: React.FC<IBreadcrumbs> = ({ url }) => {
  const arr = slitPathUrl(url);
  const owlClass = "m-breadcrumb";
  return (
    <Breadcrumb className={owlClass}>
      {arr.map((item: string, i: number) => {
        return (
          <Breadcrumb.Item
            key={i}
            active={arr.length === i + 1 ? true : false}
            onClick={() => console.log(item)}
          >
            {arr.length === i + 1 ? (
              item.charAt(0).toUpperCase() + item.slice(1)
            ) : (
              <Link className = "breadcrumb-item" to={`/${item}`}>
                {" "}
                {item === ""
                  ? "Home"
                  : item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            )}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default Index;
