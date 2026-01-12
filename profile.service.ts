import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async findMe(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        projects: true,
        matches: true,
      },
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(userId: string, data: any) {
    return this.prisma.user.update({
      where: { id: userId },
      data: {
        name: data.name,
        role: data.role,
        skills: data.skills,
      },
    });
  }

  async findByRole(role: any) {
    return this.prisma.user.findMany({
      where: { role },
      select: {
        id: true,
        name: true,
        role: true,
        skills: true,
        reputation: true,
      },
    });
  }
}
