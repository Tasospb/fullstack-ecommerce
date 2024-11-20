import Button from '@mui/material/Button';
import { FaAngleDown } from 'react-icons/fa';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";




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
        <Dialog open={true} className='locationModel'>
            <h4>Choose your Delivery Location</h4>
            <p>Enter your address and we will specify the offer for your area.</p>
                <div className='headerSearch w-100'>
                <input type='text' placeholder='Search your area...' />
            <Button><IoIosSearch /></Button>
             </div>

            <ul className='countryList mt-3'>
                <li><Button>United Kingdom</Button></li>
                <li><Button>Austria</Button></li>
                <li><Button>Belgium</Button></li>
                <li><Button>Bulgaria</Button></li>
                <li><Button>Croatia</Button></li>
                <li><Button>Cyprus</Button></li>
                <li><Button>Czech Republic</Button></li>
                <li><Button>Denmark</Button></li>
                <li><Button>Estonia</Button></li>
                <li><Button>Finland</Button></li>
                <li><Button>France</Button></li>
                <li><Button>Germany</Button></li>
                <li><Button>Greece</Button></li>
                <li><Button>Hungary</Button></li>
                <li><Button>Ireland</Button></li>
                <li><Button>Italy</Button></li>
                <li><Button>Latvia</Button></li>
                <li><Button>Lithuania</Button></li>
                <li><Button>Luxembourg</Button></li>
                <li><Button>Malta</Button></li>
                <li><Button>Netherlands</Button></li>
                <li><Button>Poland</Button></li>
                <li><Button>Portugal</Button></li>
                <li><Button>Romania</Button></li>
                <li><Button>Slovakia</Button></li>
                <li><Button>Spain</Button></li>
                <li><Button>Sweden</Button></li>
            </ul>  

        </Dialog>

        </>

        
    )
}

export default CountryDropDown;