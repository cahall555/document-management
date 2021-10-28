import 'reflect-metadata'
import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType()
export class Accounts {
  @Field((type) => ID)
  id: number

  @Field()
  name: string

  @Field()
  type: string

  @Field((type) => Date)
  createdAt: Date

  @Field((type) => Date)
  updatedAt: Date

}