import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button class="btn bg-gradient-to-tr text-white hero_btn uppercase font-bold btn-primary">
              {children}
            </button>
        </div>
    );
};

export default Button;