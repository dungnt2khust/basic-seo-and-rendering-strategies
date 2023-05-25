
/**
 * Kiểm tra có phải client hay không
 * @createdby ntdung 25.05.2023
 **/
export function isClient() {
    return typeof window !== 'undefined';
}