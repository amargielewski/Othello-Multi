import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { paths } from 'constants/paths';
import { ThemeProvider } from 'providers/theme';

import { MainLayout } from 'layout/MainLayout/MainLayout';

//Pages
import { MainPage, UserPage, RulesPage, LoginPage, RegisterPage } from 'pages';

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <MainLayout>
                    <Routes>
                        <Route path={paths.main} element={<MainPage />} />
                        <Route path={paths.rules} element={<RulesPage />} />
                        <Route path={paths.login} element={<LoginPage />} />
                        <Route path={paths.user} element={<UserPage />} />
                        <Route
                            path={paths.register}
                            element={<RegisterPage />}
                        />
                    </Routes>
                </MainLayout>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
