import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import { FlexSC } from "@/styles/global";
import { color, palette } from "@/styles/values/color";
import { utils } from "@/styles/values/util";

export const open = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const dropdownActive = () => css`
  // border: 1px solid transparent;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
  }
`;
export const DropdownContainer = styled.section`
  position: relative;
  width: 100%;
  height: 34px;
  padding: 0 10px;
  box-sizing: border-box;
  border: 1px solid ${color.grayscale.gray[200]};
  border: ${({ isErr }) => isErr && `1px solid ${color.system.error.red[300]}`};
  color: black;
  background-color: #fff;
  ${({ isOpenDropdown }) => isOpenDropdown && dropdownActive()};

  &::before {
    // box-shadow: ${({ isOpenDropdown }) =>
      isOpenDropdown && `0.1px 0.1px 2px blue`};
    // border: ${({ isOpenDropdown }) => isOpenDropdown && `1px solid blue`};
    /* active 되었을 때 border color 가려지는 이슈때문에 추가 */
    z-index: 9999;
  }

  @media (max-width: 768px) {
    height: ${({ customHeight }) => customHeight ?? "34px"};
    &:hover {
      border: 1px solid ${color.border.default};
    }

    .dropdownWrapper {
      font-size: $TextSm;
    }
    .dropdownListBox {
      top: 45px;
      > li {
        font-size: $TextSm;
      }
    }
  }
`;
export const DropdownSelect = styled(FlexSC.FlexBox)`
  width: 100%;
  height: 100%;
  font-size: 12px;
  cursor: pointer;
  text-align: left;
  justify-content: space-between;
  svg {
    color: ${color.grayscale.gray[300]};
    transform: ${({ isOpenDropdown }) =>
      isOpenDropdown ? "rotate(180deg)" : "rotate(0deg)"};
  }

  p {
    margin: 0;
    width: ${({ customWidth }) => customWidth ?? "100%"};
    ${utils.ellipsis};
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const DropdownPlaceholder = styled.span`
  ${utils.ellipsis}
  font-size: 12px;
  color: ${() => palette("textSmall")};
`;
export const DropdownOptionWrapper = styled.div`
  position: absolute;
  top: ${({ position }) => (position === "bottom" ? "-220px" : "32px")};

  animation: ${open} 0.1s ease-out;
  left: 0;
  width: 100%;
  z-index: 4000;
  background-color: #fff;
  overflow: auto;
  outline: 1px solid ${color.grayscale.gray[200]};
  @media (max-width: 768px) {
    top: ${({ position }) => (position === "bottom" ? "-200px" : "32px")};
  }
`;
export const DropdownOptionList = styled.ul`
  position: ${({ customPosition }) => customPosition ?? "static"};
  margin-top: ${({ customPosition }) => (customPosition ? "8px" : "0")};
  right: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 352px;
  box-sizing: border-box;
  background-color: #fff;
  padding: 0;
  overflow-y: auto;
  appearance: none;
  overflow: auto;
  z-index: 100;
  text-align: left;
  color: ${color.grayscale.gray[800]};

  > li,
  p {
    /* padding: 10px; */
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    cursor: pointer;
  }
  > p {
    height: 34px;
    padding: 8px;
    &:hover {
      cursor: not-allowed;
    }
  }
  > li {
    height: 34px;
    min-height: 34px;
    padding: 8px;

    ${utils.ellipsis}
    &:hover {
      transition: all 0.3s;
      background-color: #f4f4f6;
    }
  }
  .dropdownDisabled {
    color: ${color.grayscale.gray[400]};
    pointer-events: none;
  }
`;
