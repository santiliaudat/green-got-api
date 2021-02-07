import { createMocks } from "node-mocks-http";
import handleGreetings from "../pages/api/greetings/[first_name]";

describe("/api/greetings", () => {
  it("returns a payload with a greeting", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        first_name: "Santi",
      },
    });

    await handleGreetings(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        payload: "Hello Santi!",
      })
    );
  });

  it("returns an error if first_name is missing ", async () => {
    const { req, res } = createMocks({
      method: "GET"
    });
    await handleGreetings(req, res);
    expect(res._getStatusCode()).toBe(400);
  });

  it("returns an error for method not allowed", async () => {
    const { req, res } = createMocks({
      method: "POST"
    });
    await handleGreetings(req, res);
    expect(res._getStatusCode()).toBe(405);
  });
});
