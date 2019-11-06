import { CommonRequest, CommonResponse } from "servie/dist/common";

export function resolve(prefix: string) {
  return function resolveMiddleware<
    T extends CommonRequest,
    U extends CommonResponse
  >(req: T, next: () => Promise<U>): Promise<U> {
    req.url = new URL(req.url, prefix).href;

    return next();
  };
}
