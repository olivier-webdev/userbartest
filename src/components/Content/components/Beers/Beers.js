import styles from "./Beers.module.scss";

export default function Beers({name, image, add, count}) {
    return(
        <div className={styles.beer}>
            <div className={styles.imgContainer}>
                <img src={image} alt="beer" />
            </div>
            <div className={`${styles.beerName} d-flex justify-content-center align-items-center`} >
                <h3 className="mr20">{name}</h3>
                {
                    count > 0 ? (
                        <>
                        <button className="ml10">
                            <span>-</span>
                        </button>
                        <div className={` ml10 d-flex justify-content-center align-items-center ${styles.showCount}`}>
                            {count}
                        </div>
                        </>
                    ) : null
                }
                <button className="ml10" onClick={add}>
                    <span>+</span>
                    </button>
            </div>
        </div>
    )
}