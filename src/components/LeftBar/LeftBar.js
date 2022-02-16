import Menu from '../Menu';
import Balance from '../Balance';
import Rate from '../Rate';

import s from './LeftBar.module.css';

function LeftBar(props) {
  return (
    <div className={s.Leftbar}>
      <Menu />
      <Balance />
      <Rate />
    </div>
  );
}

export default LeftBar;
