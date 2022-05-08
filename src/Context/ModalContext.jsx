import React, {createContext, useState} from "react"

export const ModalContext = createContext();

export const ModalContextProvider = ({children}) => {
    const [isDisplay, setDisplay] = useState(false);
    const [title, setTitle] = useState("");
    const [form, setForm] = useState();

    return (
        <ModalContext.Provider value={{ isDisplay, setDisplay, 
        title, setTitle, form, setForm }}>
            {children}
        </ModalContext.Provider>
    )
};