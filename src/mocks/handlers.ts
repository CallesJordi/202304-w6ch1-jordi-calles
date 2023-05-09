import { rest } from "msw";
import { apiURL } from "../hooks/useApi";
import todosMocks from "./todosMocks";

export const handlers = [
  rest.get(`${apiURL}`, (_request, response, context) => {
    return response(context.status(200), context.json([todosMocks]));
  }),
];
