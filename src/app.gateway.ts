import {WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect, ConnectedSocket} from '@nestjs/websockets';

import { emit } from 'cluster';
import { Socket } from 'socket.io';

@WebSocketGateway(3001, {namespace: 'app'})
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
    handleDisconnect(client: Socket, ...args: any) {
        console.log('Client connect');
    }

    handleConnection(client: any, ...args: any[]) {
        console.log('Client disconnected');
    }
    @SubscribeMessage('events')
    handleEvent(@MessageBody() data: string) {
        console.log(data);
        return 'Server get it!';
    }
    @SubscribeMessage('message')
    handleMessage( @MessageBody() data: string, @ConnectedSocket() client: Socket) {
        client.broadcast.emit('message', `${client.id}: ${data}`);
        return data;
    }
}
