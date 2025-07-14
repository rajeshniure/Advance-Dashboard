import * as React from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import Avatar from '@mui/material/Avatar';
import TableDisplay from '../../../projectcomp/TableDisplay';
type Person = {
  avatar: string;
  name: string;
  position: string;
  age: number;
  office: string;
  salary: string;
  startdate: string;
};

const defaultData: Person[] = [
  {
    avatar: '/assets/avatar/Image-1.svg',
    name: 'Tiger Nixon',
    position: 'System Architect',
    age: 61,
    office: 'Tokyo',
    salary: '$170.750',
    startdate: '22/5/2009',
  },
  {
    avatar: '/assets/avatar/Image-2.svg',
    name: 'Garrett Winters',
    position: 'Accountant',
    age: 63,
    office: 'SanFrancisco',
    salary: '$170.750',
    startdate: '22/5/2009',
  },
  {
    avatar: '/assets/avatar/Image-3.svg',
    name: 'Tiger Nixon',
    position: 'System Architect',
    age: 61,
    office: 'Tokyo',
    salary: '$170.750',
    startdate: '22/5/2009',
  },
  {
    avatar: '/assets/avatar/Image-4.svg',
    name: 'Tiger Nixon',
    position: 'System Architect',
    age: 61,
    office: 'Tokyo',
    salary: '$170.750',
    startdate: '22/5/2009',
  },
  {
    avatar: '/assets/avatar/Image-5.svg',
    name: 'Tiger Nixon',
    position: 'System Architect',
    age: 61,
    office: 'Tokyo',
    salary: '$170.750',
    startdate: '22/5/2009',
  },
  {
    avatar: '/assets/avatar/Image-6.svg',
    name: 'Tiger Nixon',
    position: 'System Architect',
    age: 61,
    office: 'Tokyo',
    salary: '$170.750',
    startdate: '22/5/2009',
  },
  {
    avatar: '/assets/avatar/Image-7.svg',
    name: 'Tiger Nixon',
    position: 'System Architect',
    age: 61,
    office: 'Tokyo',
    salary: '$170.750',
    startdate: '22/5/2009',
  },
  {
    avatar: '/assets/avatar/Image-8.svg',
    name: 'Tiger Nixon',
    position: 'System Architect',
    age: 61,
    office: 'Tokyo',
    salary: '$170.750',
    startdate: '22/5/2009',
  },
  {
    avatar: '/assets/avatar/Image-9.svg',
    name: 'Tiger Nixon',
    position: 'System Architect',
    age: 61,
    office: 'Tokyo',
    salary: '$170.750',
    startdate: '22/5/2009',
  },
  {
    avatar: '/assets/avatar/Image-10.svg',
    name: 'Tiger Nixon',
    position: 'System Architect',
    age: 61,
    office: 'Tokyo',
    salary: '$170.750',
    startdate: '22/5/2009',
  },
  {
    avatar: '/assets/avatar/Image.svg',
    name: 'Tiger Nixon',
    position: 'System Architect',
    age: 61,
    office: 'Tokyo',
    salary: '$170.750',
    startdate: '22/5/2009',
  },
    {
    avatar: '/assets/avatar/Image-2.svg',
    name: 'Garrett Winters',
    position: 'Accountant',
    age: 63,
    office: 'SanFrancisco',
    salary: '$170.750',
    startdate: '22/5/2009',
  },
    {
    avatar: '/assets/avatar/Image-2.svg',
    name: 'Garrett Winters',
    position: 'Accountant',
    age: 63,
    office: 'SanFrancisco',
    salary: '$170.750',
    startdate: '22/5/2009',
  },
    {
    avatar: '/assets/avatar/Image-2.svg',
    name: 'Garrett Winters',
    position: 'Accountant',
    age: 63,
    office: 'SanFrancisco',
    salary: '$170.750',
    startdate: '22/5/2009',
  },
    {
    avatar: '/assets/avatar/Image-2.svg',
    name: 'Garrett Winters',
    position: 'Accountant',
    age: 63,
    office: 'SanFrancisco',
    salary: '$170.750',
    startdate: '22/5/2009',
  },
    {
    avatar: '/assets/avatar/Image-2.svg',
    name: 'Garrett Winters',
    position: 'Accountant',
    age: 63,
    office: 'SanFrancisco',
    salary: '$170.750',
    startdate: '22/5/2009',
  },
    {
    avatar: '/assets/avatar/Image-2.svg',
    name: 'Garrett Winters',
    position: 'Accountant',
    age: 63,
    office: 'SanFrancisco',
    salary: '$170.750',
    startdate: '22/5/2009',
  },
    {
    avatar: '/assets/avatar/Image-2.svg',
    name: 'Garrett Winters',
    position: 'Accountant',
    age: 63,
    office: 'SanFrancisco',
    salary: '$170.750',
    startdate: '22/5/2009',
  },
  
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor('name', {
    header: 'Name',
    cell: info => {
      const row = info.row.original;
      return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Avatar src={row.avatar} alt={row.name} sx={{ width: 30, height: 30 }} />
          {row.name}
        </div>
      );
    },
  }),
  columnHelper.accessor(row => row.position, {
    id: 'position',
    header: () => 'Position',
  }),
  columnHelper.accessor('age', {
    header: () => 'Age',
  }),
  columnHelper.accessor('office', {
    header: () => 'Office',
  }),
  columnHelper.accessor('salary', {
    header: () => 'Salary',
  }),
  columnHelper.accessor('startdate', {
    header: () => 'Start Date',
  }),
];

function Timeline() {
  const [data, _setData] = React.useState(() => [...defaultData]);


  return (
      <TableDisplay
      data={data}
      columns={columns}
    />

  );
}

export default Timeline;