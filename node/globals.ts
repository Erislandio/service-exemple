import { ServiceContext } from "@vtex/api";
import { Clients } from "./clients";

declare global {
  type Context = ServiceContext<Clients, State>;
  // type graphql = GraphQLOptions<ClientsT, StateT, CustomT>;

  interface State {
    code: number;
  }
}
