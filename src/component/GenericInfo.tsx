import React from 'react';

interface GenericInfoProps<T> {
  data: T;
  title: string;
}

export function GenericInfo<T>(props: GenericInfoProps<T>) {
  const skipNames = ['url', 'created', 'updated', 'films', 'residents', 'edited'];

  const simple = Object.keys(props.data)
    .filter((x) => {
      return skipNames.indexOf(x) === -1;
    })
    .map((key) => (
      <p>
        {key}: {props.data[key as keyof T]}
      </p>
    ));

  return (
    <>
      <h3>{props.title}</h3>
      {simple}
    </>
  );
}
