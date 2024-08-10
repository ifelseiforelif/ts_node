import { Request } from "express";

//сам Request<{},{},{},{}>
type TypeQuery = {
  title: string;
};
export interface IRequestWithQuery extends Pick<Request, "query"> {
  query: TypeQuery;
}

type TypeBody = {
  name: string;
  email: string;
};

export interface IRequestWithBody extends Pick<Request, "body"> {
  body: TypeBody;
}

type TypeParams = {
  id: string;
};
export interface IRequestWithParams extends Pick<Request, "params"> {
  params: TypeParams;
}
