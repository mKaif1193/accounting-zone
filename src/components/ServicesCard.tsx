import { IconType } from "react-icons";

type CardProps = {
  title: string;
  description: string;
  icon: IconType;
  iconClassName?: string;
};

export default function ServicesCard({
  title,
  description,
  icon: Icon,
  iconClassName,
}: CardProps) {
  return (
    <div
      className="max-w-lg bg-white flex p-4 gap-4 border items-center rounded-lg shadow-md overflow-hidden"
      data-aos="fade"
    >
      <Icon className={`size-16 ${iconClassName}`} />

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
