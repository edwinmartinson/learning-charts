import { faker } from "@faker-js/faker";

type DataPointv1 = {
  id: string;
  date: string;
  sent: number;
  failed: number;
  blocked: number;
};

type DataPointv2 = {
  status: "sent" | "failed" | "blocked";
  count: number;
  fill: string;
};

export function genDataSetv1(): DataPointv1[] {
  const dataSet: DataPointv1[] = [];

  for (let index = 1; index <= 7; index++) {
    const date = new Date(`2026-01-${index}`).toISOString();

    dataSet.push({
      id: faker.string.nanoid(8),
      date,
      sent: faker.number.int({ min: 100, max: 500 }),
      failed: faker.number.int({ min: 0, max: 200 }),
      blocked: faker.number.int({ min: 0, max: 200 }),
    });
  }

  return dataSet;
}

export function genDataSetv2(): DataPointv2[] {
  return [
    {
      status: "sent",
      count: faker.number.int({ min: 100, max: 500 }),
      fill: "var(--color-sent)",
    },
    {
      status: "failed",
      count: faker.number.int({ min: 0, max: 200 }),
      fill: "var(--color-failed)",
    },
    {
      status: "blocked",
      count: faker.number.int({ min: 0, max: 200 }),
      fill: "var(--color-blocked)",
    },
  ];
}

export function genDataSetv3(): DataPointv2[] {
  return [
    {
      status: "sent",
      count: faker.number.int({ min: 100, max: 250 }),
      fill: "var(--color-sent)",
    },
  ];
}
