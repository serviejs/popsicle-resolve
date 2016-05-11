declare function resolve (prefix: string): (req: any, next: () => any) => any;

export = resolve;