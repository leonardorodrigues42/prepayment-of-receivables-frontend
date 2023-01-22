import { useContext } from "react";
import { useForm } from "react-hook-form"
import { RequestContext } from "../../contexts/Request";
import { BoxPad } from "./styles";


export interface FormData {
    amount: number;
    installments: number;
    mdr: number
}

export const Form: React.FC = () => {

    const { register, formState: { errors }, handleSubmit } = useForm<FormData>()

    const { request } = useContext(RequestContext)

    const onSubmit = (requestData: any) => {
        return request(requestData)
    }


    return (
            <BoxPad>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Simule sua Antecipação</h1>

                        <label htmlFor="" className="label">
                            Informe o valor da venda *
                            
                                <input 
                                type="number"
                                {...register("amount", {required: true})}
                                />
                            
                            {errors.amount && <p>Campo obrigatório</p>}
                        </label>
                        <label htmlFor="" className="label">
                            Em quantas parcelas *
                            <input type="number" {...register("installments", {required: true, max: 12})}  />
                            {errors.installments?.type === "required" && <p>Campo obrigatório</p>} 
                            {errors.installments?.type === "max" && <p>A quantidade informada é maior que o permitido</p>}
                            <div>Máximo de 12 parcelas</div>
                        </label>
                        <label htmlFor="" className="label">
                            Informe p percentual de MDR *
                            <input type="number" {...register("mdr", {required: true})}/>
                            {errors.mdr && <p>Campo obrigatório</p>}
                        </label>
                    <input type="submit" value="Enviar"/>
                </form>
            </BoxPad>
    )
}
