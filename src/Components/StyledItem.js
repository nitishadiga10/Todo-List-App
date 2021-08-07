import styled from "styled-components";
import { TiDelete } from "react-icons/ti";
import { GrAdd } from "react-icons/gr";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TdApp = styled(Div)`
  justify-content: start;
  height: 100vh;
  background: var(--main-color);
`;

export const TdList = styled.div`
  padding: 1rem;
  width: 60%;
  border-radius: 10px;
  background: white;
  border: var(--border);
  box-shadow: var(--box-shadow);
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const Heading = styled.h1`
  margin: 1rem 0 0.3rem 0;
  color: white;
`;
export const InputContainer = styled.div`
  display: flex;
  border: var(--border);
  box-shadow: var(--box-shadow);
  &:hover {
    border: 1px solid var(--main-color);
  }
`;
export const ItemContainer = styled(Div)`
  margin-top: 1rem;
  border: var(--border);
  box-shadow: var(--box-shadow);
`;
export const TdItem = styled(Div)`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding: 0.5rem;
  border-bottom: var(--border);
  span {
    color: var(--main-color);
  }
`;

export const Input = styled.input`
  font-size: 1rem;
  width: 100%;
  border: none;
  padding: 0.5rem;
  background-color: white;
  outline: none;
`;
export const AddButton = styled(GrAdd)`
  margin: 0.5rem;
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
  }
`;
export const ClearButton = styled.button`
  margin: 0.5rem;
  color: var(--main-color);
  font-size: 1rem;
  background: transparent;
  border: none;
  &:hover {
    cursor: pointer;
    background: none;
    color: #222;
  }
`;

export const Item = styled.h4`
  text-transform: capitalize;
`;

export const NoItem = styled.h3`
  margin: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 100%;
  }
`;

export const DelButton = styled(TiDelete)`
  font-size: 1.5rem;
  margin-left: 0.2rem;
  margin-top: 0.1rem;
  color: var(--main-color);
  &:hover {
    cursor: pointer;
    color: #222;
  }
`;
