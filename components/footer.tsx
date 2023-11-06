export const Footer = () => {
  return (
    <div className="border-t-[0.5px] border-pink-400 py-8 flex justify-between px-32">
      <p>
        © 2021 <span className="text-pink-600">Shop</span>. All rights reserved.
      </p>
      <div className="flex gap-4">
        <p className="text-pink-600">Privacy Policy</p>
        <p className="text-pink-600">Terms of Service</p>
      </div>
    </div>
  );
};
