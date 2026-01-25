"use client"

import { shippingFormSchema, ShippingFormInputs } from "@/type"
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

const ShippingForm = (
    { setShippingForm }: { setShippingForm: (data: ShippingFormInputs) => void }) => {
    const { register, handleSubmit, formState: { errors }, }
        = useForm<ShippingFormInputs>({ resolver: zodResolver(shippingFormSchema) })

    const router = useRouter();

    const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
        setShippingForm(data);
        router.push('/cart/?step=3', { scroll: false });
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleShippingForm)}>
            <div className="flex flex-col gap-1">
                <label htmlFor="name">Name</label>
                <input
                    className="border-b border-gray-200 outlin-none text-sm"
                    type="text"
                    id="name"
                    placeholder="Hasibullah Aman"
                    {...register("name")}
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <input
                    className="border-b border-gray-200 outlin-none text-sm"
                    type="email"
                    id="email"
                    placeholder="examle@example.com"
                    {...register("email")}
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="phone">Phone</label>
                <input
                    className="border-b border-gray-200 outlin-none text-sm"
                    type="tel"
                    id="phone"
                    placeholder="+93 799 757 131"
                    {...register("phone")}
                />
                {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="address">Address</label>
                <input
                    className="border-b border-gray-200 outlin-none text-sm"
                    type="tel"
                    id="address"
                    placeholder="123 Main Street, City, Country"
                    {...register("address")}
                />
                {errors.address && <p className="text-sm text-red-500">{errors.address.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="city">City</label>
                <input
                    className="border-b border-gray-200 outlin-none text-sm"
                    type="text"
                    id="city"
                    placeholder="Kabul"
                    {...register("city")}
                />
                {errors.city && <p className="text-sm text-red-500">{errors.city.message}</p>}
            </div>
            <button
                className="w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer
                        flex items-center justify-center gap-2
                        hover:bg-gray-900 transition-all duration-300"
                type="submit">
                Continue
                <ArrowRight className="w-3 h-3" />
            </button>
        </form>
    )
}

export default ShippingForm
