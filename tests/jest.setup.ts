import supertest from "supertest";
import { server } from "../src/server/Server";
import { Knex } from "../src/server/database/knex";

beforeAll( async () => {
  await Knex.migrate.latest(); //roda o migrate antes dos testes
});

afterAll( async () => {
  await Knex.destroy(); //encerra a conexão com o Knex
});

export const testServer = supertest(server);