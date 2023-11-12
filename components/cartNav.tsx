export const CartNav = ({
  setIsVisible,
}: {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const closeCart = () => {
    setIsVisible(false);
  };

  return (
    <div className="flex justify-between items-center rounded-md border-yellow-400 border-[0.5px] p-1 px-4">
      <button className="font-bold text-red-600 text-lg" onClick={closeCart}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
      </button>
      <h1 className="font-bold text-lg">Cart</h1>
      <div className="font-bold text-lg">0</div>
    </div>
  );
};
