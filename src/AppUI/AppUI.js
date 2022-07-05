import React from "react";

function AppUI ({children, product, productAdded}) {
    return (
        <div>
            {
                React.Children
                .toArray(children)
                .map(child => React.cloneElement(child, {product, productAdded}))
            }
        </div>
    );
}

export {AppUI};