import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core/styles';
import { createContext } from 'react';
import { CssBaseline } from '@material-ui/core';

const Template = createContext();


export const TemplateProvider = ({children})=>{
    const theme = createTheme({
        overrides:{
            MuiDialog:{
                paperWidthSm:{
                    maxWidth:"none"
                }
            },
            MuiDialogContent:{
                root:{
                    '&:first-child':{
                            paddingTop:"0"
                    }
                }
            }
        }
    })

    return (

        <Template.Provider value={0} >
            <ThemeProvider theme={theme} >
                <CssBaseline/>
                {children}
            </ThemeProvider>
        </Template.Provider>
    )
}