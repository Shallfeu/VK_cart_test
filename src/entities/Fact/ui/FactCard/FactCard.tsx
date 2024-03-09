import {useQuery} from "@tanstack/react-query";
import {Spinner} from "@vkontakte/vkui";
import {TheInput} from "@/shared/ui/TheInput/TheInput.tsx";
import {useEffect, useRef} from "react";

export const FactCard = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const {data, error, isLoading} = useQuery({
        queryKey: ['fact'],
        queryFn: () =>
            fetch('https://catfact.ninja/fact')
                .then(res => res.json())
    })

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
            const index = calculatePositionOfFirstWord(data.fact)
            inputRef.current.setSelectionRange(index, index)
        }
    }, [data]);

    const calculatePositionOfFirstWord = (str: string) => {
        let firstWordEnd = 0
        let firstWordFound = false

        while (!firstWordFound) {
            const char = str[firstWordEnd]

            if (char !== ' ') {
                firstWordEnd++
            } else {
                firstWordFound = true
            }
        }

        return firstWordEnd
    }

    if (error) {
        return <>There was an error!</>
    }

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <>
            <TheInput value={data.fact} ref={inputRef}/>
        </>
    );
};
