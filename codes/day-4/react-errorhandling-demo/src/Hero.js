import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ heroName }) => {

    if (heroName === 'Joker') {
        throw new Error('Not a Hero...')
    }

    return (
        <div>
            Name:&nbsp;{heroName}
        </div>
    );
}

Hero.propTypes = {
    heroName: PropTypes.string.isRequired
}

export default Hero
