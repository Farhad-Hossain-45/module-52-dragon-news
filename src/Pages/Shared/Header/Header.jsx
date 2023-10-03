import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className=' flex justify-center mt-10 '>
            <img src={logo} alt="" />
        </div>
            <p className='text-center mt-4'>Journalism Without Fear or Favour</p>
            <p className='text-center mt-4'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;