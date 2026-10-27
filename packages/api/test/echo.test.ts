import { once } from "node:events";
import { afterAll, beforeAll, expect, test } from "vitest";
import { app } from "@/app";

const server = app.listen(0, "127.0.0.1");
let url: string;

beforeAll(async () => {
  if (!server.listening) await once(server, "listening");
  const address = server.address();
  if (!address || typeof address === "string") {
    throw new Error("El servidor no tiene una dirección TCP válida");
  }
  url = `http://127.0.0.1:${address.port}/echo`;
});

afterAll(
  () =>
    new Promise<void>((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    }),
);

test("POST /echo devuelve el mensaje recibido", async () => {
  for (const message of ["Hola", ""]) {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ message });
  }
});

test("POST /echo rechaza mensajes ausentes o de otro tipo", async () => {
  for (const body of [{}, { message: 123 }, { message: null }]) {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    expect(response.status).toBe(400);
  }
});

test("POST /echo rechaza solicitudes sin cuerpo", async () => {
  const response = await fetch(url, { method: "POST" });
  expect(response.status).toBe(400);
});
