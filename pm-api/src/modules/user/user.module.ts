import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ClinicContext } from 'src/common/context/clinic-context.provider';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { AuditInterceptor } from '../audit/audit.interceptor';
import { AuditModule } from '../audit/audit.module';

@Module({
  imports: [HttpModule, AuditModule],
  controllers: [UserController],
  providers: [UserRepository, UserService, AuditInterceptor, ClinicContext],
  exports: [UserService, UserRepository],
})
export class UserModule {}