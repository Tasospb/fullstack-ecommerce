import Button from '@mui/material/Button';
import { FaAngleDown } from 'react-icons/fa';

const CountryDropDown=()=>{
    return(
        <>
        <Button className='countryDrop'>
            <div className='info d-flex flex-column'>
                <span className='label'>Your Location</span>
                <span className='name'>United Kingdom</span>
            </div>
            <span className='ml-auto'>
                <FaAngleDown></FaAngleDown>
            </span>
        </Button>
        </>
    )
}

export default CountryDropDown;