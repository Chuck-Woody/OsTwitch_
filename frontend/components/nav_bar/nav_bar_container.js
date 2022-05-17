import { connect } from "react-redux";
import NavBar from './nav_bar'
import {logout} from '../../actions/session_actions';
import {openModal} from '../../actions/modal_actions'

const mSTP = (session,ownProps) => ({
  currentUser: session.currentUser
})


const mDTP = (dispatch) => ({

  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))

})



export default connect(mSTP,mDTP)(NavBar)