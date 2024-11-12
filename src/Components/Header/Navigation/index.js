import Button from '@mui/material/Button';
import { IoIosMenu } from 'react-icons/io';
import { FaAngleDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const Navigation = ()=>{
    return(
        <nav>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-3 navPart1'>
                    <Button className='allCatTab align-items-center'>
                        <span className='icon1 mr-2'><IoIosMenu/></span>
                        <span class="text">ALL CATEGORIES</span>
                        <span className='icon2 ml-2'><FaAngleDown/></span>
                    </Button>
                </div>

                <div className='col-sm-9 navPart2 d-flex align-items-center'>
                    <ul className='list list-inline ml-auto'>
                        <li className='list-inline-item'><Link to="/">Home</Link></li>
                        <li className='list-inline-item'><Link to="/">T-Shirts</Link></li>
                        <li className='list-inline-item'><Link to="/">Mugs</Link></li>
                        <li className='list-inline-item'><Link to="/">Posters</Link></li>
                        <li className='list-inline-item'><Link to="/">Home Decor</Link></li>
                        <li className='list-inline-item'><Link to="/">Accessories</Link></li>
                        <li className='list-inline-item'><Link to="/">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Navigation;