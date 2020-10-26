import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useOutsideClickHandler } from '../../hooks/useOutsideClickHandler';

import './Select.css';


interface Props {
  options: string[];
  placeholder: string;
}

export const Select: React.FC<Props> = ({ options, placeholder }) => {
  const wrapperRef = useRef(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  useOutsideClickHandler(wrapperRef, setOpen);

  const toggleOpen = (): void => setOpen(!open);
  const handleSelect = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setSelected(event.currentTarget.innerText);
    setOpen(false);
  };

  return (
    <div className="container" ref={wrapperRef}>
      <div className={`customSelect ${open ? 'openList' : ''}`} onClick={toggleOpen}>
        <span className='option'>{selected || placeholder}</span>
        <FontAwesomeIcon
          icon={open ? faCaretUp : faCaretDown}
          size="sm"
          className="icon"
        />
      </div>

      {open && (
        <ul className={`options ${open ? 'openList' : ''}`}>
          {options
            .filter((el) => el !== selected)
            .map((option) => (
              <li key={option} onClick={handleSelect}>
                {option}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
