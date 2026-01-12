import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  async create(data: any, ownerId: string) {
    return this.prisma.project.create({
      data: {
        problem: data.problem,
        solution: data.solution,
        workflow: data.workflow,
        stage: data.stage || 'IDEA',
        needs: data.needs || [],
        owner: { connect: { id: ownerId } },
      },
    });
  }

  async findAll() {
    return this.prisma.project.findMany({
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    const project = await this.prisma.project.findUnique({
      where: { id },
      include: {
        owner: true,
        matches: true,
      },
    });
    if (!project) throw new NotFoundException(`Project with ID ${id} not found`);
    return project;
  }

  async remove(id: string) {
    return this.prisma.project.delete({ where: { id } });
  }
}
