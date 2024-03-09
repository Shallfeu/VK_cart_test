import {Page} from '@/widgets/Page';
import {GetYourAgeForm} from "@/features/getYourAge";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Spinner} from "@vkontakte/vkui";

const GetAgePage = () => {
    const queryClient = useQueryClient()
    const {
        data,
        mutate,
        isPending,
        isError
    } = useMutation({
        mutationKey: ["get_age"],
        mutationFn: (name: string) => fetch(`https://api.agify.io/?name=${name}`).then(res => res.json()),
        onSuccess: (newAge) => {
            queryClient.setQueryData(["get_age"], () => newAge)
            // queryClient.invalidateQueries({queryKey: ["get_age"]})
        }
    })

    // I try my best to do it, but I failed (

    const getAgeByGivenName = (name: string) => {
        mutate(name)
    }

    if (isPending) {
        return (
            <Spinner/>
        )
    }

    if (isError) {
        return <>Something went wrong. Try it later!</>
    }

    return (
        <Page>
            <GetYourAgeForm age={data?.age} className="123" onGetYourAge={getAgeByGivenName}/>
        </Page>
    );
};

export default GetAgePage;