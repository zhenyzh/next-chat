import { useCallback, useState } from "react";

export const useModal = (initial = false) => {
  const [isOpen, setIsOpen] = useState(initial);
  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  const handle = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return { isOpen, handleOpen, handleClose, handle };
};
