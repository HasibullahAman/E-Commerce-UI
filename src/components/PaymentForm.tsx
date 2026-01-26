"use client"

import { PaymentFormSchema, PaymentFormInputs } from "@/type"
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { ArrowRight, ShoppingCart } from "lucide-react";
import Image from "next/image";

const PaymentForm = () => {
    const { register, handleSubmit, formState: { errors }, }
        = useForm<PaymentFormInputs>({ resolver: zodResolver(PaymentFormSchema) })
    const router = useRouter();
    const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {
    }

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handlePaymentForm)}>
            <div className="flex flex-col gap-1">
                <label htmlFor="cardHolder">Name on Card</label>
                <input
                    className="border-b border-gray-200 outlin-none text-sm"
                    type="text"
                    id="cardHolder"
                    placeholder="Hasibullah Aman"
                    {...register("cardHolder")}
                />
                {errors.cardHolder && <p className="text-sm text-red-500">{errors.cardHolder.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                    className="border-b border-gray-200 outlin-none text-sm"
                    type="text"
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    {...register("cardNumber")}
                />
                {errors.cardNumber && <p className="text-sm text-red-500">{errors.cardNumber.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="expirationDate">Expiration Date</label>
                <input
                    className="border-b border-gray-200 outlin-none text-sm"
                    type="text"
                    id="expirationDate"
                    placeholder="MM/YY"
                    {...register("expirationDate")}
                />
                {errors.expirationDate && <p className="text-sm text-red-500">{errors.expirationDate.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="cvv">CVV</label>
                <input
                    className="border-b border-gray-200 outlin-none text-sm"
                    type="text"
                    id="cvv"
                    placeholder="123"
                    {...register("cvv")}
                />
                {errors.cvv && <p className="text-sm text-red-500">{errors.cvv.message}</p>}
            </div>
            <div className="flex items-center gap-2 mt-4 ">
                <Image src="/klarna.png" alt="Klarna Logo" width={50} height={25} className="rounded-md cursor-pointer" />
                <Image src="/cards.png" alt="Klarna Logo" width={50} height={25} className="rounded-md cursor-pointer" />
                <Image src="/stripe.png" alt="Klarna Logo" width={50} height={25} className="rounded-md cursor-pointer" />
            </div>
            <button
                className="w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer
                        flex items-center justify-center gap-2
                        hover:bg-gray-900 transition-all duration-300"
                type="submit">
                CheckOut
                <ShoppingCart className="w-3 h-3" />
            </button>
        </form>
    )
}

export default PaymentForm;
