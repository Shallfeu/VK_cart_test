import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from '@/app/App';
import '@/app/styles/index.scss';
import {ErrorBoundary} from '@/app/providers/ErrorBoundary';
import {AdaptivityProvider, ConfigProvider} from "@vkontakte/vkui";
import {StoreProvider} from "@/app/providers/StoreProvider";

const container = document.getElementById('root');

if (!container) {
    throw new Error('Container has been not found!');
}

const root = createRoot(container);

root.render(
    <StoreProvider>
        <ConfigProvider>
            <AdaptivityProvider>
                <BrowserRouter>
                    <ErrorBoundary>
                        <App/>
                    </ErrorBoundary>
                </BrowserRouter>
            </AdaptivityProvider>
        </ConfigProvider>
    </StoreProvider>
);