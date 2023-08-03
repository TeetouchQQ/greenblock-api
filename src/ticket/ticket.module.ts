import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import { TicketSchema } from '@/_schema/ticket.schema';



@Module({
  imports: [MongooseModule.forFeature([{ name: 'tickets', schema: TicketSchema }])],
  controllers: [TicketController],
  providers: [TicketService],
  exports: [TicketService],
})
export class TicketModule { }