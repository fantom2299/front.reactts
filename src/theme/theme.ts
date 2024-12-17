import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark", primaryColor: string) => {
	return createTheme({
		palette: {
			mode,
			primary: {
				main: primaryColor || "#007bff", // Основной цвет
			},
			background: {
				default: mode === "dark" ? "#121212" : "#f4f4f4",
				paper: mode === "dark" ? "#1e1e1e" : "#ffffff",
			},
			text: {
				primary: mode === "dark" ? "#ffffff" : "#000000",
			},
		},
		typography: {
			fontFamily: "Roboto, Arial, sans-serif",
		},
	});
};
