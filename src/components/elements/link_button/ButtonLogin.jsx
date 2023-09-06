import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ButtonLogin = ({children, link, color}) => {
  return (
    <Link 
    to={link} 
    className='bg-primary inline-flex gap-2 items-center px-6 py-2 text-[24px] rounded-md hover:opacity-70 transition-all'
    style={{ 'color': color }}>
      {children}
    </Link>
  )
}

ButtonLogin.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.node.isRequired,
  link: PropTypes.node.isRequired
};

export default ButtonLogin