import React from 'react'

const Sizes = ({ selectedSizes, setSize, }) => {
    const sizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
    return (
        <div className="sizes">
            <h1>Sizes</h1>
            <div className="size-list">
                {sizes.map((size, index) => {
                    return (
                        <button className={"size" + (selectedSizes.includes(size))} key={index} onClick={() => setSize(size)}>
                            {size}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
export default Sizes
