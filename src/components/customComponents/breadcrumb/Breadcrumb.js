import React from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import breadCrumbStyles from "./BreadcrumbStyle";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedPath } from "../../../redux/reducer/SidebarReducer";

const Breadcrumb = ({ items, onClick }) => {
  const router = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (event) => {
    event.preventDefault();
    if (onClick) {
      onClick();
    } else {
      const href = event.currentTarget.getAttribute("href");
      if (event.currentTarget.tagName === "A" && href !== null) {
        dispatch(setSelectedPath(href));
        router(href);
      }
    }
  };

  const isLastIndex = (index) => index === items.length - 1;

  return (
    <Breadcrumbs>
      {items.map((item, index) => {
        const applyIndex0Style = index === 0 || (index === 1 && !isLastIndex(index));

        return !item.href ? (
          <Typography
            key={index}
            sx={applyIndex0Style ? breadCrumbStyles.headingStyles : breadCrumbStyles.activeStyles}
          >
            {item.label} &nbsp;
          </Typography>
        ) : (
          <Link
            key={index}
            to={item.href}
            style={applyIndex0Style ? breadCrumbStyles.headingStyles : breadCrumbStyles.activeStyles}
            onClick={handleClick}
          >
            {item.label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};
export default Breadcrumb;
