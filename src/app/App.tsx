import {Suspense} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {AppRouter} from '@/app/providers/router';
import {Navbar} from '@/widgets/Navbar';
import {
    AppRoot,
    PanelHeader,
} from "@vkontakte/vkui";
import '@vkontakte/vkui/dist/vkui.css';

function App() {
    return (
        <AppRoot>
            <div className={classNames('app', {}, [])}>
                <Suspense fallback="">
                    <PanelHeader>
                        <Navbar/>
                    </PanelHeader>

                    <AppRouter/>
                </Suspense>
            </div>
        </AppRoot>
    );
}

export default App;