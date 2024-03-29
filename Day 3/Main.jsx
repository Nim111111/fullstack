import PropTypes from 'prop-types'
import '../../assets/css/userlayout.css'
import Header from './Header'
import Footer from './Footer'

const Main = ({children}) => {
  return (
    <div className="user_layout">
        <header>
            <Header>
              
            </Header>
        </header>
        <main >
            {children}
        </main>
        <footer>
            <Footer>
              
            </Footer>
        </footer>
    </div>
  )
}

Main.propTypes = {
    children: PropTypes.node.isRequired
}

export default Main