import {Entity} from "./entity.model";


export class User extends Entity
{
  username: string;
  password: string;
  email: string;
  roles: string[];
  token: string;


  enabled: boolean;
  credentialsNonExpired: boolean;
  accountNonExpired: boolean;
  accountNonLocked: boolean;


}
