import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

export default function Menu() {
  const rotas = [{
    label: 'Início',
    to: '/noodle_restaurant_aluroni/'
  }, {
    label: 'Cardápio',
    to: '/noodle_restaurant_aluroni/cardapio'
  }, {
    label: 'Sobre',
    to: '/noodle_restaurant_aluroni/sobre'
  }];
  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}