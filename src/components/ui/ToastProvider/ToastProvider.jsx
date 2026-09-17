import React from 'react';
import { ToastContainer } from 'react-toastify';
import { CheckCircle2, XCircle, Info, AlertTriangle, X } from 'lucide-react';
import 'react-toastify/dist/ReactToastify.css';
import styles from './ToastProvider.module.css';

const CloseButton = ({ closeToast }) => (
  <button
    type="button"
    onClick={closeToast}
    aria-label="Close notification"
    className="
      self-center
      p-1
      text-[var(--color-text-muted)]
      hover:text-[var(--color-text-primary)]
      transition-colors
    "
  >
    <X className="w-[14px] h-[14px]" />
  </button>
);

const ToastProvider = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3500}
      hideProgressBar
      newestOnTop
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      limit={4}
      closeButton={CloseButton}
      className={styles.container}
      toastClassName={styles.toast}
      bodyClassName={styles.body}
      icon={({ type }) => {
        const icons = {
          success: <CheckCircle2 className="w-[18px] h-[18px] text-[var(--color-success-500)]" />,
          error: <XCircle className="w-[18px] h-[18px] text-[var(--color-error-500)]" />,
          info: <Info className="w-[18px] h-[18px] text-[var(--color-info-500)]" />,
          warning: <AlertTriangle className="w-[18px] h-[18px] text-[var(--color-warning-500)]" />,
        };
        return icons[type] || icons.info;
      }}
    />
  );
};

export default ToastProvider;
