import { FaCircle } from "react-icons/fa";

const UnorderedList: React.FC<unorderedListInterface> = ({ children }) => {
  return (
    <div className="flex">
      <div>
        <FaCircle size={8} className="mt-2" />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default UnorderedList;
