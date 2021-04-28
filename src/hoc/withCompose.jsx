import {compose} from 'recompose';
import withCardLoading from './withCardLoading';
import Card from '../components/card/Card';

const checkLength = (props)=> {
    return props.length < 3}

const CardWithCompose = compose(
    withCardLoading(checkLength)
)

export default CardWithCompose(Card)
