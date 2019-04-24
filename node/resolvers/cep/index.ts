import { Http } from "../../helpers";

export const getUserCep = async (_: any, args: any, ctx: Context) => {
  try {
    const { data: cep } = await Http.getCepUser(ctx.vtex.authToken, args.cep);

    return cep;
  } catch (error) {
    console.log(error);
    return error;
  }
};
