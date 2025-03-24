import React from 'react';

type Todos = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function getData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('데이터 가져오기 실패:', error);

    // 에러 발생 시 빈 배열 반환 또는 notFound 처리
    return [];
  }
}

const Page = async () => {
  const data = await getData();

  return (
    <div>
      <ul>
        {data.map((d: Todos) => {
          return <li key={d.id}>{d.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Page;
