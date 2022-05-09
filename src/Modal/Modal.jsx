import React, {useContext} from 'react'
import { createPortal } from 'react-dom'
import { ModalContext } from '../Context/ModalContext'
import { ThemeContext } from '../Context/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import COLORS from '../Constant/Colors'
import './Modal.css'

export default function Modal() {
    const { isDisplay, setDisplay, 
    title, form } = useContext(ModalContext);
    const { isDark} = useContext(ThemeContext);

    return createPortal(
        <aside id="modal-global" onClick={() => setDisplay(prev => !prev)} style={{ display: isDisplay ? "flex" : "none" }}>
            <div id="modal-container" onClick={(e) => e.stopPropagation()} 
            style={{ 
                color: isDark ? COLORS.light : COLORS.dark,
                backgroundColor: isDark ? COLORS.dark : COLORS.light,
                border:  isDark ? `1px solid ${COLORS.lightgrey}` : `1px solid ${COLORS.darkgrey}`,
            }}>
                <FontAwesomeIcon onClick={() => setDisplay(prev => !prev)} icon={faXmark} />
                <h2>{title}</h2>
                {form}
            </div>
        </aside>
    , document.body)
}
