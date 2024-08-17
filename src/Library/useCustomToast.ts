import { useCallback } from 'react';
import { toast, Bounce, ToastOptions } from 'react-toastify'; // Import from react-toastify

// Define options for toasts
const toastOptions: ToastOptions = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable:  true,
    theme: "light",
    transition: Bounce,
};

// Define the custom hook
export function useCustomToast() {
    const showSuccess = useCallback((msg: string) => {
        toast.success(msg, toastOptions);
    }, []);

    const showError = useCallback((msg: string) => {
        toast.error(msg, toastOptions);
    }, []);

    const showWarn = useCallback((msg: string) => {
        toast.warn(msg, toastOptions);
    }, []);

    const showInfo = useCallback((msg: string) => {
        toast.info(msg, toastOptions);
    }, []);

    return {
        showSuccess,
        showError,
        showWarn,
        showInfo,
    };
}
