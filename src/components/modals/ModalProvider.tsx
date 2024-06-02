import { useModalActions, useModalState } from "@/data/modalStore";
import { useLocation } from "react-router-dom";
import ConfirmModal from "./ConfirmModal";

const ModalProvider = () => {
  const { pathname } = useLocation();

  const modals = useModalState();
  const { closeModal, cleanModal, resetModal } = useModalActions();

  const onClose = (Component) => {
    closeModal(Component);

    setTimeout(() => {
      cleanModal(Component);
    }, 100);
  };

  console.log("modals:: ", modals);

  return (
    <>
      {modals.map(({ Component, props }) => (
        <Component
          key={Component.name}
          onClose={() => onClose(Component)}
          {...props}
        />
      ))}
    </>
  );
};

export default ModalProvider;

export const modals = {
  confirm: ConfirmModal,
};
