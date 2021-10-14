import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from "./PageContent";
import { ThemeProvider } from "./Contexts/ThemeContext";
import { LanguageProvider } from "./Contexts/LanguageContext";

function App() {
    return (
        <ThemeProvider>
            <PageContent>
                <LanguageProvider>
                    <Navbar />
                    <Form />
                </LanguageProvider>
            </PageContent>
        </ThemeProvider>
    );
}

export default App;
