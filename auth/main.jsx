import PropTypes from 'prop-types'
import '../../assets/css/userlayout.css'

const Main = ({children}) => {
  return (
    <div className="user_layout">
        <header>
            
        </header>
        <main >
            {children}
        </main>
        <footer>
            
        </footer>
    </div>
  )
}

Main.propTypes = {
    children: PropTypes.node.isRequired
}

export default Main