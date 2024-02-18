export const phoneNumberAutoFormat = phoneNumber => {
    const number = phoneNumber.trim().replace(/[^\d]/g, '');

    if (number.length < 5) return number.replace('380', '+380');
    if (number.length < 8) return number.replace(/(\d{2})(\d{3})/, '+$1 $2');
    if (number.length < 12) {
        return number.replace(/(\d{2})(\d{3})(\d{3})/, '+$1 $2 $3');
    }
    return number.replace(/(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 $2 $3 $4 $5');
};
