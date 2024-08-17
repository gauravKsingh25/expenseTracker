import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: 'Nunito', sans-serif;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    overflow: hidden;
    color: var(--primary-color2);
    background-color: var(--background-color); /* Adding background color */
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--primary-color);
  }

  :root {
    --primary-color: #2C3E50; /* Darker blue */
    --primary-color2: rgba(44, 62, 80, 0.8); /* Light blue-grey */
    --primary-color3: rgba(44, 62, 80, 0.6); /* Lighter blue-grey */
    --color-green: #4aAD00; /* No change */
    --color-grey: #D3DCE6; /* Light grey for borders and text */
    --color-accent: #3498DB; /* Accent blue */
    --color-delete: #E74C3C; /* Soft red for delete actions */
    --background-color: #ECF0F1; /* Light blue-white background */
  }
`;
