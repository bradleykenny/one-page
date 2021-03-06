import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Theme {
		status: {
		    danger: string;
		};
	}
	
    // allow configuration using `createTheme`
	interface ThemeOptions {
		status?: {
		    danger?: string;
		};
	}
}

const theme = createTheme({
    components: {
        // Name of the component
        MuiButtonBase: {
            defaultProps: {
                // The props to change the default for.
                disableRipple: true, // No more ripple, on the whole application 💣!
            },
        },
    },
    palette: {
        primary: {
            main: '#ed6f00'
        }
    },
    // shadows: [ 'none' ]
});

export default theme;
