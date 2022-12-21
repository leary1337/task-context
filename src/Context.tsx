import React, {ReactElement, useContext} from 'react';

type Theme = 'light' | 'dark';
export const ThemeContext = React.createContext('light');

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
	return (
		<ThemeContext.Provider value={props.theme}>
			{props.children}
		</ThemeContext.Provider>
	);
}

export function useTheme(): Theme {
	return useContext(ThemeContext) as Theme;
}
