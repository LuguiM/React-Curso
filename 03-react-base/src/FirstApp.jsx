const newMessage = {
    message: 'Hola Mundo',
    title: 'Luis'
};

const getMessage = () => {
    return 'Hola criaturas del señor';
}

import PropTypes from 'prop-types';

export default function FirstApp( { title, subtitle } ) {

  

    return (
        <>
        <h1>{title}</h1>
            {/* <code>{ JSON.stringify(newMessage) }</code> */}
            <p>{subtitle}</p>
        </>
    )
}

FirstApp.prototype = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}
