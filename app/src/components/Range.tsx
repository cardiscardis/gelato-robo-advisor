import * as React from 'react';
import { Range } from 'react-range';

import client from './services/clientService';

type MyProps = {
    setData: (data: any) => void;
};
type MyState = {
values: number[];
};

export default function SuperSimple({setData}: any) {
  const [ values, setValues ] = React.useState<number[]>([5])

const getData = async () => {
    await client.get('/api/getData')
    .then((response) => {
        if (response.data) {
            const newData: any = response.data.find((d: any, index: number) => d.Risk_Factor === values[0].toString())
            console.log('newData-Range', newData)
            setData(newData)
        }
    })
    .catch((error) => console.log(error))
}

  React.useEffect(() => {
    getData()
  }, [values])


  
    return (
        <div className='ml-20 mb-2 mr-4'>
      <Range
        step={1}
        min={0}
        max={10}
        values={values}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              background: 'linear-gradient(to right, blue, pink, indigo)'
            }}
          >
            {children}
          </div>
        )}
        onFinalChange={(values: number[]) => getData()}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '42px',
              width: '42px',
              backgroundColor: 'red',
              borderRadius: '50%'
            }}
          />
        )}
      />
      </div>
    );
  
}