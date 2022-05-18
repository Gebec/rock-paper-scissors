import styled from "styled-components";

export const Modal: React.FC<{ isShown: boolean, onClose: () => void, children: string }> = ({ isShown, onClose, children }) => {
    if (!isShown) {
        return null;
    }

    return (
        <ModalComponent>
            <div>
                <button onClick={onClose}>X</button>
            </div>
            <div>{ children }</div>
        </ModalComponent>
    )
}

const ModalComponent = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`