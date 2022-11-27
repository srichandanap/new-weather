import { createSlice } from '@reduxjs/toolkit'
import store from './store'

// interface initialState {
//     place: string,
//     country: string,
//     weatherData: string,
//     temperature: number,
//     text: string,
// }

const initialState = {
    data: [],
    weatherData: []

}

const newData: any = []

export const placeSlice = createSlice({

    name: 'weather',
    initialState,
    reducers: {

        // addPlace: (state: any, action: any) => {
        //     state = {
        //         ...state,
        //         place: [...state.place, action.payload]

        //     };
        //     // console.log(state);
        //     // state.place = action.payload;

        // },

        // addCountry: (state: any, action: any) => {
        //     state = {
        //         ...state,
        //         country: [...state.country, action.payload]
        //     };
        //     // console.log(state);

        // },

        addWeatherData: (state: any, action: any) => {
            // state = {
            //     ...state,
            //     weatherData: [...state.weatherData, action.payload]
            // };
            // console.log(state.weatherData);
            // console.log(state);
            // state.push(action.payload);

            // state.data = action.payload;
            // newData.push(state.data);
            // console.log(newData);
            // window.localStorage.setItem("data", JSON.stringify(newData));

            state.data = [...state.data, action.payload];
            localStorage.setItem("data", JSON.stringify(state.data));

        },

        deleteData: (state: any, action: any) => {

            // const filtered = state.filter((todo: any) => todo.id !== action.payload);

            state.data.splice(0, state.data.length);
            localStorage.setItem("data", JSON.stringify(state.data));
        },

        addWeather: (state: any, action: any) => {
            state.weatherData = action.payload;
            console.log("slice", state.weatherData);

        },


        // addTemperature: (state: any, action: any) => {
        //     state = {
        //         ...state,
        //         temperature: [...state.temperature, action.payload]
        //     };
        //     // console.log(state.temperature);
        //     // console.log(state);
        // },

        // addText: (state: any, action: any) => {
        //     // state = {
        //     //     ...state,
        //     //     text: [...state.text, action.payload]
        //     // };
        //     // state.push(state.text, action.payload);

        //     // console.log(action.payload);
        //     // console.log(state);

        // },

    },
})


// export const { addPlace, addCountry, addWeatherData, addTemperature, addText } = placeSlice.actions;

export const { addWeatherData, addWeather, deleteData } = placeSlice.actions;
export default placeSlice

