import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button className="btn bg-gradient-to-tr text-white hero_btn uppercase font-bold btn-primary">
              {children}
            </button>
        </div>
    );
};

export default Button;