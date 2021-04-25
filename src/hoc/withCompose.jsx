import {compose} from 'recompose';
import withCardLoading from './withCardLoading';
import Card from '../components/card/Card';

const checkLength = (props)=> !props.productID

const CardWithCompose = compose(
    withCardLoading(checkLength)
)

export default CardWithCompose(Card)
