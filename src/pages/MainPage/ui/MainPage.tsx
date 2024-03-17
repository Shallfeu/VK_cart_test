import {Page} from '@/widgets/Page';
import {Text} from "@vkontakte/vkui";
import cls from './MainPage.module.scss'

const MainPage = () => {
    return (
        <Page>
            <div className={cls.MainPage}>
                <Text style={{fontSize: "22px", marginBottom: "12px"}}>Hello, <b>VK TEAM</b>!</Text>

                <Text style={{fontSize: "20px", lineHeight: "26px", marginBottom: "12px"}}>
                    I've done this task without thinking about UI beauty.
                    I just wrote the logic you wanted and I've tried my best
                    to make my code beautiful.
                </Text>

                <Text style={{fontSize: "20px", lineHeight: "26px", marginBottom: "12px"}}>
                    I've used axios as my http client, but I made an abstraction for changing it without any troubles.
                    Also I used FSD methodology to organise my code, that helps keeping code and logic clean by separating it
                    on isolated modules. I think you already know it without me :)
                </Text>

                <Text style={{fontSize: "20px", lineHeight: "26px", marginBottom: "24px"}}>
                    I struggled with VK UI, honestly. I got used to UI libraries like ChakraUI, that contains a lot of features and easy to understand.
                    In VK UI I can't see it. Maybe, because of I've spend a little time with it. I hope it will be fixed in the internship :)
                </Text>

                <Text style={{fontSize: "20px", lineHeight: "26px"}}>
                    P.S. Have a good day and thank you for your time!
                </Text>
            </div>
        </Page>
    );
};

export default MainPage;