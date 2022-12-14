import { Controller, Get, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('/')
  getAllOrders() {
    return this.ordersService.getAllOrders();
  }

  @Get('/:id')
  getOrderById(@Param('id') id: string) {
    return this.ordersService.getOrderById(parseInt(id));
  }
}
