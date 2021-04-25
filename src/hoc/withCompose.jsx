import {compose} from 'recompose';
import withCardLoading from './withCardLoading';
import Card from '../components/card/Card';


const CardWithCompose = compose(
    withCardLoading
)

export default CardWithCompose(Card)
