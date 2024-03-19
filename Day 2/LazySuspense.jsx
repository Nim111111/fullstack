import PropTypes from 'prop-types';
import { Suspense } from 'react';
import image from '../assets/images/Animation - 1710486408323.json';

function LazySuspense({ component: Component, ...rest}){
    return(
        <Suspense fallback={<img src={image} alt='Loader'/>}>
            <Component { ...rest}/>
        </Suspense>
    )
}

LazySuspense.propTypes = {
    component: PropTypes.element.isRequired
}

export default LazySuspense