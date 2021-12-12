import react from 'react';
import './style.css';

const Box1 = () => {
    return (
        <div className='box-1'>
            <Box2 />
        </div>
    );
};

const Box2 = () => {
    return (
        <div className='box-2'>
            <Box3 />
        </div>
    );
}

const Box3 = () => {
    return (
        <div className='box-3'>
            <Box4/>
            <Box4/>
        </div>
    )
}

const Box4 = () => {
    return (
        <div className='box-4'>

        </div>
    )
}

export default Box1;