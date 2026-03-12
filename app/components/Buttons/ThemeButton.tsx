import React from 'react';

type buttonType = 'button' | 'submit' | 'reset';
type buttonSize = 'small' | 'medium' | 'large' | 'extraLarge';
type iconDirection = 'end' | 'start';
export type buttonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'outlineWhite'
  | 'outlinePrimary'
  | 'rose'
  | 'columbiablue'
  ;
// | "outline"
// | "success"
// | "primaryOutline"
// | "yellow"
// | "danger"
// | "dangerOutline";
interface ThemeButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  type?: buttonType;
  size?: buttonSize;
  variant?: buttonVariant;
  minWidthClass?: string;
  iconDirection?: iconDirection;
  fontSizeClass?: string;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({
  label,
  onClick,
  icon,
  disabled,
  fontSizeClass,
  type = 'button',
  size = 'medium',
  variant = 'primary',
  minWidthClass,
  iconDirection = 'start',
}) => {
  const sizeClasses: Record<buttonSize, string> = {
    small: 'px-6 py-2 ',
    medium: 'md:px-5 p-2 md:px-2 md:py-3',
    large: 'px-6 py-4',
    extraLarge: 'px-12 py-4',
  };
  const fontSizeBySize: Record<buttonSize, string> = {
  small: 'text-base',
  medium: 'text-sm',
  large: 'text-base',
  extraLarge: 'text-lg',
};
const finalFontSize = fontSizeClass || fontSizeBySize[size];
  const baseClasses =
    'flex items-center group gap-1 xl:gap-2 whitespace-nowrap h-full justify-center w-full cursor-pointer font-semibold rounded-4xl disabled:cursor-not-allowed';

  const variantClasses: Record<buttonVariant, string> = {
    primary: disabled
      ? 'bg-gray-200 text-gray-400'
      : 'bg-primary-color text-white hover:bg-primary-color-dark',
    secondary: 'bg-secondary-color text-white hover:bg-secondary-color-dark',
    rose: 'bg-light-rose text-black hover:bg-light-rose-dark group-hover:bg-light-rose-dark',
    columbiablue: 'bg-columbia-blue text-black hover:bg-columbia-blue-dark group-hover:bg-columbia-blue-dark ',
    outline:
      'bg-white  text-gray-700 group-hover:!bg-gray-100 disabled:bg-gray-200 border border-gray-200 hover:bg-slate-50 disabled:text-gray-400 disabled:border-gray-200',
    outlineWhite:
      'bg-transparent  text-white hover:text-primary disabled:bg-gray-200 border border-white hover:bg-white disabled:text-gray-400 disabled:border-gray-200',
    outlinePrimary: disabled
      ? 'bg-gray-200 text-gray-400'
      : 'bg-white text-primary hover:bg-primary border border-primary hover:text-white',
  };

  const directionClasses =
    iconDirection === 'start' ? 'flex-row' : 'flex-row-reverse';

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`${baseClasses} ${directionClasses} ${sizeClasses[size]}  ${finalFontSize} ${variantClasses[variant]} ${minWidthClass}`}
    >
      {icon && <span className="flex items-center ">{icon}</span>} {label}
    </button>
  );
};

export default ThemeButton;
