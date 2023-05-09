import { rest } from "msw";
import { apiURL } from "../hooks/useApi";

export const handlers = [
  rest.get(`${apiURL}`, (_request, response, context) => {
    return response(
      context.status(200),
      context.json([
        {
          id: 1,
          name: "Jump",
          isDone: true,
        },
        {
          id: 2,
          name: "Dance",
          isDone: true,
        },
        {
          id: 3,
          name: "Read",
          isDone: true,
        },
      ])
    );
  }),
];
