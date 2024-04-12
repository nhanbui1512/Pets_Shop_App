import { useState } from "react";
import { Link } from "react-router-dom";

function DropdownMenu({ children, title }) {
  const [open, setOpen] = useState(false);
  return (
    <li className={open ? "active" : ""}>
      <Link
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
        className="has-arrow"
        aria-expanded={open}
      >
        <i className="icon-speedometer menu-icon"></i>
        <span className="nav-text">{title}</span>
      </Link>
      <ul role="listbox" aria-expanded={open}>
        {open && children}
      </ul>
    </li>
  );
}
export default DropdownMenu;
