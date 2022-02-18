
import { createContext } from 'react';
import Header from './components/Header';

export const LayoutContext = createContext();


const Context = () => {

    return (
        <LayoutContext.Provider value={{
            showMenu: true
        }}>
            <div id="layout">
                Layout Component

                <Header />
            </div>
        </LayoutContext.Provider>
    )
}

export default Context;