type ButtonProps = {
  label: string;
  onClick: () => void;
};

const CustomButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button 
      className="btn btn-custom text-white shadow-md hover:opacity-90" 
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CustomButton;
