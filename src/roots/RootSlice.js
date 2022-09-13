import { combineReducers } from "@reduxjs/toolkit";
import LoginSlice from "../slices/LoginSlice";

const RootSlice = combineReducers({ LoginSlice });

export default RootSlice;
