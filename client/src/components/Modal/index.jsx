import "./index.css";
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
const Modal = ({ active, setActive, children }) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
        <IconButton onClick={() => setActive(false)} sx={{ position: "absolute", top: "2px", right: "0" }} aria-label="cancel" size="large">
          <ClearIcon sx={{ color: "black" }} />
        </IconButton>
        {children}
      </div>
    </div>
  )
}

export default Modal