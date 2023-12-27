import React, { useMemo, useRef, useState, useEffect } from "react";
import ArrowIcon from "@/resources/icons/dropdown/arrowDropdownLight.svg";
import * as SC from "@/styles/dropdown/Dropdown.style.js";

const Dropdown = ({
  items = [],
  idx = 0,
  onChange = () => {},
  placeholder = "",
  keyName = null,
  inputRef = null,
  customWidth = null,
  isInitial = true,
  customStyle = {},
  isErr = false,
  style = {},
  ...props
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    isInitial ? items[idx || 0] : ""
  );

  const name = useMemo(() => {
    const key = keyName ? selectedItem[keyName] : selectedItem?.name;
    return key ?? selectedItem;
  }, [keyName, selectedItem]);

  const handleClickOutSide = (e) => {
    if (
      (isOpenDropdown && !ref.current) ||
      !containerRef.current.contains(e.target)
    ) {
      setIsOpenDropdown(false);
    }
  };
  useEffect(() => {
    if (isInitial) {
      setSelectedItem(items[idx]);
    }
  }, [idx, isInitial, items]);

  useEffect(() => {
    onChange(selectedItem);
  }, [selectedItem]);

  useEffect(() => {
    if (isOpenDropdown)
      document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  });

  return (
    <>
      <SC.DropdownContainer
        ref={containerRef}
        isOpenDropdown={isOpenDropdown}
        style={{ ...customStyle }}
        isErr={isErr}
      >
        <SC.DropdownSelect
          className="dropdownSelect"
          isOpenDropdown={isOpenDropdown}
          onClick={() => setIsOpenDropdown(!isOpenDropdown)}
          customWidth={customWidth}
        >
          <p style={style || {}}>
            {name ? (
              name
            ) : (
              <SC.DropdownPlaceholder>{placeholder}</SC.DropdownPlaceholder>
            )}
          </p>
          <ArrowIcon className="dropdownArrow" />
        </SC.DropdownSelect>
        {isOpenDropdown && (
          <SC.DropdownOptionWrapper
            {...props}
            className="dropdownOptionWrapper"
            role="presentation"
          >
            <SC.DropdownOptionList
              className="dropdownOptionList"
              ref={ref}
              position="absolute"
            >
              {items.length === 0 ? (
                <SC.DropdownPlaceholder>{placeholder}</SC.DropdownPlaceholder>
              ) : (
                items.map((item, i) => {
                  return (
                    <li
                      key={`dropdown-v2-${i}`}
                      className={item.disabled ? "dropdownDisabled" : ""}
                      style={style || {}}
                      onClick={() => {
                        setSelectedItem(item);
                        setIsOpenDropdown(false);
                      }}
                    >
                      <p>
                        {item?.name
                          ? item.name
                          : keyName
                          ? item[keyName]
                          : item}
                      </p>
                    </li>
                  );
                })
              )}
            </SC.DropdownOptionList>
          </SC.DropdownOptionWrapper>
        )}
        {inputRef && (
          <input
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "100%",
              height: "100%",
              backgroundColor: "transparent",
              borderColor: "transparent",
              cursor: "pointer",
            }}
            className="_s_olc_focus"
            ref={inputRef}
            value=""
            readOnly
            onClick={(e) => setIsOpenDropdown(!isOpenDropdown)}
          />
        )}
      </SC.DropdownContainer>
    </>
  );
};

export default Dropdown;
