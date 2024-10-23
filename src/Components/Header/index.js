import Logo from '../../Assets/Images/c8da0175e9dba0109e4baaca8753b277.png';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FaAngleDown } from 'react-icons/fa';
import CountryDropDown from '../CountryDropDown';
import { IoSearch } from "react-icons/io5";


const Header = ()=>{
    return(
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-purple">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">
                            Due to the<b>COVID 19 epidemic</b>, orders may be processed with a slight delay
                        </p>
                    </div>
                </div>

                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src={Logo} alt="Logo" /> /</Link>
                            </div>

                            <div className='col-sm-10 d-flex align-items-center part2'>
                                <CountryDropDown/>

                                {/* Header Search Start Here*/}
                                    <div className='headerSearch ml-3 mr-3'>
                                        <input type='text'/>
                                        <Button><IoSearch/></Button>
                                    </div>
                                {/* Header Search Ends Here*/}


                            </div>
                        </div>
                    </div>
                </header>

            </div>
        </>
    )
}

export default Header;