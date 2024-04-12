import React                 from 'react';
import ReduxContext          from './reduxContext/reduxContext';

interface AppContextProps {
    children: any
}

const AppContext: React.FC<AppContextProps> = ({children}) => {
    return <ReduxContext>
        {children}
    </ReduxContext>;
}

export default AppContext;
