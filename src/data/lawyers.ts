export interface Lawyer {
  id: number;
  name: string;
  role: string;
  specialties: string[];
  image: string;
  oab: string;
}

export const lawyers: Lawyer[] = [
  {
    id: 1,
    name: 'Dr. Joanisio Omena',
    role: 'CEO',
    specialties: ['Direito Criminal'],
    image: '/joanisioomena.jpeg',
    oab: 'OAB/AL 8.101'
  },
  {
    id: 2,
    name: 'Dra. Kyvia Maciel',
    role: 'Sócia',
    specialties: ['Direito Criminal'],
    image: '/kyviamaciel.jpeg',
    oab: 'OAB/AL 16.724'
  },
    {
    id: 3,
    name: 'Dr. Franscisco Sales',
    role: 'Sócio',
    specialties: ['Direito Criminal',],
    image: '/francisco.jpeg',
    oab: 'OAB/AL 20.204'
  },

];