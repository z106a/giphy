import { Grid, Input, Pagination, Paper } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';

import { GET } from './app/api';
import { API_KEY, PAGE_LIMIT } from './app/consts';
import { IGyphy, IGyphyResponse } from './app/types';
import MainPage from './pages/MainPage';

function App() {
  const [search, setSearch] = useState('kitty');
  const [data, setData] = useState<IGyphy[]>([]);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  const onPageChange = (_e: ChangeEvent<unknown>, page: number) => setOffset(state => (page * PAGE_LIMIT) - PAGE_LIMIT)

  useEffect(() => {
    const getData =  async () => {
      try {
        const res = (await GET(
          `search?api_key=${API_KEY}&q=${search}&limit=${PAGE_LIMIT}&offset=${offset}&rating=g&lang=en`
        )) as IGyphyResponse;
        setData(res.data);
        setTotal(res.pagination.total_count);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, [offset, search]);

  return (
    <Grid
      container
      padding={2}
      maxHeight="100vh"
      height="calc(100vh - 1px)"
      direction="column"
      wrap="nowrap"
      rowGap={2}
    >
      <Input placeholder="Search" onChange={onSearchChange} value={search} />
      <Grid container item direction="column" component={Paper} flex={1} padding={2} xs overflow="scroll">
        <MainPage data={data} />
      </Grid>
      <Pagination count={Math.ceil(total / PAGE_LIMIT) || 1} onChange={onPageChange} />
    </Grid>
  );
}

export default App;
