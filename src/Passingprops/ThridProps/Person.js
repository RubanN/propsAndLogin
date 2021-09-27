import React from 'react'
import PropTypes from 'prop-types'
const Person = (props) => {
    console.log(props);
    return (
        <div className="person">
            <h3>{props.name}</h3>
            <h3>{props.age}</h3>
            <h3>{props.email}</h3>
            <h3>{props.isMarried}</h3>

            <h3>{props.children}</h3>

        </div>
    )
}
Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string,
    isMarried: PropTypes.bool,
    children: PropTypes.arrayOf(PropTypes.string),

}
export default Person