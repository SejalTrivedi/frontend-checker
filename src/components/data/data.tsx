function createStoryData(
  name: string,
  adjudication: string,
  status: string,
  date: string,
  location: string
) {
  return { name, adjudication, status, date, location };
}

export const demoTableStoryRows = [
  createStoryData(
    'Ronak',
    'Pending',
    'Verified',
    Date().toString(),
    'Rajkot'
  ),
  createStoryData(
    'Abhi',
    'Completed',
    'Re-check',
    Date().toString(),
    'Rajkot'
  ),
  createStoryData(
    'Ashwin',
    'Pending',
    'Verified',
    Date().toString(),
    'Rajkot'
  ),
  createStoryData(
    'krishna',
    'Completed',
    'Re-check',
    Date().toString(),
    'Rajkot'
  ),
  createStoryData(
    'Dhaval',
    'Pending',
    'Re-check',
    Date().toString(),
    'Rajkot'
  ),
];
