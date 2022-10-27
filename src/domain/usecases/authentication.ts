import { AccountModel } from "domain/models/account-models"

type AuthenticationParams = {
  email: string,
  password: string
}

export interface Authentication {
  auth(params: AuthenticationParams): Promise<AccountModel>
}