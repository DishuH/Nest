import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user.service';
import { USerController } from './user.controller';
import { ProductController } from './product/product.controller';
import { OrderModule } from './order/order.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [OrderModule, InvoiceModule],
  controllers: [AppController , USerController, ProductController],
  providers: [AppService, UserService],
})
export class AppModule {}
