import { SvgIcon, SvgIconProps } from '@mui/material';
import { GitHub, LinkedIn, Phone } from '@mui/icons-material';
  
  export type IconDictionaryType = Record<
    | 'github'
    | 'linkedin'
    | 'phone',
    typeof SvgIcon | React.FC<SvgIconProps>
  >;
  
  type IconProps = {
    iconName: keyof IconDictionaryType;
  } & SvgIconProps;
  
  const Icon: React.FC<IconProps> = ({ iconName }) => {
    const iconDictionary: IconDictionaryType = {
        github: GitHub,
        linkedin: LinkedIn,
        phone: Phone
    };
  
    const IconToRender = iconDictionary[iconName];
    return <IconToRender />;
  };
  
  export default Icon;
  