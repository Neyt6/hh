//import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import sort from './sort.svg'
import filter from './filter.svg'

import "./SearchBlock.css"

const SearchBlock = () => {

    return (
        <div className='SearchBlock'>
            <div className='inputBlock'>
                <input />
                <Button id="serchButton">==</Button>
            </div>
            
            <div className="buttonsBlock">
            
               <img src={sort} alt=''/><Button id="sortButton" >Сортировка</Button>
               <img src={filter} alt=''/> <Button id="filterButton">Фильтр</Button>
                <Button id="cancelButton">Отменить фильтры</Button>
            </div>
        </div>
    )
}

export default SearchBlock