import {Fragment} from "react";
import Cover from './Cover'
import CartButton from './CartButton'
import styles from './Header.module.css'

const Header = ({onShowCart}) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Soulfood</h1>
        <CartButton onClick={onShowCart}/>
      </header>
      <Cover />
    </Fragment>
  );
}

export default Header;