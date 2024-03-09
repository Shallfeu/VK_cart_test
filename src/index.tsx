import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import App from '@/app/App';
import '@/app/styles/index.scss';
import {ErrorBoundary} from '@/app/providers/ErrorBoundary';
import {AdaptivityProvider, ConfigProvider} from "@vkontakte/vkui";

const container = document.getElementById('root');

const queryClient = new QueryClient({
    defaultOptions: {queries: {staleTime: 10000}}
})

if (!container) {
    throw new Error('Container has been not found!');
}

const root = createRoot(container);

root.render(
    <QueryClientProvider client={queryClient}>
        <ConfigProvider>
            <AdaptivityProvider>
                <BrowserRouter>
                    <ErrorBoundary>
                        <App/>
                    </ErrorBoundary>
                </BrowserRouter>
            </AdaptivityProvider>
        </ConfigProvider>
    </QueryClientProvider>,
);