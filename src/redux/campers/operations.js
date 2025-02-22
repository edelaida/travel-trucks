import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCampers = createAsyncThunk(
    "/fetchAll",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/campers");
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
);

export const fetchCampersById = createAsyncThunk(
  "/fetchAll/id",
  async (id, thunkAPI) => {
    try {
      console.log({id});
      const response = await axios.get(`/campers/${id}`);
      console.log(response.data);
      return response.data;      
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
