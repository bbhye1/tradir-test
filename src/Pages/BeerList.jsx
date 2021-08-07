import { useState } from 'react';

import { useSelector } from 'react-redux';

import MaterialTable from 'material-table';

import {
  AddBox, ArrowDownward, Search, ViewColumn,
  ChevronLeft, ChevronRight, FirstPage, LastPage,
  Clear,
} from '@material-ui/icons';

import { get } from '../utils/utils';

const BeerList = () => {
  const beers = useSelector(get('beers'));

  const [filterRange, setRange] = useState({
    start: 0,
    end: 100,
  });

  const data = beers
    .map(({ name, abv }) => ({ name, abv }))
    .filter(({ abv }) => abv >= filterRange.start && abv < filterRange.end);

  const handleChange = (e) => {
    const [start, end] = e.target.value.split('-');
    setRange({
      start,
      end,
    });
  };
  return ((
    <>
      <MaterialTable
        title="Beers"
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Abv', field: 'abv' },
        ]}
        data={data}
        icons={
          {
            Add: () => (<AddBox />),
            SortArrow: () => (<ArrowDownward />),
            Search: () => (<Search />),
            ViewColumn: () => (<ViewColumn />),
            FirstPage: () => (<FirstPage />),
            LastPage: () => (<LastPage />),
            PreviousPage: () => (<ChevronLeft />),
            NextPage: () => (<ChevronRight />),
            ResetSearch: () => (<Clear />),
          }
        }
        localization={{
          pagination: {
            labelDisplayedRows: '{from}-{to} of {count}',
          },
          toolbar: {
            nRowsSelected: '{0} row(s) selected',
          },
          header: {
            actions: 'Actions',
          },
          body: {
            emptyDataSourceMessage: 'No records to display',
            filterRow: {
              filterTooltip: 'Filter',
            },
          },
        }}
      />
      <select onChange={handleChange}>
        <option value="0-100">도수 선택</option>
        <option value="4-5">4-5</option>
        <option value="5-6">5-6</option>
        <option value="6-7">6-7</option>
        <option value="7-8">7-8</option>
        <option value="8-9">8-9</option>
        <option value="9-100">9~</option>
      </select>
    </>
  ));
};

export default BeerList;
