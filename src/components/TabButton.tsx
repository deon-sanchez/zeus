import {Button} from 'react-native';

interface TabButtonProps {
  name: string;
}

const TabButton = ({name}: TabButtonProps): JSX.Element => {
  return <Button title={name} />;
};
export default TabButton;
