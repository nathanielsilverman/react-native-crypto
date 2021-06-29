import { useState } from "react";
import {
	FETCHING_COIN_DATA,
	FETCHING_COIN_DATA_SUCCESS,
	FETCHING_COIN_DATA_FAIL,
} from "./../Utils/ActionTypes";

const initialState = {
	isFetching: null,
	data: [],
	hasError: false,
	errorMessage: null,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCHING_COIN_DATA:
			return Object.assign({}, state, {
				data: null,
				errorMessage: null,
				hasError: false,
				isFetching: false,
			});

		case FETCHING_COIN_DATA_SUCCESS:
			return Object.assign({}, state, {
				data: action.payload,
				errorMessage: null,
				hasError: false,
				isFetching: false,
			});

		case FETCHING_COIN_DATA_FAIL:
			return Object.assign({}, state, {
				data: null,
				errorMessage: action.payload,
				hasError: true,
				isFetching: false,
			});

		default:
			return state;
	}
}
