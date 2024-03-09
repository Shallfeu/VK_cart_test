import { lazy, FC } from 'react';
import {GetYourAgeFormProps} from "./GetYourAgeForm";

export const GetYourAgeFormAsync = lazy<FC<GetYourAgeFormProps>>(
    () => import('./GetYourAgeForm'),
);