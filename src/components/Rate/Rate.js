import { useEffect, useState } from 'react';
import s from './Rate.module.css';

function Rate() {
  const [course, setCourse] = useState([]);

  async function fetchCourse() {
    const response = await fetch(
      'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
    );
    return response.ok ? await response.json() : console.log('error');
  }

  useEffect(() => {
    fetchCourse().then(response => setCourse(response));
  }, []);

  return (
    <>
      {course && (
        <ul className={s.Table}>
          <li className={s.TableHead}>
            <span className={s.TableData}>Валюта</span>
            <span className={s.TableData}>Покупка</span>
            <span className={s.TableData}>Продажа</span>
          </li>
          {course.map(cour => (
            <li key={cour.ccy} className={s.TableRow}>
              <span className={s.TableData}>{cour.ccy}</span>
              <span className={s.TableData}>{Number(cour.buy).toFixed(2)}</span>
              <span className={s.TableData}>{Number(cour.sale).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Rate;