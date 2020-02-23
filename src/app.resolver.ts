import {Resolver, Query} from '@nestjs/graphql';

@Resolver()
export class AppResolver{
    @Query(type => String)
    getHello(): string {
        return 'Hello World!';
    }
}