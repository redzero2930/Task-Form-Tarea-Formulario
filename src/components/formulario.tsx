import { useForm } from "react-hook-form";
import React,{useState} from "react";
import { edadValidator } from "./validator";


const Formulario = () => {

    const {register,formState: {errors}, handleSubmit} = useForm<FormData>();

    interface FormData {
        nombre: string;
        edad:number;
        terminosYcondiciones: boolean;
    }

    const onSubmit = handleSubmit((values) => {
        console.log(JSON.stringify(values));       
        localStorage.setItem('Usuario', JSON.stringify(values))
    })

    return(
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Nombre</label>
                    <input {...register('nombre', {
                        required:true,
                        minLength: 8
                    })}/>
                    {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
                    {errors.nombre?.type === 'minLength' && <p>El nombre de tener minimo 8 caracteres</p>}                 
                </div>
                <div>
                    <label>Edad</label>
                    <input {...register('edad', {
                        required:true,
                        min: 0,
                        validate: edadValidator
                    })}/>
                    {errors.edad?.type === 'required' && <p>El campo edad es obligatorio</p>}
                    {errors.edad?.type === 'min' && <p>El campo edad debe ser mayor a 0</p>}
                    {errors.edad?.type === 'validate' && <p>La edad debe estar entre 18 y 65 años</p>}                 
                </div>
                <div>
                    <input type={"checkbox"} {...register('terminosYcondiciones', {
                        required:true
                    })}/>
                    <label>¿Aceptas los terminos y condiciones?</label>
                    {errors.terminosYcondiciones?.type === 'required' && <p>Debes aceptar los terminos y condiciones</p>}
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default Formulario;