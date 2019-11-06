import { Request, Response } from "servie/dist/node";
import { resolve } from "./index";

describe("popsicle resolve", () => {
  const done = async () => new Response();

  it("should resolve absolue paths", async () => {
    const req = new Request("/users");

    await resolve("http://example.com")(req, done);

    expect(req.url).toEqual("http://example.com/users");
  });

  it("should resolve relative paths", async () => {
    const req = new Request("123");

    await resolve("http://example.com/users/456")(req, done);

    expect(req.url).toEqual("http://example.com/users/123");
  });

  it("should resolve absolute paths to base", async () => {
    const req = new Request("/users");

    await resolve("http://example.com/sub/path")(req, done);

    expect(req.url).toEqual("http://example.com/users");
  });

  it("should resolve absolute urls", async () => {
    const req = new Request("http://foo.com/users");

    await resolve("http://example.com")(req, done);

    expect(req.url).toEqual("http://foo.com/users");
  });
});
