type ClassData = {
  time: string;
  title: string;
  location: string;
};

export const weeklyClassesData: Record<string, ClassData[]> = {
  M: [
    {
      time: '8:00am',
      title: 'Yoga',
      location: 'Room 101',
    },
    {
      time: '10:00am',
      title: 'Pilates',
      location: 'Room 102',
    },
  ],
  T: [
    {
      time: '9:00am',
      title: 'Spin Class',
      location: 'Room 103',
    },
  ],
  W: [
    {
      time: '8:00am',
      title: 'Yoga',
      location: 'Room 101',
    },
  ],
  Th: [
    {
      time: '6:00pm',
      title: 'Zumba',
      location: 'Room 104',
    },
  ],
  F: [],
};
