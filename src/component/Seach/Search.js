import Logo from "../../logo.svg"
import {UilSearch} from "@iconscout/react-unicons";
import "./Search.css"

const Search = () => {
    return (
        <div className={"Search"}>
            <img src={Logo} alt={'logo'} style={{width:"3rem"}}/>
            <div className={'SearchInput'}>
                <input type={'text'} placeholder={'#Explore'}/>
                <div className={'s_icon'}>
                    <UilSearch/>
                </div>
            </div>
        </div>
    )
}

export default Search
