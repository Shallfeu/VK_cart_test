import {useCallback, useEffect} from 'react';
import {TheInput} from '@/shared/ui/TheInput/TheInput.tsx';
import {classNames} from '@/shared/lib/classNames/classNames';
import {TheButton} from '@/shared/ui/TheButton/TheButton.tsx';
import cls from './GetYourAgeForm.module.scss';
import {Text} from "@vkontakte/vkui";
import {SubmitHandler, useForm} from "react-hook-form"
import {debounce} from "@/shared/lib/debounce/debounce.ts";

interface GetYourAgeForm {
    name: string
}

export interface GetYourAgeFormProps {
    className?: string;
    onGetYourAge: (name: string) => void;
    age: number
}

const GetYourAgeForm = (props: GetYourAgeFormProps) => {
    const {className, onGetYourAge, age} = props;
    const {watch, formState, register, handleSubmit} = useForm<GetYourAgeForm>()

    const getNameHandler = useCallback((name: string) => {
        onGetYourAge(name);
    }, [onGetYourAge]);

    const debouncedGetNameHandler = debounce(getNameHandler, 3000)

    const onSubmit: SubmitHandler<GetYourAgeForm> = (data) => {
        getNameHandler(data.name)
    }

    useEffect(() => {
        const subscription = watch((value, {name}) => {
                if (name) {
                    debouncedGetNameHandler(value[name] as never)
                }
            }
        )
        return () => subscription.unsubscribe()
    }, [watch])

    return (
        <form className={classNames(cls.form, {}, [className])} onSubmit={handleSubmit(onSubmit)}>
            <Text weight="1">
                Get Your Age
            </Text>

            <TheInput
                {
                    ...register("name", {
                        required: true,
                        pattern: {
                            value: /^[A-Za-zА-Яа-я]+$/,
                            message: "Invalid name"
                        }
                    })
                }
                className={cls.input}
                placeholder={"Name"}
            />

            {formState.errors.name?.message && (
                <Text weight="1" style={{color: "red"}}>{formState.errors.name?.message}</Text>
            )}

            {age && <Text weight="1">Age: {age}</Text>}

            <TheButton type="submit">
                Send
            </TheButton>
        </form>
    );
};

export default GetYourAgeForm;