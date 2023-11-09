import HouseIcon from '@mui/icons-material/House';
import WorkIcon from '@mui/icons-material/Work';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import InfoIcon from '@mui/icons-material/Info';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export const getPage = (pageName) => {
  switch (pageName) {
    case 'Home':
      return { icon: <HouseIcon />, link: '/' , title: 'Home'};
    case 'Work':
      return { icon: <WorkIcon />, link: 'work', title: 'Work' };
    case 'Hobbies':
      return { icon: <VideogameAssetIcon />, link: 'hobbies', title: 'Hobbies' };
    case 'About me':
      return { icon: <InfoIcon />, link: 'about', title: 'About me' };
    default:
      return { icon: <QuestionMarkIcon />, link: '/', title: 'Home' };
  }
}