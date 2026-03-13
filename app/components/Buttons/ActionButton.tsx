"use client"
interface ActionButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'filled' | 'outline';
  className?: string;
}

const ActionButton = ({ label, onClick, variant = 'filled', className = '' }: ActionButtonProps) => {
  const baseStyles = ' py-3 px-6 rounded-lg text-base font-semibold transition-all';
  
  const variants = {
    filled: 'bg-primary-color text-white',
    outline: 'bg-white border-1 border-gray-200 text-gray-500',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default ActionButton;