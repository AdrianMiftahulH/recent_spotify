import PropTypes from 'prop-types';
import { Footer, Header } from '../fragments';

const UserLayout = ({children}) => {
  return (
    <div className="bg-dark min-h-screen text-neutral font-Manrope">
        <Header />
        <main className="min-h-[90vh] px-[10%]">
            {children}
        </main>
        <Footer />
    </div>
  )
}

UserLayout.propTypes = {children: PropTypes.node.isRequired,};

export default UserLayout