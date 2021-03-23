import React, { useState, forwardRef } from 'react';
import MultiSelectCalendar from './MultiSelectCalendar';
import { useForm, Controller } from 'react-hook-form';

import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import './styleForm.css';
import axios from 'axios';

const defaultValues = {
    product: '',
    ingredients: '',
    description: '',
    category: { value: 'meal' },
    preferences: false,
};

const CalendarForm = () => {
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
                Authorization: `Bearer ${sessionStorage.getItem('accessJWT')}`,
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
    /*  const foodPreferences = 'isVegetarian, isVegan, isGlutenFree'.split(','); */

    return (
        <>
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
                    onChange={<MultiSelectCalendar />}
                /> */}
                <input type="submit" />
            </form>
            <MultiSelectCalendar setDates={setDates} dates={Dates} />
        </>
    );
};

export default CalendarForm;
