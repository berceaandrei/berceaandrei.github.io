import { SvgIcon, SvgIconProps } from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Mail,
  Launch,
  ContactPhone,
} from "@mui/icons-material";

export type IconDictionaryType = Record<
  "github" | "linkedin" | "phone" | "mail" | "launch",
  typeof SvgIcon | React.FC<SvgIconProps>
>;

type IconProps = {
  iconName: keyof IconDictionaryType;
  customColor?: string;
} & SvgIconProps;

const Icon: React.FC<IconProps> = ({ iconName, customColor }) => {
  const iconDictionary: IconDictionaryType = {
    github: GitHub,
    linkedin: LinkedIn,
    phone: ContactPhone,
    mail: Mail,
    launch: Launch,
  };

  const IconToRender = iconDictionary[iconName];
  return (
    <IconToRender
      style={{
        color: customColor ? customColor : undefined,
        width: "50px",
        height: "50px",
      }}
    />
  );
};

export default Icon;
