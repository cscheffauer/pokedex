import React, { Fragment } from 'react';

import "./Card.css";

const nameImageSwitch = (name, species) => {
    switch (name) {
        case 'Luke Skywalker':
            return <img alt={`${name}`} src={`images/cards/luke-skywalker.png`} />;
        case 'R2-D2':
            return <img alt={`${name}`} src={`images/cards/r2d2.png`} />;
        case 'Darth Vader':
            return <img alt={`${name}`} src={`images/cards/darth-vader.png`} />;
        case 'C-3PO':
            return <img alt={`${name}`} src={`images/cards/c3p0.png`} />;
        case 'Leia Organa':
            return <img alt={`${name}`} src={`images/cards/princess-leia.png`} />;
        case 'Obi-Wan Kenobi':
            return <img alt={`${name}`} src={`images/cards/obiwan-kenobi.png`} />;
        case 'Boba Fett':
            return <img alt={`${name}`} src={`images/cards/boba-fett.png`} />;
        case 'Ackbar':
            return <img alt={`${name}`} src={`images/cards/admiral-ackbar.png`} />;
        case 'Chewbacca':
            return <img alt={`${name}`} src={`images/cards/chewbacca.png`} />;
        case 'Darth Maul':
            return <img alt={`${name}`} src={`images/cards/darth-maul.png`} />;
        case 'Palpatine':
            return <img alt={`${name}`} src={`images/cards/emperor-palpatine.png`} />;
        case 'Greedo':
            return <img alt={`${name}`} src={`images/cards/greedo.png`} />;
        case 'Han Solo':
            return <img alt={`${name}`} src={`images/cards/han-solo.png`} />;
        case 'Jabba Desilijic Tiure':
            return <img alt={`${name}`} src={`images/cards/jabba-the-hutt.png`} />;
        case 'Jango Fett':
            return <img alt={`${name}`} src={`images/cards/jango-fett.png`} />;
        case 'Lando Calrissian':
            return <img alt={`${name}`} src={`images/cards/lando-calrissian.png`} />;
        case 'Lobot':
            return <img alt={`${name}`} src={`images/cards/lobot.png`} />;
        case 'Qui-Gon Jinn':
            return <img alt={`${name}`} src={`images/cards/qui-gon-jinn.png`} />;
        case 'Yoda':
            return <img alt={`${name}`} src={`images/cards/yoda.png`} />;
        case 'Wicket Systri Warrick':
            return <img alt={`${name}`} src={`images/cards/ewok.png`} />;
        default: {
            switch (species) {
                case 'Human':
                    return <img alt={`${name}`} src={`images/cards/red-five.png`} />;
                default:
                    return <img alt={`${name}`} src={`images/cards/nothing_declared.png`} />;
            }
        }
    }
}


const Card = ({ name, gender, height, species, id }) => {         //receiving props and destructuring them in the brackets

    return (
        <Fragment>
            <div className='card tc dib br3 pa3 ma2 grow bw2 shadow-5'>
                {
                    Array.isArray(species) ?
                        <img alt={`loading_image`} src={`images/cards/loading_image.png`} />
                        : nameImageSwitch(name, species)
                }
                <div>
                    <h2>{name}</h2>
                    <p>{gender}</p>
                    <p>{height}</p>
                    <p>{species}</p>
                </div>
            </div>
        </Fragment>
    );
}

export default Card;

