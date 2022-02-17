import s from './Body.module.css';
import LeftBar from '../LeftBar';
// import { useHistory, useLocation } from 'react-router-dom';

function Body() {
  // // const history = useHistory();
  // const location = useLocation();

  // console.log(location);
  return (
    <div className={s.div}>
      <LeftBar />
    </div>
  );
}
export default Body;
