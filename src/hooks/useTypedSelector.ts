/** @format */

import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/store";

//* Одна из вариаций типизированного хука useSelector
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
