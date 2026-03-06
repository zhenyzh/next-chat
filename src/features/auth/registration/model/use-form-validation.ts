"use client";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import type {RegistrationFormValues} from "./registration.types";
import {registrationSchema} from "./registration.shemas";

export function useFormValidation() {
    return useForm<RegistrationFormValues>({
        defaultValues: {
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
        },
        resolver: zodResolver(registrationSchema),
        mode: "onBlur",
    });
}
