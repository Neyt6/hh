import { Button } from '@mui/material';
import head1 from "./Vector1.svg"

import "./Header.css"

const Header = () => {
    return (

        <div className="headerBlock">
            <img src={head1} className="headerPic" alt="headerPic" />
            <div className='headerMenu'>
                <div className='headerMenuButtons'>
                    <Button>Вакансии</Button>
                    <Button>Профессии</Button>
                    <Button>Компании</Button>
                    <Button>Блог</Button>
                    <Button>Работодателю</Button>
                    <Button>Яз</Button>
                </div>
                <div className='profileMenu'>
                    <Button>Создать резюме</Button>
                    <Button>Вход</Button>
                </div>
            </div>
        </div>
    )
}

export default Header