import { Education } from '../types/education';

export const educationData: Education[] = [
  {
    year: '2018-2022',
    degree: 'Bachelor of Technology',
    institution: 'Your University Name',
    details: 'Computer Science & Engineering',
    achievements: ['CGPA: 8.5', 'Class Representative', 'Technical Club Lead']
  }
  // Add more education entries here
];


export abstract class DataClass {         
  public static isrefresh = true;
}
