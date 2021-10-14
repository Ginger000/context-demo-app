import React, { Component } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from "./PageContent";
import { ThemeProvider } from "./Contexts/ThemeContext";
import { LanguageProvider } from "./Contexts/LanguageContext";

class App extends Component {
    render() {
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
}

export default App;
