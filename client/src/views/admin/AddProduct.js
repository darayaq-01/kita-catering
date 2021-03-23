import React, { useState } from 'react';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import MultiSelect from 'components/Product/MultiSelect';

import './styleForm.css';

const defaultValues = {
    product: '',
    ingredients: '',
    description: '',
    category: { value: 'meal' },
    preferences: false,
};

export default function AddProduct() {
    const [Dates, setDates] = useState([]);
    const { control, reset, register, errors, handleSubmit } = useForm({
        defaultValues,
    });

    const onSubmit = (data) => {
        //alert(JSON.stringify(data));
        axios({
            url: '/api/products',
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            data: {
                ...data,
                image: 'test',
                price: 1000,
                availableAt: Dates,
            },
        })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    console.log(errors);

    return (
        <>
            <div className="flex flex-col justify-center max-w-sm mx-auto">
                <div className="mt-20 pt-20"></div>
                <h3>Add option</h3>
                <form onSubmit={handleSubmit(onSubmit)} name="registerProduct">
                    <label>Name of the product</label>
                    <input
                        type="text"
                        name="name"
                        ref={register({ required: true, maxLength: 80 })}
                    />
                    <label>ingredients</label>
                    <input
                        type="text"
                        name="ingredients"
                        ref={register({ required: true, maxLength: 100 })}
                    />
                    <label>Description</label>
                    <input
                        type="text"
                        name="description"
                        ref={register({ required: true, maxLength: 100 })}
                    />
                    <label>Category</label>
                    <select name="category" ref={register({ required: true })}>
                        <option value="meal">Meal</option>
                        <option value="snacks">Snacks</option>
                        <option value="basket">Basket</option>
                    </select>
                    <label>vegan</label>
                    <input type="checkbox" name="isVegan" ref={register} />
                    <label>vegetarian</label>
                    <input type="checkbox" name="isVegetarian" ref={register} />
                    <label>gluten free</label>
                    <input
                        type="checkbox"
                        name="IsGlutenFree"
                        ref={register}
                    />{' '}
                    <label>attach image</label>
                    <p>nothing yet</p>
                    <label>Choose date</label>
                    {/* <Controller
                    as={DayPicker}
                    control={control}
                    valueName="select"
                    name="DatePicker"
                    className="DatePicker"
                    onChange={<Multiselect />}
                /> */}
                    <label>choose a date</label>
                    <div>
                        <MultiSelect setDates={setDates} dates={Dates} />
                    </div>
                    <input type="submit" />
                </form>
            </div>
        </>
    );
}
