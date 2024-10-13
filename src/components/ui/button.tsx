
type Props = {
    label: string
    onClick?: () => void;
    size: 1 | 2 | 3;

}
export const Button = ({ label, onClick, size}: Props) => {

    return(
       <div 
            onClick={onClick}
            className={`flex justify-center items-center cursor-pointer bg-white text-black font-bold rounded-3xl
                ${size === 1 && 'h-10 text-lg'}
                ${size === 2 && 'h-8 text-md'}
                ${size === 3 && 'h6 text-xs'}
                `}
            >
            {label}
       </div>
    )
}