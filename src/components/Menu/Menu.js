import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Media from 'react-media';
import { MdHome, MdTimeline, MdAttachMoney } from 'react-icons/md';

import s from './Menu.module.css';

function Menu() {
  return (
    <div>
      <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 768px) and (max-width: 1279px)',
          large: '(min-width: 1280px)',
        }}
      >
        {matches => (
          <Fragment>
            {matches.small && (
              <>
                <div className={s.container}>
                  <ul className={s.list}>
                    <li className={s.item}>
                      <NavLink to="/">
                        <MdHome className={s.icon} />
                      </NavLink>
                    </li>
                    <li className={s.item}>
                      <NavLink to="/statistic">
                        <MdTimeline className={s.icon} />
                      </NavLink>
                    </li>
                    <li className={s.item}>
                      <NavLink to="/rate">
                        <MdAttachMoney className={s.icon} />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </>
            )}
            {matches.medium && (
              <>
                <div className={s.container}>
                  <ul className={s.list}>
                    <li className={s.item}>
                      <NavLink to="/">
                        <MdHome className={s.icon} />
                        <span className={s.itemTitle}>Главная</span>
                      </NavLink>
                    </li>
                    <li className={s.item}>
                      <NavLink to="/statistic">
                        <MdTimeline className={s.icon} />
                        <span className={s.itemTitle}>Статистика</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </>
            )}
            {matches.large && (
              <>
                <div className={s.container}>
                  <ul className={s.list}>
                    <li className={s.item}>
                      <NavLink to="/">
                        <MdHome className={s.icon} />
                        <span className={s.itemTitle}>Главная</span>
                      </NavLink>
                    </li>
                    <li className={s.item}>
                      <NavLink to="/statistic">
                        <MdTimeline className={s.icon} />
                        <span className={s.itemTitle}>Статистика</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </Fragment>
        )}
      </Media>
    </div>
  );
}

export default Menu;
