import React from 'react';
import { useField } from 'formik';

const InputLogin = ({ label, ...props }) => {
    const [field, meta] = useField(props.name); // Use 'props.name' instead of 'props'
    return (
        <div className="flex flex-col gap-3 mb-5">
            <label htmlFor={props.id} className="cursor-pointer">
                {label}
            </label>  
            <input
                className="p-4 transition-all bg-white border border-gray-100 rounded-lg outline-none focus:border-blue-500"
                {...field}
                {...props}
            />          
            {meta.touched && meta.error && (
                <p className="text-sm text-red-500">{meta.error}</p>
            )}
        </div>
    );
};

export default InputLogin;