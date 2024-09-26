import { FC } from "react";
import { Link } from "lucide-react";

interface CustomLinkProps {
  to: string;
  title: string;
  activeSection: string;
  handleSetActive: (section: string) => void;
}

const CustomLink: FC<CustomLinkProps> = ({
  to,
  title,
  activeSection,
  handleSetActive,
}) => {
  return (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      onSetActive={handleSetActive}
      className={`${
        activeSection === to ? "red-text font-bold" : ""
      } cursor-pointer hover:text-gray-500 hover:font-semibold`}
    >
      {title}
    </Link>
  );
};

export default CustomLink;
