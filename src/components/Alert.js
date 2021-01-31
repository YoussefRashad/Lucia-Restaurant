// import React from 'react'

// const Alert = ({ type, text}) => {
    
//     return (
//         <div className={`alert alert-${type} text-center container my-3`}>{text}</div>
//     )
// }

// export default Alert;



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import { MdClose } from 'react-icons/md'

import { UserContext } from '../Context/User'
import { scrollAutoFromBackToTop } from './ScrollButton';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function DescriptionAlerts() {
    const { alert, hideAlert } = React.useContext(UserContext)

    React.useEffect(() => {
        scrollAutoFromBackToTop()
        return () => { }
    }, [])

    const classes = useStyles();
    const typeEdit = alert.type === 'success' ? 'success' : 'error'
    return (
        <div className={`${classes.root} alert w-40`}>
            <Alert severity={typeEdit} style={{ width: 'fit-content' }} className="m-auto">
                <button className="close" onClick={() => hideAlert()}>
                    <MdClose />
                </button>
                <AlertTitle>{typeEdit === 'success' ? 'Success' : 'Error'}</AlertTitle>
                {alert.msg} — <strong>check it out!</strong>
            </Alert>
        </div>
    );
}