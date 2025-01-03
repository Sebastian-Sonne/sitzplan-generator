
export const ExcelIcon = () => <img src="/icons/excel.svg" alt="excel Icon" />;
export const UploadIcon = () => <img src="/icons/upload.svg" alt="upload icon" />;

export const AddIcon = ({ color = "#22c55e" }: { color?: string }) => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
)

export const RemoveIcon = ({ color = "#ef4444" }: { color?: string }) => (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
<path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
</svg>
)