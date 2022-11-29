import styles from './Header.module.scss'
import logo from '../../assets/images/bar_logo.png'

export default function Header({ show, iteration }) {
    return (
        <div className={`d-flex align-items-center ${styles.header}`}>
            <div className="flex-fill">
                <img src={logo} alt="logo_bar" />
            </div>
            <ul className={styles.headerMenu}>
                <button className='mr20 btn btn-reverse'>
                    <i className='fas fa-beer-mug-empty mr10'></i>
                    Beers
                </button>
                <button className='mr20 btn btn-reverse'>
                    <i className='fas fa-martini-glass-citrus mr10'></i>
                    Cocktails
                </button>
                <button className='mr20 btn btn-reverse'>
                    <i className='fas fa-wine-bottle mr10'></i>
                    Softs
                </button>
                <button className='mr20 btn btn-reverse' onClick={show}>
                    <i className='fa-regular fa-credit-card mr10'></i>
                    { iteration }
                </button>
            </ul>
        </div>
    )
}