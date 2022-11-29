
import Beers from './components/Beers/Beers';
import styles from './Content.module.scss';
import { dataBeers } from '../../data/beers';

export default function Content({add, count}) {

    const beers = dataBeers;
    return(
        <div className="flex-fill container p20">
            <h1 className="my20">LISTE DE NOS BOISSONS</h1>
            <div className={` ${styles.contentCard} card p20`}>
                <div className={styles.grid}>
                    {
                    beers.map((beer) => (
                        <Beers
                         key={beer.id}
                          name={beer.name}
                           image={beer.image}
                            add={() => add(beer.id)}
                              count={count[beer.id]}
                            />
                    ))
                    }
                </div>
            </div>
        </div>

    )
}