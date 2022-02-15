import s from './LeftBar.module.css';

function LeftBar(props) {
  return <div className={s.Leftbar}>{props.children}</div>;
}

export default LeftBar;
