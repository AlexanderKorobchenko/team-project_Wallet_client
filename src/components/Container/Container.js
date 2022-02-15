import s from './Container.module.css';

function Container(props) {
  return <div className={s.div}>{props.children}</div>;
}

export default Container;
