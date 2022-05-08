import { useContext } from 'react'
import { ModalContext } from '../Context/ModalContext'
import ThemeForm from '../Form/ThemeForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears } from '@fortawesome/free-solid-svg-icons'
import './Settings.css'

export default function Settings() {
    const { setDisplay, setTitle, setForm } = useContext(ModalContext);

    const setThemeForm = () => {
        setTitle("Change Theme:");
        setForm(<ThemeForm/>);
        setDisplay(prev => !prev);
    }

    return (
        <aside id="settings-container">
            <FontAwesomeIcon onClick={setThemeForm} icon={faGears} />
        </aside>
    )
}
