import { ReactNode } from "react";
import styles from "./modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  children?: ReactNode;
  height?: number;
  width?: number;
}

export const Modal = ({ isOpen, children, height, width }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div
        className={styles.modalContainer}
        style={{ height: `${height}px`, width: `${width}px` }}
      >
        {children}
      </div>
    </div>
  );
};
