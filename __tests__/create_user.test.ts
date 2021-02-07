import { createMocks } from "node-mocks-http";
import handleUser from "../pages/api/create_user";

describe("/api/create_user", () => {
  it("returns a payload with a user created", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: { firstName: "Santi", lastName: "Liaudat" },
    });

    await handleUser(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        payload: "SANTI LIAUDAT",
      })
    );
  });

  it("returns an error if params is missing ", async () => {
    const { req, res } = createMocks({
      method: "POST",
    });
    await handleUser(req, res);
    expect(res._getStatusCode()).toBe(400);
  });

  it("returns an error if params is invalid datatype ", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: { firstName: 123123, lastName: "Liaudat" },
    });
    await handleUser(req, res);
    expect(res._getStatusCode()).toBe(400);
  });

  it("returns an error for method not allowed", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });
    await handleUser(req, res);
    expect(res._getStatusCode()).toBe(405);
  });
});
