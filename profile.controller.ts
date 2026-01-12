import { Controller, Get, Patch, Body, Param, UseGuards, Req } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserRole } from '@prisma/client';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMe(@Req() req: any) {
    return this.profileService.findMe(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('me')
  updateMe(@Req() req: any, @Body() updateProfileDto: any) {
    return this.profileService.update(req.user.userId, updateProfileDto);
  }

  @Get('role/:role')
  findByRole(@Param('role') role: UserRole) {
    return this.profileService.findByRole(role);
  }
}
