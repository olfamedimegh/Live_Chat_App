/* eslint-disable prettier/prettier */
import { ApolloError } from 'apollo-server-express';
import {
    ArgumentsHost,
    Catch,
    BadRequestException,
} from '@nestjs/common';

import { GqlExceptionFilter } from '@nestjs/graphql';

@Catch(BadRequestException)
export class GraphQLErrorFilter implements GqlExceptionFilter {
    catch(exception: BadRequestException, host: ArgumentsHost) {
        const response = exception.getResponse() as any;
        console.log("here ! ");
        if(typeof response === 'object') {
            throw new ApolloError('Validation error', 'VALIDATION_ERROR', response);
        } else {
            throw new ApolloError('Bad request', 'BAD_REQUEST');
        }
    }
}