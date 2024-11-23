import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create Workers
  const worker1 = await prisma.worker.create({
    data: {
      phone_number: "1234567890",
      name: "John Doe",
    },
  });

  const worker2 = await prisma.worker.create({
    data: {
      phone_number: "0987654321",
      name: "Jane Doe",
    },
  });

  // Create Sites
  const site1 = await prisma.site.create({
    data: {
      name: "Main Office",
      location: "Downtown",
    },
  });

  const site2 = await prisma.site.create({
    data: {
      name: "Construction Site A",
      location: "Uptown",
    },
  });

  // Create Safety Instructions
  const instruction1 = await prisma.safetyInstruction.create({
    data: {
      instructionText: "Wear a hard hat at all times.",
    },
  });

  const instruction2 = await prisma.safetyInstruction.create({
    data: {
      instructionText: "Use safety harnesses for elevated work.",
    },
  });

  // Create Attendance Records
  const attendance1 = await prisma.attendanceRecord.create({
    data: {
      worker: { connect: { id: worker1.id } },
      site: { connect: { id: site1.id } },
      agreedInstructions: {
        create: [
          {
            safetyInstruction: { connect: { id: instruction1.id } },
          },
          {
            safetyInstruction: { connect: { id: instruction2.id } },
          },
        ],
      },
    },
  });

  const attendance2 = await prisma.attendanceRecord.create({
    data: {
      worker: { connect: { id: worker2.id } },
      site: { connect: { id: site2.id } },
      agreedInstructions: {
        create: [
          {
            safetyInstruction: { connect: { id: instruction1.id } },
          },
        ],
      },
    },
  });

  console.log("Test data seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
