import React from 'react';

export enum LoaderSize {
    XS = 4,
    S = 10,
    M = 12,
    L = 16,
    XL = 20,
    XXL = 24,
    XXXL = 32,
}
const Loader = ({ size, borderTop }: { size: LoaderSize; borderTop?: number }) => {
    return (
        <div className='flex items-center justify-center w-full'>
            <div className={`animate-spin rounded-full border-[#678422] border-solid border-opacity-100 border-t-2 h-${size} w-${size}`}></div>
        </div>
    );
};

export default Loader;
