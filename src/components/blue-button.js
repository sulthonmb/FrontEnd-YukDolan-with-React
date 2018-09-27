import React from 'react';
import '../styles/style.css';

const style = {

    li: {
        paddingLeft: 7,
        paddingRight: 7,
    }
}

const BlueButton = (props) => {
    return(
        <li style={style.li}><a href="#" className="btnMenu">{props.children}</a></li>
    );
}

export default BlueButton;