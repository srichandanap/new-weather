import { createSlice } from '@reduxjs/toolkit'
import store from './store'


const initialState = {
    data: [],
    weatherData: [],
    dataFav: [],

}

const newData: any = []

export const placeSlice = createSlice({

    name: 'weather',
    initialState,
    reducers: {


        addWeatherData: (state: any, action: any) => {

            // state.data = action.payload;
            // newData.push(state.data);
            // console.log(newData);
            // window.localStorage.setItem("data", JSON.stringify(newData));

            state.data = [...state.data, action.payload];
            localStorage.setItem("data", JSON.stringify(state.data));

        },

        deleteData: (state: any, action: any) => {

            state.data.splice(0, state.data.length);
            localStorage.setItem("data", JSON.stringify(state.data));
        },

        addWeather: (state: any, action: any) => {
            state.weatherData = action.payload;
            // console.log("slice", state.weatherData);

        },

        addFavData: (state: any, action: any) => {
            state.dataFav = [...state.dataFav, action.payload];
            localStorage.setItem("fav", JSON.stringify(state.dataFav));
        },

    },
})

export const { addWeatherData, addWeather, deleteData, addFavData } = placeSlice.actions;
export default placeSlice

