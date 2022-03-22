import { HashRouter, Route, Routes } from 'react-router-dom';

import { paths } from './constants/paths';
import { ThemeProvider } from './providers/theme';

import { MainLayout } from './layout/MainLayout/MainLayout';

//Pages
import { MainPage } from './pages/MainPage/MainPage';
import { RulesPage } from './pages/RulesPage/RulesPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
function App() {
    return (
        <HashRouter>
            <ThemeProvider>
                <MainLayout>
                    <Routes>
                        <Route path={paths.main} element={<MainPage />} />
                        <Route path={paths.rules} element={<RulesPage />} />
                        <Route path={paths.login} element={<LoginPage />} />
                    </Routes>
                </MainLayout>
            </ThemeProvider>
        </HashRouter>
    );
}

export default App;
