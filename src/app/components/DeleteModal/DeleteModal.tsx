import { Button } from "../Button";
import { Modal } from "../Modal";
import style from "./DeleteModal.module.scss";

interface DeleteModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onClick: () => void;
}

export const DeleteModal = ({
  isOpen,
  onClick,
  onCancel,
}: DeleteModalProps) => {
  return (
    <Modal isOpen={isOpen} height={200} width={300}>
      <div className={style.deleteModal__container}>
        <div>Tem certeza de que gostaria de excluir essa pessoa?</div>
        <div className={style.button__container}>
          <Button onClick={onClick}>Excluir</Button>
          <Button onClick={onCancel}>Cancelar</Button>
        </div>
      </div>
    </Modal>
  );
};
