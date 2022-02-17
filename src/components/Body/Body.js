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
      <div>
        <h1>Main Page</h1>
      </div>
      {/* {location.pathname === '/diagram' &&
      <div>Это диаграмма</div>} */}
    </div>
  );
}
export default Body;
