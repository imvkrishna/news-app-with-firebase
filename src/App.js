import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import { Toast, ToastContainer } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setShow } from './store/slicers/ToastSlice';

function App() {
  const dispatch = useDispatch()
  const toast = useSelector(state => state.toast)
  const toggleClose = () => {
    dispatch(setShow({ value: false }))
  }
  return (
    <div>
      <Main />
      <div>
        <ToastContainer position="top-end" style={{ position: 'fixed', padding: '75px 20px' }}>
          <Toast show={toast.show} onClose={toggleClose} autohide>
            <Toast.Header>
              <strong className='me-auto'>Error</strong>
            </Toast.Header>
            <Toast.Body style={{ color: '#772323'}}>
              {toast.message}
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </div>
  );
}

export default App;
